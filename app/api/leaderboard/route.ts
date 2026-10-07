import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import {
  ensureLeaderboardSchema,
  getLeaderboardSql,
  getRanking,
  hashVisitorId,
  isValidMode,
  isValidPieceCount,
  isValidVisitorId,
} from '../../lib/leaderboard';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
}

function cleanText(value: unknown, maximum: number) {
  return typeof value === 'string' ? value.trim().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, maximum) : '';
}

export async function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get('mode');
  const pieceCount = Number(request.nextUrl.searchParams.get('pieces'));
  const visitorId = request.nextUrl.searchParams.get('visitor') ?? '';
  const photoId = cleanText(request.nextUrl.searchParams.get('photo'), 120);
  if (!isValidMode(mode) || !isValidPieceCount(pieceCount)) return json({ error: 'Invalid leaderboard filter.' }, 400);

  try {
    await ensureLeaderboardSchema();
    const currentVisitorId = isValidVisitorId(visitorId) ? hashVisitorId(visitorId) : '';
    return json(await getRanking(mode, pieceCount, currentVisitorId, photoId));
  } catch (error) {
    console.error('Leaderboard read failed', error instanceof Error ? error.message : 'unknown error');
    return json({ error: 'Leaderboard is temporarily unavailable.' }, 503);
  }
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  if (!isValidVisitorId(body.visitorId)) return json({ error: 'Invalid visitor.' }, 400);
  const visitorId = hashVisitorId(body.visitorId);

  try {
    await ensureLeaderboardSchema();
    const sql = getLeaderboardSql();

    if (body.action === 'start') {
      if (!isValidMode(body.mode) || !isValidPieceCount(body.pieceCount)) return json({ error: 'Invalid puzzle settings.' }, 400);
      const photoId = cleanText(body.photoId, 120);
      const photoLabel = cleanText(body.photoLabel, 160);
      const locale = body.locale === 'en' ? 'en' : 'ko';
      if (!photoId || !photoLabel) return json({ error: 'Invalid photo.' }, 400);

      const runId = randomUUID();
      const rows = await sql`
        INSERT INTO puzzle_runs (id, visitor_id, locale, mode, piece_count, photo_id, photo_label)
        SELECT ${runId}, ${visitorId}, ${locale}, ${body.mode}, ${body.pieceCount}, ${photoId}, ${photoLabel}
        WHERE (
          SELECT COUNT(*) FROM puzzle_runs
          WHERE visitor_id = ${visitorId} AND started_at > now() - interval '1 minute'
        ) < 8
        RETURNING id, started_at
      ` as Array<{ id: string; started_at: string }>;
      if (!rows.length) return json({ error: 'Please wait before starting again.' }, 429);

      await sql`
        DELETE FROM puzzle_runs
        WHERE (completed_at IS NULL AND started_at < now() - interval '1 day')
           OR (completed_at < now() - interval '1 year')
      `;
      return json({ runId: rows[0].id, startedAt: rows[0].started_at });
    }

    if (body.action === 'complete') {
      const runId = cleanText(body.runId, 36);
      const moves = Number(body.moves);
      if (!/^[0-9a-f-]{36}$/i.test(runId) || !Number.isInteger(moves) || moves < 1 || moves > 100000) {
        return json({ error: 'Invalid completion.' }, 400);
      }

      const rows = await sql`
        UPDATE puzzle_runs
        SET
          completed_at = clock_timestamp(),
          elapsed_ms = round(extract(epoch FROM (clock_timestamp() - started_at)) * 1000),
          moves = ${moves}
        WHERE id = ${runId}
          AND visitor_id = ${visitorId}
          AND completed_at IS NULL
          AND started_at > now() - interval '1 day'
        RETURNING mode, piece_count, photo_id, elapsed_ms
      ` as Array<{ mode: 'classic' | 'shape'; piece_count: number; photo_id: string; elapsed_ms: number | string }>;
      if (!rows.length) return json({ error: 'This puzzle run is no longer valid.' }, 409);

      const elapsedMs = Number(rows[0].elapsed_ms);
      if (elapsedMs < 2000 || elapsedMs > 86400000) {
        await sql`DELETE FROM puzzle_runs WHERE id = ${runId}`;
        return json({ error: 'Completion time is outside the valid range.' }, 400);
      }

      const ranking = await getRanking(rows[0].mode, Number(rows[0].piece_count), visitorId, rows[0].photo_id);
      return json({ ...ranking, submittedElapsedMs: elapsedMs });
    }

    return json({ error: 'Invalid action.' }, 400);
  } catch (error) {
    console.error('Leaderboard write failed', error instanceof Error ? error.message : 'unknown error');
    return json({ error: 'Leaderboard is temporarily unavailable.' }, 503);
  }
}

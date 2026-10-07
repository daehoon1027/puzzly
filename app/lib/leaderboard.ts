import { createHash } from 'node:crypto';
import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

export const leaderboardPieceCounts = [12, 20, 30, 48, 80, 120, 200, 400] as const;
export type LeaderboardMode = 'classic' | 'shape';

let sqlClient: NeonQueryFunction<false, false> | null = null;
let schemaPromise: Promise<void> | null = null;

export function getLeaderboardSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error('DATABASE_URL is not configured');
  sqlClient ??= neon(databaseUrl);
  return sqlClient;
}

export function hashVisitorId(visitorId: string) {
  return createHash('sha256').update(visitorId).digest('hex');
}

export function isValidVisitorId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-zA-Z0-9-]{16,100}$/.test(value);
}

export function isValidMode(value: unknown): value is LeaderboardMode {
  return value === 'classic' || value === 'shape';
}

export function isValidPieceCount(value: unknown): value is number {
  return typeof value === 'number' && leaderboardPieceCounts.includes(value as (typeof leaderboardPieceCounts)[number]);
}

export async function ensureLeaderboardSchema() {
  if (!schemaPromise) {
    schemaPromise = (async () => {
      const sql = getLeaderboardSql();
      await sql`
        CREATE TABLE IF NOT EXISTS puzzle_runs (
          id uuid PRIMARY KEY,
          visitor_id varchar(64) NOT NULL,
          locale varchar(2) NOT NULL DEFAULT 'ko',
          mode varchar(12) NOT NULL CHECK (mode IN ('classic', 'shape')),
          piece_count integer NOT NULL CHECK (piece_count IN (12, 20, 30, 48, 80, 120, 200, 400)),
          photo_id varchar(120) NOT NULL,
          photo_label varchar(160) NOT NULL,
          started_at timestamptz NOT NULL DEFAULT clock_timestamp(),
          completed_at timestamptz,
          elapsed_ms bigint,
          moves integer,
          created_at timestamptz NOT NULL DEFAULT now()
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS puzzle_runs_ranking_idx
        ON puzzle_runs (mode, piece_count, visitor_id, elapsed_ms)
        WHERE completed_at IS NOT NULL
      `;
    })().catch((error) => {
      schemaPromise = null;
      throw error;
    });
  }
  await schemaPromise;
}

type RankingRow = {
  rank: number | string;
  visitor_code: string;
  elapsed_ms: number | string;
  moves: number | string;
  photo_label: string;
  completed_at: string;
  total: number | string;
  is_current: boolean;
};

export type LeaderboardEntry = {
  rank: number;
  visitorCode: string;
  elapsedMs: number;
  moves: number;
  photoLabel: string;
  completedAt: string;
  isCurrent: boolean;
};

export async function getRanking(mode: LeaderboardMode, pieceCount: number, currentVisitorId = '', photoId = '') {
  const sql = getLeaderboardSql();
  const rows = await sql`
    WITH best AS (
      SELECT DISTINCT ON (visitor_id)
        visitor_id, elapsed_ms, moves, photo_label, completed_at
      FROM puzzle_runs
      WHERE mode = ${mode}
        AND piece_count = ${pieceCount}
        AND (${photoId} = '' OR photo_id = ${photoId})
        AND completed_at IS NOT NULL
        AND elapsed_ms BETWEEN 2000 AND 86400000
      ORDER BY visitor_id, elapsed_ms ASC, completed_at ASC
    ), ranked AS (
      SELECT
        RANK() OVER (ORDER BY elapsed_ms ASC, completed_at ASC) AS rank,
        upper(left(visitor_id, 4)) AS visitor_code,
        visitor_id,
        elapsed_ms,
        moves,
        photo_label,
        completed_at,
        COUNT(*) OVER () AS total
      FROM best
    ), top_entries AS (
      SELECT * FROM ranked ORDER BY rank ASC LIMIT 10
    )
    SELECT
      rank, visitor_code, elapsed_ms, moves, photo_label, completed_at, total,
      (visitor_id = ${currentVisitorId}) AS is_current
    FROM top_entries
    UNION ALL
    SELECT
      rank, visitor_code, elapsed_ms, moves, photo_label, completed_at, total, true AS is_current
    FROM ranked
    WHERE visitor_id = ${currentVisitorId}
      AND NOT EXISTS (SELECT 1 FROM top_entries WHERE visitor_id = ${currentVisitorId})
    ORDER BY rank ASC
  ` as RankingRow[];

  const mapped: LeaderboardEntry[] = rows.map((row) => ({
    rank: Number(row.rank),
    visitorCode: row.visitor_code,
    elapsedMs: Number(row.elapsed_ms),
    moves: Number(row.moves),
    photoLabel: row.photo_label,
    completedAt: row.completed_at,
    isCurrent: row.is_current,
  }));
  const current = mapped.find((entry) => entry.isCurrent) ?? null;
  return {
    entries: mapped.filter((entry) => entry.rank <= 10),
    current,
    total: rows.length ? Number(rows[0].total) : 0,
  };
}

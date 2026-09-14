'use client';
import { useState } from 'react';
import type { Language } from '../content/collections';

export function TileLesson({ locale, imageUrl }: { locale: Language; imageUrl: string }) {
  const [tiles, setTiles] = useState(() => [1, 0, ...Array.from({ length: 18 }, (_, i) => i + 2)]);
  const [picked, setPicked] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const en = locale === 'en';
  const complete = tiles.every((tile, i) => tile === i);
  function select(index: number) {
    if (complete) return;
    if (picked === index) { setPicked(null); return; }
    if (picked === null) { setPicked(index); return; }
    const next = [...tiles];
    [next[picked], next[index]] = [next[index], next[picked]];
    setTiles(next); setPicked(null); setMoves(moves + 1);
  }
  return <section className="tile-lesson"><h2>{en ? 'Try one swap now' : '한 번의 교환을 직접 해보세요'}</h2><p>{en ? 'The first two pieces are reversed. Select position 1, then position 2. Numbers label positions for this lesson only.' : '처음 두 조각의 자리를 바꿔 두었습니다. 1번 자리를 누르고 2번 자리를 누르세요. 숫자는 이 실습에서만 위치를 안내합니다.'}</p>
    <div className="lesson-board" role="group" aria-label={en ? '20-piece swap exercise' : '20피스 교환 실습'}>{tiles.map((tile, i) => <button key={i} aria-label={en ? `Position ${i + 1}` : `${i + 1}번 자리`} aria-pressed={picked === i} disabled={complete} onClick={() => select(i)} className={picked === i ? 'picked' : ''} style={{ backgroundImage: `url("${imageUrl}")`, backgroundSize: '500% 400%', backgroundPosition: `${(tile % 5) * 25}% ${Math.floor(tile / 5) * 100 / 3}%` }}><span>{i + 1}</span></button>)}</div>
    <p role="status">{complete ? (en ? `Complete in ${moves} swap(s). You are ready for a shuffled puzzle.` : `${moves}회 교환으로 완성했습니다. 이제 전체가 섞인 퍼즐에 도전해보세요.`) : (en ? `${moves} swap(s) · ${picked === null ? 'Select a tile.' : `Position ${picked + 1} selected. Choose its swap partner.`}` : `이동 ${moves}회 · ${picked === null ? '조각을 선택하세요.' : `${picked + 1}번 자리 선택 중. 교환할 다른 자리를 누르세요.`}`)}</p>
    <button className="lesson-reset" onClick={() => { setTiles([1, 0, ...Array.from({ length: 18 }, (_, i) => i + 2)]); setPicked(null); setMoves(0); }}>{en ? 'Reset exercise' : '실습 다시 하기'}</button>
  </section>;
}

'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import { KakaoAd } from './components/kakao-ad';

type Photo = { id: string; url: string; label: string; credit: string; sourceUrl?: string; photographerUrl?: string };
type PuzzleMode = 'classic' | 'shape';

const photoSets: Record<string, Photo[]> = {
  nature: [
    { id: 'n1', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85', label: '안개 낀 설산', credit: 'Unsplash' },
    { id: 'n2', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', label: '숲속의 오두막', credit: 'Unsplash' },
    { id: 'n3', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85', label: '초록빛 숲', credit: 'Unsplash' },
    { id: 'n4', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85', label: '호수와 산', credit: 'Unsplash' },
  ],
  ocean: [
    { id: 'o1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85', label: '에메랄드빛 해변', credit: 'Unsplash' },
    { id: 'o2', url: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1200&q=85', label: '파도와 바위', credit: 'Unsplash' },
    { id: 'o3', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85', label: '바다 절벽', credit: 'Unsplash' },
    { id: 'o4', url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85', label: '열대의 휴식', credit: 'Unsplash' },
  ],
  animal: [
    { id: 'a1', url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85', label: '숲속의 여우', credit: 'Unsplash' },
    { id: 'a2', url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85', label: '초원의 코끼리', credit: 'Unsplash' },
    { id: 'a3', url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85', label: '호기심 많은 고양이', credit: 'Unsplash' },
    { id: 'a4', url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=85', label: '들판의 강아지', credit: 'Unsplash' },
  ],
  city: [
    { id: 'c1', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85', label: '도시의 교차로', credit: 'Unsplash' },
    { id: 'c2', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85', label: '화려한 스카이라인', credit: 'Unsplash' },
    { id: 'c3', url: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=85', label: '도심의 빌딩', credit: 'Unsplash' },
    { id: 'c4', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85', label: '밤의 도시', credit: 'Unsplash' },
  ],
  food: [
    { id: 'f1', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85', label: '풍성한 테이블', credit: 'Unsplash' },
    { id: 'f2', url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85', label: '알록달록 샐러드', credit: 'Unsplash' },
    { id: 'f3', url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85', label: '달콤한 케이크', credit: 'Unsplash' },
    { id: 'f4', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85', label: '갓 구운 피자', credit: 'Unsplash' },
  ],
};

const difficulties = [12, 20, 30, 48, 80, 120, 200, 400];

const curatedPhotos = Object.values(photoSets).flat();

function withUnsplashCredit(photos: Photo[]) {
  return photos.map((photo) => ({ ...photo, credit: 'Photo from Unsplash', sourceUrl: 'https://unsplash.com' }));
}

function findPhotos(keyword: string) {
  const word = keyword.trim().toLowerCase();
  let seed = 0;
  for (const character of word) seed = (seed * 31 + character.charCodeAt(0)) >>> 0;

  let preferred: Photo[] = [];
  if (/바다|해변|여름|파도|섬|휴가|ocean|sea|beach/.test(word)) preferred = photoSets.ocean;
  else if (/동물|고양|강아|여우|코끼|새|말|사자|animal|cat|dog/.test(word)) preferred = photoSets.animal;
  else if (/도시|서울|야경|건물|거리|자동차|건축|city|street|night/.test(word)) preferred = photoSets.city;
  else if (/음식|요리|케이크|피자|커피|디저트|food|cake|pizza/.test(word)) preferred = photoSets.food;
  else if (/산|숲|자연|알프스|꽃|정원|봄|가을|nature|forest|mountain/.test(word) || !word) preferred = photoSets.nature;

  const remaining = curatedPhotos.filter((photo) => !preferred.some((item) => item.id === photo.id));
  const start = remaining.length ? seed % remaining.length : 0;
  const rotated = [...remaining.slice(start), ...remaining.slice(0, start)];
  return withUnsplashCredit([...preferred, ...rotated].slice(0, 10));
}

function shuffled(count: number) {
  const items = Array.from({ length: count }, (_, index) => index);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  if (items.every((item, index) => item === index) && count > 1) [items[0], items[1]] = [items[1], items[0]];
  return items;
}

function gridDimensions(count: number) {
  let bestRows = 1;
  let bestColumns = count;
  let bestDifference = Number.POSITIVE_INFINITY;
  for (let rows = 1; rows <= Math.sqrt(count); rows++) {
    if (count % rows !== 0) continue;
    const columns = count / rows;
    const difference = Math.abs(columns / rows - 4 / 3);
    if (difference < bestDifference) {
      bestRows = rows;
      bestColumns = columns;
      bestDifference = difference;
    }
  }
  return { rows: bestRows, columns: bestColumns };
}

type EdgeProfile = { sign: number; offset: number; size: number } | null;

function boundaryProfile(axis: 'horizontal' | 'vertical', row: number, column: number): Exclude<EdgeProfile, null> {
  let seed = (((row + 11) * 73856093) ^ ((column + 17) * 19349663) ^ (axis === 'vertical' ? 83492791 : 2654435761)) >>> 0;
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return {
    sign: seed % 2 === 0 ? 1 : -1,
    offset: (((seed >>> 3) % 21) - 10) / 100,
    size: 0.13 + ((seed >>> 9) % 7) / 100,
  };
}

function pieceEdges(row: number, column: number, rows: number, columns: number) {
  const topSource = row === 0 ? null : boundaryProfile('horizontal', row - 1, column);
  const leftSource = column === 0 ? null : boundaryProfile('vertical', row, column - 1);
  return {
    top: topSource ? { ...topSource, sign: -topSource.sign } : null,
    right: column === columns - 1 ? null : boundaryProfile('vertical', row, column),
    bottom: row === rows - 1 ? null : boundaryProfile('horizontal', row, column),
    left: leftSource ? { ...leftSource, sign: -leftSource.sign } : null,
  };
}

function piecePath(piece: number, rows: number, columns: number) {
  const row = Math.floor(piece / columns);
  const column = piece % columns;
  const width = 100;
  const height = (75 * columns) / rows;
  const pad = 0;
  const edges = pieceEdges(row, column, rows, columns);
  const commands = [`M ${pad} ${pad}`];

  const horizontal = (edge: EdgeProfile, start: number, end: number, y: number, direction: 1 | -1, outward: 1 | -1) => {
    if (!edge) return `L ${end} ${y}`;
    const center = width * (0.5 + edge.offset);
    const radius = Math.min(width, height) * edge.size;
    const targetY = y + outward * edge.sign * radius;
    return `L ${center - direction * radius} ${y} C ${center - direction * radius * 0.55} ${y} ${center - direction * radius * 0.62} ${targetY} ${center} ${targetY} C ${center + direction * radius * 0.62} ${targetY} ${center + direction * radius * 0.55} ${y} ${center + direction * radius} ${y} L ${end} ${y}`;
  };
  const vertical = (edge: EdgeProfile, start: number, end: number, x: number, direction: 1 | -1, outward: 1 | -1) => {
    if (!edge) return `L ${x} ${end}`;
    const center = height * (0.5 + edge.offset);
    const radius = Math.min(width, height) * edge.size;
    const targetX = x + outward * edge.sign * radius;
    return `L ${x} ${center - direction * radius} C ${x} ${center - direction * radius * 0.55} ${targetX} ${center - direction * radius * 0.62} ${targetX} ${center} C ${targetX} ${center + direction * radius * 0.62} ${x} ${center + direction * radius * 0.55} ${x} ${center + direction * radius} L ${x} ${end}`;
  };

  commands.push(horizontal(edges.top, pad, width - pad, pad, 1, -1));
  commands.push(vertical(edges.right, pad, height - pad, width - pad, 1, 1));
  commands.push(horizontal(edges.bottom, width - pad, pad, height - pad, -1, 1));
  commands.push(vertical(edges.left, height - pad, pad, pad, -1, -1));
  commands.push('Z');
  return { d: commands.join(' '), height, row, column };
}

function JigsawPiece({ piece, rows, columns, imageUrl, showImage, variant, className = '' }: {
  piece: number;
  rows: number;
  columns: number;
  imageUrl: string;
  showImage: boolean;
  variant: string;
  className?: string;
}) {
  const { d, height, row, column } = piecePath(piece, rows, columns);
  const clipId = `${variant}-piece-${piece}`;
  return <svg className={className} viewBox={`0 0 100 ${height}`} aria-hidden="true">
    <defs><clipPath id={clipId}><path d={d}/></clipPath></defs>
    {showImage ? <>
      <image href={imageUrl} x={-column * 100} y={-row * height} width={columns * 100} height={rows * height} preserveAspectRatio="none" clipPath={`url(#${clipId})`}/>
      <path d={d} fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" vectorEffect="non-scaling-stroke"/>
    </> : <path className="jigsaw-hole-path" d={d}/>}
  </svg>;
}

export default function Home() {
  const [keyword, setKeyword] = useState('알프스의 봄');
  const [searched, setSearched] = useState('알프스의 봄');
  const defaultPhotos = useMemo(() => findPhotos('nature'), []);
  const [photos, setPhotos] = useState<Photo[]>(defaultPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(defaultPhotos[0]);
  const [searching, setSearching] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [fallbackNotice, setFallbackNotice] = useState<string | null>(null);
  const [pieceCount, setPieceCount] = useState(20);
  const [mode, setMode] = useState<PuzzleMode>('classic');
  const [pieces, setPieces] = useState<number[] | null>(null);
  const [trayPieces, setTrayPieces] = useState<number[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [placed, setPlaced] = useState<number[]>([]);
  const [selectedTrayPiece, setSelectedTrayPiece] = useState<number | null>(null);
  const [missedSlot, setMissedSlot] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showReference, setShowReference] = useState(false);

  const { rows: gridRows, columns: gridColumns } = gridDimensions(pieceCount);
  const progress = useMemo(() => {
    if (!pieces) return 0;
    if (mode === 'shape') return Math.round((placed.length / pieces.length) * 100);
    return Math.round((pieces.filter((piece, index) => piece === index).length / pieces.length) * 100);
  }, [mode, pieces, placed.length]);

  async function recommend(searchKeyword = keyword) {
    if (searching) return;
    const term = searchKeyword.trim() || '자연';
    setSearching(true);
    setSearchMessage('');
    setFallbackNotice(null);
    try {
      const response = await fetch(`/api/photos?q=${encodeURIComponent(term)}`);
      const data = (await response.json()) as { photos?: Photo[]; error?: string };
      if (!response.ok) {
        if (response.status === 400) {
          setSearchMessage(data.error ?? '검색어를 다시 확인해 주세요.');
          return;
        }
        throw new Error(data.error ?? 'search failed');
      }
      if (!data.photos || data.photos.length < 10) throw new Error('검색 결과가 10장보다 적어 추천 목록을 완성하지 못했습니다.');
      setPhotos(data.photos);
      setSelectedPhoto(data.photos[0]);
      setSearched(term);
    } catch (error) {
      const fallback = findPhotos(term);
      const reason = error instanceof Error && error.message !== 'search failed'
        ? error.message
        : '네트워크 문제로 Pexels 이미지 서비스에 연결할 수 없었습니다.';
      setPhotos(fallback);
      setSelectedPhoto(fallback[0]);
      setSearched(term);
      setSearchMessage('실시간 검색 대신 선별한 대체 이미지 10장을 보여드려요.');
      setFallbackNotice(reason);
    } finally {
      setSearching(false);
    }
  }

  function startPuzzle() {
    const nextPieces = shuffled(pieceCount);
    setPieces(nextPieces);
    setTrayPieces(nextPieces);
    setPicked(null);
    setPlaced([]);
    setSelectedTrayPiece(null);
    setMissedSlot(null);
    setMoves(0);
    setCompleted(false);
    setTimeout(() => document.getElementById('puzzle')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  function selectPiece(index: number) {
    if (!pieces || completed || mode !== 'classic') return;
    if (picked === null) { setPicked(index); return; }
    if (picked === index) { setPicked(null); return; }
    const next = [...pieces];
    [next[picked], next[index]] = [next[index], next[picked]];
    setPieces(next);
    setPicked(null);
    setMoves((value) => value + 1);
    setCompleted(next.every((piece, pieceIndex) => piece === pieceIndex));
  }

  function placeShapePiece(piece: number, slot: number) {
    if (!pieces || completed || placed.includes(piece)) return;
    setMoves((value) => value + 1);
    if (piece !== slot) {
      setMissedSlot(slot);
      window.setTimeout(() => setMissedSlot(null), 350);
      return;
    }
    const nextPlaced = [...placed, piece];
    setPlaced(nextPlaced);
    setTrayPieces((current) => current.filter((item) => item !== piece));
    setSelectedTrayPiece(null);
    setCompleted(nextPlaced.length === pieceCount);
  }

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="eyebrow"><span>✦</span> 나만의 이미지 퍼즐</div>
        <h1>상상한 장면을,<br/><em>퍼즐로 맞춰보세요.</em></h1>
        <p>원하는 단어를 입력하면 어울리는 그림을 추천해드려요.<br/>마음에 드는 한 장을 골라 나만의 퍼즐을 시작하세요.</p>
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <label className="sr-only" htmlFor="keyword">찾고 싶은 그림</label>
          <input id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && void recommend()} placeholder="예: 노을 진 바다, 귀여운 고양이, 서울 야경" />
          <button onClick={() => void recommend()} disabled={searching}>{searching ? '찾는 중...' : '그림 찾기'} <span>→</span></button>
        </div>
        <div className="quick-tags"><span>이런 건 어때요?</span>{['바다', '고양이', '도시 야경', '케이크'].map(tag => <button key={tag} disabled={searching} onClick={() => { setKeyword(tag); void recommend(tag); }}>#{tag}</button>)}</div>
        <div className="search-guide">
          <b>검색어 안내</b>
          <p>사물·장소·분위기나 인물의 특징과 상황을 구체적으로 적으면 더 잘 찾을 수 있어요. 예: ‘웃는 가족’, ‘빨간 우산을 든 사람’.</p>
          <p>특정 인물의 이름은 정확하지 않을 수 있습니다. Pexels 검색은 얼굴 인식이나 신원 확인 기능이 아니어서 동명이인 또는 비슷한 분위기의 다른 인물이 표시될 수 있으며, 검색 결과가 당사자임을 보장하지 않습니다.</p>
        </div>
        {searchMessage && <p className="search-message" role="status" aria-live="polite">{searchMessage}</p>}
      </section>

      <section className="workspace" id="make" aria-labelledby="recommend-title">
        <div className="section-heading">
          <div><span className="step">01</span><h2 id="recommend-title">‘{searched}’ 추천 그림</h2><p>퍼즐로 만들고 싶은 그림을 골라주세요.</p></div>
          <span className="result-count">{photos.length}개의 그림</span>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <div className="photo-result" key={photo.id}>
              <button className={`photo-card ${selectedPhoto.id === photo.id ? 'selected' : ''}`} onClick={() => setSelectedPhoto(photo)} aria-pressed={selectedPhoto.id === photo.id}>
                <Image src={photo.url} alt={photo.label} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" />
                <span className="photo-overlay"><b>{photo.label}</b></span>
                {selectedPhoto.id === photo.id && <span className="check">✓</span>}
              </button>
              {photo.sourceUrl ? <a className="photo-source" href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.credit}</a> : <span className="photo-source">{photo.credit}</span>}
            </div>
          ))}
        </div>

        <div className="mode-section">
          <div className="setup-copy"><span className="step">02</span><h2>어떤 방식으로 맞출까요?</h2><p>정사각형을 바꾸거나, 자유로운 모양을 빈자리에 끼워보세요.</p></div>
          <div className="mode-picker" role="group" aria-label="퍼즐 버전 선택">
            <button className={mode === 'classic' ? 'active' : ''} onClick={() => setMode('classic')} aria-pressed={mode === 'classic'}>
              <span className="mode-visual classic-visual"><i/><i/><i/><i/></span>
              <span><b>버전 1</b><small>정사각형 교환</small></span>
              <em>{mode === 'classic' ? '✓' : ''}</em>
            </button>
            <button className={mode === 'shape' ? 'active' : ''} onClick={() => setMode('shape')} aria-pressed={mode === 'shape'}>
              <span className="mode-visual shape-visual"><i/><i/><i/></span>
              <span><b>버전 2</b><small>랜덤 모양 끼우기</small></span>
              <em>{mode === 'shape' ? '✓' : ''}</em>
            </button>
          </div>
        </div>

        <div className="setup-card">
          <div className="setup-copy"><span className="step">03</span><h2>몇 조각으로 도전할까요?</h2><p>조각이 많을수록 더 오래, 더 깊게 몰입할 수 있어요.</p></div>
          <div className="difficulty" role="group" aria-label="퍼즐 조각 수">
            {difficulties.map(count => <button key={count} onClick={() => setPieceCount(count)} className={pieceCount === count ? 'active' : ''}><b>{count}</b><span>피스</span></button>)}
          </div>
          <button className="start-button" onClick={startPuzzle}>{mode === 'classic' ? '버전 1 시작하기' : '버전 2 시작하기'} <span>→</span></button>
        </div>
      </section>

      {pieces && <section className="puzzle-section" id="puzzle">
        <div className="puzzle-top">
          <div>
            <span className="step light">{mode === 'classic' ? 'VER.1' : 'VER.2'}</span>
            <h2>{completed ? '멋지게 완성했어요!' : mode === 'classic' ? '정사각형 조각을 맞춰보세요' : '모양을 보고 빈자리에 끼워보세요'}</h2>
            <p>{completed ? `${moves}번의 이동으로 퍼즐을 완성했습니다.` : mode === 'classic' ? '옮길 조각과 자리를 차례로 눌러 서로 바꿔보세요.' : '오른쪽 조각을 끌어다 같은 모양의 빈 홈에 놓거나, 조각과 홈을 차례로 누르세요.'}</p>
          </div>
          <div className="puzzle-actions"><button onClick={() => setShowReference(!showReference)}>◉ 원본 {showReference ? '숨기기' : '보기'}</button><button onClick={startPuzzle}>↻ 다시 섞기</button></div>
        </div>

        {mode === 'classic' ? <div className="game-layout">
          <div className="board-wrap">
            <div className={`puzzle-board ${completed ? 'complete' : ''}`} style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gridTemplateRows: `repeat(${gridRows}, 1fr)` }}>
              {pieces.map((piece, index) => {
                const row = Math.floor(piece / gridColumns);
                const col = piece % gridColumns;
                return <button key={index} aria-label={`${index + 1}번 자리의 퍼즐 조각`} className={`puzzle-piece ${picked === index ? 'picked' : ''}`} onClick={() => selectPiece(index)} style={{ backgroundImage: `url(${selectedPhoto.url})`, backgroundSize: `${gridColumns * 100}% ${gridRows * 100}%`, backgroundPosition: `${gridColumns === 1 ? 0 : (col / (gridColumns - 1)) * 100}% ${gridRows === 1 ? 0 : (row / (gridRows - 1)) * 100}%` }} />;
              })}
            </div>
            {showReference && <div className="reference"><Image src={selectedPhoto.url} alt={`원본: ${selectedPhoto.label}`} width={180} height={135} sizes="180px" /><span>원본</span></div>}
          </div>
          <aside className="game-info">
            <div className="stat"><span>진행률</span><b>{progress}%</b><div><i style={{ width: `${progress}%` }} /></div></div>
            <div className="mini-stats"><p><span>조각 수</span><b>{pieceCount}</b></p><p><span>이동 횟수</span><b>{moves}</b></p></div>
            <div className="tip"><span>TIP</span><p>모서리와 테두리 조각부터 맞추면 더 쉬워요.</p></div>
          </aside>
        </div> : <div className="shape-game-layout">
          <div className="board-wrap">
            <div className={`shape-board ${completed ? 'complete' : ''}`} style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gridTemplateRows: `repeat(${gridRows}, 1fr)` }}>
              {pieces.map((_, slot) => {
                const isPlaced = placed.includes(slot);
                return <button
                  key={slot}
                  className={`shape-slot ${missedSlot === slot ? 'miss' : ''}`}
                  aria-label={`${slot + 1}번 직소 모양의 빈자리`}
                  onClick={() => selectedTrayPiece !== null && placeShapePiece(selectedTrayPiece, slot)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => { event.preventDefault(); const piece = Number(event.dataTransfer.getData('text/plain')); if (Number.isInteger(piece)) placeShapePiece(piece, slot); }}
                >
                  <JigsawPiece
                    piece={slot}
                    rows={gridRows}
                    columns={gridColumns}
                    imageUrl={selectedPhoto.url}
                    showImage={isPlaced}
                    variant="slot"
                    className={isPlaced ? 'placed-shape' : 'hole-shape'}
                  />
                </button>;
              })}
            </div>
            {showReference && <div className="reference"><Image src={selectedPhoto.url} alt={`원본: ${selectedPhoto.label}`} width={180} height={135} sizes="180px" /><span>원본</span></div>}
          </div>

          <aside className="piece-tray">
            <div className="tray-heading"><div><span>조각함</span><b aria-live="polite">{trayPieces.length}개 남음</b></div><small>끌어서 왼쪽 홈에 놓으세요</small></div>
            <div className="tray-progress"><i style={{ width: `${progress}%` }}/><span>{progress}%</span></div>
            <div className={`tray-grid tray-${pieceCount}`}>
              {trayPieces.map((piece) => (
                <button
                  key={piece}
                  draggable
                  className={`tray-piece ${selectedTrayPiece === piece ? 'selected' : ''}`}
                  aria-label={`${piece + 1}번 직소 퍼즐 조각`}
                  aria-pressed={selectedTrayPiece === piece}
                  onClick={() => setSelectedTrayPiece(selectedTrayPiece === piece ? null : piece)}
                  onDragStart={(event) => { event.dataTransfer.setData('text/plain', String(piece)); setSelectedTrayPiece(piece); }}
                  style={{ aspectRatio: `${4 * gridRows} / ${3 * gridColumns}` }}
                >
                  <JigsawPiece piece={piece} rows={gridRows} columns={gridColumns} imageUrl={selectedPhoto.url} showImage variant="tray" className="tray-piece-svg"/>
                </button>
              ))}
            </div>
            <div className="tray-footer"><span>이동 {moves}회</span><p><b>TIP</b> 색과 모양을 함께 살펴보세요.</p></div>
          </aside>
        </div>}
      </section>}

      <section className="home-content" aria-labelledby="learn-title">
        <div className="content-lead"><span>PUZZLE NOTES</span><h2 id="learn-title">그림을 고르는 순간부터 퍼즐은 시작됩니다</h2><p>퍼즐리는 단순히 조각을 섞는 도구가 아니라, 한 장의 이미지를 색·선·질감으로 다시 읽어보는 공간입니다. 처음에는 큰 색 영역을 찾고, 익숙해지면 작은 굴곡과 반복 무늬까지 관찰해보세요.</p></div>
        <div className="home-card-grid">
          <article><span>01</span><h3>색이 나뉘는 그림부터</h3><p>하늘과 땅, 사물과 배경이 뚜렷한 이미지는 조각 위치를 예상하기 쉽습니다. 처음이라면 자연이나 도시 풍경으로 규칙을 익혀보세요.</p></article>
          <article><span>02</span><h3>조각 수는 천천히 높이기</h3><p>12~20피스로 조작을 익힌 뒤 30~48피스로 넘어가면 부담이 적습니다. 80피스 이상은 미세한 색 변화와 질감을 보는 재미가 커집니다.</p></article>
          <article><span>03</span><h3>막힐 때 원본 활용하기</h3><p>원본을 잠깐 확인해 사물의 위치와 경계선을 기억한 뒤 다시 숨겨보세요. 정답을 베끼기보다 새로운 단서를 찾는 참고 지도처럼 쓸 수 있습니다.</p></article>
        </div>
        <div className="mode-explainer">
          <div><span>VERSION 1</span><h3>정사각형 교환은 이미지 흐름에 집중합니다</h3><p>조각 두 개를 선택해 위치를 바꾸는 방식입니다. 모양이 모두 같기 때문에 색의 연결, 선의 방향, 사물의 위치가 가장 중요한 단서가 됩니다.</p></div>
          <div><span>VERSION 2</span><h3>직소 끼우기는 실루엣까지 살펴봅니다</h3><p>각기 다른 굴곡을 가진 조각을 같은 모양의 빈 홈에 놓습니다. 오른쪽 조각함에서 색과 윤곽을 함께 비교하며 원래 자리를 찾습니다.</p></div>
        </div>
        <div className="home-faq"><div><span>QUICK FAQ</span><h2>퍼즐리 이용 전 알아두세요</h2></div><div className="faq-list"><details><summary>회원가입이나 설치가 필요한가요?</summary><p>아니요. 웹 브라우저에서 바로 무료로 시작할 수 있으며 별도 계정을 만들 필요가 없습니다.</p></details><details><summary>검색어와 퍼즐 진행 내용이 저장되나요?</summary><p>검색어는 이미지 추천을 위해 퍼즐리 서버를 거쳐 Pexels에 전달되지만 사용자 계정이나 데이터베이스에는 저장하지 않습니다. 퍼즐 진행 상태는 브라우저 화면 안에서만 처리됩니다.</p></details><details><summary>모바일에서도 이용할 수 있나요?</summary><p>가능합니다. 다만 작은 화면에서 200~400피스는 조작이 세밀해질 수 있으므로 낮은 조각 수부터 시작하는 것을 권합니다.</p></details></div></div>
        <div className="content-links"><a href="/guide">자세한 퍼즐 가이드 읽기 →</a><a href="/about">퍼즐리 운영 원칙 보기 →</a></div>
      </section>

      <KakaoAd />

      {fallbackNotice && <div className="api-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setFallbackNotice(null); }}>
        <section className="api-modal" role="alertdialog" aria-modal="true" aria-labelledby="api-modal-title" aria-describedby="api-modal-description">
          <span className="api-modal-icon" aria-hidden="true">!</span>
          <div>
            <p className="api-modal-label">이미지 검색 안내</p>
            <h2 id="api-modal-title">대체 이미지를 제공했습니다</h2>
            <div id="api-modal-description">
              <p><b>API 오류 원인</b><br/>{fallbackNotice}</p>
              <p>Pexels 실시간 검색을 완료하지 못해 퍼즐리가 미리 선별한 Unsplash 이미지 10장을 대신 보여드립니다. 원하는 이미지를 선택해 퍼즐을 계속 이용할 수 있습니다.</p>
            </div>
            <button autoFocus onClick={() => setFallbackNotice(null)}>확인</button>
          </div>
        </section>
      </div>}

      <SiteFooter />
    </main>
  );
}

'use client';

import { useMemo, useState } from 'react';

type Photo = { id: string; url: string; label: string; credit: string };

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

const difficulties = [4, 9, 16, 25, 36, 49, 64, 100];

function findPhotos(keyword: string) {
  const word = keyword.trim().toLowerCase();
  if (/바다|해변|여름|파도|ocean|sea|beach/.test(word)) return photoSets.ocean;
  if (/동물|고양|강아|여우|코끼|animal|cat|dog/.test(word)) return photoSets.animal;
  if (/도시|서울|야경|건물|city|street|night/.test(word)) return photoSets.city;
  if (/음식|요리|케이크|피자|food|cake|pizza/.test(word)) return photoSets.food;
  if (/산|숲|자연|알프스|꽃|봄|가을|nature|forest|mountain/.test(word) || !word) return photoSets.nature;
  const query = encodeURIComponent(word);
  return Array.from({ length: 4 }, (_, index) => ({
    id: `search-${word}-${index}`,
    url: `https://loremflickr.com/1200/900/${query}?lock=${index + 31}`,
    label: `${keyword.trim()} 추천 ${index + 1}`,
    credit: 'Flickr',
  }));
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

export default function Home() {
  const [keyword, setKeyword] = useState('알프스의 봄');
  const [searched, setSearched] = useState('알프스의 봄');
  const [photos, setPhotos] = useState(photoSets.nature);
  const [selectedPhoto, setSelectedPhoto] = useState(photoSets.nature[0]);
  const [pieceCount, setPieceCount] = useState(16);
  const [pieces, setPieces] = useState<number[] | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showReference, setShowReference] = useState(false);

  const gridSize = Math.sqrt(pieceCount);
  const progress = useMemo(() => {
    if (!pieces) return 0;
    return Math.round((pieces.filter((piece, index) => piece === index).length / pieces.length) * 100);
  }, [pieces]);

  function recommend() {
    const next = findPhotos(keyword);
    setPhotos(next);
    setSelectedPhoto(next[0]);
    setSearched(keyword.trim() || '자연');
  }

  function startPuzzle() {
    setPieces(shuffled(pieceCount));
    setPicked(null);
    setMoves(0);
    setCompleted(false);
    setTimeout(() => document.getElementById('puzzle')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  function selectPiece(index: number) {
    if (!pieces || completed) return;
    if (picked === null) { setPicked(index); return; }
    if (picked === index) { setPicked(null); return; }
    const next = [...pieces];
    [next[picked], next[index]] = [next[index], next[picked]];
    setPieces(next);
    setPicked(null);
    setMoves((value) => value + 1);
    setCompleted(next.every((piece, pieceIndex) => piece === pieceIndex));
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="퍼즐리 홈"><span className="brand-mark">P</span><span>퍼즐리</span></a>
        <span className="header-note">오늘도 한 조각씩, 천천히.</span>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>✦</span> 나만의 이미지 퍼즐</div>
        <h1>상상한 장면을,<br/><em>퍼즐로 맞춰보세요.</em></h1>
        <p>원하는 단어를 입력하면 어울리는 그림을 추천해드려요.<br/>마음에 드는 한 장을 골라 나만의 퍼즐을 시작하세요.</p>
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <label className="sr-only" htmlFor="keyword">찾고 싶은 그림</label>
          <input id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && recommend()} placeholder="예: 노을 진 바다, 귀여운 고양이, 서울 야경" />
          <button onClick={recommend}>그림 찾기 <span>→</span></button>
        </div>
        <div className="quick-tags"><span>이런 건 어때요?</span>{['바다', '고양이', '도시 야경', '케이크'].map(tag => <button key={tag} onClick={() => { setKeyword(tag); const next = findPhotos(tag); setPhotos(next); setSelectedPhoto(next[0]); setSearched(tag); }}>#{tag}</button>)}</div>
      </section>

      <section className="workspace" aria-labelledby="recommend-title">
        <div className="section-heading">
          <div><span className="step">01</span><h2 id="recommend-title">‘{searched}’ 추천 그림</h2><p>퍼즐로 만들고 싶은 그림을 골라주세요.</p></div>
          <span className="result-count">4개의 그림</span>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <button className={`photo-card ${selectedPhoto.id === photo.id ? 'selected' : ''}`} key={photo.id} onClick={() => setSelectedPhoto(photo)} aria-pressed={selectedPhoto.id === photo.id}>
              <img src={photo.url} alt={photo.label} />
              <span className="photo-overlay"><b>{photo.label}</b><small>{photo.credit}</small></span>
              {selectedPhoto.id === photo.id && <span className="check">✓</span>}
            </button>
          ))}
        </div>

        <div className="setup-card">
          <div className="setup-copy"><span className="step">02</span><h2>몇 조각으로 도전할까요?</h2><p>조각이 많을수록 더 오래, 더 깊게 몰입할 수 있어요.</p></div>
          <div className="difficulty" role="group" aria-label="퍼즐 조각 수">
            {difficulties.map(count => <button key={count} onClick={() => setPieceCount(count)} className={pieceCount === count ? 'active' : ''}><b>{count}</b><span>피스</span></button>)}
          </div>
          <button className="start-button" onClick={startPuzzle}>퍼즐 시작하기 <span>→</span></button>
        </div>
      </section>

      {pieces && <section className="puzzle-section" id="puzzle">
        <div className="puzzle-top">
          <div><span className="step light">PLAY</span><h2>{completed ? '멋지게 완성했어요!' : '한 조각씩 맞춰보세요'}</h2><p>{completed ? `${moves}번의 이동으로 퍼즐을 완성했습니다.` : '옮길 조각과 자리를 차례로 눌러 서로 바꿔보세요.'}</p></div>
          <div className="puzzle-actions"><button onClick={() => setShowReference(!showReference)}>◉ 원본 {showReference ? '숨기기' : '보기'}</button><button onClick={startPuzzle}>↻ 다시 섞기</button></div>
        </div>
        <div className="game-layout">
          <div className="board-wrap">
            <div className={`puzzle-board ${completed ? 'complete' : ''}`} style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
              {pieces.map((piece, index) => {
                const row = Math.floor(piece / gridSize);
                const col = piece % gridSize;
                return <button key={index} aria-label={`${index + 1}번 자리의 퍼즐 조각`} className={`puzzle-piece ${picked === index ? 'picked' : ''}`} onClick={() => selectPiece(index)} style={{ backgroundImage: `url(${selectedPhoto.url})`, backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`, backgroundPosition: `${gridSize === 1 ? 0 : (col / (gridSize - 1)) * 100}% ${gridSize === 1 ? 0 : (row / (gridSize - 1)) * 100}%` }} />;
              })}
            </div>
            {showReference && <div className="reference"><img src={selectedPhoto.url} alt={`원본: ${selectedPhoto.label}`} /><span>원본</span></div>}
          </div>
          <aside className="game-info">
            <div className="stat"><span>진행률</span><b>{progress}%</b><div><i style={{ width: `${progress}%` }} /></div></div>
            <div className="mini-stats"><p><span>조각 수</span><b>{pieceCount}</b></p><p><span>이동 횟수</span><b>{moves}</b></p></div>
            <div className="tip"><span>TIP</span><p>모서리와 테두리 조각부터 맞추면 더 쉬워요.</p></div>
          </aside>
        </div>
      </section>}

      <footer><a className="brand" href="#top"><span className="brand-mark">P</span><span>퍼즐리</span></a><p>당신의 오늘에, 작은 몰입을.</p><span>© 2026 Puzzly</span></footer>
    </main>
  );
}

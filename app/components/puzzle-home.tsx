'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { KakaoAd } from './kakao-ad';

export type Locale = 'ko' | 'en';
type Photo = { id: string; url: string; label: string; labelEn?: string; credit: string; sourceUrl?: string; photographerUrl?: string };
type PuzzleMode = 'classic' | 'shape';

const photoSets: Record<string, Photo[]> = {
  nature: [
    { id: 'n1', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85', label: '안개 낀 설산', labelEn: 'Misty snow-capped mountains', credit: 'Unsplash' },
    { id: 'n2', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', label: '숲속의 오두막', labelEn: 'Cabin in the woods', credit: 'Unsplash' },
    { id: 'n3', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85', label: '초록빛 숲', labelEn: 'Sunlit green forest', credit: 'Unsplash' },
    { id: 'n4', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85', label: '호수와 산', labelEn: 'Mountain lake', credit: 'Unsplash' },
  ],
  ocean: [
    { id: 'o1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85', label: '에메랄드빛 해변', labelEn: 'Emerald beach', credit: 'Unsplash' },
    { id: 'o2', url: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1200&q=85', label: '파도와 바위', labelEn: 'Waves and rocks', credit: 'Unsplash' },
    { id: 'o3', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85', label: '바다 절벽', labelEn: 'Ocean cliffs', credit: 'Unsplash' },
    { id: 'o4', url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85', label: '열대의 휴식', labelEn: 'Tropical retreat', credit: 'Unsplash' },
  ],
  animal: [
    { id: 'a1', url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85', label: '숲속의 여우', labelEn: 'Fox in the forest', credit: 'Unsplash' },
    { id: 'a2', url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85', label: '초원의 코끼리', labelEn: 'Elephant on the plains', credit: 'Unsplash' },
    { id: 'a3', url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85', label: '호기심 많은 고양이', labelEn: 'Curious cat', credit: 'Unsplash' },
    { id: 'a4', url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=85', label: '들판의 강아지', labelEn: 'Dog in a field', credit: 'Unsplash' },
  ],
  city: [
    { id: 'c1', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85', label: '도시의 교차로', labelEn: 'City intersection', credit: 'Unsplash' },
    { id: 'c2', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85', label: '화려한 스카이라인', labelEn: 'Colorful skyline', credit: 'Unsplash' },
    { id: 'c3', url: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=85', label: '도심의 빌딩', labelEn: 'Downtown buildings', credit: 'Unsplash' },
    { id: 'c4', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85', label: '밤의 도시', labelEn: 'City at night', credit: 'Unsplash' },
  ],
  food: [
    { id: 'f1', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85', label: '풍성한 테이블', labelEn: 'A generous table', credit: 'Unsplash' },
    { id: 'f2', url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85', label: '알록달록 샐러드', labelEn: 'Colorful salad', credit: 'Unsplash' },
    { id: 'f3', url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85', label: '달콤한 케이크', labelEn: 'Sweet cake', credit: 'Unsplash' },
    { id: 'f4', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85', label: '갓 구운 피자', labelEn: 'Freshly baked pizza', credit: 'Unsplash' },
  ],
};

const difficulties = [12, 20, 30, 48, 80, 120, 200, 400];

const uiCopy = {
  ko: {
    initialQuery: '알프스의 봄', eyebrow: '나만의 이미지 퍼즐', heroLine1: '상상한 장면을,', heroLine2: '퍼즐로 맞춰보세요.',
    heroBody1: '원하는 단어를 입력하면 어울리는 그림을 추천해드려요.', heroBody2: '마음에 드는 한 장을 골라 나만의 퍼즐을 시작하세요.',
    searchLabel: '찾고 싶은 그림', placeholder: '예: 노을 진 바다, 귀여운 고양이, 서울 야경', searching: '찾는 중...', searchButton: '그림 찾기', suggestions: '이런 건 어때요?',
    tags: ['바다', '고양이', '도시 야경', '케이크'], guideTitle: '검색어 안내',
    guide1: '사물·장소·분위기나 인물의 특징과 상황을 구체적으로 적으면 더 잘 찾을 수 있어요. 예: ‘웃는 가족’, ‘빨간 우산을 든 사람’.',
    guide2: '특정 인물의 이름은 정확하지 않을 수 있습니다. Pexels 검색은 얼굴 인식이나 신원 확인 기능이 아니어서 동명이인 또는 비슷한 분위기의 다른 인물이 표시될 수 있으며, 검색 결과가 당사자임을 보장하지 않습니다.',
    recommendTitle: (query: string) => `‘${query}’ 추천 그림`, findingPhotos: '어울리는 그림을 찾고 있어요.', choosePhoto: '퍼즐로 만들고 싶은 그림을 골라주세요.', photoCount: (count: number) => `${count}개의 그림`,
    emptyTitle: '관련 이미지를 표시하지 않았어요.', emptyText: '잠시 후 다시 검색하거나 다른 검색어를 입력해 주세요.',
    modeTitle: '어떤 방식으로 맞출까요?', modeDescription: '정사각형을 바꾸거나, 자유로운 모양을 빈자리에 끼워보세요.', version1: '버전 1', squareSwap: '정사각형 교환', version2: '버전 2', shapeFit: '랜덤 모양 끼우기',
    piecesTitle: '몇 조각으로 도전할까요?', piecesDescription: '조각이 많을수록 더 오래, 더 깊게 몰입할 수 있어요.', pieces: '피스', start1: '버전 1 시작하기', start2: '버전 2 시작하기',
    completeTitle: '멋지게 완성했어요!', classicTitle: '정사각형 조각을 맞춰보세요', shapeTitle: '모양을 보고 빈자리에 끼워보세요', completeText: (moves: number) => `${moves}번의 이동으로 퍼즐을 완성했습니다.`,
    classicHelp: '옮길 조각과 자리를 차례로 눌러 서로 바꿔보세요.', shapeHelp: '오른쪽 조각을 끌어다 같은 모양의 빈 홈에 놓거나, 조각과 홈을 차례로 누르세요.', original: '원본', hide: '숨기기', show: '보기', reshuffle: '다시 섞기',
    progress: '진행률', pieceCount: '조각 수', moveCount: '이동 횟수', classicTip: '모서리와 테두리 조각부터 맞추면 더 쉬워요.', tray: '조각함', remaining: (count: number) => `${count}개 남음`, dragHelp: '끌어서 왼쪽 홈에 놓으세요', moves: (count: number) => `이동 ${count}회`, shapeTip: '색과 모양을 함께 살펴보세요.',
    notesTitle: '그림을 고르는 순간부터 퍼즐은 시작됩니다', notesIntro: '퍼즐리는 단순히 조각을 섞는 도구가 아니라, 한 장의 이미지를 색·선·질감으로 다시 읽어보는 공간입니다. 처음에는 큰 색 영역을 찾고, 익숙해지면 작은 굴곡과 반복 무늬까지 관찰해보세요.',
    notes: [
      ['색이 나뉘는 그림부터', '하늘과 땅, 사물과 배경이 뚜렷한 이미지는 조각 위치를 예상하기 쉽습니다. 처음이라면 자연이나 도시 풍경으로 규칙을 익혀보세요.'],
      ['조각 수는 천천히 높이기', '12~20피스로 조작을 익힌 뒤 30~48피스로 넘어가면 부담이 적습니다. 80피스 이상은 미세한 색 변화와 질감을 보는 재미가 커집니다.'],
      ['막힐 때 원본 활용하기', '원본을 잠깐 확인해 사물의 위치와 경계선을 기억한 뒤 다시 숨겨보세요. 정답을 베끼기보다 새로운 단서를 찾는 참고 지도처럼 쓸 수 있습니다.'],
    ],
    modeNotes: [
      ['정사각형 교환은 이미지 흐름에 집중합니다', '조각 두 개를 선택해 위치를 바꾸는 방식입니다. 모양이 모두 같기 때문에 색의 연결, 선의 방향, 사물의 위치가 가장 중요한 단서가 됩니다.'],
      ['직소 끼우기는 실루엣까지 살펴봅니다', '각기 다른 굴곡을 가진 조각을 같은 모양의 빈 홈에 놓습니다. 오른쪽 조각함에서 색과 윤곽을 함께 비교하며 원래 자리를 찾습니다.'],
    ],
    faqTitle: '퍼즐리 이용 전 알아두세요', faqs: [
      ['회원가입이나 설치가 필요한가요?', '아니요. 웹 브라우저에서 바로 무료로 시작할 수 있으며 별도 계정을 만들 필요가 없습니다.'],
      ['검색어와 퍼즐 진행 내용이 저장되나요?', '검색어는 이미지 추천을 위해 퍼즐리 서버를 거쳐 Pexels에 전달되지만 사용자 계정이나 데이터베이스에는 저장하지 않습니다. 퍼즐 진행 상태는 브라우저 화면 안에서만 처리됩니다.'],
      ['모바일에서도 이용할 수 있나요?', '가능합니다. 다만 작은 화면에서 200~400피스는 조작이 세밀해질 수 있으므로 낮은 조각 수부터 시작하는 것을 권합니다.'],
    ],
    guideLink: '자세한 퍼즐 가이드 읽기 →', principlesLink: '퍼즐리 운영 원칙 보기 →',
    modalLabel: '이미지 검색 안내', modalTitle: '대체 이미지를 제공했습니다', apiError: 'API 오류 원인', confirm: '확인',
  },
  en: {
    initialQuery: 'Spring in the Alps', eyebrow: 'YOUR OWN PHOTO PUZZLE', heroLine1: 'Turn any scene', heroLine2: 'into a puzzle.',
    heroBody1: 'Enter a few words and we will find images that fit.', heroBody2: 'Choose your favorite and start a puzzle made just for you.',
    searchLabel: 'Find an image', placeholder: 'Try: sunset beach, cute cat, city at night', searching: 'Searching...', searchButton: 'Find images', suggestions: 'Need an idea?',
    tags: ['Ocean', 'Cats', 'City at night', 'Cake'], guideTitle: 'Search tips',
    guide1: 'Describe an object, place, mood, or a person’s features and situation. For example: “smiling family” or “person with a red umbrella.”',
    guide2: 'Names of specific people may not return accurate results. Pexels search does not identify faces or verify identity, so results may show other people with a similar name or appearance.',
    recommendTitle: (query: string) => `Images for “${query}”`, findingPhotos: 'Finding images that match your idea.', choosePhoto: 'Choose the image you want to turn into a puzzle.', photoCount: (count: number) => `${count} images`,
    emptyTitle: 'No related images to show.', emptyText: 'Try again in a moment or use a different search.',
    modeTitle: 'How would you like to play?', modeDescription: 'Swap square tiles or fit free-form pieces into matching spaces.', version1: 'Version 1', squareSwap: 'Square swap', version2: 'Version 2', shapeFit: 'Shape fit',
    piecesTitle: 'How many pieces?', piecesDescription: 'More pieces mean a longer, more immersive challenge.', pieces: 'pieces', start1: 'Start Version 1', start2: 'Start Version 2',
    completeTitle: 'Beautifully done!', classicTitle: 'Put the square tiles in place', shapeTitle: 'Match each piece to its space', completeText: (moves: number) => `You completed the puzzle in ${moves} moves.`,
    classicHelp: 'Select a tile, then select another position to swap them.', shapeHelp: 'Drag a piece from the tray to its matching space, or select the piece and then the space.', original: 'Original', hide: 'Hide', show: 'Show', reshuffle: 'Shuffle again',
    progress: 'Progress', pieceCount: 'Pieces', moveCount: 'Moves', classicTip: 'Start with corners, borders, and strong color boundaries.', tray: 'Piece tray', remaining: (count: number) => `${count} left`, dragHelp: 'Drag pieces into the matching spaces', moves: (count: number) => `${count} moves`, shapeTip: 'Compare both color and shape.',
    notesTitle: 'The puzzle begins when you choose the image', notesIntro: 'Puzzly is more than a tool that shuffles pieces. It is a place to rediscover an image through color, line, and texture. Start with broad areas of color, then look for small curves and repeating patterns.',
    notes: [
      ['Start with clear color regions', 'Images with a distinct sky, ground, subject, and background make piece positions easier to predict. Nature and city scenes are excellent places to learn the pattern.'],
      ['Increase the piece count gradually', 'Learn the controls with 12–20 pieces, then move to 30–48. At 80 pieces and above, subtle color changes and textures become the real challenge.'],
      ['Use the original when you get stuck', 'Check the original briefly, remember where objects and boundaries sit, then hide it again. Treat it as a map for new clues rather than an answer sheet.'],
    ],
    modeNotes: [
      ['Square swap is all about image flow', 'Select two square tiles to exchange their positions. Because every shape is identical, color continuity, line direction, and object placement become your strongest clues.'],
      ['Shape fit adds the silhouette', 'Each piece has its own outline and fits one matching space. Compare both the color and the contour as you move pieces from the tray.'],
    ],
    faqTitle: 'Good to know before you play', faqs: [
      ['Do I need an account or an installation?', 'No. Puzzly runs free in your web browser, with no account or installation required.'],
      ['Are my searches or puzzle progress saved?', 'Search terms pass through Puzzly to Pexels for image recommendations, but they are not stored in a user account or database. Puzzle progress stays only in the current browser page.'],
      ['Does it work on mobile?', 'Yes. On smaller screens, 200–400 piece puzzles require precise controls, so we recommend starting with fewer pieces.'],
    ],
    guideLink: 'Read the detailed puzzle guide →', principlesLink: 'See how Puzzly works →',
    modalLabel: 'Image search notice', modalTitle: 'Showing fallback images', apiError: 'API error', confirm: 'OK',
  },
} as const;

function withUnsplashCredit(photos: Photo[], locale: Locale) {
  return photos.map((photo) => ({
    ...photo,
    label: locale === 'en' ? photo.labelEn ?? photo.label : photo.label,
    credit: 'Photo from Unsplash',
    sourceUrl: 'https://unsplash.com',
  }));
}

function findPhotos(keyword: string, locale: Locale) {
  const word = keyword.trim().toLowerCase();
  let preferred: Photo[] = [];
  if (/바다|해변|여름|파도|섬|휴가|ocean|sea|beach/.test(word)) preferred = photoSets.ocean;
  else if (/동물|고양|강아|여우|코끼|새|말|사자|animal|cat|dog/.test(word)) preferred = photoSets.animal;
  else if (/도시|서울|야경|건물|거리|자동차|건축|city|street|night/.test(word)) preferred = photoSets.city;
  else if (/음식|요리|케이크|피자|커피|디저트|food|cake|pizza/.test(word)) preferred = photoSets.food;
  else if (/산|숲|자연|알프스|꽃|정원|봄|가을|nature|forest|mountain/.test(word) || !word) preferred = photoSets.nature;

  return withUnsplashCredit(preferred, locale);
}

class PhotoSearchError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = 'PhotoSearchError';
  }
}

async function fetchRecommendedPhotos(term: string, locale: Locale, signal?: AbortSignal) {
  const response = await fetch(`/api/photos?q=${encodeURIComponent(term)}&locale=${locale}`, { signal });
  const data = (await response.json()) as { photos?: Photo[]; error?: string };
  if (!response.ok) throw new PhotoSearchError(data.error ?? (locale === 'en' ? 'Image search failed.' : '이미지 검색에 실패했습니다.'), response.status);
  if (!data.photos || data.photos.length < 10) {
    throw new PhotoSearchError(locale === 'en' ? 'Fewer than 10 suitable images were returned.' : '검색 결과가 10장보다 적어 추천 목록을 완성하지 못했습니다.', 502);
  }
  return data.photos;
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

export function PuzzleHome({ locale }: { locale: Locale }) {
  const t = uiCopy[locale];
  const initialQuery = t.initialQuery;
  const isEnglish = locale === 'en';
  const [keyword, setKeyword] = useState<string>(initialQuery);
  const [searched, setSearched] = useState<string>(initialQuery);
  const [photos, setPhotos] = useState<Photo[]>(() => findPhotos(initialQuery, locale));
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(() => findPhotos(initialQuery, locale)[0] ?? null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [loadingQuery, setLoadingQuery] = useState<string | null>(initialQuery);
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
  const busy = initialLoading || searching;
  const displayedQuery = loadingQuery ?? searched;

  const { rows: gridRows, columns: gridColumns } = gridDimensions(pieceCount);
  const progress = useMemo(() => {
    if (!pieces) return 0;
    if (mode === 'shape') return Math.round((placed.length / pieces.length) * 100);
    return Math.round((pieces.filter((piece, index) => piece === index).length / pieces.length) * 100);
  }, [mode, pieces, placed.length]);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    document.documentElement.lang = locale;

    async function loadInitialPhotos() {
      try {
        const initialPhotos = await fetchRecommendedPhotos(initialQuery, locale, controller.signal);
        if (!active) return;
        setPhotos(initialPhotos);
        setSelectedPhoto(initialPhotos[0]);
      } catch (error) {
        if (!active || (error instanceof Error && error.name === 'AbortError')) return;
        const fallback = findPhotos(initialQuery, locale);
        const reason = error instanceof Error ? error.message : isEnglish ? 'Could not connect to the Pexels image service.' : 'Pexels 이미지 서비스에 연결할 수 없었습니다.';
        setPhotos(fallback);
        setSelectedPhoto(fallback[0] ?? null);
        setSearchMessage(fallback.length
          ? isEnglish ? `Showing ${fallback.length} related fallback images because live search was unavailable.` : `실시간 검색 대신 관련 대체 이미지 ${fallback.length}장을 보여드려요.`
          : isEnglish ? 'Live search failed and no related fallback images were available.' : '실시간 검색을 완료하지 못했고 관련 대체 이미지도 찾지 못했어요.');
        setFallbackNotice(reason);
      } finally {
        if (active) {
          setInitialLoading(false);
          setLoadingQuery(null);
        }
      }
    }

    void loadInitialPhotos();
    return () => {
      active = false;
      controller.abort();
    };
  }, [initialQuery, isEnglish, locale]);

  async function recommend(searchKeyword = keyword) {
    if (busy) return;
    const term = searchKeyword.trim() || (isEnglish ? 'nature' : '자연');
    setSearching(true);
    setLoadingQuery(term);
    setSearchMessage('');
    setFallbackNotice(null);
    try {
      const recommendedPhotos = await fetchRecommendedPhotos(term, locale);
      setPhotos(recommendedPhotos);
      setSelectedPhoto(recommendedPhotos[0]);
      setSearched(term);
    } catch (error) {
      if (error instanceof PhotoSearchError && error.status === 400) {
        setSearchMessage(error.message);
        return;
      }
      const fallback = findPhotos(term, locale);
      const reason = error instanceof Error ? error.message : isEnglish ? 'A network issue prevented a connection to Pexels.' : '네트워크 문제로 Pexels 이미지 서비스에 연결할 수 없었습니다.';
      setPhotos(fallback);
      setSelectedPhoto(fallback[0] ?? null);
      setSearched(term);
      setSearchMessage(fallback.length
        ? isEnglish ? `Showing ${fallback.length} related fallback images because live search was unavailable.` : `실시간 검색 대신 관련 대체 이미지 ${fallback.length}장을 보여드려요.`
        : isEnglish ? 'Live search failed and no related fallback images were available.' : '실시간 검색을 완료하지 못했고 관련 대체 이미지도 찾지 못했어요.');
      setFallbackNotice(reason);
    } finally {
      setSearching(false);
      setLoadingQuery(null);
    }
  }

  function startPuzzle() {
    if (!selectedPhoto) return;
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
      <SiteHeader locale={locale} />

      <section className="hero" id="top">
        <div className="eyebrow"><span>✦</span> {t.eyebrow}</div>
        <h1>{t.heroLine1}<br/><em>{t.heroLine2}</em></h1>
        <p>{t.heroBody1}<br/>{t.heroBody2}</p>
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <label className="sr-only" htmlFor="keyword">{t.searchLabel}</label>
          <input id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && void recommend()} placeholder={t.placeholder} />
          <button onClick={() => void recommend()} disabled={busy}>{busy ? t.searching : t.searchButton} <span>→</span></button>
        </div>
        <div className="quick-tags"><span>{t.suggestions}</span>{t.tags.map(tag => <button key={tag} disabled={busy} onClick={() => { setKeyword(tag); void recommend(tag); }}>#{tag}</button>)}</div>
        <div className="search-guide">
          <b>{t.guideTitle}</b>
          <p>{t.guide1}</p>
          <p>{t.guide2}</p>
        </div>
        {searchMessage && <p className="search-message" role="status" aria-live="polite">{searchMessage}</p>}
      </section>

      <section className="workspace" id="make" aria-labelledby="recommend-title">
        <div className="section-heading">
          <div><span className="step">01</span><h2 id="recommend-title">{t.recommendTitle(displayedQuery)}</h2><p>{busy ? t.findingPhotos : t.choosePhoto}</p></div>
          <span className="result-count" role="status" aria-live="polite">{busy ? t.searching : t.photoCount(photos.length)}</span>
        </div>
        <div className="photo-grid" aria-busy={busy}>
          {busy ? Array.from({ length: 10 }, (_, index) => (
            <div className="photo-result photo-skeleton" key={`skeleton-${index}`} aria-hidden="true">
              <div className="photo-skeleton-card" />
              <div className="photo-skeleton-line" />
            </div>
          )) : photos.map((photo) => (
            <div className="photo-result" key={photo.id}>
              <button className={`photo-card ${selectedPhoto?.id === photo.id ? 'selected' : ''}`} onClick={() => setSelectedPhoto(photo)} aria-pressed={selectedPhoto?.id === photo.id}>
                <Image src={photo.url} alt={photo.label} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" />
                <span className="photo-overlay"><b>{photo.label}</b></span>
                {selectedPhoto?.id === photo.id && <span className="check">✓</span>}
              </button>
              {photo.sourceUrl ? <a className="photo-source" href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.credit}</a> : <span className="photo-source">{photo.credit}</span>}
            </div>
          ))}
        </div>
        {!busy && photos.length === 0 && <div className="photo-empty" role="status"><b>{t.emptyTitle}</b><span>{t.emptyText}</span></div>}

        <div className="mode-section">
          <div className="setup-copy"><span className="step">02</span><h2>{t.modeTitle}</h2><p>{t.modeDescription}</p></div>
          <div className="mode-picker" role="group" aria-label={t.modeTitle}>
            <button className={mode === 'classic' ? 'active' : ''} onClick={() => setMode('classic')} aria-pressed={mode === 'classic'}>
              <span className="mode-visual classic-visual"><i/><i/><i/><i/></span>
              <span><b>{t.version1}</b><small>{t.squareSwap}</small></span>
              <em>{mode === 'classic' ? '✓' : ''}</em>
            </button>
            <button className={mode === 'shape' ? 'active' : ''} onClick={() => setMode('shape')} aria-pressed={mode === 'shape'}>
              <span className="mode-visual shape-visual"><i/><i/><i/></span>
              <span><b>{t.version2}</b><small>{t.shapeFit}</small></span>
              <em>{mode === 'shape' ? '✓' : ''}</em>
            </button>
          </div>
        </div>

        <div className="setup-card">
          <div className="setup-copy"><span className="step">03</span><h2>{t.piecesTitle}</h2><p>{t.piecesDescription}</p></div>
          <div className="difficulty" role="group" aria-label={t.piecesTitle}>
            {difficulties.map(count => <button key={count} onClick={() => setPieceCount(count)} className={pieceCount === count ? 'active' : ''}><b>{count}</b><span>{t.pieces}</span></button>)}
          </div>
          <button className="start-button" onClick={startPuzzle} disabled={busy || !selectedPhoto}>{mode === 'classic' ? t.start1 : t.start2} <span>→</span></button>
        </div>
      </section>

      {pieces && selectedPhoto && <section className="puzzle-section" id="puzzle">
        <div className="puzzle-top">
          <div>
            <span className="step light">{mode === 'classic' ? 'VER.1' : 'VER.2'}</span>
            <h2>{completed ? t.completeTitle : mode === 'classic' ? t.classicTitle : t.shapeTitle}</h2>
            <p>{completed ? t.completeText(moves) : mode === 'classic' ? t.classicHelp : t.shapeHelp}</p>
          </div>
          <div className="puzzle-actions"><button onClick={() => setShowReference(!showReference)}>◉ {t.original} {showReference ? t.hide : t.show}</button><button onClick={startPuzzle}>↻ {t.reshuffle}</button></div>
        </div>

        {mode === 'classic' ? <div className="game-layout">
          <div className="board-wrap">
            <div className={`puzzle-board ${completed ? 'complete' : ''}`} style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gridTemplateRows: `repeat(${gridRows}, 1fr)` }}>
              {pieces.map((piece, index) => {
                const row = Math.floor(piece / gridColumns);
                const col = piece % gridColumns;
                return <button key={index} aria-label={isEnglish ? `Puzzle tile at position ${index + 1}` : `${index + 1}번 자리의 퍼즐 조각`} className={`puzzle-piece ${picked === index ? 'picked' : ''}`} onClick={() => selectPiece(index)} style={{ backgroundImage: `url(${selectedPhoto.url})`, backgroundSize: `${gridColumns * 100}% ${gridRows * 100}%`, backgroundPosition: `${gridColumns === 1 ? 0 : (col / (gridColumns - 1)) * 100}% ${gridRows === 1 ? 0 : (row / (gridRows - 1)) * 100}%` }} />;
              })}
            </div>
            {showReference && <div className="reference"><Image src={selectedPhoto.url} alt={`${t.original}: ${selectedPhoto.label}`} width={180} height={135} sizes="180px" /><span>{t.original}</span></div>}
          </div>
          <aside className="game-info">
            <div className="stat"><span>{t.progress}</span><b>{progress}%</b><div><i style={{ width: `${progress}%` }} /></div></div>
            <div className="mini-stats"><p><span>{t.pieceCount}</span><b>{pieceCount}</b></p><p><span>{t.moveCount}</span><b>{moves}</b></p></div>
            <div className="tip"><span>TIP</span><p>{t.classicTip}</p></div>
          </aside>
        </div> : <div className="shape-game-layout">
          <div className="board-wrap">
            <div className={`shape-board ${completed ? 'complete' : ''}`} style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gridTemplateRows: `repeat(${gridRows}, 1fr)` }}>
              {pieces.map((_, slot) => {
                const isPlaced = placed.includes(slot);
                return <button
                  key={slot}
                  className={`shape-slot ${missedSlot === slot ? 'miss' : ''}`}
                  aria-label={isEnglish ? `Empty jigsaw space ${slot + 1}` : `${slot + 1}번 직소 모양의 빈자리`}
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
            {showReference && <div className="reference"><Image src={selectedPhoto.url} alt={`${t.original}: ${selectedPhoto.label}`} width={180} height={135} sizes="180px" /><span>{t.original}</span></div>}
          </div>

          <aside className="piece-tray">
            <div className="tray-heading"><div><span>{t.tray}</span><b aria-live="polite">{t.remaining(trayPieces.length)}</b></div><small>{t.dragHelp}</small></div>
            <div className="tray-progress"><i style={{ width: `${progress}%` }}/><span>{progress}%</span></div>
            <div className={`tray-grid tray-${pieceCount}`}>
              {trayPieces.map((piece) => (
                <button
                  key={piece}
                  draggable
                  className={`tray-piece ${selectedTrayPiece === piece ? 'selected' : ''}`}
                  aria-label={isEnglish ? `Jigsaw puzzle piece ${piece + 1}` : `${piece + 1}번 직소 퍼즐 조각`}
                  aria-pressed={selectedTrayPiece === piece}
                  onClick={() => setSelectedTrayPiece(selectedTrayPiece === piece ? null : piece)}
                  onDragStart={(event) => { event.dataTransfer.setData('text/plain', String(piece)); setSelectedTrayPiece(piece); }}
                  style={{ aspectRatio: `${4 * gridRows} / ${3 * gridColumns}` }}
                >
                  <JigsawPiece piece={piece} rows={gridRows} columns={gridColumns} imageUrl={selectedPhoto.url} showImage variant="tray" className="tray-piece-svg"/>
                </button>
              ))}
            </div>
            <div className="tray-footer"><span>{t.moves(moves)}</span><p><b>TIP</b> {t.shapeTip}</p></div>
          </aside>
        </div>}
      </section>}

      <section className="home-content" id="notes" aria-labelledby="learn-title">
        <div className="content-lead"><span>PUZZLE NOTES</span><h2 id="learn-title">{t.notesTitle}</h2><p>{t.notesIntro}</p></div>
        <div className="home-card-grid">
          {t.notes.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
        <div className="mode-explainer">
          {t.modeNotes.map(([title, description], index) => <div key={title}><span>VERSION {index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}
        </div>
        <div className="home-faq"><div><span>QUICK FAQ</span><h2>{t.faqTitle}</h2></div><div className="faq-list">{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div>
        <div className="content-links"><a href={isEnglish ? '#notes' : '/guide'}>{t.guideLink}</a><a href="/about">{t.principlesLink}</a></div>
      </section>

      <KakaoAd />

      {fallbackNotice && <div className="api-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setFallbackNotice(null); }}>
        <section className="api-modal" role="alertdialog" aria-modal="true" aria-labelledby="api-modal-title" aria-describedby="api-modal-description">
          <span className="api-modal-icon" aria-hidden="true">!</span>
          <div>
            <p className="api-modal-label">{t.modalLabel}</p>
            <h2 id="api-modal-title">{t.modalTitle}</h2>
            <div id="api-modal-description">
              <p><b>{t.apiError}</b><br/>{fallbackNotice}</p>
              <p>{photos.length
                ? isEnglish ? `Live Pexels search was unavailable, so ${photos.length} related Unsplash images are shown instead.` : `Pexels 실시간 검색을 완료하지 못해 검색어와 관련된 Unsplash 이미지 ${photos.length}장을 대신 보여드립니다.`
                : isEnglish ? 'No unrelated images were substituted. Please try again in a moment.' : '관련 없는 이미지를 대신 보여주지 않았습니다. 잠시 후 다시 검색해 주세요.'}</p>
            </div>
            <button autoFocus onClick={() => setFallbackNotice(null)}>{t.confirm}</button>
          </div>
        </section>
      </div>}

      <SiteFooter locale={locale} />
    </main>
  );
}

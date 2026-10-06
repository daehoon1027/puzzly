import Link from 'next/link';
import { PuzzleHome } from './components/puzzle-home';
import { CollectionCards } from './components/collection-pages';

export default function HomePage() {
  return <PuzzleHome locale="ko"><section className="home-collections"><span>FEATURED PUZZLES</span><h2>검색 없이 바로 시작하는 퍼즐</h2><p>처음 하기 좋은 세 장만 골랐습니다. 사진별 단서를 읽거나 바로 맞춰보세요.</p><CollectionCards locale="ko" slugs={['mountain-lake', 'snow-fox', 'sunset-beach']} /><div className="content-links"><Link href="/collections">테마별 퍼즐 6개 모두 보기 →</Link></div></section></PuzzleHome>;
}

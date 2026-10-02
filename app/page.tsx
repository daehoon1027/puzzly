import Link from 'next/link';
import { PuzzleHome } from './components/puzzle-home';
import { CollectionCards } from './components/collection-pages';

export default function HomePage() {
  return <PuzzleHome locale="ko"><section className="home-collections"><span>LOOK · LEARN · PLAY</span><h2>해설이 있는 테마별 퍼즐</h2><p>사진 속 단서를 읽고, 같은 사진으로 직접 맞춰보세요.</p><CollectionCards locale="ko" /><div className="content-links"><Link href="/photo-puzzle-maker">사진 퍼즐 만드는 방법과 조각 수 안내 →</Link></div></section></PuzzleHome>;
}

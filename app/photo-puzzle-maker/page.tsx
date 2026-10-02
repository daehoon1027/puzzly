import { PhotoPuzzleMakerPage } from '../components/photo-puzzle-maker-page';
import { contentMetadata } from '../content/metadata';

export const metadata = contentMetadata(
  '/photo-puzzle-maker',
  'ko',
  '사진 퍼즐 만들기 | 무료 온라인 직소 퍼즐',
  '검색어로 사진을 고르고 12~400피스의 정사각형 또는 직소 퍼즐을 무료로 만드는 방법과 조각 수 선택법을 안내합니다.',
);

export default function Page() {
  return <PhotoPuzzleMakerPage locale="ko" />;
}

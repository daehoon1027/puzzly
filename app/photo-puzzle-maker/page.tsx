import { PhotoPuzzleMakerPage } from '../components/photo-puzzle-maker-page';
import { contentMetadata } from '../content/metadata';

export const metadata = contentMetadata(
  '/photo-puzzle-maker',
  'ko',
  '사진 업로드 없이 퍼즐 만드는 방법 | 검색어·피스 수 가이드',
  '검색어로 사진을 찾고 12~400피스의 정사각형 또는 직소 퍼즐을 만드는 순서, 이미지 선택법과 권장 조각 수를 안내합니다.',
);

export default function Page() {
  return <PhotoPuzzleMakerPage locale="ko" />;
}

import { CollectionIndex } from '../components/collection-pages';
import { contentMetadata } from '../content/metadata';
export const metadata = contentMetadata('/collections', 'ko', '무료 온라인 사진 퍼즐 모음 | 풍경·동물·음식', '호수, 숲, 도시, 해변, 여우, 케이크 사진 중 하나를 골라 권장 피스와 풀이 단서를 보고 무료 온라인 퍼즐을 바로 시작하세요.');
export default function Page() { return <CollectionIndex locale="ko" />; }

import { CollectionIndex } from '../components/collection-pages';
import { contentMetadata } from '../content/metadata';
export const metadata = contentMetadata('/collections', 'ko', '해설이 있는 테마별 퍼즐', '호수, 숲, 도시, 해변, 여우, 케이크 사진의 서로 다른 단서를 읽고 직접 맞춰보는 관찰 퍼즐입니다.');
export default function Page() { return <CollectionIndex locale="ko" />; }

import { CollectionIndex } from '../components/collection-pages';
import { contentMetadata } from '../content/metadata';
export const metadata = contentMetadata('/collections', 'ko', '해설이 있는 테마별 퍼즐', '호수, 숲, 도시 사진에서 서로 다른 단서를 찾고 직접 맞춰보는 퍼즐리 컬렉션입니다.');
export default function Page() { return <CollectionIndex locale="ko" />; }

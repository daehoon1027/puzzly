import { GuideDetail } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide/first-puzzle', 'ko', '첫 20피스 조작 실습', '두 조각 교환을 직접 연습하고 정사각형·직소 모드의 조작법을 익힙니다.');
export default function Page() { return <GuideDetail locale="ko" slug="first-puzzle" />; }

import { GuideDetail } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide/first-puzzle', 'ko', '20피스 사진 퍼즐 시작하기', '무료 온라인 사진 퍼즐을 20피스로 시작해 두 조각 교환과 직소 끼우기 조작법을 직접 익힙니다.');
export default function Page() { return <GuideDetail locale="ko" slug="first-puzzle" />; }

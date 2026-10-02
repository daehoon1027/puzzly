import { GuideDetail } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide/piece-count', 'ko', '온라인 사진 퍼즐 조각 수 비교: 20·48·120피스', '같은 사진을 20·48·120피스로 비교해 화면 크기와 경험에 맞는 무료 온라인 퍼즐 난이도를 고르는 방법을 설명합니다.');
export default function Page() { return <GuideDetail locale="ko" slug="piece-count" />; }

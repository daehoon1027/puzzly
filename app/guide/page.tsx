import { GuideIndex } from '../components/guide-pages';
import { contentMetadata } from '../content/metadata';
export const metadata = contentMetadata('/guide', 'ko', '온라인 사진 퍼즐 가이드 | 조작법·피스 수·풀이 요령', '무료 온라인 사진 퍼즐의 조작법, 이미지 선택, 20·48·120피스 비교, 모바일 이용과 막힌 조각 푸는 방법을 안내합니다.');
export default function Page() { return <GuideIndex locale="ko" />; }

import { GuideIndex } from '../components/guide-pages';
import { contentMetadata } from '../content/metadata';
export const metadata = contentMetadata('/guide', 'ko', '직접 해보는 퍼즐 가이드', '조작 실습, 사진 선택, 조각 수 비교, 모바일 이용과 두 판 비교법을 실제 사례로 안내합니다.');
export default function Page() { return <GuideIndex locale="ko" />; }

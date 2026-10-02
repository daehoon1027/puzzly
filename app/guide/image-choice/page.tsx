import { GuideDetail } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide/image-choice', 'ko', '사진 퍼즐 만들기 좋은 이미지 고르는 법', '호수·숲·도시 사진을 비교해 온라인 사진 퍼즐에서 경계와 기준점이 뚜렷한 이미지를 고르는 방법을 안내합니다.');
export default function Page() { return <GuideDetail locale="ko" slug="image-choice" />; }

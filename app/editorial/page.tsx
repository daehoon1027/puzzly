import { EditorialPage } from '../components/editorial-page';
import { contentMetadata } from '../content/metadata';

export const metadata = contentMetadata('/editorial', 'ko', '콘텐츠 작성·검증 원칙', '퍼즐리의 작성자, 사진 선정, 플레이 검증, AI 보조 사용과 수정 절차를 공개합니다.');

export default function Page() {
  return <EditorialPage locale="ko" />;
}

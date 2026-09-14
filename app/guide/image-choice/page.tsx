import { GuideDetail } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
import { guides } from '../../content/guides';
const guide = guides.find(item => item.slug === 'image-choice')!;
export const metadata = contentMetadata('/guide/image-choice', 'ko', guide.ko.title, guide.ko.summary);
export default function Page() { return <GuideDetail locale="ko" slug="image-choice" />; }

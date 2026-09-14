import { GuideDetail } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
import { guides } from '../../content/guides';
const guide = guides.find(item => item.slug === 'focus-routine')!;
export const metadata = contentMetadata('/guide/focus-routine', 'ko', guide.ko.title, guide.ko.summary);
export default function Page() { return <GuideDetail locale="ko" slug="focus-routine" />; }

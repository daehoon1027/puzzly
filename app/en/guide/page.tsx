import { GuideIndex } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide', 'en', 'Practical puzzle guide', 'Learn controls, visual anchors, piece counts, mobile play, and a repeatable session comparison method.');
export default function Page() { return <GuideIndex locale="en" />; }

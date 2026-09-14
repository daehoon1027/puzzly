import { GuideIndex } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide', 'en', 'Practical puzzle guide', 'Learn the controls and explore photo clues, piece counts, and practical strategies.');
export default function Page() { return <GuideIndex locale="en" />; }

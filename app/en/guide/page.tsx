import { GuideIndex } from '../../components/guide-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/guide', 'en', 'Online Photo Puzzle Guide | Controls, Pieces, and Tips', 'Learn photo puzzle controls, image choice, piece counts, mobile play, visual anchors, and practical ways to solve a stuck puzzle.');
export default function Page() { return <GuideIndex locale="en" />; }

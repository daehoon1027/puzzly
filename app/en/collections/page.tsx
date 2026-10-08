import { CollectionIndex } from '../../components/collection-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/collections', 'en', 'Free Online Photo Puzzle Collection | Six Scenes', 'Choose a landscape, animal, city, beach, or food photograph, read practical clues, and start a free online puzzle.');
export default function Page() { return <CollectionIndex locale="en" />; }

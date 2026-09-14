import { CollectionIndex } from '../../components/collection-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/collections', 'en', 'Photo puzzles with study notes', 'Read specific clues for lake, forest, and skyline photographs, then play each puzzle.');
export default function Page() { return <CollectionIndex locale="en" />; }

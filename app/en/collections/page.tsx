import { CollectionIndex } from '../../components/collection-pages';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/collections', 'en', 'Photo puzzles with study notes', 'Read specific clues for six reviewed photographs, then play each puzzle in the same 4:3 crop.');
export default function Page() { return <CollectionIndex locale="en" />; }

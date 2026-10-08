import { PhotoPuzzleMakerPage } from '../../components/photo-puzzle-maker-page';
import { contentMetadata } from '../../content/metadata';

export const metadata = contentMetadata(
  '/photo-puzzle-maker',
  'en',
  'Make a Puzzle Without Uploading | Search and Piece Count Guide',
  'Learn how to find a photograph by search and make a free 12–400 piece puzzle, including practical image, mode, and difficulty guidance.',
);

export default function Page() {
  return <PhotoPuzzleMakerPage locale="en" />;
}

import { PhotoPuzzleMakerPage } from '../../components/photo-puzzle-maker-page';
import { contentMetadata } from '../../content/metadata';

export const metadata = contentMetadata(
  '/photo-puzzle-maker',
  'en',
  'Make a Photo Puzzle Online | Free Jigsaw Game',
  'Search for a photograph and make a free 12–400 piece square-swap or jigsaw puzzle, with practical guidance for choosing a mode and difficulty.',
);

export default function Page() {
  return <PhotoPuzzleMakerPage locale="en" />;
}

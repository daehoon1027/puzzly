import type { Metadata } from 'next';
import Link from 'next/link';
import { PuzzleHome } from '../components/puzzle-home';
import { CollectionCards } from '../components/collection-pages';

export const metadata: Metadata = {
  title: { absolute: 'Make a Photo Puzzle Online | Free Jigsaw Game - Puzzly' },
  description: 'Search for a photo and make a free 12 to 400 piece online puzzle. Choose square swap or jigsaw mode and play instantly in your browser.',
  keywords: ['make a photo puzzle online', 'free online jigsaw puzzle', 'photo puzzle', 'jigsaw puzzle game', 'image puzzle'],
  creator: 'Puzzly team',
  publisher: 'Puzzly',
  alternates: {
    canonical: '/en',
    languages: { 'ko-KR': '/', 'en-US': '/en' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Puzzly',
    title: 'Make a Photo Puzzle Online | Free Jigsaw Game - Puzzly',
    description: 'Search for a photo and make a free 12–400 piece square or jigsaw puzzle.',
    url: '/en',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Puzzly free online photo puzzle maker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make a Photo Puzzle Online | Free Jigsaw Game',
    description: 'Search for a photo and make a free 12–400 piece web puzzle.',
    images: ['/og.png'],
  },
};

export default function EnglishHomePage() {
  return <PuzzleHome locale="en"><section className="home-collections"><span>LOOK · LEARN · PLAY</span><h2>Photo puzzles with a starting point</h2><p>Read the clues, then play the photograph you just studied.</p><CollectionCards locale="en" /><div className="content-links"><Link href="/en/photo-puzzle-maker">How to make a photo puzzle and choose a piece count →</Link></div></section></PuzzleHome>;
}

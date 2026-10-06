import type { Metadata } from 'next';
import Link from 'next/link';
import { PuzzleHome } from '../components/puzzle-home';
import { CollectionCards } from '../components/collection-pages';

export const metadata: Metadata = {
  title: { absolute: 'Make a Photo Puzzle Online | Free Jigsaw Game - Puzzly' },
  description: 'Search for a photo and make a free 12 to 400 piece online puzzle. Choose square swap or jigsaw mode and play instantly in your browser.',
  keywords: ['make a photo puzzle online', 'free online jigsaw puzzle', 'photo puzzle', 'jigsaw puzzle game', 'image puzzle'],
  creator: 'daehoon1027',
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
  return <PuzzleHome locale="en"><section className="home-collections"><span>FEATURED PUZZLES</span><h2>Start without searching</h2><p>Three approachable photographs, each with clues and a playable puzzle.</p><CollectionCards locale="en" slugs={['mountain-lake', 'snow-fox', 'sunset-beach']} /><div className="content-links"><Link href="/en/collections">See all six collection puzzles →</Link></div></section></PuzzleHome>;
}

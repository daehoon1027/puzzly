import type { Metadata } from 'next';
import { PuzzleHome } from '../components/puzzle-home';

export const metadata: Metadata = {
  title: { absolute: 'Free Online Photo Puzzle Game | Puzzly' },
  description: 'Find a photo and turn it into a free online puzzle with 12 to 400 pieces. Choose square swap or jigsaw mode and play instantly in your browser.',
  keywords: ['free online puzzle', 'photo puzzle', 'jigsaw puzzle', 'web puzzle game', 'image puzzle'],
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
    title: 'Free Online Photo Puzzle Game | Puzzly',
    description: 'Search for a photo and enjoy a free 12–400 piece square or jigsaw puzzle.',
    url: '/en',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Puzzly free online photo puzzle game' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Photo Puzzle Game | Puzzly',
    description: 'Create a free 12–400 piece web puzzle from any photo.',
    images: ['/og.png'],
  },
};

export default function EnglishHomePage() {
  return <PuzzleHome locale="en" />;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage } from '../../components/info-page';

export const metadata: Metadata = {
  title: { absolute: 'About Puzzly | Puzzly' },
  description: 'Learn why Puzzly was built and how its free photo puzzle experience works.',
  keywords: ['about Puzzly', 'free photo puzzle', 'jigsaw puzzle game'],
  creator: 'Puzzly team',
  publisher: 'Puzzly',
  alternates: { canonical: '/en/about', languages: { 'ko-KR': '/about', 'en-US': '/en/about' } },
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Puzzly', title: 'About Puzzly | Puzzly', description: 'Learn why Puzzly was built and how its free photo puzzle experience works.', url: '/en/about', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'About Puzzly' }] },
  twitter: { card: 'summary_large_image', title: 'About Puzzly | Puzzly', description: 'Learn why Puzzly was built and how its free photo puzzle experience works.', images: ['/og.png'] },
};

export default function EnglishAboutPage() {
  return <InfoPage locale="en" path="/en/about" eyebrow="ABOUT PUZZLY" title="A better way to spend time with one image" intro="Puzzly helps you find an image, choose a format and difficulty, and start a free photo puzzle right away.">
    <section><h2>Why we built Puzzly</h2><p>In a world of short videos and constant screen changes, taking time to study one image can feel surprisingly special. Puzzly was made so anyone can begin a small moment of focus without an account or installation. Enter a search term, choose an image you like, and set a piece count that fits your pace.</p><p>The goal is not to find the answer as quickly as possible. We care about rediscovering an image through subtle color changes, object outlines, repeating textures, and the shape of each piece.</p></section>
    <section><h2>Two ways to play</h2><div className="text-grid"><div><h3>Version 1 · Square swap</h3><p>Select two same-sized tiles to exchange their positions. Follow the original image’s placement and color flow. It is a friendly way to get started.</p></div><div><h3>Version 2 · Jigsaw fit</h3><p>Choose pieces with different curves from the tray and place them into matching spaces. Compare image clues and silhouettes together.</p></div></div></section>
    <section><h2>Content and image principles</h2><p>Puzzly’s guides, difficulty notes, and puzzle tips are written by our team. Recommended images come from the Pexels search API, with the photographer and source shown on each card. If a live search cannot finish because of API limits, authentication, or network issues, we explain the reason and show 10 preselected Unsplash images instead. Puzzly does not claim ownership of external images and reviews rights-related requests.</p><p>We aim for a calm experience that works for everyone, from children to adults, and avoid excessive advertising or layouts that interrupt a puzzle in progress.</p></section>
    <aside className="info-cta"><h2>Make your own puzzle</h2><p>Search one idea, explore ten image candidates, and choose any difficulty from 12 to 400 pieces.</p><Link href="/en#make">Make a puzzle →</Link></aside>
  </InfoPage>;
}

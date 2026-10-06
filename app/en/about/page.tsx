import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage } from '../../components/info-page';

export const metadata: Metadata = {
  title: { absolute: 'About Puzzly | Puzzly' },
  description: 'Learn why Puzzly was built and how its free photo puzzle experience works.',
  keywords: ['about Puzzly', 'free photo puzzle', 'jigsaw puzzle game'],
  creator: 'daehoon1027',
  publisher: 'Puzzly',
  alternates: { canonical: '/en/about', languages: { 'ko-KR': '/about', 'en-US': '/en/about' } },
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Puzzly', title: 'About Puzzly | Puzzly', description: 'Learn why Puzzly was built and how its free photo puzzle experience works.', url: '/en/about', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'About Puzzly' }] },
  twitter: { card: 'summary_large_image', title: 'About Puzzly | Puzzly', description: 'Learn why Puzzly was built and how its free photo puzzle experience works.', images: ['/og.png'] },
};

export default function EnglishAboutPage() {
  return <InfoPage locale="en" path="/en/about" eyebrow="ABOUT PUZZLY" title="A better way to spend time with one image" intro="Puzzly helps you find an image, choose a format and difficulty, and start a free photo puzzle right away.">
    <aside className="info-cta info-cta-first"><h2>Make your own puzzle</h2><p>Choose a photograph and start with 12–400 pieces, with no account or installation.</p><Link href="/en#make">Make a puzzle →</Link></aside>
    <section><h2>Why we built Puzzly</h2><p>In a world of short videos and constant screen changes, taking time to study one image can feel surprisingly special. Puzzly was made so anyone can begin a small moment of focus without an account or installation. Enter a search term, choose an image you like, and set a piece count that fits your pace.</p><p>The goal is not to find the answer as quickly as possible. We care about rediscovering an image through subtle color changes, object outlines, repeating textures, and the shape of each piece.</p></section>
    <section><h2>Creator and content principles</h2><p>Puzzly creator daehoon1027 maintains the features and user guides. Fixed collection photographs are reviewed in the same 4:3 crop used by the game, then described through visible color, line, texture, and likely mistakes. We do not assert a location, season, or benefit that the photograph and product behavior cannot establish.</p><p>Recommended images come from the Pexels search API, with the photographer and source shown on each card. If a live search cannot finish because of API limits, authentication, or network issues, we explain the reason and show related preselected Unsplash images instead. Puzzly does not claim ownership of external images and reviews rights-related requests.</p><p>AI tools may assist with outlining and translation, but fixed photographs and product instructions are checked against the current view and behavior before publication. <Link href="/en/editorial">Read the full authorship, photograph review, play-testing, and correction process.</Link></p><p>We aim for a calm experience that works for everyone, from children to adults, and avoid excessive advertising or layouts that interrupt a puzzle in progress.</p></section>
  </InfoPage>;
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://puzzly-one.vercel.app'),
  title: { default: '퍼즐리 — 상상한 장면을 퍼즐로', template: '%s | 퍼즐리' },
  description: '원하는 단어로 그림을 찾고, 12피스부터 400피스까지 두 가지 방식의 무료 이미지 퍼즐을 즐겨보세요.',
  keywords: ['온라인 퍼즐', '이미지 퍼즐', '직소 퍼즐', '무료 퍼즐', '그림 퍼즐'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'ko_KR', siteName: '퍼즐리', title: '퍼즐리 — 상상한 장면을 퍼즐로', description: '단어 하나로 시작하는 나만의 무료 이미지 퍼즐.', url: '/', images: [{ url: '/og.png', width: 1200, height: 630, alt: '퍼즐리 — 상상한 장면을 퍼즐로 맞춰보세요.' }] },
  twitter: { card: 'summary_large_image', title: '퍼즐리 — 상상한 장면을 퍼즐로', description: '단어 하나로 시작하는 나만의 무료 이미지 퍼즐.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '퍼즐리 — 상상한 장면을 퍼즐로',
  description: '원하는 단어로 그림을 찾고, 난이도를 골라 나만의 이미지 퍼즐을 즐겨보세요.',
  openGraph: {
    title: '퍼즐리 — 상상한 장면을 퍼즐로',
    description: '단어 하나로 시작하는 나만의 이미지 퍼즐.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '퍼즐리 — 상상한 장면을 퍼즐로 맞춰보세요.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '퍼즐리 — 상상한 장면을 퍼즐로',
    description: '단어 하나로 시작하는 나만의 이미지 퍼즐.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

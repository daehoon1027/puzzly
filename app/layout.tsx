import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://puzzly-one.vercel.app'),
  title: { default: '무료 온라인 이미지 퍼즐 게임 | 퍼즐리', template: '%s | 퍼즐리' },
  description: '원하는 단어로 사진을 찾고 12피스부터 400피스까지 정사각형 또는 직소 방식으로 즐기는 무료 온라인 이미지 퍼즐 게임입니다.',
  keywords: ['무료 온라인 퍼즐', '이미지 퍼즐', '사진 퍼즐 만들기', '직소 퍼즐', '그림 퍼즐', '웹 퍼즐 게임'],
  category: 'games',
  creator: '퍼즐리 운영팀',
  publisher: '퍼즐리',
  verification: {
    google: 'yTLrFM2hXncQubi1SsP-xC26mOqABnXJAimyqo2u_3c',
    other: { 'naver-site-verification': 'c6c5317e6fed3e54410dfbfc6ac44cf53ba58f28' },
  },
  alternates: { canonical: '/', languages: { 'ko-KR': '/', 'en-US': '/en' } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: { 'google-adsense-account': 'ca-pub-4917350716922728' },
  openGraph: { type: 'website', locale: 'ko_KR', siteName: '퍼즐리', title: '무료 온라인 이미지 퍼즐 게임 | 퍼즐리', description: '원하는 사진을 찾아 12~400피스의 정사각형 또는 직소 퍼즐로 무료로 즐겨보세요.', url: '/', images: [{ url: '/og.png', width: 1200, height: 630, alt: '퍼즐리 무료 온라인 이미지 퍼즐 게임' }] },
  twitter: { card: 'summary_large_image', title: '무료 온라인 이미지 퍼즐 게임 | 퍼즐리', description: '원하는 사진으로 만드는 12~400피스 무료 웹 퍼즐.', images: ['/og.png'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://puzzly-one.vercel.app/#website',
      url: 'https://puzzly-one.vercel.app/',
      name: '퍼즐리',
      alternateName: 'Puzzly',
      description: '사진을 찾아 원하는 조각 수와 방식으로 즐기는 무료 온라인 이미지 퍼즐 게임',
      inLanguage: 'ko-KR',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://puzzly-one.vercel.app/#application',
      url: 'https://puzzly-one.vercel.app/',
      name: '퍼즐리',
      applicationCategory: 'GameApplication',
      applicationSubCategory: 'Puzzle Game',
      operatingSystem: 'Any',
      browserRequirements: 'JavaScript와 HTML5를 지원하는 최신 웹 브라우저',
      description: '검색한 사진을 12피스부터 400피스까지 정사각형 교환 또는 직소 모양 끼우기로 즐기는 무료 웹 퍼즐',
      image: 'https://puzzly-one.vercel.app/og.png',
      inLanguage: 'ko-KR',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><script async crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4917350716922728" /></head><body>{children}</body></html>;
}

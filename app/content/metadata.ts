import type { Metadata } from 'next';
import type { Language } from './collections';

export function contentMetadata(path: string, locale: Language, title: string, description: string): Metadata {
  const url = `${locale === 'en' ? '/en' : ''}${path}`;
  return {
    title: { absolute: `${title} | ${locale === 'en' ? 'Puzzly' : '퍼즐리'}` }, description,
    keywords: locale === 'en'
      ? ['make a photo puzzle online', 'free online jigsaw puzzle', 'photo puzzle', 'jigsaw puzzle game']
      : ['사진 퍼즐 만들기', '무료 온라인 직소 퍼즐', '온라인 사진 퍼즐', '이미지 퍼즐'],
    creator: 'daehoon1027',
    publisher: locale === 'en' ? 'Puzzly' : '퍼즐리',
    alternates: { canonical: url, languages: { 'ko-KR': path, 'en-US': `/en${path}` } },
    openGraph: { title, description, url, locale: locale === 'en' ? 'en_US' : 'ko_KR', siteName: locale === 'en' ? 'Puzzly' : '퍼즐리', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  };
}

import type { Metadata } from 'next';
import type { Language } from './collections';

export function contentMetadata(path: string, locale: Language, title: string, description: string): Metadata {
  const url = `${locale === 'en' ? '/en' : ''}${path}`;
  return {
    title: { absolute: `${title} | Puzzly` }, description,
    alternates: { canonical: url, languages: { 'ko-KR': path, 'en-US': `/en${path}` } },
    openGraph: { title, description, url, locale: locale === 'en' ? 'en_US' : 'ko_KR', type: 'website', images: [] },
    twitter: { card: 'summary', title, description, images: [] },
  };
}

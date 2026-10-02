import type { MetadataRoute } from 'next';
import { collections } from './content/collections';
import { guides } from './content/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://puzzly-one.vercel.app';
  const paired = ['', '/photo-puzzle-maker', '/guide', ...guides.map(item => `/guide/${item.slug}`), '/collections', ...collections.map(item => `/collections/${item.slug}`), '/about', '/privacy', '/terms', '/contact'];
  const paths = paired.flatMap(path => [path, `/en${path}`]);
  return paths.map((path) => ({
    url: base + path,
    lastModified: new Date(path.includes('photo-puzzle-maker') || path === '' || path === '/en' ? '2026-10-02' : ['/contact', '/en/contact'].includes(path) ? '2026-09-02' : '2026-09-14'),
    alternates: { languages: { 'ko-KR': base + (path.startsWith('/en') ? path.slice(3) : path), 'en-US': base + (path.startsWith('/en') ? path : `/en${path}`) } },
    changeFrequency: path === '' || path === '/en' ? 'weekly' : 'monthly',
    priority: path === '' || path === '/en' ? 1 : path.startsWith('/guide') ? 0.8 : 0.6,
  }));
}

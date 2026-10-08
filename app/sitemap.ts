import type { MetadataRoute } from 'next';
import { collections } from './content/collections';
import { guides } from './content/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://puzzly-one.vercel.app';
  const paired = ['', '/photo-puzzle-maker', '/guide', ...guides.map(item => `/guide/${item.slug}`), '/collections', ...collections.map(item => `/collections/${item.slug}`), '/about', '/editorial', '/privacy', '/terms', '/contact'];
  const paths = paired.flatMap(path => [path, `/en${path}`]);
  return paths.map((path) => ({
    url: base + path,
    lastModified: new Date(path.includes('/guide') || path.includes('/collections') || path.includes('photo-puzzle-maker') || path === '' || path === '/en' ? '2026-10-08' : path.includes('/editorial') || path.includes('/about') || path.includes('/contact') ? '2026-10-06' : '2026-09-14'),
    alternates: { languages: { 'ko-KR': base + (path.startsWith('/en') ? path.slice(3) : path), 'en-US': base + (path.startsWith('/en') ? path : `/en${path}`), 'x-default': base + (path.startsWith('/en') ? path.slice(3) : path) } },
    changeFrequency: path === '' || path === '/en' ? 'weekly' : 'monthly',
    priority: path === '' || path === '/en' ? 1 : path.includes('/guide') || path.includes('/collections') ? 0.8 : 0.6,
  }));
}

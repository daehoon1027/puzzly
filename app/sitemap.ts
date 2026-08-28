import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://puzzly-one.vercel.app';
  const paths = ['', '/guide', '/guide/image-choice', '/guide/piece-count', '/guide/focus-routine', '/about', '/privacy', '/terms', '/contact'];
  return paths.map((path) => ({
    url: base + path,
    lastModified: new Date('2026-08-28'),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/guide') ? 0.8 : 0.6,
  }));
}

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://puzzly-one.vercel.app';
  const paths = ['', '/en', '/guide', '/guide/image-choice', '/guide/piece-count', '/guide/focus-routine', '/about', '/en/about', '/privacy', '/terms', '/contact', '/en/contact'];
  return paths.map((path) => ({
    url: base + path,
    lastModified: new Date('2026-09-02'),
    changeFrequency: path === '' || path === '/en' ? 'weekly' : 'monthly',
    priority: path === '' || path === '/en' ? 1 : path.startsWith('/guide') ? 0.8 : 0.6,
  }));
}

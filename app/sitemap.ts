import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://puzzly-one.vercel.app';
  return ['', '/guide', '/about', '/privacy', '/terms', '/contact'].map(path=>({url:base+path,lastModified:new Date('2026-08-27'),changeFrequency:path===''?'weekly':'monthly',priority:path===''?1:path==='/guide'?0.8:0.6}));
}

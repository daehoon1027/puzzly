import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://puzzly-one.vercel.app/sitemap.xml',
    host: 'https://puzzly-one.vercel.app',
  };
}

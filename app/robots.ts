import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {rules:{userAgent:'*',allow:'/'},sitemap:'https://puzzly-one.vercel.app/sitemap.xml'};
}

import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { PageLanguage } from './page-language';

export function InfoPage({ eyebrow, title, intro, children, locale = 'ko', path }: { eyebrow: string; title: string; intro: string; children: ReactNode; locale?: 'ko' | 'en'; path?: string }) {
  const currentPath = path ?? (locale === 'en' ? '/en' : '/');
  const currentUrl = `https://puzzly-one.vercel.app${currentPath}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: intro,
    url: currentUrl,
    inLanguage: locale === 'en' ? 'en-US' : 'ko-KR',
    isPartOf: { '@id': 'https://puzzly-one.vercel.app/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Puzzly home' : '퍼즐리 홈', item: locale === 'en' ? 'https://puzzly-one.vercel.app/en' : 'https://puzzly-one.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: title, item: currentUrl },
      ],
    },
  };
  return <main lang={locale}><PageLanguage locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><SiteHeader locale={locale} path={path}/><article className="info-page"><header className="info-hero"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p></header><div className="info-body">{children}</div></article><SiteFooter locale={locale}/></main>;
}

import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export function InfoPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main><SiteHeader locale="ko"/><article className="info-page"><header className="info-hero"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p></header><div className="info-body">{children}</div></article><SiteFooter locale="ko"/></main>;
}

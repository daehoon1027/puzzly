// Checks the public, server-rendered navigation graph without running browser JavaScript.
const base = process.argv[2] ?? 'http://localhost:3194';
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap: ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url));
if (!urls.length) throw new Error('Empty sitemap');
const pages = new Map();
const failures = [];
for (const url of urls) {
  const response = await fetch(`${base}${url.pathname}`);
  const html = await response.text();
  pages.set(url.pathname, html);
  if (response.status !== 200) failures.push(`${url.pathname}: HTTP ${response.status}`);
  if ((html.match(/<h1\b/g) ?? []).length !== 1) failures.push(`${url.pathname}: expected one server-rendered h1`);
  if (!html.includes(`rel="canonical" href="${url.origin}${url.pathname === '/' ? '' : url.pathname}"`) && !html.includes(`rel="canonical" href="${url.href}"`)) failures.push(`${url.pathname}: missing canonical`);
  const locale = url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'ko';
  if (!html.includes(`<main lang="${locale}"`)) failures.push(`${url.pathname}: missing content language`);
}
for (const [path, html] of pages) {
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const target = new URL(href.replaceAll('&amp;', '&'), `https://puzzly-one.vercel.app${path}`);
    if (!pages.has(target.pathname)) failures.push(`${path}: unlisted internal link ${href}`);
    else if (target.hash && !pages.get(target.pathname).includes(`id="${target.hash.slice(1)}"`)) failures.push(`${path}: missing fragment ${href}`);
  }
}
for (const path of ['/collections/not-a-puzzle', '/en/guide/not-a-guide']) {
  const response = await fetch(`${base}${path}`);
  if (response.status !== 404) failures.push(`${path}: expected 404, got ${response.status}`);
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${pages.size} pages; HTTP responses, server-rendered headings, language, canonical URLs, internal links, fragments, and unknown-route 404s.`);

import Image from 'next/image';
import Link from 'next/link';
import { guides } from '../content/guides';
import { collections, collectionPhoto, type Language } from '../content/collections';
import { InfoPage } from './info-page';
import { TileLesson } from './tile-lesson';

const starterGuideSlugs = ['first-puzzle', 'image-choice', 'piece-count'] as const;

function GuideLinks({ locale, slugs }: { locale: Language; slugs: readonly string[] }) {
  const base = locale === 'en' ? '/en' : '';
  return <div className="article-links">{slugs.map((slug, i) => {
    const guide = guides.find(item => item.slug === slug);
    if (!guide) return null;
    return <Link key={guide.slug} href={`${base}/guide/${guide.slug}`}><span>{String(i + 1).padStart(2, '0')}</span><h2>{guide[locale].title}</h2><p>{guide[locale].summary}</p></Link>;
  })}</div>;
}

export function GuideIndex({ locale }: { locale: Language }) {
  const en = locale === 'en'; const base = en ? '/en' : '';
  const advancedGuideSlugs = guides.map(item => item.slug).filter(slug => !starterGuideSlugs.includes(slug as typeof starterGuideSlugs[number]));
  return <InfoPage compact locale={locale} path={`${base}/guide`} eyebrow="PUZZLE FIELD GUIDE" title={en ? 'Start with the guide you need now.' : '지금 필요한 가이드부터 시작하세요'} intro={en ? 'Learn the controls first, then choose a photograph and piece count. Continue to observation and session notes when you are ready.' : '조작법을 먼저 익히고 사진과 조각 수를 고르세요. 익숙해진 뒤 관찰법과 플레이 기록으로 이어갈 수 있습니다.'}>
    <section className="priority-section"><span>{en ? 'START HERE' : '먼저 볼 가이드'}</span><GuideLinks locale={locale} slugs={starterGuideSlugs} /></section>
    <section><h2>{en ? 'Improve observation and longer play' : '관찰과 긴 플레이'}</h2><GuideLinks locale={locale} slugs={advancedGuideSlugs} /></section>
    <p className="content-footnote">{en ? <>Progress is not saved after refresh or navigation. Testing and writing standards are in the <Link href={`${base}/editorial`}>editorial process</Link>.</> : <>진행은 새로고침이나 페이지 이동 뒤 저장되지 않습니다. 검증 기준은 <Link href={`${base}/editorial`}>콘텐츠 작성·검증 원칙</Link>에서 확인하세요.</>}</p>
  </InfoPage>;
}

function GridComparison({ locale }: { locale: Language }) {
  return <section><h2>{locale === 'en' ? 'One photo, three grids' : '사진은 같게, 격자만 다르게'}</h2><div className="grid-comparison">{[[20, 5, 4], [48, 8, 6], [120, 12, 10]].map(([count, columns, rows]) => <figure key={count}><div className="grid-study"><Image src={collectionPhoto(collections[0], locale).url} alt={collections[0][locale].alt} width={600} height={450} sizes="(max-width: 680px) 100vw, 280px" /><div aria-hidden="true" style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}>{Array.from({ length: count }, (_, i) => <span key={i} />)}</div></div><figcaption>{count} {locale === 'en' ? 'pieces' : '피스'} · {columns} × {rows}</figcaption></figure>)}</div><p>{locale === 'en' ? 'The image area is identical. These unshuffled grids show how much visual context remains inside a single piece.' : '모두 같은 영역의 사진입니다. 섞기 전 격자를 보며 한 조각에 남는 시각 단서의 양이 어떻게 달라지는지 비교하세요.'}</p></section>;
}

export function GuideDetail({ slug, locale }: { slug: string; locale: Language }) {
  const guide = guides.find(item => item.slug === slug)!; const copy = guide[locale];
  const en = locale === 'en'; const base = en ? '/en' : '';
  const currentIndex = guides.findIndex(item => item.slug === slug);
  const nextGuides = [guides[(currentIndex + 1) % guides.length], guides[(currentIndex + 2) % guides.length]];
  return <InfoPage compact locale={locale} path={`${base}/guide/${slug}`} eyebrow="PUZZLY PRACTICAL GUIDE" title={copy.title} intro={copy.summary}>
    <p className="editorial-byline">{en ? <>Written and play-tested by <Link href="/en/editorial">Puzzly creator daehoon1027</Link> · Updated October 6, 2026</> : <>작성·플레이 검증 <Link href="/editorial">퍼즐리 제작자 daehoon1027</Link> · 2026년 10월 6일 업데이트</>}</p>
    <nav className="detail-actions" aria-label={en ? 'Guide actions' : '가이드 주요 행동'}><Link href={`${base}/collections/mountain-lake#collection-play`}>{en ? 'Open a 20-piece practice puzzle →' : '20피스 연습 퍼즐 열기 →'}</Link><Link href={`${base}/guide`}>{en ? 'All guides' : '전체 가이드'}</Link></nav>
    {slug === 'first-puzzle' && <TileLesson locale={locale} imageUrl={collectionPhoto(collections[0], locale).url} />}
    {slug === 'piece-count' && <GridComparison locale={locale} />}
    {copy.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
    <section><h2>{en ? 'Continue with two related guides' : '이어 볼 가이드'}</h2><GuideLinks locale={locale} slugs={nextGuides.map(item => item.slug)} /></section>
  </InfoPage>;
}

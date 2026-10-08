import Image from 'next/image';
import Link from 'next/link';
import { collections, collectionPhoto, type Language } from '../content/collections';
import { InfoPage } from './info-page';
import { PuzzleHome } from './puzzle-home';

export function CollectionCards({ locale, slugs, excludeSlug, limit }: { locale: Language; slugs?: string[]; excludeSlug?: string; limit?: number }) {
  const base = locale === 'en' ? '/en' : '';
  const visibleCollections = (slugs ? slugs.map(slug => collections.find(item => item.slug === slug)).filter((item): item is typeof collections[number] => Boolean(item)) : collections)
    .filter(item => item.slug !== excludeSlug)
    .slice(0, limit ?? collections.length);
  return <div className="collection-grid">{visibleCollections.map(item => <Link className="collection-card" key={item.slug} href={`${base}/collections/${item.slug}`}>
    <Image src={collectionPhoto(item, locale).url} alt={item[locale].alt} width={600} height={450} sizes="(max-width: 680px) 100vw, 33vw" />
    <div><span>{locale === 'en' ? `Start with ${item.pieces} pieces` : `${item.pieces}피스부터 시작`}</span><h3>{item[locale].title}</h3><p>{item[locale].summary}</p><b>{locale === 'en' ? 'Read the clues & play →' : '풀이 단서 읽고 시작하기 →'}</b></div>
  </Link>)}</div>;
}

export function CollectionIndex({ locale }: { locale: Language }) {
  const en = locale === 'en';
  const base = en ? '/en' : '';
  return <InfoPage compact locale={locale} path={`${base}/collections`} eyebrow="THE PUZZLY COLLECTION" title={en ? 'Choose one of six free online photo puzzles.' : '무료 온라인 사진 퍼즐 6개를 골라 시작하세요'} intro={en ? 'Each photograph has one clear starting point, a suggested piece count, and a playable puzzle.' : '풍경·동물·도시·음식 사진마다 첫 기준점과 추천 조각 수를 정했습니다. 마음에 드는 장면을 고르면 바로 퍼즐로 이어집니다.'}>
    <nav className="priority-links" aria-label={en ? 'Recommended starting puzzles' : '추천 시작 퍼즐'}>
      <Link href={`${base}/collections/mountain-lake`}><span>{en ? 'FIRST PUZZLE' : '처음이라면'}</span><b>{en ? 'Mountain lake · 20 pieces' : '산과 호수 · 20피스'}</b></Link>
      <Link href={`${base}/collections/snow-fox`}><span>{en ? 'CLEAR SUBJECT' : '주제가 선명한'}</span><b>{en ? 'Snow fox · 30 pieces' : '눈밭의 여우 · 30피스'}</b></Link>
      <Link href={`${base}/collections/chocolate-cake`}><span>{en ? 'MORE DETAIL' : '세부 관찰'}</span><b>{en ? 'Chocolate cake · 48 pieces' : '초콜릿 케이크 · 48피스'}</b></Link>
    </nav>
    <CollectionCards locale={locale} />
    <p className="content-footnote">{en ? <>Suggested counts are starting points. See how crops and notes are checked in the <Link href={`${base}/editorial`}>editorial process</Link>.</> : <>추천 조각 수는 시작을 돕는 기준입니다. 사진과 해설의 검증 방법은 <Link href={`${base}/editorial`}>콘텐츠 작성·검증 원칙</Link>에서 확인할 수 있습니다.</>}</p>
  </InfoPage>;
}

export function CollectionDetail({ slug, locale }: { slug: string; locale: Language }) {
  const item = collections.find(item => item.slug === slug)!;
  const copy = item[locale];
  const en = locale === 'en';
  const base = en ? '/en' : '';
  return <InfoPage compact locale={locale} path={`${base}/collections/${slug}`} eyebrow="LOOK · LEARN · PLAY" title={copy.title} intro={copy.summary}>
    <div className="collection-detail-lead">
      <aside className="collection-start-card"><span>{en ? 'READY TO PLAY' : '바로 시작'}</span><h2>{en ? `${item.pieces}-piece recommended start` : `${item.pieces}피스 추천 시작`}</h2><p>{en ? 'The photograph is already selected. Choose a mode below and start with the suggested count.' : '사진은 이미 선택되어 있습니다. 아래에서 방식을 고르면 추천 조각 수로 바로 시작할 수 있습니다.'}</p><a className="primary-action" href="#collection-play">{en ? 'Choose mode and play ↓' : '방식 고르고 시작하기 ↓'}</a><Link href={`${base}/guide/first-puzzle`}>{en ? 'Learn the controls first' : '조작 방법 먼저 보기'}</Link></aside>
      <figure className="study-photo"><Image src={collectionPhoto(item, locale).url} alt={copy.alt} width={1200} height={900} sizes="(max-width: 760px) 100vw, 540px" priority /><figcaption>{en ? 'Same 4:3 crop as the puzzle · ' : '플레이판과 같은 4:3 영역 · '}<a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></figcaption></figure>
    </div>
    <p className="editorial-byline">{en ? <>Written and play-tested by <Link href="/en/editorial">Puzzly creator daehoon1027</Link> · Updated October 6, 2026</> : <>작성·플레이 검증 <Link href="/editorial">퍼즐리 제작자 daehoon1027</Link> · 2026년 10월 6일 업데이트</>}</p>
    <section id="collection-play" className="collection-play-first"><h2>{en ? 'Choose a mode and start' : '방식과 조각 수 선택'}</h2><p>{en ? 'Progress is not saved when you refresh or leave this page.' : '새로고침하거나 페이지를 떠나면 진행 상태는 저장되지 않습니다.'}</p><PuzzleHome key={`${slug}-${locale}`} locale={locale} preset={collectionPhoto(item, locale)} defaultPieces={item.pieces} embedded /></section>
    <section><h2>{en ? 'Why this photograph' : '이 사진을 고른 이유'}</h2><p>{copy.why}</p></section>
    <section><h2>{en ? 'Three clues to follow' : '세 가지 풀이 단서'}</h2>{copy.clues.map(([title, body], i) => <div key={title}><h3>{i + 1}. {title}</h3><p>{body}</p></div>)}</section>
    <section><h2>{en ? 'A common wrong turn' : '헷갈리기 쉬운 부분'}</h2><p>{copy.trap}</p></section>
    <section><h2>{en ? 'Your next challenge' : '완성 후 다음 도전'}</h2><p>{copy.challenge}</p></section>
    <section><h2>{en ? 'Try another way of looking' : '다음 퍼즐 고르기'}</h2><CollectionCards locale={locale} excludeSlug={slug} limit={3} /></section>
  </InfoPage>;
}

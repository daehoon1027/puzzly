import Image from 'next/image';
import Link from 'next/link';
import { collections, collectionPhoto, type Language } from '../content/collections';
import { InfoPage } from './info-page';
import { PuzzleHome } from './puzzle-home';

export function CollectionCards({ locale }: { locale: Language }) {
  const base = locale === 'en' ? '/en' : '';
  return <div className="collection-grid">{collections.map(item => <Link className="collection-card" key={item.slug} href={`${base}/collections/${item.slug}`}>
    <Image src={collectionPhoto(item, locale).url} alt={item[locale].alt} width={600} height={450} sizes="(max-width: 680px) 100vw, 33vw" />
    <div><span>{locale === 'en' ? `Start with ${item.pieces} pieces` : `${item.pieces}피스부터 시작`}</span><h3>{item[locale].title}</h3><p>{item[locale].summary}</p><b>{locale === 'en' ? 'Read the clues & play →' : '풀이 단서 읽고 시작하기 →'}</b></div>
  </Link>)}</div>;
}

export function CollectionIndex({ locale }: { locale: Language }) {
  const en = locale === 'en';
  return <InfoPage locale={locale} path={`${en ? '/en' : ''}/collections`} eyebrow="THE PUZZLY COLLECTION" title={en ? 'One photograph. A different way to look.' : '한 장의 사진, 서로 다른 관찰법'} intro={en ? 'Three selected photographs, with specific starting points and a playable puzzle on every page.' : '사진마다 다른 출발점을 짚었습니다. 선정 이유와 풀이 단서를 읽고 같은 페이지에서 직접 맞춰보세요.'}>
    <CollectionCards locale={locale} />
    <section><h2>{en ? 'How these puzzles were chosen' : '이 사진들을 고른 기준'}</h2><p>{en ? 'The lake teaches reflection, the forest teaches line continuity, and the skyline teaches overlapping shapes. These are three distinct exercises, not a random image feed. The suggested counts are starting points, not measured completion times or age ratings. Every study image uses the same crop as its game.' : '호수에서는 반사, 숲에서는 선의 연결, 도시에서는 겹치는 형태를 연습하도록 골랐습니다. 추천 조각 수는 시작을 돕는 제안이며 실제 완성 시간을 측정한 수치나 연령 등급이 아닙니다. 해설의 사진과 플레이판은 같은 영역을 사용합니다.'}</p><p>{en ? 'Photographs are supplied by Unsplash; Puzzly adds the selection, study notes, and puzzle interaction. Titles describe visible features and do not certify a location or season.' : '사진은 Unsplash에서 제공하며, 퍼즐리는 선정과 관찰 해설, 퍼즐 플레이를 제공합니다. 제목은 눈에 보이는 특징을 설명하며 촬영 장소나 계절을 보증하지 않습니다.'}</p></section>
  </InfoPage>;
}

export function CollectionDetail({ slug, locale }: { slug: string; locale: Language }) {
  const item = collections.find(item => item.slug === slug)!;
  const copy = item[locale];
  const en = locale === 'en';
  const base = en ? '/en' : '';
  return <InfoPage locale={locale} path={`${base}/collections/${slug}`} eyebrow="LOOK · LEARN · PLAY" title={copy.title} intro={copy.summary}>
    <figure className="study-photo"><Image src={collectionPhoto(item, locale).url} alt={copy.alt} width={1200} height={900} sizes="(max-width: 900px) 100vw, 860px" priority /><figcaption>{en ? 'Study image · Same 4:3 crop as the puzzle · ' : '관찰 사진 · 플레이판과 같은 4:3 영역 · '}<a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></figcaption></figure>
    <p className="editorial-byline">{en ? 'Puzzly editorial notes · Updated September 14, 2026' : '퍼즐리 관찰 노트 · 2026년 9월 14일 업데이트'}</p>
    <div className="content-links"><a href="#collection-play">{en ? 'Go to this puzzle ↓' : '이 사진으로 퍼즐 시작 ↓'}</a><Link href={`${base}/guide/first-puzzle`}>{en ? 'Learn the controls' : '조작 방법 먼저 익히기'}</Link></div>
    <section><h2>{en ? 'Why this photograph' : '이 사진을 고른 이유'}</h2><p>{copy.why}</p></section>
    <section><h2>{en ? 'Three clues to follow' : '세 가지 풀이 단서'}</h2>{copy.clues.map(([title, body], i) => <div key={title}><h3>{i + 1}. {title}</h3><p>{body}</p></div>)}</section>
    <section><h2>{en ? 'A common wrong turn' : '헷갈리기 쉬운 부분'}</h2><p>{copy.trap}</p></section>
    <section><h2>{en ? 'Your next challenge' : '완성 후 다음 도전'}</h2><p>{copy.challenge}</p></section>
    <section id="collection-play"><h2>{en ? 'Try the clues yourself' : '관찰한 단서로 직접 맞추기'}</h2><p>{en ? 'The photo is already selected. Choose your mode and count, then start. Progress is not saved when you refresh or leave this page.' : '사진은 이미 선택되어 있습니다. 방식과 조각 수를 고른 뒤 시작하세요. 새로고침하거나 페이지를 떠나면 진행 상태는 저장되지 않습니다.'}</p><PuzzleHome key={`${slug}-${locale}`} locale={locale} preset={collectionPhoto(item, locale)} defaultPieces={item.pieces} embedded /></section>
    <section><h2>{en ? 'Try another way of looking' : '다른 관찰법도 시도해보세요'}</h2><CollectionCards locale={locale} /></section>
  </InfoPage>;
}

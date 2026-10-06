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
  const base = en ? '/en' : '';
  return <InfoPage locale={locale} path={`${base}/collections`} eyebrow="THE PUZZLY COLLECTION" title={en ? 'One photograph. A different way to look.' : '한 장의 사진, 서로 다른 관찰법'} intro={en ? 'Six photographs were reviewed in their exact 4:3 playing crop. Each page explains a starting anchor, a likely mistake, and a playable next step.' : '여섯 장의 사진을 실제 플레이와 같은 4:3 영역으로 확인했습니다. 각 페이지에서 첫 기준점, 흔한 실수, 다음 도전을 읽고 바로 맞춰보세요.'}>
    <CollectionCards locale={locale} />
    <section><h2>{en ? 'How these puzzles were chosen' : '이 사진들을 고른 기준'}</h2><p>{en ? 'The lake teaches reflection, the forest line continuity, the skyline overlap, the beach directional boundaries, the fox silhouette, and the cake repeated detail. These are distinct exercises rather than a random image feed. Every study image uses the same crop as its game.' : '호수는 반사, 숲은 선의 연결, 도시는 겹치는 형태, 해변은 서로 다른 방향의 경계, 여우는 윤곽과 색 대비, 케이크는 반복 무늬를 연습하도록 골랐습니다. 무작위 이미지 목록이 아니며 해설과 플레이판은 같은 영역을 사용합니다.'}</p><p>{en ? 'Suggested counts are starting points, not measured completion times or age ratings. A lower count is the better choice whenever a small screen hides the clues described on the page.' : '추천 조각 수는 시작을 돕는 제안이며 측정된 완성 시간이나 연령 등급이 아닙니다. 작은 화면에서 페이지에 설명된 단서가 보이지 않는다면 조각 수를 낮추는 것이 더 적절합니다.'}</p><p>{en ? 'Photographs are supplied by Unsplash; Puzzly adds the selection, crop review, study notes, and puzzle interaction. Titles describe only visible features and do not certify a location or season.' : '사진은 Unsplash에서 제공하며, 퍼즐리는 사진 선정, 4:3 크롭 확인, 관찰 해설과 퍼즐 플레이를 제공합니다. 제목은 눈에 보이는 특징만 설명하며 촬영 장소나 계절을 보증하지 않습니다.'}</p></section>
    <section><h2>{en ? 'Choose by the clue you want to practise' : '연습할 단서에 따라 골라보세요'}</h2><div className="text-grid"><div><h3>{en ? 'Broad boundaries' : '큰 경계부터'}</h3><p>{en ? 'Start with the beach or skyline when you want to divide a picture into clear horizontal layers.' : '사진을 수평의 큰 층으로 나누는 연습은 해변이나 도시에서 시작하세요.'}</p></div><div><h3>{en ? 'A single subject' : '하나의 주제부터'}</h3><p>{en ? 'Choose the fox when one recognizable silhouette helps you expand into a soft background.' : '눈에 띄는 윤곽 하나에서 흐린 배경으로 확장하려면 여우를 선택하세요.'}</p></div><div><h3>{en ? 'Repetition' : '반복 무늬'}</h3><p>{en ? 'Use the forest or cake to compare similar trunks, swirls, and the small differences that break a pattern.' : '비슷한 줄기와 장식 사이의 작은 차이는 숲이나 케이크에서 비교해보세요.'}</p></div><div><h3>{en ? 'Reflection and overlap' : '반사와 겹침'}</h3><p>{en ? 'The lake separates real objects from reflections; the skyline separates buildings that cover one another.' : '호수에서는 실물과 반사를, 도시에서는 서로 겹쳐 보이는 건물을 구분합니다.'}</p></div></div></section>
    <aside className="info-cta"><h2>{en ? 'How the notes are produced' : '관찰 노트는 이렇게 작성합니다'}</h2><p>{en ? 'Read the crop-review, play-testing, authorship, and correction process used for every guide.' : '사진 크롭 확인, 플레이 검증, 작성자 표시와 수정 절차를 공개합니다.'}</p><Link href={`${base}/editorial`}>{en ? 'Read our editorial process →' : '콘텐츠 작성·검증 원칙 보기 →'}</Link></aside>
  </InfoPage>;
}

export function CollectionDetail({ slug, locale }: { slug: string; locale: Language }) {
  const item = collections.find(item => item.slug === slug)!;
  const copy = item[locale];
  const en = locale === 'en';
  const base = en ? '/en' : '';
  return <InfoPage locale={locale} path={`${base}/collections/${slug}`} eyebrow="LOOK · LEARN · PLAY" title={copy.title} intro={copy.summary}>
    <figure className="study-photo"><Image src={collectionPhoto(item, locale).url} alt={copy.alt} width={1200} height={900} sizes="(max-width: 900px) 100vw, 860px" priority /><figcaption>{en ? 'Study image · Same 4:3 crop as the puzzle · ' : '관찰 사진 · 플레이판과 같은 4:3 영역 · '}<a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></figcaption></figure>
    <p className="editorial-byline">{en ? <>Written and play-tested by <Link href="/en/editorial">Puzzly creator daehoon1027</Link> · Updated October 6, 2026</> : <>작성·플레이 검증 <Link href="/editorial">퍼즐리 제작자 daehoon1027</Link> · 2026년 10월 6일 업데이트</>}</p>
    <div className="content-links"><a href="#collection-play">{en ? 'Go to this puzzle ↓' : '이 사진으로 퍼즐 시작 ↓'}</a><Link href={`${base}/guide/first-puzzle`}>{en ? 'Learn the controls' : '조작 방법 먼저 익히기'}</Link></div>
    <section><h2>{en ? 'Why this photograph' : '이 사진을 고른 이유'}</h2><p>{copy.why}</p></section>
    <section><h2>{en ? 'Three clues to follow' : '세 가지 풀이 단서'}</h2>{copy.clues.map(([title, body], i) => <div key={title}><h3>{i + 1}. {title}</h3><p>{body}</p></div>)}</section>
    <section><h2>{en ? 'A common wrong turn' : '헷갈리기 쉬운 부분'}</h2><p>{copy.trap}</p></section>
    <section><h2>{en ? 'Your next challenge' : '완성 후 다음 도전'}</h2><p>{copy.challenge}</p></section>
    <section id="collection-play"><h2>{en ? 'Try the clues yourself' : '관찰한 단서로 직접 맞추기'}</h2><p>{en ? 'The photo is already selected. Choose your mode and count, then start. Progress is not saved when you refresh or leave this page.' : '사진은 이미 선택되어 있습니다. 방식과 조각 수를 고른 뒤 시작하세요. 새로고침하거나 페이지를 떠나면 진행 상태는 저장되지 않습니다.'}</p><PuzzleHome key={`${slug}-${locale}`} locale={locale} preset={collectionPhoto(item, locale)} defaultPieces={item.pieces} embedded /></section>
    <section><h2>{en ? 'Try another way of looking' : '다른 관찰법도 시도해보세요'}</h2><CollectionCards locale={locale} /></section>
  </InfoPage>;
}

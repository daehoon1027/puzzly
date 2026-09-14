import Image from 'next/image';
import Link from 'next/link';
import { guides } from '../content/guides';
import { collections, collectionPhoto, type Language } from '../content/collections';
import { InfoPage } from './info-page';
import { CollectionCards } from './collection-pages';
import { TileLesson } from './tile-lesson';

export function GuideIndex({ locale }: { locale: Language }) {
  const en = locale === 'en'; const base = en ? '/en' : '';
  return <InfoPage locale={locale} path={`${base}/guide`} eyebrow="PUZZLE FIELD GUIDE" title={en ? 'Learn a move. Read a photograph.' : '조작부터 관찰까지, 직접 해보는 퍼즐 가이드'} intro={en ? 'Start with a short swap exercise, then use real examples to choose a photo, a count, and your next clue.' : '짧은 교환 실습부터 시작해 사진 선택, 조각 수 비교, 막힌 상황의 풀이법을 실제 사례로 익힙니다.'}>
    <div className="article-links">{guides.map((guide, i) => <Link key={guide.slug} href={`${base}/guide/${guide.slug}`}><span>0{i + 1}</span><h2>{guide[locale].title}</h2><p>{guide[locale].summary}</p></Link>)}</div>
    <section><h2>{en ? 'A route for your first visit' : '처음이라면 이 순서로 해보세요'}</h2><p>{en ? 'Complete the two-tile exercise, open Mountain lake with 20 pieces, and locate the cabin before starting. Once it feels familiar, keep the photo and raise the count to 48. Move to the forest when you want to practise repeated lines, or the skyline for rooftops and overlapping shapes.' : '두 조각 교환 실습을 마친 뒤 산과 호수 20피스를 열어 오두막의 위치부터 확인하세요. 익숙해지면 사진을 유지하고 48피스로 늘립니다. 반복되는 선을 연습하려면 숲으로, 지붕과 겹치는 형태를 보려면 도시로 넘어가세요.'}</p></section>
    <section><h2>{en ? 'Before a longer puzzle' : '긴 퍼즐을 시작하기 전에'}</h2><p>{en ? 'Progress is kept only in the current page and is lost on refresh or navigation. Square swap counts exchanges; shape fit counts placement attempts, including misses. Do not compare those totals as equivalent scores. There is no account or installation.' : '진행은 현재 페이지 안에서만 유지되며 새로고침이나 페이지 이동 시 사라집니다. 정사각형 교환은 교환 횟수, 직소는 실패를 포함한 배치 시도를 세므로 두 모드의 숫자를 같은 점수처럼 비교하지 마세요. 회원가입과 설치는 필요하지 않습니다.'}</p></section>
    <CollectionCards locale={locale} />
  </InfoPage>;
}

function GridComparison({ locale }: { locale: Language }) {
  return <section><h2>{locale === 'en' ? 'One photo, three grids' : '사진은 같게, 격자만 다르게'}</h2><div className="grid-comparison">{[[20, 5, 4], [48, 8, 6], [120, 12, 10]].map(([count, columns, rows]) => <figure key={count}><div className="grid-study"><Image src={collectionPhoto(collections[0], locale).url} alt={collections[0][locale].alt} width={600} height={450} sizes="(max-width: 680px) 100vw, 280px" /><div aria-hidden="true" style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}>{Array.from({ length: count }, (_, i) => <span key={i} />)}</div></div><figcaption>{count} {locale === 'en' ? 'pieces' : '피스'} · {columns} × {rows}</figcaption></figure>)}</div><p>{locale === 'en' ? 'The image area is identical. These unshuffled grids show how much visual context remains inside a single piece.' : '모두 같은 영역의 사진입니다. 섞기 전 격자를 보며 한 조각에 남는 시각 단서의 양이 어떻게 달라지는지 비교하세요.'}</p></section>;
}

export function GuideDetail({ slug, locale }: { slug: string; locale: Language }) {
  const guide = guides.find(item => item.slug === slug)!; const copy = guide[locale];
  const en = locale === 'en'; const base = en ? '/en' : '';
  return <InfoPage locale={locale} path={`${base}/guide/${slug}`} eyebrow="PUZZLY PRACTICAL GUIDE" title={copy.title} intro={copy.summary}>
    <p className="editorial-byline">{en ? 'Puzzly guide · Updated September 14, 2026' : '퍼즐리 이용 가이드 · 2026년 9월 14일 업데이트'}</p>
    {slug === 'first-puzzle' && <TileLesson locale={locale} imageUrl={collectionPhoto(collections[0], locale).url} />}
    {slug === 'piece-count' && <GridComparison locale={locale} />}
    {copy.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
    <aside className="info-cta"><h2>{en ? 'Try it on a real puzzle' : '같은 사진으로 직접 확인하기'}</h2><p>{en ? 'Start with the mountain lake, or choose a different visual clue from the collection.' : '산과 호수에서 시작하거나, 컬렉션에서 다른 시각 단서를 골라보세요.'}</p><Link href={`${base}/collections/mountain-lake#collection-play`}>{en ? 'Play the mountain lake →' : '산과 호수 퍼즐 시작 →'}</Link></aside>
    <CollectionCards locale={locale} />
    <section><h2>{en ? 'Continue learning' : '다음 가이드'}</h2><div className="article-links">{guides.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`${base}/guide/${item.slug}`}><h3>{item[locale].title}</h3><p>{item[locale].summary}</p></Link>)}</div></section>
  </InfoPage>;
}

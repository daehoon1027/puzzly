import Image from 'next/image';
import Link from 'next/link';
import { guides } from '../content/guides';
import { collections, collectionPhoto, type Language } from '../content/collections';
import { InfoPage } from './info-page';
import { CollectionCards } from './collection-pages';
import { TileLesson } from './tile-lesson';

export function GuideIndex({ locale }: { locale: Language }) {
  const en = locale === 'en'; const base = en ? '/en' : '';
  return <InfoPage locale={locale} path={`${base}/guide`} eyebrow="PUZZLE FIELD GUIDE" title={en ? 'Learn a move. Read a photograph.' : '조작부터 관찰까지, 직접 해보는 퍼즐 가이드'} intro={en ? 'Seven practical guides connect the controls to real photographs, mobile play, repeatable clues, and a simple way to compare two sessions.' : '일곱 개의 실전 가이드에서 조작법과 실제 사진, 모바일 이용, 반복 가능한 단서와 두 판 비교법을 연결합니다.'}>
    <div className="article-links">{guides.map((guide, i) => <Link key={guide.slug} href={`${base}/guide/${guide.slug}`}><span>0{i + 1}</span><h2>{guide[locale].title}</h2><p>{guide[locale].summary}</p></Link>)}</div>
    <section><h2>{en ? 'A route for your first visit' : '처음이라면 이 순서로 해보세요'}</h2><p>{en ? 'Complete the two-tile exercise, open Mountain lake with 20 pieces, and locate the cabin before starting. Next learn the four anchor types, then compare 20, 48, and 120 pieces without changing the photograph. Use the mobile guide before a longer phone session.' : '두 조각 교환 실습을 마친 뒤 산과 호수 20피스를 열어 오두막의 위치부터 확인하세요. 다음으로 네 가지 기준점을 익히고, 사진을 바꾸지 않은 채 20·48·120피스를 비교합니다. 휴대폰에서 긴 퍼즐을 시작하기 전에는 모바일 조작 안내를 먼저 확인하세요.'}</p></section>
    <section><h2>{en ? 'Before a longer puzzle' : '긴 퍼즐을 시작하기 전에'}</h2><p>{en ? 'Progress is kept only in the current page and is lost on refresh or navigation. Square swap counts exchanges; shape fit counts placement attempts, including misses. Do not compare those totals as equivalent scores. There is no account or installation.' : '진행은 현재 페이지 안에서만 유지되며 새로고침이나 페이지 이동 시 사라집니다. 정사각형 교환은 교환 횟수, 직소는 실패를 포함한 배치 시도를 세므로 두 모드의 숫자를 같은 점수처럼 비교하지 마세요. 회원가입과 설치는 필요하지 않습니다.'}</p></section>
    <section><h2>{en ? 'What we tested before publishing' : '게시 전에 확인한 항목'}</h2><p>{en ? 'Guide instructions are checked against the current controls, the exact collection crop, and the stated counting rules. Claims about completion time, concentration, or age are deliberately avoided because Puzzly does not collect evidence for them.' : '가이드의 조작 순서, 컬렉션의 실제 4:3 사진 영역, 이동 횟수 집계 방식을 현재 서비스에서 확인합니다. 퍼즐리는 완성 시간·집중력·연령 효과를 측정하지 않으므로 그런 효과를 단정하지 않습니다.'}</p><p><Link href={`${base}/editorial`}>{en ? 'See the full writing and testing process →' : '전체 작성·검증 절차 보기 →'}</Link></p></section>
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
    <p className="editorial-byline">{en ? <>Written and play-tested by <Link href="/en/editorial">Puzzly creator daehoon1027</Link> · Updated October 6, 2026</> : <>작성·플레이 검증 <Link href="/editorial">퍼즐리 제작자 daehoon1027</Link> · 2026년 10월 6일 업데이트</>}</p>
    {slug === 'first-puzzle' && <TileLesson locale={locale} imageUrl={collectionPhoto(collections[0], locale).url} />}
    {slug === 'piece-count' && <GridComparison locale={locale} />}
    {copy.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
    <aside className="info-cta"><h2>{en ? 'Try it on a real puzzle' : '같은 사진으로 직접 확인하기'}</h2><p>{en ? 'Start with the mountain lake, or choose a different visual clue from the collection.' : '산과 호수에서 시작하거나, 컬렉션에서 다른 시각 단서를 골라보세요.'}</p><Link href={`${base}/collections/mountain-lake#collection-play`}>{en ? 'Play the mountain lake →' : '산과 호수 퍼즐 시작 →'}</Link></aside>
    <CollectionCards locale={locale} />
    <section><h2>{en ? 'Continue learning' : '다음 가이드'}</h2><div className="article-links">{guides.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`${base}/guide/${item.slug}`}><h3>{item[locale].title}</h3><p>{item[locale].summary}</p></Link>)}</div></section>
  </InfoPage>;
}

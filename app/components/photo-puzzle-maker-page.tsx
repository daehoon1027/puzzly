import Link from 'next/link';
import { CollectionCards } from './collection-pages';
import { InfoPage } from './info-page';

const copy = {
  ko: {
    eyebrow: 'FREE ONLINE PHOTO PUZZLE',
    title: '사진 퍼즐 만들기: 검색부터 완성까지 한 화면에서',
    intro: '파일을 올리지 않아도 검색어로 사진을 고르고, 12~400피스의 정사각형 교환 또는 직소 퍼즐을 무료로 바로 시작할 수 있습니다.',
    updated: '퍼즐리 이용 안내 · 2026년 10월 2일 업데이트',
    ctaTitle: '지금 사진을 고르고 시작하세요',
    ctaBody: '회원가입과 설치 없이 검색어를 입력하고 추천 사진 중 한 장을 선택하면 됩니다.',
    cta: '무료 사진 퍼즐 만들기 →',
    howTitle: '온라인 사진 퍼즐 만드는 방법',
    steps: [
      ['1. 검색어 입력', '알프스의 봄, 호숫가 오두막, 햇살 드는 숲처럼 화면에 보였으면 하는 장소나 사물을 구체적으로 입력합니다.'],
      ['2. 사진과 방식 선택', '추천 사진을 고른 뒤 두 조각의 자리를 바꾸는 정사각형 교환 또는 조각함에서 모양을 맞추는 직소 방식을 선택합니다.'],
      ['3. 조각 수 선택', '처음에는 20피스가 편합니다. 익숙해지면 같은 사진을 유지한 채 48·80·120피스로 높여 차이를 비교해보세요.'],
    ],
    modeTitle: '두 가지 방식의 차이',
    modeBody: '정사각형 교환은 선택한 두 조각의 위치를 바꾸고, 직소 끼우기는 조각함의 조각을 원래 홈에 놓습니다. 두 방식은 이동 횟수를 세는 기준이 다르므로 점수처럼 직접 비교하지 않는 것이 좋습니다.',
    photoTitle: '내 사진 파일을 올리는 방식인가요?',
    photoBody: '아닙니다. 현재 퍼즐리는 사용자가 파일을 업로드하는 대신 입력한 검색어와 어울리는 외부 제공 사진을 추천합니다. 사진을 서버에 저장하지 않으며, 카드에 사진 제공처를 표시합니다.',
    countTitle: '처음에는 몇 피스가 좋을까요?',
    counts: [
      ['12~20피스', '휴대폰이나 첫 플레이', '큰 색 영역과 사물 위치를 익히기 좋습니다.'],
      ['30~48피스', '기본 난이도', '지붕·나무줄기·물가처럼 이어지는 경계를 관찰합니다.'],
      ['80~120피스', '세부 관찰', '창문 간격, 반사, 잎의 질감처럼 작은 차이를 구분합니다.'],
      ['200~400피스', '큰 화면과 긴 플레이', '진행이 저장되지 않으므로 페이지 이동이나 새로고침 전에 완성할 수 있을 때 선택하세요.'],
    ],
    faqTitle: '사진 퍼즐 만들기 FAQ',
    faqs: [
      ['무료인가요?', '네. 사진 검색, 퍼즐 생성과 플레이에 결제나 회원가입이 필요하지 않습니다.'],
      ['휴대폰에서도 할 수 있나요?', '가능합니다. 직소 모드에서 끌기가 불편하면 조각과 빈 홈을 차례로 눌러 배치할 수 있습니다.'],
      ['진행 상황이 저장되나요?', '현재는 저장되지 않습니다. 새로고침하거나 다른 페이지로 이동하면 진행 중인 퍼즐을 다시 시작해야 합니다.'],
      ['어떤 사진이 맞추기 쉬운가요?', '하늘·땅처럼 큰 색 영역이 나뉘고 오두막·큰 나무처럼 위치를 기억할 기준점이 있는 사진이 입문용으로 좋습니다.'],
    ],
    collectionTitle: '검색 없이 바로 시작하는 추천 사진',
    collectionBody: '사진을 고르기 어렵다면 풀이 단서와 권장 조각 수가 준비된 테마별 퍼즐에서 시작하세요.',
    guide: '사진 선택 가이드 읽기',
  },
  en: {
    eyebrow: 'FREE ONLINE PHOTO PUZZLE',
    title: 'Make a photo puzzle online, from search to finish',
    intro: 'Search for a scene, choose a photograph, and start a free 12–400 piece square-swap or jigsaw puzzle without uploading a file.',
    updated: 'Puzzly guide · Updated October 2, 2026',
    ctaTitle: 'Choose a photo and start now',
    ctaBody: 'No account or installation is required. Enter a search phrase and select one of the suggested photographs.',
    cta: 'Make a free photo puzzle →',
    howTitle: 'How to make an online photo puzzle',
    steps: [
      ['1. Enter a search phrase', 'Describe a visible place or object, such as spring in the Alps, a cabin beside a lake, or a sunlit forest.'],
      ['2. Choose a photo and mode', 'Select a result, then use Square swap to exchange two tiles or Shape fit to place tray pieces into their original spaces.'],
      ['3. Choose a piece count', 'Twenty pieces is a comfortable start. Keep the photo and raise the count to 48, 80, or 120 when you want smaller visual clues.'],
    ],
    modeTitle: 'Two different ways to play',
    modeBody: 'Square swap exchanges the positions of two selected tiles. Shape fit places a tray piece into its original space. The modes count moves differently, so their totals are not equivalent scores.',
    photoTitle: 'Do I upload my own photo file?',
    photoBody: 'No. Puzzly currently recommends externally supplied photographs that match your search phrase. It does not upload or store a personal photo file, and every result identifies its image source.',
    countTitle: 'How many pieces should I choose?',
    counts: [
      ['12–20 pieces', 'Phone or first play', 'Large color regions and recognizable objects remain easy to locate.'],
      ['30–48 pieces', 'Everyday difficulty', 'Follow continuous boundaries such as roofs, trunks, and shorelines.'],
      ['80–120 pieces', 'Close observation', 'Compare window spacing, reflections, and fine texture.'],
      ['200–400 pieces', 'Large screen and longer play', 'Progress is not saved, so choose this only when you can finish before leaving or refreshing.'],
    ],
    faqTitle: 'Photo puzzle maker FAQ',
    faqs: [
      ['Is it free?', 'Yes. Searching, creating, and playing a puzzle requires no payment or account.'],
      ['Does it work on a phone?', 'Yes. In Shape fit, tap a piece and then its space if dragging feels awkward.'],
      ['Is my progress saved?', 'Not yet. Refreshing or leaving the page restarts the current puzzle.'],
      ['Which photos are easiest?', 'Start with a scene that separates broad regions and includes a memorable anchor such as a cabin or a large tree.'],
    ],
    collectionTitle: 'Start with a selected photograph',
    collectionBody: 'If choosing is difficult, use a collection puzzle with written clues and a suggested starting count.',
    guide: 'Read the photo selection guide',
  },
} as const;

export function PhotoPuzzleMakerPage({ locale }: { locale: 'ko' | 'en' }) {
  const t = copy[locale];
  const en = locale === 'en';
  const base = en ? '/en' : '';
  const pagePath = `${base}/photo-puzzle-maker`;
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return <InfoPage compact locale={locale} path={pagePath} eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    <p className="editorial-byline">{t.updated}</p>
    <aside className="info-cta info-cta-first"><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p><Link href={`${base}/#make`}>{t.cta}</Link></aside>
    <section><h2>{t.howTitle}</h2><div className="text-grid">{t.steps.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section><h2>{t.modeTitle}</h2><p>{t.modeBody}</p></section>
    <section><h2>{t.photoTitle}</h2><p>{t.photoBody}</p></section>
    <section><h2>{t.countTitle}</h2><div className="guide-table"><div><b>{en ? 'Pieces' : '조각 수'}</b><b>{en ? 'Best for' : '추천 환경'}</b><b>{en ? 'What to notice' : '관찰할 점'}</b></div>{t.counts.map(([count, use, note]) => <div key={count}><b>{count}</b><span>{use}</span><span>{note}</span></div>)}</div></section>
    <section><h2>{t.faqTitle}</h2><div className="faq-list">{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section><h2>{t.collectionTitle}</h2><p>{t.collectionBody}</p><CollectionCards locale={locale} /></section>
    <div className="content-links"><Link href={`${base}/#make`}>{t.cta}</Link><Link href={`${base}/guide/image-choice`}>{t.guide}</Link></div>
  </InfoPage>;
}

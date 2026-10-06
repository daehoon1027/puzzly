import Link from 'next/link';
import { InfoPage } from './info-page';

const copy = {
  ko: {
    eyebrow: 'EDITORIAL & TESTING',
    title: '누가, 어떻게 퍼즐리 콘텐츠를 만드나요?',
    intro: '퍼즐리의 사진 선정, 관찰 노트, 조작 안내와 번역을 작성하고 검증하는 절차를 공개합니다.',
    authorTitle: '작성자와 책임 범위',
    authorBody: '퍼즐리의 기능과 편집 콘텐츠는 제작자 daehoon1027이 관리합니다. 사진 퍼즐 기능을 개발하고, 고정 컬렉션의 사진 영역을 확인하며, 가이드의 조작 순서가 현재 화면과 일치하는지 검토합니다. 위치·계절·집중력 효과처럼 직접 확인하지 않은 사실은 제목이나 설명으로 단정하지 않습니다.',
    profile: '공개 개발 프로필 보기 →',
    selectTitle: '사진 선정과 관찰 노트 작성',
    selectSteps: [
      ['1. 실제 플레이 영역 확인', '검색 카드가 아니라 게임에서 사용하는 4:3 크롭을 먼저 확인합니다. 가장자리에서 잘리는 피사체와 모바일에서 사라지는 작은 단서가 없는지 살펴봅니다.'],
      ['2. 서로 다른 단서 기록', '색 영역, 경계선, 한 번만 등장하는 형태, 반복이 깨지는 지점을 손으로 구분합니다. 최소 세 가지 단서를 설명할 수 있는 사진만 고정 컬렉션에 넣습니다.'],
      ['3. 오판 가능성 확인', '색은 비슷하지만 질감이 다르거나, 같은 무늬가 반복되는 부분을 찾아 ‘헷갈리기 쉬운 부분’에 기록합니다. 사진에 보이지 않는 장소나 사건을 추정하지 않습니다.'],
      ['4. 난이도는 제안으로 표시', '추천 조각 수는 연령 등급이나 측정된 완성 시간이 아닙니다. 해당 사진의 단서가 한 조각 안에 얼마나 남는지에 따라 시작점을 제안합니다.'],
    ],
    testTitle: '게시 전 플레이 검증',
    testBody: '정사각형 교환은 두 조각 선택과 진행률 변화를, 직소 끼우기는 조각 선택·홈 배치·실패 시 조각함 유지 여부를 확인합니다. 데스크톱과 390px 폭의 모바일 화면에서 첫 선택 화면, 긴 제목의 줄 처리, 가로 넘침과 터치 대체 조작을 점검합니다. 진행 저장이 없다는 현재 제한도 관련 페이지에 명시합니다.',
    automationTitle: 'AI와 자동화 도구 사용',
    automationBody: '초안 구성, 영어 번역, 코드 점검 과정에서 AI 도구의 도움을 받을 수 있습니다. 다만 고정 컬렉션의 사진은 실제 4:3 화면으로 확인하고, 기능 설명은 현재 코드와 브라우저 동작에 대조하며, 게시 전 최종 문장과 사실 관계는 제작자가 검토합니다. 자동으로 생성한 검색 결과 설명은 고정 관찰 노트로 간주하지 않습니다.',
    sourceTitle: '외부 사진과 출처',
    sourceBody: '실시간 검색 결과는 Pexels API에서, 고정 컬렉션 사진은 Unsplash에서 제공됩니다. 사진의 권리는 각 제공처와 사진가에게 있으며 퍼즐리는 사진 자체의 소유권을 주장하지 않습니다. 퍼즐리가 추가하는 가치는 4:3 크롭 검토, 사진별 관찰 단서, 흔한 오판과 실제 퍼즐 상호작용입니다.',
    adsTitle: '광고와 편집 독립성',
    adsBody: '광고 승인 여부나 광고 단가에 따라 사진과 가이드 주제를 정하지 않습니다. 광고는 콘텐츠보다 많게 배치하지 않고, 퍼즐 조작을 가리거나 클릭을 유도하는 문구를 사용하지 않는 것을 원칙으로 합니다. 광고·분석·외부 이미지 서비스의 데이터 처리는 개인정보처리방침에서 설명합니다.',
    correctionsTitle: '주요 수정 기록',
    corrections: [
      ['2026년 10월 6일', '해변·여우·케이크 관찰 퍼즐과 세 개의 실전 가이드 추가. 작성자, 사진 검토, 플레이 검증과 AI 보조 사용 절차 공개.'],
      ['2026년 10월 2일', '사진 퍼즐 만들기 안내 페이지와 한영 검색 설명 보강.'],
      ['2026년 9월 14일', '호수·숲·도시 컬렉션과 첫 네 개의 실전 가이드 공개.'],
    ],
    correctionTitle: '수정 요청과 문의',
    correctionBody: '사진 설명, 출처, 조작 안내 또는 번역에서 잘못된 부분을 발견하면 해당 페이지 주소와 수정 근거를 보내주세요. 확인 가능한 오류는 내용을 고치고 필요한 경우 이 기록에 반영합니다.',
    contact: '수정 요청 보내기 →',
  },
  en: {
    eyebrow: 'EDITORIAL & TESTING',
    title: 'Who creates Puzzly content, and how?',
    intro: 'This page explains how photographs, study notes, control instructions, and translations are written and checked.',
    authorTitle: 'Author and responsibility',
    authorBody: 'Puzzly creator daehoon1027 maintains both the puzzle features and editorial content. The work includes developing the game, reviewing the exact crop used by fixed collections, and checking that instructions still match the current controls. Titles do not assert an unverified location, season, or effect on concentration.',
    profile: 'View the public development profile →',
    selectTitle: 'Selecting photographs and writing notes',
    selectSteps: [
      ['1. Review the playing crop', 'We inspect the 4:3 crop used by the game rather than relying on a search thumbnail. Subjects cut by an edge and clues that disappear on a phone are considered before selection.'],
      ['2. Record different kinds of evidence', 'We separate broad color, boundaries, one-off shapes, and breaks in repetition. A photograph enters the fixed collection only when at least three useful clues can be explained.'],
      ['3. Identify likely mistakes', 'We locate areas that share color but differ in texture, or patterns that repeat with small changes. Notes describe only what is visible rather than guessing a place or event.'],
      ['4. Present difficulty as a suggestion', 'A starting count is not an age rating or measured completion time. It reflects how much of the chosen visual evidence remains inside a piece.'],
    ],
    testTitle: 'Play-testing before publication',
    testBody: 'For Square swap we verify two-tile selection and progress changes. For Shape fit we check piece selection, placement, and that a wrong attempt remains in the tray. Desktop and 390px mobile views are reviewed for first-screen access, long labels, horizontal overflow, and tap alternatives. The current lack of saved progress is stated wherever it affects a longer puzzle.',
    automationTitle: 'Use of AI and automation',
    automationBody: 'AI tools may assist with outlining, English translation, and code review. Fixed collection photographs are still inspected in the real 4:3 view, functional claims are checked against current code and browser behavior, and the creator reviews wording and facts before publication. Automatically supplied search-result descriptions are not treated as fixed editorial notes.',
    sourceTitle: 'External photographs and attribution',
    sourceBody: 'Live search results come from the Pexels API and fixed collection photographs from Unsplash. Rights remain with their photographers and providers; Puzzly does not claim ownership. Puzzly contributes crop review, photograph-specific clues, likely mistakes, and the playable puzzle interaction.',
    adsTitle: 'Advertising and editorial independence',
    adsBody: 'Photographs and guides are not selected according to ad approval or advertising rates. Ads should never outnumber the content, cover puzzle controls, or use language that encourages a click. Data practices for advertising, analytics, and external images are explained in the privacy policy.',
    correctionsTitle: 'Material update log',
    corrections: [
      ['October 6, 2026', 'Added beach, fox, and cake studies plus three practical guides. Published authorship, crop review, play-testing, and AI-assistance procedures.'],
      ['October 2, 2026', 'Added the photo puzzle maker landing page and expanded bilingual search explanations.'],
      ['September 14, 2026', 'Published lake, forest, and skyline collections and the first four practical guides.'],
    ],
    correctionTitle: 'Corrections and contact',
    correctionBody: 'If a photograph description, source, instruction, or translation is wrong, send the page URL and evidence for the correction. Verifiable errors are corrected and material changes may be added to this log.',
    contact: 'Send a correction →',
  },
} as const;

export function EditorialPage({ locale }: { locale: 'ko' | 'en' }) {
  const t = copy[locale];
  const en = locale === 'en';
  const base = en ? '/en' : '';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'daehoon1027',
      jobTitle: en ? 'Puzzly creator and editor' : '퍼즐리 제작자·편집자',
      url: `https://puzzly-one.vercel.app${base}/editorial`,
      sameAs: ['https://github.com/daehoon1027'],
    },
  };

  return <InfoPage locale={locale} path={`${base}/editorial`} eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section><h2>{t.authorTitle}</h2><p>{t.authorBody}</p><p><a href="https://github.com/daehoon1027" target="_blank" rel="noreferrer">{t.profile}</a></p></section>
    <section><h2>{t.selectTitle}</h2><div className="text-grid">{t.selectSteps.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section><h2>{t.testTitle}</h2><p>{t.testBody}</p></section>
    <section><h2>{t.automationTitle}</h2><p>{t.automationBody}</p></section>
    <section><h2>{t.sourceTitle}</h2><p>{t.sourceBody}</p></section>
    <section><h2>{t.adsTitle}</h2><p>{t.adsBody}</p><p><Link href={`${base}/privacy`}>{en ? 'Read the privacy policy →' : '개인정보처리방침 보기 →'}</Link></p></section>
    <section><h2>{t.correctionsTitle}</h2><div className="revision-list">{t.corrections.map(([date, change]) => <div key={date}><b>{date}</b><span>{change}</span></div>)}</div></section>
    <section><h2>{t.correctionTitle}</h2><p>{t.correctionBody}</p><p><Link className="contact-button" href={`${base}/contact`}>{t.contact}</Link></p></section>
  </InfoPage>;
}

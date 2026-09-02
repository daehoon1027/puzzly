import Link from 'next/link';

export function SiteHeader({ locale }: { locale: 'ko' | 'en' }) {
  const isEnglish = locale === 'en';

  return (
    <header className="topbar">
      <Link className="brand" href={isEnglish ? '/en' : '/'} aria-label={isEnglish ? 'Puzzly home' : '퍼즐리 홈'}>
        <span className="brand-mark">P</span>
        <span>{isEnglish ? 'Puzzly' : '퍼즐리'}</span>
      </Link>
      <div className="header-actions">
        <nav className="site-nav" aria-label={isEnglish ? 'Main menu' : '주요 메뉴'}>
          <Link href={isEnglish ? '/en#make' : '/#make'}>{isEnglish ? 'Make a puzzle' : '퍼즐 만들기'}</Link>
          <Link href={isEnglish ? '/en#notes' : '/guide'}>{isEnglish ? 'Puzzle guide' : '퍼즐 가이드'}</Link>
          <Link href="/about">{isEnglish ? 'About' : '서비스 소개'}</Link>
          <Link href="/contact">{isEnglish ? 'Contact' : '문의'}</Link>
        </nav>
        <nav className="language-switch" aria-label={isEnglish ? 'Choose language' : '언어 선택'}>
          <Link href="/" lang="ko" aria-current={!isEnglish ? 'page' : undefined}>한국어</Link>
          <Link href="/en" lang="en" aria-current={isEnglish ? 'page' : undefined}>English</Link>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';

export function SiteFooter({ locale }: { locale: 'ko' | 'en' }) {
  const isEnglish = locale === 'en';

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" href={isEnglish ? '/en' : '/'}>
          <span className="brand-mark">P</span>
          <span>{isEnglish ? 'Puzzly' : '퍼즐리'}</span>
        </Link>
        <p>{isEnglish ? 'Pick a scene and complete it one piece at a time.' : '원하는 장면을 고르고 한 조각씩 완성하는 무료 이미지 퍼즐입니다.'}</p>
      </div>
      <nav aria-label={isEnglish ? 'Footer menu' : '하단 메뉴'}>
        <Link href={isEnglish ? '/en#notes' : '/guide'}>{isEnglish ? 'Puzzle guide' : '퍼즐 가이드'}</Link>
        <Link href={isEnglish ? '/en/about' : '/about'}>{isEnglish ? 'About' : '서비스 소개'}</Link>
        <Link href="/privacy">{isEnglish ? 'Privacy' : '개인정보처리방침'}</Link>
        <Link href="/terms">{isEnglish ? 'Terms' : '이용약관'}</Link>
        <Link href={isEnglish ? '/en/contact' : '/contact'}>{isEnglish ? 'Contact' : '문의하기'}</Link>
      </nav>
      <span>© 2026 Puzzly. All rights reserved.</span>
    </footer>
  );
}

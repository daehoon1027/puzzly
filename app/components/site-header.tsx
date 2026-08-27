import Link from 'next/link';

export function SiteHeader() {
  return <header className="topbar"><Link className="brand" href="/" aria-label="퍼즐리 홈"><span className="brand-mark">P</span><span>퍼즐리</span></Link><nav className="site-nav" aria-label="주요 메뉴"><Link href="/#make">퍼즐 만들기</Link><Link href="/guide">퍼즐 가이드</Link><Link href="/about">서비스 소개</Link><Link href="/contact">문의</Link></nav></header>;
}

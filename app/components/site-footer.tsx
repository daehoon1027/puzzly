import Link from 'next/link';

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-brand"><Link className="brand" href="/"><span className="brand-mark">P</span><span>퍼즐리</span></Link><p>원하는 장면을 고르고 한 조각씩 완성하는 무료 이미지 퍼즐입니다.</p></div><nav aria-label="하단 메뉴"><Link href="/guide">퍼즐 가이드</Link><Link href="/about">서비스 소개</Link><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">이용약관</Link><Link href="/contact">문의하기</Link></nav><span>© 2026 Puzzly. All rights reserved.</span></footer>;
}

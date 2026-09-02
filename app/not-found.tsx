import Link from 'next/link';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';

export default function NotFound() {
  return <main><SiteHeader locale="ko"/><section className="not-found"><span>404</span><h1>찾으시는 조각이 보이지 않아요</h1><p>주소가 바뀌었거나 존재하지 않는 페이지입니다. 퍼즐 만들기로 돌아가거나 가이드를 살펴보세요.</p><div><Link href="/#make">퍼즐 만들기</Link><Link href="/guide">퍼즐 가이드</Link></div></section><SiteFooter locale="ko"/></main>;
}

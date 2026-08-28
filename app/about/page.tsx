import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage } from '../components/info-page';
export const metadata: Metadata={title:'서비스 소개',description:'이미지를 고르고 난이도와 방식을 선택해 즐기는 무료 웹 퍼즐, 퍼즐리를 소개합니다.',alternates:{canonical:'/about'}};
export default function Page(){return <InfoPage eyebrow="ABOUT PUZZLY" title="한 장의 그림을 오래 바라보는 방법" intro="퍼즐리는 검색한 주제에 어울리는 이미지를 고르고, 원하는 방식과 난이도로 바로 즐길 수 있는 무료 웹 퍼즐입니다.">
<section><h2>퍼즐리를 만든 이유</h2><p>짧은 영상과 빠른 화면 전환이 익숙한 일상에서, 한 장의 그림을 천천히 살펴보는 시간은 생각보다 특별합니다. 퍼즐리는 설치나 회원가입 없이 누구나 작은 몰입을 시작할 수 있도록 만들었습니다. 검색어 하나를 입력하고, 마음에 드는 이미지를 고른 뒤, 자신의 속도에 맞는 조각 수를 선택하면 됩니다.</p><p>이 서비스의 핵심은 정답을 빨리 찾는 데 있지 않습니다. 색의 미묘한 차이, 사물의 윤곽, 반복되는 질감과 조각의 굴곡을 관찰하며 그림을 다시 발견하는 과정 자체를 중요하게 생각합니다.</p></section>
<section><h2>두 가지 퍼즐 방식</h2><div className="text-grid"><div><h3>버전 1 · 정사각형 교환</h3><p>같은 크기의 조각 두 개를 차례로 눌러 자리를 바꿉니다. 원본 이미지의 위치와 색 흐름을 중심으로 생각하는 방식이라 처음 시작하는 분에게 잘 맞습니다.</p></div><div><h3>버전 2 · 직소 모양 끼우기</h3><p>서로 다른 굴곡을 가진 조각을 조각함에서 골라 같은 모양의 홈에 놓습니다. 이미지 단서와 조각의 실루엣을 함께 관찰할 수 있습니다.</p></div></div></section>
<section><h2>콘텐츠와 이미지 원칙</h2><p>퍼즐리의 사용 안내, 난이도 설명, 퍼즐 팁은 서비스 운영팀이 직접 작성합니다. 추천 이미지는 Pexels 검색과 사전 선별한 Unsplash 이미지에서 불러오며 각 카드에 사진작가와 제공처 출처를 표시합니다. 퍼즐리는 외부 이미지의 소유권을 주장하지 않으며 권리 관련 요청은 확인 후 대응합니다.</p><p>어린이부터 성인까지 부담 없이 사용할 수 있는 화면과 표현을 지향하며, 과도한 광고나 퍼즐 진행을 방해하는 배치를 피하는 것을 운영 원칙으로 삼습니다.</p></section>
<aside className="info-cta"><h2>직접 퍼즐을 만들어보세요</h2><p>단어 하나로 네 장의 후보를 살펴보고 12피스부터 400피스까지 난이도를 골라볼 수 있습니다.</p><Link href="/#make">퍼즐 만들기 →</Link></aside></InfoPage>}

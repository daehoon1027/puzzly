import type { Metadata } from 'next';
import { InfoPage } from '../components/info-page';
export const metadata: Metadata={title:'문의하기',description:'퍼즐리의 오류, 이미지 권리, 개인정보 및 개선 의견을 이메일로 접수하는 방법입니다.',alternates:{canonical:'/contact'}};
export default function Page(){return <InfoPage path="/contact" eyebrow="CONTACT" title="퍼즐리에 이야기해 주세요" intro="오류 신고, 기능 제안, 이미지 권리 및 개인정보 관련 문의를 이메일로 확인하고 서비스 개선에 반영합니다.">
<section><h2>문의 접수 방법</h2><p>문의는 이메일로 받습니다. 아래 버튼을 누르면 기본 메일 앱이 열리며, 제목과 내용을 작성해 보내주세요.</p><p><a className="contact-button" href="mailto:daehoon1027@gmail.com?subject=%ED%8D%BC%EC%A6%90%EB%A6%AC%20%EB%AC%B8%EC%9D%98">이메일로 문의하기 →</a></p><p>문의 이메일: <a href="mailto:daehoon1027@gmail.com">daehoon1027@gmail.com</a></p></section>
<section><h2>더 빠른 확인을 위해 알려주세요</h2><ul><li>오류가 발생한 페이지와 선택한 퍼즐 버전</li><li>조각 수, 사용한 검색어, 사용 기기와 브라우저</li><li>문제가 반복되는 순서와 가능한 경우 화면 캡처</li></ul><p>문의 처리에 필요하지 않은 주민등록번호, 금융정보 등 민감한 개인정보는 이메일에 포함하지 마세요.</p></section>
<section><h2>문의 유형</h2><div className="text-grid"><div><h3>기능 및 오류</h3><p>조각이 움직이지 않거나 이미지가 표시되지 않는 문제와 접근성 개선 의견을 알려주세요.</p></div><div><h3>콘텐츠 및 권리</h3><p>추천 이미지의 출처, 저작권, 부적절한 이미지 요청은 해당 이미지와 검색어를 함께 적어주세요.</p></div><div><h3>개인정보</h3><p>쿠키, 외부 서비스 요청, 개인정보처리방침과 관련된 질문을 접수합니다.</p></div></div></section></InfoPage>}

import type { Metadata } from 'next';
import { InfoPage } from '../components/info-page';
export const metadata: Metadata={title:'개인정보처리방침',description:'퍼즐리의 개인정보 처리, 외부 이미지, 쿠키 및 광고 관련 안내입니다.',alternates:{canonical:'/privacy'}};
export default function Page(){return <InfoPage eyebrow="PRIVACY" title="개인정보처리방침" intro="퍼즐리는 필요한 정보만 최소한으로 다루며, 방문자가 서비스의 데이터 흐름을 이해할 수 있도록 공개합니다. 시행일: 2026년 8월 27일">
<section><h2>1. 수집하는 개인정보</h2><p>퍼즐리는 회원가입 기능을 제공하지 않으며 이름, 전화번호, 주소 등의 개인정보를 직접 입력받아 서버에 저장하지 않습니다. 사용자가 입력한 이미지 검색어, 선택한 퍼즐 이미지, 조각 수와 진행 상태는 퍼즐 기능을 제공하기 위해 브라우저에서 처리됩니다.</p></section>
<section><h2>2. 자동으로 전달될 수 있는 정보</h2><p>사이트 접속 과정에서 호스팅 제공자 또는 외부 콘텐츠 제공자에게 IP 주소, 브라우저 종류, 접속 시각, 요청한 주소와 같은 일반적인 접속 정보가 전달될 수 있습니다. 이는 보안, 장애 대응, 이미지 제공 등 각 서비스의 운영 목적에 따라 처리될 수 있습니다.</p></section>
<section><h2>3. 외부 이미지 서비스</h2><p>추천 이미지는 Unsplash 및 Flickr 기반 이미지 주소 등 외부 제공처에서 불러올 수 있습니다. 이미지가 표시될 때 해당 제공처로 네트워크 요청이 전송되며 외부 제공처의 개인정보처리방침이 적용될 수 있습니다. 퍼즐리는 외부 사이트의 데이터 처리 방식을 통제하지 않습니다.</p></section>
<section><h2>4. 쿠키와 Google 광고</h2><p>현재 퍼즐리 자체는 퍼즐 진행을 위해 필수 쿠키를 설정하지 않습니다. 향후 Google AdSense가 적용되는 경우 Google을 포함한 제3자 광고 사업자가 쿠키를 사용하여 이 사이트 또는 다른 사이트에 대한 이전 방문 기록을 바탕으로 광고를 제공할 수 있습니다.</p><p>Google의 광고 쿠키 사용으로 Google과 파트너는 방문자의 관심사에 맞는 광고를 제공할 수 있습니다. 방문자는 <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google 광고 설정</a>에서 맞춤 광고를 관리하거나 사용 중지할 수 있으며, <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">AboutAds 선택 페이지</a>에서 제3자 사업자의 맞춤 광고 쿠키를 관리할 수 있습니다.</p></section>
<section><h2>5. 보유 기간과 삭제</h2><p>퍼즐리는 사용자의 검색어와 퍼즐 진행 상태를 자체 데이터베이스에 보관하지 않습니다. 브라우저 메모리에 있는 진행 상태는 페이지를 닫거나 새로고침하면 사라집니다. 호스팅 및 외부 서비스의 접속 기록은 각 제공자의 보유 정책에 따라 관리됩니다.</p></section>
<section><h2>6. 아동의 개인정보</h2><p>퍼즐리는 연령을 확인하거나 아동의 개인정보를 의도적으로 수집하지 않습니다. 보호자는 아동이 외부 링크나 이미지 제공 서비스를 이용할 때 함께 확인해주시기 바랍니다.</p></section>
<section><h2>7. 방침 변경과 문의</h2><p>기능 또는 법령 변경에 따라 본 방침이 수정될 수 있으며 시행일을 갱신하여 알립니다. 개인정보 및 권리 관련 문의는 <a href="https://github.com/daehoon1027/puzzly/issues" target="_blank" rel="noreferrer">퍼즐리 GitHub 문의 게시판</a>을 이용해 주세요. 공개 게시판에 개인정보를 작성하지 마세요.</p></section></InfoPage>}

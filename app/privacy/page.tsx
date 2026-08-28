import type { Metadata } from 'next';
import { InfoPage } from '../components/info-page';
export const metadata: Metadata={title:'개인정보처리방침',description:'퍼즐리의 개인정보 처리, 외부 이미지, 쿠키 및 광고 관련 안내입니다.',alternates:{canonical:'/privacy'}};
export default function Page(){return <InfoPage eyebrow="PRIVACY" title="개인정보처리방침" intro="퍼즐리는 필요한 정보만 최소한으로 다루며, 방문자가 서비스의 데이터 흐름을 이해할 수 있도록 공개합니다. 시행일: 2026년 8월 27일">
<section><h2>1. 수집하는 개인정보</h2><p>퍼즐리는 회원가입 기능을 제공하지 않으며 이름, 전화번호, 주소 등의 개인정보를 직접 입력받아 서버에 저장하지 않습니다. 사용자가 입력한 이미지 검색어는 이미지 추천을 위해 일시적으로 처리되지만 퍼즐리의 사용자 계정이나 데이터베이스에 저장하지 않습니다. 선택한 퍼즐 이미지, 조각 수와 진행 상태는 브라우저에서 처리됩니다.</p></section>
<section><h2>2. 자동으로 전달될 수 있는 정보</h2><p>사이트 접속 과정에서 호스팅 제공자 또는 외부 콘텐츠 제공자에게 IP 주소, 브라우저 종류, 접속 시각, 요청한 주소와 같은 일반적인 접속 정보가 전달될 수 있습니다. 이는 보안, 장애 대응, 이미지 제공 등 각 서비스의 운영 목적에 따라 처리될 수 있습니다.</p></section>
<section><h2>3. 외부 이미지 서비스</h2><p>추천 이미지는 Pexels의 검색 API와 운영팀이 사전에 선별한 Unsplash 이미지에서 제공됩니다. 사용자가 검색을 실행하면 검색어가 퍼즐리 서버를 거쳐 Pexels에 전달되며, 이미지를 표시할 때 Pexels 또는 Unsplash 서버로 이미지 요청이 전송될 수 있습니다. 각 제공처의 개인정보처리방침이 적용될 수 있으며 퍼즐리는 외부 사이트의 데이터 처리 방식을 통제하지 않습니다.</p></section>
<section><h2>4. 쿠키와 Google 광고</h2><p>퍼즐리는 Google AdSense 사이트 확인 및 광고 게재를 위한 스크립트를 사용합니다. Google을 포함한 제3자 광고 사업자가 쿠키를 사용하여 이 사이트 또는 다른 사이트에 대한 이전 방문 기록을 바탕으로 광고를 제공할 수 있습니다. 퍼즐리 자체는 퍼즐 진행을 위해 별도의 필수 쿠키를 설정하지 않습니다.</p><p>Google의 광고 쿠키 사용으로 Google과 파트너는 방문자의 관심사에 맞는 광고를 제공할 수 있습니다. 방문자는 <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google 광고 설정</a>에서 맞춤 광고를 관리하거나 사용 중지할 수 있으며, <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">AboutAds 선택 페이지</a>에서 제3자 사업자의 맞춤 광고 쿠키를 관리할 수 있습니다.</p></section>
<section><h2>5. 보유 기간과 삭제</h2><p>퍼즐리는 사용자의 검색어와 퍼즐 진행 상태를 자체 데이터베이스에 보관하지 않습니다. 브라우저 메모리에 있는 진행 상태는 페이지를 닫거나 새로고침하면 사라집니다. 호스팅 및 외부 서비스의 접속 기록은 각 제공자의 보유 정책에 따라 관리됩니다.</p></section>
<section><h2>6. 아동의 개인정보</h2><p>퍼즐리는 연령을 확인하거나 아동의 개인정보를 의도적으로 수집하지 않습니다. 보호자는 아동이 외부 링크나 이미지 제공 서비스를 이용할 때 함께 확인해주시기 바랍니다.</p></section>
<section><h2>7. 방침 변경과 문의</h2><p>기능 또는 법령 변경에 따라 본 방침이 수정될 수 있으며 시행일을 갱신하여 알립니다. 개인정보 및 권리 관련 문의는 <a href="mailto:daehoon1027@gmail.com">daehoon1027@gmail.com</a>을 이용해 주세요. 문의 처리에 불필요한 민감한 개인정보는 보내지 마세요.</p></section></InfoPage>}

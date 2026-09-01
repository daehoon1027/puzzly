# 퍼즐리 프로젝트 인수인계서

작성일: 2026-09-01 (KST)

## 1. 프로젝트 위치와 배포

- 로컬 작업 폴더: `D:\20. 기타\AI작업 파일\8. puzzle`
- GitHub: https://github.com/daehoon1027/puzzly
- 운영 사이트: https://puzzly-one.vercel.app
- 기본 브랜치: `main`
- GitHub `main` 푸시 시 Vercel 자동 배포가 연결되어 있음
- 현재 기준 최근 커밋: `c994d48 chore: add Naver Search Advisor verification`
- 인수인계서 작성 직전 작업 트리는 깨끗했음

## 2. 기술 구성과 실행 명령

- Next.js 16.2.6 App Router, React 19.2.6, TypeScript
- 실행기는 vinext/Vite 기반
- Node.js 요구 버전: 22.13.0 이상
- 개발 실행: `npm run dev`
- 정적 검사: `npm run lint`
- 프로덕션 빌드: `npm run build`

사이트를 수정한 뒤에는 반드시 `npm run lint`와 `npm run build`를 통과시키고, 커밋 후 `git push origin main`으로 배포한다. Vercel 배포가 Ready인지 확인한 뒤 운영 URL도 점검한다.

## 3. 현재 구현된 핵심 기능

- 사용자가 검색어를 입력하면 Pexels API에서 가로형 이미지 후보 10장을 추천함
- 한글 주요 검색어는 `app/api/photos/route.ts`에서 영어로 일부 변환함
- Pexels API 오류, 요청 한도, 인증 오류 또는 검색 결과 부족 시 선별된 대체 이미지 10장을 표시함
- 대체 이미지 사용 시 API 오류 원인과 대체 이미지 제공 사실을 팝업으로 안내함
- 특정 인물 검색은 Pexels의 메타데이터와 검색 방식 특성상 정확하지 않을 수 있음을 안내함
- 버전 1: 정사각형 조각 두 개를 선택하여 위치를 교환하는 방식
- 버전 2: 조각마다 굴곡이 다른 직소 실루엣을 사용하며, 오른쪽 조각함에서 같은 모양의 홈으로 드래그하거나 순서대로 눌러 배치함
- 버전 2에서 맞춘 조각은 오른쪽 조각함에서 즉시 제거됨
- 조각 수: 12, 20, 30, 48, 80, 120, 200, 400
- 퍼즐 조각 수는 제곱수로 제한되지 않으며 행/열 수를 자동 계산함
- 소개, 이용 가이드, 개인정보처리방침, 이용약관, 문의 페이지가 있음
- 문의 이메일: `daehoon1027@gmail.com`

주요 구현 파일:

- 홈과 퍼즐 로직: `app/page.tsx`
- 스타일: `app/globals.css`
- 이미지 검색 API: `app/api/photos/route.ts`
- 전체 메타데이터·구조화 데이터·광고 스크립트: `app/layout.tsx`
- 카카오 광고: `app/components/kakao-ad.tsx`

## 4. 환경 변수

- Vercel 환경 변수 이름: `PEXELS_API_KEY`
- Production, Preview, Development에 등록됨
- 값은 비밀 키이므로 Git이나 문서에 기록하지 말 것
- 사용자가 환경 변수 저장 후 재배포까지 완료했음

## 5. 광고 및 수익화 상태

### Google AdSense

- 게시자 ID: `ca-pub-4917350716922728`
- AdSense 스크립트가 `app/layout.tsx`의 `<head>`에 설치되어 있음
- `public/ads.txt`가 존재함
- 사이트 소유권 확인과 검토 요청을 완료함
- Google CMP 동의 메시지를 선택하고 제출함
- 현재 사이트 상태는 검토/준비 중이므로 승인 결과를 기다려야 함
- 승인 여부는 사용자가 AdSense에서 확인해야 하며, 승인 전에는 광고 수익이 발생하지 않을 수 있음

### Kakao AdFit

- 매체명: `퍼즐리 - 무료 이미지 퍼즐`
- 매체 유형: Web
- 매체 URL: `puzzly-one.vercel.app`
- 카테고리: 게임, 엔터테인먼트
- 광고 단위명: `퍼즐리 메인 하단 배너`
- 광고 단위 ID: `DAN-s0iBuwLpaImB4HTt`
- 크기: 320×100
- 구현 파일: `app/components/kakao-ad.tsx`
- 홈 하단에서 호출함
- 매체 심사는 광고 호출 후 진행되며 카카오 심사 결과를 기다려야 함

## 6. 검색엔진 등록과 SEO 상태

### 공통 기술 SEO

- 메타 제목·설명·키워드, canonical, Open Graph, robots 설정 적용
- WebSite 및 WebApplication/GameApplication JSON-LD 적용
- `app/robots.ts`와 `app/sitemap.ts` 구현
- 운영 robots: https://puzzly-one.vercel.app/robots.txt
- 운영 sitemap: https://puzzly-one.vercel.app/sitemap.xml
- 사이트맵에는 홈, 가이드 4개, 소개, 개인정보처리방침, 약관, 문의 등 9개 URL이 포함됨

### Google Search Console

- 소유권 확인 메타태그가 `app/layout.tsx`에 적용됨
- 사이트맵 제출 성공, 9개 페이지 발견 확인
- 메인 URL 실시간 테스트에서 “URL을 Google에 등록할 수 있음” 확인
- 색인 생성 요청은 일일 할당량 초과로 제출되지 않았으므로 다음 날 한 번만 다시 시도 가능
- 잘못 제출한 `/` 사이트맵 항목은 삭제하고 `/sitemap.xml`만 유지해야 함

### 네이버 Search Advisor

- 소유권 확인 메타태그가 `app/layout.tsx`에 적용됨
- `robots.txt` 수집 내용 정상 확인 및 수집 요청 완료
- `sitemap.xml` 제출 완료
- 다음 URL의 웹 페이지 수집 요청 완료:
  - `/`
  - `/guide`
  - `/guide/image-choice`
  - `/guide/piece-count`
  - `/guide/focus-routine`
- 수집 요청 목록의 `/`는 메인 주소를 뜻하며 정상임
- 바로 검색되는 것이 아니라 수집 → 색인 → 순위 결정 과정을 기다려야 함
- 며칠 뒤 `리포트 → 사이트 진단`에서 색인 문서 수 확인
- 실제 검색어별 노출/클릭은 데이터가 쌓인 뒤 `리포트 → 콘텐츠 노출/클릭`에서 확인하며 약 1주 전 데이터 기준으로 갱신됨

예상 목표 검색어:

- 퍼즐리
- 무료 이미지 퍼즐
- 온라인 이미지 퍼즐
- 사진 퍼즐 만들기
- 무료 온라인 퍼즐 게임
- 직소 퍼즐 맞추기
- 원하는 사진으로 퍼즐 만들기

검색 상위 노출은 보장할 수 없다. 검색엔진이 콘텐츠 관련성, 품질, 사용 반응과 외부 신호를 종합하여 결정한다.

## 7. 다음 작업 권장 순서

1. `git status`, 운영 사이트 응답, Vercel 최근 배포 상태를 확인한다.
2. Google Search Console에서 일일 할당량이 초기화되면 메인 URL의 색인 생성을 한 번만 요청한다.
3. 네이버는 최소 며칠 기다린 뒤 사이트 진단의 색인 수와 수집 오류를 확인한다.
4. AdSense와 AdFit의 심사 상태를 확인한다. 아직 심사 중이면 사이트를 과도하게 변경하지 않는다.
5. 검색 유입 데이터가 생기면 실제 노출 검색어를 기준으로 가이드 콘텐츠 제목과 본문을 보강한다.
6. 승인 후 실제 광고 노출, 레이아웃 밀림, 모바일 퍼즐 조작과 광고 정책 준수 여부를 점검한다.

## 8. 작업 시 주의사항

- API 키, 로그인 정보, 인증 코드의 비밀값을 커밋하지 않는다.
- 사용자가 만든 기존 변경을 덮어쓰거나 `git reset --hard`를 사용하지 않는다.
- 광고 심사 중에는 빈 페이지, 얇은 콘텐츠, 과도한 광고 배치를 만들지 않는다.
- 이미지 출처 및 Pexels 크레딧 링크를 유지한다.
- 변경 전후 모바일과 데스크톱을 모두 확인한다.
- 외부 심사 및 검색 색인은 즉시 완료되지 않으므로 반복 제출을 피한다.

## 9. 새 작업의 첫 지시

이 문서를 끝까지 읽고 현재 저장소 상태와 운영 사이트를 확인한 다음, Google Search Console·네이버 Search Advisor·AdSense·Kakao AdFit 중 지금 확인 가능한 상태를 정리하세요. 외부 로그인이 필요한 단계는 사용자가 해야 할 최소 행동만 안내하고, 코드나 배포로 처리할 수 있는 작업은 직접 진행하세요. 기존 기능과 사용자 변경을 보존하고, 수정 시 lint/build 검증과 GitHub 푸시 및 Vercel 배포 확인까지 완료하세요.

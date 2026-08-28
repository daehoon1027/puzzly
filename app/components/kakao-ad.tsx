'use client';

import Script from 'next/script';

const KAKAO_AD_UNIT = 'DAN-s0iBuwLpaImB4HTt';

export function KakaoAd() {
  return (
    <aside className="kakao-ad-section" aria-label="카카오 애드핏 광고">
      <span className="ad-label">광고</span>
      <div className="kakao-ad-frame">
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit={KAKAO_AD_UNIT}
          data-ad-width="320"
          data-ad-height="100"
        />
      </div>
      <Script
        id="kakao-adfit-script"
        src="https://t1.kakaocdn.net/kas/static/ba.min.js"
        strategy="afterInteractive"
      />
    </aside>
  );
}

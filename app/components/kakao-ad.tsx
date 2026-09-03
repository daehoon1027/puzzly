'use client';

import Script from 'next/script';

const KAKAO_AD_UNIT = 'DAN-sOiBuwLpaImB4HTt';
const KAKAO_ADFIT_ENABLED =
  process.env.NEXT_PUBLIC_KAKAO_ADFIT_ENABLED === 'true';

export function KakaoAd() {
  if (!KAKAO_ADFIT_ENABLED) {
    return null;
  }

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

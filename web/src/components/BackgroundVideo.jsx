import React, { useState } from 'react';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4';

export default function BackgroundVideo() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-video-wrapper" aria-hidden="true">
      {!hasError ? (
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setHasError(true)}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      ) : (
        <div className="bg-video-fallback" />
      )}
      {/* Cinematic scrim layers */}
      <div className="bg-scrim-radial" />
      <div className="bg-scrim-linear" />
    </div>
  );
}

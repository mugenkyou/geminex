import React, { useState } from 'react';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4';

export default function BackgroundVideo() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="arch-bg-video-container" aria-hidden="true">
      {!hasError ? (
        <video
          className="arch-bg-video"
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
        <div className="arch-bg-video-fallback" />
      )}
      {/* Archify-style dark scrims and ambient orange glow overlay */}
      <div className="arch-bg-scrim-dark" />
      <div className="arch-bg-scrim-fade" />
      <div className="arch-bg-ambient-orange" />
    </div>
  );
}

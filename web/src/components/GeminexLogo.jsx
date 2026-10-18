import React from 'react';

export default function GeminexLogo({ className = '' }) {
  return (
    <a href="#top" className={`geminex-logo ${className}`} aria-label="Geminex Home">
      <svg
        className="geminex-logo-mark"
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="rotate(18 14 14)">
          {/* Rounded outer rhomboid / gem facet */}
          <rect
            x="4"
            y="4"
            width="20"
            height="20"
            rx="5.5"
            fill="#FFFFFF"
          />
          {/* Inner negative space precision core */}
          <circle cx="14" cy="14" r="4.2" fill="#000000" />
          <circle cx="14" cy="14" r="2.1" fill="#FFFFFF" />
        </g>
      </svg>
      <span className="geminex-wordmark">Geminex</span>
    </a>
  );
}

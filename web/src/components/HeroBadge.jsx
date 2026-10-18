import React from 'react';

export default function HeroBadge() {
  return (
    <div className="hero-badge anim-badge">
      <svg
        className="hero-badge-sparkle"
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z"
          fill="#FFFFFF"
          fillOpacity="0.9"
        />
      </svg>
      <span className="hero-badge-text">Reliability Runtime for AI Coding Agents</span>
    </div>
  );
}

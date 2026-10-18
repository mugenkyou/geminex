import React from 'react';

export default function HeroActions() {
  return (
    <div className="hero-actions">
      <a
        href="https://github.com/mugenkyou/geminex"
        className="btn-hero-primary anim-cta-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="btn-label">Get Started</span>
        <span className="btn-shimmer" aria-hidden="true" />
      </a>
      <a
        href="#how-it-works"
        className="btn-hero-secondary anim-cta-secondary"
      >
        <span className="btn-label">Explore the Project</span>
        <span className="btn-shimmer" aria-hidden="true" />
      </a>
    </div>
  );
}

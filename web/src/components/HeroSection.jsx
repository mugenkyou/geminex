import React from 'react';
import HeroBadge from './HeroBadge';
import HeroActions from './HeroActions';

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <HeroBadge />

      <h1 id="hero-heading" className="hero-heading">
        <span className="heading-line-mask">
          <span className="heading-line anim-headline-1">
            Bring <em className="heading-serif-italic">engineering discipline</em> to
          </span>
        </span>
        <span className="heading-line-mask">
          <span className="heading-line anim-headline-2">
            AI coding agents.
          </span>
        </span>
      </h1>

      <p className="hero-description anim-support-text">
        A reliability runtime for AI coding agents that enforces scoped changes, executed verification, and evidence-backed completion.
      </p>

      <HeroActions />
    </section>
  );
}

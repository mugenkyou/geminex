import React, { useState } from 'react';
import GeminexLogo from './GeminexLogo';
import MobileNavigation from './MobileNavigation';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-column header-left anim-logo">
        <GeminexLogo />
      </div>

      <nav className="header-column header-center desktop-only" aria-label="Main Navigation">
        <div className="nav-pill-container">
          <a href="#top" className="nav-pill-item anim-nav-1">
            <span className="nav-pill-text">Overview</span>
            <span className="nav-pill-shimmer" aria-hidden="true" />
          </a>
          <a href="#how-it-works" className="nav-pill-item anim-nav-2">
            <span className="nav-pill-text">How It Works</span>
            <span className="nav-pill-shimmer" aria-hidden="true" />
          </a>
          <a href="#invariants" className="nav-pill-item anim-nav-3">
            <span className="nav-pill-text">Invariants</span>
            <span className="nav-pill-shimmer" aria-hidden="true" />
          </a>
          <a href="#installation" className="nav-pill-item anim-nav-4">
            <span className="nav-pill-text">Install</span>
            <span className="nav-pill-shimmer" aria-hidden="true" />
          </a>
          <a href="#classifier" className="nav-pill-item anim-nav-3">
            <span className="nav-pill-text">Classifier</span>
            <span className="nav-pill-shimmer" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/mugenkyou/geminex"
            className="nav-pill-item anim-nav-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="nav-pill-text">GitHub</span>
            <span className="nav-pill-shimmer" aria-hidden="true" />
          </a>
        </div>
      </nav>

      <div className="header-column header-right">
        <a
          href="https://github.com/mugenkyou/geminex"
          className="header-cta-button desktop-only anim-header-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-text">Get Started</span>
          <span className="btn-glass-highlight" aria-hidden="true" />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`hamburger-button mobile-only ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="hamburger-box">
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </span>
        </button>
      </div>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

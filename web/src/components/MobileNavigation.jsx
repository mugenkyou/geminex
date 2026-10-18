import React, { useEffect } from 'react';

export default function MobileNavigation({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Close on resize > 900px
    const handleResize = () => {
      if (window.innerWidth > 900) {
        onClose();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <nav className="mobile-nav-content" aria-label="Mobile Navigation Links">
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <a href="#top" className="mobile-nav-link" onClick={onClose}>
              Overview
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#how-it-works" className="mobile-nav-link" onClick={onClose}>
              How It Works
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#invariants" className="mobile-nav-link" onClick={onClose}>
              The 6 Invariants
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#installation" className="mobile-nav-link" onClick={onClose}>
              Installation & Host Matrix
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#classifier" className="mobile-nav-link" onClick={onClose}>
              Interactive Shell Classifier
            </a>
          </li>
          <li className="mobile-nav-item">
            <a
              href="https://github.com/mugenkyou/geminex"
              className="mobile-nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              GitHub Repository
            </a>
          </li>
        </ul>

        <div className="mobile-nav-cta-wrapper">
          <a
            href="https://github.com/mugenkyou/geminex"
            className="mobile-nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}

import React, { useEffect } from 'react';

export default function MobileNavigation({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleResize = () => {
      if (window.innerWidth > 900) onClose();
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
      className="arch-mobile-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="arch-mobile-inner">
        <div className="arch-mobile-label">NAVIGATION</div>
        <nav className="arch-mobile-links" aria-label="Mobile Navigation Links">
          <a href="#top" className="arch-mobile-link" onClick={onClose}>
            <span>01</span> Overview
          </a>
          <a href="#problem" className="arch-mobile-link" onClick={onClose}>
            <span>02</span> The Problem
          </a>
          <a href="#how-it-works" className="arch-mobile-link" onClick={onClose}>
            <span>03</span> How It Works
          </a>
          <a href="#invariants" className="arch-mobile-link" onClick={onClose}>
            <span>04</span> Six Invariants
          </a>
          <a href="#integrations" className="arch-mobile-link" onClick={onClose}>
            <span>05</span> Integrations
          </a>
          <a href="#evidence" className="arch-mobile-link" onClick={onClose}>
            <span>06</span> Evidence & Proof
          </a>
          <a href="#security" className="arch-mobile-link" onClick={onClose}>
            <span>07</span> Security Limits
          </a>
          <a href="#workflow" className="arch-mobile-link" onClick={onClose}>
            <span>08</span> Install & Quickstart
          </a>
        </nav>

        <div className="arch-mobile-footer">
          <a
            href="https://github.com/mugenkyou/geminex"
            className="arch-mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

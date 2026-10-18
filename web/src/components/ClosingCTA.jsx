import React, { useState } from 'react';

export default function ClosingCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('git clone https://github.com/mugenkyou/geminex.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="arch-closing-cta">
      {/* Restrained warm orange glow background */}
      <div className="arch-closing-glow" aria-hidden="true" />

      <div className="arch-closing-container">
        <div className="arch-closing-eyebrow">
          <span className="arch-eyebrow-dot" />
          <span>JOIN THE RELIABILITY RUNTIME</span>
        </div>

        <h2 className="arch-closing-headline">
          Make every change accountable.
        </h2>

        <p className="arch-closing-sub">
          Give your AI coding agent a process that reads before writing, stays within scope, verifies with fresh proof, and reports its work with tamper-evident evidence.
        </p>

        <div className="arch-closing-actions">
          <a
            href="https://github.com/mugenkyou/geminex"
            className="arch-btn arch-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Get Started on GitHub</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="https://github.com/mugenkyou/geminex#readme"
            className="arch-btn arch-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Read the Documentation</span>
          </a>
        </div>

        {/* Quick clone terminal pill */}
        <div className="arch-closing-clone">
          <button
            type="button"
            className="arch-clone-box"
            onClick={handleCopy}
            title="Click to copy clone command"
          >
            <span className="arch-cmd-prefix">$</span>
            <span className="arch-clone-cmd">git clone https://github.com/mugenkyou/geminex.git</span>
            <span className="arch-clone-copy">{copied ? 'Copied ✓' : 'Copy'}</span>
          </button>
        </div>

        <div className="arch-closing-meta">
          <span>MIT License</span>
          <span className="arch-meta-sep">/</span>
          <span>Open Source</span>
          <span className="arch-meta-sep">/</span>
          <span>Zero Telemetry</span>
          <span className="arch-meta-sep">/</span>
          <span>Model-Agnostic</span>
        </div>
      </div>
    </section>
  );
}

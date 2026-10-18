import React from 'react';
import GeminexLogo from './GeminexLogo';

export default function SiteFooter() {
  return (
    <footer className="arch-footer">
      <div className="arch-footer-container">
        <div className="arch-footer-top">
          <div className="arch-footer-brand">
            <GeminexLogo />
            <p className="arch-footer-tagline">
              Model-agnostic reliability runtime for AI coding agents. Scoped reconnaissance, executed verification, and evidence-backed completion.
            </p>
          </div>

          <div className="arch-footer-links-grid">
            <div className="arch-footer-col">
              <span className="arch-footer-col-title">NAVIGATION</span>
              <a href="#top" className="arch-footer-link">Overview</a>
              <a href="#problem" className="arch-footer-link">The Problem</a>
              <a href="#how-it-works" className="arch-footer-link">How It Works</a>
              <a href="#invariants" className="arch-footer-link">Six Invariants</a>
            </div>

            <div className="arch-footer-col">
              <span className="arch-footer-col-title">ARCHITECTURE</span>
              <a href="#integrations" className="arch-footer-link">Integration Tiers</a>
              <a href="#evidence" className="arch-footer-link">Evidence Engine</a>
              <a href="#security" className="arch-footer-link">Security Limits</a>
              <a href="#workflow" className="arch-footer-link">Quickstart & Install</a>
            </div>

            <div className="arch-footer-col">
              <span className="arch-footer-col-title">RESOURCES</span>
              <a
                href="https://github.com/mugenkyou/geminex"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-footer-link"
              >
                GitHub Repository
              </a>
              <a
                href="https://github.com/mugenkyou/geminex/blob/main/docs/benchmark.md"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-footer-link"
              >
                Benchmark Methodology
              </a>
              <a
                href="https://github.com/mugenkyou/geminex/blob/main/SECURITY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-footer-link"
              >
                Security Policy
              </a>
              <a
                href="https://github.com/mugenkyou/geminex/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-footer-link"
              >
                MIT License
              </a>
            </div>
          </div>
        </div>

        <div className="arch-footer-bottom">
          <div className="arch-footer-copy">
            © 2026 Geminex Project. Released under the MIT License.
          </div>
          <div className="arch-footer-meta">
            <span className="arch-live-pill">
              <span className="arch-live-dot" />
              <span>RESEARCH PREVIEW v0.1</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

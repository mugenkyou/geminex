import React from 'react';

export default function EvidenceAndWhyNow() {
  return (
    <section id="evidence" className="deep-section" aria-labelledby="evidence-heading">
      {/* Evidence Engine */}
      <div className="section-header">
        <span className="section-tag">Tamper-Evident Ledger</span>
        <h2 id="evidence-heading" className="section-title">
          The Evidence Model: <em>No Stale Proof</em>
        </h2>
        <p className="section-subtitle">
          Completion-grade evidence must be produced by a Geminex-owned validator execution, carry exit code 0, timestamped strictly after the latest file write, inside an intact hash chain.
        </p>
      </div>

      <div className="evidence-grid">
        <div className="evidence-card">
          <div className="card-badge">01</div>
          <h3>Chain Integrity</h3>
          <p>
            The Stop gate verifies the cryptographic SHA-256 hash chain before reading any verdict. Any edited, deleted, or reordered ledger entry blocks completion.
          </p>
        </div>

        <div className="evidence-card">
          <div className="card-badge">02</div>
          <h3>Freshness Enforcement</h3>
          <p>
            Freshness is recomputed on every run. If a file is touched even 1ms after a PASS, the criterion resets to pending until a new validator pass lands.
          </p>
        </div>

        <div className="evidence-card">
          <div className="card-badge">03</div>
          <h3>Bound Identity</h3>
          <p>
            The executed command must strictly match the contract declaration, and the criterion must be assigned to that validator. Timeouts or interruptions record FAIL, never PASS.
          </p>
        </div>
      </div>

      {/* Why Now & Antigravity Shift */}
      <div className="why-now-card">
        <div className="why-now-header">
          <span className="section-tag">Historical Context</span>
          <h3 className="why-now-title">Why Now: The Late-2026 Antigravity Landscape</h3>
        </div>
        <p className="why-now-text">
          In late 2026, Google restricted third-party models in Antigravity on licensing grounds: Claude access was reserved for direct paid tiers, and remaining models were scheduled for removal. Users on promotional routes (including the free Jio tier and student plans) lost the Claude option their workflows depended on.
        </p>
        <p className="why-now-text">
          What remains across every plan is <strong>Gemini 3.8 Flash</strong>: a blazingly fast agentic model that fails in predictable ways when unconstrained. Geminex does not bring Claude back; it gives the model you already have the <em>working discipline</em> engineers miss: read before writing, declared scope, executed proof, and no completion without verifiable evidence.
        </p>
      </div>

      {/* Honest Research Preview & Benchmark Status */}
      <div className="research-preview-banner">
        <div className="banner-content">
          <div className="banner-title-row">
            <span className="preview-pill">Research Preview</span>
            <h4>GeminexBench: 30 Registered Task Specs across 10 Lanes</h4>
          </div>
          <p className="banner-text">
            No solve rates, token comparisons, or model rankings are claimed. A credible comparison requires pinned tasks, hidden independent validators, identical baselines, and clean isolation. Every performance statement in Geminex is a testable hypothesis with its status labeled.
          </p>
        </div>
      </div>

      {/* Document Directory & Contributing */}
      <div className="docs-footer-links">
        <div className="docs-col">
          <h4>Documentation</h4>
          <ul className="docs-list">
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/quickstart.md" target="_blank" rel="noopener noreferrer">Quickstart Guide</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/concepts.md" target="_blank" rel="noopener noreferrer">Core Concepts</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/hosts.md" target="_blank" rel="noopener noreferrer">Host Environments</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/benchmark.md" target="_blank" rel="noopener noreferrer">Benchmark Methodology</a></li>
          </ul>
        </div>
        <div className="docs-col">
          <h4>Security & Architecture</h4>
          <ul className="docs-list">
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer">Security Policy</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/adr/" target="_blank" rel="noopener noreferrer">Architecture Decision Records</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/research.md" target="_blank" rel="noopener noreferrer">Research Foundations</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/docs/audits/v5-audit.md" target="_blank" rel="noopener noreferrer">Hardening Audit (v5)</a></li>
          </ul>
        </div>
        <div className="docs-col">
          <h4>Community & Open Source</h4>
          <ul className="docs-list">
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing Guide</a></li>
            <li><a href="https://github.com/mugenkyou/geminex/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a></li>
            <li><a href="https://github.com/mugenkyou/geminex" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://skills.sh/mugenkyou/geminex" target="_blank" rel="noopener noreferrer">Skills.sh Registry</a></li>
          </ul>
        </div>
      </div>

      <div className="site-copyright">
        <p>MIT © 2026 GEMINEX Contributors · Gives Gemini Claude-grade engineering discipline.</p>
      </div>
    </section>
  );
}

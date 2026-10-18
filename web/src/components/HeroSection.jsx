import React, { useState } from 'react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('contract');
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText('pip install geminex');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      id: 'contract',
      number: '01',
      label: 'Contract & Scope',
      file: 'schemas/contract.json',
      content: `{
  "task_id": "GX-2026-0881",
  "allowed_write_scope": [
    "src/impact_graph.py",
    "tests/test_impact_graph.py"
  ],
  "required_validators": [
    "python -m unittest discover -s tests"
  ],
  "criteria": [
    "Ground before mutating: inspect callers before edits",
    "Zero unhandled cycle regressions in impact graph"
  ]
}`,
      note: 'Invariants 1 & 2: Explicit boundary contract declared prior to any file edit.'
    },
    {
      id: 'recon',
      number: '02',
      label: 'Grounding & Recon',
      file: 'geminex decide --signals',
      content: `$ geminex decide --signals '{"target_files": 1, "test_coverage": true, "public_api": false}'
[DECISION] tier: compact (reason: dependent_caller_changes)
[GROUNDING] Inspecting call sites:
  → reading src/impact_graph.py (target)
  → reading tests/test_impact_graph.py (validator)
  → reading src/dependency_resolver.py (caller)
Grounding complete. 3 files read. Ready for scoped mutation.`,
      note: 'Invariant 1: Agent is barred from mutating files before callers and tests are read.'
    },
    {
      id: 'guard',
      number: '03',
      label: 'Scope Guard',
      file: 'geminex guard intercept',
      content: `[WRITE ATTEMPT] File: src/impact_graph.py
  → Path in declared allowed_write_scope: ALLOWED ✓

[WRITE ATTEMPT] File: config/runtime_settings.yaml
  → Path outside allowed_write_scope: DENIED ✗
  [ERROR] GeminexGuardViolation: Write outside declared scope blocked.
  [RECOVERY] Propose explicit contract amendment or discard out-of-scope edit.`,
      note: 'Invariant 2: Mechanical enforcement halts unauthorized side-channel edits in real time.'
    },
    {
      id: 'receipt',
      number: '04',
      label: 'Verifiable Receipt',
      file: 'evidence.json',
      content: `{
  "contract_hash": "sha256:8f4c19ba22e7d01...",
  "mutated_files": {
    "src/impact_graph.py": "sha256:d17a39bf8e04...",
    "tests/test_impact_graph.py": "sha256:49c02d1844fa..."
  },
  "validator_results": [
    {
      "command": "python -m unittest discover -s tests",
      "exit_code": 0,
      "executed_at": "2026-10-18T18:24:11.042Z",
      "freshness_verified": true
    }
  ],
  "status": "VERIFIED_PASS"
}`,
      note: 'Invariants 3 & 5: Completion refused if any file changed after validator execution.'
    }
  ];

  const currentStep = steps.find((s) => s.id === activeTab) || steps[0];

  return (
    <section className="arch-hero" id="top">
      {/* Subtle Orange Glow Ambient Element */}
      <div className="arch-hero-glow" aria-hidden="true" />

      <div className="arch-hero-container">
        {/* Eyebrow badge */}
        <div className="arch-hero-eyebrow">
          <span className="arch-eyebrow-dot" />
          <span className="arch-eyebrow-text">OPEN-SOURCE · AI ENGINEERING INFRASTRUCTURE</span>
        </div>

        {/* Main Headline */}
        <h1 className="arch-hero-headline">
          AI agents can write code.
          <span className="arch-headline-em">
            Geminex makes the process <em>verifiable</em>.
          </span>
        </h1>

        {/* Supporting description */}
        <p className="arch-hero-sub">
          Read before writing. Stay within scope. Run real checks. Finish with evidence.
        </p>

        {/* CTAs and quick command */}
        <div className="arch-hero-actions">
          <a
            href="https://github.com/mugenkyou/geminex"
            className="arch-btn arch-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Get Started</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#how-it-works" className="arch-btn arch-btn-secondary">
            <span>Explore the Architecture</span>
          </a>

          <button
            type="button"
            className="arch-hero-copy-cmd"
            onClick={copyInstall}
            title="Click to copy install command"
          >
            <span className="arch-cmd-prefix">$</span>
            <span className="arch-cmd-text">pip install geminex</span>
            <span className="arch-cmd-icon">
              {copied ? '✓' : '⧉'}
            </span>
          </button>
        </div>

        {/* Technical Product Visual: Workflow Inspector */}
        <div className="arch-hero-visual-card">
          <div className="arch-visual-header">
            <div className="arch-visual-tabs">
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  className={`arch-visual-tab ${activeTab === step.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(step.id)}
                >
                  <span className="arch-tab-num">{step.number}</span>
                  <span className="arch-tab-name">{step.label}</span>
                </button>
              ))}
            </div>

            <div className="arch-visual-status">
              <span className="arch-status-pill">
                <span className="arch-status-dot" />
                <span>STATE: DETERMINISTIC</span>
              </span>
            </div>
          </div>

          <div className="arch-visual-body">
            <div className="arch-terminal-topbar">
              <span className="arch-terminal-file">{currentStep.file}</span>
              <span className="arch-terminal-runtime">geminex runtime v0.1</span>
            </div>
            <pre className="arch-code-block">
              <code>{currentStep.content}</code>
            </pre>
            <div className="arch-terminal-footer">
              <span className="arch-footer-tag">INVARIANT ENFORCED</span>
              <span className="arch-footer-desc">{currentStep.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

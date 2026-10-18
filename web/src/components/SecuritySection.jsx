import React from 'react';

export default function SecuritySection() {
  const guarantees = [
    {
      code: 'G-01',
      title: 'Declared Path Enforcement',
      desc: 'When running with Native hooks or OpenCode shims, out-of-scope file modifications are blocked before disk access. An agent cannot touch files outside its declared contract boundary.'
    },
    {
      code: 'G-02',
      title: 'Cryptographic Stale-Proof Invalidation',
      desc: 'Timestamps and SHA-256 digests prevent an agent from citing old test passes executed prior to subsequent code edits.'
    },
    {
      code: 'G-03',
      title: 'Deterministic Completion Gating',
      desc: 'Task completion requires fresh evidence satisfying all contract criteria. Unsubstantiated completion claims are rejected by the gatekeeper.'
    }
  ];

  const limitations = [
    {
      code: 'L-01',
      title: 'Not an Operating-System Sandbox',
      desc: 'Geminex operates at the agent workflow and tool layer. It is an engineering discipline runtime, not an OS kernel isolation tool, container sandbox, or seccomp barrier.'
    },
    {
      code: 'L-02',
      title: 'Host-Specific Enforcement Variations',
      desc: 'Core Agent Skills rely on model prompt adherence. True physical blocking of unauthorized tool calls requires a host integration (Antigravity Native hooks or OpenCode shims).'
    },
    {
      code: 'L-03',
      title: 'Dependent on Test Suite Fidelity',
      desc: 'Geminex verifies that the declared validator ran cleanly on fresh code. It cannot guarantee that the test suite itself is exhaustive, bug-free, or semantically complete.'
    }
  ];

  return (
    <section className="arch-section" id="security">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[06]</span>
            <span>SECURITY BOUNDARIES</span>
          </div>
          <h2 className="arch-section-title">
            Enforcement has limits.
            <span className="arch-title-em">
              Make them <em>explicit</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Geminex is engineered with technical honesty. We clearly distinguish verified runtime guarantees from environmental boundaries and host-specific limitations.
          </p>
        </div>

        {/* Minimalist 2-Column Technical Boundary Split */}
        <div className="arch-security-columns">
          {/* Column 1: Guarantees */}
          <div className="arch-sec-pane">
            <div className="arch-sec-pane-header">
              <span className="arch-sec-dot pass-dot" />
              <h3 className="arch-sec-pane-title">VERIFIED WORKFLOW GUARANTEES</h3>
            </div>
            <div className="arch-sec-list">
              {guarantees.map((g) => (
                <div key={g.code} className="arch-sec-row">
                  <span className="arch-sec-code">{g.code}</span>
                  <div className="arch-sec-text">
                    <h4 className="arch-sec-heading">{g.title}</h4>
                    <p className="arch-sec-body">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Explicit Limitations */}
          <div className="arch-sec-pane">
            <div className="arch-sec-pane-header">
              <span className="arch-sec-dot warn-dot" />
              <h3 className="arch-sec-pane-title">DOCUMENTED LIMITATIONS & BOUNDARIES</h3>
            </div>
            <div className="arch-sec-list">
              {limitations.map((l) => (
                <div key={l.code} className="arch-sec-row">
                  <span className="arch-sec-code text-orange">{l.code}</span>
                  <div className="arch-sec-text">
                    <h4 className="arch-sec-heading">{l.title}</h4>
                    <p className="arch-sec-body">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Understated Security Callout */}
        <div className="arch-sec-footer-note">
          <span className="arch-sec-note-icon">§</span>
          <span className="arch-sec-note-text">
            For untrusted code execution environments, run Geminex inside containerized runners with restricted network permissions. Refer to <code>SECURITY.md</code> and <code>docs/adr/0002-enforcement-boundaries.md</code>.
          </span>
        </div>
      </div>
    </section>
  );
}

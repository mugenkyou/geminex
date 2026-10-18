import React from 'react';

export default function SecuritySection() {
  const guarantees = [
    {
      title: 'Workflow Discipline & Path Boundaries',
      desc: 'Geminex reliably blocks out-of-scope edits when using Native hooks or OpenCode shims. An agent cannot write to arbitrary directories when its contract limits writes to declared paths.'
    },
    {
      title: 'Stale-Proof Invalidation',
      desc: 'Timestamps and cryptographic hashes ensure that an agent cannot cite old test runs that occurred prior to the latest code edits.'
    },
    {
      title: 'Explicit Completion Gate',
      desc: 'Completion claims must be satisfied by registered validators. Hallucinated success strings are rejected by deterministic policy checkers.'
    }
  ];

  const limitations = [
    {
      title: 'Not an Operating-System Sandbox',
      desc: 'Geminex hooks operate at the tool layer. They are workflow controls designed to guide AI coding discipline, not a substitute for kernel namespaces, Docker containers, or seccomp isolation.'
    },
    {
      title: 'Host-Specific Enforcement Variations',
      desc: 'Portable Agent Skills (Core) rely on model attention and prompt compliance. Mechanical write-blocking is only active when running on supported native runtime hosts (Antigravity) or execution shims (OpenCode).'
    },
    {
      title: 'Validator Quality Dependence',
      desc: 'Geminex guarantees that the declared validator was executed cleanly and matches the touched files. It cannot verify whether the test suite itself is comprehensive or correctly written.'
    }
  ];

  return (
    <section className="arch-section" id="security">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[06]</span>
            <span>HONEST BOUNDARIES</span>
          </div>
          <h2 className="arch-section-title">
            Enforcement has limits.
            <span className="arch-title-em">
              Make them <em>explicit</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Geminex is designed with rigorous engineering integrity. We document exactly what the runtime enforces, what it cannot guarantee, and where environmental assumptions apply.
          </p>
        </div>

        {/* Guarantees vs Limitations Split Grid */}
        <div className="arch-security-grid">
          {/* Column 1: Mechanical Guarantees */}
          <div className="arch-sec-col">
            <div className="arch-sec-head">
              <span className="arch-sec-indicator pass-dot" />
              <h3 className="arch-sec-col-title">VERIFIED GUARANTEES</h3>
            </div>
            <div className="arch-sec-items">
              {guarantees.map((item, idx) => (
                <div key={idx} className="arch-sec-item">
                  <div className="arch-sec-num">G-0{idx + 1}</div>
                  <div className="arch-sec-content">
                    <h4 className="arch-sec-item-title">{item.title}</h4>
                    <p className="arch-sec-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Explicit Limitations */}
          <div className="arch-sec-col">
            <div className="arch-sec-head">
              <span className="arch-sec-indicator warn-dot" />
              <h3 className="arch-sec-col-title">SECURITY BOUNDARIES & LIMITS</h3>
            </div>
            <div className="arch-sec-items">
              {limitations.map((item, idx) => (
                <div key={idx} className="arch-sec-item">
                  <div className="arch-sec-num">L-0{idx + 1}</div>
                  <div className="arch-sec-content">
                    <h4 className="arch-sec-item-title">{item.title}</h4>
                    <p className="arch-sec-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Policy Notice Box */}
        <div className="arch-security-callout">
          <div className="arch-callout-icon">§</div>
          <div className="arch-callout-text">
            <strong>Security Architecture Decision:</strong> For untrusted execution environments, run Geminex inside containerized runners with restricted network permissions. Refer to <code>SECURITY.md</code> and <code>docs/adr/0002-enforcement-boundaries.md</code> in the repository.
          </div>
        </div>
      </div>
    </section>
  );
}

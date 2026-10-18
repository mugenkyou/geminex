import React from 'react';

export default function ResearchPreview() {
  return (
    <section className="arch-section" id="research">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[08]</span>
            <span>RESEARCH MATURITY & METHODOLOGY</span>
          </div>
          <h2 className="arch-section-title">
            Research preview.
            <span className="arch-title-em">
              Measured, <em>not claimed</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Geminex is actively maintained as an open-source research preview (v0.1). We report only what our test suite and benchmark fixtures deterministically verify.
          </p>
        </div>

        {/* Clean Editorial Layout */}
        <div className="arch-research-card">
          <div className="arch-research-statement">
            <h3 className="arch-statement-title">No Unsubstantiated Marketing Claims</h3>
            <p className="arch-statement-text">
              Comparative benchmark dominance across arbitrary external benchmarks has not yet been established. Geminex does not make commercial claims of outperforming unassisted agents on general software engineering metrics.
            </p>
            <p className="arch-statement-text">
              What Geminex guarantees is deterministic enforcement of declared engineering rules: mutations will not bypass scope boundaries, tests will not report completion on stale evidence, and failures will not loop blindly without diagnostic change.
            </p>
          </div>

          <div className="arch-research-links-grid">
            <a
              href="https://github.com/mugenkyou/geminex/blob/main/docs/benchmark.md"
              target="_blank"
              rel="noopener noreferrer"
              className="arch-research-link-card"
            >
              <div className="arch-link-badge">DOCUMENTATION</div>
              <div className="arch-link-title">Benchmark Methodology</div>
              <div className="arch-link-desc">
                Review the GeminexBench runner architecture, synthetic task fixtures, and honesty gates in <code>docs/benchmark.md</code>.
              </div>
              <div className="arch-link-action">Read Methodology →</div>
            </a>

            <a
              href="https://github.com/mugenkyou/geminex/tree/main/tests"
              target="_blank"
              rel="noopener noreferrer"
              className="arch-research-link-card"
            >
              <div className="arch-link-badge">SOURCE AUDIT</div>
              <div className="arch-link-title">Automated Test Suite</div>
              <div className="arch-link-desc">
                Inspect 30+ unit tests covering invariant enforcement, guard hooks, tamper detection, and bundle sync.
              </div>
              <div className="arch-link-action">Inspect Tests →</div>
            </a>

            <a
              href="https://github.com/mugenkyou/geminex/tree/main/docs/adr"
              target="_blank"
              rel="noopener noreferrer"
              className="arch-research-link-card"
            >
              <div className="arch-link-badge">ARCHITECTURE</div>
              <div className="arch-link-title">Decision Records (ADR)</div>
              <div className="arch-link-desc">
                Explore the rationale behind our kernel invariants, memory protocols, and why we avoid universal ceremony.
              </div>
              <div className="arch-link-action">View ADRs →</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

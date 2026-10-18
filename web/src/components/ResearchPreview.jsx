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

        {/* Minimalist Editorial Callout & References */}
        <div className="arch-research-editorial">
          <div className="arch-research-core-statement">
            <h3 className="arch-research-statement-title">Zero Unsubstantiated Performance Claims</h3>
            <p className="arch-research-statement-text">
              Comparative benchmark dominance across external benchmarks has not yet been established. Geminex does not make commercial claims of outperforming unassisted agents on general software engineering benchmarks.
            </p>
            <p className="arch-research-statement-text">
              What Geminex guarantees is deterministic enforcement of declared engineering invariants: mutations will not bypass declared scope, completion will not pass on stale evidence, and failures will not loop blindly without diagnostic change.
            </p>
          </div>

          <div className="arch-research-links-row">
            <a
              href="https://github.com/mugenkyou/geminex/blob/main/docs/benchmark.md"
              target="_blank"
              rel="noopener noreferrer"
              className="arch-research-ref-item"
            >
              <div className="arch-ref-top">
                <span className="arch-ref-tag">DOCS</span>
                <span className="arch-ref-arrow">→</span>
              </div>
              <h4 className="arch-ref-heading">Benchmark Methodology</h4>
              <p className="arch-ref-desc">
                Review the GeminexBench runner architecture, synthetic task fixtures, and honesty gates in <code>docs/benchmark.md</code>.
              </p>
            </a>

            <a
              href="https://github.com/mugenkyou/geminex/tree/main/tests"
              target="_blank"
              rel="noopener noreferrer"
              className="arch-research-ref-item"
            >
              <div className="arch-ref-top">
                <span className="arch-ref-tag">TESTS</span>
                <span className="arch-ref-arrow">→</span>
              </div>
              <h4 className="arch-ref-heading">Automated Test Suite</h4>
              <p className="arch-ref-desc">
                Inspect 250+ unit tests covering invariant enforcement, guard hooks, tamper detection, and bundle sync in <code>tests/</code>.
              </p>
            </a>

            <a
              href="https://github.com/mugenkyou/geminex/tree/main/docs/adr"
              target="_blank"
              rel="noopener noreferrer"
              className="arch-research-ref-item"
            >
              <div className="arch-ref-top">
                <span className="arch-ref-tag">ARCH</span>
                <span className="arch-ref-arrow">→</span>
              </div>
              <h4 className="arch-ref-heading">Architecture Decision Records</h4>
              <p className="arch-ref-desc">
                Explore the rationale behind kernel invariants, memory protocols, and why we avoid universal ceremony in <code>docs/adr/</code>.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

const INVARIANTS = [
  {
    num: 1,
    title: 'Ground before mutating',
    consequence: 'The agent reads the target, its tests, and its callers before editing. File state is observed on disk, never assumed.',
    hook: 'pre_tool.py: asserts read record exists before write',
    tip: 'No more hallucinations of missing functions or stale imports.'
  },
  {
    num: 2,
    title: 'Stay in declared scope',
    consequence: 'Each task declares allowed_write_scope. Writes outside it are denied. A wrong scope is amended openly, not routed around.',
    hook: 'geminex guard / pre_tool: denies out-of-scope paths',
    tip: 'Prevents rogue mutations across unrelated packages.'
  },
  {
    num: 3,
    title: 'Completion needs evidence',
    consequence: 'A criterion is complete only when a Geminex-owned validator passed after the last relevant mutation. Prior green runs, self-review, and prose summaries do not count.',
    hook: 'stop_gate.py: compares timestamps of latest write vs PASS',
    tip: 'Stops agents from editing after tests pass and claiming success.'
  },
  {
    num: 4,
    title: 'Never exact-retry a failure',
    consequence: 'A failed approach may be retried only after the diagnosis, context, or strategy changes. Byte-identical retries are blocked; geminex resolve-failure re-arms once resolved.',
    hook: 'session_status.py: hashes failure fingerprints and blocks exact repeats',
    tip: 'Eliminates repetitive failure loops that burn API quota.'
  },
  {
    num: 5,
    title: 'Satisfy the contract',
    consequence: 'Acceptance criteria and their required validators gate completion. A passing test suite for unrelated code proves nothing about the task.',
    hook: 'contract.json: binds acceptance criteria directly to validators',
    tip: 'Passing general tests doesn\'t prove your specific bug is fixed.'
  },
  {
    num: 6,
    title: 'Say what you cannot verify',
    consequence: 'Claims without backing are labeled as such. Uncertainty lowers confidence instead of being rounded up to certainty.',
    hook: 'evidence_chain.py: records unverified claims explicitly',
    tip: 'Honest reports rather than confident fabrications.'
  }
];

export default function InvariantsExplorer() {
  const [selectedNum, setSelectedNum] = useState(1);
  const active = INVARIANTS.find((i) => i.num === selectedNum) || INVARIANTS[0];

  return (
    <section id="invariants" className="deep-section" aria-labelledby="invariants-heading">
      <div className="section-header">
        <span className="section-tag">The Core Contract</span>
        <h2 id="invariants-heading" className="section-title">
          The Six <em>Engineering Invariants</em>
        </h2>
        <p className="section-subtitle">
          These are the entire contract. Everything else in Geminex implements, verifies, or enforces them.
        </p>
      </div>

      <div className="invariants-grid">
        <div className="invariants-list" role="tablist" aria-label="Invariants list">
          {INVARIANTS.map((inv) => (
            <button
              key={inv.num}
              type="button"
              role="tab"
              aria-selected={selectedNum === inv.num}
              className={`invariant-card ${selectedNum === inv.num ? 'is-selected' : ''}`}
              onClick={() => setSelectedNum(inv.num)}
            >
              <div className="inv-badge">0{inv.num}</div>
              <div className="inv-info">
                <h3 className="inv-title">{inv.title}</h3>
                <p className="inv-summary">{inv.consequence}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Deep Dive Panel */}
        <div className="invariant-detail-panel">
          <div className="detail-header">
            <span className="detail-num">INVARIANT #{active.num}</span>
            <h3 className="detail-title">{active.title}</h3>
          </div>

          <div className="detail-block">
            <span className="block-label">Operational Consequence:</span>
            <p className="block-text">{active.consequence}</p>
          </div>

          <div className="detail-block">
            <span className="block-label">Runtime Enforcement Mechanism:</span>
            <code className="block-code">{active.hook}</code>
          </div>

          <div className="detail-block detail-tip">
            <span className="block-label">Engineering Impact:</span>
            <p className="tip-text">{active.tip}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

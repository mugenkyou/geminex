import React, { useState } from 'react';

export default function InvariantsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const invariants = [
    {
      index: '01',
      name: 'Ground Before Mutating',
      rule: 'Read target + tests + callers before editing.',
      canonical: 'Invariant 1 · Ground before mutating',
      rationale:
        'A model must demonstrate comprehension of current contracts before altering them. The runtime verifies that target source files, related unit tests, and caller invocations have been ingested into context before write privileges are granted.',
      mechanism: 'Pre-flight call graph analysis & pre-write read hooks (plugins/geminex-antigravity/scripts/pre_write_check.py)',
      terminalTitle: 'Grounding Verification Intercept',
      terminal: `$ geminex ground --target src/impact_graph.py
[GROUNDING ENGINE]
  Target file: src/impact_graph.py (142 lines read)
  Test suite: tests/test_impact_graph.py (8 assertions read)
  Caller references: src/resolver.py:42-68 (read)
[GROUNDING STATUS] All 3 dependencies in context. Write scope granted.`
    },
    {
      index: '02',
      name: 'Stay in Declared Scope',
      rule: 'Writes outside allowed_write_scope denied.',
      canonical: 'Invariant 2 · Stay in declared scope',
      rationale:
        'Unconstrained agents alter configuration files or test fixtures when facing implementation hurdles. Geminex enforces an explicit boundary contract: any tool write attempt outside the declared scope is intercepted and denied before touching disk.',
      mechanism: 'Mechanical tool interception and guard scripts (plugins/geminex-antigravity/scripts/guard.py)',
      terminalTitle: 'Scope Boundary Intercept',
      terminal: `[INTERCEPT] write_to_file("config/security_policy.json")
  Checking scope against declared contract:
  allowed_write_scope: ["src/impact_graph.py", "tests/test_impact_graph.py"]
  DENIED: Path outside declared write boundary.
  Recovery: Propose explicit contract amendment or discard out-of-scope edit.`
    },
    {
      index: '03',
      name: 'Completion Needs Evidence',
      rule: 'Fresh Geminex-owned validator PASS only.',
      canonical: 'Invariant 3 · Completion needs evidence',
      rationale:
        'Freeform LLM affirmations ("All tests pass!") are untrusted text. Completion requires an independent, fresh execution of the declared validators after all edits have settled. If any file changes after the test run, prior proof is immediately marked stale.',
      mechanism: 'Tamper-evident evidence runner with timestamp ordering (geminex validator run)',
      terminalTitle: 'Validator Execution Telemetry',
      terminal: `$ geminex validator run --id tests-unit
Executing: python -m unittest discover -s tests
Result: OK (Ran 38 tests in 0.412s, 0 errors)
SHA256: 7b91f03a... timestamp: 2026-10-18T18:24:11Z
[SAVED] Stored fresh evidence record to .geminex/evidence.json`
    },
    {
      index: '04',
      name: 'Never Exact-Retry a Failure',
      rule: 'Change diagnosis, context, or strategy on failure.',
      canonical: 'Invariant 4 · Never exact-retry a failure',
      rationale:
        'Retrying the identical command or patch against a failing test produces zero new information. When a validator fails, the agent is forced to emit an updated diagnostic hypothesis, request additional context, or adopt an alternative implementation strategy.',
      mechanism: 'Deduplicating execution cache & retry guard',
      terminalTitle: 'Duplicate Execution Blocker',
      terminal: `[RETRY GUARD] Duplicate execution detected!
  Previous command: pytest tests/test_core.py -k "test_cycle"
  Exit code: 1 (CycleDetectedError)
  Mutations since last run: 0 files changed
  BLOCKED: Exact-retry without hypothesis update is prohibited.
  Required: Emit updated diagnosis or adjust patch strategy.`
    },
    {
      index: '05',
      name: 'Satisfy the Contract',
      rule: 'Contract criteria + required validators gate completion.',
      canonical: 'Invariant 5 · Satisfy the contract',
      rationale:
        'A task is not complete when the agent feels finished. It is complete when every explicitly declared acceptance criterion and required validator has recorded verified proof in the evidence manifest.',
      mechanism: 'Declarative contract gatekeeper (schemas/contract.json)',
      terminalTitle: 'Contract Fulfillment Audit',
      terminal: `$ geminex check-contract
[CONTRACT AUDIT: GX-TASK-204]
  Criteria 1: "Ground before mutating" .............. SATISFIED ✓
  Criteria 2: "Cycles handled deterministically" ... SATISFIED ✓
  Validator: python -m unittest ..................... SATISFIED ✓
[DECISION] Contract fully fulfilled. Completion permitted.`
    },
    {
      index: '06',
      name: 'Say What Cannot Be Verified',
      rule: 'Mark unverifiable claims explicitly.',
      canonical: 'Invariant 6 · Say what cannot be verified',
      rationale:
        'If an agent claims "safe under concurrent real-world load," but the repository only runs local unit tests, the claim must be explicitly marked as unverified. Fabricated certainty is treated as an engineering defect.',
      mechanism: 'Claim classification & honesty audit protocol',
      terminalTitle: 'Honesty Audit Verification',
      terminal: `[COMPLETION SUMMARY]
  Verified: Core cycle detection unit tests pass (SHA256 verified)
  Unverified: Distributed concurrency performance under 10k RPS
  NOTE: Concurrency not exercised by local test suite. Explicitly flagged.`
    }
  ];

  const current = invariants[activeIdx];

  return (
    <section className="arch-section" id="invariants">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[03]</span>
            <span>SYSTEM INVARIANTS</span>
          </div>
          <h2 className="arch-section-title">
            Six rules.
            <span className="arch-title-em">
              No unsupported completion <em>claims</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            The core Geminex kernel enforces six invariant rules. They are model-agnostic, deterministic, and mechanically verified by hooks and proof manifests.
          </p>
        </div>

        {/* Compact List + Single Detailed Explanation Panel */}
        <div className="arch-invariants-workbench">
          {/* Left Column: Compact Navigation List */}
          <div className="arch-invariants-sidebar" role="tablist" aria-label="Six Invariants">
            {invariants.map((item, idx) => (
              <button
                key={item.index}
                type="button"
                role="tab"
                aria-selected={activeIdx === idx}
                className={`arch-inv-row ${activeIdx === idx ? 'is-active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="arch-inv-row-top">
                  <span className="arch-inv-num">{item.index}</span>
                  <span className="arch-inv-name">{item.name}</span>
                </div>
                <div className="arch-inv-rule-summary">{item.rule}</div>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Explanation Panel */}
          <div className="arch-invariants-detail">
            <div className="arch-inv-detail-header">
              <div className="arch-inv-detail-badge">
                <span>RULE {current.index} OF 06</span>
                <span className="arch-inv-canonical">{current.canonical}</span>
              </div>
              <h3 className="arch-inv-detail-title">{current.name}</h3>
              <p className="arch-inv-detail-rule">{current.rule}</p>
            </div>

            <div className="arch-inv-detail-body">
              <div className="arch-inv-block">
                <div className="arch-sublabel">ENGINEERING RATIONALE</div>
                <p className="arch-inv-rationale">{current.rationale}</p>
              </div>

              <div className="arch-inv-block">
                <div className="arch-sublabel">MECHANICAL ENFORCEMENT MECHANISM</div>
                <div className="arch-inv-mechanism">
                  <span className="arch-mech-dot" />
                  <code>{current.mechanism}</code>
                </div>
              </div>

              <div className="arch-inv-block">
                <div className="arch-sublabel">{current.terminalTitle}</div>
                <div className="arch-inv-terminal">
                  <pre><code>{current.terminal}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

export default function InvariantsSection() {
  const [activeInvariant, setActiveInvariant] = useState(0);

  const invariants = [
    {
      index: '01',
      name: 'Ground Before Mutating',
      rule: 'Read target + tests + callers before editing.',
      mechanism: 'Pre-flight call graph analysis & file read hooks.',
      explanation:
        'A model must demonstrate comprehension of current contracts before altering them. The runtime verifies that target source files, related unit tests, and caller invocations have been ingested into context before write privileges are granted.',
      terminal: `$ geminex ground --target src/impact_graph.py
✓ Target file read: 142 lines
✓ Test suite read: tests/test_impact_graph.py (8 assertions)
✓ Call sites read: 3 references in src/resolver.py
[STATUS] Grounding satisfied. Mutate permission unlocked.`
    },
    {
      index: '02',
      name: 'Stay in Declared Scope',
      rule: 'Writes outside allowed_write_scope denied.',
      mechanism: 'Mechanical tool interception and guard scripts (guard.py).',
      explanation:
        'No unannounced mutations. The agent declares its intended write boundary up front. Any write attempt touching an unlisted path is immediately intercepted and rejected before disk modification can occur.',
      terminal: `[INTERCEPT] write_to_file("config/security_policy.json")
  Checking scope against declared contract:
  allowed_write_scope: ["src/impact_graph.py", "tests/test_impact_graph.py"]
  DENIED: Path outside declared write boundary.
  Recovery: expand scope in contract or discard mutation.`
    },
    {
      index: '03',
      name: 'Completion Needs Evidence',
      rule: 'Fresh Geminex-owned validator PASS only.',
      mechanism: 'Tamper-evident evidence runner with timestamp ordering.',
      explanation:
        'An agent saying "Everything passes" carries zero authority. Completion requires an independent, fresh execution of the declared validators after all edits have settled. If any file changes after the test run, prior proof becomes stale.',
      terminal: `$ geminex validator run --id tests-unit
Executing: python -m unittest discover -s tests
Result: OK (Ran 38 tests in 0.412s)
Hash: sha256:7b91f03... timestamp: 2026-10-18T18:24:11Z
[SAVED] Evidence stored to .geminex/evidence.json`
    },
    {
      index: '04',
      name: 'Never Exact-Retry a Failure',
      rule: 'Change diagnosis, context, or strategy on failure.',
      mechanism: 'Deduplicating execution cache & retry guard.',
      explanation:
        'Retrying the identical command or syntax against a failing test produces zero information. When a validator fails, the agent must emit an updated diagnostic hypothesis, request additional context, or adopt an alternative implementation strategy.',
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
      mechanism: 'Declarative contract gatekeeper (contract.json).',
      explanation:
        'A task is not complete when the agent feels finished. It is complete when every explicitly declared acceptance criterion and required validator has recorded verifiable evidence.',
      terminal: `$ geminex check-contract
[CONTRACT: GX-TASK-204]
  Criteria 1: "Ground before mutating" .............. SATISFIED ✓
  Criteria 2: "Cycles handled deterministically" ... SATISFIED ✓
  Validator: python -m unittest ..................... SATISFIED ✓
[DECISION] Contract fully fulfilled.`
    },
    {
      index: '06',
      name: 'Say What Cannot Be Verified',
      rule: 'Mark unverifiable claims explicitly.',
      mechanism: 'Claim classification & honesty audit.',
      explanation:
        'If an agent claims "safe under concurrent real-world traffic," but the repo only runs synthetic unit tests, the claim must be explicitly qualified as unverified. Fabricated certainty is treated as an engineering failure.',
      terminal: `[COMPLETION SUMMARY]
  Verified: Core cycle detection unit tests pass (SHA256 verified)
  Unverified: Distributed concurrency performance under 10k RPS
  NOTE: Concurrency not exercised by local test suite. Flagged in summary.`
    }
  ];

  return (
    <section className="arch-section" id="invariants">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[03]</span>
            <span>HARD SYSTEM INVARIANTS</span>
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

        {/* Editorial Invariants List */}
        <div className="arch-invariants-container">
          <div className="arch-invariants-nav">
            {invariants.map((item, idx) => (
              <button
                key={item.index}
                type="button"
                className={`arch-invariant-btn ${activeInvariant === idx ? 'is-active' : ''}`}
                onClick={() => setActiveInvariant(idx)}
              >
                <span className="arch-inv-idx">{item.index}</span>
                <span className="arch-inv-name">{item.name}</span>
                <span className="arch-inv-arrow">→</span>
              </button>
            ))}
          </div>

          {/* Detailed Invariant Panel */}
          <div className="arch-invariant-display">
            <div className="arch-display-top">
              <div className="arch-display-header">
                <span className="arch-display-num">RULE {invariants[activeInvariant].index} / 06</span>
                <h3 className="arch-display-title">{invariants[activeInvariant].name}</h3>
                <div className="arch-display-rule">{invariants[activeInvariant].rule}</div>
              </div>
              <div className="arch-display-mech">
                <span className="arch-mech-label">ENFORCEMENT MECHANISM:</span>
                <span className="arch-mech-val">{invariants[activeInvariant].mechanism}</span>
              </div>
            </div>

            <div className="arch-display-body">
              <p className="arch-display-explanation">
                {invariants[activeInvariant].explanation}
              </p>

              <div className="arch-display-terminal">
                <div className="arch-terminal-label">ENFORCEMENT TELEMETRY IN ACTION</div>
                <pre>
                  <code>{invariants[activeInvariant].terminal}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

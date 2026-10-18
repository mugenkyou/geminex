import React, { useState } from 'react';

export default function EvidenceSection() {
  const [staleToggle, setStaleToggle] = useState(false);

  return (
    <section className="arch-section" id="evidence">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[05]</span>
            <span>VERIFICATION ENGINE</span>
          </div>
          <h2 className="arch-section-title">
            Checked before it counts.
            <span className="arch-title-em">
              Evidence freshness, <em>not assertions</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            In unconstrained workflows, tests pass at 10:00:00, the model edits code at 10:00:05, and declares victory at 10:00:10. Geminex cryptographically invalidates stale passes.
          </p>
        </div>

        {/* Asymmetric Technical Receipt Split */}
        <div className="arch-evidence-workbench">
          {/* Left Column: Proof Principles & Interactive Scenario Control */}
          <div className="arch-evidence-principles">
            <div className="arch-evidence-intro-card">
              <h3 className="arch-principle-heading">The 3 Cryptographic Guarantees</h3>
              <p className="arch-principle-text">
                Geminex separates validator execution from agent narration. Every verifiable claim must be grounded in an immutable, machine-checked artifact.
              </p>

              <div className="arch-principles-list">
                <div className="arch-principle-item">
                  <div className="arch-principle-idx">01</div>
                  <div className="arch-principle-body">
                    <h4 className="arch-principle-title">Declared Validators</h4>
                    <p className="arch-principle-desc">
                      Validators are declared in <code>contract.json</code> before work begins. Agents cannot swap out strict suites for trivial mocks mid-task.
                    </p>
                  </div>
                </div>

                <div className="arch-principle-item">
                  <div className="arch-principle-idx">02</div>
                  <div className="arch-principle-body">
                    <h4 className="arch-principle-title">SHA-256 Digest Locking</h4>
                    <p className="arch-principle-desc">
                      Every touched file is hashed immediately before and after validator execution. Any post-validation change invalidates the hash.
                    </p>
                  </div>
                </div>

                <div className="arch-principle-item">
                  <div className="arch-principle-idx">03</div>
                  <div className="arch-principle-body">
                    <h4 className="arch-principle-title">Stale-Pass Invalidation</h4>
                    <p className="arch-principle-desc">
                      If file modification time is newer than validator completion time, completion is blocked. Passing tests on old code carry zero authority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Scenario Trigger */}
              <div className="arch-evidence-scenario-box">
                <div className="arch-scenario-label">TEST SCENARIO SIMULATOR:</div>
                <div className="arch-scenario-buttons">
                  <button
                    type="button"
                    className={`arch-scenario-btn ${!staleToggle ? 'is-active-fresh' : ''}`}
                    onClick={() => setStaleToggle(false)}
                  >
                    <span className="arch-sim-dot pass-dot" />
                    <span>Clean Run (Fresh Proof)</span>
                  </button>
                  <button
                    type="button"
                    className={`arch-scenario-btn ${staleToggle ? 'is-active-stale' : ''}`}
                    onClick={() => setStaleToggle(true)}
                  >
                    <span className="arch-sim-dot fail-dot" />
                    <span>Post-Test Mutation (Stale Proof)</span>
                  </button>
                </div>
                <span className="arch-scenario-hint">
                  {staleToggle
                    ? 'Simulates an agent modifying a file after running tests. Notice the gate decision instantly flips to BLOCKED.'
                    : 'Shows a verified run where all edits preceded validator execution with matching SHA-256 digests.'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Cryptographic Evidence Manifest */}
          <div className="arch-evidence-manifest">
            <div className="arch-manifest-topbar">
              <div className="arch-manifest-badge">
                <span className="arch-manifest-dot" />
                <span>EVIDENCE RECEIPT (schemas/evidence.schema.json)</span>
              </div>
              <span className={`arch-manifest-status ${staleToggle ? 'status-fail' : 'status-pass'}`}>
                {staleToggle ? 'STATUS: BLOCKED' : 'STATUS: VERIFIED'}
              </span>
            </div>

            <div className="arch-manifest-meta-grid">
              <div className="arch-manifest-meta-item">
                <span className="arch-meta-lbl">TASK ID</span>
                <span className="arch-meta-val">GX-TASK-8419</span>
              </div>
              <div className="arch-manifest-meta-item">
                <span className="arch-meta-lbl">CONTRACT DIGEST</span>
                <span className="arch-meta-val font-mono">sha256:4a8b79e1...</span>
              </div>
              <div className="arch-manifest-meta-item">
                <span className="arch-meta-lbl">VALIDATOR RUNNER</span>
                <span className="arch-meta-val">geminex-owned</span>
              </div>
              <div className="arch-manifest-meta-item">
                <span className="arch-meta-lbl">DRIFT DRIFT DELTA</span>
                <span className={`arch-meta-val font-mono ${staleToggle ? 'text-fail' : 'text-pass'}`}>
                  {staleToggle ? '+8,839 ms (STALE)' : '0 ms (FRESH)'}
                </span>
              </div>
            </div>

            <div className="arch-manifest-code">
              <div className="arch-code-bar">
                <span>.geminex/evidence.json (Illustrative Example)</span>
                <span>SHA-256 Digest Chain</span>
              </div>
              <pre className="arch-code-block">
                <code>{`{
  "$schema": "schemas/evidence.schema.json",
  "task_id": "GX-TASK-8419",
  "contract_hash": "sha256:4a8b79e120ef60b3...",
  "mutated_files": {
    "src/impact_graph.py": "${staleToggle ? 'sha256:untracked_post_test_edit' : 'sha256:d17a39bf8e04e21a...'}",
    "tests/test_impact_graph.py": "sha256:49c02d1844fac761..."
  },
  "validator_execution": {
    "command": "python -m unittest discover -s tests",
    "exit_code": 0,
    "timestamp_utc": "2026-10-18T18:24:11.042Z",
    "stdout": "Ran 38 tests in 0.412s. OK.",
    "evidence_freshness": ${staleToggle ? 'false' : 'true'}
  },
  "gate_outcome": "${staleToggle ? 'BLOCKED_STALE_EVIDENCE' : 'VERIFIED_PASS'}"
}`}</code>
              </pre>
            </div>

            <div className="arch-manifest-gate-box">
              {staleToggle ? (
                <div className="arch-gate-result is-blocked">
                  <div className="arch-gate-result-title">GATE DECISION: BLOCKED</div>
                  <div className="arch-gate-result-desc">
                    Stale evidence detected. File <code>src/impact_graph.py</code> was modified 8.8 seconds after validator completion. Re-run declared validators to generate fresh evidence.
                  </div>
                </div>
              ) : (
                <div className="arch-gate-result is-pass">
                  <div className="arch-gate-result-title">GATE DECISION: VERIFIED PASS</div>
                  <div className="arch-gate-result-desc">
                    All contract criteria verified. Fresh evidence recorded with zero file drift after test execution.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

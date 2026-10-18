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
            In unconstrained agent systems, tests can pass at 10:00:00, the agent edits a file at 10:00:05, and declares victory at 10:00:10. Geminex cryptographically invalidates stale passes.
          </p>
        </div>

        {/* Evidence Pillars Grid */}
        <div className="arch-evidence-grid">
          <div className="arch-evidence-card">
            <div className="arch-ev-badge">PILLAR 01</div>
            <h3 className="arch-ev-title">Declared Validators</h3>
            <p className="arch-ev-text">
              Validators must be declared in <code>contract.json</code> before execution starts. An agent cannot swap a strict test suite for a trivial <code>assert True</code> mock mid-task.
            </p>
          </div>

          <div className="arch-evidence-card">
            <div className="arch-ev-badge">PILLAR 02</div>
            <h3 className="arch-ev-title">Cryptographic Hash Chains</h3>
            <p className="arch-ev-text">
              Every file touched within the declared scope is hashed using SHA-256 immediately before and after validator execution. Any post-validation modification invalidates the digest.
            </p>
          </div>

          <div className="arch-evidence-card">
            <div className="arch-ev-badge">PILLAR 03</div>
            <h3 className="arch-ev-title">Stale-Pass Rejection</h3>
            <p className="arch-ev-text">
              If any source file timestamp is newer than the validator completion timestamp, the verification engine raises a <code>StaleEvidenceError</code> and rejects task completion.
            </p>
          </div>
        </div>

        {/* Technical Evidence Receipt Viewer */}
        <div className="arch-receipt-viewer">
          <div className="arch-receipt-topbar">
            <div className="arch-receipt-label">
              <span className="arch-receipt-dot" />
              <span>ILLUSTRATIVE EVIDENCE RECORD — SPECIFIED BY schemas/evidence.schema.json</span>
            </div>

            <div className="arch-receipt-controls">
              <button
                type="button"
                className={`arch-toggle-btn ${staleToggle ? 'is-stale' : 'is-fresh'}`}
                onClick={() => setStaleToggle(!staleToggle)}
              >
                {staleToggle ? 'Simulate File Edit (Stale Evidence Active)' : 'Clean Run (Fresh Evidence)'}
              </button>
            </div>
          </div>

          <div className="arch-receipt-body">
            <div className="arch-receipt-split">
              {/* Left Column: Metadata & Chain */}
              <div className="arch-receipt-meta-col">
                <div className="arch-meta-row">
                  <span className="arch-meta-k">TASK_ID:</span>
                  <span className="arch-meta-v">TASK-GX-2026-0419</span>
                </div>
                <div className="arch-meta-row">
                  <span className="arch-meta-k">CONTRACT_DIGEST:</span>
                  <span className="arch-meta-v font-mono">sha256:4a8b79e1...392d</span>
                </div>
                <div className="arch-meta-row">
                  <span className="arch-meta-k">VALIDATOR_RUNNER:</span>
                  <span className="arch-meta-v">geminex-owned (python -m unittest)</span>
                </div>
                <div className="arch-meta-row">
                  <span className="arch-meta-k">EXECUTION_TIMESTAMP:</span>
                  <span className="arch-meta-v font-mono">2026-10-18T18:24:11.042Z</span>
                </div>
                <div className="arch-meta-row">
                  <span className="arch-meta-k">LAST_FILE_MUTATION:</span>
                  <span className="arch-meta-v font-mono">
                    {staleToggle ? '2026-10-18T18:24:19.881Z (+8.8s drift)' : '2026-10-18T18:24:08.102Z (pre-test)'}
                  </span>
                </div>
                <div className="arch-meta-row">
                  <span className="arch-meta-k">FRESHNESS_VERIFIED:</span>
                  <span className={`arch-meta-v font-mono ${staleToggle ? 'text-fail' : 'text-pass'}`}>
                    {staleToggle ? 'FALSE (Stale file touched post-test)' : 'TRUE (0 unverified mutations)'}
                  </span>
                </div>

                <div className="arch-receipt-status-banner">
                  {staleToggle ? (
                    <div className="arch-status-box is-error">
                      <div className="arch-status-title">GATE DECISION: REJECTED</div>
                      <div className="arch-status-sub">
                        Stale evidence detected. File <code>src/impact_graph.py</code> was modified after validator execution. Re-run validators before claiming completion.
                      </div>
                    </div>
                  ) : (
                    <div className="arch-status-box is-valid">
                      <div className="arch-status-title">GATE DECISION: VERIFIED PASS</div>
                      <div className="arch-status-sub">
                        All contract criteria and validators confirmed. Tamper-evident receipt emitted with SHA-256 seal.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Raw JSON Proof Representation */}
              <div className="arch-receipt-code-col">
                <div className="arch-code-bar">
                  <span>evidence.json (cryptographic record)</span>
                  <span>status: {staleToggle ? 'INVALID' : 'VALID'}</span>
                </div>
                <pre className="arch-code-block">
                  <code>{`{
  "$schema": "schemas/evidence.schema.json",
  "task_id": "TASK-GX-2026-0419",
  "contract_hash": "sha256:4a8b79e120ef...392d",
  "mutated_files": {
    "src/impact_graph.py": "${staleToggle ? 'sha256:untracked_mutation_delta' : 'sha256:d17a39bf8e04e21a...'}",
    "tests/test_impact_graph.py": "sha256:49c02d1844fac761..."
  },
  "validator_execution": {
    "command": "python -m unittest discover -s tests",
    "exit_code": 0,
    "timestamp_utc": "2026-10-18T18:24:11.042Z",
    "stdout_snippet": "Ran 38 tests in 0.412s. OK.",
    "evidence_freshness": ${staleToggle ? 'false' : 'true'}
  },
  "gate_outcome": "${staleToggle ? 'BLOCKED_STALE_EVIDENCE' : 'VERIFIED_PASS'}"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

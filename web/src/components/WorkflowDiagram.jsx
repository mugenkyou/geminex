import React, { useState } from 'react';

export default function WorkflowDiagram() {
  const [activeStage, setActiveStage] = useState(0);
  const [simulationMode, setSimulationMode] = useState('pass'); // 'pass' or 'stale'

  const stages = [
    {
      step: '01',
      title: 'Contract & Criteria',
      shortTitle: 'Contract',
      actor: 'Human Engineer / Orchestrator',
      invariant: 'Invariant 5 · Contract Criteria Gate',
      desc: 'Declare explicit task acceptance criteria, allowed write scope, and required validators in contract.json before any code is modified.',
      artifactName: 'schemas/contract.json (Illustrative Example)',
      artifactCode: `{
  "task_id": "GX-TASK-8419",
  "allowed_write_scope": [
    "src/impact_graph.py",
    "tests/test_impact_graph.py"
  ],
  "required_validators": [
    "python -m unittest discover -s tests"
  ],
  "criteria": [
    "Ground before mutating: read call sites before edit",
    "Resolve cyclic graph dependencies without recursion error"
  ]
}`,
      telemetry: `[CONTRACT LOADED] Task GX-TASK-8419 initialized.
Write boundary: 2 files permitted.
Required validators: 1 test command registered.
Completion gate: Locked until fresh validator evidence recorded.`
    },
    {
      step: '02',
      title: 'Grounding & Caller Recon',
      shortTitle: 'Grounding',
      actor: 'Geminex Runtime',
      invariant: 'Invariant 1 · Ground Before Mutating',
      desc: 'The agent is mechanically barred from editing target files until it has ingested the target source, existing tests, and dependent caller sites into context.',
      artifactName: 'geminex ground --target src/impact_graph.py',
      artifactCode: `$ geminex ground --target src/impact_graph.py
[RECONNAISSANCE] Invariant 1 enforcement active:
  ✓ Read target: src/impact_graph.py (142 lines)
  ✓ Read test suite: tests/test_impact_graph.py (8 unit tests)
  ✓ Read call sites: src/dependency_resolver.py:42-68 (caller context)
Grounding verified. Write permissions unlocked for declared scope.`,
      telemetry: `[GROUNDING SATISFIED] Call sites and test assertions ingested.
Pre-flight read verification confirmed: 3 files inspected.
Mutations now permitted strictly within allowed_write_scope.`
    },
    {
      step: '03',
      title: 'Adaptive Planning Tier',
      shortTitle: 'Plan Tier',
      actor: 'geminex decide --signals',
      invariant: 'Conditional Planning · No Universal Ceremony',
      desc: 'Evaluates task blast radius to select appropriate planning tier: direct (trivial), compact (dependent callers), deep (architectural/security), or replan.',
      artifactName: 'geminex decide --signals',
      artifactCode: `$ geminex decide --signals '{
    "target_files": 1,
    "has_caller_dependencies": true,
    "public_api_change": false,
    "security_sensitive": false
  }'
[DECISION] tier: compact (reason_code: DEPENDENT_CALLER_CHANGES)
Planning artifact: compact checklist generated. Deep ceremony bypassed.`,
      telemetry: `[DECISION EMITTED] Selected tier: compact.
Ceremonial overhead eliminated. Agent proceeds with focused, scoped implementation.`
    },
    {
      step: '04',
      title: 'Scoped Mutation & Guard',
      shortTitle: 'Scope Guard',
      actor: 'Geminex Guard (guard.py)',
      invariant: 'Invariant 2 · Stay in Declared Scope',
      desc: 'Tool hooks intercept write attempts in real time. Writes to files outside allowed_write_scope are physically blocked before touching disk.',
      artifactName: 'plugins/geminex-antigravity/scripts/guard.py',
      artifactCode: `[PRE-WRITE HOOK] Tool write_to_file invoked:
  Target: src/impact_graph.py
  Check: Path in allowed_write_scope? YES ✓ Allowed.

[PRE-WRITE HOOK] Tool write_to_file invoked:
  Target: config/runtime.yaml
  Check: Path in allowed_write_scope? NO ✗
  DENIED: Write outside declared scope blocked by GeminexGuard.`,
      telemetry: `[GUARD ENFORCEMENT] 1 authorized write committed to src/impact_graph.py.
1 unauthorized write to config/runtime.yaml blocked.
Repository integrity preserved.`
    },
    {
      step: '05',
      title: 'Fresh Validator Execution',
      shortTitle: 'Validation',
      actor: 'Geminex-Owned Runner',
      invariant: 'Invariant 3 · Completion Needs Evidence',
      desc: 'The runtime independently executes the declared test suite. Freeform agent assertions ("everything works") are treated as untrusted text.',
      artifactName: 'geminex validator run --id tests-unit',
      artifactCode: simulationMode === 'pass'
        ? `$ geminex validator run --id tests-unit
Command: python -m unittest discover -s tests
Timestamp: 2026-10-18T18:24:11.042Z
Result: OK (Ran 38 tests in 0.412s, 0 failures)
Output: Captured to evidence buffer. Fresh evidence recorded.`
        : `$ geminex validator run --id tests-unit
Command: python -m unittest discover -s tests
Timestamp: 2026-10-18T18:24:11.042Z
Result: OK (Ran 38 tests)
[CRITICAL WARNING] Subsequent file modification detected at 18:24:19Z!
Tests ran on old code. Stale-pass rejection armed.`,
      telemetry: simulationMode === 'pass'
        ? `[VALIDATION PASS] 38 unit tests executed cleanly.
Freshness status: FRESH (0 mutations since execution).`
        : `[VALIDATION WARNING] Test pass recorded at 18:24:11 UTC.
Subsequent file modification detected at 18:24:19 UTC. Evidence is now STALE.`
    },
    {
      step: '06',
      title: 'Evidence Verification & Hash Chain',
      shortTitle: 'Evidence Hash',
      actor: 'Cryptographic Engine',
      invariant: 'Invariant 5 & 6 · Tamper-Evident Proof',
      desc: 'Hashes all mutated files with SHA-256 and compares modification timestamps against the validator execution time.',
      artifactName: 'schemas/evidence.schema.json (Illustrative Record)',
      artifactCode: simulationMode === 'pass'
        ? `{
  "contract_hash": "sha256:4a8b79e120ef...392d",
  "mutated_files": {
    "src/impact_graph.py": "sha256:d17a39bf8e04...",
    "tests/test_impact_graph.py": "sha256:49c02d1844fa..."
  },
  "validator_timestamp": "2026-10-18T18:24:11.042Z",
  "freshness_verified": true,
  "drift_ms": 0
}`
        : `{
  "contract_hash": "sha256:4a8b79e120ef...392d",
  "mutated_files": {
    "src/impact_graph.py": "sha256:unverified_hash_drift",
    "tests/test_impact_graph.py": "sha256:49c02d1844fa..."
  },
  "validator_timestamp": "2026-10-18T18:24:11.042Z",
  "freshness_verified": false,
  "drift_error": "file modified 8839ms after validator run"
}`,
      telemetry: simulationMode === 'pass'
        ? `[HASH AUDIT PASS] SHA-256 hashes match. Evidence freshness confirmed.`
        : `[HASH AUDIT FAILED] SHA-256 hash drift detected on src/impact_graph.py.
Evidence rejected as stale.`
    },
    {
      step: '07',
      title: 'Deterministic Completion Gate',
      shortTitle: 'Completion Gate',
      actor: 'Geminex Gatekeeper',
      invariant: 'Kernel Invariant 5 · Verified Completion',
      desc: 'The gatekeeper evaluates contract criteria and fresh evidence. If evidence is missing or stale, task completion is blocked.',
      artifactName: 'completion_receipt.json',
      artifactCode: simulationMode === 'pass'
        ? `{
  "gate_outcome": "VERIFIED_PASS",
  "task_id": "GX-TASK-8419",
  "criteria_satisfied": 2,
  "evidence_receipt": ".geminex/evidence.json",
  "summary": "Scoped changes verified by fresh test execution."
}`
        : `{
  "gate_outcome": "BLOCKED_STALE_EVIDENCE",
  "task_id": "GX-TASK-8419",
  "error": "StaleEvidenceError: file modified after tests.",
  "action_required": "Re-run python -m unittest to refresh evidence."
}`,
      telemetry: simulationMode === 'pass'
        ? `[GATE DECISION: VERIFIED_PASS] Task completed with verified proof manifest.`
        : `[GATE DECISION: BLOCKED] Completion claim denied.
Fresh validator execution required before task can be marked complete.`
    }
  ];

  const current = stages[activeStage];

  return (
    <section className="arch-section" id="how-it-works">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[02]</span>
            <span>VERIFICATION PIPELINE</span>
          </div>
          <h2 className="arch-section-title">
            One task.
            <span className="arch-title-em">
              A process you can <em>verify</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Every transition in the Geminex pipeline generates inspectable, machine-verifiable proof. Select any stage to inspect its operational protocol, generated artifact, and runtime telemetry.
          </p>

          {/* Simulation Mode Toggle Bar */}
          <div className="arch-sim-toolbar">
            <span className="arch-sim-toolbar-label">SIMULATION SCENARIO:</span>
            <div className="arch-sim-toggle-group">
              <button
                type="button"
                className={`arch-sim-pill ${simulationMode === 'pass' ? 'is-pass' : ''}`}
                onClick={() => setSimulationMode('pass')}
              >
                <span className="arch-sim-dot pass-dot" />
                <span>Happy Path (Fresh Verification PASS)</span>
              </button>
              <button
                type="button"
                className={`arch-sim-pill ${simulationMode === 'stale' ? 'is-fail' : ''}`}
                onClick={() => setSimulationMode('stale')}
              >
                <span className="arch-sim-dot fail-dot" />
                <span>Adversarial Path (Stale Evidence BLOCKED)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Interactive Technical Workflow Diagram */}
        <div className="arch-workflow-workbench">
          {/* Timeline Nodes Bar */}
          <div className="arch-timeline-bar" role="tablist" aria-label="Workflow Stages">
            {stages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                role="tab"
                aria-selected={activeStage === idx}
                className={`arch-timeline-node ${activeStage === idx ? 'is-active' : ''} ${
                  idx === stages.length - 1
                    ? simulationMode === 'pass' ? 'is-final-pass' : 'is-final-fail'
                    : ''
                }`}
                onClick={() => setActiveStage(idx)}
              >
                <div className="arch-node-topline">
                  <span className="arch-node-num">{stage.step}</span>
                  <span className="arch-node-indicator" />
                </div>
                <span className="arch-node-label">{stage.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Synchronized Stage Detail Console */}
          <div className="arch-stage-console">
            <div className="arch-console-topbar">
              <div className="arch-console-meta">
                <span className="arch-console-badge">STAGE {current.step} OF 07</span>
                <h3 className="arch-console-title">{current.title}</h3>
                <span className="arch-console-invariant">{current.invariant}</span>
              </div>

              <div className="arch-console-controls">
                <button
                  type="button"
                  className="arch-console-nav-btn"
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  aria-label="Previous step"
                >
                  ← Prev
                </button>
                <span className="arch-console-step-indicator">{activeStage + 1} / 7</span>
                <button
                  type="button"
                  className="arch-console-nav-btn"
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage((prev) => Math.min(stages.length - 1, prev + 1))}
                  aria-label="Next step"
                >
                  Next →
                </button>
              </div>
            </div>

            <div className="arch-console-grid">
              {/* Left Column: Description & Protocol */}
              <div className="arch-console-left">
                <div className="arch-console-block">
                  <div className="arch-sublabel">ACTOR & RESPONSIBILITY</div>
                  <div className="arch-actor-tag">{current.actor}</div>
                </div>

                <div className="arch-console-block">
                  <div className="arch-sublabel">OPERATIONAL PROTOCOL</div>
                  <p className="arch-protocol-text">{current.desc}</p>
                </div>

                <div className="arch-console-block">
                  <div className="arch-sublabel">RUNTIME EXECUTION TELEMETRY</div>
                  <div className={`arch-telemetry-panel ${simulationMode === 'stale' && activeStage >= 4 ? 'is-alert' : ''}`}>
                    <pre><code>{current.telemetry}</code></pre>
                  </div>
                </div>
              </div>

              {/* Right Column: Concrete Artifact Inspector */}
              <div className="arch-console-right">
                <div className="arch-artifact-header">
                  <span className="arch-artifact-title">ARTIFACT INSPECTOR</span>
                  <span className="arch-artifact-path">{current.artifactName}</span>
                </div>

                <div className="arch-artifact-editor">
                  <pre className="arch-code-block">
                    <code>{current.artifactCode}</code>
                  </pre>
                </div>

                <div className="arch-artifact-footer">
                  <span className="arch-artifact-note">
                    {simulationMode === 'stale' && activeStage >= 4
                      ? '⚠️ Stale Evidence Guard Active: file modified after test run timestamp.'
                      : '✓ Deterministic verification artifact recorded.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

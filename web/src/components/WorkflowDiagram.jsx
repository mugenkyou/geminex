import React, { useState } from 'react';

export default function WorkflowDiagram() {
  const [activeStage, setActiveStage] = useState(0);
  const [simulationMode, setSimulationMode] = useState('pass'); // 'pass' or 'stale'

  const stages = [
    {
      step: '01',
      title: 'Task & Contract Specification',
      actor: 'Human Engineer / Orchestrator',
      operation: 'contract.json input',
      desc: 'Receive task requirements, concrete acceptance criteria, and declared required validators.',
      details: 'Task ID GX-881 loaded with allowed_write_scope: ["src/graph.py", "tests/test_graph.py"]. Completion gate initialized with 2 required criteria.',
      outputArtifact: 'contract.json'
    },
    {
      step: '02',
      title: 'Grounding & Caller Reconnaissance',
      actor: 'Geminex Runtime (Invariant 1)',
      operation: 'Pre-mutation read check',
      desc: 'Ground before mutating: reads target source files, existing unit tests, and caller dependencies.',
      details: 'Inspects src/graph.py, tests/test_graph.py, and callers in src/resolver.py. Gathers caller signatures and invariants before allowing any file mutation.',
      outputArtifact: 'grounding_trace.jsonl'
    },
    {
      step: '03',
      title: 'Adaptive Planning & Scope Binding',
      actor: 'geminex decide --signals',
      operation: 'Planning tier selection',
      desc: 'Selects appropriate depth: direct (trivial), compact (dependent), deep (architectural), or replan.',
      details: 'Signals evaluate risk, API visibility, and touched scopes. Decision: compact. Declared allowed_write_scope strictly enforced by guard hooks.',
      outputArtifact: 'decision_record.json'
    },
    {
      step: '04',
      title: 'Controlled File Mutation',
      actor: 'Coding Agent + Geminex Guard',
      operation: 'Pre-write hook validation',
      desc: 'Executes edits strictly inside declared scope. Any write to unlisted files triggers an immediate block.',
      details: 'Edits applied to src/graph.py. Attempted edit to settings.json intercepted and denied by pre-write hook. Agent kept inside task bounds.',
      outputArtifact: 'patch_delta.diff'
    },
    {
      step: '05',
      title: 'Fresh Validator Execution',
      actor: 'Geminex-Owned Runner',
      operation: 'Independent test run',
      desc: 'Runs declared validators independently after final file changes. Freeform agent assertions are ignored.',
      details: simulationMode === 'pass'
        ? 'Executes python -m unittest discover -s tests. Timestamp: 14:10:02 UTC. Result: PASS (42 tests, 0 errors). Execution output captured into evidence buffer.'
        : 'Executes tests at 14:10:02 UTC. But agent subsequently modified src/graph.py at 14:10:09 UTC without re-running validators!',
      outputArtifact: 'validator_stdout.log'
    },
    {
      step: '06',
      title: 'Cryptographic Evidence Verification',
      actor: 'Evidence Chain Engine',
      operation: 'Hash linking & Freshness Check',
      desc: 'Hashes all mutated files (SHA-256) and verifies timestamp ordering against validator execution.',
      details: simulationMode === 'pass'
        ? 'All touched files match SHA-256 hashes recorded at validator execution time. Evidence freshness: VERIFIED (0ms drift). Criteria 1 & 2 satisfied.'
        : 'STALE EVIDENCE ERROR: src/graph.py hash changed after test run. Prior pass is invalid and refused.',
      outputArtifact: 'evidence.json'
    },
    {
      step: '07',
      title: 'Deterministic Completion Gate',
      actor: 'Geminex Gatekeeper',
      operation: 'Accept / Reject Completion',
      desc: 'Accepts completion only when fresh, verified proof exists for all contract criteria; otherwise reports unverified.',
      details: simulationMode === 'pass'
        ? 'GATE DECISION: VERIFIED_PASS. Task completed with tamper-evident receipt.'
        : 'GATE DECISION: BLOCKED. Completion denied due to stale evidence. Fresh validator run required.',
      outputArtifact: 'completion_receipt.json'
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
            <span>VERIFICATION LIFECYCLE</span>
          </div>
          <h2 className="arch-section-title">
            One task.
            <span className="arch-title-em">
              A process you can <em>verify</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Every step in the Geminex pipeline generates inspectable, machine-verifiable proof. Unverifiable claims and stale test outputs cannot bypass the completion gate.
          </p>

          {/* Interactive Simulation Switcher */}
          <div className="arch-sim-switcher">
            <span className="arch-sim-label">SIMULATION MODE:</span>
            <button
              type="button"
              className={`arch-sim-btn ${simulationMode === 'pass' ? 'is-active-pass' : ''}`}
              onClick={() => setSimulationMode('pass')}
            >
              <span className="arch-sim-dot pass-dot" />
              <span>Happy Path (Fresh Verification PASS)</span>
            </button>
            <button
              type="button"
              className={`arch-sim-btn ${simulationMode === 'stale' ? 'is-active-fail' : ''}`}
              onClick={() => setSimulationMode('stale')}
            >
              <span className="arch-sim-dot fail-dot" />
              <span>Adversarial Path (Stale Evidence BLOCKED)</span>
            </button>
          </div>
        </div>

        {/* Technical Flow Visualization */}
        <div className="arch-workflow-diagram-wrap">
          <div className="arch-flow-stepper">
            {stages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                className={`arch-flow-node ${activeStage === idx ? 'is-selected' : ''} ${
                  idx === stages.length - 1
                    ? simulationMode === 'pass' ? 'node-pass' : 'node-fail'
                    : ''
                }`}
                onClick={() => setActiveStage(idx)}
              >
                <div className="arch-node-top">
                  <span className="arch-node-step">{stage.step}</span>
                  <span className="arch-node-indicator" />
                </div>
                <div className="arch-node-title">{stage.title}</div>
                <div className="arch-node-actor">{stage.actor}</div>
              </button>
            ))}
          </div>

          {/* Selected Stage Detail Inspector */}
          <div className="arch-flow-inspector">
            <div className="arch-inspector-header">
              <div className="arch-inspector-meta">
                <span className="arch-inspector-tag">STAGE {current.step} / 07</span>
                <span className="arch-inspector-name">{current.title}</span>
              </div>
              <div className="arch-inspector-artifact">
                <span className="arch-artifact-label">ARTIFACT:</span>
                <code>{current.outputArtifact}</code>
              </div>
            </div>

            <div className="arch-inspector-body">
              <div className="arch-inspector-col">
                <div className="arch-sublabel">OPERATION PROTOCOL</div>
                <div className="arch-inspector-op">{current.operation}</div>
                <p className="arch-inspector-desc">{current.desc}</p>
              </div>

              <div className="arch-inspector-col arch-col-execution">
                <div className="arch-sublabel">RUNTIME EXECUTION TELEMETRY</div>
                <div className={`arch-telemetry-box ${simulationMode === 'stale' && activeStage >= 4 ? 'is-alert' : ''}`}>
                  <code>{current.details}</code>
                </div>
              </div>
            </div>

            <div className="arch-inspector-footer">
              <div className="arch-flow-nav-buttons">
                <button
                  type="button"
                  className="arch-btn-ghost"
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  className="arch-btn-ghost"
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                >
                  Next Step →
                </button>
              </div>

              <div className="arch-gate-indicator">
                {activeStage === stages.length - 1 ? (
                  simulationMode === 'pass' ? (
                    <span className="arch-gate-badge pass">COMPLETION GRANTED: EVIDENCE FRESH</span>
                  ) : (
                    <span className="arch-gate-badge fail">COMPLETION BLOCKED: STALE PROOF DETECTED</span>
                  )
                ) : (
                  <span className="arch-gate-badge pending">PIPELINE ACTIVE IN PROTOCOL</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

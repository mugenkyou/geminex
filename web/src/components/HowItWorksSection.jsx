import React, { useState } from 'react';

const STAGES = [
  {
    id: 'reading',
    name: 'Reading Code',
    alone: 'Usually reads the relevant files, but nothing stops a blind edit when context is long or the model is confident.',
    geminex: 'Read-before-write is enforced: editing an existing file without a recorded read is denied by runtime guards.',
    badge: 'Invariant 1'
  },
  {
    id: 'planning',
    name: 'Planning',
    alone: 'Plans when it judges the task needs one. No machine-readable record survives the session.',
    geminex: 'A machine-readable plan (`direct` to `replan`) is emitted with reason codes; effort scales in proportion to risk.',
    badge: 'Decide Policy'
  },
  {
    id: 'scope',
    name: 'Scope Gating',
    alone: 'Can touch any file the tools allow. A wrong turn silently edits the wrong directory or package.',
    geminex: 'Each task declares `allowed_write_scope`. Outside writes are denied with the violating path named.',
    badge: 'Invariant 2'
  },
  {
    id: 'checks',
    name: 'Running Checks',
    alone: 'Often runs tests, sometimes before the final edit, and reports the result in prose you cannot verify.',
    geminex: 'A declared validator executes after the last mutation; exit code and output hash are recorded. Stale green runs are rejected.',
    badge: 'Invariant 3'
  },
  {
    id: 'retrying',
    name: 'Retrying Failures',
    alone: 'Happily retries the identical call that just failed, burning quota without changing strategy.',
    geminex: 'Exact retries of failed fingerprints are banned until the diagnosis, context, or strategy changes.',
    badge: 'Invariant 4'
  },
  {
    id: 'completion',
    name: 'Claiming Completion',
    alone: 'Announces "Done!" with prose explanations. Nothing validates the claim against ground truth.',
    geminex: 'The Stop gate demands a fresh owned PASS per criterion over an intact evidence hash chain.',
    badge: 'Invariant 5'
  },
  {
    id: 'breaks',
    name: 'When Things Break',
    alone: 'The error sits buried somewhere in the long conversation history.',
    geminex: 'Every denial states what failed, which component decided, and the next safe remediation action.',
    badge: 'Invariant 6'
  }
];

export default function HowItWorksSection() {
  const [activeStage, setActiveStage] = useState('checks');
  const current = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <section id="how-it-works" className="deep-section" aria-labelledby="hiw-heading">
      <div className="section-header">
        <span className="section-tag">Engineering Loop</span>
        <h2 id="hiw-heading" className="section-title">
          How It Works: <em>The Honest Difference</em>
        </h2>
        <p className="section-subtitle">
          Gemini alone is capable of every good practice; the difference is that nothing requires them, checks them, or keeps the receipts. Geminex makes each step required and verifiable.
        </p>
      </div>

      {/* Visual Workflow Loop */}
      <div className="workflow-loop-card">
        <div className="loop-step">
          <div className="step-num">01</div>
          <div className="step-title">Describe Task</div>
          <div className="step-desc">Acceptance criteria & scope declared</div>
        </div>
        <div className="loop-arrow" aria-hidden="true">→</div>
        <div className="loop-step">
          <div className="step-num">02</div>
          <div className="step-title">Read Code & Tests</div>
          <div className="step-desc">Target state observed on disk</div>
        </div>
        <div className="loop-arrow" aria-hidden="true">→</div>
        <div className="loop-step">
          <div className="step-num">03</div>
          <div className="step-title">Proportional Plan</div>
          <div className="step-desc">Direct / compact / deep tier</div>
        </div>
        <div className="loop-arrow" aria-hidden="true">→</div>
        <div className="loop-step">
          <div className="step-num">04</div>
          <div className="step-title">Scoped Edits</div>
          <div className="step-desc">Enforced write perimeter</div>
        </div>
        <div className="loop-arrow" aria-hidden="true">→</div>
        <div className="loop-step">
          <div className="step-num">05</div>
          <div className="step-title">Real Validators</div>
          <div className="step-desc">Fresh executed PASS required</div>
        </div>
        <div className="loop-arrow" aria-hidden="true">→</div>
        <div className="loop-step step-complete">
          <div className="step-num">06</div>
          <div className="step-title">Gated Finish</div>
          <div className="step-desc">Tamper-evident proof attached</div>
        </div>
      </div>

      {/* Interactive Stage Comparative Explorer */}
      <div className="comparative-explorer">
        <div className="stage-selector-tabs" role="tablist" aria-label="Workflow stages">
          {STAGES.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={activeStage === s.id}
              className={`stage-tab ${activeStage === s.id ? 'is-active' : ''}`}
              onClick={() => setActiveStage(s.id)}
            >
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        <div className="comparison-card">
          <div className="card-column col-alone">
            <div className="column-header">
              <span className="dot dot-alone" />
              <h3>Gemini Alone (Standard)</h3>
            </div>
            <p className="column-body">{current.alone}</p>
          </div>

          <div className="card-divider" />

          <div className="card-column col-geminex">
            <div className="column-header">
              <span className="dot dot-geminex" />
              <div className="title-with-badge">
                <h3>Gemini + Geminex</h3>
                <span className="invariant-badge">{current.badge}</span>
              </div>
            </div>
            <p className="column-body">{current.geminex}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

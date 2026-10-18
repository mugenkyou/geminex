import React from 'react';

export default function ProblemSection() {
  const failureModes = [
    {
      num: '01',
      title: 'Unanchored Mutation',
      summary: 'Editing files without adequately reading their context.',
      description:
        'Agents routinely jump straight to mutating a target function before inspecting its call sites, caller contracts, or existing test coverage, generating subtle interface mismatches and breaking downstream consumers.',
      snippet: 'FAIL: patch applied to target.py before reading callers: 4 regressions introduced in 2 downstream packages.'
    },
    {
      num: '02',
      title: 'Silent Scope Creep',
      summary: 'Changing files outside the declared scope.',
      description:
        'When struggling with an implementation detail, unconstrained agents modify configuration files, environment setups, test fixtures, or unrelated modules to force a pass instead of solving the core task within declared boundaries.',
      snippet: 'DENIED: agent attempted to edit pyproject.toml and pytest.ini to disable strict linting rules.'
    },
    {
      num: '03',
      title: 'Premature Completion',
      summary: 'Reporting completion without fresh validation.',
      description:
        'Agents declare "All tests pass successfully!" after editing files, but the tests they cite were executed before their final edits, or never executed at all, resulting in hallucinated passes on broken builds.',
      snippet: 'BLOCKED: evidence timestamp (14:02:10) predates final file edit (14:02:18). Stale-pass rejection triggered.'
    },
    {
      num: '04',
      title: 'Blind Retry Loops',
      summary: 'Retrying the same failed operation without changing the approach.',
      description:
        'When encountering a test failure or compiler error, agents often re-run identical commands or re-insert the exact same syntax 3 to 5 times without revising their diagnosis, wasting budget and compounding errors.',
      snippet: 'ABORT: identical command retry detected 3x with identical failure signature. Strategy replan required.'
    },
    {
      num: '05',
      title: 'Contract Drift',
      summary: "Satisfying superficial tests while missing the task's acceptance criteria.",
      description:
        'An agent may modify a unit test or pass a trivial assertion while silently ignoring the explicit task contract and acceptance criteria that the human engineer originally specified.',
      snippet: 'GATE FAILED: 1/1 unit tests passed, but 2 contract acceptance criteria unsatisfied. Completion denied.'
    },
    {
      num: '06',
      title: 'Unverifiable Claims',
      summary: 'Making claims that the available evidence cannot support.',
      description:
        'Freeform LLM text reports like "Checked for memory leaks and race conditions — verified safe!" are untrusted words. Geminex requires every verifiable claim to be backed by fresh, owned validator output.',
      snippet: 'REJECTED: unverified assertion marked in claim. No deterministic execution artifact supplied.'
    }
  ];

  return (
    <section className="arch-section" id="problem">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[01]</span>
            <span>FAILURE MODES & REALITY</span>
          </div>
          <h2 className="arch-section-title">
            AI agents can code.
            <span className="arch-title-em">
              Who checks the <em>work</em>?
            </span>
          </h2>
          <p className="arch-section-lead">
            Large language models generate syntactically convincing code, yet production pipelines suffer from systematic reliability failures. Without mechanical invariants, unconstrained agents degrade the repositories they are tasked to improve.
          </p>
        </div>

        {/* Editorial Failure Grid */}
        <div className="arch-problem-grid">
          {failureModes.map((mode) => (
            <div key={mode.num} className="arch-problem-row">
              <div className="arch-row-meta">
                <span className="arch-row-num">{mode.num}</span>
                <span className="arch-row-badge">VULNERABILITY</span>
              </div>

              <div className="arch-row-body">
                <h3 className="arch-row-title">{mode.title}</h3>
                <p className="arch-row-summary">{mode.summary}</p>
                <p className="arch-row-desc">{mode.description}</p>
              </div>

              <div className="arch-row-terminal">
                <div className="arch-term-label">EVIDENCE INTERCEPT</div>
                <div className="arch-term-code">{mode.snippet}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

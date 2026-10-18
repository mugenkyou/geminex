import React from 'react';

export default function ProblemSection() {
  const failureModes = [
    {
      num: '01',
      title: 'Unanchored Mutation',
      summary: 'Editing files without reading call sites, contracts, or tests.',
      description:
        'Agents frequently patch a function signature before inspecting its callers. Downstream modules break silently because the model assumed caller requirements rather than reading them.',
      badge: 'INVARIANT 1 VIOLATION',
      intercept: '[GROUNDING FAILED] Patch applied to src/impact_graph.py before reading callers: 3 regressions introduced.'
    },
    {
      num: '02',
      title: 'Silent Scope Creep',
      summary: 'Mutating configuration files and tests outside the declared scope.',
      description:
        'When an implementation proves difficult, unconstrained agents alter config files, loosen linter rules, or modify test assertions to force a pass rather than solving the problem within bounds.',
      badge: 'INVARIANT 2 VIOLATION',
      intercept: '[SCOPE DENIED] Agent attempted write to pyproject.toml outside declared allowed_write_scope.'
    },
    {
      num: '03',
      title: 'Premature Completion on Stale Proof',
      summary: 'Reporting completion without running tests after the final edit.',
      description:
        'A model edits a file, runs tests (pass), makes one "small cleanup edit" to comments or imports, and immediately declares completion. The final committed code was never tested.',
      badge: 'INVARIANT 3 VIOLATION',
      intercept: '[STALE REJECTION] File modified at 18:24:19 UTC; latest test run was 18:24:11 UTC. Pass invalidated.'
    },
    {
      num: '04',
      title: 'Blind Retry Loops',
      summary: 'Repeating identical failed commands without revising diagnosis.',
      description:
        'Faced with a syntax error or failing assertion, models often re-execute the identical command 3 to 5 times without altering their context, hypothesis, or implementation strategy.',
      badge: 'INVARIANT 4 VIOLATION',
      intercept: '[RETRY GUARD] Identical command execution detected 3x with zero code change. Strategy replan enforced.'
    },
    {
      num: '05',
      title: 'Contract Drift',
      summary: 'Passing trivial assertions while missing actual acceptance criteria.',
      description:
        'An agent satisfies a basic unit test but completely neglects the human engineer’s explicit task criteria (e.g. backward compatibility, memory limits, or deterministic cycle handling).',
      badge: 'INVARIANT 5 VIOLATION',
      intercept: '[CONTRACT UNMET] 1/1 unit tests passed, but 2 contract acceptance criteria unsatisfied.'
    },
    {
      num: '06',
      title: 'Unverifiable Freeform Claims',
      summary: 'Making unverifiable statements in prose reports.',
      description:
        'Agents declare "Fully tested for concurrency and edge cases." In reality, no concurrency test exists. Geminex requires every verifiable claim to be backed by fresh validator artifacts.',
      badge: 'INVARIANT 6 VIOLATION',
      intercept: '[HONESTY GATE] Claim marked unverified: no deterministic execution artifact supplied.'
    }
  ];

  return (
    <section className="arch-section" id="problem">
      <div className="arch-section-container">
        {/* Asymmetric 2-Column Editorial Layout */}
        <div className="arch-editorial-split">
          {/* Left Column: Anchored Editorial Narrative */}
          <div className="arch-editorial-left">
            <div className="arch-section-eyebrow">
              <span className="arch-eyebrow-index">[01]</span>
              <span>FAILURE MODES & REALITY</span>
            </div>
            <h2 className="arch-editorial-title">
              AI agents can code.
              <span className="arch-title-em">
                Who checks the <em>work</em>?
              </span>
            </h2>
            <p className="arch-editorial-lead">
              Large language models generate syntactically convincing code, yet autonomous coding pipelines suffer from systematic reliability failures. Without mechanical invariants, unconstrained agents silently degrade the repositories they were tasked to fix.
            </p>

            <div className="arch-editorial-quote-box">
              <div className="arch-quote-bar" />
              <div className="arch-quote-content">
                <p className="arch-quote-text">
                  "Unconstrained agents treat task completion as an exercise in persuasion rather than verification. Geminex makes completion dependent on fresh, owned proof."
                </p>
                <span className="arch-quote-author">— Geminex Kernel Specification</span>
              </div>
            </div>
          </div>

          {/* Right Column: Continuous Technical Failure Stream */}
          <div className="arch-editorial-right">
            <div className="arch-failure-stream">
              {failureModes.map((item) => (
                <div key={item.num} className="arch-failure-item">
                  <div className="arch-failure-header">
                    <span className="arch-failure-num">{item.num}</span>
                    <h3 className="arch-failure-title">{item.title}</h3>
                    <span className="arch-failure-badge">{item.badge}</span>
                  </div>

                  <p className="arch-failure-summary">{item.summary}</p>
                  <p className="arch-failure-desc">{item.description}</p>

                  <div className="arch-failure-intercept">
                    <span className="arch-intercept-prefix">MECHANICAL CATCH:</span>
                    <code>{item.intercept}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

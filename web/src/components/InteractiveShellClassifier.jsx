import React, { useState } from 'react';

const SAMPLE_COMMANDS = [
  { cmd: 'git status', desc: 'Read-only repository query' },
  { cmd: 'pytest -v tests/', desc: 'Code execution / test runner' },
  { cmd: 'rm -rf ./build', desc: 'Destructive deletion' },
  { cmd: 'git branch -D main', desc: 'Destructive branch force deletion' },
  { cmd: 'echo "a;b" | sh', desc: 'Pipeline operator over-approximation' },
  { cmd: 'python3 -c "import os; os.system(\'whoami\')"', desc: 'Arbitrary execution payload' }
];

function classifyCommand(cmd) {
  const trimmed = cmd.trim();
  if (!trimmed) return null;

  // Destructive check
  const destructiveRegex = /\b(rm\s+-[rf]+|git\s+branch\s+-[dD]|git\s+push\s+--force|mkfs|dd\s+if=|curl\s+.*\|\s*sh|find\s+.*-execdir\s+rm|drop\s+database)\b/i;
  if (destructiveRegex.test(trimmed)) {
    return {
      level: 'destructive',
      label: 'Destructive',
      color: '#ef4444',
      badgeBg: 'rgba(239, 68, 68, 0.15)',
      borderColor: 'rgba(239, 68, 68, 0.4)',
      description: 'Deletion, blind overwrite, infra mutation, or potential exfiltration. Requires explicit human confirmation or hard deny.'
    };
  }

  // Mutation check (pipes, redirects, python code, tests)
  const mutationRegex = /(\||>|>>|&|;|\b(pytest|python3?|node|npm|cargo|go\s+test|bash|sh|eval|exec)\b)/i;
  if (mutationRegex.test(trimmed)) {
    return {
      level: 'mutation',
      label: 'Mutation',
      color: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      borderColor: 'rgba(245, 158, 11, 0.4)',
      description: 'Code execution or unenumerable writes. Disallowed before plan approval; fresh validator PASS required after.'
    };
  }

  // Scoped write check
  const writeRegex = /\b(touch|mkdir|cp|mv|sed\s+-i|write_to_file)\b/i;
  if (writeRegex.test(trimmed)) {
    return {
      level: 'write',
      label: 'Write (Scoped)',
      color: '#3b82f6',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
      description: 'Scoped file mutation. Allowed ONLY if target file path falls strictly inside declared allowed_write_scope.'
    };
  }

  // Read-only query check
  const readRegex = /^(git\s+(status|diff|log|branch|show)|ls|dir|cat|head|tail|grep|find|pwd|wc|echo)\b/i;
  if (readRegex.test(trimmed)) {
    return {
      level: 'none',
      label: 'None (Read-Only)',
      color: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      borderColor: 'rgba(16, 185, 129, 0.4)',
      description: 'Provably read-only query. Allowed anytime without mutating session state.'
    };
  }

  // Default fail-closed: unknown
  return {
    level: 'unknown',
    label: 'Unknown (Fails Closed)',
    color: '#8b5cf6',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    description: 'Unclassifiable or wrapper syntax. Fails closed to mutation policy to prevent sandbox evasion.'
  };
}

export default function InteractiveShellClassifier() {
  const [inputCmd, setInputCmd] = useState('pytest -v tests/');
  const result = classifyCommand(inputCmd);

  return (
    <section id="classifier" className="deep-section" aria-labelledby="classifier-heading">
      <div className="section-header">
        <span className="section-tag">Pessimistic Shell Classifier</span>
        <h2 id="classifier-heading" className="section-title">
          Live Command <em>Safety Classifier</em>
        </h2>
        <p className="section-subtitle">
          Test how Geminex categorizes shell strings before tool invocation. The tokenizer operator scan resolves against the inner command; worst segment wins.
        </p>
      </div>

      <div className="classifier-card">
        <div className="classifier-input-row">
          <div className="terminal-prefix">$</div>
          <input
            type="text"
            className="classifier-input"
            value={inputCmd}
            onChange={(e) => setInputCmd(e.target.value)}
            placeholder="Type a shell command (e.g. git status, rm -rf, pytest)..."
            aria-label="Shell command input for classification"
          />
        </div>

        {/* Quick sample chips */}
        <div className="classifier-presets">
          <span className="presets-label">Try sample:</span>
          {SAMPLE_COMMANDS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              className="preset-chip"
              onClick={() => setInputCmd(sample.cmd)}
            >
              <code>{sample.cmd}</code>
            </button>
          ))}
        </div>

        {/* Live Classification Result */}
        {result && (
          <div
            className="classifier-result"
            style={{
              borderColor: result.borderColor,
              background: result.badgeBg
            }}
          >
            <div className="result-header">
              <span className="result-title">Classification Verdict</span>
              <span
                className="result-badge"
                style={{
                  color: result.color,
                  borderColor: result.borderColor
                }}
              >
                Level: {result.label}
              </span>
            </div>
            <p className="result-description">{result.description}</p>
          </div>
        )}

        {/* Level Reference Table */}
        <div className="classifier-matrix">
          <div className="matrix-row matrix-header">
            <span>Level</span>
            <span>Policy Meaning</span>
            <span>Examples</span>
          </div>
          <div className="matrix-row">
            <span className="matrix-level" style={{ color: '#10b981' }}>none</span>
            <span>Provably read-only query</span>
            <code>git status, ls, grep, git diff</code>
          </div>
          <div className="matrix-row">
            <span className="matrix-level" style={{ color: '#3b82f6' }}>write</span>
            <span>Scoped file mutation</span>
            <code>write_to_file inside declared scope</code>
          </div>
          <div className="matrix-row">
            <span className="matrix-level" style={{ color: '#f59e0b' }}>mutation</span>
            <span>Code execution / pipelines</span>
            <code>pytest, python3 -c, redirects, pipelines</code>
          </div>
          <div className="matrix-row">
            <span className="matrix-level" style={{ color: '#ef4444' }}>destructive</span>
            <span>Deletion, blind overwrite</span>
            <code>rm -rf, git branch -D, curl ... | sh</code>
          </div>
          <div className="matrix-row">
            <span className="matrix-level" style={{ color: '#8b5cf6' }}>unknown</span>
            <span>Unclassifiable payload</span>
            <code>Fails closed to mutation at minimum</code>
          </div>
        </div>
      </div>
    </section>
  );
}

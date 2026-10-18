import React, { useState } from 'react';

const SETUPS = {
  core: {
    id: 'core',
    name: 'Core (Recommended)',
    desc: 'Portable behavioral policy delivered as Agent Skills. No enforcement, zero dependencies beyond skill files.',
    command: 'npx skills add mugenkyou/geminex --skill geminex --agent antigravity --yes',
    usage: 'Use Geminex to fix this bug and verify the result.'
  },
  native: {
    id: 'native',
    name: 'Native (Antigravity)',
    desc: 'Core plus Antigravity plugin with PreToolUse, PostToolUse, and Stop hooks for mechanical enforcement.',
    command: `git clone --depth 1 https://github.com/mugenkyou/geminex.git
cd geminex
bash scripts/build-native-bundle.sh
agy plugin install "$PWD/dist/geminex-antigravity"
agy plugin validate "$PWD/dist/geminex-antigravity"`,
    usage: 'Hooks actively deny unread edits, scope leaks, and missing validator completion.'
  },
  opencode: {
    id: 'opencode',
    name: 'OpenCode (CLI Shim)',
    desc: 'Core plus permission profiles and tool.execute.before shim applying policy engine to tool calls.',
    command: 'geminex init --host opencode --profile balanced',
    usage: 'Runs geminex guard before tool calls to ensure write containment.'
  }
};

const MATRIX = [
  { cap: 'Read-before-write policy', core: 'Instruction', native: 'Instruction + action lock', opencode: 'Instruction + permission profiles' },
  { cap: 'Write & scope gating', core: 'None', native: 'Hook deny', opencode: 'Shim deny + host permissions' },
  { cap: 'Destructive confirmation', core: 'None', native: 'force_ask', opencode: 'Hard deny (no ask channel)' },
  { cap: 'Evidence ledger', core: 'None', native: 'Automatic, hash-linked', opencode: 'Manual, via CLI' },
  { cap: 'Completion gate', core: 'None', native: 'Automatic Stop hook', opencode: 'Manual (summarize + evidence)' },
  { cap: 'Session isolation', core: 'None', native: 'Per conversation', opencode: 'Per workspace contract' },
  { cap: 'Guard dependency', core: 'None', native: 'None (in-process)', opencode: 'python3 + geminex on PATH' }
];

export default function InstallationSection() {
  const [activeTab, setActiveTab] = useState('core');
  const [copied, setCopied] = useState(false);
  const current = SETUPS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="deep-section" aria-labelledby="install-heading">
      <div className="section-header">
        <span className="section-tag">Setup & Integration</span>
        <h2 id="install-heading" className="section-title">
          Three Setups, <em>One Core Contract</em>
        </h2>
        <p className="section-subtitle">
          From lightweight portable skills to full mechanical hook enforcement. Pick the depth of machinery your team needs.
        </p>
      </div>

      <div className="install-tabs-wrapper">
        <div className="setup-tabs" role="tablist">
          {Object.values(SETUPS).map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={activeTab === s.id}
              className={`setup-tab ${activeTab === s.id ? 'is-active' : ''}`}
              onClick={() => {
                setActiveTab(s.id);
                setCopied(false);
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="terminal-title">{current.name} Install</span>
            <button
              type="button"
              className="copy-button"
              onClick={handleCopy}
              aria-label="Copy install command"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>

          <div className="terminal-body">
            <p className="terminal-desc"># {current.desc}</p>
            <pre className="terminal-code">
              <code>{current.command}</code>
            </pre>
            <div className="terminal-usage">
              <span className="usage-label">Usage:</span>
              <p className="usage-text">{current.usage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Host Enforcement Matrix */}
      <div className="matrix-wrapper">
        <h3 className="matrix-title">Host Enforcement Semantics</h3>
        <p className="matrix-subtitle">
          Instruction is not enforcement. Here is exactly what the runtime guarantees per host.
        </p>

        <div className="enforcement-table-container">
          <table className="enforcement-table">
            <thead>
              <tr>
                <th scope="col">Capability</th>
                <th scope="col">Core (Any Host)</th>
                <th scope="col">Native (Antigravity)</th>
                <th scope="col">OpenCode</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, idx) => (
                <tr key={idx}>
                  <td className="cap-cell">{row.cap}</td>
                  <td>{row.core}</td>
                  <td className="highlight-cell">{row.native}</td>
                  <td>{row.opencode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

export default function IntegrationsSection() {
  const [selectedTier, setSelectedTier] = useState('native');
  const [copied, setCopied] = useState(false);

  const tierCommands = {
    core: `# 1. Copy portable skills to your agent root
mkdir -p .agents/skills
cp -r skills/geminex .agents/skills/

# 2. Inspect kernel invariants
cat .agents/skills/geminex/SKILL.md`,
    native: `# 1. Scaffold Antigravity native plugin
geminex init --host antigravity

# 2. Run runtime diagnostic doctor
geminex doctor --scope project

# 3. Verify bundle integrity
bash scripts/build-native-bundle.sh`,
    opencode: `# 1. Configure OpenCode with Geminex adapter
geminex init --host opencode

# 2. Launch OpenCode with Geminex policy profile
opencode --plugin adapters/opencode/geminex_shim.py`
  };

  const copyCommand = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="arch-section" id="integrations">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[04]</span>
            <span>INTEGRATION ARCHITECTURE</span>
          </div>
          <h2 className="arch-section-title">
            One policy.
            <span className="arch-title-em">
              Different levels of <em>enforcement</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Geminex separates the invariant specification from the host execution environment. Choose between portable prompt-level guidance and mechanical tool-level enforcement.
          </p>
        </div>

        {/* Structured Engineering Comparison Table */}
        <div className="arch-matrix-wrap">
          <div className="arch-matrix-table-container">
            <table className="arch-matrix-table">
              <thead>
                <tr>
                  <th className="arch-th-dim">DIMENSION</th>
                  <th className="arch-th-tier">
                    <div className="arch-th-name">CORE AGENT SKILLS</div>
                    <div className="arch-th-tag">skills/geminex/</div>
                  </th>
                  <th className="arch-th-tier arch-th-highlight">
                    <div className="arch-th-name">ANTIGRAVITY NATIVE</div>
                    <div className="arch-th-tag">plugins/geminex-antigravity/</div>
                  </th>
                  <th className="arch-th-tier">
                    <div className="arch-th-name">OPENCODE SHIM</div>
                    <div className="arch-th-tag">adapters/opencode/</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="arch-td-dim">Enforcement Model</td>
                  <td className="arch-td-val">
                    <span className="arch-pill-soft">Instructional Guidance</span>
                  </td>
                  <td className="arch-td-val arch-td-highlight">
                    <span className="arch-pill-mech">Mechanical Pre-Write Hooks</span>
                  </td>
                  <td className="arch-td-val">
                    <span className="arch-pill-shim">Execution Tool Shim</span>
                  </td>
                </tr>
                <tr>
                  <td className="arch-td-dim">Out-of-Scope File Edits</td>
                  <td className="arch-td-val">Model self-restraint via prompt rules</td>
                  <td className="arch-td-val arch-td-highlight">
                    <strong>Physically denied</strong> by hook before write
                  </td>
                  <td className="arch-td-val">
                    <strong>Intercepted & blocked</strong> by command shim
                  </td>
                </tr>
                <tr>
                  <td className="arch-td-dim">Stale Evidence Invalidation</td>
                  <td className="arch-td-val">Prompt-guided completion checklist</td>
                  <td className="arch-td-val arch-td-highlight">
                    <strong>Cryptographic timestamp verifier</strong>
                  </td>
                  <td className="arch-td-val">Execution log verification wrapper</td>
                </tr>
                <tr>
                  <td className="arch-td-dim">Host Invasiveness</td>
                  <td className="arch-td-val">Zero (pure markdown and yaml files)</td>
                  <td className="arch-td-val arch-td-highlight">Plugin hook registration (hooks.json)</td>
                  <td className="arch-td-val">CLI execution wrapper script</td>
                </tr>
                <tr>
                  <td className="arch-td-dim">Supported Runtimes</td>
                  <td className="arch-td-val">Universal (Claude Code, Cursor, Windsurf)</td>
                  <td className="arch-td-val arch-td-highlight">Antigravity IDE & Engine</td>
                  <td className="arch-td-val">OpenCode CLI & Interpreter</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Understated Honest Boundary Callout */}
          <div className="arch-matrix-disclaimer">
            <span className="arch-disclaimer-icon">ℹ</span>
            <span>
              <strong>Engineering Boundary:</strong> Core Skills deliver behavioral discipline for any LLM without modifying your environment. Hard mechanical blocking of unauthorized tool calls is active when running on Antigravity Native or OpenCode shims.
            </span>
          </div>
        </div>

        {/* Compact Quick-Install Bar */}
        <div className="arch-quick-install-box">
          <div className="arch-install-selector">
            <span className="arch-install-label">QUICK SETUP FOR:</span>
            <button
              type="button"
              className={`arch-install-tab ${selectedTier === 'core' ? 'is-active' : ''}`}
              onClick={() => setSelectedTier('core')}
            >
              Core Skills
            </button>
            <button
              type="button"
              className={`arch-install-tab ${selectedTier === 'native' ? 'is-active' : ''}`}
              onClick={() => setSelectedTier('native')}
            >
              Antigravity Native
            </button>
            <button
              type="button"
              className={`arch-install-tab ${selectedTier === 'opencode' ? 'is-active' : ''}`}
              onClick={() => setSelectedTier('opencode')}
            >
              OpenCode Shim
            </button>
          </div>

          <div className="arch-install-terminal">
            <pre><code>{tierCommands[selectedTier]}</code></pre>
            <button
              type="button"
              className="arch-install-copy"
              onClick={() => copyCommand(tierCommands[selectedTier])}
              aria-label="Copy installation command"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

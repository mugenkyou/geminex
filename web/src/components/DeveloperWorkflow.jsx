import React, { useState } from 'react';

export default function DeveloperWorkflow() {
  const [activeWorkflow, setActiveWorkflow] = useState('skills');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const workflows = [
    {
      id: 'skills',
      tabLabel: '01 · Portable Agent Skills',
      title: 'Portable Agent Skills (Universal)',
      target: 'Works with Claude Code, Cursor, Windsurf, OpenCode',
      desc: 'Zero dependencies. Installs as markdown instruction sets and schema references in your workspace.',
      code: `# Clone or link the portable skill
mkdir -p .agents/skills
cp -r skills/geminex .agents/skills/

# Or link with symlink for automatic updates
ln -s $(pwd)/skills/geminex ~/.gemini/config/skills/geminex

# Verify skill structure
python -m unittest tests/test_skill_structure.py`,
      docLink: 'https://github.com/mugenkyou/geminex/tree/main/skills/geminex'
    },
    {
      id: 'antigravity',
      tabLabel: '02 · Antigravity Native',
      title: 'Antigravity IDE & Runtime Integration',
      target: 'Native pre-write hooks, guard.py, and real-time interception',
      desc: 'Integrates directly into Antigravity workspaces. Hooks intercept file write tools before disk mutations occur.',
      code: `# Scaffold Antigravity host configuration
geminex init --host antigravity

# Run environment and scope doctor
geminex doctor --scope project

# Build and validate native bundle
bash scripts/build-native-bundle.sh`,
      docLink: 'https://github.com/mugenkyou/geminex/tree/main/plugins/geminex-antigravity'
    },
    {
      id: 'opencode',
      tabLabel: '03 · OpenCode Adapter',
      title: 'OpenCode Execution Shim',
      target: 'Command interception and policy enforcement wrapper',
      desc: 'Wraps OpenCode tool calls in an execution shim that validates required reading and scopes.',
      code: `# Initialize OpenCode configuration
geminex init --host opencode

# Launch OpenCode with Geminex policy profile
opencode --plugin adapters/opencode/geminex_shim.py

# Inspect policy rules
cat adapters/opencode/permission_profile.json`,
      docLink: 'https://github.com/mugenkyou/geminex/tree/main/adapters/opencode'
    },
    {
      id: 'verify',
      tabLabel: '04 · Verification & Tests',
      title: 'Verification Suite & Maintenance',
      target: 'Run the exact CI suite locally',
      desc: 'Confirm zero bundle drift, schema compliance, and unit tests passing before submitting changes.',
      code: `# Run the full Python test suite
python -m unittest discover -s tests

# Check runtime diagnostic doctor
geminex doctor

# Verify bundle does not drift from source
git diff --exit-code -- dist/geminex-antigravity`,
      docLink: 'https://github.com/mugenkyou/geminex/tree/main/tests'
    }
  ];

  const current = workflows.find((w) => w.id === activeWorkflow) || workflows[0];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="arch-section" id="workflow">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[07]</span>
            <span>DEVELOPER WORKFLOW</span>
          </div>
          <h2 className="arch-section-title">
            Built for the tools you already use.
            <span className="arch-title-em">
              Direct CLI & IDE <em>integration</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Install and run Geminex with standard developer tooling. No hosted SaaS dependencies, no telemetry lock-in, and zero background services required.
          </p>
        </div>

        {/* Workflow Tabs */}
        <div className="arch-workflow-tabs">
          {workflows.map((wf) => (
            <button
              key={wf.id}
              type="button"
              className={`arch-wf-tab ${activeWorkflow === wf.id ? 'is-active' : ''}`}
              onClick={() => setActiveWorkflow(wf.id)}
            >
              <span>{wf.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Command Display Block */}
        <div className="arch-command-card">
          <div className="arch-card-topbar">
            <div className="arch-card-info">
              <span className="arch-card-title">{current.title}</span>
              <span className="arch-card-target">({current.target})</span>
            </div>
            <a
              href={current.docLink}
              target="_blank"
              rel="noopener noreferrer"
              className="arch-doc-link"
            >
              <span>View Source</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <p className="arch-card-desc">{current.desc}</p>

          <div className="arch-code-wrapper">
            <pre className="arch-code-block">
              <code>{current.code}</code>
            </pre>
            <button
              type="button"
              className="arch-code-copy-btn"
              onClick={() => handleCopy(current.code, activeWorkflow)}
              aria-label="Copy code block to clipboard"
            >
              {copiedIndex === activeWorkflow ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

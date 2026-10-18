import React, { useState } from 'react';

export default function IntegrationsSection() {
  const [activeTier, setActiveTier] = useState('native');

  const tiers = [
    {
      id: 'core',
      badge: 'TIER 01 · BEHAVIORAL',
      title: 'Core Agent Skills',
      scope: 'skills/geminex/',
      host: 'Any Agent / Model Agnostic',
      enforcement: 'Instructional Guidance',
      guaranteeLevel: 'Soft Behavioral',
      summary:
        'Portable Markdown and YAML agent skills that instruct any model to read before writing, limit changes, and verify before claiming done.',
      description:
        'Ideal for rapid setup in Cursor, Claude Code, Windsurf, or custom prompt runners. Delivers structured workflows without requiring host-level modifications or background daemons.',
      install: `# 1. Install or copy skills to your agent root
mkdir -p .agents/skills
cp -r skills/geminex .agents/skills/

# 2. Inspect skill invariants
cat .agents/skills/geminex/SKILL.md`,
      features: [
        { label: 'Host Modification', value: 'Zero (pure markdown prompts)' },
        { label: 'Scope Enforcement', value: 'Prompt guidance (model discipline)' },
        { label: 'Freshness Check', value: 'Instructional checklist' },
        { label: 'Compatibility', value: 'Universal (Claude, GPT, Gemini, Llama)' }
      ]
    },
    {
      id: 'native',
      badge: 'TIER 02 · HARDWARE-ENFORCED',
      title: 'Antigravity Native Runtime',
      scope: 'plugins/geminex-antigravity/',
      host: 'Antigravity IDE / Engine',
      enforcement: 'Deterministic Pre-Write Hooks',
      guaranteeLevel: 'Mechanical Enforcement',
      summary:
        'Native runtime integration with pre-write tool hooks, guard scripts, and real-time execution interception that physically blocks out-of-scope edits.',
      description:
        'Installed as an Antigravity plugin with hooks.json and python runtime scripts. When the model invokes a file write tool, the runtime validates path boundaries before disk access is granted.',
      install: `# 1. Initialize Antigravity native plugin
geminex init --host antigravity

# 2. Run runtime diagnostic doctor
geminex doctor --scope project

# 3. Verify bundle integrity
bash scripts/build-native-bundle.sh`,
      features: [
        { label: 'Host Modification', value: 'Plugin hook registration' },
        { label: 'Scope Enforcement', value: 'Mechanical pre-write denial' },
        { label: 'Freshness Check', value: 'Hash-linked evidence engine' },
        { label: 'Compatibility', value: 'Antigravity IDE & CLI' }
      ]
    },
    {
      id: 'opencode',
      badge: 'TIER 03 · SHIM-ENFORCED',
      title: 'OpenCode Adapter & Shim',
      scope: 'adapters/opencode/',
      host: 'OpenCode Interpreter / CLI',
      enforcement: 'Execution Shim & Permission Profile',
      guaranteeLevel: 'Tool-Level Boundary',
      summary:
        'A permission profile and execution shim that translates OpenCode tool invocations into Geminex policy evaluations before execution.',
      description:
        'Wraps tool calls in an execution wrapper that intercepts bash, patch, and read commands. Validates that required reading took place and denies mutations outside declared targets.',
      install: `# 1. Configure OpenCode with Geminex adapter
geminex init --host opencode

# 2. Link permissions profile
export GEMINEX_PROFILE=strict-engineering
opencode --plugin adapters/opencode/shim.py`,
      features: [
        { label: 'Host Modification', value: 'Execution shim wrapper' },
        { label: 'Scope Enforcement', value: 'Tool proxy interception' },
        { label: 'Freshness Check', value: 'Execution log validation' },
        { label: 'Compatibility', value: 'OpenCode CLI' }
      ]
    }
  ];

  const current = tiers.find((t) => t.id === activeTier) || tiers[1];

  return (
    <section className="arch-section" id="integrations">
      <div className="arch-section-container">
        {/* Section Header */}
        <div className="arch-section-header">
          <div className="arch-section-eyebrow">
            <span className="arch-eyebrow-index">[04]</span>
            <span>RUNTIME ARCHITECTURE</span>
          </div>
          <h2 className="arch-section-title">
            One policy.
            <span className="arch-title-em">
              Different levels of <em>enforcement</em>.
            </span>
          </h2>
          <p className="arch-section-lead">
            Geminex decouples the engineering specification from host capabilities. Choose between prompt-level behavioral guidance and mechanical host-level tool blocking.
          </p>
        </div>

        {/* Integration Tier Selector Tabs */}
        <div className="arch-integration-tabs">
          {tiers.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`arch-integration-tab ${activeTier === t.id ? 'is-active' : ''}`}
              onClick={() => setActiveTier(t.id)}
            >
              <span className="arch-tier-badge">{t.badge}</span>
              <span className="arch-tier-title">{t.title}</span>
              <span className="arch-tier-enf">{t.enforcement}</span>
            </button>
          ))}
        </div>

        {/* Integration Detail View */}
        <div className="arch-tier-detail-card">
          <div className="arch-tier-left">
            <div className="arch-tier-meta">
              <span className="arch-tier-pill">{current.guaranteeLevel}</span>
              <span className="arch-tier-host">Host: {current.host}</span>
            </div>
            <h3 className="arch-tier-name">{current.title}</h3>
            <p className="arch-tier-summary">{current.summary}</p>
            <p className="arch-tier-desc">{current.description}</p>

            <div className="arch-tier-specs">
              <div className="arch-sublabel">ENFORCEMENT CAPABILITIES</div>
              <div className="arch-specs-grid">
                {current.features.map((f, i) => (
                  <div key={i} className="arch-spec-item">
                    <span className="arch-spec-k">{f.label}</span>
                    <span className="arch-spec-v">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="arch-tier-right">
            <div className="arch-terminal-topbar">
              <span className="arch-terminal-file">SETUP & INSTALLATION</span>
              <span className="arch-terminal-runtime">{current.scope}</span>
            </div>
            <pre className="arch-code-block arch-install-code">
              <code>{current.install}</code>
            </pre>
            <div className="arch-honest-note">
              <span className="arch-note-icon">ℹ</span>
              <span>
                <strong>Honest distinction:</strong> Core skills rely on model compliance. Native runtime and OpenCode shims guarantee mechanical denial regardless of model behavior.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

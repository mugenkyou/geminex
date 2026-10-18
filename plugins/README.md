# Plugin System

Community extensions for GEMINEX. Each plugin is a self-contained skill
that loads on top of the base GEMINEX protocol.

---

## Available Plugins

| Plugin | Purpose | Load When |
|--------|---------|-----------|
| [geminex-security](./geminex-security/SKILL.md) | Deep security review mode | Working on auth, input, db, API |
| [geminex-perf](./geminex-perf/SKILL.md) | Performance analysis mode | Optimizing hot paths, benchmarking |
| [geminex-typescript](../skills/geminex-typescript/SKILL.md) | TypeScript patterns | Any TypeScript project |
| [geminex-python](../skills/geminex-python/SKILL.md) | Python patterns | Any Python project |

*(Note: legacy `gravitas-*` variants continue to be recognized for backward compatibility).*

---

## How to Use a Plugin

Add to your `GEMINI.md` or `AGENTS.md`:

```
When executing coding tasks, follow GEMINEX from skills/geminex/SKILL.md.
For security-related tasks, also load plugins/geminex-security/SKILL.md.
```

Or reference directly in your task:

```
Review this auth module for security issues.
Load: skills/geminex/SKILL.md + plugins/geminex-security/SKILL.md
```

---

## Build Your Own Plugin

A GEMINEX plugin is any markdown file with YAML frontmatter:

```markdown
---
name: geminex-[your-domain]
description: One-line description of what this plugin adds.
triggers:
  - keyword1
  - keyword2
---

# GEMINEX — [Domain] Extension

Extends base GEMINEX with [domain]-specific patterns.
Load `skills/geminex/SKILL.md` first, then this file.

## [Domain] Recon Additions
[what to check beyond standard recon]

## [Domain] Verification
[additional checks beyond standard verify chain]

## [Domain] Anti-Patterns
[domain-specific anti-patterns]

## [Domain] Patterns
[domain-specific best practices]
```

### Plugin Rules
1. Plugins extend — never override — base GEMINEX rules
2. All core invariants still apply
3. Tier classification still applies
4. VERDICT: PASS/FAIL still required
5. Plugins add recon, patterns, and verification — not new rule systems

### Submitting a Plugin

1. Create `plugins/geminex-[name]/SKILL.md`
2. Test it on 3+ real tasks (include evidence in PR)
3. Add to the table in this README
4. PR with `VERDICT: PASS` in description

---

## Plugin Ideas (open for contribution)

- `geminex-go` — Go-specific patterns (goroutines, channels, defer)
- `geminex-rust` — Rust patterns (lifetimes, ownership, unsafe)
- `geminex-react` — React patterns (hooks, state, effect cleanup)
- `geminex-sql` — Schema migration and query optimization
- `geminex-docker` — Container and orchestration patterns
- `geminex-api` — REST/GraphQL API design patterns
- `geminex-mobile` — React Native / Flutter patterns
- `geminex-ml` — ML/AI model training and evaluation patterns

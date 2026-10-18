# GEMINEX — Claude Code Integration

When executing coding tasks, follow the GEMINEX protocol defined below.
This file activates GEMINEX for all Claude Code sessions in this project.

---

## Core Protocol

GEMINEX enforces 6 invariants (canonical: `skills/geminex/SKILL.md`):

1. **Ground before mutating** — read the target file + imports + tests before any edit
2. **Stay in declared scope** — writes outside `allowed_write_scope` are denied
3. **Completion needs evidence** — fresh Geminex-owned validator PASS only
4. **Never exact-retry a failure** — change diagnosis, context, or strategy first
5. **Satisfy the contract** — acceptance criteria + required validators gate completion
6. **Say what you can't verify** — mark uncertain claims explicitly

**One rule above all:** Report what actually happened, not what you intended.
When you say something is done — that claim rests on output you observed.
If you did not check, say you did not check.

---

## Tier Classification

Planning is conditional (`geminex decide --signals '{...}'`):
`direct` / `compact` / `deep` / `replan`. Classify UP when uncertain.
Full policy: `skills/geminex/SKILL.md` (canonical).

---

## Recon Checklist (before any edit)

Run in parallel:
```
□ Read the target file — full content
□ Read files it imports / that import it
□ Read the test file
□ Check config (tsconfig, pyproject, etc.)
□ git log --oneline -5 -- [target]
□ git diff HEAD -- [target]
```

---

## Memory

Use `GEMINEX_MEMORY.md` (or `GRAVITAS_MEMORY.md`) for cross-session context:

```markdown
---
type: user | feedback | project | reference
name: short-kebab-slug
description: one-line summary
---
[The fact. Why it matters. How to apply it.]
```

Check for `SESSION_FAILURES.md` before retrying any approach.

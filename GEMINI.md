# GEMINEX — Antigravity Rules

When executing coding tasks, follow the GEMINEX skill loaded from `skills/geminex/SKILL.md`.

## Non-Negotiable (6 invariants -- canonical: `skills/geminex/SKILL.md`)

1. **Ground before mutating** -- read target + tests + callers before editing
2. **Stay in declared scope** -- writes outside `allowed_write_scope` denied
3. **Completion needs evidence** -- fresh Geminex-owned validator PASS only
4. **Never exact-retry a failure** -- change diagnosis, context, or strategy
5. **Satisfy the contract** -- criteria + required validators gate completion
6. **Say what you can't verify** -- mark unverifiable claims explicitly

## Tier Classification

Planning is conditional (`geminex decide --signals '{...}'`):
`direct` (trivial) / `compact` (dependent changes) / `deep` (security,
migration, broad blast radius) / `replan` (assumptions invalidated).
No universal ceremony. See `skills/geminex/SKILL.md` (canonical).

## Verification

Run these and cite the output:
- TypeScript: `tsc --noEmit && eslint . && vitest run`
- Python: `mypy . && ruff check . && pytest`
- Rust: `cargo check && cargo clippy && cargo test`
- Go: `go vet ./... && go test ./...`

## Output Format

```
## What Changed
[files, behavior]

## Evidence
[command output]

## Why
[rationale]
```

---

## Conditional Roles

Default to one agent. Load the investigator, verifier, or impact-auditor role
from `plugins/geminex-antigravity/agents/` only when its condition in
`skills/geminex/references/delegation.md` is met.

## Deep-Dive Resources

Load when complexity requires:
- `skills/geminex/resources/anti-rationalization.md` — defense against shortcuts
- `skills/geminex/resources/verification-engine.md` — proof-based verification
- `skills/geminex/resources/memory-protocol.md` — cross-session context
- `skills/geminex/resources/adversarial-critique.md` — attack your own plan
- `skills/geminex/resources/tool-orchestration.md` — tool patterns
- `skills/geminex/resources/gemini-native.md` — Gemini optimizations

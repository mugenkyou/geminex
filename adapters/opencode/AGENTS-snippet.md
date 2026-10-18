<!-- GEMINEX-OPENCODE-START: managed by `geminex init --host opencode`. Also retains GRAVITAS-OPENCODE-START for backward compatibility. -->

## GEMINEX Invariants

1. Read the target, its tests, and its callers before editing.
2. Writes outside the declared task scope are denied -- amend the contract, not the route.
3. A criterion is done only when a Geminex-owned validator passed after the last relevant mutation.
4. Never retry a failed approach byte-identically; change something first.
5. Acceptance criteria and required validators gate completion.
6. Mark unverifiable claims explicitly.

Load the `geminex` skill for procedures (`/geminex` or automatic discovery).
Use `geminex validator` / `geminex repro` / `geminex summarize` for evidence.
High-stakes changes (migrations, deletions, auth, production config): load `geminex-highstakes` first.

<!-- GEMINEX-OPENCODE-END -->
<!-- GRAVITAS-OPENCODE-END -->

# Quickstart

Geminex in 60 seconds, per host. Research preview: comparative
performance is not yet measured.

## Antigravity Core (portable skill, recommended start)

```bash
npx skills add mugenkyou/geminex --skill geminex --agent antigravity --yes
python3 .agents/skills/geminex/scripts/doctor.py
```

Say: `Use Geminex to fix this bug and verify the result.`

## Antigravity Native (hook enforcement)

```bash
git clone --depth 1 https://github.com/mugenkyou/geminex.git
cd geminex
bash scripts/build-native-bundle.sh
agy plugin install "$PWD/dist/geminex-antigravity"
agy plugin validate "$PWD/dist/geminex-antigravity"
```

## OpenCode

Requires `geminex` on PATH (`pip install geminex`) and python3.

```bash
cd your-project
geminex init --host opencode --profile balanced
```

This installs the skills, least-privilege agents, the enforcement shim,
a permission profile, AGENTS.md invariants, and a workspace contract.
Verify with `geminex doctor`. Profiles: `fast`, `balanced`, `strict`.

## Verify it works

```bash
geminex doctor                                   # checkout/installed/project scopes
geminex decide --signals '{"trivial": true}'     # policy record
geminex validators --root . --depth targeted    # discovered validators
```

Next: `docs/concepts.md` for the model, `docs/hosts.md` for host differences.

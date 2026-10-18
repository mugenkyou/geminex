# Changelog

All notable user-facing changes to Geminex are documented here.

## 4.1.0 — 2026-10-18

- Rebranded project from Gravitas to Geminex.
- Added canonical `geminex` CLI with full runtime parity (`geminex doctor`, `geminex init`, `geminex guard`, `geminex decide`, etc.) while maintaining backward-compatible `gravitas` aliases.
- Migrated skills to `skills/geminex` (`geminex-highstakes`, `geminex-python`, `geminex-typescript`) with backward compatibility for `skills/gravitas`.
- Migrated Antigravity plugin to `plugins/geminex-antigravity` (`geminex-native`) with dual runtime hooks support.
- Migrated OpenCode adapter shim to `adapters/opencode/plugin/geminex.js`.
- Added support for `.geminex` session storage with seamless fallback for existing `.gravitas` sessions.

## 4.0.0 — 2026-09-11

- Added a portable Agent Skill and optional Antigravity runtime (originally released as Gravitas).
- Added task contracts, conversation-scoped sessions, read-before-write checks,
  action locking, completion gates, and recovery state.
- Added benchmark schemas, runner scaffolding, fixture validation, and a
  public release audit.
- Added CLI for runtime diagnostics, validator execution, ledger
  verification, session status, and retention cleanup.
- Bound completion evidence to contract-declared validators, criteria, commands,
  exit codes, repository snapshots, and tamper-evident hash-linked records.

## Release policy

Geminex publishes only claims supported by reproducible evidence. Comparative
model-performance results remain unpublished until matched benchmark episodes,
validators, and analysis artifacts are available.

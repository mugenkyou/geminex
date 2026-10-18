#!/usr/bin/env bash
# Build the tracked Antigravity plugin bundles from canonical sources.
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Use python builder for deterministic cross-platform build
python3 "$repo_root/scripts/build_native_bundle.py"

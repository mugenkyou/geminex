#!/usr/bin/env python3
"""Build tracked Antigravity plugin bundles for Geminex (and Gravitas)."""
import hashlib
import os
import shutil
from pathlib import Path

root = Path(__file__).resolve().parents[1]


def build_bundle(plugin_name: str, skills_names: list[str], bundle_dest: Path):
    if bundle_dest.exists():
        shutil.rmtree(bundle_dest)
    (bundle_dest / "scripts").mkdir(parents=True, exist_ok=True)
    (bundle_dest / "skills").mkdir(parents=True, exist_ok=True)
    (bundle_dest / "agents").mkdir(parents=True, exist_ok=True)
    (bundle_dest / "rules").mkdir(parents=True, exist_ok=True)

    plugin_src = root / "plugins" / plugin_name
    shutil.copy2(plugin_src / "plugin.json", bundle_dest / "plugin.json")
    shutil.copy2(plugin_src / "hooks.json", bundle_dest / "hooks.json")

    # scripts
    for item in (plugin_src / "scripts").glob("*.py"):
        shutil.copy2(item, bundle_dest / "scripts" / item.name)

    # skills
    for s in skills_names:
        s_src = root / "skills" / s
        if s_src.is_dir():
            shutil.copytree(s_src, bundle_dest / "skills" / s)

    # agents
    for item in (plugin_src / "agents").glob("*.md"):
        shutil.copy2(item, bundle_dest / "agents" / item.name)

    # rules
    for item in (plugin_src / "rules").glob("*.md"):
        shutil.copy2(item, bundle_dest / "rules" / item.name)

    # remove __pycache__
    for p in bundle_dest.rglob("__pycache__"):
        if p.is_dir():
            shutil.rmtree(p)

    # normalize line endings to LF for all text files
    for p in bundle_dest.rglob("*"):
        if p.is_file() and p.suffix in {".py", ".md", ".json", ".sh"}:
            p.write_bytes(p.read_bytes().replace(b"\r\n", b"\n"))

    # generate SHA256SUMS
    lines = []
    files = [p for p in bundle_dest.rglob("*") if p.is_file() and p.name != "SHA256SUMS"]
    files.sort(key=lambda p: p.relative_to(bundle_dest).parts)
    for path in files:
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        lines.append(f"{digest}  {path.relative_to(bundle_dest).as_posix()}")
    (bundle_dest / "SHA256SUMS").write_bytes(("\n".join(lines) + "\n").encode("utf-8"))
    print(f"Built {bundle_dest}")


def main():
    # Build dist/geminex-antigravity
    build_bundle("geminex-antigravity", ["geminex", "geminex-highstakes"],
                 root / "dist" / "geminex-antigravity")


if __name__ == "__main__":
    main()

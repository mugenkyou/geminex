#!/usr/bin/env python3
"""Minimal dependency-free validation for portable Geminex skills in CI."""
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]


def validate_skill_file(path: Path, expected_name: str) -> int:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        print(f"FAIL {path.name} must begin with YAML frontmatter")
        return 1
    frontmatter, _, body = text[4:].partition("\n---\n")
    if not body:
        print(f"FAIL {path.name} frontmatter must be closed")
        return 1
    for field in ("name:", "description:"):
        if field not in frontmatter:
            print(f"FAIL {path.name} frontmatter is missing {field}")
            return 1
    if f"name: {expected_name}" not in frontmatter:
        print(f"FAIL {path.name} frontmatter expected name: {expected_name}")
        return 1
    if len(text.splitlines()) > 500:
        print(f"FAIL {path.name} exceeds the 500-line skill guidance limit")
        return 1
    return 0


def main() -> int:
    geminex_skill = ROOT / "skills/geminex/SKILL.md"
    gravitas_skill = ROOT / "skills/gravitas/SKILL.md"

    if geminex_skill.is_file():
        code = validate_skill_file(geminex_skill, "geminex")
        if code != 0:
            return code

    if gravitas_skill.is_file():
        code = validate_skill_file(gravitas_skill, "gravitas")
        if code != 0:
            return code

    print("PASS Geminex skill structure")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

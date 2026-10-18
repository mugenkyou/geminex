# Geminex Governance

## Project Status

Geminex is maintained as an open-source project by its maintainers and community contributors. Governance will evolve as the project grows.

## Decision Making

Project decisions are guided by open discussion and consensus among maintainers. Community input is welcomed through GitHub Issues, particularly:
- Benchmark task submissions
- Failure reports (Geminex regression template)
- Model result submissions (New model result template)

## Benchmark Integrity

GeminexBench results are considered a public trust. The following rules apply:
- Results may not be published without N, runs/config, version info, and CI
- Infrastructure failures must be classified INVALID, not FAIL
- All failures must be published alongside wins
- Raw episode data must be public for any published result
- The evaluator version and dataset commit must be pinned in every result

## Releasing Versions

A new version requires:
1. At least one GeminexBench run covering the changed components
2. Known regressions documented in CHANGELOG.md before release
3. Raw episode data published to benchmarks/results/

## Contributing

See CONTRIBUTING.md.

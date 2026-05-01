# internal/ — exec & board-only material

Path-excluded from the all-staff portal export. Owner: CEO + COO + CFO + CMO + CIO + CPO + Head of M&A + Board.

## Subfolders

- `ma-pipeline/` — active M&A targets being tracked, named, with pipeline-stage detail
- `compensation/` — actual comp ranges and equity grant detail by role / region
- `vendor-negotiations/` — active negotiation status with key vendors
- `performance/` — exec-team performance reviews + board feedback
- `pricing/` — strategic pricing analysis, competitor benchmarking, planned changes

## Why this folder exists

The all-staff `knowledge-base/` is the operating brain of Pawline. The `internal/` folder is the strategic brain — material that everyone needs to know exists but that only a small subset should see in detail.

The same content boundary that an Abeto-engagement repo uses for "client-visible vs Abeto-internal" is reframed here as "all-staff vs exec-only." Most company KMSes need this split.

## Access

Path-based exclusion in `portal.config.ts`. Read access requires named SSO group membership. Audited monthly per [[guardrails]].

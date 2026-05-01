---
type: concept
status: validated
date: 2026-01-15
domain: [finance, people]
related_to: [[revenue-per-visit]] [[adr-variance-3x-top-vs-bottom-quartile]] [[2026-04-25-comp-restructure-2027]]
---

# Average Doctor Revenue (ADR)

Production per DVM, generally measured per shift or per month. The standard industry metric, also the foundation of ProSal compensation.

## Definition

**ADR = production attributable to a DVM / DVM shifts worked**, where:
- "Production" is accrual revenue tied to that DVM's encounters (visits + procedures + dispensed products)
- "Shifts" is full-day equivalents; partial shifts are pro-rated
- Production is on the visit-attributing-DVM, not the collection or referral chain — see [[production-vs-collection]]

## Current state

- Consolidated DVM ADR (per shift): ~$3,400
- Top-quartile DVM (controlled for tenure >2 years): ~$5,400
- Bottom-quartile DVM (>2 years): ~$1,800
- Variance: ~3x top to bottom — see [[adr-variance-3x-top-vs-bottom-quartile]]

## What drives variance

- **Doctor tenure**: 1-yr DVM averages 60% of a 5-yr DVM's ADR
- **Service mix**: surgically-active DVMs post higher ADR ([[surgical-revenue-2-x-general-practice-rate]])
- **Charge capture discipline**: doctor-level habit
- **Client base**: established panels yield higher per-shift productivity than walk-in-heavy panels
- **Clinic tier**: Tier A capability ceiling enables higher per-shift output

## Why ADR is the core metric for comp

The ProSal model compensates DVMs as a percentage of their personal production above a base draw. The model is an industry standard but has known issues — over-treatment incentives, friction in collegial collaboration, distortion when a DVM consistently underperforms vs base.

[[2026-04-25-comp-restructure-2027]] is the proposed move from straight ProSal to a hybrid base+production model that flattens the over-treatment incentive while preserving productivity reward.

## Computation cadence

- Real-time visibility in Cornerstone
- Aggregated nightly into Snowflake
- Regional rollups produced for the [[2026-04-22-weekly-ops-review]]
- Annual ADR is the metric used in DVM annual reviews

## Related

- [[revenue-per-visit]]
- [[adr-variance-3x-top-vs-bottom-quartile]]
- [[2026-04-25-comp-restructure-2027]]
- [[clinical-kpi-definitions]]

---
type: concept
status: validated
date: 2026-01-15
domain: [finance]
related_to: [[average-doctor-revenue]] [[clinical-kpi-definitions]] [[charge-capture]]
---

# Revenue per visit (RPV)

The headline GP productivity metric. Average dollars billed per appointment, computed at the clinic, region, and consolidated levels.

## Definition

**RPV = total GP revenue / total GP appointments completed**, where:
- "GP revenue" excludes urgent care and ER/specialty (those have their own metrics)
- "Appointments completed" excludes no-shows but includes both new and recheck visits
- Production-basis (accrual), not collection-basis — see [[production-vs-collection]]

## Current state (Q1 2026)

- Consolidated: $312/visit
- West region: $328
- Mountain region: $295
- Southwest region: $309
- Top-quartile clinic: ~$420
- Bottom-quartile clinic: ~$220

## What drives variance

- **Service mix**: clinics with strong dental capture (per [[dental-grading-system]]) post higher RPV
- **Charge capture**: leakage of 4-6% per [[charge-capture-leakage-4-to-6-percent]] suppresses RPV uniformly
- **DVM tenure**: more tenured DVMs catch more ancillary work — see [[client-retention-correlates-with-doctor-tenure]]
- **Clinic tier**: Tier A clinics with specialty capability post higher RPV mechanically

## Why it's a bounded metric

RPV is a useful comp, but pushing it as the only metric incentivizes over-treatment. Pawline's published guidance is that RPV is one of three primary GP metrics (alongside [[average-doctor-revenue]] and visit volume), never used in isolation for compensation purposes.

## Source

Computed nightly from Cornerstone production data via [[data-warehouse-architecture]]. Sigma dashboard refreshes 6am MT every business day.

## Related

- [[average-doctor-revenue]]
- [[clinical-kpi-definitions]]
- [[charge-capture]]
- [[production-vs-collection]]

---
type: concept
status: active
date: 2026-02-05
domain: [finance, tech-data]
related_to: [[charge-capture]] [[cornerstone-pims]] [[clinic-pl-rollup]] [[data-warehouse-architecture]]
---

# PIMS revenue classification

How Cornerstone's procedure codes map to GL accounts in NetSuite. The mapping is what lets clinic-level revenue roll up into consolidated finance reporting without manual reconciliation.

## The problem this solves

Cornerstone exposes ~3,500 procedure codes covering everything from a $35 nail trim to a $4,200 orthopedic surgery. NetSuite has a clean ~40-account chart for revenue. Without a mapping, every clinic produces its own dialect — and consolidated reporting becomes a quarterly archaeology project.

## The mapping

Maintained as a dbt seed (`pims_code_to_gl_account.csv`) under [[priya-shah]]'s data team:
- Each Cornerstone code mapped to one of: GP — Wellness, GP — Sick Visit, GP — Dental, GP — Surgery, GP — Diagnostics, GP — Pharmacy, UC — Visit, UC — Procedure, ER — Visit, ER — Procedure, Specialty (broken out by specialty), Boarding/Grooming
- ~3,400 codes mapped; ~100 in a "manual review" bucket for unusual cases
- Revisions flow through CFO sign-off ([[tom-brennan]])

## Where the legacy PIMS clinics break this

Avimark / eVetPractice / Neo all have their own code dictionaries with overlapping but non-identical structures. For those clinics, the dbt model applies a per-PIMS translation layer first, then the standard mapping. The translation layers are the largest source of consolidated-revenue error — another reason for the [[pims-migration-pathway]] urgency.

## Why this matters

- **Pricing analysis**: same-procedure pricing comparison across clinics requires the mapping
- **Clinical KPI definitions**: [[clinical-kpi-definitions]] depend on consistent service-line classification
- **PE reporting**: Larkspur expects the GP / UC / ER / Specialty split monthly. Without the mapping, that split is hand-rolled and unreliable.
- **Charge capture detection**: [[charge-capture]] audits compare what was *clinically* delivered to what was *billed*. Misclassified codes break the audit.

## Maintenance cadence

- Quarterly mapping review with the Director of Clinical Quality + Director of Data Platform
- New Cornerstone codes (Idexx ships them in releases) get classified within 30 days
- Acquired clinic legacy codes get reviewed during integration ([[acquisition-integration-playbook]] T+30)

## Related

- [[charge-capture]]
- [[cornerstone-pims]]
- [[clinic-pl-rollup]]
- [[data-warehouse-architecture]]

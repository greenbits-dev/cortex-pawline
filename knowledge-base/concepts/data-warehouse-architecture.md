---
type: concept
status: validated
date: 2026-02-05
domain: [tech-data]
related_to: [[cornerstone-pims]] [[clinic-pl-rollup]] [[clinical-kpi-definitions]] [[pims-revenue-classification]]
---

# Data warehouse architecture

Pawline's data infrastructure: Snowflake as the warehouse, Fivetran for ETL, dbt for transforms, Sigma for BI. ~1.2 TB compressed, ~120 dbt models, refresh windows aligned to operating cadence.

## Stack

| Layer | Tool | Owner | Notes |
|-------|------|-------|-------|
| Warehouse | Snowflake | [[priya-shah]] | Multi-cluster compute, separated by use case |
| ETL inbound | Fivetran | Data Platform team | Cornerstone, eVetPractice, IDEXX Neo, ADP, Salesforce |
| ETL inbound (custom) | Custom Python | Data Platform team | Avimark export-and-load (no native Fivetran connector) |
| ETL inbound (native) | Native Snowflake | Data Platform team | NetSuite |
| Transforms | dbt Cloud | Data Platform team | ~120 models in `derived/` |
| BI | Sigma Computing | Data Platform team + power users | Primary surface for clinics, regions, exec |
| BI (deprecating) | Looker | Data Platform team | 3 remaining dashboards; sunsetting Q4 2026 |

## Schemas

- **`raw`** — source-system extracts (one schema per source: `raw_cornerstone`, `raw_avimark`, etc.)
- **`staging`** — type-cast, deduplicated, lightly cleaned
- **`derived`** — modeled tables: `fct_visits`, `fct_charges`, `dim_patient`, `dim_clinic`, etc.
- **`mart_finance`** — finance-team-curated: P&L by clinic/region/consolidated, collection ratios
- **`mart_clinical`** — clinical-team-curated: KPIs per [[clinical-kpi-definitions]]
- **`mart_ma`** — corporate-dev-curated: cohort analyses, integration progress

## Refresh cadence

- **Cornerstone**: nightly at 2am MT (full sync)
- **eVetPractice / IDEXX Neo**: nightly (smaller volume)
- **Avimark**: weekly (Monday 6am — manual export-and-load)
- **NetSuite**: 4x daily
- **ADP**: daily
- **Salesforce**: hourly

## Why nightly works for the clinical layer

Clinic-level operating decisions don't require sub-day data. Real-time PIMS lookups happen *in* Cornerstone, not the warehouse. The warehouse is for cross-clinic, cross-period analysis where 12-hour staleness is fine.

## Pain points

- **Avimark gap**: weekly refresh is too slow for legacy-PIMS clinics during integration. Migration to Cornerstone closes this.
- **Schema drift**: Cornerstone releases occasionally change column types/names; we maintain a change log and apply patches in dbt within 48 hours.
- **Cluster-load tuning**: peak-hours dashboard queries from regional VPs occasionally collide with nightly refreshes; resolved by dedicated compute clusters per workload.

## Related

- [[cornerstone-pims]]
- [[clinic-pl-rollup]]
- [[clinical-kpi-definitions]]
- [[pims-revenue-classification]]

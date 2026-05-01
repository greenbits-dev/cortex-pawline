---
type: concept
status: validated
date: 2026-01-30
domain: [finance]
related_to: [[production-vs-collection]] [[pims-revenue-classification]] [[regional-cluster-economics]] [[data-warehouse-architecture]]
---

# Clinic P&L rollup

How Pawline rolls clinic-level financials into regional and consolidated reporting. The mechanism that makes "is this region working?" a 30-second question rather than a week-long FP&A project.

## The three layers

1. **Clinic P&L** — direct revenue (production + collection), direct cost (drugs, lab, supplies, salary, rent), allocated regional overhead, derived margin
2. **Regional P&L** — sum of clinic P&Ls + RMD/ROD costs + cluster overhead + regional marketing
3. **Consolidated P&L** — sum of regional P&Ls + corporate overhead + M&A costs + interest

## What's at the clinic level

| Line | Source | Notes |
|------|--------|-------|
| Revenue (production) | Cornerstone via Snowflake | Per [[pims-revenue-classification]] |
| Revenue (collected) | NetSuite via direct connector | Per [[production-vs-collection]] |
| Drug + supply COGS | NetSuite, central procurement | Per [[2025-04-15-centralize-surgical-procurement]] |
| Lab COGS | Antech invoicing routed through NetSuite | Allocated by clinic at invoice line item |
| Salary | ADP via Fivetran | Per [[data-warehouse-architecture]] |
| Rent + facilities | NetSuite | Direct or allocated for shared facilities |
| Allocated regional overhead | Computed | Allocated by clinic revenue share |

## What's at the regional level

- RMD + ROD compensation
- Area Operations Manager compensation
- Regional marketing spend (Salesforce campaigns, regional digital)
- Lab logistics costs (pickup routes shared across cluster)
- Floating relief DVM pool

## What's at the consolidated level

- C-suite + corporate functions
- M&A diligence + integration costs
- Interest on the credit facility
- Equity program costs
- Corporate IT infrastructure

## Why this works now

Before [[tom-brennan]] joined in 2020 the rollup was hand-built quarterly in Excel. The current state, built over 2021-2023, is a Snowflake-driven dbt pipeline that produces same-day clinic P&Ls and Sigma dashboards drilling from consolidated → regional → clinic with a click.

## What still hurts

- Acquired clinics in their first 6 months have noisier reporting because of legacy AR cleanup, transition adjustments, and PIMS migration timing
- Allocations of corporate overhead are stable but contested; regional VPs argue them at every QBR

## Related

- [[production-vs-collection]]
- [[pims-revenue-classification]]
- [[data-warehouse-architecture]]
- [[regional-cluster-economics]]

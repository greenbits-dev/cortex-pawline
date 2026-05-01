---
type: concept
status: validated
date: 2026-02-08
domain: [tech-data, clinical, finance]
related_to: [[revenue-per-visit]] [[average-doctor-revenue]] [[clinical-quality-review]] [[data-warehouse-architecture]]
---

# Clinical KPI definitions

Pawline's top 12 KPIs, the formulas behind them, and the bands that distinguish "good" from "acceptable" from "concerning." Owned jointly by the Director of Clinical Quality and the Director of Data Platform.

## The 12 KPIs

| # | KPI | Formula | Good | Concerning |
|---|-----|---------|------|------------|
| 1 | Revenue per visit (RPV) | GP rev / GP visits ([[revenue-per-visit]]) | >$320 | <$280 |
| 2 | Average Doctor Revenue (per shift) | DVM production / shifts ([[average-doctor-revenue]]) | >$3,500 | <$2,800 |
| 3 | Visit volume (per clinic, monthly) | Distinct GP visits | growth ≥4% YoY | decline >2% YoY |
| 4 | New-client acquisition rate | New clients / total active | >12%/yr | <8%/yr |
| 5 | Client retention (rolling 24-month) | Clients with ≥1 visit in past 24mo / clients with ≥1 visit 24-48mo ago | >78% | <70% |
| 6 | Compliance — wellness | % of active patients with wellness in past 13 months | >65% | <55% |
| 7 | Compliance — dental | % of active patients with dental procedure in past 24 months | >35% | <25% |
| 8 | Charge capture audit pass rate | % of audited visits with no missed charges | >96% | <92% |
| 9 | Anesthesia incident rate | Anesthesia events with adverse outcome / total anesthesia events | <0.20% | >0.40% |
| 10 | Controlled substance discrepancy rate | % of CS counts with unexplained variance | <0.10% ([[controlled-substance-discrepancy-rate-target]]) | >0.20% |
| 11 | NPS (Net Promoter Score) | Standard NPS, surveyed monthly | >55 | <40 |
| 12 | DVM retention (rolling annual) | DVMs retained / DVMs employed at start of year | >88% | <80% |

## Where the numbers come from

- KPIs 1, 2, 3, 4, 5, 8: nightly Cornerstone → Snowflake → dbt models in `mart_clinical`
- KPIs 6, 7: derived from compliance dashboards in `mart_clinical`, refreshed nightly
- KPI 9: anesthesia incident registry maintained by RMDs; entered into a structured Cornerstone form
- KPI 10: monthly controlled-substance audit reports
- KPI 11: NPS survey vendor (BirdEye), data ingested via Fivetran
- KPI 12: ADP termination data joined with HR records

## Cadence

- **Daily** clinic-level review by practice managers
- **Weekly** regional review at the [[2026-04-22-weekly-ops-review]]
- **Monthly** consolidated review at exec team standup
- **Quarterly** review with the board

## What's deliberately not in the headline

- Margin metrics (clinic, regional, consolidated EBITDA) live in finance dashboards, not the clinical KPI set
- Same-procedure pricing variance (a useful detail metric, but not a headline)
- Wait times and same-day-fill rates (operational, lives in the ops dashboard)

## Related

- [[revenue-per-visit]]
- [[average-doctor-revenue]]
- [[clinical-quality-review]]
- [[data-warehouse-architecture]]

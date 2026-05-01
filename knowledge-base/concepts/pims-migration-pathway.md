---
type: concept
status: active
date: 2026-02-05
domain: [tech-data]
related_to: [[cornerstone-pims]] [[cornerstone-migration-15-to-25k-per-clinic]] [[pims-migration-temp-staffing-required]] [[pims-data-quality-cornerstone-vs-avimark]]
---

# PIMS migration pathway

The structured process by which legacy-PIMS clinics are migrated to Cornerstone. ~20 clinics remain on legacy systems (12 Avimark, 5 eVetPractice, 3 IDEXX Neo). Migration is a multi-week, multi-function effort and the bottleneck is operational capacity, not technical complexity.

## Per-clinic migration plan

### Pre-migration (4-8 weeks before cutover)

- **Data extract** from legacy PIMS — full historical patient + visit + invoice data
- **Translation pass** — codes mapped to Cornerstone equivalents using reference dictionaries we've built per legacy system
- **Cornerstone tenant** stood up; basic configuration applied
- **Staff training** — 8-hour Cornerstone orientation for DVMs, 16-hour for techs, 24-hour for practice managers
- **Test migration** — staging environment loaded; staff does practice runs

### Cutover (1 weekend)

- **Friday evening**: legacy PIMS read-only after close
- **Saturday-Sunday**: final delta sync, validation
- **Monday**: live on Cornerstone, with on-site Cornerstone implementation specialist + Pawline IT support

### Stabilization (2-6 weeks)

- **Daily** check-ins with practice manager for the first 2 weeks
- **Temp staffing** support per [[pims-migration-temp-staffing-required]] — typically 2 weeks of additional hands
- **Charting template tuning** — clinic-specific templates added for high-frequency presentations

## Cost band

[[cornerstone-migration-15-to-25k-per-clinic]] — direct migration cost is $15-25K per clinic, plus 4-8 weeks of partial operational disruption. This is the headline number; the more painful cost is operational drag during stabilization.

## Sequencing logic

- **Cluster-first**: migrate clinics within a cluster together; lab logistics + cross-coverage work better when neighbors are on the same PIMS
- **Tier-aware**: Tier C clinics first (lower complexity); Tier A flagships last (higher stakes)
- **Acquisition-aligned**: newly-acquired legacy-PIMS clinics get migrated within 12 months of close; the integration playbook books migration into T+90 to T+180

## Current state

- 60 clinics on Cornerstone
- 20 clinics on legacy (target: 0 by end of 2027)
- 2026 plan: 12 migrations
- 2027 plan: 8 migrations

## Risks

- **Operational disruption**: every migration is a 4-8 week productivity dip
- **Staff turnover**: migration stress sometimes triggers technician departures; the [[new-dvm-onboarding-playbook]] doesn't fully address technician churn around migrations
- **Data quality**: legacy data with poor coding hygiene can be hard to map cleanly

## Related

- [[cornerstone-pims]]
- [[cornerstone-migration-15-to-25k-per-clinic]]
- [[pims-migration-temp-staffing-required]]
- [[pims-data-quality-cornerstone-vs-avimark]]
- [[2024-09-12-cornerstone-as-standard-pims]]

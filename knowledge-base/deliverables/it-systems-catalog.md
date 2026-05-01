---
type: deliverable
date: 2026-04-15
audience: regional-leaders
status: active
sources: "[[cornerstone-pims]] [[data-warehouse-architecture]] [[connectors]]"
---

# IT Systems Catalog

Pawline's current state of every system, system owner, and contract renewal date. Audience: regional leaders + practice managers. Detail beyond this catalog is in `config/systems.yaml` + `config/connectors.md`. Owner: [[priya-shah]].

## Core operational systems

| System | Role | Owner | Renewal | Notes |
|--------|------|-------|---------|-------|
| Cornerstone PIMS | Primary PIMS, 60 clinics | Priya Shah | 2027-09 | Standard per [[2024-09-12-cornerstone-as-standard-pims]] |
| Avimark | Legacy PIMS, 12 clinics | Priya Shah | sunset 2027-Q1 | Per [[pims-migration-pathway]] |
| eVetPractice | Legacy PIMS, 5 clinics | Priya Shah | sunset 2026-Q4 | |
| IDEXX Neo | Legacy PIMS, 3 clinics | Priya Shah | sunset 2026-Q3 | |
| NetSuite | ERP / GL / financial | Tom Brennan | 2028-03 | |
| ADP Workforce Now | Payroll / HR | Lisa Rodriguez | 2026-12 | **Renewal in negotiation** |
| Salesforce Service Cloud | Client outreach | VP Marketing | 2027-06 | |
| HashiCorp Vault | Secrets / credentials | Priya Shah | annual | |

## Data + analytics

| System | Role | Owner | Renewal |
|--------|------|-------|---------|
| Snowflake | Warehouse | Priya Shah | 2027-12 |
| Sigma | BI | Priya Shah | 2027-04 |
| dbt Cloud | Transforms | Priya Shah | annual |
| Fivetran | ETL | Priya Shah | annual |

## Lab integrations

- Antech (primary) — direct API integration with Cornerstone
- Idexx (secondary) — direct API integration with Cornerstone

## Specialized systems

- DEA CSOS (controlled-substance ordering) — federal system, not "vendor"
- BirdEye (NPS surveys) — Salesforce-integrated
- Slack — internal communications (corporate level)
- Microsoft 365 — corporate email + collaboration
- Google Workspace — at acquired clinics still on legacy stack; consolidation to M365 in progress

## Cortex (this system)

- KMS deployment per [[ADR-001-vault-shape]]
- Reads from Snowflake `derived` schema for live metrics
- Read-only against source systems

## What's in scope for 2026 changes

- **ADP renewal** (December 2026 expiry) — see `internal/vendor-negotiations/adp-2026-renewal.md`
- **Looker sunsetting** (Q4 2026) — migrating remaining 3 dashboards to Sigma
- **AI clinical scribe** — pending [[2026-04-30-ai-clinical-scribe-vendor]]

## How this catalog gets updated

- Quarterly review by Priya Shah's team
- Per-system change log maintained in `config/systems.yaml` git history
- Material vendor changes get a clinic-region announcement

---
type: config
status: active
last_updated: 2026-04-15
owner: priya-shah
---

# Connectors

What systems Pawline runs, what each owns, how Cortex reads from them.

## Source systems

| System | Vendor | Owns | Connector | Refresh |
|--------|--------|------|-----------|---------|
| **Cornerstone PIMS** | Idexx | Patient records, appointments, invoicing, inventory | Custom export → Snowflake via Fivetran | Nightly (2am MT) |
| **Avimark** | Covetrus | Legacy clinic PIMS (~12 clinics) | CSV exports, manual ingest | Weekly (Mon 6am) |
| **eVetPractice** | Covetrus | Legacy cloud PIMS (~5 clinics) | API → Snowflake via Fivetran | Nightly |
| **IDEXX Neo** | Idexx | Cloud PIMS (~3 clinics) | API → Snowflake via Fivetran | Nightly |
| **NetSuite** | Oracle | GL, AP, AR, consolidated financials | Native Snowflake connector | 4x daily |
| **ADP Workforce Now** | ADP | Payroll, time tracking, benefits | API → Snowflake via Fivetran | Daily |
| **Salesforce Service Cloud** | Salesforce | Client outreach, reactivation campaigns | Native Snowflake connector | Hourly |
| **DEA CSOS** | DEA | Controlled-substance ordering log | Manual export, monthly compliance review | Monthly |
| **IDEXX Reference Lab** | Idexx | Outside-lab results | API → Cornerstone direct (not Snowflake) | Real-time |
| **Antech Reference Lab** | Mars Petcare | Outside-lab results (primary, post-2024) | API → Cornerstone direct | Real-time |

## Data warehouse

- **Snowflake** — primary warehouse. ~1.2 TB compressed.
- Schemas: `clinical` (PIMS data), `finance` (NetSuite), `people` (ADP), `outreach` (Salesforce), `derived` (modeled tables, dbt).
- See [[data-warehouse-architecture]].

## BI / reporting

- **Sigma** — primary BI surface for clinic / region / consolidated dashboards.
- **dbt Cloud** — transforms in `derived/`. ~120 models.
- **Looker (deprecated)** — sunsetting Q4 2026. Migrating remaining 3 dashboards to Sigma.

## Cortex (this system)

- Reads `knowledge-base/` markdown directly (this repo)
- Reads Snowflake `derived` schema for live metrics in dashboards
- Does NOT write back to source systems

## Auth model

Per [[2024-09-12-cornerstone-as-standard-pims]] amendment, all source-system reads use:
- Service-account credentials in HashiCorp Vault
- Per-environment isolation (dev / staging / prod)
- Quarterly key rotation
- All Cortex reads scoped to `read-only` IAM roles

Detail in `config/integrations.yaml` (gitignored at the repo level for production secrets).

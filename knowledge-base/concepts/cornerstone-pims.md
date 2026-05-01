---
type: concept
status: validated
date: 2026-01-08
domain: [tech-data]
related_to: [[pims-migration-pathway]] [[2024-09-12-cornerstone-as-standard-pims]] [[pims-revenue-classification]] [[charge-capture]]
aliases:
  - "Cornerstone"
---

# Cornerstone PIMS

Pawline's standard Practice Information Management System — Idexx's flagship PIMS. Adopted as the company standard in [[2024-09-12-cornerstone-as-standard-pims]]. Currently deployed at 60 of 80 clinics; the remaining ~20 are on legacy systems pending migration via [[pims-migration-pathway]].

## What it does

PIMS is the operational system of every clinic — the digital nervous system. Cornerstone covers:

- **Patient records** — pet demographics, owner contacts, medical history, vaccination status
- **Appointment management** — scheduling, capacity, recall, no-show tracking
- **Clinical charting** — visit notes, treatment plans, medication records
- **Invoicing & POS** — charge capture, payment, statements
- **Inventory** — drugs, supplies, controlled substances tracking
- **Laboratory integration** — direct results from Idexx + Antech reference labs
- **Reporting** — clinic-level operational and financial reports

## Why we standardized

Per [[2024-09-12-cornerstone-as-standard-pims]] and [[pims-data-quality-cornerstone-vs-avimark]]:
- **Data quality**: Cornerstone has 3x better data completeness vs. Avimark legacy
- **Interoperability**: native Antech/Idexx lab integration, NetSuite connector quality, Snowflake export
- **Clinical workflow**: structured templates for SOC protocol adherence (per [[standard-of-care-protocols]])
- **Controlled substances**: proper Schedule II workflow that legacy PIMS systems support poorly
- **Vendor**: Idexx is a strategic vendor relationship (also lab equipment + secondary lab)

## Schema overview

- Patient → Owner → Visit → Procedure → Charge
- Visits link to: Vitals, Notes, Lab orders/results, Medications dispensed, Anesthesia records
- Procedures map to ~3,500 codes (see [[pims-revenue-classification]])

## Where it integrates

- **Lab inbound**: Antech + Idexx → Cornerstone direct (real-time)
- **Outbound to Snowflake**: nightly export via Fivetran ([[data-warehouse-architecture]])
- **NetSuite**: GL posting at clinic-period close
- **ADP**: technician/staff timekeeping (separate, but reconciled)
- **Salesforce**: client reactivation campaigns pull recall data

## Pain points

- New-feature releases often require staff retraining; we pace adoption regionally
- Reporting layer is dated; we lean on Sigma over Cornerstone-native reports
- Multi-location reporting is weak inside Cornerstone — another reason for the Snowflake-first analytics architecture

## Related

- [[pims-migration-pathway]]
- [[2024-09-12-cornerstone-as-standard-pims]]
- [[pims-revenue-classification]]
- [[data-warehouse-architecture]]

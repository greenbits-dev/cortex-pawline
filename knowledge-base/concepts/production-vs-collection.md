---
type: concept
status: validated
date: 2026-01-15
domain: [finance]
related_to: [[revenue-per-visit]] [[average-doctor-revenue]] [[charge-capture]] [[clinic-pl-rollup]]
---

# Production vs collection

Two distinct revenue accountings. Production = the value of services rendered (accrual). Collection = cash received. The gap between them — and how Pawline tracks both — matters for clinical comp, P&L reporting, and PE-investor accuracy.

## Definitions

- **Production** — billed value of services + dispensed products at the time of the visit. The accrual-basis revenue the DVM generated.
- **Collection** — cash received for those services. Lower than production because of: write-offs, bad debt, discounts, insurance adjustments, payment plans not yet completed.

## Why both matter

- **For DVM comp**: ProSal traditionally calculated on production (the DVM did the work, regardless of whether the client paid). Pawline follows this.
- **For P&L reporting**: collection is what closes the GL. Production overstates margin until collection ratios are applied.
- **For PE reporting**: investors care about both — production is the operational signal, collection is the cash conversion. Reporting one without the other is misleading.

## Pawline's collection ratio

- Consolidated: 96.4% (2025 full-year)
- By region: West 96.7%, Mountain 96.1%, Southwest 96.2%
- Acquired clinics in their first 6 months: 91-94% (legacy AR cleanup pushes the ratio down before normalizing)

## Why this is rigorous now (and wasn't pre-2020)

Before [[tom-brennan]] joined as CFO in 2020, Pawline reported production-only at the clinic level and applied a flat collection assumption at the consolidated level. The result was margin reporting that fluctuated more than reality. Tom rebuilt the rollup ([[clinic-pl-rollup]]) to track both at every level — clinic, region, consolidated.

## Operational implication

Clinics with collection ratios below 94% trigger a working-capital review with the practice manager and ROD. Often the cause is a recent legacy-PIMS migration or a payment-plan accumulation — both addressable.

## Related

- [[revenue-per-visit]]
- [[average-doctor-revenue]]
- [[charge-capture]]
- [[clinic-pl-rollup]]

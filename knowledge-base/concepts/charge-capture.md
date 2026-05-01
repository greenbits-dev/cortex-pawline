---
type: concept
status: validated
date: 2026-01-22
domain: [finance, clinical]
related_to: [[revenue-per-visit]] [[charge-capture-leakage-4-to-6-percent]] [[dental-grade-3-undercoded-by-22-percent]] [[pims-revenue-classification]]
---

# Charge capture

The process of ensuring everything done in a visit ends up on the invoice. In vet medicine, charge-capture leakage is one of the largest single recoverable margin opportunities — typically 3-7% of gross revenue across multi-clinic networks.

## What gets missed

- **Ancillary procedures** done during the visit but not separately coded (e.g., toenail trims during a wellness visit, ear-flush during otitis treatment, microchip placement)
- **Dispensed products** taken from supply but not charged (especially common with sample-sized antibiotics, behavioral medications, and topical creams)
- **Coding mismatches** — a Grade 3 dental graded and treated correctly but coded as Grade 2 ([[dental-grade-3-undercoded-by-22-percent]])
- **Skipped items on multi-step procedures** — surgical packs that include ancillary services that get billed but the ancillaries don't

## Pawline's measured rate

[[charge-capture-leakage-4-to-6-percent]] — random audit of 200 visits in Q3 2025 found 4-6% missed charges, weighted toward the dispensing-side and the dental-coding categories. At ~$240M TTM revenue, that's $9.6-14.4M of recoverable production.

## Why it leaks

- **Time pressure**: post-visit charting and invoicing often happens at end-of-day; the longer the gap, the more gets missed
- **PIMS workflow gaps**: legacy PIMS systems don't enforce step-by-step charge capture during the workflow
- **Coding ambiguity**: dental grading especially — a borderline case coded by clinic feel rather than protocol
- **Cultural under-charging**: long-tenured DVMs sometimes "comp" small items for relationship reasons, then forget to log them as comps (so they never get billed AND never appear as discounts)

## What v2 protocols changed

The [[2026-02-18-clinical-protocol-v2-publish]] tightened charge-capture by adding mandatory protocol steps that map directly to billable codes — closing the dental-grading gap especially.

## What's coming

- Cornerstone-native charge-capture audit reporting (release Q3 2026)
- AI clinical scribe ([[2026-04-30-ai-clinical-scribe-vendor]]) is expected to recover an additional 1-2% by capturing ancillaries the DVM mentions but doesn't write down

## Related

- [[revenue-per-visit]]
- [[charge-capture-leakage-4-to-6-percent]]
- [[pims-revenue-classification]]
- [[dental-grading-system]]

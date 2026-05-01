---
type: config
status: active
last_updated: 2026-04-30
owner: priya-shah
---

# Guardrails

Content and access guardrails for the Pawline Cortex deployment.

## Content guardrails

The portal renderer applies these guards before any content is exposed:

1. **Path-based**: anything matching `internal/**` is excluded from the all-staff render. Always.
2. **Frontmatter-based**: any note with `client_visible: false` (legacy field) or `audience: exec` is excluded.
3. **Tag-based**: notes tagged `confidential` are excluded.
4. **Identifier scrubbing**: outbound rendering scrubs PII patterns (SSN, DEA#, full DOB) even from all-staff content. Defense-in-depth — these should never be in `knowledge-base/` to begin with.
5. **Pricing**: any reference to specific pricing comparisons against named competitors is gated to exec-only via `internal/pricing/`.

## Access guardrails

- All-staff: read access to the Pawline-branded portal at the company SSO endpoint. Default for any employee.
- Exec-only: `internal/` requires named SSO group membership. Audited monthly.
- Board: full read of `internal/` plus a quarterly board pack rendered from `internal/ma-pipeline/` + `internal/pricing/`.
- External (e.g., Larkspur diligence): one-off read grants with time-bound URL signing. Logged.

## Editorial guardrails

- Decisions marked `accepted` are immutable. Superseding requires creating a new ADR that names the predecessor in `supersedes:`.
- Concept notes can be edited freely; `validated` requires CMO or COO approval depending on domain.
- Evidence notes are append-only in spirit — corrections create a new evidence note that supersedes the old one.

## Network guardrails

- Cortex is served from inside the corporate VPN by default. Public access requires SSO + MFA.
- All inbound integrations are allowlisted by source IP at the warehouse layer.

## Compliance

- HIPAA does NOT apply (vet medicine), but client privacy is governed by [[client-data-privacy-policy]].
- DEA compliance is governed by [[controlled-substances-policy]].
- State-specific veterinary practice acts vary by jurisdiction; the Director of Clinical Quality maintains a compliance matrix (linked from [[clinical-protocols-policy]]).

// Export policy for cortex-portal render of Pawline.
// Default-deny: nothing leaves the all-staff surface unless explicitly allowed.
// See docs/decisions/ADR-001-vault-shape.md for the visibility contract.

export default {
  client: {
    slug: "pawline",
    name: "Pawline Veterinary Partners",
    contact: "Dr Sarah Okafor",
  },
  publish: {
    paths: [
      "knowledge-base/**/*.md",
      "knowledge-base/**/*.canvas",
      "knowledge-base/_assets/**",
      "MOC.canvas",
      "*.base",
      "README.md",
      "config/org-map.md",
      "config/connectors.md",
      "config/guardrails.md",
      "config/systems.yaml",
    ],
    deny: [
      "internal/**",
      "config/access.yaml",
      "config/integrations.yaml",
      "config/routing-rules.md",
      "deployment/**",
      "scripts/**",
      "docs/plans/**",
      "docs/decisions/**",
      "state/**",
      "*.env*",
      "package.json",
      "pnpm-lock.yaml",
      "tsconfig.json",
    ],
  },
} as const;

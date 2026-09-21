# AI-Architecture Next 30 Days

> **Status:** Completed/superseded. Active work is tracked in `plan/premium-ux-followup-plan.md`.

## Objective

Apply the highest-ROI guardrails from the Architecture Proportionality & AI Readiness Audit so the portfolio remains safe for AI-led changes, stays under its bundle and file-size budgets, and keeps a single, consistent design-token system.

## Principles

- No enterprise patterns.
- No framework rewrites.
- Mechanical guardrails over human discipline.
- Every change must pay for itself in maintainability or safety.

---

## Week 1 — Token & ID Stability

### 1. Enforce CSS-variable usage in styled components ✅

- Add `scripts/check-hardcoded-colors.js` and an `npm run check:colors` script that forbids hardcoded hex/RGB values in `src/**/styled.js` files (warning-only until legacy `styled.js` files are migrated).
- Fix existing hardcoded tokens in `src/features/portfolio/Contact/styled.js` and `src/features/portfolio/Footer/styled.js` by mapping `#00a3ff`, `#28c9ff`, `#f8fafc`, `#94a3b8`, `#020617`, `#041126` to CSS variables in `src/GlobalStyles.js`.
- Document the new rule in `plan/architecture-playbook.md` and `README.md`.

> **Why:** The most common AI drift is reintroducing literal colors. This single rule preserves the design-token contract and dark mode.

### 2. Stabilize section IDs ✅

- Replace language-derived IDs in `src/App.js` and `src/common/Navigation/index.js` with fixed English slugs: `home`, `about`, `projects`, `contact`.
- Keep `menuItems[language]` for labels only; add a `slug` field to `src/common/Navigation/menuItems.js`.
- Update `src/features/portfolio/Footer/index.js` to use the same fixed anchors.

> **Why:** Polish/Spanish anchors such as `#o mnie` and `#acerca de` break deep links, `react-scroll`, and tests.

### 3. Split `GlobalStyles.js` ✅

- Extract design tokens into `src/styles/tokens.js`.
- Extract base/reset rules into `src/styles/base.js`.
- Keep `GlobalStyles.js` as a composition of those files.
- Ensure each file is under 300 lines and `size-check` passes.

> **Why:** `GlobalStyles.js` is 242 lines and mixes tokens, typography, backgrounds, utilities, and scrollbars. Splitting removes a dumping ground.

---

## Week 2 — State & Bundle Simplification

### 4. Replace Redux with React Context for language and contact visibility ✅

- Remove `@reduxjs/toolkit` and `react-redux` from `package.json` if no other slice appears.
- Create `src/common/LanguageProvider` and `src/common/ContactVisibilityProvider`.
- Update `useContent`, `Navigation`, `LanguageSwitch`, `DarkModeToggle`, and `Contact`.
- Verify `bundle:check` shows a meaningful reduction.

> **Why:** Two tiny slices (`language` string and `isContactVisible` boolean) do not justify the bundle and `Provider` boilerplate of Redux.

### 5. Decide the fate of `framer-motion` ✅

- Verify the `ToolsShowcase` orbit and explore animations cannot be achieved with CSS keyframes.
- If replaceable, remove `framer-motion` and update `ToolsShowcase`.
- If irreplaceable, document the bundle cost and usage in `plan/architecture-playbook.md`.

> **Why:** `framer-motion` is one of the heavier dependencies and is used in only one feature.

---

## Week 3 — Shared Primitives & Structure

### 6. Make `src/common/Card` the single source of truth ✅

- Refactor `Contact`, `Footer` social buttons, `About` feature cards, and `Projects` tiles to use/extend `Card`.
- Add new variants (`$glass`, `$glow`, `$compact`) only if necessary.
- Remove one-off glass/border/hover implementations.

> **Why:** A single primitive gives AI one vocabulary and prevents duplicate styling patterns.

### 7. Add circular-dependency check to CI ✅

- Install `madge` (or `dependency-cruiser`) as a dev step.
- Add `npm run check:circular` to the CI pipeline.
- Block the PR if any cycle is introduced.

> **Why:** Circular imports are the most common source of silent module-initialization bugs. features grow; this is free structural insurance.

### 8. Add bundle-impact gate to PRs ✅

- Add a PR template note: _“Run `npm run build && npm run bundle:check` and confirm no significant bundle increase.”_
- Consider a CI step that posts the current bundle delta as a comment.

> **Why:** Protects the 350 KB budget from heavy libraries added by AI for one-line utilities.

---

## Week 4 — Quality Finish

### 9. Make Lighthouse CI meaningful ✅

- Fix failing thresholds.
- Make the check fail on bad scores.
- Document what is and isn't acceptable.

> **Why:** Lighthouse CI is currently non-blocking and generates noisy reports; set thresholds for LCP/CLS/Performance and make it fail on bad scores.

### 10. Update the playbook ✅

- Record the new CSS-variable rule, fixed section IDs, split `GlobalStyles`, state-management change, and bundle checks.
- Add a short decision note on `framer-motion` and `Card` usage.

> **Why:** Every decision written down is a decision AI will not re-make.

---

## Out of Scope

- Migrating to Next.js, Vite, TypeScript, or another framework.
- Adding authentication, billing, sessions, backend, CMS, analytics, or observability.
- Introducing Storybook or a full design system.
- Docker, Kubernetes, or any containerization.

---

## Success Criteria

- `npm run lint`, `npm run build`, `npm run bundle:check`, `npm run size-check`, `npm test`, and `npm run test:e2e` all pass in CI.
- No hardcoded colors remain in `src/features/portfolio/**/styled.js`; `npm run check:colors` is a blocking CI gate.
- Section IDs are fixed and language-agnostic.
- `GlobalStyles.js` is composed of focused files, each under 300 lines.
- `bundle:check` still passes with headroom under 350 KB.
- `architecture-playbook.md` reflects every new guardrail.

---

## Single Highest-ROI Change

A mechanical CSS-token enforcement rule. It is cheap, runs in CI, and prevents the most damaging and repeatable AI mistake: hardcoded colors that silently break the design system and dark mode.

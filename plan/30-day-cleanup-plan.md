# 30-Day Post-Audit Cleanup Plan

## Objective

Apply the highest-ROI fixes from the Architecture Proportionality & AI Readiness Audit to keep the Derek.dev portfolio clean, safe for AI-led changes, and proportional to a one-person static site.

## Principles

- No enterprise patterns.
- No new frameworks.
- Mechanical guardrails over human discipline.
- Every change must pay for itself in maintainability or safety.

---

## Week 1 — File Boundaries & Theme Cleanup

### Tasks

1. [x] Move `StarField` and `Main` out of `src/GlobalStyles.js` into `src/common/`.
   - `GlobalStyles` should contain only global rules.
   - `StarField` becomes `src/common/StarField/index.js` + `styled.js`.
   - `Main` becomes `src/common/Main/index.js` or remains in `GlobalStyles` only if it stays 100% global.

   > **Why advisable:** `GlobalStyles.js` is currently 279 lines and the second-largest logic file. Moving UI components out gives AI a clear rule: this file holds global rules, not components. It also makes `StarField` testable on its own and prevents future changes from turning `GlobalStyles` into a dumping ground.

2. [x] Split `translations` out of `src/themes.js`.
   - Keep `theme` = breakpoints + colors only.
   - Components that read text via `useTheme().English` should read from `translations` directly or via a hook.

   > **Why advisable:** Today the theme object is a mix of design tokens and all site copy. AI agents see `useTheme()` and assume it is styling-only; they will keep putting text and colors together. Splitting the two removes a recurring boundary mistake and makes tests easier to set up.

3. [x] Make `StarField` deterministic.
   - Replace `Math.random()` at module load with a pre-computed array or deterministic seed.
   - Prevents hydration mismatches and snapshot instability.
   > **Why advisable:** `Math.random()` runs once when the module loads, so every SSR/hydration or screenshot can differ. A static seed makes the star layout reproducible, which is free consistency and fewer flaky tests.

### Definition of done

- `npm run lint` passes.
- `npm run size-check` passes.
- `npm run build` passes.
- `npm test` passes.
- `GlobalStyles.js` is under 200 lines or the largest non-data logic file is smaller than today.

---

## Week 2 — Dependency & Bundle Hygiene

### Tasks

1. [x] Add `depcheck` to CI.
   - Add `npx depcheck` as a CI step.
   - Remove or keep every flagged dependency with a one-line comment.

   > **Why advisable:** Dependencies are the fastest way for a small project to become heavy. AI will happily install packages but never notice unused ones. `depcheck` turns dependency cleanup from a manual chore into a CI-enforced rule.

2. [x] Tighten `bundle-size.js` budget.
   - Lower `MAX_SIZE` from 600 KB to 350 KB.
   - Current main chunk is ~212 KB, so the new budget still provides headroom.

   > **Why advisable:** A 600 KB budget lets the bundle triple before anyone notices. A 350 KB budget gives ~65% headroom while still catching bloat early, before performance becomes a real problem.

3. [x] Review and document `framer-motion` usage.
   - If `depcheck` flags it, re-verify `ToolsShowcase` still uses `motion.*`.
   - Remove only if genuinely unused.
   > **Why advisable:** `framer-motion` is one of the heavier packages in `package.json`. Before it silently becomes dead weight, confirm it is genuinely needed or remove it. This sets the precedent that every dependency must justify its bundle cost.

### Definition of done

- `npm run bundle:check` runs with a 350 KB budget and passes.
- CI fails on new unused dependencies.
- No unused packages remain in `package.json`.

---

## Week 3 — Shared Primitives & Data Splitting

### Tasks

1. [x] Create a shared `Card` / `Panel` primitive in `src/common/Card/`.
   - Replace repeated card markup in `About`, `Projects`, and `ToolsShowcase`.
   - Keep variants via props (`$glass`, `$bordered`, `$hoverable`).

   > **Why advisable:** Feature cards, project tiles, and tool cards all repeat the same glass/border/hover pattern. A shared primitive gives AI a single vocabulary for card-like surfaces and stops the same styles from being copy-pasted slightly differently.

2. [x] Split `src/content/skillsets.js` by language.
   - Create `src/content/skillsets/` with `en.js`, `pl.js`, `es.js`, `index.js`.
   - Ensure `translations.test.js` still asserts parity.

   > **Why advisable:** At 743 lines, `skillsets.js` is hard to review and easy for an AI edit to break one language without touching the others. Splitting by language keeps files small, diffs readable, and the parity test still guarantees no language is left behind.

3. [x] Split `src/content/projects.js` by language if it grows, or keep as a single module under the documented size-check exclusion.
   - Only split if the next content edit makes the file awkward to review.
   > **Why advisable:** `projects.js` is already 375 lines and excluded from `size-check`. This is acceptable if it stays this size, but the moment it grows, the same review risk as `skillsets.js` appears. Having a documented trigger means the decision is mechanical, not political.

### Definition of done

- New `Card` primitive is used in at least three places.
- `skillsets.js` is under 300 lines per file or the split is documented.
- All content parity tests pass.

---

## Week 4 — Quality & Documentation Finish

### Tasks

1. [x] Add a coverage report or threshold to `npm test`.
   - Add `--coverage` flag or a `test:coverage` script.
   - Set a conservative threshold (e.g., 50%) or use it only for visibility.

   > **Why advisable:** There are only 12 tests today, which is fine for a static portfolio, but there is no visibility into what is untested. A coverage report shows the gap without turning the project into a coverage-obsessed codebase.

2. [x] Add Lighthouse CI or a Core Web Vitals check.
   - Run on the `build/` folder with a tool like `lighthouse-ci`.
   - Fail on LCP > 2.5 s or CLS > 0.1 for the homepage.

   > **Why advisable:** A portfolio is judged by how fast it feels. Performance regressions (large images, blocking assets, layout shifts) are easy to introduce and hard to notice manually. One numeric budget in CI is cheaper than dozens of manual Lighthouse runs.

3. [x] Update `plan/architecture-playbook.md`.
   - Record the `StarField`/`Main` move, `themes`/`translations` split, `depcheck`, bundle budget, and `Card` primitive.
   - Update `README.md` if any scripts change.
   > **Why advisable:** Decisions that are not written down are decisions AI will re-make every time. Recording the new boundaries and budgets makes the playbook the single source of truth for the next 30 days and the next AI session.

### Definition of done

- `npm run lint`, `npm run test`, `npm run build`, and `npm run bundle:check` all pass in CI.
- `plan/architecture-playbook.md` reflects the new decisions.
- All oversized files are either under 300 lines or explicitly excluded with a reason.

---

## Out of Scope (Do Not Implement)

- Migrating to Next.js, Vite, TypeScript, or another framework.
- Adding authentication, billing, sessions, backend, CMS, analytics, or observability.
- Introducing Storybook, E2E tests, or a full design system.
- Docker, Kubernetes, or any containerization.

---

## Success Criteria After 30 Days

- [ ] CI runs and passes: `size-check`, `lint`, `format:check`, `test`, `build`, `bundle:check`, and `depcheck`.
- [ ] `GlobalStyles.js` is no longer the largest non-data logic file.
- [ ] `themes.js` contains style tokens only; `translations` are imported separately.
- [ ] `Card` primitive is the default for all card-like surfaces.
- [ ] Bundle size is tracked with a 350 KB budget.
- [ ] Architecture playbook and README document every new guardrail.

## Why This Matters

These are the smallest changes that give the largest boost to AI-led maintenance: clear boundaries, automated dependency cleanup, a tighter bundle budget, and a shared component vocabulary. They keep the portfolio simple without adding the overhead of enterprise architecture.

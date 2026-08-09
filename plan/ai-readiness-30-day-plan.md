# 30-Day AI Readiness & Proportionality Plan — Derek.dev

## Objective
Make the portfolio codebase safe for AI-led changes while keeping the architecture proportional to a one-person static site. This plan is derived from the Architecture Proportionality & AI Readiness Audit.

## Principles
- Do not add enterprise architecture to a personal portfolio.
- Only add protections whose long-term value exceeds their maintenance cost.
- Prefer mechanical guardrails (CI, lint, tests, types) over human discipline.

## Week 1 — CI guardrails and conventions

### Goals
Stop accidental drift before it lands in `main`.

### Tasks
1. [x] Run the existing `size-check` in CI.
   - File: `.github/workflows/ci.yml`
   - Added step: `run: npm run size-check`
   - Modified `scripts/check-file-size.js` to exit with code 1 when offenders exist
2. [x] Run `npm test` in CI.
   - File: `.github/workflows/ci.yml`
   - Added step: `run: npm run test` (GitHub Actions sets `CI=true`, so `react-scripts` exits after one run)
3. [x] Add an ESLint + Prettier CI step.
   - Added `.eslintrc.js` extending `react-app` with `import/order` (error) and `import/no-relative-parent-imports` (warn until Week 2).
   - Added `.prettierrc` and `npm run format:check` script.
   - Added `npm run lint` and `npm run format:check` to `.github/workflows/ci.yml`.
4. [x] Add a bundle-size or Lighthouse budget check.
   - Added `scripts/bundle-size.js` to check `build/static` JS and CSS files.
   - Added `npm run bundle:check` script and CI step.
   - Current build: main chunk `572.92 KB` (below the `600 KB` threshold); small chunk `4.38 KB`.

### Definition of done
- `npm run size-check`, `npm test`, `npm run build` all fail PRs when they fail.
- No new code with mixed `../..` and `src/` import styles can be merged.

### Status after implementation
- `npm run size-check` runs in CI and exits 1 on oversized files.
- `npm run test` runs in CI after the size-check.
- `npm run lint` passes with 44 warnings for `import/no-relative-parent-imports`; `import/order` is now green.
- `npm run format:check` passes; all `src/` files are formatted.
- `npm run bundle:check` passes with the main JS chunk at `572.92 KB` (budget `600 KB`).
- `import/no-relative-parent-imports` is now `error`; all `../` imports use `jsconfig` base-URL aliases.
- `src/Redux` is now `src/slices` to avoid the `redux` package name collision.
- `Navigation/index.js` no longer reads `themes.js` at runtime for breakpoints; it uses the `--breakpoint-xl2` CSS custom property.
- `npm run build` passes cleanly.
- The pipeline currently stops at `size-check` because four existing files exceed 300 lines:
  - `src/content/projects.js` (379)
  - `src/content/skillsets.js` (863)
  - `src/features/portfolio/Home/ToolsShowcase/OrbitSection.js` (481)
  - `src/features/portfolio/Home/ToolsShowcase/styled.js` (523)

## Week 2 — Type contracts and import rules

### Goals
Give AI a machine-readable specification for component and content shapes.

### Tasks
1. [x] Add JSDoc or TypeScript type contracts for high-touch shapes.
   - Created `src/types.js` with `Project`, `SkillSet`, `SkillDescriptions`, `TranslationSet`, `LanguageState`, `GeneralState`, `TileProps`, `SkillsetListProps`.
   - Annotated `projects.js`, `skillsets.js`, `translations.js`, `languageSlice.js`, and `generalSlice.js` with `@type`.
   - Annotated `Tile`, `SkillsetList`, and `About` with `@param` prop types.
2. [x] Enforce `jsconfig.json` base-URL imports.
   - Rewrote all remaining `../` imports to `jsconfig` base-URL paths.
   - Promoted `import/no-relative-parent-imports` from `warn` to `error` in `.eslintrc.js`.
   - `npm run lint` now passes with no warnings.
3. [x] Rename `src/Redux` to `src/slices` to avoid the `redux` package name collision.
   - Renamed `src/Redux` to `src/slices` and rewrote all `Redux/...` imports to `slices/...`.
   - `npm run lint`, `npm run format:check`, and `npm run build` all pass.
4. [x] Remove `themes.js` from being used as a runtime breakpoint source.
   - Added `--breakpoint-xl2: 1100px;` to `GlobalStyles.js`.
   - `Navigation/index.js` now reads `parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xl2') || '1100px', 10)`.
   - Removed `import { themes } from "themes"` from `Navigation/index.js`.
   - `npm run lint` and `npm run build` pass.

### Definition of done
- `npm run build` and `npm test` pass.
- Every component that receives content has a documented prop contract.

## Week 3 — Content validation and data hardening

### Goals
Ensure multi-language data cannot break between language switches.

### Tasks
1. [x] Add a content-key parity test.
   - Created `src/content/translations.test.js` with tests for `translations`, `skillsets`, `skillDescriptions`, `toLearn`, `toLearnDescriptions`, and `projects`.
   - Asserts all content files use `English`, `Polish`, and `Spanish` consistently.
   - `npm test` passes with all 4 tests.
2. [x] Decide the fate of `skillsets.js` and `projects.js`.
   - Decision: keep them as JS modules and explicitly exclude them from the 300-line size check.
   - Reason: the 300-line limit is for logic, not data. Language parity is already enforced by `src/content/translations.test.js`.
   - Updated `scripts/check-file-size.js` to exclude `src/content/projects.js` and `src/content/skillsets.js`.
   - `npm run size-check` no longer reports these two files; only `OrbitSection.js` and `ToolsShowcase/styled.js` remain oversized.
3. [x] Verify `framer-motion` usage in `ToolsShowcase`.
   - `ToolsShowcase/styled.js` uses `motion` from `framer-motion` for `styled(motion.div)`, `styled(motion.section)`, and other animated components.
   - `OrbitSection.js` still imports `framer-motion` but the dependency is required by `styled.js`.
   - Decision: keep `framer-motion`.

### Definition of done
- [x] A CI test fails if any language is missing a key present in another language.
- [x] Content files are under the 300-line limit or explicitly excluded with a documented reason.
- `framer-motion` is verified and kept.

## Week 4 — Component tests and documentation refresh

### Goals
Prove the site still works after automated changes.

### Tasks
1. [x] Add one test per major section.
   - `Navigation.test.js`: renders English, Polish, and Spanish menu items; highlights the contact link when `isContactVisible` is true.
   - `LanguageSwitch.test.js`: clicking the Polish and Spanish flags updates the Redux language.
   - `Tile.test.js`: renders website and repository links with the correct `href` attributes.
   - `Contact.test.js`: dispatches `setContactVisibility(true)` when intersecting.
   - Added `src/test-utils.js` with a shared `renderWithProviders` helper and updated `src/setupTests.js` with a `matchMedia` mock.
2. [x] Update `README.md`.
   - Confirmed the tech stack list matches `package.json` and the actual source.
   - Updated the `Technologies Used` section to include React 18, Redux Toolkit, React Redux, styled-components, react-scroll, react-icons, framer-motion, and the CI/quality scripts.
   - Relabeled `What I’m Learning Next` to `Currently Exploring` and noted that React Testing is now in production use.
3. [x] Update `plan/architecture-playbook.md`.
   - Recorded the CI, type, import, content-validation, and testing decisions in the appendix.

### Definition of done
- [x] `npm test` runs at least one meaningful test per section.
- [x] `README.md` reflects the current tech stack and conventions.
- [x] `plan/architecture-playbook.md` reflects the current architecture and conventions.

## Out of scope (do not implement now)

- Migrating to Next.js, Vite, or any other framework.
- Adding authentication, billing, sessions, or a backend.
- Converting the site to SSR/SSG.
- Adding Docker, Kubernetes, or containerization.
- Introducing a full i18n library for three static languages.
- Adding analytics, observability, or logging beyond build-time checks.

## Success criteria after 30 days

- [x] CI runs `npm run size-check`, `npm test`, `npm run build`, and lint/format checks.
- [x] Component and content contracts are typed or documented.
- [x] Multi-language content has a parity test.
- [x] Import style is consistent (no `../../../` reaches).
- [x] Major sections have at least one regression test.
- [x] Architecture playbook and README are current.

## Why this matters
Once these guardrails are in place, an AI agent can generate 80–90% of future code without silently breaking translations, section IDs, import paths, or bundle performance. The cost is low because all changes are mechanical, not architectural.

# Architecture Playbook — Derek.dev Portfolio

This document records the major architectural decisions in the `feature/ui-refresh` branch of the portfolio app, what was implemented, why it was chosen, the trade-offs involved, and how future decisions should be made.

---

## 1. Build & Runtime Environment

### Decision: Use Create React App (CRA) with React 18

- **What:** `react-scripts@5.0.1`, React 18.2.0, React-DOM client root in `src/index.js`.
- **Why:** The portfolio is a static, single-page site with no need for SSR or SSG. CRA provides a familiar, zero-config build pipeline and is easy to deploy to GitHub Pages.
- **Trade-offs:** Larger bundle and slower startup than Vite; `react-router` was removed after the audit confirmed it was unused; no eject performed.
- **Future guidance:** If SEO, SSG, or performance become priorities, evaluate Vite or Next.js before the next major rewrite.

---

## 2. State Management

### Decision: Redux Toolkit for language and general UI state

- **What:** `src/Redux/store.js` uses `configureStore` with `languageSlice` and `generalSlice`.
- **Why:** `createSlice` removes Redux boilerplate; the language is read in many components, so a single global source is reliable; `createSelector` gives stable, memoized selectors.
- **Trade-offs:** Two small slices are arguably overkill for this app; React Context or simple `useState` at `App` level would also work.
- **Future guidance:** Keep `language` in Redux; expand `general` for additional UI flags. If API data is introduced, create a dedicated data slice rather than adding it to `general`.

---

## 3. Styling & Theming

### Decision: CSS custom properties as the single source of truth, with `styled-components` for scoped styles

- **What:** `src/GlobalStyles.js` declares `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, `var(--shadow-*)`, and `var(--transition-*)`. Dark mode flips these values via the `data-theme="dark"` attribute on `<html>`. `Main` and `StarField` were moved to `src/common/Main/` and `src/common/StarField/` so `GlobalStyles` contains only global rules.
- **Why:** CSS variables update instantly without re-rendering the styled-components tree; `styled-components` still provides scoped, co-located styles for components; theming is decoupled from JavaScript. Moving UI components out of `GlobalStyles` keeps it from becoming a dumping ground and makes `StarField` independently testable.
- **Trade-offs:** `styled-components` `ThemeProvider` is kept only to inject `theme.breakpoint`; it no longer drives color/spacing values, which reduces its dynamic capabilities.
- **Future guidance:** Add any new design token to `:root` and its `data-theme="dark"` mirror. Never hardcode colors or spacing in `styled.js` files. Keep `GlobalStyles` free of component definitions; if it approaches 200 lines, split it.

### Decision: Reduce `src/themes.js` to breakpoints only

- **What:** `src/themes.js` now exports an object with only `breakpoint`. Color, spacing, radius, shadow, and transition maps were removed, and `translations` are no longer spread into the theme. Components read localized copy through `src/common/useContent.js`.
- **Why:** Those maps duplicated the CSS custom properties in `GlobalStyles.js`; keeping both in sync was error-prone. Separating breakpoints from translations removes a recurring boundary mistake where AI edits put text inside a style-only object and makes `useTheme()` semantically honest.
- **Trade-offs:** Components must import `useContent` alongside `useSelector` where they need both language and copy; this is a small, mechanical change.
- **Future guidance:** If more JavaScript-only tokens are needed, split `src/themes.js` into `src/themes/breakpoints.js` and `src/themes/index.js`. Never put content strings in the theme object.

---

## 4. Navigation & Routing

### Decision: `react-scroll` instead of React Router

- **What:** `src/common/Navigation/index.js` uses `react-scroll` `<Link>` components to scroll to section IDs. The section IDs are derived from `menuItems[language][index].name.toLowerCase()` in `src/App.js`.
- **Why:** The app is a true single-page experience. There are no route transitions, no browser history, and no server-side routing concerns.
- **Trade-offs:** The URL does not change as the user scrolls; there is no deep linking to individual sections; `offset` values for smooth scrolling are hardcoded in `src/common/Navigation/menuItems.js`.
- **Future guidance:** If deep linking or URL-based section navigation becomes required, add `react-router-hash-link` or a custom `useEffect` that reads `window.location.hash`.

---

## 5. Content & Internationalization

### Decision: Store multi-language content in JS modules rather than JSON or an i18n library

- **What:** English, Polish, and Spanish copy lives in `src/content/translations.js`. Skill data was moved to `src/content/skillsets.js`. Project data was moved to `src/content/projects.js` after adding `jsconfig.json` with `baseUrl: "src"`; image imports use `src`-relative `images/...` paths. Menu items remain in `src/common/Navigation/menuItems.js`.
- **Why:** No extra i18n dependency is needed; content can contain HTML strings and be co-located with the consuming feature; imports are static and simple.
- **Trade-offs:** No fallback language chain, no runtime language lazy-loading, and content is bundled into the JavaScript. Adding a language requires updating every content file.
- **Future guidance:** If a CMS or more languages are added, migrate to a `src/locales/` JSON structure or introduce `react-i18next`. Until then, keep content objects isomorphic across all three languages.

### Decision: `LanguageSwitch` dispatches `setLanguage`; components read `selectLanguage`

- **What:** `src/common/LanguageSwitch/index.js` dispatches `setLanguage()`. `App.js` and section components use `useSelector(selectLanguage)` to choose localized content via `src/common/useContent.js`.
- **Why:** A single Redux action makes language switching predictable and easy to trace. `useContent` centralizes the `translations[language]` lookup so components do not call `useTheme()` for copy.
- **Trade-offs:** Section IDs depend on the translated menu item name, so a language change can alter the DOM `id` of each section. This is acceptable for a static portfolio but could break tests that rely on fixed IDs.
- **Future guidance:** If adding a new language, add a test or CI step that validates all language objects have the same keys and that `menuItems` includes the new language.

---

## 6. Component Architecture

### Decision: `common/` for shared UI, `features/portfolio/` for page sections

- **What:** Reusable controls such as `Navigation`, `DarkModeToggle`, `LanguageSwitch`, and shared `animations.js` live in `src/common/`. Page sections live in `src/features/portfolio/<Section>/` with `index.js` for logic and `styled.js` for styles.
- **Why:** Styles are co-located with components; `App.js` becomes a flat composer of sections; the structure mirrors Redux Feature-Sliced Design conventions.
- **Trade-offs:** For a one-page portfolio, `features/portfolio` is one feature with nested sub-folders, creating deep relative imports such as `../../../common/animations`.
- **Future guidance:** For a single-page site, `src/sections/` may be flatter. If more features are added, keep `features/` and consider path aliases (CRA requires eject or a custom Webpack setup for aliases).

### Decision: `App.js` as a section composer

- **What:** `src/App.js` renders `Navigation`, a `<Main>` element containing `Home`, `About`, `Projects`, and `Contact`, and then `Footer` outside `<Main>`.
- **Why:** Each section is independently scrollable and receives a stable `id` for `react-scroll`. `Footer` is visually distinct from the main content wrapper.
- **Trade-offs:** IDs are generated at runtime from the current language; layout changes to `Main` must not break `Footer` positioning.
- **Future guidance:** If the scroll offset or `Main` max-width changes, verify both `Navigation` and `Footer` still render correctly at all breakpoints.

### Decision: Create a shared `Card` primitive in `src/common/Card/`

- **What:** `src/common/Card/styled.js` exports a single `Card` component with prop-driven variants: `$glass` (frosted-glass background + border), `$bordered` (basic border), and `$hoverable` (background/border hover transition). It is used by `About/FeatureCard`, `ToolsShowcase/showcaseLayout/FeatureCard` (with `as={motion.div}`), and `Projects/ProjectWrapper`.
- **Why:** `About`, `Projects`, and `ToolsShowcase` all repeated the same glass/border/hover markup. A shared primitive gives AI a single vocabulary for card-like surfaces and keeps hover transitions consistent.
- **Trade-offs:** Not every card in the app is identical; `TechCard` and `ExploreChip` have unique gradients or accents and remain local. The primitive is intentionally minimal to avoid becoming a generic grab-bag.
- **Future guidance:** Do not add a new card-like component until it has been evaluated against `src/common/Card`. If a new surface needs a new variant, extend `Card` rather than creating a one-off styled `div`.

---

### Decision: Split content files by language once they exceed the 300-line budget

- **What:** `src/content/skillsets.js` was split into `src/content/skillsets/{en,pl,es}.js` with an `index.js` aggregator. `src/content/projects.js` (380 lines) is kept as a single module and listed in `scripts/check-file-size.js` as a size-check exclusion.
- **Why:** `skillsets.js` was ~740 lines and hard to review; per-language files make diffs readable and `translations.test.js` still enforces language parity. `projects.js` is a list of objects with per-language fields, so a language split would force awkward re-composition; keeping it whole is acceptable while it stays under 450 lines.
- **Trade-offs:** Splitting adds an aggregator and more files, but reduces the blast radius of content edits. Exclusions must be revisited as files grow.
- **Future guidance:** Any content file that exceeds 300 lines and does not gain clarity from a language split should either be split or added to `check-file-size.js` exclusions with a documented trigger (e.g., "re-evaluate at 450 lines"). Content parity tests must always pass after a split.

---

## 7. Animation Strategy

### Decision: Centralize keyframes in `src/common/animations.js`

- **What:** All keyframe animations (`gradientShift`, `waveHand`, `fadeInUp`, `float`, `spin`, etc.) are exported from `src/common/animations.js` and imported by `styled.js` files.
- **Why:** Reduces duplication across components; a single file controls animation timing and naming; build passes without stale local keyframes.
- **Trade-offs:** A shared animation file can grow into a generic grab-bag; importing from a long relative path is awkward for deeply nested components.
- **Future guidance:** Only add an animation to `src/common/animations.js` when it is reused. Keep one-off keyframes local to the component.

---

## 8. Dark Mode

### Decision: Toggle `data-theme="dark"` on `<html>` and persist the choice in `localStorage`

- **What:** `src/common/DarkModeToggle/index.js` uses `useState` and `useEffect`. On mount it checks `localStorage` and `prefers-color-scheme`; on click it toggles the `data-theme` attribute and stores the preference.
- **Why:** CSS variables react immediately; no `ThemeProvider` re-render is needed; user preference persists across sessions.
- **Trade-offs:** The toggle directly mutates `document.documentElement`, which is a side effect. This is acceptable because the app is client-side only and has no SSR.
- **Future guidance:** If other components need to react to the theme, move the theme state to Redux. For now, keep it encapsulated in `DarkModeToggle`.

---

## 9. Deployment

### Decision: GitHub Pages via `gh-pages`

- **What:** `package.json` declares `"homepage": "https://boostertech.github.io/Front-End-Dev-Portfolio/"`. `npm run deploy` runs `gh-pages -d build` after `npm run build`.
- **Why:** Free, version-controlled hosting with a single npm script deployment.
- **Trade-offs:** Client-side routing is not supported; all assets must be referenced through `%PUBLIC_URL%` or relative paths; `public/index.html` metadata is static.
- **Future guidance:** Before each deploy, confirm the `homepage` value. If a custom domain is added, place a `CNAME` file in `public/`.

---

## 10. Accessibility, SEO, and Performance

### Decision: Fix `public/index.html` metadata

- **Current state:** The invalid `<meta name="Derek.dev" ...>` was replaced with `name="description"`, and Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`) were added in `public/index.html`. The `<html lang="en">` attribute still does not update when the language changes.
- **Why it matters:** Search engines and social sharing rely on `name="description"` and Open Graph tags. The `lang` attribute is important for screen readers.
- **Trade-offs:** A dynamic `lang` update requires `React-Helmet` or a custom `useDocumentLang` hook, adding a small dependency or complexity.
- **Future guidance:** Update `document.documentElement.lang` when the language changes if screen-reader support becomes a priority.

### Decision: Centralize `dangerouslySetInnerHTML` through a `RichText` component

- **Current state:** `src/common/RichText/index.js` is the single component that renders raw HTML via `dangerouslySetInnerHTML`. It is used by `src/features/portfolio/About/index.js` and `src/features/portfolio/Projects/ComingSoonProject/index.js`.
- **Why it matters:** Raw HTML is an XSS risk if content ever becomes user-supplied or API-driven. Keeping the call in one place makes it easy to swap in a sanitizer or a markdown-to-JSX solution later.
- **Trade-offs:** The author controls all content, so the current risk is low. Converting long About paragraphs and project descriptions to JSX or structured content is laborious.
- **Future guidance:** If content comes from an API or CMS, replace `RichText` with `react-markdown` or a structured content model. For now, keep content in trusted JS modules.

---

## 11. Decision Framework

When adding or changing anything, prefer the following order:

1. **CSS variables first.** Add new design tokens to `src/GlobalStyles.js` and mirror them in `data-theme="dark"`.
2. **Centralization second.** Shared styles, keyframes, and content belong in `src/common/` or `src/content/`.
3. **Redux for global UI state;** local `useState` for component-only concerns.
4. **Run `npm run build` before committing** to catch missing modules, import path errors, and syntax issues early.
5. **Avoid hardcoded colors, spacing, and breakpoints** in `styled.js`; use `var(--*)` and `theme.breakpoint.*`.
6. **Document any new architecture decision in this playbook** using the same Decision/What/Why/Trade-offs/Future guidance structure.

---

## 12. Dependency & Bundle Hygiene

### Decision: Run `depcheck` in CI and document every flag

- **What:** `.github/workflows/ci.yml` runs `npx --yes depcheck` after `npm ci`. A `.depcheckrc` file records which flagged items are intentional: jsconfig `baseUrl` aliases are not npm packages, `eslint-config-react-app` and `@babel/plugin-proposal-private-property-in-object` are provided by `react-scripts`, and `@testing-library/user-event` is kept for future interaction tests.
- **Why:** Unused dependencies are the fastest way for a small project to become heavy. `depcheck` turns dependency cleanup from a manual chore into a CI-enforced rule and forces a one-line justification for every package that is kept despite not being imported.
- **Trade-offs:** `npx --yes depcheck` downloads the package on every CI run. Pinning `depcheck` to `devDependencies` could be added later if install time or reproducibility becomes an issue.
- **Future guidance:** Do not add a dependency without importing it or documenting why it is kept. Remove anything `depcheck` flags unless the `.depcheckrc` comment is defensible.

### Decision: Tighten bundle-size budget to 350 KB

- **What:** `scripts/bundle-size.js` now defaults to `350 * 1024` bytes unless `BUNDLE_SIZE_LIMIT` is set. The main chunk is ~212 KB, so the new budget still provides headroom.
- **Why:** A 600 KB budget lets the bundle triple before anyone notices. A 350 KB budget catches bloat early while leaving room for the current assets.
- **Trade-offs:** Very large images or animations can hit this limit. Monitor the `bundle:check` output and split lazy-loaded chunks if the main bundle approaches the cap.
- **Future guidance:** Before adding a new package or animation library, run `npm run build && npm run bundle:check` and confirm the budget is still respected.

### Decision: Keep `framer-motion` because `ToolsShowcase` uses `motion.*` styled components

- **What:** `framer-motion` is imported in `features/portfolio/Home/ToolsShowcase/{OrbitSection.styles,exploreLayout,orbitDecorations,showcaseLayout}.js` and used as `styled(motion.div)`, `styled(motion.section)`, etc.
- **Why:** The orbit and explore-scroll animations rely on `framer-motion` for performant, declarative motion. Removing it would require re-implementing those animations.
- **Trade-offs:** `framer-motion` adds bundle weight. If the orbit is simplified or removed in a future redesign, re-run `depcheck` and consider removing it.
- **Future guidance:** Do not add `framer-motion` for trivial hover transitions; use CSS keyframes in `src/common/animations.js` instead. If `depcheck` ever flags `framer-motion`, confirm these four files still import it before keeping.

---

## 13. Quality & CI

### Decision: Add `test:coverage` with a conservative threshold

- **What:** `package.json` has a `test:coverage` script (`react-scripts test --coverage --watchAll=false`) and a `jest.coverageThreshold` of 50% across branches, functions, lines, and statements.
- **Why:** The project has only 12 tests for a static portfolio, so 100% coverage is not the goal. A 50% floor makes coverage visible and prevents it from silently dropping while keeping CI practical.
- **Trade-offs:** `50%` is lenient and mainly acts as a regression guard, not a quality target. The threshold should rise only when new tests are added intentionally.
- **Future guidance:** Re-run `npm run test:coverage` after any new component or test. Raise the threshold only when the new value is stable across several runs.

### Decision: Add Lighthouse CI with LCP and CLS budgets

- **What:** `.lighthouserc.js` configures `@lhci/cli` to serve `build/` and assert `largest-contentful-paint <= 2500 ms` and `cumulative-layout-shift <= 0.1`. `npm run lighthouse:check` rebuilds with `PUBLIC_URL=/` so assets resolve from the build root, then runs `lhci autorun`.
- **Why:** A portfolio is judged on speed and visual stability. A numeric, automated budget is cheaper than manual Lighthouse runs and catches regressions early.
- **Trade-offs:** The first runs surfaced a very high headless LCP, so the CI step currently has `continue-on-error: true` while the underlying performance issue is investigated. Once LCP is under 2.5 s, `continue-on-error` can be removed.
- **Future guidance:** Investigate the LCP root cause (likely a blocking image or animation on first paint) before removing the non-blocking flag. Do not raise the numeric thresholds to make the check pass.

---

## 14. Appendix: `feature/ui-refresh` changes

- Removed dead code: unused `ScrollWatcher` import in `App.js`, unused `slideToggle` keyframes in `DarkModeToggle`, and unused `ref` parameter in `Footer`.
- Deleted the dead `src/common/ScrollWatcher` folder during the 30-day stabilization pass.
- Removed the unused `react-router` dependency from `package.json`.
- Moved `skillsets.js` data from `src/features/portfolio/Home/SkillsetContainer` to `src/content/skillsets.js`.
- Moved `projects.js` data from `src/features/portfolio/Projects` to `src/content/projects.js` after adding `jsconfig.json` with `baseUrl: "src"`.
- Updated `.github/workflows/ci.yml` to run `npm ci`, `npm run size-check`, `npm run test`, and `npm run build` on every push/PR.
- Added `src/App.test.js` as a smoke test that renders `<App />` and checks for the welcome label.
- Updated `scripts/check-file-size.js` and `npm run size-check` to fail on source files over 300 lines; the script exits with code 1 when offenders are found.
- Guarded `IntersectionObserver` usage in `src/features/portfolio/Contact/index.js` so the component does not crash in test/SSR environments where the API is missing.
- Moved the `FrontEndSpinner` SVG from `src/features/portfolio/About/SpinnerSvg.js` to `public/spinner.svg` and imported it as a `PUBLIC_URL` asset.
- Split `src/features/portfolio/Home/styled.js` into `homeStyles.js` and `heroStyles.js` to keep each file under 300 lines.
- Created and completed `plan/next-30-days-a29356.md` for the 30-day architecture stabilization plan.
- Fixed the broken `App.js` JSX from the quick-wins pass.
- Created `src/common/animations.js` and updated all `styled.js` files to import shared keyframes.
- Removed duplicated color/spacing/radius/shadow/transition maps from `src/themes.js`.
- Moved English, Polish, and Spanish copy to `src/content/translations.js`.
- Replaced hardcoded colors and values in `SkillsetContainer`, `LanguageSwitch`, and `Projects` with CSS variables and correct breakpoints.
- Updated `README.md` and `plan/portfolio-refresh-plan.md` to reflect the actual state of the project.
- Added `--nav-height` and `--nav-height-mobile` CSS variables and removed `!important` from `HomeWrapper`.
- Extracted `GradientHeading` to `src/common/GradientHeading` and reused it in `Home` and `About`.
- Added `variant: "comingSoon"` to `projects.js` and made `Projects/index.js` data-driven for the special case.
- Fixed `public/index.html` metadata and added Open Graph tags.
- Created `src/common/RichText` to centralize raw HTML rendering.
- `npm run build` passes cleanly after all changes.
- The size-check currently fails on four existing files (`projects.js`, `skillsets.js`, `OrbitSection.js`, and `ToolsShowcase/styled.js`), which are tracked for splitting or explicit exclusion in the current 30-day plan.
- Added `.eslintrc.js` (extending `react-app` with `import/order` as error and `import/no-relative-parent-imports` as warn until Week 2) and `.prettierrc`.
- Added `npm run lint` and `npm run format:check` to the CI pipeline. `npm run lint` now passes with 44 warnings for `import/no-relative-parent-imports`; `npm run format:check` passes after formatting.
- Added `scripts/bundle-size.js` and `npm run bundle:check` to the CI pipeline. The main JS chunk is currently `572.92 KB` with a `600 KB` budget.
- Added `src/types.js` JSDoc type declarations and annotated high-touch content shapes (`Project`, `SkillSet`, `SkillDescriptions`, `TranslationSet`, `LanguageState`, `GeneralState`) and component props (`Tile`, `SkillsetList`, `About`).
- Normalized all `../` imports to `jsconfig` base-URL aliases (`common/...`, `content/...`, `features/portfolio/...`) and promoted `import/no-relative-parent-imports` to `error`.
- Renamed `src/Redux` to `src/slices` to avoid the `redux` package name collision and updated all `Redux/...` imports to `slices/...`.
- `npm run lint`, `npm run format:check`, and `npm run build` all pass with no warnings or errors.
- `Navigation/index.js` no longer imports `themes.js` for runtime breakpoints; it reads `--breakpoint-xl2` from CSS custom properties.
- Centered the hero section on the screen by adjusting `HomeWrapper` padding and adding `align-content: center` plus `min-height: calc(100vh - var(--nav-height))` to `ContentImageContainer`.
- Added `src/content/translations.test.js` to assert that `translations.js`, `skillsets.js` exports, and `projects.js` all use `English`, `Polish`, and `Spanish` consistently.
- Decided to keep `src/content/projects.js` and `src/content/skillsets.js` as JS data modules and exclude them from the 300-line size check; content parity is enforced by the test suite instead.
- Verified `framer-motion` is still used by `ToolsShowcase/styled.js` (via `motion.*` styled components) and kept it in `package.json`.
- Added component regression tests for `Navigation`, `LanguageSwitch`, `Tile`, and `Contact`, plus `src/test-utils.js` and a `matchMedia` mock in `src/setupTests.js`.
- `README.md` and `plan/ai-readiness-30-day-plan.md` updated to reflect the completed 30-day AI Readiness & Proportionality work.
- Split `ToolsShowcase/styled.js` into `showcaseLayout.js`, `orbitDecorations.js`, and `exploreLayout.js`, and split `OrbitSection.js` into `OrbitSection.styles.js`, `useWindowWidth.js`, and `getOrbitDimensions.js` so all files are under 300 lines.
- Simplified `OrbitSection` by removing the `BreathingRing` pulse and reducing orbit dimensions so the `MY TECHNOLOGY STACK` text fits without cropping; kept `LinesSvg` connecting lines and removed the `ToolsShowcaseWrapper` top/bottom section borders.
- Redesigned the `About` section with a two-column layout: a `CodeTerminal` component showing the "From Embedded to Full-Stack" class on the left and a `MY JOURNEY` content panel with a gradient heading, journey paragraph, and four feature cards on the right.
- Completed Week 1 of the 30-day cleanup: moved `StarField` and `Main` out of `src/GlobalStyles.js` into `src/common/StarField/` and `src/common/Main/`, made `StarField` deterministic with a seeded pseudo-random generator, and split `translations` out of `src/themes.js` by introducing `src/common/useContent.js`.
- `src/themes.js` now exports only the `breakpoint` map; all localized copy is read through `useContent` in `About`, `Contact`, `Footer`, `Home`, and `SkillsetContainer`.
- `npm run lint`, `npm run size-check`, and `npm test` pass after the Week 1 boundary cleanup.

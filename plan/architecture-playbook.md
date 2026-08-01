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

- **What:** `src/GlobalStyles.js` declares `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, `var(--shadow-*)`, and `var(--transition-*)`. Dark mode flips these values via the `data-theme="dark"` attribute on `<html>`.
- **Why:** CSS variables update instantly without re-rendering the styled-components tree; `styled-components` still provides scoped, co-located styles for components; theming is decoupled from JavaScript.
- **Trade-offs:** `styled-components` `ThemeProvider` is kept only to inject `theme.breakpoint`; it no longer drives color/spacing values, which reduces its dynamic capabilities.
- **Future guidance:** Add any new design token to `:root` and its `data-theme="dark"` mirror. Never hardcode colors or spacing in `styled.js` files.

### Decision: Reduce `src/themes.js` to breakpoints and content

- **What:** `src/themes.js` now exports an object with `breakpoint` and spreads `translations` from `src/content/translations.js`. Color, spacing, radius, shadow, and transition maps were removed.
- **Why:** Those maps duplicated the CSS custom properties in `GlobalStyles.js`; keeping both in sync was error-prone. Reducing `themes.js` makes the breakpoint object explicit and lets content live in `src/content`.
- **Trade-offs:** `themes` still mixes design tokens (`breakpoint`) with content (`translations`); this is a partial split.
- **Future guidance:** If more JavaScript-only tokens are needed, split `src/themes.js` into `src/themes/breakpoints.js` and `src/themes/index.js`.

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

- **What:** English, Polish, and Spanish copy lives in `src/content/translations.js`. Shared skill data was moved to `src/content/skillsets.js`. Project data remains in `src/features/portfolio/Projects/projects.js` because it imports local image assets that break CRA's module scope when moved outside `src/features/portfolio/Projects` without path aliases. Menu items remain in `src/common/Navigation/menuItems.js`.
- **Why:** No extra i18n dependency is needed; content can contain HTML strings and be co-located with the consuming feature; imports are static and simple.
- **Trade-offs:** No fallback language chain, no runtime language lazy-loading, and content is bundled into the JavaScript. Adding a language requires updating every content file.
- **Future guidance:** If a CMS or more languages are added, migrate to a `src/locales/` JSON structure or introduce `react-i18next`. Until then, keep content objects isomorphic across all three languages.

### Decision: `LanguageSwitch` dispatches `setLanguage`; components read `selectLanguage`

- **What:** `src/common/LanguageSwitch/index.js` dispatches `setLanguage()`. `App.js` and section components use `useSelector(selectLanguage)` to choose localized content.
- **Why:** A single Redux action makes language switching predictable and easy to trace.
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

## 12. Appendix: `feature/ui-refresh` changes

- Removed dead code: unused `ScrollWatcher` import in `App.js`, unused `slideToggle` keyframes in `DarkModeToggle`, and unused `ref` parameter in `Footer`.
- Deleted the dead `src/common/ScrollWatcher` folder during the 30-day stabilization pass.
- Removed the unused `react-router` dependency from `package.json`.
- Moved `skillsets.js` data from `src/features/portfolio/Home/SkillsetContainer` to `src/content/skillsets.js`.
- Created `plan/next-30-days-a29356.md` to track the 30-day architecture stabilization plan.
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

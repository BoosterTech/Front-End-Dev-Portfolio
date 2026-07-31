# Portfolio Refresh Plan

## 0. Status

All planned items are complete and `npm run build` passes cleanly. The `feature/ui-refresh` branch is ready for final review.

## 1. Project Understanding

### What it is
A single-page, multi-language (EN/PL/ES) personal portfolio for **Dariusz Podczasik** (`Derek.dev`).  
It is a scrollable React app with:
- Smooth section navigation (`react-scroll`)
- Dark/light mode toggle
- Language switch
- Animated project showcase
- Contact links

### Purpose
- Present the author's frontend skills and finished projects.
- Provide a simple way to switch languages and theme.
- Host a static, GitHub Pages-friendly site.

---

## 2. Tech Stack

- **Build tool:** Create React App (`react-scripts 5.0.1`)
- **Framework:** React 18
- **Styling:** `styled-components` + CSS custom properties in `src/GlobalStyles.js`
- **State management:** Redux Toolkit (`@reduxjs/toolkit`)
- **Scroll navigation:** `react-scroll`
- **Icons:** `react-icons`
- **Deployment:** `gh-pages`

> Note: The `README.md` lists technologies such as Next.js, TypeScript, and Tailwind CSS that are **not currently used** in the codebase.

---

## 3. Folder Structure

```
Front-End-Dev-Portfolio/
├── public/
│   ├── index.html
│   ├── icon.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── index.js
│   ├── GlobalStyles.js
│   ├── themes.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── common/
│   │   ├── DarkModeToggle/
│   │   ├── LanguageSwitch/
│   │   ├── Navigation/
│   │   ├── ScrollWatcher/
│   │   └── slowEntry.js
│   ├── features/
│   │   └── portfolio/
│   │       ├── Home/
│   │       │   └── SkillsetContainer/
│   │       ├── About/
│   │       ├── Projects/
│   │       │   ├── Tile/
│   │       │   └── ComingSoonProject/
│   │       ├── Contact/
│   │       └── Footer/
│   └── Redux/
│       ├── store.js
│       ├── languageSlice.js
│       └── generalSlice.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## 4. Architecture & Conventions

- **Entry point:** `src/index.js` mounts the React root and wraps the app in `Provider`, `ThemeProvider`, and `React.StrictMode`.
- **Routing:** No real routing — it is a single-page app with scroll-to-section via `react-scroll`.
- **Layout:** `App.js` renders `Navigation` plus a `<Main>` section containing `Home`, `About`, `Projects`, `Contact`, and finally `Footer` outside `<Main>`.
- **State:**
  - `language` is stored in Redux and consumed throughout the app.
  - `isContactVisible` is tracked via an `IntersectionObserver` to highlight the Contact nav item.
- **Styling conventions:**
  - Each component folder usually contains `index.js` (logic) + `styled.js` (styles).
  - `styled-components` are used for almost everything.
  - `src/themes.js` holds design tokens and all copy in three languages.
  - `src/GlobalStyles.js` holds CSS custom properties and base styles.
  - CSS variables are toggled for dark mode by `data-theme="dark"` on `<html>`.

---

## 5. Existing Constraints & Business Logic

- **Dark mode:** `DarkModeToggle` reads `localStorage` and `prefers-color-scheme`, then sets `data-theme="dark"` and persists the choice.
- **Language:** `LanguageSwitch` dispatches `setLanguage()`; all UI text is pulled from `themes.js` / `projects.js` based on the selected language.
- **Navigation:**
  - `Navigation` maps `menuItems[language]` to `react-scroll` `Link` components.
  - On smaller screens it shows icons instead of labels.
  - Contact active state is forced when `isContactVisible` is true.
- **Home:** Shows a hero header, profile picture, tech-stack icon row, and a `SkillsetContainer`.
- **About:** Renders a spinner SVG, overlay image, and HTML biography from `themes.js`.
- **Projects:** Maps over `projects.js`, renders `Tile` for each and a special `ComingSoonProject` for the WTM project.
- **Contact:** Displays contact icons and dispatches contact visibility on scroll.
- **Footer:** Shows a short copyright line.
- **ESLint warnings (fixed):**
  - `src/App.js` — removed unused `ScrollWatcher` import.
  - `src/common/DarkModeToggle/index.js` — removed unused `slideToggle` keyframes.

---

## 6. Update Status

### Quick wins ✅
- [x] **Remove dead code / unused imports**
  - `src/App.js` — removed `ScrollWatcher` import and commented usage.
  - `src/common/DarkModeToggle/index.js` — removed `slideToggle` keyframes.
  - `src/features/portfolio/Footer/index.js` — removed unused `ref` parameter.
- [x] **Fix ESLint warnings** so build runs clean.

### Structural improvements ✅
- [x] **Centralize animations**  
  Created `src/common/animations.js`; `Navigation`, `Home`, `About`, `Projects`, `Contact`, `Footer`, and `ComingSoonProject` now import shared keyframes.
- [x] **Unify the theme system**  
  Removed duplicated `color`/`spacing`/`radius`/`shadow`/`transition` maps from `src/themes.js`. Theme variables now live as CSS custom properties in `src/GlobalStyles.js`; `src/themes.js` only holds breakpoints and imports `translations`.
- [x] **Split content from design tokens**  
  Moved EN/PL/ES text out of `src/themes.js` into `src/content/translations.js`.

### Style fixes
- [x] **Fix hardcoded / inconsistent styles (partial)**
  - [x] `SkillsetContainer` — uses `var(--color-border)`, `var(--color-primary)`, and theme spacing.
  - [x] `LanguageSwitch` — uses `var(--color-border)` / `var(--color-primary)` and `var(--transition-normal)`.
  - [x] `Projects` — `xxxl` breakpoints changed to `lg`.
  - [x] `Home` — replaced `!important` and magic `220px` offset with `--nav-height` / `--nav-height-mobile` variables.
- [x] **Share gradient heading style** — extracted `GradientHeading` to `src/common/GradientHeading` and used it in `Home` and `About`.
- [x] **Refactor Projects special-case** — added `variant: "comingSoon"` to `projects.js` and checked it in `Projects/index.js`.

### Accessibility / metadata
- [x] **Fix `public/index.html` metadata** — replaced invalid meta, added description and Open Graph tags.
- [x] **Reduce `dangerouslySetInnerHTML` usage** — created `RichText` component and used it in `About` and `ComingSoonProject`.

---

## 7. Suggested Order of Work

1. [x] Dead code / lint cleanup (fast, safe).
2. [x] Centralize animations (reduces file size and duplication).
3. [x] Unify theme / move content to `src/content` (biggest structural improvement).
4. [x] Fix hardcoded styles and breakpoint mistakes.
5. [x] Polish accessibility and metadata.

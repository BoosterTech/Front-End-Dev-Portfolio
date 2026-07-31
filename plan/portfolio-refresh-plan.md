# Portfolio Refresh Plan

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
- **ESLint warnings (current):**
  - `src/App.js` imports `ScrollWatcher` but it is commented out / not used.
  - `src/common/DarkModeToggle/index.js` declares `slideToggle` keyframes but never uses them.

---

## 6. Proposed Updates

### Quick wins
1. **Remove dead code / unused imports**
   - `src/App.js` — remove the `ScrollWatcher` import or remove the component entirely.
   - `src/common/DarkModeToggle/index.js` — remove the unused `slideToggle` keyframes.
   - `src/features/portfolio/Footer/index.js` — remove the unused `ref` parameter.

2. **Fix ESLint warnings** so `npm start` runs clean.

### Structural improvements
3. **Centralize animations**  
   Create `src/common/animations.js` and import `gradientShift`, `waveHand`, `fadeInUp`, `float`, `spin`, etc., instead of redefining them in every `styled.js`.

4. **Unify the theme system**  
   Design tokens are duplicated in `src/themes.js` and `src/GlobalStyles.js` CSS variables. Pick one source of truth:
   - Keep CSS variables and make `themes.js` a breakpoints-only object, **or**
   - Use the `themes` object fully and drop the CSS variables.

5. **Split content from design tokens**  
   Move EN/PL/ES text out of `src/themes.js` into a `src/content/` or `src/locales/` directory (`home.js`, `about.js`, `projects.js`). Keep `themes.js` for design tokens only.

### Style fixes
6. **Fix hardcoded / inconsistent styles**
   - `src/features/portfolio/Home/SkillsetContainer/styled.js` — use `var(--color-border)` / `var(--color-primary)` instead of hardcoded `grey` and `blue`.
   - `src/common/LanguageSwitch/styled.js` — active border `#298edd` should be `var(--color-primary)`.
   - `src/features/portfolio/Home/styled.js` — remove `!important` on top padding and reduce magic `220px` offsets.
   - `src/features/portfolio/Projects/styled.js` — the mobile breakpoint is `xxxl` (1920px), which is clearly wrong; use `lg` or `xl`.

7. **Share gradient heading style**  
   `ContentHeader` in `Home` and `Header` in `About` use the same gradient pattern. Extract a `GradientHeading` reusable component.

8. **Refactor Projects special-case**  
   `src/features/portfolio/Projects/index.js` detects the WTM project by title string. Replace this with a data-driven prop (e.g., `variant: "comingSoon"`) in `projects.js`.

### Accessibility / metadata
9. **Fix `public/index.html` metadata**  
   The meta tag `<meta name="Derek.dev" content="...">` is not a valid meta name. Use `name="description"` and add `og:title`, `og:description`, and `lang` updates when the language changes.

10. **Reduce `dangerouslySetInnerHTML` usage**  
    Project descriptions and the About paragraph are passed as raw HTML. Keep them if needed, but consider a small markdown-to-JSX helper or structured content to avoid security/encoding issues.

---

## 7. Suggested Order of Work

1. Dead code / lint cleanup (fast, safe).
2. Centralize animations (reduces file size and duplication).
3. Unify theme / move content to `src/content` (biggest structural improvement).
4. Fix hardcoded styles and breakpoint mistakes.
5. Polish accessibility and metadata.

# AGENTS.md

Conventions contract for AI agents and contributors working in this repository.
Read this before generating code.

## What this is

Personal portfolio SPA ("Derek.dev") — React 18, Create React App, styled-components,
Framer Motion. Static site deployed to GitHub Pages. No backend, no API layer, no
auth, no database, no state library. Keep it that way.

## Structure

- `src/features/portfolio/<Section>/` — feature folders (Home, About, Projects, Contact)
- `src/common/` — shared primitives only (Button, Card, Navigation, GradientHeading, …).
  Do not add a common/ component for a single consumer.
- `src/content/` — all user-facing copy (`translations.js`, `projects.js`)
- Styles live in a co-located `styled.js` (or `<Name>.styles.js`) per component folder
- `plan/` — architecture and roadmap docs; `architecture-playbook.md` is the source of truth,
  `premium-ux-followup-plan.md` tracks active work, `plan/archive/` holds superseded plans

## Hard rules (CI-enforced)

1. **No hardcoded colors in `src/` JS.** No hex, `rgb()/rgba()` with literals, or bare
   `white`/`black`. Use `var(--color-*)`; for alpha use `rgb(var(--color-*-rgb) / <a>)`.
   Allowlist: `styles/tokens.js`, `contactIcons.js`, `common/animations.js`.
   Verified by `npm run check:colors`.
2. **300-line cap per source file.** `projects.js` is exempt (data). `npm run size-check`.
3. **No circular imports.** `npm run check:circular`.
4. **Import order + absolute imports.** `baseUrl: src`; never `../` parent imports.
5. **Tests must stay green.** `npm test` (CI=true). Coverage floor: 70%.

## Styling conventions

- styled-components v6: transient props always (`$active`, not `active`)
- Theme values via CSS custom properties from `src/styles/tokens.js`; never hardcode
  spacing, radius, z-index, or breakpoints
- Breakpoints from `src/themes.js`: `lg` (768px) is THE mobile/desktop boundary for
  section layouts; `xl2` (1100px) is the nav compact boundary. Don't invent others.
- Media queries go at the end of a styled block, mobile-first ordering
- Accent text uses the shared animated gradient: `gradientShift 15s ease-in-out infinite`,
  `background-size: 200% 200%` — see `common/GradientHeading`
- Horizontal overflow rails use the mask-fade pattern (`overflow-x: auto` +
  `mask-image: linear-gradient(...)` edge fades) — copy an existing rail (marquee,
  explore track, badge row) rather than inventing a fourth variant
- Respect `prefers-reduced-motion` for animation

## i18n

- Every UI string goes through `content/translations.js` — English, Polish, Spanish
  required for every key (`translations.test.js` enforces parity)
- Components read copy via `useContent()`; no hardcoded user-facing text

## Testing

- React Testing Library + `renderWithProviders` from `src/test-utils.js`
  (options: `initialLanguage`, `initialIsContactVisible`)
- `setupTests.js` mocks `matchMedia` (default `matches: false`), `IntersectionObserver`,
  `ResizeObserver` — override per-test via `Object.defineProperty(window, "matchMedia", …)`
- `testing-library/no-node-access` is enforced: no `.closest()`, `.parentElement`,
  `querySelector`. Scope duplicate markup with `data-testid` (see `Navigation/index.js`
  `desktop-menu`/`mobile-menu`/`nav-link-*` hooks)
- Remember: components may render both desktop and mobile structures; scope queries

## Verify before committing

```
npm test            # CI=true, all green
npm run lint
npm run format:check
npm run check:colors
npm run check:circular
npm run size-check
npm run build       # before shipping UI changes
```

## Commits

- Conventional Commits, atomic scope (`feat(nav):`, `test:`, `chore:`, `style(theme):`)
- Never commit build output, `.env*`, or editor files

## Do NOT add

- TypeScript migration, state libraries, backend/API layers, routers, monorepo tooling,
  pre-commit hooks, visual regression infra, ESLint boundary plugins — all premature
  for a 6.9K-line static portfolio. See `plan/architecture-proportionality-audit.md`.

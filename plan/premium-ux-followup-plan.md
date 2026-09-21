# Premium UX Follow-Up Plan

**Date:** 2026-09-02
**Branch:** `feature/ui-refresh`
**Source:** UI polish session + proportionality audit

---

## Completed this session

- ToolsShowcase: mobile orbit → marquee rail, explore chip rail (edge fade, uniform height, icon-led), breakpoint unified at `lg`, overflow hardening (`minmax(0,1fr)` + `overflow-x: clip`), star label parity, conditional heading breaks
- About/Journey: scroll reveals, mobile editorial rows, pill/heading/paragraph metric parity with ToolsShowcase, terminal `object-position: left top` fix, `aria-hidden` on decorative terminal
- Projects: mobile CTAs removed (modal holds links), swipe → framer-motion physics drag (elastic + velocity + click suppression), arrows hidden ≤md, one-row faded badges, softer active glow
- Global: `gradientShift 15s` unified across all header accent words, button metrics unified
- Commits: `32c41f4` nav, `7844715` tools-showcase, `a7fa4dc` about, `39d0685` hero, `d9d2d38` theme
- **Uncommitted:** Projects carousel refinements (drag, badges, scrim) — commit as `feat(projects):`

---

## P0 — Gate integrity (do first)

| # | Task | Effort | Why |
|---|------|--------|-----|
| 1 | Fix `Navigation.test.js` (5 fails — tests set `window.innerWidth`, component uses `matchMedia`; mock `matchMedia` in test) | M | Red suite teaches AI agents failure is normal |
| 2 | Fix `CarouselSlide.test.js` (3 fails — missing required `onExpand` prop in test) | S | Same |
| 3 | Fix remaining `check:colors` violations in `ProjectModal.styles.js` (`rgba(0,0,0,0.8)`, `rgba(0,0,0,0.5)`) → `rgba(var(--color-black-rgb), …)` | XS | Zero-tolerance gate or no gate |
| 4 | Delete `SkillsetContainer/` + its test — dead code, zero importers | XS | Dead code is a template agents copy |
| 5 | Commit pending Projects changes as `feat(projects): physics drag carousel and mobile card polish` | XS | Tree should be clean |

## P1 — AI-readiness (30-day)

| # | Task | Effort | Why |
|---|------|--------|-----|
| 6 | Create `AGENTS.md`: breakpoints (`lg` = mobile boundary), token rules (no hardcoded colors), transient `$` props, rail/section-intro patterns, verification commands | S | Single highest-leverage AI guardrail |
| 7 | Extract shared `HorizontalRail`/mask-fade pattern — marquee, explore track, badge row are 3 independent copies | M | Prevents copy #4 |
| 8 | Extract `SectionIntro` (label pill + heading + description) — manually aligned today, will drift again | S | Freeze the pattern |
| 9 | Move ToolsShowcase copy into `translations.js` — only section with hardcoded English | S–M | i18n consistency |
| 10 | Light-theme the terminal tokens (`--color-terminal-bg`, `--color-code-*`) and delete `code_terminal_light_theme.webp` + `object-position` band-aid | S | Removes the square-image-over-DOM hack, ~43 KB |

## P2 — Hygiene

| # | Task | Effort |
|---|------|--------|
| 11 | Remove `console.log` in `src/index.js` (or gate behind env check) | XS |
| 12 | Consolidate `plan/` into one living doc — 7 overlapping files, unclear which is truth | S |
| 13 | Optional: co-locate `GradientHeading`, `RichText`, `StarField`, `Main` (1 consumer each) or leave — cosmetic | XS |
| 14 | Optional: `Tile/` vs `CarouselSlide/` coexistence — verify both are actually used | XS |

## Explicitly deferred (premature)

- TypeScript migration, ESLint boundary plugins, visual regression, husky pre-commit, ADR ceremony, state library
- Lighthouse + Playwright E2E stay as-is — heavy but already built and green

## Verification loop (every change)

```
npx eslint <files> && npx prettier --write <files>
node scripts/check-hardcoded-colors.js
CI=true npx react-scripts test --watchAll=false
```

Visual check at ~375px and desktop after UI changes.

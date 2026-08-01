# 30-Day Architecture Stabilization Plan

Stabilize the portfolio codebase for AI-generated contributions by removing dead code, separating data from UI, adding a build gate, and simplifying imports.

## Week 1 — Cleanup

1. Delete the dead `src/common/ScrollWatcher` folder and any commented `ScrollWatcher` references.
2. Remove `react-router` from `package.json` dependencies; it is not used.
3. Move `src/features/portfolio/Home/SkillsetContainer/skillsets.js` data to `src/content/skillsets.js` or `public/data/skillsets.json`.
4. Move `src/features/portfolio/Projects/projects.js` data to `src/content/projects.js`.

## Week 2 — Structure

1. Add a `jsconfig.json` with `baseUrl: "src"` and path aliases for `@/common`, `@/content`, `@/features`.
2. Replace deep relative imports (`../../../common/...`) with aliases where touched.
3. Split `src/features/portfolio/Home/styled.js` into smaller co-located style modules if it grows beyond 400 lines.

## Week 3 — CI & Quality

1. Add a GitHub Actions workflow that runs `npm ci` and `npm run build` on every push/PR.
2. Add a smoke test in `src/App.test.js` that renders `<App />` and checks for the welcome label text.
3. Add a lightweight file-size check script to warn when any source file exceeds 300 lines.

## Week 4 — Polish & Handoff

1. Move `src/features/portfolio/About/SpinnerSvg.js` to `public/spinner.svg` and import it as an asset.
2. Keep `themes.js` for breakpoints only; move any remaining copy to `src/content/translations.js`.
3. Run `npm run build`, verify no warnings, and commit each week as an atomic PR.

## Success Criteria

- `npm run build` passes without warnings.
- No unused dependencies in `package.json`.
- No dead code in `src/common/`.
- All data files live under `src/content/`.
- CI runs on every PR.

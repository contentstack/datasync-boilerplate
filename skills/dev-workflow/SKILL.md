---
name: dev-workflow
description: Use for npm scripts, GitHub Actions, branching, and day-to-day repo workflow.
---

# Dev workflow – Contentstack DataSync Boilerplate

## When to use

- Changing or documenting how the app is run or cleaned
- Touching CI or security scanning behavior
- Aligning with how PRs are validated in this repository

## Instructions

- **Scripts** (from `package.json`): `npm start` runs `clean` then `node index.js`; `npm run continue` runs `index.js` without cleaning; `npm run clean` runs `clean.js`.
- **CI** (`.github/workflows/`): SCA via Snyk on PRs; policy checks (e.g. `SECURITY.md`, license) for public repos; CodeQL on PRs; Jira integration for issues. No dedicated workflow runs `npm test` (there is no test script).
- **Dependencies**: Managed with npm; `overrides` in `package.json` pins `lodash` for supply-chain consistency—coordinate changes with security tooling expectations.

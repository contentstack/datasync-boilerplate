# Contentstack DataSync Boilerplate – Agent guide

**Universal entry point** for contributors and AI agents. Detailed conventions live in **`skills/*/SKILL.md`**.

## What this repo is

| Field | Detail |
|--------|--------|
| **Name:** | [contentstack/datasync-boilerplate](https://github.com/contentstack/datasync-boilerplate) |
| **Purpose:** | Skeleton app to run Contentstack DataSync: webhook listener, asset/content stores (filesystem or MongoDB), and `@contentstack/datasync-manager` wiring. |
| **Out of scope (if any):** | Not a published npm library; product behavior lives in Contentstack DataSync packages (`package.json` dependencies). |

## Tech stack (at a glance)

| Area | Details |
|------|---------|
| Language | JavaScript (CommonJS), Node.js **20+** |
| Build | npm; entry `index.js`; config under `config/` |
| Tests | No automated test runner or `test` script in this repo |
| Lint / coverage | ESLint (`.eslintrc.js`); no coverage tooling configured |
| Runtime | Long-running DataSync process; `NODE_ENV` selects `config/<env>.js` when present |

## Commands (quick reference)

| Command type | Command |
|--------------|---------|
| Install | `npm install` |
| Run (clean + start) | `npm start` |
| Run without clean | `npm run continue` |
| Clean synced output | `npm run clean` |
| Lint | `npx eslint .` |

**CI:** [`.github/workflows/sca-scan.yml`](.github/workflows/sca-scan.yml) (Snyk), [`.github/workflows/policy-scan.yml`](.github/workflows/policy-scan.yml), [`.github/workflows/codeql-analysis.yml`](.github/workflows/codeql-analysis.yml), [`.github/workflows/issues-jira.yml`](.github/workflows/issues-jira.yml).

## Where the documentation lives: skills

| Skill | Path | What it covers |
|-------|------|----------------|
| Dev workflow | [`skills/dev-workflow/SKILL.md`](skills/dev-workflow/SKILL.md) | Branches, CI touchpoints, npm scripts |
| DataSync app | [`skills/datasync-boilerplate/SKILL.md`](skills/datasync-boilerplate/SKILL.md) | Entry flow, config, DataSync modules |
| JavaScript / Node | [`skills/javascript-node/SKILL.md`](skills/javascript-node/SKILL.md) | Linting and code style for this repo |
| Testing | [`skills/testing/SKILL.md`](skills/testing/SKILL.md) | How verification works here (no test suite) |
| Code review | [`skills/code-review/SKILL.md`](skills/code-review/SKILL.md) | PR expectations |

An index with “when to use” hints is in [`skills/README.md`](skills/README.md).

## Using Cursor (optional)

If you use **Cursor**, [`.cursor/rules/README.md`](.cursor/rules/README.md) only points to **`AGENTS.md`**—same docs as everyone else.

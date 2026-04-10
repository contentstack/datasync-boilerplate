---
name: testing
description: Use for verification strategy, secrets handling, and any future automated tests.
---

# Testing – Contentstack DataSync Boilerplate

## When to use

- Checking changes before merge without a dedicated test suite
- Deciding how to handle API tokens, webhooks, or local tunnels

## Instructions

- **Current state**: There is no `npm test` script or standard test directory. Rely on `npx eslint .`, manual runs (`npm start` / `npm run continue`) against non-production stacks, and CI security scans on PRs.
- **Secrets**: Never commit real `apiKey`, delivery tokens, or checkpoint files with live tokens. Use environment-appropriate `config/*.js` or secure injection per team practice.
- **Local integration**: Webhooks require a public URL (e.g. ngrok) and Contentstack webhook configuration—see root [`README.md`](../../README.md) prerequisites.
- **Adding tests**: If introducing a runner, add scripts to `package.json` and document them in [`AGENTS.md`](../../AGENTS.md) and [`dev-workflow/SKILL.md`](../dev-workflow/SKILL.md).

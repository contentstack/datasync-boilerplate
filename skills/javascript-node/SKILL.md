---
name: javascript-node
description: Use for ESLint, formatting, and JavaScript/Node conventions in this repository.
---

# JavaScript / Node – Contentstack DataSync Boilerplate

## When to use

- Editing `.eslintrc.js` or fixing lint findings
- Keeping new files consistent with existing CommonJS style

## Instructions

- **Lint**: Run `npx eslint .` from the repo root (no `lint` npm script). Config is [`.eslintrc.js`](../../.eslintrc.js): `eslint:recommended` plus indent, linebreak, quotes, and `semi` rules—match ESLint output and the style of files you edit.
- **Modules**: Use CommonJS (`require` / `module.exports`) to match `index.js`, `config/`, and dependencies.
- **Environment**: Target Node; match `ecmaVersion` / parser options to `.eslintrc.js` when changing tooling.

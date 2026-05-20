---
name: code-review
description: Use when authoring or reviewing pull requests for this repository.
---

# Code review – Contentstack DataSync Boilerplate

## When to use

- Preparing a PR or reviewing someone else’s changes
- Ensuring security and operational expectations are met

## Instructions

- **Scope**: Keep changes focused; this repo is a thin composition layer over Contentstack DataSync packages—avoid unrelated refactors.
- **Quality**: Run `npx eslint .`; ensure config edits don’t encourage committing secrets; document user-visible behavior changes in the PR description.
- **CI**: PRs trigger Snyk, policy, CodeQL, and related workflows—fix or explain new findings.
- **Severity (optional)**: **Blocker** — broken startup, leaked credentials, unsafe defaults; **Major** — incorrect DataSync wiring or config contract; **Minor** — style, comments, non-user-facing cleanup.

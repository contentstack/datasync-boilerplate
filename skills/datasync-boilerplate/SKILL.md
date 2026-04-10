---
name: datasync-boilerplate
description: Use for DataSync wiring—index.js, config, listener, asset/content stores, and Contentstack settings.
---

# DataSync boilerplate app – Contentstack DataSync Boilerplate

## When to use

- Editing startup, checkpoint, or plugin behavior
- Choosing or configuring content store, asset store, or listener modules
- Documenting or fixing integration with Contentstack delivery API / webhooks

## Instructions

- **Entry point**: `index.js` loads `config/all.js`, merges `config/<NODE_ENV>.js` when that file exists (else `config/development.js`), optionally reads a checkpoint file for `sync_token`, then wires `datasyncManager` with listener, asset store, and content store from **module paths in config** (`listenerModule`, `assetStoreModule`, `contentStoreModule`).
- **Configuration**: Put stack credentials and module names in `config/`—see product docs in root [`README.md`](../../README.md) for `apiKey`, delivery token, `host`, and webhook setup (ngrok, `/notify`, publish actions).
- **Published packages**: Behavior is implemented in `@contentstack/datasync-manager`, `@contentstack/webhook-listener`, and the filesystem/MongoDB store packages listed in `package.json`; this repo only composes them.
- **Plugins**: Custom plugins live under `plugins/` per patterns already described in `config/all.js`.

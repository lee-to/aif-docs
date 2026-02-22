# AGENTS.md

## MUST

- Always use the `nuxt-content` skill for any task in this repository (`.ai/skills/nuxt-content/SKILL.md`).
- Use `bun`/`bunx` for all commands. If some instruction says `npx ...`, translate it to `bunx ...`.
- For any Nuxt UI component or API questions, consult the Nuxt UI MCP server (`nuxt-ui`) first.

## Project

This repo is a documentation site for the `lee-to/ai-factory` library.

## Stack

- Nuxt 4
- Nuxt Content v3 (`@nuxt/content`)
- Nuxt UI 4.4 (used by the app, but do not require a dedicated skill)

## Commands (Bun)

```bash
bun install
bun run dev
bun run build
bun run preview
bun run lint
bun run typecheck
```

## Content

- `content.config.ts` defines collections (`landing`, `docs`).
- Content lives in `content/`.

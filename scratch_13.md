# AI Factory 2.0 — Release Notes

## Highlights

- Full migration to `aif-*` skill naming.
- Added `ai-factory upgrade` for v1 -> v2 migration.
- Major expansion of multi-agent support.
- Introduced new workflow skills: `/aif-plan`, `/aif-roadmap`, `/aif-rules`, `/aif-loop`.
- Added Reflex Loop (`/aif-loop`) for iterative quality-gated generation.
- Improved DX and docs (installation, MCP, migration, docs structure).

## Breaking Changes

- v2 skills use `aif-*` names only.
    - Example: old bare names (`commit`, `feature`, etc.) are replaced by `/aif-*`.
- For existing v1 installations, run a 2-step upgrade:

```bash
npm install -g ai-factory@latest
ai-factory upgrade
```

## Key Changes by Area

### Workflow and Skills

- Added/improved core planning and execution workflow skills.
- Added dedicated `roadmap` and `rules` workflows.
- Added Reflex Loop with phases PLAN -> PRODUCE||PREPARE -> EVALUATE -> CRITIQUE -> REFINE.
- Token optimization and contract improvements across multiple skills.

### CLI and Platform

- Added a migration command path for 1.x -> 2.x.
- Expanded multi-agent installation and configuration support.
- Improved agent-specific integrations (`OpenCode`, `Claude MCP`, etc.).

### Documentation and DX

- Updated user docs for workflow, configuration, and onboarding.
- Updated install guidance (`npm`, `mise`, `npx`).
- Added explicit v1 -> v2 upgrade steps in README and getting-started docs.

**Full Changelog**: https://github.com/lee-to/ai-factory/compare/1.8.0...2.0.0
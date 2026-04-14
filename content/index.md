---
seo:
  title: AI Factory
  description: Stop configuring. Start building. One command to set up an AI-powered development environment.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Stop configuring. Start building.

#description
AI Factory handles context, prompts, skills, and workflows so your AI agent can focus on shipping quality code.

#links
  :::u-button
  ---
  to: /getting-started/installation
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Install and run
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/lee-to/ai-factory
  target: _blank
  ---
  View on GitHub
  :::

#default
  ::code-group
  
  ```bash [bun]
  bun add -g ai-factory
  ```
  
  ```bash [pnpm]
  pnpm add -g ai-factory
  ```
  
  ```bash [yarn]
  yarn global add ai-factory
  ```
  
  ```bash [npm]
  npm i -g ai-factory
  ```

  ```bash [mise]
  mise use -g npm:ai-factory
  ```

  ::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Why AI Factory

#description
Everything you need to go from idea to reviewed, production-ready code with predictable AI workflows.

#features
  :::u-page-feature
  ---
  icon: i-lucide-zap
  ---
  #title
  Zero configuration

  #description
  Installs relevant skills, configures integrations, and bootstraps the AI context for your project.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  Best practices built in

  #description
  Logging, commits, review, docs checkpoints, and safety checks are part of the default flow.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-list-checks
  ---
  #title
  Spec-driven workflow

  #description
  Explore, verify, plan, implement, and evolve with predictable artifacts instead of ad-hoc prompts.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-network
  ---
  #title
  Skills ecosystem

  #description
  Use community skills from skills.sh, generate your own, or attach project-specific references.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-wrench
  ---
  #title
  Stack agnostic

  #description
  Works with any language, framework, or platform instead of assuming one happy-path stack.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-users
  ---
  #title
  Multi-agent support

  #description
  Claude Code, Cursor, Windsurf, Roo Code, Codex CLI, GitHub Copilot, Qwen Code, and more.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
---
title: How it works
description: A simple workflow that scales from small fixes to multi-week features.
---
::u-page-grid
  :::u-page-card
  ---
  title: Init
  icon: i-lucide-terminal
  ---
  #description
  Run <span class="inline-code">ai-factory init</span> once to set up context, skills, and MCP integrations.
  :::

  :::u-page-card
  ---
  title: Explore
  icon: i-lucide-search
  ---
  #description
  Use <span class="inline-code">/aif-explore</span> or <span class="inline-code">/aif-grounded</span> when you need discovery or certainty before planning.
  :::

  :::u-page-card
  ---
  title: Plan and build
  icon: i-lucide-hammer
  ---
  #description
  Turn direction into a plan with <span class="inline-code">/aif-plan</span>, then execute with <span class="inline-code">/aif-implement</span>.
  :::
::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Supported agents

#description
AI Factory works across the major AI coding agents and CLIs.

#default
::card-group{class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}
  :::u-page-card
  ---
  title: Claude Code
  icon: i-simple-icons-anthropic
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Structured planning, implementation, and bundled agent files.
  :::

  :::u-page-card
  ---
  title: Cursor
  icon: i-simple-icons-cursor
  spotlight: true
  to: /getting-started#supported-agents
  ---
  IDE-native workflows with slash commands.
  :::

  :::u-page-card
  ---
  title: Windsurf
  icon: i-simple-icons-windsurf
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Fast iteration with integrated agents.
  :::

  :::u-page-card
  ---
  title: Roo Code
  icon: i-simple-icons-visualstudiocode
  spotlight: true
  to: /getting-started#supported-agents
  ---
  VS Code workflows with skill routing.
  :::

  :::u-page-card
  ---
  title: Kilo Code
  icon: i-simple-icons-codeium
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Lightweight agentic flows with workflows support.
  :::

  :::u-page-card
  ---
  title: Antigravity
  icon: i-simple-icons-rocketdotchat
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Agent-first workflows with skills and workflow files.
  :::

  :::u-page-card
  ---
  title: OpenCode
  icon: i-simple-icons-opensourceinitiative
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Open-source agent workflows.
  :::

  :::u-page-card
  ---
  title: GitHub Copilot
  icon: i-simple-icons-github
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Skills installed into `.github/` with MCP support.
  :::

  :::u-page-card
  ---
  title: Codex CLI
  icon: i-simple-icons-openai
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Terminal-native workflows with `.codex/skills/`.
  :::

  :::u-page-card
  ---
  title: Qwen Code
  icon: i-lucide-bot
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Additional runtime with MCP auto-configuration support.
  :::
::
::

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
AI Factory sets up the right context, prompts, and workflows for your AI agent so you can ship quality code faster.

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
  Detects your stack and configures skills and integrations automatically.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  Best practices built in

  #description
  Logging, commits, code review, and safety checks are part of the default flow.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-list-checks
  ---
  #title
  Spec-driven workflow

  #description
  Plan first, then implement. Predictable, resumable, and reviewable.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-network
  ---
  #title
  Skills ecosystem

  #description
  Use community skills from skills.sh or generate your own.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-wrench
  ---
  #title
  Works with your stack

  #description
  Next.js, Laravel, Django, Express, and more.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-users
  ---
  #title
  Multi-agent support

  #description
  Claude Code, Cursor, Windsurf, Roo Code, and many others.
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
  Run <span class="inline-code">ai-factory init</span> once to set up context and integrations.
  :::

  :::u-page-card
  ---
  title: Plan
  icon: i-lucide-scroll-text
  ---
  #description
  Use <span class="inline-code">/aif-plan</span> to create a step-by-step plan that is easy to track.
  :::

  :::u-page-card
  ---
  title: Implement
  icon: i-lucide-hammer
  ---
  #description
  Execute tasks with <span class="inline-code">/aif-implement</span>, then review and iterate.
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
  Structured planning and implementation flow.
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
  Lightweight agentic flows.
  :::

  :::u-page-card
  ---
  title: Antigravity
  icon: i-simple-icons-rocketdotchat
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Experiment-friendly, agent-first UX.
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
  title: Warp
  icon: i-simple-icons-warp
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Terminal-native AI assistant.
  :::

  :::u-page-card
  ---
  title: Zencoder
  icon: i-simple-icons-jetbrains
  spotlight: true
  to: /getting-started#supported-agents
  ---
  JetBrains-focused automation.
  :::

  :::u-page-card
  ---
  title: Codex CLI
  icon: i-simple-icons-openai
  spotlight: true
  to: /getting-started#supported-agents
  ---
  CLI-first agent workflows.
  :::

  :::u-page-card
  ---
  title: GitHub Copilot
  icon: i-simple-icons-github
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Embedded pair-programming experience.
  :::

  :::u-page-card
  ---
  title: Gemini CLI
  icon: i-simple-icons-google
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Google’s CLI agent.
  :::

  :::u-page-card
  ---
  title: Junie
  icon: i-simple-icons-jetbrains
  spotlight: true
  to: /getting-started#supported-agents
  ---
  JetBrains agent.
  :::

  :::u-page-card
  ---
  title: Any agent
  icon: i-lucide-stars
  spotlight: true
  to: /getting-started#supported-agents
  ---
  Bring your own as long as it supports skills.
  :::
::
::

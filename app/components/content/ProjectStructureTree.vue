<script setup lang="ts">
type TreeItem = {
  id: string
  label: string
  icon?: string
  comment?: string
  defaultExpanded?: boolean
  children?: TreeItem[]
}

const isFolder = (item: TreeItem) =>
  item.icon === 'i-lucide-folder' || item.label.endsWith('/')

const normalizeLabel = (label: string) => label.replace(/\/$/, '').toLowerCase()

const sortTree = (items: TreeItem[]): TreeItem[] => {
  const sorted = [...items].sort((a, b) => {
    const aFolder = isFolder(a)
    const bFolder = isFolder(b)

    if (aFolder !== bFolder) return aFolder ? -1 : 1

    return normalizeLabel(a.label).localeCompare(normalizeLabel(b.label))
  })

  return sorted.map((item): TreeItem => ({
    ...item,
    children: item.children ? sortTree(item.children) : undefined
  }))
}

const items = sortTree([
  {
    id: 'root',
    label: 'your-project/',
    defaultExpanded: true,
    icon: 'i-lucide-folder',
    children: [
      {
        id: 'claude',
        label: '.claude/',
        icon: 'i-lucide-folder',
        defaultExpanded: true,
        comment: 'Agent config dir (varies: .cursor/, .codex/, .ai/, etc.)',
        children: [
          {
            id: 'claude-skills',
            label: 'skills/',
            icon: 'i-lucide-folder',
            defaultExpanded: true,
            children: [
              { id: 'skill-ai-factory', label: 'ai-factory/', icon: 'i-lucide-folder', comment: 'Core context & setup' },
              { id: 'skill-task', label: 'ai-factory.task/', icon: 'i-lucide-folder', comment: 'Plan creation' },
              { id: 'skill-improve', label: 'ai-factory.improve/', icon: 'i-lucide-folder', comment: 'Plan refinement' },
              { id: 'skill-implement', label: 'ai-factory.implement/', icon: 'i-lucide-folder', comment: 'Execute tasks' },
              { id: 'skill-commit', label: 'ai-factory.commit/', icon: 'i-lucide-folder', comment: 'Conventional commits' },
              { id: 'skill-docs', label: 'ai-factory.docs/', icon: 'i-lucide-folder', comment: 'Docs generation' },
              { id: 'skill-review', label: 'ai-factory.review/', icon: 'i-lucide-folder', comment: 'Code review' },
              { id: 'skill-generator', label: 'ai-factory.skill-generator/', icon: 'i-lucide-folder', comment: 'Skill generation' }
            ]
          },
          {
            id: 'claude-settings',
            label: 'settings.local.json',
            icon: 'i-vscode-icons-file-type-json',
            comment: 'MCP config (gitignored)'
          }
        ]
      },
      {
        id: 'ai-factory',
        label: '.ai-factory/',
        icon: 'i-lucide-folder',
        defaultExpanded: true,
        comment: 'AI Factory workspace',
        children: [
          {
            id: 'af-description',
            label: 'DESCRIPTION.md',
            icon: 'i-vscode-icons-file-type-markdown',
            comment: 'Project specification'
          },
          {
            id: 'af-architecture',
            label: 'ARCHITECTURE.md',
            icon: 'i-vscode-icons-file-type-markdown',
            comment: 'Architecture guidelines'
          },
          { id: 'af-plan', label: 'PLAN.md', icon: 'i-vscode-icons-file-type-markdown' },
          { id: 'af-security', label: 'SECURITY.md', icon: 'i-vscode-icons-file-type-markdown', comment: 'Ignored security items' },
          { id: 'af-plans', label: 'plans/', icon: 'i-lucide-folder', comment: 'Plans from /ai-factory.feature' },
          { id: 'af-patches', label: 'patches/', icon: 'i-lucide-folder', comment: 'Self-improvement patches' },
          { id: 'af-evolutions', label: 'evolutions/', icon: 'i-lucide-folder', comment: 'Evolution logs' },
          { id: 'af-evolution', label: 'evolution/', icon: 'i-lucide-folder', comment: 'Reflex loop state' }
        ]
      },
      {
        id: 'af-config',
        label: '.ai-factory.json',
        icon: 'i-vscode-icons-file-type-json',
        comment: 'AI Factory config'
      }
    ]
  }
])
</script>

<template>
  <UTree
    :items="items"
    :get-key="(item) => item.id"
    color="neutral"
    size="lg"
    class="w-full"
    :ui="{ root: 'w-full max-w-none text-base' }"
  >
    <template #item-label="{ item }">
      <span class="flex flex-wrap items-center gap-x-2">
        <span>{{ item.label }}</span>
        <span
          v-if="item.comment"
          class="text-xs text-muted"
        >
          — {{ item.comment }}
        </span>
      </span>
    </template>
  </UTree>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Install & Init',
    icon: 'i-lucide-download',
    slot: 'init',
    description: 'One-time setup command'
  },
  {
    title: 'Setup Context',
    icon: 'i-lucide-settings',
    slot: 'setup',
    description: 'Create core project files'
  },
  {
    title: 'Architecture',
    icon: 'i-lucide-layers',
    slot: 'arch',
    description: 'Define structure and patterns'
  },
  {
    title: 'Optional Tools',
    icon: 'i-lucide-wrench',
    slot: 'optional',
    description: 'Additional project setup'
  }
]

const setupFiles = [
  'DESCRIPTION.md',
  'AGENTS.md',
  'Skills + MCP configured'
]

const optionalTools = [
  { name: '/aif-rules', desc: 'Coding conventions' },
  { name: '/aif-roadmap', desc: 'Strategic milestones' },
  { name: '/aif-docs', desc: 'Documentation baseline' },
  { name: '/aif-dockerize', desc: 'Container setup' },
  { name: '/aif-ci', desc: 'CI/CD pipeline' },
  { name: '/aif-build-automation', desc: 'Build scripts' }
]
</script>

<template>
  <UTimeline
    :items="steps"
    color="primary"
    size="lg"
    class="w-full"
    :ui="{ wrapper: 'mt-0 pb-7', date: 'hidden' }"
  >
    <template #init-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">{{ item.description }}</p>
      </div>
    </template>
    <template #init-description>
      <UBadge color="neutral" variant="subtle" size="lg" class="font-mono">
        ai-factory init
      </UBadge>
    </template>

    <template #setup-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">{{ item.description }}</p>
      </div>
    </template>
    <template #setup-description>
      <div class="space-y-2">
        <UBadge color="primary" variant="subtle" size="lg" class="font-mono">
          /aif
        </UBadge>
        <ul class="list-disc ps-5 text-sm text-muted space-y-1 mt-3">
          <li v-for="file in setupFiles" :key="file">{{ file }}</li>
        </ul>
      </div>
    </template>

    <template #arch-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">{{ item.description }}</p>
      </div>
    </template>
    <template #arch-description>
      <div class="space-y-2">
        <UBadge color="primary" variant="subtle" size="lg" class="font-mono">
          /aif-architecture
        </UBadge>
        <p class="text-sm text-muted mt-2">
          Creates <code class="text-xs">ARCHITECTURE.md</code> with patterns and guidelines
        </p>
      </div>
    </template>

    <template #optional-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">{{ item.description }}</p>
      </div>
    </template>
    <template #optional-description>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        <div
          v-for="tool in optionalTools"
          :key="tool.name"
          class="flex flex-col gap-1 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
        >
          <code class="text-xs font-mono text-primary">{{ tool.name }}</code>
          <span class="text-xs text-muted">{{ tool.desc }}</span>
        </div>
      </div>
    </template>
  </UTimeline>
</template>

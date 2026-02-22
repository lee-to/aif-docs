<script setup lang="ts">
const steps = [
  {
    title: 'Plan',
    icon: 'i-lucide-scroll-text',
    slot: 'plan',
    badge: 'Start here'
  },
  {
    title: 'Improve',
    icon: 'i-lucide-sparkles',
    slot: 'improve',
    badge: 'Optional'
  },
  {
    title: 'Implement',
    icon: 'i-lucide-hammer',
    slot: 'implement',
    badge: 'Execute'
  },
  {
    title: 'Verify',
    icon: 'i-lucide-check-circle',
    slot: 'verify',
    badge: 'Optional'
  },
  {
    title: 'Commit',
    icon: 'i-lucide-git-commit',
    slot: 'commit',
    badge: 'Save'
  },
  {
    title: 'Evolve',
    icon: 'i-lucide-refresh-ccw',
    slot: 'evolve',
    badge: 'Learn'
  }
]

const planModes = [
  { mode: '/aif-plan fast', desc: 'No branch, quick tasks' },
  { mode: '/aif-plan full', desc: 'Git branch, full feature' },
  { mode: '/aif-plan full --parallel', desc: 'Parallel worktrees' }
]

const fixFlow = [
  { step: 'Bug detected', icon: 'i-lucide-bug' },
  { step: '/aif-fix', icon: 'i-lucide-wrench' },
  { step: 'Creates patch', icon: 'i-lucide-file-plus' },
  { step: 'Next run learns', icon: 'i-lucide-brain' }
]
</script>

<template>
  <div class="space-y-6">
    <!-- Main workflow timeline -->
    <UTimeline
      :items="steps"
      color="primary"
      size="lg"
      class="w-full"
      :ui="{ wrapper: 'mt-0 pb-7', date: 'hidden' }"
    >
      <template #plan-title="{ item }">
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
          <UBadge color="neutral" variant="subtle" size="sm">{{ item.badge }}</UBadge>
        </div>
      </template>
      <template #plan-description>
        <div class="space-y-3 mt-2">
          <p class="text-sm text-muted">
            Creates branch, analyzes codebase, builds step-by-step plan
          </p>
          <div class="space-y-1">
            <div
              v-for="mode in planModes"
              :key="mode.mode"
              class="flex items-start gap-2 text-sm"
            >
              <code class="text-xs font-mono text-primary flex-shrink-0">{{ mode.mode }}</code>
              <span class="text-muted">— {{ mode.desc }}</span>
            </div>
          </div>
        </div>
      </template>

      <template #improve-title="{ item }">
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
          <UBadge color="neutral" variant="subtle" size="sm">{{ item.badge }}</UBadge>
        </div>
      </template>
      <template #improve-description>
        <div class="space-y-2">
          <code class="text-xs font-mono text-primary">/aif-improve</code>
          <p class="text-sm text-muted">
            Deeper analysis, finds missing tasks, fixes dependencies
          </p>
        </div>
      </template>

      <template #implement-title="{ item }">
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
          <UBadge color="primary" variant="subtle" size="sm">{{ item.badge }}</UBadge>
        </div>
      </template>
      <template #implement-description>
        <div class="space-y-2">
          <code class="text-xs font-mono text-primary">/aif-implement</code>
          <p class="text-sm text-muted">
            Reads past patches → executes tasks → commits at checkpoints
          </p>
          <UAlert
            color="neutral"
            variant="subtle"
            icon="i-lucide-alert-circle"
            title="Error handling"
            description="If error occurs → automatically runs /aif-fix → creates patch"
            class="mt-3"
          />
        </div>
      </template>

      <template #verify-title="{ item }">
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
          <UBadge color="neutral" variant="subtle" size="sm">{{ item.badge }}</UBadge>
        </div>
      </template>
      <template #verify-description>
        <div class="space-y-2">
          <code class="text-xs font-mono text-primary">/aif-verify</code>
          <p class="text-sm text-muted">
            Checks completeness, build, tests, lint → suggests /aif-security-checklist
          </p>
        </div>
      </template>

      <template #commit-title="{ item }">
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
          <UBadge color="primary" variant="subtle" size="sm">{{ item.badge }}</UBadge>
        </div>
      </template>
      <template #commit-description>
        <div class="space-y-2">
          <code class="text-xs font-mono text-primary">/aif-commit</code>
          <p class="text-sm text-muted">
            Creates conventional commit with meaningful message
          </p>
        </div>
      </template>

      <template #evolve-title="{ item }">
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
          <UBadge color="neutral" variant="subtle" size="sm">{{ item.badge }}</UBadge>
        </div>
      </template>
      <template #evolve-description>
        <div class="space-y-2">
          <code class="text-xs font-mono text-primary">/aif-evolve</code>
          <p class="text-sm text-muted">
            Reads patches → analyzes patterns → improves skills
          </p>
        </div>
      </template>
    </UTimeline>

    <!-- Fix flow callout -->
    <UPageCard
      title="Self-improvement loop"
      description="Bug fixes create patches that improve future implementations"
      variant="outline"
      class="mt-8"
    >
      <template #header>
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <UIcon name="i-lucide-brain" class="size-4" />
          <span>Learning from fixes</span>
        </div>
      </template>
      <template #body>
        <div class="flex flex-wrap items-center gap-3 text-sm">
          <div
            v-for="(step, idx) in fixFlow"
            :key="step.step"
            class="flex items-center gap-2"
          >
            <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <UIcon :name="step.icon" class="size-4 text-primary" />
              <span class="text-muted font-medium">{{ step.step }}</span>
            </div>
            <UIcon
              v-if="idx < fixFlow.length - 1"
              name="i-lucide-arrow-right"
              class="size-4 text-muted"
            />
          </div>
        </div>
      </template>
    </UPageCard>
  </div>
</template>

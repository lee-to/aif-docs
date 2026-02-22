<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const mainPath = [
  {
    name: '/aif-plan',
    icon: 'i-lucide-scroll-text',
    desc: 'fast → PLAN.md\nfull → branch + plan',
    color: 'primary'
  },
  {
    name: '/aif-improve',
    icon: 'i-lucide-sparkles',
    desc: 'Refine plan (optional)',
    color: 'neutral',
    optional: true
  },
  {
    name: '/aif-implement',
    icon: 'i-lucide-hammer',
    desc: 'Execute tasks',
    color: 'primary',
    highlight: true
  },
  {
    name: '/aif-verify',
    icon: 'i-lucide-check-circle',
    desc: 'Check completeness (optional)',
    color: 'neutral',
    optional: true
  },
  {
    name: '/aif-commit',
    icon: 'i-lucide-git-commit',
    desc: 'Conventional commit',
    color: 'primary'
  },
  {
    name: '/aif-evolve',
    icon: 'i-lucide-refresh-ccw',
    desc: 'Improve skills',
    color: 'neutral',
    optional: true
  }
]

const fixPath = [
  {
    name: '/aif-fix',
    icon: 'i-lucide-wrench',
    desc: 'Fix bug',
    color: 'amber'
  },
  {
    name: 'Patch',
    icon: 'i-lucide-file-plus',
    desc: 'Self-improvement',
    color: 'amber'
  }
]

const patchStorage = {
  name: '.ai-factory/patches/',
  icon: 'i-lucide-database',
  desc: 'Learning database'
}

const mobileAccordionItems = [
  { label: 'Main workflow', value: 'main', slot: 'main' as const, icon: 'i-lucide-route' },
  { label: 'Error handling', value: 'fix', slot: 'fix' as const, icon: 'i-lucide-bug' }
] satisfies AccordionItem[]
</script>

<template>
  <div class="space-y-8">
    <!-- Grid layout: 3 колонки -->
    <div class="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
      <!-- Left column: Main workflow -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 mb-6">
          <UIcon
            name="i-lucide-route"
            class="size-5 text-primary"
          />
          <h3 class="text-lg font-semibold">
            Main workflow
          </h3>
        </div>

        <div
          v-for="(step, idx) in mainPath"
          :key="step.name"
          class="space-y-4"
        >
          <UPageCard
            :title="step.name"
            :description="step.desc"
            :variant="step.optional ? 'outline' : 'soft'"
            class="relative"
            :class="step.highlight ? 'ring-2 ring-primary/20' : ''"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon
                  :name="step.icon"
                  class="size-5"
                  :class="`text-${step.color}`"
                />
                <div class="flex items-center gap-2">
                  <code class="text-sm font-mono">{{ step.name }}</code>
                  <UBadge
                    v-if="step.optional"
                    color="neutral"
                    variant="subtle"
                    size="xs"
                  >
                    optional
                  </UBadge>
                </div>
              </div>
            </template>
          </UPageCard>

          <!-- Arrow down -->
          <div
            v-if="idx < mainPath.length - 1"
            class="flex justify-center"
          >
            <UIcon
              name="i-lucide-arrow-down"
              class="size-5 text-muted"
            />
          </div>
        </div>
      </div>

      <!-- Center: Connection arrows -->
      <div class="hidden lg:flex flex-col justify-center items-center space-y-32 pt-20">
        <!-- Arrow from implement to fix (on error) -->
        <div class="flex flex-col items-center gap-2">
          <UIcon
            name="i-lucide-arrow-right"
            class="size-5 text-amber-500"
          />
          <span class="text-xs text-muted rotate-0 whitespace-nowrap">on error</span>
        </div>

        <!-- Arrow from patch storage back to implement -->
        <div class="flex flex-col items-center gap-2">
          <UIcon
            name="i-lucide-arrow-left"
            class="size-5 text-primary"
          />
          <span class="text-xs text-muted whitespace-nowrap">reads</span>
        </div>
      </div>

      <!-- Right column: Fix path + Patch storage -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 mb-6">
          <UIcon
            name="i-lucide-bug"
            class="size-5 text-amber-500"
          />
          <h3 class="text-lg font-semibold">
            Error handling
          </h3>
        </div>

        <!-- Fix path -->
        <div
          v-for="(step, idx) in fixPath"
          :key="step.name"
          class="space-y-4"
        >
          <UPageCard
            :title="step.name"
            :description="step.desc"
            variant="outline"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon
                  :name="step.icon"
                  class="size-5"
                  :class="`text-${step.color}`"
                />
                <code class="text-sm font-mono">{{ step.name }}</code>
              </div>
            </template>
          </UPageCard>

          <div
            v-if="idx < fixPath.length - 1"
            class="flex justify-center"
          >
            <UIcon
              name="i-lucide-arrow-down"
              class="size-5 text-muted"
            />
          </div>
        </div>

        <!-- Patch storage -->
        <div class="flex justify-center mt-4">
          <UIcon
            name="i-lucide-arrow-down"
            class="size-5 text-muted"
          />
        </div>

        <UAlert
          :title="patchStorage.name"
          :description="patchStorage.desc"
          :icon="patchStorage.icon"
          color="primary"
          variant="soft"
        />

        <!-- Loop back indicator -->
        <div class="flex items-center gap-2 pt-4 text-sm text-muted">
          <UIcon
            name="i-lucide-repeat"
            class="size-4"
          />
          <span>Patches improve future runs</span>
        </div>
      </div>
    </div>

    <!-- Mobile: simplified view -->
    <div class="lg:hidden space-y-6">
      <UAlert
        color="neutral"
        variant="subtle"
        icon="i-lucide-info"
        title="Workflow branches"
        description="The workflow has two main paths: main development loop and error handling with self-improvement patches."
      />

      <UAccordion
        :items="mobileAccordionItems"
        default-value="main"
      >
        <template #main>
          <div class="space-y-3 pt-4">
            <div
              v-for="step in mainPath"
              :key="step.name"
              class="flex items-start gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800"
            >
              <UIcon
                :name="step.icon"
                class="size-5 flex-shrink-0 mt-0.5"
                :class="`text-${step.color}`"
              />
              <div>
                <code class="text-sm font-mono text-primary">{{ step.name }}</code>
                <p class="text-xs text-muted mt-1">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </template>

        <template #fix>
          <div class="space-y-3 pt-4">
            <div
              v-for="step in fixPath"
              :key="step.name"
              class="flex items-start gap-3 p-3 rounded-lg border border-amber-200 dark:border-amber-800/50"
            >
              <UIcon
                :name="step.icon"
                class="size-5 flex-shrink-0 mt-0.5 text-amber-500"
              />
              <div>
                <code class="text-sm font-mono text-amber-600 dark:text-amber-400">{{ step.name }}</code>
                <p class="text-xs text-muted mt-1">
                  {{ step.desc }}
                </p>
              </div>
            </div>

            <UAlert
              :title="patchStorage.name"
              :description="patchStorage.desc"
              :icon="patchStorage.icon"
              color="primary"
              variant="soft"
              size="sm"
            />
          </div>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
const level1Checks = [
  'Prompt injection patterns',
  'Data exfiltration attempts',
  'Stealth instructions',
  'Destructive commands',
  'Config tampering',
  'Encoded payloads',
  'Social engineering',
  'Hidden HTML comments'
]

const level2Checks = [
  'Instructions align to the skill’s purpose',
  'No requests for sensitive data',
  'No unrelated or suspicious steps'
]

const resultChecks = [
  'CLEAN → proceed',
  'WARNINGS → require explicit confirmation',
  'BLOCKED → delete and warn'
]
</script>

<template>
  <div class="space-y-4">
    <UPageCard
      title="Level 1 details"
      description="Static analysis checks for:"
      variant="outline"
    >
      <template #header>
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <UIcon
            name="i-lucide-shield-check"
            class="size-4"
          />
          <span>Level 1 · Automated scanner</span>
        </div>
      </template>
      <template #body>
        <ul class="list-disc space-y-1 ps-5 text-sm text-muted">
          <li
            v-for="item in level1Checks"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </UPageCard>

    <UPageCard
      title="Level 2 details"
      description="Human review verifies:"
      variant="outline"
    >
      <template #header>
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <UIcon
            name="i-lucide-search"
            class="size-4"
          />
          <span>Level 2 · Semantic review</span>
        </div>
      </template>
      <template #body>
        <ul class="list-disc space-y-1 ps-5 text-sm text-muted">
          <li
            v-for="item in level2Checks"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </UPageCard>

    <UPageCard
      title="Result"
      description="Both levels must pass."
      variant="soft"
    >
      <template #header>
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <UIcon
            name="i-lucide-badge-check"
            class="size-4"
          />
          <span>Result · Safe to use</span>
        </div>
      </template>
      <template #body>
        <ul class="list-disc space-y-1 ps-5 text-sm text-muted">
          <li
            v-for="item in resultChecks"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Automated scanner',
    icon: 'i-lucide-shield-check',
    slot: 'scan'
  },
  {
    title: 'Semantic review',
    icon: 'i-lucide-search',
    slot: 'review'
  },
  {
    title: 'Safe to use',
    icon: 'i-lucide-badge-check',
    slot: 'result'
  }
]

const scanChecks = [
  'Prompt injection patterns',
  'Data exfiltration attempts',
  'Stealth instructions',
  'Destructive commands',
  'Config tampering',
  'Encoded payloads',
  'Social engineering',
  'Hidden HTML comments'
]

const reviewChecks = [
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
  <UTimeline
    :items="items"
    color="primary"
    size="lg"
    class="w-full"
    :ui="{ wrapper: 'mt-0 pb-7', date: 'hidden' }"
  >
    <template #scan-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">
          Static analysis flags suspicious patterns in downloaded skills.
        </p>
      </div>
    </template>

    <template #scan-description>
      <ul class="list-disc ps-5 text-sm text-muted space-y-2">
        <li
          v-for="check in scanChecks"
          :key="check"
        >
          {{ check }}
        </li>
      </ul>
    </template>

    <template #review-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">
          Manual verification of intent and scope alignment.
        </p>
      </div>
    </template>

    <template #review-description>
      <ul class="list-disc ps-5 text-sm text-muted space-y-2">
        <li
          v-for="check in reviewChecks"
          :key="check"
        >
          {{ check }}
        </li>
      </ul>
    </template>

    <template #result-title="{ item }">
      <div class="space-y-1">
        <span class="text-xl font-semibold text-primary">{{ item.title }}</span>
        <p class="text-base text-muted">
          Final decision depends on scan outcomes.
        </p>
      </div>
    </template>

    <template #result-description>
      <ul class="list-disc ps-5 text-sm text-muted space-y-2">
        <li
          v-for="check in resultChecks"
          :key="check"
        >
          {{ check }}
        </li>
      </ul>
    </template>
  </UTimeline>
</template>

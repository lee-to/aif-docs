<script setup lang="ts">
import type { ChangelogVersionProps } from '@nuxt/ui'

const { data: pages } = await useAsyncData('changelog', () =>
  queryCollection('changelog').order('date', 'DESC').all()
)

const versions = computed<ChangelogVersionProps[]>(() =>
  (pages.value ?? []).map(page => ({
    title: page.title,
    date: page.date,
    badge: page.badge,
    description: page.description,
    to: page.to,
    target: page.target
  }))
)

useSeoMeta({
  title: 'Changelog',
  description: 'Release history for AI Factory.'
})
</script>

<template>
  <UPage class="max-w-5xl mx-auto px-4 py-12">
    <UPageHeader
      title="Changelog"
      description="Release history for AI Factory."
      :links="[{ label: 'Documentation', icon: 'i-lucide-book-open', to: '/getting-started' }]"
    />

    <UPageBody>
      <UChangelogVersions :versions="versions">
        <template #body="{ version }">
          <ContentRenderer
            v-if="pages"
            :value="pages.find(p => p.title === version.title)!"
          />
        </template>
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>

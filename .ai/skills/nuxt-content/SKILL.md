---
name: nuxt-content
description: "Используй этот skill, когда нужно подключить и настроить Nuxt Content v3 в Nuxt-проекте: collections (content.config.ts), schema/frontmatter, запросы queryCollection(), рендер Markdown через <ContentRenderer>, навигация и (опционально) поиск."
---

# Skill: Nuxt Content v3 (AI Agent Playbook)

## Цель
Помочь агенту уверенно:
- подключать @nuxt/content,
- описывать коллекции в content.config.ts,
- писать контент (Markdown/MDC, YAML/JSON),
- запрашивать данные через queryCollection(),
- рендерить Markdown через <ContentRenderer>,
- делать навигацию и (опционально) поиск.

## Детектор режима (важно)
1) Если в package.json есть dependency "docus" ИЛИ в nuxt.config.ts есть extends: ['docus'] — это Docus-проект. Переключись на Skill: Docus.
2) Иначе — обычный Nuxt + @nuxt/content. Продолжай этим Skill.

## Быстрый чек-лист файлов проекта
- nuxt.config.ts: подключен ли модуль '@nuxt/content'?
- content.config.ts: определены ли collections?
- content/: есть ли контент файлы (.md/.yml/.json/.csv)?
- pages/: есть ли страницы, которые рендерят контент (например pages/[...slug].vue)?
- components/content/: есть ли кастомные MDC-компоненты?

## Setup: установка и база
### 1) Установить модуль
- Установи пакет @nuxt/content.
- Добавь модуль в nuxt.config.ts: modules: ['@nuxt/content'].

### 2) Учесть SQL/SQLite хранение (важно для запуска)
При первом запуске Nuxt Content может спросить про database connector (better-sqlite3 или sqlite3).
Если используется pnpm v10+, и выбран better-sqlite3/sqlite3, возможны ошибки нативных биндингов — нужно разрешить build scripts (approve-builds) или прописать onlyBuiltDependencies.

### 3) Создать первую коллекцию (обязательный шаг в v3)
Создай content.config.ts в корне.
Минимальный вариант:

```ts
// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
```

## Коллекции: правила, которые агент должен помнить
### Типы коллекций
- type: 'page' — когда 1 файл = 1 страница, и нужен автоматический path.
- type: 'data' — когда это данные (JSON/YAML/CSV) и ты сам решаешь, как их показывать.

### source (шаблоны)
source можно задавать glob-паттерном:
- '**' — всё
- '**/*.md' — только Markdown
- 'docs/**/*.yml' — yml внутри content/docs

### Схемы и валидация
- Если хочешь фильтровать/сортировать по полям из frontmatter — эти поля должны быть описаны в schema коллекции.
- Для schema рекомендуй Zod (zod v3/v4) или Valibot.
- Лучше импортировать z из 'zod' (а не из @nuxt/content).

Пример schema:

```ts
import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
        image: z.object({
          src: property(z.string()).editor({ input: 'media' }),
          alt: z.string()
        }).optional()
      })
    })
  }
})
```

## Запросы: queryCollection()
### Базовые операции
- Получить страницу по route.path:
  queryCollection('docs').path(route.path).first()
- Получить список:
  queryCollection('blog').where('draft', '=', false).order('date', 'DESC').limit(10).all()
- Нужные поля:
  queryCollection('blog').select('path','title','description').all()

### Всегда обрабатывай null
first() может вернуть null — делай fallback/404.

## Рендер Markdown: <ContentRenderer>
Правило:
- <ContentRenderer> работает для Markdown-документов, полученных из queryCollection().
Шаблон страницы (catch-all):

```vue
<!-- pages/[...slug].vue -->
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

watchEffect(() => {
  if (page.value?.seo) {
    // SEO опционально: можно использовать useSeoMeta
  }
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Not found</div>
</template>
```

## MDC (Markdown Components)
### Использование компонентов в Markdown
Синтаксис блока:

::component-name
Default slot content
::

### Где хранить компоненты
- Лучший путь: components/content/* (тогда компоненты доступны для MDC без доп. глобальной регистрации).
- Внутри Vue-компонента используй <slot /> чтобы принять markdown-контент.
- Можно использовать mdc-unwrap, чтобы убрать обёртки типа <p>.

Пример компонента:

```vue
<!-- components/content/Callout.vue -->
<template>
  <div class="callout">
    <slot />
  </div>
</template>
```

И Markdown:

```md
::callout
Текст внутри callout.
::
```

## Навигация: queryCollectionNavigation()
Если нужен сайдбар/дерево:
- Используй queryCollectionNavigation('docs')
- Можно добавить .navigation.yml в директорию, чтобы задать title/icon.

Пример:

```ts
const { data: nav } = await useAsyncData('nav', () =>
  queryCollectionNavigation('docs').where('published', '=', true).order('date', 'DESC')
)
```

## Поиск (опционально)
Для поиска:
- Используй queryCollectionSearchSections('docs') и подключи UI-компонент поиска (например Nuxt UI Content Search).

## Nuxt Studio (опционально)
Если нужен визуальный редактор в проде:
- Рассмотри подключение Nuxt Studio (визуальное редактирование контента, формы по schema, медиа, git-интеграция).

## ContentRenderer: prose и компоненты

### prose=false и выборочные Prose-компоненты
`<ContentRenderer :prose="false">` отключает только `proseComponentMap` (маппинг HTML-тегов на Prose-компоненты: `pre`->`ProsePre`, `p`->`ProseP` и т.д.). Но `mdc.components.map` (маппинг MDC-компонентов: `code-group`->`ProseCodeGroup`) продолжает работать.

Если на странице с `prose=false` нужна стилизация отдельных элементов (например карточный вид для код-блоков), используй проп `:components` для точечного подключения:

```vue
<ContentRenderer
  :value="page"
  :prose="false"
  :components="{ pre: 'ProsePre' }"
/>
```

Это включит Nuxt UI стилизацию только для `<pre>` блоков, не активируя полный prose-режим.

### Шэдоуинг Nuxt UI Prose-компонентов
Кастомный компонент в `app/components/content/` (например `CodeGroup.vue`) перекрывает одноимённый Prose-компонент из Nuxt UI (`ProseCodeGroup`). При проблемах со стилями проверь, не затеняет ли локальный компонент штатный.

Порядок приоритета:
1. Локальный `app/components/content/CodeGroup.vue` (высший)
2. Nuxt UI `ProseCodeGroup` (через глобальную регистрацию)

### MDC синтаксис: `::component` vs `<component>`
- `::code-group` — резолвится через MDC component map (`code-group` -> `ProseCodeGroup`)
- `<code-group>` — резолвится через Vue `resolveComponent("CodeGroup")` -> находит локальный компонент

При наличии локального `CodeGroup.vue` эти два синтаксиса могут попадать в **разные компоненты**.

## Quality Bar (как агент проверяет свою работу)
Перед завершением задачи убедись:
- content.config.ts существует и коллекции покрывают нужные файлы (source).
- Если добавлены новые поля frontmatter и по ним нужен query — schema обновлена.
- Запросы queryCollection() используют правильное имя коллекции.
- first() обрабатывает null.
- Для Markdown рендера используется <ContentRenderer>.
- MDC-компоненты лежат в components/content/ или зарегистрированы глобально.

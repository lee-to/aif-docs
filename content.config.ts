import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    changelog: defineCollection({
      type: 'page',
      source: 'changelog/**',
      schema: z.object({
        date: z.string(),
        badge: z.object({
          label: z.string(),
          color: z.enum(['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']),
          variant: z.enum(['solid', 'outline', 'soft', 'subtle'])
        }).optional(),
        description: z.string().optional(),
        to: z.string().optional(),
        target: z.string().optional()
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md', 'changelog/**']
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    })
  }
})

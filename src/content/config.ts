import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO
    lang: z.enum(['de','en']).default('de'),
    summary: z.string().max(280),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),   // /assets/...
    heroImageCaption: z.string().optional(),
    externalUrl: z.string().url().optional(), // optionaler „Mehr erfahren“-Link
    featured: z.boolean().default(false),
    draft: z.boolean().optional().default(false),
  })
});

export const collections = { news };

import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO
    lang: z.enum(['de', 'en']).default('de'),
    summary: z.string().max(280),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(), // /assets/...
    externalUrl: z.string().url().optional(), // optionaler „Mehr erfahren“-Link
    featured: z.boolean().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

const aktuelles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(), // ISO
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { news, aktuelles };

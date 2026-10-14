import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fileURLToPath } from 'node:url';

// Resolves paths perfectly relative to this config file in the src/ folder
const baseDocs = fileURLToPath(new URL('./content/docs', import.meta.url));
const basePages = fileURLToPath(new URL('./content/pages', import.meta.url));
const baseFrontpage = fileURLToPath(new URL('./content', import.meta.url));

const docsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: baseDocs }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: basePages }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const frontpageCollection = defineCollection({
  loader: glob({ pattern: 'frontpage.md', base: baseFrontpage }),
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
  }),
});

export const collections = {
  docs: docsCollection,
  pages: pagesCollection,
  frontpage: frontpageCollection,
};
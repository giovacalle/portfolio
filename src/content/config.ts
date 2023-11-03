import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()).min(1),
    repo: z.string().optional(),
    website: z.string().optional(),
    stack: z.array(z.string()),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  projects
};

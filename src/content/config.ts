import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      images: z.array(image()),
      repo: z.string().optional(),
      website: z.string().optional(),
      techs: z.array(z.string()),
      tags: z.array(z.string()).optional()
    })
});

export const collections = {
  projects
};

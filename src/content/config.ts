import { defineCollection, z, reference } from 'astro:content';

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

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    nodes: z
      .array(
        z.object({
          title: z.string(),
          fromYear: z.number(),
          toYear: z.number().optional(),
          description: z.string().optional()
        })
      )
      .max(2)
      .optional(),
    relatedProjects: z.array(reference('projects')).optional()
  })
});

export const collections = {
  projects,
  timeline
};

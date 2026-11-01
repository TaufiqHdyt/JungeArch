import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(["residential", "commercial", "interior", "various"]),
      location: z.string(),
      year: z.number().int(),
      status: z.string(),
      scope: z.array(z.string()),
      architect: z.string().optional(),
      client: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      cover: image(),
      gallery: z.array(z.object({ image: image(), alt: z.string().min(1) })).default([]),
      description: z.string(),
    }),
});

export const collections = { projects };

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/projects" }),
  schema: z.object({
    name: z.string(),
    href: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/posts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),

    published_on: z.date(),
    draft: z.boolean(),
  }),
});

export const collections = { projects, posts };

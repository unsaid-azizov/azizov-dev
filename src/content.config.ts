import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const profile = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    tagline: z.string(),
    bio: z.string(),
    email: z.string(),
    location: z.string(),
    available: z.boolean().default(true),
    social: z.object({
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      huggingface: z.string().url().optional(),
      twitter: z.string().url().optional(),
      telegram: z.string().url().optional(),
      instagram: z.string().url().optional(),
      youtube: z.string().url().optional(),
      whatsapp: z.string().url().optional(),
    }),
    stats: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        description: z.string(),
      })
    ),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable().optional(),
    location: z.string(),
    type: z.enum(["remote", "hybrid", "onsite"]),
    logo: z.string().optional(),
    website: z.string().url().nullable().optional(),
    highlights: z.array(z.string()),
    skills: z.array(z.string()),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/project.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["personal", "studio"]),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    coverImage: z.string(),
    metrics: z.record(z.string()).optional(),
    links: z.record(z.string().nullable()).optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable().optional(),
    status: z.enum(["active", "completed", "archived"]),
    order: z.number(),
  }),
});

const hackathons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hackathons" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    result: z.string(),
    medal: z.enum(["gold", "silver", "bronze", "none"]),
    task: z.string(),
    skills: z.array(z.string()),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    clientName: z.string(),
    company: z.string().optional(),
    role: z.string().optional(),
    rating: z.number().min(1).max(5),
    avatar: z.string().optional(),
    platform: z.enum(["twitter", "linkedin", "other"]).default("other"),
    handle: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(true),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["hackathon", "award", "talk", "publication"]),
    description: z.string(),
    coverImage: z.string().optional(),
    result: z.string().optional(),
    emoji: z.string().optional(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    featured: z.boolean().default(true),
  }),
});

export const collections = {
  profile,
  experience,
  projects,
  hackathons,
  testimonials,
  blog,
};

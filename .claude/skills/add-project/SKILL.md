---
name: add-project
description: Add a new project to the azizov.dev portfolio
disable-model-invocation: true
argument-hint: [project name or description]
---

Create a new project entry for azizov.dev based on: $ARGUMENTS

## File location

Create a folder and file at `src/content/projects/<slug>/project.md` (the loader glob expects `**/project.md`).

## Frontmatter schema (must match Zod in `src/content.config.ts`)

```yaml
---
title: "Project Name — Short Description"
description: "One sentence with keywords"
category: "personal"  # or "studio"
tags: ["Specific", "Frameworks", "Used"]
featured: true
coverImage: ""
metrics:  # optional, free-form key-value
  key: "value"
links:  # optional, free-form key-value (null allowed)
  website: "https://..."
  github: null
startDate: YYYY-MM-DD
endDate: null  # null = ongoing
status: "active"  # "active" | "completed" | "archived"
order: 7  # check existing projects for next number
---
```

## Content rules

1. Use `category: "studio"` for HermesOps client work, `"personal"` for everything else
2. Include a "Technologies" or "Tech stack" section with specific tools
3. Link to related blog posts if they exist
4. Link to HermesOps for agency projects
5. Include concrete metrics/results where possible
6. No emojis

## After creating

1. Run `npx astro build` to verify
2. Ask user if they want to commit and push

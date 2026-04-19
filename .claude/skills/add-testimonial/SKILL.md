---
name: add-testimonial
description: Add a new client testimonial to azizov.dev
disable-model-invocation: true
argument-hint: [client name, platform, and quote text]
---

Create a new testimonial for azizov.dev based on: $ARGUMENTS

## File location

Create at `src/content/testimonials/<client-name>.md` (lowercase, kebab-case).

## Frontmatter schema (must match Zod in `src/content.config.ts`)

```yaml
---
clientName: "Full Name"
company: "Company Name"  # optional
role: "Their Role"  # optional
rating: 5  # 1-5
platform: "twitter"  # "twitter" | "linkedin" | "other"
handle: "their_handle"  # optional, without @
sourceUrl: "https://link-to-original"  # optional
date: YYYY-MM-DD
featured: true
order: 7  # check existing testimonials for next number
---

The testimonial text goes here as markdown body. Keep the original wording.
Use @said_azizow (not @said_azizov) if referencing Said's handle.
```

## Rules

1. Keep the client's original wording — don't rewrite testimonials
2. Check for duplicates — same person may already have a testimonial from another platform
3. If duplicate exists, keep the more detailed one
4. No emojis

## After creating

1. Run `npx astro build` to verify
2. Ask user if they want to commit and push

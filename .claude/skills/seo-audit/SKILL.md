---
name: seo-audit
description: Audit azizov.dev for SEO issues — check meta tags, structured data, internal linking, content quality
disable-model-invocation: true
---

Run an SEO audit on azizov.dev. Check the following:

## 1. Structured data

- Every page should have Person JSON-LD (from layout)
- Every page should have BreadcrumbList JSON-LD (from layout)
- Homepage should have WebSite JSON-LD
- Blog posts should have BlogPosting JSON-LD (from `src/pages/blog/[...slug].astro`)

## 2. Meta tags

Read `src/layouts/main.astro` and verify:
- Each page passes unique `title` and `description` to MainLayout
- `og:type` is set to "article" for blog/project pages
- Canonical URLs use trailing slashes consistently
- `trailingSlash: 'always'` is set in `astro.config.mjs`

## 3. Content quality

For each blog post in `src/content/blog/`:
- Description is 150-160 characters (not too short, not too long)
- Tags include specific framework/tool names (not just generic terms)
- Post body is 300+ words (enough for Google to index)
- Contains at least one internal link to another post or project
- Case studies have a tech stack section and results with numbers

## 4. Internal linking

- Blog posts should have the related posts section (check `[...slug].astro`)
- `/about` page should link to key blog posts and projects
- Cross-link between related content (e.g. Lezgin posts link to each other)

## 5. Sitemap

- `astro.config.mjs` should have `sitemap()` integration with `lastmod`
- Build and check `dist/sitemap-0.xml` has all pages with trailing slashes

## 6. Person sameAs

Check `src/layouts/main.astro` Person schema includes all profiles:
- GitHub, LinkedIn, HuggingFace, Twitter/X, Telegram, Instagram, YouTube, Google Scholar, HermesOps

## Output

Report findings as a table: | Issue | File | Severity | Fix |

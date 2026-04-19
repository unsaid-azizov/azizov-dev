# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Custom Skills

- `/add-post [topic or raw text]` — create a new blog post with proper SEO, keywords, tech stacks, and HermesOps branding
- `/add-project [name or description]` — add a new project to the portfolio
- `/add-testimonial [client, platform, quote]` — add a client testimonial
- `/seo-audit` — run a full SEO audit (structured data, meta, content quality, linking)

## Commands

```bash
npm run dev       # Start local dev server
npm run build     # Build static site to /dist
npm run preview   # Preview built site locally
```

No linting or test suite is configured.

## Architecture

This is a personal portfolio site for Said Azizov, built with **Astro 5 + React 19 + Tailwind CSS 4**. It deploys as a static site to GitHub Pages at https://azizov.dev.

### Content Collections (`/src/content`)

All portfolio data lives as Markdown files in content collections with strict Zod schemas defined in `content.config.ts`. Collections:
- `profile/` — single entry: bio, social links, stats
- `experience/` — work history
- `projects/` — portfolio projects
- `testimonials/` — client/colleague testimonials
- `blog/` — blog posts and news items
- `hackathons/` — hackathon results

When adding new entries, match the Zod schema in `content.config.ts` exactly or the build will fail.

### Pages (`/src/pages`)

- `index.astro` — main landing page, assembles all section components
- `blog/index.astro` + `blog/[...slug].astro` — blog listing and detail
- `projects/[...slug].astro` — project detail pages
- `llms.txt.ts` + `llms-full.txt.ts` — LLM knowledge endpoints (text/plain)

### Components (`/src/components`)

Each homepage section is a standalone React component (`Hero`, `AboutSection`, `ExperienceSection`, `ProjectsSection`, `TestimonialsSection`, `BlogSection`, `ContactSection`). The `Hero` component is hydrated on the client (`client:load`); other sections are server-rendered.

`/src/components/ui/` contains shadcn/ui components (button, badge, card, carousel, etc.). Add new shadcn components there following the existing pattern.

### Layouts & Styles

- `src/layouts/main.astro` — single layout wrapping all pages
- `src/styles/global.css` — Tailwind directives and global styles
- `src/lib/utils.ts` — `cn()` helper for merging Tailwind classes

### Astro + React Hydration

Components that need interactivity use `client:load` or `client:visible` directives in `.astro` files. Pure display components can remain server-rendered (.astro or React without a client directive).

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. The site uses `output: 'static'` and generates a sitemap via `@astrojs/sitemap`.

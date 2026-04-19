---
name: add-post
description: Add a new blog post to azizov.dev with proper SEO, keywords, and brand positioning
disable-model-invocation: true
argument-hint: [topic or raw text of the post]
---

Create a new blog post for azizov.dev based on: $ARGUMENTS

## Brand context

- **Author**: Said Azizov — 21yo AI Engineer, founder of HermesOps (hermesops.com)
- **Agency**: HermesOps — custom AI operations automation (voice agents, chatbots, workflow automation)
- **Positioning**: Technical depth + business ROI. Not generic AI hype.
- **Target audience**: Business owners in Dubai and UK considering AI automation
- **Tone**: Direct, confident, results-focused. No fluff. Show real numbers.

## File location and schema

Create the file at `src/content/blog/<slug>.md` where slug is a short kebab-case name with year suffix (e.g. `ai-voice-agents-2026.md`).

Frontmatter schema (must match Zod in `src/content.config.ts`):

```yaml
---
title: "SEO-optimized title — include key search terms"
date: YYYY-MM-DD
category: "article"  # or "hackathon" | "award" | "talk" | "publication"
description: "150-160 chars, include primary keyword, mention HermesOps or specific tech"
tags: ["Include", "Specific", "Frameworks", "And Tools"]
link: "https://optional-source-url"  # optional
featured: true
---
```

## Content rules

1. **SEO keywords**: Include specific framework/tool names people search for: ElevenLabs, Twilio, Vapi, LangChain, n8n, Make.com, GPT-4, Claude, HubSpot, Pinecone, RAG, MCP Protocol, etc. Don't stuff — use them naturally where they apply.

2. **Tech stack section**: Every case study or technical post MUST include a "Tech stack" or "How we built it" section listing specific tools and frameworks.

3. **Results table**: Case studies MUST include a table with concrete metrics (cost savings, time saved, conversion increase, etc.)

4. **Internal links**: Link to related posts and projects on the site:
   - Case studies: `/blog/surveying-firm-case-2026/`, `/blog/tutor-ai-agent-2026/`, `/blog/agent-first-leads-2026/`
   - Projects: `/projects/hermesops/project/`, `/projects/lezghian-ml/project/`
   - Hackathons: `/blog/aiijc-2021/`, `/blog/google-kaggle-2023/`
   - About: `/about/`

5. **HermesOps mention**: Every business/agency post should link to `[HermesOps](https://hermesops.com)` at least once.

6. **No emojis** in blog posts.

7. **Structure**: Use H2 for main sections, H3 for subsections. Include at least 3-4 sections. Posts should be 300-800 words — substantial enough for Google to index.

8. **Tags**: Include both broad terms ("AI Voice Agent", "Case Study") and specific tools ("ElevenLabs", "Twilio"). 5-8 tags per post.

## After creating

1. Run `npx astro build` to verify the post compiles
2. Show the user the result and ask if they want to commit and push

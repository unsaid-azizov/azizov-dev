---
title: "AI Chatbot for Education — How a Tutor School Increased Sales by 10%"
date: 2026-02-09
category: "article"
description: "Built a Telegram AI assistant for tutors using GPT-4 Vision, LangChain, and RAG — lesson analysis, homework generation, and progress tracking. +10% sales conversion."
tags: ["AI Chatbot", "Case Study", "Telegram Bot", "Education", "LangChain", "GPT-4 Vision", "RAG"]
featured: true
---

A month ago, Misha contacted us. He runs a tutor training school with an audience of over 10k on Telegram. The idea was simple: give tutors an AI tool that saves time and improves lesson quality.

## What we built at [HermesOps](https://hermesops.com)

A multimodal AI assistant for tutors, deployed as a Telegram bot:

- **Lesson transcript analysis** — upload a recording, get structured feedback on teaching methodology
- **Homework generation** — creates personalized exercises in 30 seconds based on lesson content
- **Homework checking by photo** — student sends a photo, GPT-4 Vision evaluates the work
- **Parent reports** — automated progress summaries for parents
- **Student progress tracking** — tracks improvements over time with analytics
- Works with voice, text, photos, and documents

## The tech stack

- **LLM**: OpenAI GPT-4 + GPT-4 Vision for multimodal understanding
- **Framework**: LangChain for orchestrating multi-step AI workflows
- **RAG pipeline**: lesson materials indexed in a vector database for context-aware responses
- **Vector DB**: Pinecone for storing and retrieving lesson embeddings
- **Bot platform**: Python Telegram Bot API
- **Storage**: PostgreSQL for user data, S3 for media files
- **Hosting**: Docker on a VPS

## The results

| Metric | Impact |
|--------|--------|
| Sales conversion | +10% (AI assistant added as course bonus) |
| Tutor time saved | 5+ hours per week per tutor |
| Homework generation | 30 seconds vs. 20+ minutes manually |
| Student engagement | Tutors report higher homework completion rates |

## Why this worked

AI works when it solves a real problem — not just "because it's trendy."

Misha didn't ask for a chatbot. He asked for a tool that makes tutors better at their job. The AI assistant became a competitive advantage: something his competitors don't offer, that tutors genuinely love using, and that parents see as premium value.

This is the pattern we see at [HermesOps](https://hermesops.com) across industries — the best AI implementations aren't standalone products. They're features that make an existing business better.

For a different kind of ROI story, see how we [cut a UK firm's call costs from £24K to £4K with an AI voice agent](/blog/surveying-firm-case-2026/).

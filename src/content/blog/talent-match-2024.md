---
title: "1st Place — RAG-Powered Resume Matching System"
date: 2024-06-01
category: "hackathon"
result: "1st place"
description: "Won 1st place building a RAG-based resume matching system using LLMs and vector search — the same tech stack behind our AI agent work."
emoji: "🥇"
tags: ["RAG", "LLM", "NLP", "Vector Search", "AI Agents"]
featured: true
---

Won 1st place at Talent Match Hack by building an intelligent resume matching system powered by RAG (Retrieval-Augmented Generation).

## The competition

Talent Match Hack brought together AI engineers to tackle a core recruiting problem: the mismatch between how candidates describe themselves and how job requirements are written. Keyword-based filtering misses strong candidates; manual screening doesn't scale. The task was to build an AI that bridges that gap.

## How it works

The system matches candidates to job descriptions using a three-layer architecture:

- **Embedding layer** — resumes and job descriptions are encoded into dense vectors using a sentence transformer. This captures semantic meaning rather than exact keyword overlap, so "managed a team of engineers" matches "engineering leadership experience" even without shared words.
- **Vector search** — candidate embeddings are indexed and retrieved by cosine similarity against the job description embedding. This gives an initial shortlist of semantically relevant candidates.
- **LLM reranking** — the top candidates from vector search are passed to an LLM with the full resume and job description for nuanced evaluation: skill gaps, years of experience match, seniority alignment, red flags. The LLM outputs a fit score and a brief reasoning summary.

The RAG pipeline ensures the LLM works from actual resume content rather than generating from memory — critical for preventing hallucinated qualifications.

## Tech stack

LangChain · OpenAI API · FAISS · sentence-transformers · Python

## Why this matters for what I do now

This is the exact same architecture behind the AI systems we build at [HermesOps](https://hermesops.com) — retrieval-augmented generation, LLM orchestration, and domain-specific knowledge bases. The difference is we now apply it to customer support, lead qualification, and business process automation instead of recruiting.

Winning this competition in a time-boxed environment was a validation that our technical approach works — and works better than keyword matching or naive LLM prompting.

See this RAG stack in production: [AI Chatbot for Education — +10% Sales Conversion](/blog/tutor-ai-agent-2026/).

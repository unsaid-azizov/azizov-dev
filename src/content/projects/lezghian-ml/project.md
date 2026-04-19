---
title: "Lezghian ML — AI for Language Preservation"
description: "Founded a 1,000+ volunteer community preserving the Lezgin language through AI. Built the first Russian-Lezgin translator, TTS model, and open-source language corpus."
category: "personal"
tags: ["NLP", "Translation", "TTS", "Language Preservation", "HuggingFace", "Python"]
featured: true
coverImage: "/images/projects/lezghian-ml-cover.jpg"
metrics:
  volunteers: "1,000+"
  models: "6"
  datasets: "5"
  syntheticCorpus: "200K sentences"
links:
  huggingface: "https://huggingface.co/leks-forever"
  telegramBot: "https://t.me/lek_translator_bot"
  telegramCommunity: "https://t.me/lezgian_community"
startDate: 2024-09-01
endDate: null
status: "active"
order: 5
---

# Lezghian ML — AI for Language Preservation

Founded an international community of ML enthusiasts and linguists dedicated to preserving the Lezgin language — a UNESCO-classified vulnerable language spoken by ~800,000 people in Dagestan and Azerbaijan.

Honored with the [Lezgi Star award](/blog/lezgi-star-2025/) for this work.

## What we built

### Russian ↔ Lezgin Translator 2.0

Fine-tuned NLLB-200-distilled-600M model for translation between Russian and Lezgin. The [2.0 release](/blog/lezgin-translator-2-2026/) trained on a 200K synthetic corpus tagged via Gemini, significantly improving quality over v1. Available as a [Telegram bot](https://t.me/lek_translator_bot) and on [HuggingFace](https://huggingface.co/spaces/leks-forever/lez-rus_2).

### Lezgin Text-to-Speech

Trained a VITS-based TTS model using 30 hours of studio-recorded speech in collaboration with publicdictionary.org. One of the first TTS systems for the Lezgin language — integrated directly into the translator.

### Language corpus & datasets

Assembled the largest open Lezgin language corpus with 1,000+ volunteers:

| Dataset | Size | Description |
|---------|------|-------------|
| Synthetic corpus | 200K sentences | Tagged via Gemini, used for Translator 2.0 |
| Manual annotations | 40K sentences | Community-validated by linguistic experts |
| Bible (Lezgin-Russian) | 13.8K parallel sentences | Largest parallel corpus |
| Lezgi Gazet Archives | 402 articles | News articles corpus |
| CNAL Lezgin-Russian | 762 entries | Literary translations |
| Lez Wiki | 4.4K articles | Wikipedia dump |

### Multilingual embeddings

Fine-tuned multilingual-e5-large and LaBSE models for Lezgin language understanding and semantic search.

## Impact

- **1,000+ volunteers** contributing translations and validations
- First open-source NLP toolkit for the Lezgin language
- Telegram bot used by native speakers daily
- [Lezgi Star award](/blog/lezgi-star-2025/) for cultural preservation through AI
- All models and datasets freely available on [HuggingFace](https://huggingface.co/leks-forever)
- Also building [Lekion](/projects/lekion/project/) — a professional network for the Lezgian community

## Technologies

Python, PyTorch, HuggingFace Transformers, NLLB, VITS, LaBSE, Gemini, mT5

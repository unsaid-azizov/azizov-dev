---
title: "Lezgin Translator 2.0 — When 1000 People Change the Future of a Language"
date: 2026-03-15
category: "article"
description: "Major update to the Lezgin translator: significantly improved quality via synthetic corpus, integrated text-to-speech, and 1000+ volunteers behind the project."
tags: ["NLP", "TTS", "Lezgin Language", "Cultural Preservation", "Open Source"]
link: "https://huggingface.co/spaces/leks-forever/lez-rus_2"
featured: true
---

Progress update on the volunteer project our team is working on.

## What's new in this release

1. **Quality has significantly improved** — the leks-forever team conducted an experiment: they tagged a synthetic corpus of 200k sentences in Lezgin through Gemini 3 Pro. They trained a new version of the translator on it — according to native speakers, the quality has increased exponentially compared to the previous version, especially for medium-sized sequences.

2. **Text pronunciation model integrated** — in collaboration with publicdictionary.org, using 30 hours of studio recording. Now, translations can not only be read, but also listened to.

## The community behind it

Behind the project are 1000 volunteers who collected almost 40k manually tagged sentences validated by experts. They are currently in post-processing.

The translator scales with data. When we add 40k + other corpora and double (or exponentially increase) the dataset — the quality will take another leap.

## What's next

This is a beta. The weights are not final, there are problems with short phrases, but we have found a mechanism that will allow us to easily scale the dataset.

I like this project because even a language with a small audience can get modern AI tools thanks to people who care. We have brought a language into the category of extremely vulnerable, and this is already significant progress.

Thank you to everyone who tagged, recorded, and tested. You are making history.

## Links

- [Translator in Telegram](https://t.me/lek_translator_bot)
- [Try on HuggingFace (with TTS)](https://huggingface.co/spaces/leks-forever/lez-rus_2)
- [Dataset (200k synthetic)](https://huggingface.co/datasets/leks-forever/synthetics_200k)
- [Community group](https://t.me/lek_translator_info)

Our team is putting everything in open source and is open to collaborations.

This work was recognized with the [Lezgi Star Award (Lezgi Ghed)](/blog/lezgi-star-2025/) by FLNK for AI-driven language preservation.

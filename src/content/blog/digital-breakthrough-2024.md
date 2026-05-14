---
title: "2nd Place at Digital Breakthrough — Multimodal Video AI"
date: 2024-03-01
category: "hackathon"
result: "2nd place"
description: "Built a multimodal video classification system combining visual and audio features at one of Russia's top hackathons."
emoji: "🥈"
tags: ["Computer Vision", "Multimodal AI", "Video Processing", "Deep Learning"]
featured: true
---

Secured 2nd place at Digital Breakthrough — one of Russia's largest national hackathons, organized by the ANO "Russia — Land of Opportunity" platform. The event draws thousands of participants across Russia and covers AI, design, and product challenges.

## The challenge

Build a multimodal video classification system that accurately categorizes video content by combining all available signals: visual frames, audio, and associated metadata. The key difficulty was that no single modality was sufficient on its own — some content types are visually ambiguous but distinctive by audio, and vice versa.

## Our approach

Designed a late-fusion multimodal pipeline:

- **Visual stream** — sampled keyframes at regular intervals, extracted deep visual embeddings using a pretrained CNN backbone
- **Audio stream** — converted audio to Mel spectrograms, processed with an audio classification model to capture tonality, speech vs. music, ambient sound
- **Text/metadata stream** — embedded titles and descriptions to capture semantic context
- **Fusion** — combined the three embedding streams with learned attention weights that let the model downweight unreliable modalities per sample

The attention-weighted fusion was the key differentiator. A simple concatenation of streams tends to overfit to the dominant modality; learned fusion adapts the contribution of each stream based on sample-level confidence.

## Tech stack

PyTorch · Hugging Face Transformers · torchaudio · OpenCV · librosa

## Takeaway

This competition pushed me deeper into multimodal AI — understanding how to fuse signals from fundamentally different data types into a single coherent representation. That same design pattern now shows up in the document processing and data intelligence work we do at [HermesOps](https://hermesops.com), where inputs often combine structured data, unstructured text, and attached files.

For more on the AI competition journey: [1st place at AIIJC](/blog/aiijc-2021/) and [top 5% in Google's Kaggle competition](/blog/google-kaggle-2023/).

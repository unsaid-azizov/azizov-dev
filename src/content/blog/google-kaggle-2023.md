---
title: "Top 5% in Google's Kaggle Competition"
date: 2023-05-02
category: "hackathon"
result: "Top 5% — Silver Medal"
description: "Placed 58th out of 1,000+ teams in Google's Isolated Sign Language Recognition challenge on Kaggle."
emoji: "🏅"
tags: ["Computer Vision", "TensorFlow", "Kaggle", "Google"]
link: "https://www.kaggle.com/competitions/asl-signs"
featured: true
---

Placed 58th out of 1,000+ teams (top 5%) in the Google — Isolated Sign Language Recognition Kaggle competition, earning a silver medal.

## The challenge

Google tasked participants with building a model to classify isolated American Sign Language (ASL) signs from short video sequences. The dataset contained ~94,000 video clips across 250 distinct sign classes, with hand landmark sequences extracted via MediaPipe — 21 keypoints per hand, per frame, with x/y/z coordinates.

The competition attracted over a thousand teams, including experienced Kaggle Grandmasters and research groups. Google's stated goal was to make ASL recognition accessible on everyday mobile hardware, so the winning submissions needed to perform well within TFLite inference constraints.

## Approach

The core of my solution was a transformer-based sequence model operating on hand landmark features rather than raw pixel data. Key decisions:

- **Landmark-based input** — working from MediaPipe keypoints rather than raw video frames dramatically reduced input dimensionality and improved generalization
- **Temporal modeling** — a transformer encoder captured the temporal progression of each sign across frames
- **TFLite optimization** — quantization and pruning to hit the mobile inference targets Google specified
- **Data augmentation** — hand mirroring, time warping, and spatial jitter to make the model robust to signing variation

The sign language domain is unusual: performance is sensitive to signer-specific style variation, so augmentation choices matter more than they do in standard image classification tasks.

## Tech stack

MediaPipe · TensorFlow / TFLite · NumPy · Pandas · Kaggle Notebooks

## Why it matters

This was my second major project in sign language AI (after [AIIJC](/blog/aiijc-2021/), where I built a Russian Sign Language system that won Russia's largest AI competition). Placing top 5% against Kaggle Grandmasters — on a problem I'd already spent serious time on — confirmed that the technical depth I was building was competitive at an international level.

Two months after this competition I joined Sberbank's AI research team.

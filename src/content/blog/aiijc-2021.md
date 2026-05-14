---
title: "1st Place at Russia's Largest AI Competition — AIIJC"
date: 2021-11-01
category: "hackathon"
result: "1st place — Absolute Winner"
description: "Won 1st place at AIIJC, pitched the winning AI solution to government leaders on national television. Built a sign language recognition system using deep learning."
emoji: "🥇"
tags: ["Computer Vision", "Deep Learning", "Sign Language", "AI Competition"]
featured: true
---

Won 1st place (Absolute Winner) at AIIJC — Russia's largest AI competition for young engineers, in the Inclusive Environment Track.

## What is AIIJC

AIIJC (Artificial Intelligence: Intelligent Systems for Industry and Competitive Economy) is organized by the Russian AI Alliance and brings together thousands of university and school-age participants annually. The Inclusive Environment track challenged teams to build AI systems that improve accessibility for people with disabilities.

## The project

Built a real-time neural network for recognizing finger-spelling letters and individual words of Russian sign language (RSL). The system takes a live camera feed, isolates hand regions, classifies gesture sequences, and outputs text — enabling deaf and hard-of-hearing users to communicate without an interpreter present.

The technical challenge was twofold: recognizing static hand configurations for individual letters and distinguishing dynamic gesture sequences for full words, all with low latency for real-time use.

## The approach

- **Hand detection** — localized hand regions in each video frame using a detection model
- **Feature extraction** — CNN-based classification over normalized hand crops
- **Sequence model** — temporal smoothing to handle natural variation in signing speed and style
- **Dataset** — collected and annotated a custom RSL dataset, since large-scale public RSL data was limited at the time

Building the dataset was as much of the work as building the model. We recorded, labeled, and augmented training samples across multiple signers to improve generalization.

## The stage

Presented the winning solution to senior government officials on national television. The competition brought together thousands of participants from across Russia, and our project was selected as the absolute best in the inclusive environment track.

I was in school at the time. Getting on national TV and standing in front of government officials while explaining a neural network I had built — that was a formative moment.

This was the moment that opened the door to everything that followed — Sberbank, XLabs, and eventually founding my own agency.

See the full journey in [the about page](/about/) or read about the [Google Kaggle silver medal](/blog/google-kaggle-2023/) that came two years later.

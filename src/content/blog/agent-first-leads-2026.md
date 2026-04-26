---
title: "AI Voice Agent Goes Live — Two Leads on Day One"
date: 2026-02-17
category: "article"
description: "After phased rollout with ElevenLabs, Twilio, and Vapi, our AI voice agent captured two qualified leads on its first day handling 100% of inbound calls."
tags: ["AI Voice Agent", "Case Study", "ElevenLabs", "Twilio", "Vapi", "Lead Generation"]
featured: true
---

After weeks of phased implementation — testing call flows, refining the ElevenLabs voice model, and gradually increasing the agent's share of incoming traffic — we flipped the switch to 100%.

## The result

Two qualified leads captured on day one. The client was relaxing with their family on the weekend. The agent was working.

## How we deploy AI voice agents

We don't deploy AI agents and walk away. At [HermesOps](https://hermesops.com), every voice agent built with ElevenLabs and Twilio goes through a staged rollout:

### Phase 1: Shadow mode
The agent listens to real calls but doesn't respond. We analyze transcripts to validate its understanding of caller intent, identify edge cases, and tune the conversation prompts.

### Phase 2: Partial traffic (10-30%)
The agent handles a slice of incoming calls. We monitor:
- **Call completion rate** — does the caller stay on the line?
- **Intent recognition accuracy** — does the agent understand what they need?
- **Lead quality** — are the captured details correct and actionable?
- **Fallback rate** — how often does it need to transfer to a human?

### Phase 3: Full deployment
Once accuracy and lead capture rates meet our threshold (95%+ intent recognition, <5% fallback), we go live with 100% of calls.

## The tech behind it

- **ElevenLabs** — ultra-realistic voice synthesis, custom voice cloning for brand consistency
- **Twilio** — call routing, SIP trunking, call recording for QA
- **Vapi** — voice AI orchestration layer connecting LLM, TTS, and STT
- **OpenAI GPT-4** — conversation logic and intent classification
- **n8n / Make.com** — workflow automation for CRM updates and email notifications
- **Deepgram** — real-time speech-to-text transcription

## The bigger picture

An AI voice agent that works 24/7 doesn't just save money — it captures opportunities that would otherwise be lost. Evenings, weekends, holidays. Every call answered, every lead qualified, every opportunity captured.

This is the difference between an answering machine and an AI receptionist.

Read the full case study: [AI Voice Agent Cuts Call Costs from £24K to £4K](/blog/surveying-firm-case-2026/).

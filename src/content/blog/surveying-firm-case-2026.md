---
title: "Case Study: AI Voice Agent Cuts Call Costs from £24K to £4K"
date: 2026-02-05
category: "article"
description: "How we built an AI voice agent with ElevenLabs and Twilio that replaced a £2,000/month outsourced call center for a UK surveying firm — saving 83% on reception costs."
tags: ["AI Voice Agent", "Case Study", "ElevenLabs", "Twilio", "Vapi", "Business Automation", "Lead Qualification"]
featured: true
---

I just helped a surveying firm in the UK reduce their call reception costs from £24,000 per year to £4,000 using an AI voice agent.

## The problem

The firm was paying Moneypenny £2,000/month for outsourced call handling. Professional, but expensive — and limited to business hours.

## The solution: AI voice agent with ElevenLabs + Twilio

At [HermesOps](https://hermesops.com), we built a conversational AI voice agent that handles 100% of inbound calls:

- **ElevenLabs** for natural-sounding text-to-speech — the voice is indistinguishable from a real receptionist
- **Twilio** for telephony infrastructure — call routing, recording, and SMS notifications
- **OpenAI GPT-4** for conversation logic — understanding caller intent, asking the right follow-up questions
- **n8n** for workflow automation — routing qualified leads to the right team member via email
- **HubSpot CRM integration** — every call is logged with contact details, service requested, and urgency

### What the agent does

1. Answers every call like a live person — 24/7, no hold times
2. Determines what service the client needs (boundary survey, topographic, measured building)
3. Collects project details, location, and deadlines
4. Validates contact details
5. Sends a structured ticket to the team via email

The email looks like this:

> "John Smith needs a boundary survey for a property sale in Reading. Deadline: 3 weeks. Phone: 077XX"

A qualified lead ready to work.

## The numbers

| Metric | Before (Moneypenny) | After (AI Agent) |
|--------|---------------------|------------------|
| Monthly cost | £2,000 | £60 |
| Annual cost | £24,000 | £4,000 |
| Availability | Business hours | 24/7/365 |
| Cost per call | ~£10 | £0.30 |
| Lead capture | During hours only | Evenings, weekends, holidays |

## The tech stack

- **Voice AI**: ElevenLabs (TTS), Deepgram (STT)
- **Telephony**: Twilio
- **LLM**: OpenAI GPT-4 for conversation
- **Automation**: n8n for workflows
- **CRM**: HubSpot integration
- **Hosting**: Docker on a VPS

## Where AI voice agents apply

This same architecture works for any business that handles inbound calls:

- **Law firms** — screening consultations, conflict checks, intake forms
- **Real estate agencies** — qualifying buyers, booking viewings
- **Recruiting firms** — filtering candidates, scheduling interviews
- **Medical practices** — patient triage, appointment booking
- **Trades & services** — plumbers, electricians, HVAC — capturing leads after hours

ROI is instantaneous. The agent paid for itself in the first week.

After phased testing, this agent [went live handling 100% of inbound calls](/blog/agent-first-leads-2026/) — capturing two qualified leads on the first day.

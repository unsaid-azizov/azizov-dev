---
client: "Stroyassortiment"
industry: "Construction materials"
title: "How an AI inbox router connected 16 manufacturing inboxes in two weeks."
description: "An AI email-routing system classified 1,123 messages across 16 departmental inboxes, sent each request to the right owner, and recorded the relevant context in the CRM."
system: "AI inbox routing for Outlook, Exchange, Gmail, and IMAP email, with LLM classification, department routing, CRM handoff, monitoring, and an on-premise local-LLM option."
result: "The deployment connected 16 inboxes, processed 1,123 emails at an average routing time of 1.2 seconds, and replaced manual department-by-department triage with structured routing."
metrics:
  - value: "16"
    label: "inboxes unified"
    context: "Departmental channels connected to one routing layer."
  - value: "1,123"
    label: "emails processed"
    context: "Messages classified across the connected inboxes."
  - value: "1.2 sec"
    label: "average routing time"
    context: "Average time from email arrival to routing decision."
  - value: "2 weeks"
    label: "kickoff to live"
    context: "Reported delivery time for the 16-inbox deployment."
  - value: "CRM"
    label: "department handoff"
    context: "Messages are batched and sent to the right team with context."
featured: true
order: 3
gateTitle: "See the inbox-routing system"
gateDescription: "Request the routing logic, handoff rules, and deployment approach behind the shared-inbox workflow."
---

## The problem: a shared inbox was running operational work

Manufacturing businesses receive a mix of RFQs, purchase requests, supplier offers, logistics confirmations, internal messages, and spam. In this deployment, messages arrived across 16 departmental inboxes covering procurement, finance, marketing, HR, logistics, and sales. Ownership was hard to track, demand competed with operational email, and every handoff relied on someone reading, interpreting, and forwarding messages manually.

## What we built: routing rules in plain language

We built an AI inbox router that reads each incoming message, classifies its purpose, selects the responsible person or department, and records the decision. Routing rules are defined in plain operational language: for example, RFQs and purchase orders go to sales, delivery confirmations go to supply, and bulk mailings are ignored or tagged instead of being forwarded.

The system works with Outlook, Exchange, Gmail, and corporate IMAP email. It can forward or tag the message, batch related work for a department, and create a CRM handoff with the sender, subject, category, routing decision, and rationale behind it.

## How the rollout reduced deployment risk

The 16-inbox deployment went from kickoff to live in two weeks and processed 1,123 emails at an average routing time of 1.2 seconds. For a separate shared-sales-inbox deployment, the system first ran in shadow mode: it observed real email traffic without acting, allowing the routing rules to be validated before live handoffs began.

Once live, the shared inbox was divided across three roles. Staff kept using their existing email clients, so the operational change did not require a new helpdesk interface or user-training programme.

## What changed

The operating model connects messages from 16 inboxes to a single routing layer. Teams receive contextual work in the CRM or their existing inboxes instead of manually triaging every department channel first. The system is designed to make routing decisions visible and reviewable, not to hide operational work behind an opaque automation.

## When on-premise email AI matters

Some organisations cannot send email content through a third-party AI service. For those environments, the same routing pattern can run with local language models inside the client's network. This keeps message content within the organisation while preserving classification, routing, and audit-log capabilities.

## What this implementation does not claim

This case documents inbox count, message volume, routing speed, and rollout time. We do not publish a labour-saving or revenue figure because a verified measurement was not available from the deployment.

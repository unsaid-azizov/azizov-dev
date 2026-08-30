---
client: "Confidential startup"
industry: "AI software"
title: "A multi-agent AI receptionist built to work across CRM and booking systems."
description: "A confidential startup needed one AI receptionist architecture that could adapt to live CRM, scheduling, and company-knowledge data rather than being hard-wired to a single integration."
system: "Supervisor-agent architecture with specialised agents, long-term memory, RAG, CRM integrations, and Google and Yandex Calendar booking integrations."
result: "A configurable foundation for an AI receptionist across amoCRM, Bitrix24, YClients, Google Calendar, and Yandex Calendar, plus settings interfaces and a simplified codebase."
metrics:
  - value: "5"
    label: "CRM and booking integrations"
    context: "amoCRM, Bitrix24, YClients, Google Calendar, and Yandex Calendar were unified under one system."
  - value: "~6K"
    label: "lines removed"
    context: "A large section of the product codebase was refactored while preserving functionality."
  - value: "RAG"
    label: "company knowledge access"
    context: "Specialised agents can use company-specific information when answering customers."
featured: true
order: 8
gateTitle: "See the multi-agent architecture"
gateDescription: "Request the architecture principles for configurable CRM, booking, memory, and knowledge-agent systems."
---

## The problem: one receptionist across different operating stacks

A startup had attempted to build a multi-agent receptionist internally but needed a system that could operate across different CRM and booking products. A bot tied to one provider would not solve the product problem: customers needed a configurable assistant that could work with their own data and scheduling stack.

## What we built: a supervisor that adapts specialised agents

We built a supervisor-agent architecture. The supervisor reads the live CRM and booking context, then prepares and updates the instructions used by specialised agents. This avoids hard-coding a separate conversational flow for every CRM or calendar configuration.

The system combines amoCRM, Bitrix24, YClients, Google Calendar, and Yandex Calendar. It also uses retrieval-augmented generation for company-specific answers and long-term memory so the assistant can preserve customer context across conversations.

## Product work beyond the agent flow

The delivery included settings pages for configuring agents and a refactor that removed roughly 6,000 lines from a large area of the codebase while preserving functionality. That work matters because an AI receptionist is not only a prompt: it needs configuration, integrations, memory, and maintainable product behaviour.

## What this case does and does not prove

This is an architecture and product-delivery case. The client remains confidential because the product had not launched publicly at the time of publication. We do not claim bookings, conversations handled, revenue, or labour savings because verified live-use metrics were not available.

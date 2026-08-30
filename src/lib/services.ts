export type ServiceDefinition = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  headline: string;
  lede: string;
  audience: string;
  capabilities: Array<{ title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  proof: Array<{ value: string; label: string; context: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedCaseStudies: string[];
  relatedSolutions: string[];
  showInCatalog?: boolean;
  upworkProductUrl?: string;
  pricing: {
    label: string;
    detail: string;
    features: string[];
    timeline: string;
    addOns: string[];
    terms: string;
  };
};

export const services: ServiceDefinition[] = [
  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    seoTitle: "AI Voice Agents & Receptionists",
    description: "AI voice agents answer inbound calls, qualify enquiries, book the right next step, and record the outcome in the CRM.",
    headline: "Make every serious call useful—even when your team cannot answer.",
    lede: "An AI voice agent gives callers a clear, useful next step while capturing the context your office needs to follow through. It is designed around your qualification questions, handoff rules, calendar, and CRM—not a generic call script.",
    audience: "For service businesses where calls bring in new work and the people who can answer are often on-site, driving, with customers, or out of hours.",
    capabilities: [
      { title: "Answer and qualify", description: "Handle inbound calls, collect the details that determine fit, and distinguish an urgent job from a general enquiry." },
      { title: "Book and route", description: "Offer the right next step—such as a callback, survey, viewing, or appointment—and route the outcome to the responsible person." },
      { title: "Keep the CRM useful", description: "Write contact details, call reason, qualification context, and the agreed action into the workflow your team already uses." },
    ],
    process: [
      { title: "Map the call journey", description: "Define the calls worth handling, the questions that matter, and the situations that require a person." },
      { title: "Connect the operating stack", description: "Connect phone numbers, scheduling, CRM fields, and notification paths around the existing team process." },
      { title: "Test real scenarios", description: "Review conversations and edge cases before relying on the agent for live inbound demand." },
      { title: "Refine from live calls", description: "Use real call outcomes to improve qualification, escalation, and the handoff information the team receives." },
    ],
    proof: [
      { value: "83%", label: "operating-cost reduction", context: "Ekron Surveyors, compared with the prior call-handling cost." },
      { value: "2 weeks", label: "kickoff to live", context: "Reported implementation time for the Ekron voice-agent workflow." },
      { value: "£1,200", label: "lead captured while on holiday", context: "Reported by the client after an agent-handled inbound call." },
    ],
    faqs: [
      { question: "What does an AI voice agent do?", answer: "An AI voice agent answers an inbound call, asks the questions needed to qualify the enquiry, gives the caller a useful next step, and records the outcome for the team." },
      { question: "Can an AI voice agent book appointments?", answer: "Yes, when the calendar rules and availability are connected. The agent can book the next appropriate step or hand the request to a person when it falls outside the agreed rules." },
      { question: "When should a call be handed to a person?", answer: "Handoffs are designed around the business: urgent cases, complex requests, sensitive conversations, or anything outside the approved qualification and booking flow can be escalated." },
    ],
    relatedCaseStudies: ["ekron-ai-receptionist", "universal-ai-receptionist"],
    relatedSolutions: ["ai-receptionist", "inquiry-and-booking-ai"],
    upworkProductUrl: "https://www.upwork.com/services/product/development-it-ai-voice-agent-that-answers-your-calls-24-7-and-books-appointments-2080956394428355760",
    pricing: {
      label: "From $300/mo",
      detail: "Stop missing inbound calls",
      features: ["Inbound receptionist and call handoff", "Qualification, booking, and call summaries", "Calendar or CRM connection"],
      timeline: "Typical launch: 1–2 weeks",
      addOns: ["SMS confirmations and reminders", "After-hours or overflow-only handling", "Extra phone lines or languages"],
      terms: "One-time launch work and call usage are scoped from your call volume and integrations.",
    },
  },
  {
    slug: "chatbots",
    name: "Lead Qual & Nurturing",
    seoTitle: "AI Lead Qualification & Nurturing Systems",
    description: "AI lead qualification turns website, messaging, and social enquiries into qualified opportunities with useful context for the next person.",
    headline: "Turn the first enquiry into a qualified opportunity.",
    lede: "The system asks the practical questions that shape a quote or booking, uses approved business information, and moves the enquiry into the right human workflow when needed. It can run in web chat or the messaging channels where customers already contact you.",
    audience: "For teams receiving enquiries through web chat, WhatsApp, Instagram, Telegram, or other messaging channels where context is routinely lost before sales can act.",
    capabilities: [
      { title: "Respond with approved context", description: "Use the information, catalogue, policies, and instructions the business has approved rather than inventing an answer." },
      { title: "Qualify the enquiry", description: "Collect the details that determine whether to quote, book, route, or ask a teammate to take over." },
      { title: "Create a useful handoff", description: "Pass the conversation, lead details, intent, and next action into the CRM or the responsible team's existing channel." },
    ],
    process: [
      { title: "Choose the conversion moment", description: "Identify what a qualified conversation should produce: a booked visit, a scoped request, a quote-ready lead, or a human handoff." },
      { title: "Prepare the knowledge and rules", description: "Organise the product, service, and process information the assistant may use, along with clear boundaries for uncertainty." },
      { title: "Connect channels and CRM", description: "Make the assistant available where customers already enquire and keep one structured record for the team." },
      { title: "Monitor real conversations", description: "Review unanswered questions, retrieval gaps, and awkward multi-message flows so the system improves with use." },
    ],
    proof: [
      { value: "100+", label: "leads per day", context: "Inbound volume handled by the MIX-STROY qualification workflow." },
      { value: "5", label: "inbound channels", context: "Instagram, WhatsApp, Telegram, Avito, and MAX were connected to one workflow." },
      { value: "1", label: "CRM view", context: "Qualified records are routed into Bitrix24 for the sales team." },
    ],
    faqs: [
      { question: "What does AI lead qualification do?", answer: "It answers from approved information, collects the details that determine fit, and creates a clear next action—such as a quote-ready handoff, booking, or escalation to sales." },
      { question: "Can it use product or company information?", answer: "Yes. The system can be connected to approved knowledge or live operational sources, with boundaries for what it should answer and when it should escalate." },
      { question: "Can it hand qualified enquiries to sales?", answer: "Yes. Once an enquiry reaches the agreed qualification point, it can create or update a CRM record and route the captured context to the correct owner." },
    ],
    relatedCaseStudies: ["mix-stroy-lead-qualification", "dubai-real-estate-booking-agent"],
    relatedSolutions: ["messaging-and-dm-conversion", "inquiry-and-booking-ai"],
    upworkProductUrl: "https://www.upwork.com/services/product/development-it-ai-chatbot-that-captures-leads-and-books-appointments-2080990669338647831",
    pricing: {
      label: "From $200/mo",
      detail: "Turn enquiries into qualified opportunities",
      features: ["One customer channel or website chat", "Lead capture and qualified handoff", "Approved knowledge and conversation tuning"],
      timeline: "Typical launch: 1–2 weeks",
      addOns: ["RAG knowledge base", "WhatsApp, Instagram, or Telegram", "HubSpot or GoHighLevel integration", "Multi-step quote intake, calendar, and live-data connections"],
      terms: "One-time launch work and message usage are scoped from the selected channels and data sources.",
    },
  },
  {
    slug: "inbox-crm-automation",
    name: "Inbox & CRM Automation",
    seoTitle: "Inbox & CRM Automation",
    description: "Inbox and CRM automation classifies incoming work, routes it to the right owner, and preserves the context needed to act.",
    headline: "Stop letting valuable work disappear between the inbox and the CRM.",
    lede: "When every email or enquiry starts as a manual sorting task, leads wait and ownership becomes unclear. This service builds a visible routing layer so requests reach the right person with the information needed to act.",
    audience: "For teams with shared inboxes, disconnected departments, manual forwarding, or CRM records that are created too late to support a useful follow-up.",
    capabilities: [
      { title: "Classify incoming work", description: "Identify the purpose of an incoming message—such as an RFQ, purchase request, supplier offer, or sales enquiry—using the business's own routing rules." },
      { title: "Route with ownership", description: "Send, tag, batch, or create a CRM handoff for the right department or person instead of leaving a shared inbox as the operating system." },
      { title: "Make decisions reviewable", description: "Keep the category, destination, and reasoning visible so teams can validate and refine the workflow instead of trusting a black box." },
    ],
    process: [
      { title: "Audit channels and ownership", description: "Map the inboxes, message types, destinations, and exceptions that make the current process difficult to manage." },
      { title: "Write the routing rules", description: "Turn operational instructions into plain-language categories and handoff rules the team can review." },
      { title: "Validate before live action", description: "Use observation or a controlled rollout to compare decisions with the existing process before relying on automated handoffs." },
      { title: "Operate and improve", description: "Monitor misroutes, missing data, and changed ownership so the workflow keeps matching the organisation." },
    ],
    proof: [
      { value: "16", label: "inboxes unified", context: "Departmental channels connected to one routing layer at Stroyassortiment." },
      { value: "1,123", label: "emails processed", context: "Messages classified across the connected inboxes in the published deployment." },
      { value: "1.2 sec", label: "average routing time", context: "Average time from email arrival to routing decision in that deployment." },
    ],
    faqs: [
      { question: "What does inbox automation handle?", answer: "Inbox automation can classify incoming messages, identify the responsible owner or department, route or tag the message, and create a CRM handoff with the relevant context." },
      { question: "Can the system work with existing email tools?", answer: "The published inbox-routing deployment supports Outlook, Exchange, Gmail, and corporate IMAP email. The right integration is selected around the team's existing operating stack." },
      { question: "Can sensitive email stay inside the organisation?", answer: "For teams that cannot send email content to third-party AI services, the same routing pattern can be designed around local models inside the client's network." },
    ],
    relatedCaseStudies: ["inbox-router", "hobopro-email-operations"],
    relatedSolutions: ["crm-follow-up-and-reactivation", "private-ai-on-premise"],
    upworkProductUrl: "https://www.upwork.com/services/product/development-it-ai-inbox-router-that-sorts-and-routes-your-shared-email-2081037298182050992",
    pricing: {
      label: "From $300/mo",
      detail: "Keep shared inboxes under control",
      features: ["One shared inbox and routing rules", "Classification, owner handoff, and audit trail", "CRM record or team-notification connection"],
      timeline: "Typical launch: about 2 weeks",
      addOns: ["Additional inboxes and departments", "Local-model / on-prem deployment", "Follow-up sequences and CRM cleanup"],
      terms: "One-time launch work is scoped from the number of inboxes, routes, and systems connected.",
    },
  },
  {
    slug: "ai-revenue-systems",
    showInCatalog: false,
    name: "AI Revenue Systems",
    seoTitle: "AI Revenue Systems for Home Services",
    description: "AI revenue systems connect lead capture, qualification, routing, booking, CRM, and follow-up into one operating workflow.",
    headline: "Build around the moments where viable demand gets lost.",
    lede: "An AI revenue system is not a single bot. It connects the channels where interest arrives with the questions, people, calendar, and CRM steps required to turn a viable enquiry into the right next action.",
    audience: "For home-service and operational businesses that lose work through slow response, incomplete enquiries, missed calls, scattered conversations, or inconsistent follow-up.",
    capabilities: [
      { title: "Connect the whole demand path", description: "Bring calls, forms, messages, inboxes, CRM records, assignments, and follow-up into one considered workflow." },
      { title: "Prioritise viable opportunities", description: "Collect fit, urgency, location, requirements, and the other information that tells the team which work deserves attention first." },
      { title: "Keep humans at the right points", description: "Automate repeatable handoffs while making it clear when a customer needs judgement, a quote, or a conversation with a team member." },
    ],
    process: [
      { title: "Map revenue leaks", description: "Trace the journey from first signal to booked work and identify where speed, context, ownership, or follow-up is breaking down." },
      { title: "Design the first system", description: "Choose the bottleneck that is worth solving first instead of forcing every part of the operation into one launch." },
      { title: "Integrate the working tools", description: "Connect the relevant channels, CRM, calendar, knowledge, and notifications around the operating process already in place." },
      { title: "Measure the operating change", description: "Review response, qualification, handoff, and follow-up behaviour with the team and refine what is not useful." },
    ],
    proof: [
      { value: "100+", label: "leads per day", context: "Handled by the published MIX-STROY qualification workflow." },
      { value: "5", label: "CRM and booking integrations", context: "Unified under the configurable AI receptionist architecture." },
      { value: "83%", label: "operating-cost reduction", context: "Reported by Ekron Surveyors for its voice-reception workflow." },
    ],
    faqs: [
      { question: "What is an AI revenue system?", answer: "An AI revenue system is an operating workflow that connects inbound demand to qualification, routing, booking, CRM, and follow-up so viable opportunities do not lose context between steps." },
      { question: "Is an AI revenue system only for calls?", answer: "No. The system can connect calls, forms, messages, shared inboxes, calendars, and CRM records. The right first channel depends on where the business currently loses demand." },
      { question: "Where should a business start?", answer: "Start with the bottleneck that has a clear commercial cost, such as missed calls, slow lead response, incomplete qualification, or a CRM that does not drive the next action." },
    ],
    relatedCaseStudies: ["ekron-ai-receptionist", "mix-stroy-lead-qualification", "inbox-router"],
    relatedSolutions: ["ai-receptionist", "inquiry-and-booking-ai", "crm-follow-up-and-reactivation"],
    pricing: {
      label: "Start with a revenue audit",
      detail: "Fix the leak in your sales process",
      features: ["Connect calls, messages, and CRM", "Find where leads go cold", "Build the highest-value fix first"],
      timeline: "Timeline follows the first system selected",
      addOns: ["Voice and messaging channels", "CRM, calendar, and follow-up", "Reporting and ongoing improvement"],
      terms: "The audit identifies the first build and the delivery scope before implementation begins.",
    },
  },
  {
    slug: "custom-ai-agent-development",
    name: "Custom AI Agent Development",
    seoTitle: "Custom AI Agent Development",
    description: "Custom AI agents handle the specific customer and operational workflows that do not fit an off-the-shelf chatbot or automation.",
    headline: "Build the AI agent your operation actually needs.",
    lede: "When the problem is specific to your business, the agent should be too. We design the workflow, knowledge, integrations, and handoff rules around the job your team needs done.",
    audience: "For teams with a valuable workflow that needs more than a generic chatbot, template automation, or a one-size-fits-all AI tool.",
    capabilities: [
      { title: "Start with the real job", description: "Define the specific task, source information, decision rules, and handoff that make the agent useful in day-to-day work." },
      { title: "Connect the tools you already use", description: "Integrate the channels, knowledge, CRM, calendar, or internal tools the workflow needs instead of adding another disconnected dashboard." },
      { title: "Add private or local deployment when needed", description: "Local, private-cloud, controlled API, and hybrid setup are implementation options—not separate products. The choice follows your data and operating needs." },
    ],
    process: [
      { title: "Map the workflow", description: "Identify the job to automate, the inputs it needs, what a good outcome looks like, and when a person should take over." },
      { title: "Prepare the right knowledge", description: "Organise the approved documents, records, and permissions the agent may use." },
      { title: "Build and connect", description: "Implement the agent in the channels and systems where the work already happens." },
      { title: "Test the real edge cases", description: "Validate the answers, handoffs, access boundaries, and update process before the agent becomes part of operations." },
    ],
    proof: [
      { value: "RAG", label: "company knowledge access", context: "The published configurable receptionist uses company-specific knowledge for customer answers." },
      { value: "5", label: "CRM and booking integrations", context: "A published architecture unified five live CRM and calendar integrations." },
      { value: "16", label: "inboxes unified", context: "The routing pattern also has an on-premise local-LLM option for sensitive email." },
    ],
    faqs: [
      { question: "What makes an AI agent custom?", answer: "A custom agent is built around one of your operating workflows: its inputs, business rules, knowledge, integrations, and the situations that should be handed to a person." },
      { question: "Can it work with our internal documents?", answer: "Yes. An agent can search approved documents and operational records, return answers with source links, and follow the access rules set for each user." },
      { question: "Can it be deployed locally or privately?", answer: "Yes, where the workflow requires it. Local, private-cloud, controlled API, and hybrid deployment are considered as part of the build—not sold as a separate service." },
    ],
    relatedCaseStudies: ["universal-ai-receptionist", "inbox-router"],
    relatedSolutions: ["private-ai-on-premise", "knowledge-base-rag"],
    pricing: {
      label: "Scoped build",
      detail: "Build the workflow only your business has",
      features: ["Workflow, tools, and human-handoff design", "Required integrations and knowledge access", "Testing against real operating scenarios"],
      timeline: "Typical build: 3–6 weeks",
      addOns: ["RAG and source-linked answers", "Private or on-prem deployment", "Custom settings UI and extra integrations"],
      terms: "A short discovery defines the delivery plan before the build starts.",
    },
  },
  {
    slug: "lead-capture-estimating",
    showInCatalog: false,
    name: "Lead Capture & Estimating",
    seoTitle: "AI Lead Capture & Estimating",
    description: "AI lead capture and estimating systems turn incomplete enquiries into structured, quote-ready opportunities and the right next action.",
    headline: "Get the information needed to quote the right work faster.",
    lede: "Estimating begins long before a price is sent. This service structures the details arriving in an enquiry—such as the job, location, quantity, images, urgency, and constraints—so the right person can quote, route, or ask the next useful question.",
    audience: "For service and operational teams where response speed, enquiry quality, and correct routing determine whether a job can be won and delivered well.",
    capabilities: [
      { title: "Structure incomplete enquiries", description: "Collect and organise the minimum information required for a useful quote or next step rather than asking the team to interpret message fragments." },
      { title: "Use the right operational context", description: "Connect approved catalogue, stock, pricing, location, image, or business-rule data where it is useful for qualification." },
      { title: "Route quote-ready work", description: "Send the opportunity to the nearest location, right estimator, or correct workflow with the context already captured." },
    ],
    process: [
      { title: "Define quote-ready", description: "Agree the fields, images, business rules, and exceptions that tell the team whether an enquiry can move forward." },
      { title: "Connect trusted data", description: "Use operational information such as live stock or price data only where the source is current enough to support the workflow." },
      { title: "Design the handoff", description: "Set the routing and escalation rules so a person receives a scoped opportunity rather than a raw chat thread." },
      { title: "Review accuracy in use", description: "Monitor retrieval gaps, misidentifications, and edge cases as the catalogue or operational process changes." },
    ],
    proof: [
      { value: "100+", label: "leads per day", context: "Handled by the live MIX-STROY qualification workflow." },
      { value: "5", label: "inbound channels", context: "Consolidated into the lead workflow before routing to sales." },
      { value: "1", label: "CRM view", context: "Structured records are routed into Bitrix24 for the sales team." },
    ],
    faqs: [
      { question: "What does AI-assisted estimating do?", answer: "AI-assisted estimating structures the details that arrive in an enquiry, checks approved operational information where appropriate, and gives the team a better basis for quoting or routing the job." },
      { question: "Can the system work from photos?", answer: "Where photos are useful to the qualification process, the system can use them alongside the customer's description and approved product or service information. Real-world accuracy still depends on the quality of the reference data." },
      { question: "Does it replace an estimator?", answer: "No. It prepares and routes the information an estimator needs. Human judgement remains important for complex, unusual, or high-risk work." },
    ],
    relatedCaseStudies: ["mix-stroy-lead-qualification"],
    relatedSolutions: ["estimating-and-job-routing", "inquiry-and-booking-ai"],
    pricing: {
      label: "From $400/mo",
      detail: "Get quote-ready leads, faster",
      features: ["Structured lead intake and qualification", "Quote-ready handoff to the right owner", "Approved catalogue, location, or image context"],
      timeline: "Typical launch: 2–4 weeks",
      addOns: ["Live stock and pricing lookups", "Photo-based product identification", "Warehouse or estimator routing"],
      terms: "One-time launch work is scoped from the channels, catalogue, and routing rules involved.",
    },
  },
  {
    slug: "reactivation-follow-up",
    showInCatalog: false,
    name: "Reactivation & Follow-up",
    seoTitle: "Lead Reactivation & Follow-up Automation",
    description: "Reactivation and follow-up systems connect lead records, ownership, and next actions so viable opportunities do not expire without a considered response.",
    headline: "Make the leads you already earned usable again.",
    lede: "A lead that is not followed up with clarity and context is often lost demand, not a bad lead. This service makes CRM records, ownership, reminders, and the next communication work together so the team can pursue the right opportunity at the right time.",
    audience: "For teams with incomplete pipelines, dormant opportunities, scattered conversations, or a CRM that stores contact records without consistently driving the next action.",
    capabilities: [
      { title: "Create a shared view of demand", description: "Connect the information arriving from channels and inboxes to a usable CRM record with clear ownership and next steps." },
      { title: "Design thoughtful follow-up", description: "Trigger appropriate reminders and messages around the customer journey without treating every old record as a mass-send opportunity." },
      { title: "Recover operational context", description: "Give a salesperson or operator the original enquiry, prior conversation, and relevant status before they re-engage a lead." },
    ],
    process: [
      { title: "Review the pipeline", description: "Identify where leads become dormant, why ownership breaks down, and which groups are appropriate to revisit." },
      { title: "Define stages and next actions", description: "Make the CRM stages and follow-up rules reflect how the team genuinely qualifies, quotes, books, and closes work." },
      { title: "Connect source context", description: "Bring the original enquiry and previous activity into the record so follow-up is specific rather than blind." },
      { title: "Operate with review", description: "Monitor response patterns, opt-outs, ownership changes, and what the team learns from reactivation activity." },
    ],
    proof: [
      { value: "16", label: "inboxes unified", context: "The published routing deployment connected departmental demand to a single operating layer." },
      { value: "1.2 sec", label: "average routing time", context: "Published average from email arrival to routing decision for that workflow." },
      { value: "2 layers", label: "infrastructure and automation", context: "The HoboPro deployment established an operational email foundation before automation." },
    ],
    faqs: [
      { question: "What is lead reactivation automation?", answer: "Lead reactivation automation helps a team identify viable dormant opportunities, recover their context, assign ownership, and trigger an appropriate next communication through the CRM workflow." },
      { question: "Does follow-up automation send the same message to everyone?", answer: "It should not. Useful follow-up is designed around the lead stage, original context, ownership, and the reason a next message is appropriate." },
      { question: "Why connect inbox automation to follow-up?", answer: "The original message, routing decision, and customer context make the CRM record more useful. Without that context, the follow-up team starts again from an incomplete lead." },
    ],
    relatedCaseStudies: ["inbox-router", "hobopro-email-operations"],
    relatedSolutions: ["crm-follow-up-and-reactivation", "messaging-and-dm-conversion"],
    pricing: {
      label: "Start with a pipeline audit",
      detail: "Follow up before good leads disappear",
      features: ["Find leads worth revisiting", "Give the team the original context", "Create a clear next action"],
      timeline: "Timeline follows the pipeline and channel scope",
      addOns: ["Email and SMS sequences", "CRM cleanup and ownership rules", "Lead scoring and reporting"],
      terms: "The first step maps the pipeline and identifies the appropriate follow-up build.",
    },
  },
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

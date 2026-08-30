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
  upworkProductUrl?: string;
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
  },
  {
    slug: "chatbots",
    name: "Chatbots",
    seoTitle: "AI Chatbots for Lead Qualification",
    description: "AI chatbots turn website, messaging, and social enquiries into qualified conversations with useful context for the next person.",
    headline: "Turn the first message into a real sales conversation.",
    lede: "A useful chatbot does more than answer FAQs. It asks the practical questions that shape a quote or booking, uses approved business information, and moves the conversation into the right human workflow when needed.",
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
      { question: "What makes a business chatbot useful?", answer: "A useful chatbot has a defined job: answer from approved information, collect the details that matter, and create a clear next action instead of trapping people in a generic conversation." },
      { question: "Can a chatbot use product or company information?", answer: "Yes. The system can be connected to approved knowledge or live operational sources, with boundaries for what it should answer and when it should escalate." },
      { question: "Can a chatbot hand conversations to sales?", answer: "Yes. Once the conversation reaches the agreed qualification point, it can create or update a CRM record and route the context to the correct owner." },
    ],
    relatedCaseStudies: ["mix-stroy-lead-qualification", "dubai-real-estate-booking-agent"],
    relatedSolutions: ["messaging-and-dm-conversion", "inquiry-and-booking-ai"],
    upworkProductUrl: "https://www.upwork.com/services/product/development-it-ai-chatbot-that-captures-leads-and-books-appointments-2080990669338647831",
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
  },
  {
    slug: "ai-revenue-systems",
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
  },
  {
    slug: "private-ai-systems",
    name: "Private AI Systems",
    seoTitle: "Private & On-Premise AI Systems",
    description: "Private AI systems give teams controlled access to useful AI while accounting for data location, permissions, deployment, and audit requirements.",
    headline: "Put capable AI inside the controls your organisation actually needs.",
    lede: "Private AI is about the operating and security design around a model: where information lives, who can access it, what sources it can use, and what happens when the system is uncertain. The architecture follows those requirements—not a default hosting preference.",
    audience: "For privacy-sensitive, regulated, or enterprise teams that need AI to work with internal knowledge or workflows without treating a consumer chatbot as the answer.",
    capabilities: [
      { title: "Assess the right deployment", description: "Compare local, private-cloud, controlled API, and hybrid approaches against data sensitivity, reliability, operating cost, and maintenance needs." },
      { title: "Make knowledge usable", description: "Build retrieval-augmented assistants that search approved documents and records, respect permissions, and link people back to the source material." },
      { title: "Control access and behaviour", description: "Design the permissions, update ownership, auditability, and uncertainty boundaries that make an internal AI system fit for work." },
    ],
    process: [
      { title: "Assess data and constraints", description: "Understand the workflow, sources, access model, compliance concerns, and the cost of being wrong before choosing an architecture." },
      { title: "Define trusted sources", description: "Prepare approved documents, records, permissions, and ownership for keeping knowledge current." },
      { title: "Build the controlled workflow", description: "Implement retrieval, access controls, integrations, and the user flow around how people will actually use the system." },
      { title: "Validate and govern", description: "Test answer quality, permission boundaries, and update processes before making the assistant part of day-to-day operations." },
    ],
    proof: [
      { value: "RAG", label: "company knowledge access", context: "The published configurable receptionist uses company-specific knowledge for customer answers." },
      { value: "5", label: "CRM and booking integrations", context: "A published architecture unified five live CRM and calendar integrations." },
      { value: "16", label: "inboxes unified", context: "The routing pattern also has an on-premise local-LLM option for sensitive email." },
    ],
    faqs: [
      { question: "What is a private AI system?", answer: "A private AI system is designed around where data is processed, who can use it, which approved sources it can access, and how the organisation controls and audits its operation." },
      { question: "Does private AI always mean on-premise?", answer: "No. On-premise is one option. The right design depends on the data, compliance obligations, reliability needs, and the cost of maintaining the system." },
      { question: "Can private AI answer from internal documents?", answer: "Yes. A retrieval-augmented assistant can search approved documents and operational records, return answers with source links, and respect the access rules set for each user." },
    ],
    relatedCaseStudies: ["universal-ai-receptionist", "inbox-router"],
    relatedSolutions: ["private-ai-on-premise", "knowledge-base-rag"],
  },
  {
    slug: "lead-capture-estimating",
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
  },
  {
    slug: "reactivation-follow-up",
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
  },
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

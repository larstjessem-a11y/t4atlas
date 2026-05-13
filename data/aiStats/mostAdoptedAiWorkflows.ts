export type MostAdoptedAiWorkflowEntry = {
  slug: string;
  workflow: string;
  category:
    | "writing"
    | "coding"
    | "research"
    | "meetings"
    | "customer-support"
    | "marketing"
    | "operations"
    | "healthcare"
    | "knowledge-management";
  adoptionLevel: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  primaryTools: string[];
  whyItIsAdopted: string;
  businessImpact: string;
  risksOrLimitations: string;
  relatedPage?: string;
};

export const mostAdoptedAiWorkflowsLastUpdated = "2026-05-13";

export const mostAdoptedAiWorkflowsMethodology = {
  title: "Methodology",
  description:
    "This page combines workflow visibility, AI tooling adoption patterns, operational relevance, and T4 Atlas editorial analysis. Adoption levels are directional and intended to describe practical workflow momentum rather than audited enterprise deployment statistics.",
};

export const mostAdoptedAiWorkflowsData: MostAdoptedAiWorkflowEntry[] = [
  {
    slug: "ai-writing-assistants",
    workflow: "AI writing assistants",
    category: "writing",
    adoptionLevel: "very high",
    momentumScore: 95,
    primaryTools: ["ChatGPT", "Claude", "Jasper"],
    whyItIsAdopted:
      "Writing is one of the easiest workflows to augment with AI because almost every business produces text.",
    businessImpact:
      "Teams can draft faster, summarize information, create documentation, and scale content production with fewer bottlenecks.",
    risksOrLimitations:
      "Outputs still require editing, fact-checking, and brand or domain review.",
    relatedPage: "/tools/ai/most-searched-ai-tools",
  },
  {
    slug: "ai-coding-assistants",
    workflow: "AI coding assistants",
    category: "coding",
    adoptionLevel: "very high",
    momentumScore: 94,
    primaryTools: ["GitHub Copilot", "Cursor", "ChatGPT"],
    whyItIsAdopted:
      "Code generation and debugging are high-frequency workflows where small efficiency gains compound quickly.",
    businessImpact:
      "AI coding tools can improve development speed, onboarding, debugging, and implementation throughput.",
    risksOrLimitations:
      "Generated code requires testing, review, security validation, and architectural oversight.",
    relatedPage:
      "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "ai-meeting-summaries",
    workflow: "AI meeting summaries",
    category: "meetings",
    adoptionLevel: "high",
    momentumScore: 89,
    primaryTools: ["Fireflies", "Otter", "Notion AI"],
    whyItIsAdopted:
      "Meetings generate large amounts of operational knowledge that are often lost or poorly documented.",
    businessImpact:
      "AI meeting workflows improve recall, documentation, follow-up tracking, and team coordination.",
    risksOrLimitations:
      "Privacy, consent, and sensitive information handling are important considerations.",
    relatedPage: "/tools/ai/best-ai-tools-for-meetings",
  },
  {
    slug: "ai-research-workflows",
    workflow: "AI research workflows",
    category: "research",
    adoptionLevel: "high",
    momentumScore: 88,
    primaryTools: ["Perplexity", "ChatGPT", "Claude"],
    whyItIsAdopted:
      "AI dramatically reduces the time required to scan, summarize, and compare information.",
    businessImpact:
      "Research-heavy teams can accelerate market analysis, technical exploration, and early-stage learning.",
    risksOrLimitations:
      "Research outputs require source verification and should not replace domain expertise.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "ai-clinical-documentation",
    workflow: "AI clinical documentation",
    category: "healthcare",
    adoptionLevel: "high",
    momentumScore: 86,
    primaryTools: ["Nabla Copilot", "Heidi Health", "Deepgram"],
    whyItIsAdopted:
      "Documentation burden is one of the largest operational friction points in healthcare.",
    businessImpact:
      "AI scribes can reduce note-writing time and improve documentation workflows.",
    risksOrLimitations:
      "Clinical review, patient privacy, consent, and governance remain critical.",
    relatedPage: "/tools/ai/professions/ai-tools-for-doctors",
  },
  {
    slug: "ai-knowledge-management",
    workflow: "AI knowledge management",
    category: "knowledge-management",
    adoptionLevel: "high",
    momentumScore: 82,
    primaryTools: ["Notion AI", "Claude", "ChatGPT"],
    whyItIsAdopted:
      "Organizations increasingly need searchable internal knowledge rather than scattered documents and chats.",
    businessImpact:
      "AI can improve onboarding, internal search, documentation quality, and operational continuity.",
    risksOrLimitations:
      "Knowledge systems fail if teams do not maintain documentation discipline.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
  {
    slug: "ai-customer-support",
    workflow: "AI customer support workflows",
    category: "customer-support",
    adoptionLevel: "medium",
    momentumScore: 78,
    primaryTools: ["Intercom AI", "Zendesk AI", "ChatGPT"],
    whyItIsAdopted:
      "Support operations often contain repetitive questions and structured workflows suitable for automation.",
    businessImpact:
      "AI support workflows can improve response speed and reduce repetitive workload.",
    risksOrLimitations:
      "Poor implementations can damage customer trust and escalate frustration.",
  },
  {
    slug: "ai-marketing-workflows",
    workflow: "AI marketing workflows",
    category: "marketing",
    adoptionLevel: "high",
    momentumScore: 84,
    primaryTools: ["ChatGPT", "Jasper", "Canva AI"],
    whyItIsAdopted:
      "Marketing teams produce large volumes of repetitive but variable content.",
    businessImpact:
      "AI can accelerate campaigns, drafts, brainstorming, and creative iteration.",
    risksOrLimitations:
      "AI-generated marketing can become generic or low quality without strong editorial direction.",
  },
  {
    slug: "ai-operations-automation",
    workflow: "AI operations automation",
    category: "operations",
    adoptionLevel: "medium",
    momentumScore: 80,
    primaryTools: ["Zapier AI", "OpenAI API", "Make"],
    whyItIsAdopted:
      "Operations often involve repetitive coordination tasks between systems and teams.",
    businessImpact:
      "Automation workflows can reduce manual work and improve operational scalability.",
    risksOrLimitations:
      "Poorly monitored automation can create silent failures and operational fragility.",
  },
];

export const mostAdoptedAiWorkflowsKeyFindings = [
  {
    title: "Writing and coding lead adoption",
    description:
      "Text generation and coding workflows remain the most broadly adopted AI categories because they fit directly into existing digital work.",
  },
  {
    title: "Workflow fit matters more than raw model capability",
    description:
      "The most successful AI workflows are usually embedded into existing operational systems and habits.",
  },
  {
    title: "Documentation and summarization are major AI categories",
    description:
      "AI is increasingly used to reduce friction around notes, meetings, summaries, internal knowledge, and communication.",
  },
  {
    title: "Automation is moving from experiments to operations",
    description:
      "More organizations are connecting AI into operational workflows rather than treating it as a standalone chatbot.",
  },
];

export const mostAdoptedAiWorkflowStages = [
  {
    stage: "Content and communication",
    workflows: [
      "AI writing assistants",
      "AI marketing workflows",
      "AI customer support workflows",
    ],
    description:
      "AI is widely used where organizations produce large amounts of communication and text.",
  },
  {
    stage: "Engineering and technical work",
    workflows: [
      "AI coding assistants",
      "AI research workflows",
      "AI knowledge management",
    ],
    description:
      "Technical teams use AI for coding, research, debugging, documentation, and internal knowledge workflows.",
  },
  {
    stage: "Meetings and operational coordination",
    workflows: [
      "AI meeting summaries",
      "AI operations automation",
    ],
    description:
      "AI helps organizations capture knowledge and reduce repetitive operational coordination work.",
  },
  {
    stage: "Healthcare workflows",
    workflows: [
      "AI clinical documentation",
      "AI research workflows",
    ],
    description:
      "Healthcare adoption is strongest in documentation, summarization, and evidence-support workflows rather than autonomous clinical decision-making.",
  },
];
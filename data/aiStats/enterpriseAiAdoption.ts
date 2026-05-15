export type EnterpriseAiAdoptionEntry = {
  slug: string;
  category:
    | "productivity"
    | "customer-support"
    | "software-development"
    | "research-analysis"
    | "marketing"
    | "operations"
    | "knowledge-management"
    | "security";
  adoptionTier:
    | "very high"
    | "high"
    | "growing"
    | "emerging";
  momentumScore: number;
  enterpriseUseCase: string;
  whyCompaniesAdoptIt: string;
  adoptionBarrier: string;
};

export const enterpriseAiAdoptionLastUpdated = "2026-05-15";

export const enterpriseAiAdoptionMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for enterprise AI adoption patterns. It combines public enterprise AI reporting, workflow visibility, startup and vendor positioning, developer tooling adoption, and T4 Atlas analysis. Adoption tiers are directional and should not be interpreted as audited enterprise deployment statistics.",
};

export const enterpriseAiAdoptionData: EnterpriseAiAdoptionEntry[] = [
  {
    slug: "ai-productivity",
    category: "productivity",
    adoptionTier: "very high",
    momentumScore: 95,
    enterpriseUseCase:
      "AI copilots for writing, meetings, email drafting, summaries, document workflows, and daily office productivity.",
    whyCompaniesAdoptIt:
      "Productivity AI is often the easiest enterprise entry point because it integrates into existing workflows and provides immediate visible value.",
    adoptionBarrier:
      "Data governance, privacy concerns, hallucinations, and uneven employee adoption remain major barriers.",
  },
  {
    slug: "ai-software-development",
    category: "software-development",
    adoptionTier: "very high",
    momentumScore: 94,
    enterpriseUseCase:
      "Code generation, debugging, refactoring, documentation, testing, and codebase-aware development workflows.",
    whyCompaniesAdoptIt:
      "Software development is one of the clearest areas where AI delivers measurable productivity improvements.",
    adoptionBarrier:
      "Security review, code reliability, governance, and dependency risks remain important concerns.",
  },
  {
    slug: "ai-customer-support",
    category: "customer-support",
    adoptionTier: "high",
    momentumScore: 88,
    enterpriseUseCase:
      "Customer chatbots, support automation, ticket summarization, and AI-assisted support agents.",
    whyCompaniesAdoptIt:
      "Support automation can reduce operational costs while improving response speed and scalability.",
    adoptionBarrier:
      "Complex customer cases, trust issues, escalation workflows, and poor AI responses remain challenges.",
  },
  {
    slug: "ai-research-analysis",
    category: "research-analysis",
    adoptionTier: "high",
    momentumScore: 89,
    enterpriseUseCase:
      "Research summarization, document analysis, competitive intelligence, reporting, and synthesis workflows.",
    whyCompaniesAdoptIt:
      "AI dramatically accelerates information processing and synthesis across large document volumes.",
    adoptionBarrier:
      "Verification requirements, hallucinations, and information-quality concerns slow full automation.",
  },
  {
    slug: "ai-marketing",
    category: "marketing",
    adoptionTier: "high",
    momentumScore: 84,
    enterpriseUseCase:
      "Campaign generation, ad copy, SEO content, personalization, creative ideation, and workflow automation.",
    whyCompaniesAdoptIt:
      "Marketing teams rapidly adopt AI because content generation and experimentation scale efficiently.",
    adoptionBarrier:
      "Brand quality control, originality concerns, and content oversaturation create limitations.",
  },
  {
    slug: "ai-operations",
    category: "operations",
    adoptionTier: "growing",
    momentumScore: 82,
    enterpriseUseCase:
      "Workflow automation, internal process optimization, forecasting, and operational coordination.",
    whyCompaniesAdoptIt:
      "Operations AI can reduce repetitive administrative work and improve organizational efficiency.",
    adoptionBarrier:
      "Integration complexity and fragmented enterprise systems slow deployment.",
  },
  {
    slug: "ai-knowledge-management",
    category: "knowledge-management",
    adoptionTier: "growing",
    momentumScore: 80,
    enterpriseUseCase:
      "Internal search, company knowledge retrieval, documentation systems, and AI-powered enterprise memory.",
    whyCompaniesAdoptIt:
      "Organizations struggle with fragmented information spread across documents, chats, and internal tools.",
    adoptionBarrier:
      "Access control, retrieval quality, permissions, and information freshness remain difficult problems.",
  },
  {
    slug: "ai-security",
    category: "security",
    adoptionTier: "emerging",
    momentumScore: 76,
    enterpriseUseCase:
      "Threat detection, anomaly analysis, SOC workflows, automated monitoring, and AI-assisted cyber defense.",
    whyCompaniesAdoptIt:
      "Security teams face growing alert volumes and increasingly complex attack surfaces.",
    adoptionBarrier:
      "False positives, adversarial manipulation, compliance requirements, and reliability concerns remain major obstacles.",
  },
];

export const enterpriseAiAdoptionKeyFindings = [
  {
    title: "Productivity and coding lead enterprise AI adoption",
    description:
      "AI adoption is strongest where workflows are repetitive, digital, document-heavy, and measurable.",
  },
  {
    title: "Enterprise deployment is constrained by governance",
    description:
      "Security, compliance, hallucinations, permissions, and privacy concerns slow full-scale deployment.",
  },
  {
    title: "AI adoption often begins as augmentation",
    description:
      "Most enterprises initially use AI to accelerate human workflows rather than fully automate them.",
  },
  {
    title: "Internal knowledge systems are becoming strategic",
    description:
      "Many organizations increasingly view AI-powered knowledge retrieval and enterprise memory as high-value infrastructure.",
  },
];

export const enterpriseAiAdoptionCategories = [
  {
    category: "Productivity AI",
    examples: ["Microsoft Copilot", "ChatGPT Enterprise", "Gemini Workspace"],
    description:
      "Productivity AI integrates into email, meetings, documents, presentations, and everyday office workflows.",
  },
  {
    category: "AI coding systems",
    examples: ["Cursor", "GitHub Copilot", "Claude"],
    description:
      "AI coding tools are among the fastest-growing enterprise AI categories because developer productivity gains are measurable.",
  },
  {
    category: "Enterprise research and knowledge AI",
    examples: ["Perplexity Enterprise", "Glean", "Notion AI"],
    description:
      "Research and knowledge systems focus on retrieval, summarization, internal search, and enterprise memory.",
  },
  {
    category: "Operational and support AI",
    examples: ["Zendesk AI", "Intercom AI", "Zapier AI"],
    description:
      "Operational AI focuses on customer support, automation, ticket handling, and repetitive internal workflows.",
  },
];
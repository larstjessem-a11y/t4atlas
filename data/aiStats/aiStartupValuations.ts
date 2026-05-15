export type AiStartupValuationEntry = {
  slug: string;
  company: string;
  category:
    | "frontier-models"
    | "ai-search"
    | "ai-infrastructure"
    | "coding"
    | "robotics"
    | "creative-ai"
    | "enterprise-ai"
    | "defense-ai";
  valuationTier:
    | "mega-cap private"
    | "very high"
    | "high"
    | "mid-stage";
  momentumScore: number;
  primaryFocus: string;
  whyValuationMatters: string;
  valuationCaution: string;
  relatedPage?: string;
};

export const aiStartupValuationsLastUpdated = "2026-05-14";

export const aiStartupValuationsMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI startup valuation rankings. It combines public valuation visibility, funding momentum, strategic positioning, ecosystem relevance, and T4 Atlas analysis. Valuation tiers are directional and should not be interpreted as live audited valuations, investment advice, or exact capitalization data.",
};

export const aiStartupValuationsData: AiStartupValuationEntry[] = [
  {
    slug: "openai",
    company: "OpenAI",
    category: "frontier-models",
    valuationTier: "mega-cap private",
    momentumScore: 99,
    primaryFocus:
      "Frontier AI models, consumer AI, enterprise AI, multimodal systems, agents, and AI platform infrastructure.",
    whyValuationMatters:
      "OpenAI is one of the central private companies shaping the frontier model layer, consumer AI behavior, and enterprise AI adoption.",
    valuationCaution:
      "Private-market valuations can change quickly and may not reflect profitability, cash burn, compute costs, or long-term competitive durability.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "anthropic",
    company: "Anthropic",
    category: "frontier-models",
    valuationTier: "mega-cap private",
    momentumScore: 94,
    primaryFocus:
      "Reasoning models, enterprise AI, long-context systems, safety-focused frontier AI, and professional workflows.",
    whyValuationMatters:
      "Anthropic is a leading frontier AI competitor with strong enterprise positioning and major strategic partnerships.",
    valuationCaution:
      "High valuations depend on continued model performance, enterprise adoption, infrastructure access, and differentiation against larger ecosystems.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "xai",
    company: "xAI",
    category: "frontier-models",
    valuationTier: "very high",
    momentumScore: 89,
    primaryFocus:
      "Frontier AI assistants, reasoning systems, internet-aware AI, and integration with the X ecosystem.",
    whyValuationMatters:
      "xAI matters because AI model competition may increasingly depend on distribution, social data, compute access, and ecosystem control.",
    valuationCaution:
      "Valuation depends heavily on execution, model competitiveness, compute availability, and whether distribution through X translates into durable AI adoption.",
  },
  {
    slug: "perplexity",
    company: "Perplexity",
    category: "ai-search",
    valuationTier: "very high",
    momentumScore: 91,
    primaryFocus:
      "AI-native search, answer engines, research workflows, source-backed discovery, and search behavior disruption.",
    whyValuationMatters:
      "Perplexity is one of the clearest startups challenging traditional search behavior and information discovery.",
    valuationCaution:
      "AI search valuations depend on user retention, monetization, publisher relationships, distribution, and competition from Google, OpenAI, and other platforms.",
    relatedPage: "/tools/ai/replacing/ai-tools-replacing-google-search",
  },
  {
    slug: "mistral",
    company: "Mistral",
    category: "frontier-models",
    valuationTier: "high",
    momentumScore: 87,
    primaryFocus:
      "European frontier AI, open-weight models, efficient inference, enterprise AI, and AI sovereignty.",
    whyValuationMatters:
      "Mistral is strategically important as one of Europe's strongest AI model companies and a sovereignty-focused alternative to US labs.",
    valuationCaution:
      "Valuation depends on enterprise traction, model competitiveness, open ecosystem strategy, and ability to compete with larger capital bases.",
  },
  {
    slug: "scale-ai",
    company: "Scale AI",
    category: "ai-infrastructure",
    valuationTier: "very high",
    momentumScore: 86,
    primaryFocus:
      "AI infrastructure, data operations, evaluation, defense AI, enterprise deployment, and model-support workflows.",
    whyValuationMatters:
      "Scale AI sits close to the operational infrastructure layer needed to deploy, evaluate, and improve AI systems.",
    valuationCaution:
      "Infrastructure valuations depend on durable demand, customer concentration, margins, defense/enterprise relationships, and competition.",
  },
  {
    slug: "cursor",
    company: "Cursor",
    category: "coding",
    valuationTier: "high",
    momentumScore: 90,
    primaryFocus:
      "AI-native coding, codebase-aware editing, developer workflows, and software productivity.",
    whyValuationMatters:
      "Cursor reflects investor belief that software development may become one of the highest-value AI-native workflow categories.",
    valuationCaution:
      "Long-term valuation depends on developer retention, differentiation from Copilot, pricing power, and whether AI coding becomes a standalone platform or a feature.",
    relatedPage: "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "runway",
    company: "Runway",
    category: "creative-ai",
    valuationTier: "high",
    momentumScore: 82,
    primaryFocus:
      "AI video generation, generative media, creative production, advertising, and synthetic content workflows.",
    whyValuationMatters:
      "Runway represents the creative AI thesis that video and media production will become increasingly AI-native.",
    valuationCaution:
      "Creative AI valuations depend on model quality, rights issues, creator adoption, media-industry workflows, and competition from larger platforms.",
    relatedPage: "/tools/ai/synthesia-vs-runway",
  },
  {
    slug: "figure-ai",
    company: "Figure AI",
    category: "robotics",
    valuationTier: "high",
    momentumScore: 84,
    primaryFocus:
      "Humanoid robotics, embodied AI, labor automation, and physical-world AI systems.",
    whyValuationMatters:
      "Figure AI reflects investor interest in AI moving beyond software into physical labor, robotics, logistics, and industrial automation.",
    valuationCaution:
      "Robotics valuations carry hardware, manufacturing, safety, deployment, and unit-economics risk that software-only AI companies do not face.",
  },
  {
    slug: "adept",
    company: "Adept",
    category: "enterprise-ai",
    valuationTier: "mid-stage",
    momentumScore: 72,
    primaryFocus:
      "AI agents, enterprise automation, software-action workflows, and task execution.",
    whyValuationMatters:
      "Adept represents the agentic AI thesis: systems that do not only answer questions but take actions across software tools.",
    valuationCaution:
      "Agent valuations depend on reliability, integration depth, enterprise trust, workflow specificity, and whether agents become products or platform features.",
  },
];

export const aiStartupValuationsKeyFindings = [
  {
    title: "Frontier model labs dominate private AI valuations",
    description:
      "The largest AI startup valuations cluster around companies building foundation models, consumer AI platforms, and enterprise AI systems.",
  },
  {
    title: "Valuation is partly a distribution bet",
    description:
      "Investors value AI companies not only for model quality, but also for distribution, ecosystem control, enterprise access, and workflow ownership.",
  },
  {
    title: "AI search and coding have strong strategic premiums",
    description:
      "AI-native search and software development are among the clearest categories where startups may capture major workflow shifts.",
  },
  {
    title: "Private valuations are volatile signals",
    description:
      "High AI valuations can reflect strategic scarcity, compute access, growth expectations, and investor demand—not necessarily profitability or durable moats.",
  },
];

export const aiStartupValuationCategories = [
  {
    category: "Frontier model companies",
    examples: ["OpenAI", "Anthropic", "xAI", "Mistral"],
    description:
      "These companies are valued as potential platform layers for consumer AI, enterprise AI, multimodal systems, and reasoning workflows.",
  },
  {
    category: "AI-native workflow companies",
    examples: ["Perplexity", "Cursor", "Runway"],
    description:
      "These startups focus on specific workflows such as search, software development, and generative media.",
  },
  {
    category: "AI infrastructure",
    examples: ["Scale AI"],
    description:
      "Infrastructure companies support data pipelines, evaluation, deployment, defense use cases, and enterprise AI operations.",
  },
  {
    category: "Embodied and agentic AI",
    examples: ["Figure AI", "Adept"],
    description:
      "These companies reflect bets on AI moving into physical labor, robotics, and software agents that take action.",
  },
];
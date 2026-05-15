export type MostFundedAiStartupEntry = {
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
  fundingTier:
    | "mega-funded"
    | "very high"
    | "high"
    | "mid-stage";
  momentumScore: number;
  primaryFocus: string;
  whyInvestorsCare: string;
  strategicImportance: string;
  relatedPage?: string;
};

export const mostFundedAiStartupsLastUpdated = "2026-05-14";

export const mostFundedAiStartupsMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for heavily funded AI startups. It combines public funding visibility, ecosystem relevance, strategic positioning, infrastructure importance, and T4 Atlas analysis. Funding tiers are directional and should not be interpreted as audited live capitalization tables.",
};

export const mostFundedAiStartupsData: MostFundedAiStartupEntry[] = [
  {
    slug: "openai",
    company: "OpenAI",
    category: "frontier-models",
    fundingTier: "mega-funded",
    momentumScore: 99,
    primaryFocus:
      "Frontier AI models, multimodal systems, enterprise AI, reasoning, and consumer AI platforms.",
    whyInvestorsCare:
      "OpenAI is viewed as one of the central companies defining the frontier AI platform layer.",
    strategicImportance:
      "OpenAI influences consumer AI adoption, enterprise AI workflows, AI infrastructure demand, and broader ecosystem competition.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "anthropic",
    company: "Anthropic",
    category: "frontier-models",
    fundingTier: "mega-funded",
    momentumScore: 93,
    primaryFocus:
      "Reasoning-focused AI models, enterprise AI, alignment, and long-context systems.",
    whyInvestorsCare:
      "Anthropic is positioned as one of the strongest frontier-model competitors focused on enterprise-grade reasoning systems.",
    strategicImportance:
      "Anthropic is important because enterprise AI demand increasingly values reasoning quality, safety, and document-heavy workflows.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "xai",
    company: "xAI",
    category: "frontier-models",
    fundingTier: "very high",
    momentumScore: 88,
    primaryFocus:
      "Frontier AI assistants, internet-connected AI, reasoning systems, and ecosystem integration with X.",
    whyInvestorsCare:
      "xAI combines frontier-model ambition with distribution through X and Elon Musk's broader ecosystem.",
    strategicImportance:
      "The company matters because AI distribution may increasingly depend on ecosystem control and user attention.",
  },
  {
    slug: "perplexity",
    company: "Perplexity",
    category: "ai-search",
    fundingTier: "very high",
    momentumScore: 90,
    primaryFocus:
      "AI-native search, answer engines, research workflows, and source-backed information discovery.",
    whyInvestorsCare:
      "Perplexity is one of the clearest challengers to traditional search behavior.",
    strategicImportance:
      "AI search could reshape how users discover information, products, and websites.",
    relatedPage: "/tools/ai/replacing/ai-tools-replacing-google-search",
  },
  {
    slug: "mistral",
    company: "Mistral",
    category: "frontier-models",
    fundingTier: "high",
    momentumScore: 87,
    primaryFocus:
      "European frontier AI models, open-weight systems, enterprise AI, and efficient inference.",
    whyInvestorsCare:
      "Mistral is strategically important as a European AI infrastructure and sovereignty play.",
    strategicImportance:
      "Regional AI capability and open ecosystem positioning are increasingly important geopolitical themes.",
  },
  {
    slug: "figure-ai",
    company: "Figure AI",
    category: "robotics",
    fundingTier: "high",
    momentumScore: 84,
    primaryFocus:
      "Humanoid robotics, embodied AI, automation, and physical-world AI systems.",
    whyInvestorsCare:
      "Humanoid robotics represents a potential expansion of AI from software into labor and physical operations.",
    strategicImportance:
      "Embodied AI could reshape manufacturing, logistics, caregiving, and industrial automation.",
  },
  {
    slug: "runway",
    company: "Runway",
    category: "creative-ai",
    fundingTier: "high",
    momentumScore: 82,
    primaryFocus:
      "AI video generation, generative media, creative production, and synthetic video workflows.",
    whyInvestorsCare:
      "AI video generation may transform advertising, entertainment, social media, and digital production.",
    strategicImportance:
      "Creative AI tools are strategically important because media production is becoming AI-native.",
    relatedPage: "/tools/ai/synthesia-vs-runway",
  },
  {
    slug: "scale-ai",
    company: "Scale AI",
    category: "ai-infrastructure",
    fundingTier: "very high",
    momentumScore: 86,
    primaryFocus:
      "AI infrastructure, data labeling, evaluation, defense AI, and enterprise AI operations.",
    whyInvestorsCare:
      "AI infrastructure remains essential because frontier AI systems depend on data pipelines, evaluation, and operational tooling.",
    strategicImportance:
      "Scale AI sits close to the operational infrastructure layer of AI deployment and defense applications.",
  },
  {
    slug: "cursor",
    company: "Cursor",
    category: "coding",
    fundingTier: "high",
    momentumScore: 89,
    primaryFocus:
      "AI-native coding workflows, codebase-aware development, and developer productivity.",
    whyInvestorsCare:
      "AI coding is one of the clearest examples of direct AI productivity gains.",
    strategicImportance:
      "Developer workflows are becoming AI-native faster than many other knowledge-work categories.",
    relatedPage: "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "adept",
    company: "Adept",
    category: "enterprise-ai",
    fundingTier: "mid-stage",
    momentumScore: 73,
    primaryFocus:
      "AI agents, workplace automation, and software-action workflows.",
    whyInvestorsCare:
      "AI agents may become an important layer between users and software systems.",
    strategicImportance:
      "Agent-based workflows could reshape repetitive operational and knowledge work.",
  },
];

export const mostFundedAiStartupsKeyFindings = [
  {
    title: "Frontier-model companies attract the largest funding",
    description:
      "The largest AI funding rounds are concentrated around companies building frontier AI models and platform ecosystems.",
  },
  {
    title: "AI infrastructure remains strategically critical",
    description:
      "Infrastructure companies remain essential because AI systems depend on compute, evaluation, deployment, and operational tooling.",
  },
  {
    title: "AI search and coding attract strong investor attention",
    description:
      "Search and software development are among the clearest early examples of AI-native workflow transformation.",
  },
  {
    title: "AI investment increasingly overlaps geopolitics",
    description:
      "AI funding now intersects with industrial policy, defense, sovereignty, infrastructure control, and national competitiveness.",
  },
];

export const mostFundedAiStartupCategories = [
  {
    category: "Frontier AI labs",
    examples: ["OpenAI", "Anthropic", "xAI", "Mistral"],
    description:
      "Frontier AI labs compete to build the core model layer powering consumer AI, enterprise AI, and multimodal systems.",
  },
  {
    category: "AI infrastructure",
    examples: ["Scale AI"],
    description:
      "Infrastructure companies support evaluation, data operations, deployment, defense AI, and enterprise AI scaling.",
  },
  {
    category: "AI-native applications",
    examples: ["Perplexity", "Cursor", "Runway"],
    description:
      "AI-native applications focus on workflows such as search, coding, research, media generation, and productivity.",
  },
  {
    category: "Embodied and agentic AI",
    examples: ["Figure AI", "Adept"],
    description:
      "Some startups focus on robotics, AI agents, and software systems that take actions rather than only generating content.",
  },
];
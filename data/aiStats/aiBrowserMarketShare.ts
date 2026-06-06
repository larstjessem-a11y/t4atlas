export type AiBrowserMarketShareRow = {
  browser: string;
  category: string;
  aiPositioning: string;
  distributionSignal: string;
  aiReadinessScore: number;
};

export const aiBrowserMarketShareData: AiBrowserMarketShareRow[] = [
  {
    browser: "Google Chrome",
    category: "Mainstream browser",
    aiPositioning: "Default global browser with growing Gemini integration",
    distributionSignal: "Dominant browser distribution and Google ecosystem reach",
    aiReadinessScore: 96,
  },
  {
    browser: "Microsoft Edge",
    category: "Enterprise browser",
    aiPositioning: "Deep Copilot and Microsoft 365 integration",
    distributionSignal: "Strong Windows and enterprise distribution",
    aiReadinessScore: 90,
  },
  {
    browser: "Safari",
    category: "Apple ecosystem browser",
    aiPositioning: "Potential Apple Intelligence entry point",
    distributionSignal: "Strong iOS and macOS distribution",
    aiReadinessScore: 82,
  },
  {
    browser: "Arc",
    category: "AI-native challenger",
    aiPositioning: "Consumer browser with AI-assisted organization and browsing",
    distributionSignal: "High mindshare among early adopters",
    aiReadinessScore: 78,
  },
  {
    browser: "Perplexity Comet",
    category: "AI search browser",
    aiPositioning: "Browser built around AI search and agentic browsing",
    distributionSignal: "Strategic relevance in AI search workflows",
    aiReadinessScore: 76,
  },
  {
    browser: "Brave",
    category: "Privacy browser",
    aiPositioning: "Privacy-oriented browser with AI assistant integration",
    distributionSignal: "Niche but loyal privacy-focused user base",
    aiReadinessScore: 70,
  },
  {
    browser: "Opera",
    category: "AI-enhanced browser",
    aiPositioning: "Browser with built-in AI assistant features",
    distributionSignal: "Recognized alternative browser with AI feature positioning",
    aiReadinessScore: 68,
  },
  {
    browser: "Dia",
    category: "AI-native browser",
    aiPositioning: "AI-first browser concept from The Browser Company",
    distributionSignal: "Early-stage but high strategic attention",
    aiReadinessScore: 66,
  },
];

export const aiBrowserMarketShareKeyFindings = [
  {
    title: "AI browsers are still early",
    description:
      "Most browser usage remains concentrated in traditional browsers, but AI-native browsing is emerging as a strategic category.",
  },
  {
    title: "Distribution will shape the market",
    description:
      "Chrome, Edge, and Safari have enormous default-position advantages as AI becomes embedded into mainstream browsing.",
  },
  {
    title: "AI search is pushing browser reinvention",
    description:
      "Perplexity, Arc, Dia, and other challengers show how search, browsing, and agents may converge.",
  },
  {
    title: "Enterprise browsers may become AI workspaces",
    description:
      "Edge and Chrome may increasingly function as entry points for enterprise AI agents, assistants, and internal knowledge systems.",
  },
];

export const aiBrowserMarketShareCategories = [
  {
    title: "Mainstream browsers",
    description:
      "Browsers with massive distribution that can integrate AI features into existing user behavior.",
  },
  {
    title: "AI-native browsers",
    description:
      "Browsers designed around AI search, task execution, page understanding, and conversational workflows.",
  },
  {
    title: "Enterprise browsers",
    description:
      "Browsers positioned as secure workplace entry points for enterprise search, productivity, and AI agents.",
  },
  {
    title: "Privacy-focused browsers",
    description:
      "Browsers that may combine AI assistance with privacy, local processing, or user-controlled browsing models.",
  },
];

export const aiBrowserMarketShareMethodology = {
  title: "AI browser market methodology",
  description:
    "This page does not claim official browser market share. It compares AI-browser positioning, distribution strength, ecosystem control, strategic relevance, and T4 Atlas editorial assessment.",
};

export const aiBrowserMarketShareLastUpdated = "2026-06-03";
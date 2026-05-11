export type AiMarketShareSource =
  | "Statcounter"
  | "Similarweb"
  | "Semrush"
  | "a16z"
  | "T4 Atlas estimate";

export type AiToolMarketShareEntry = {
  slug: string;
  name: string;
  category:
    | "chatbot"
    | "search"
    | "writing"
    | "productivity"
    | "coding"
    | "image"
    | "video"
    | "research";
  marketSharePercent?: number;
  trafficRank?: number;
  momentumScore: number;
  primaryUseCase: string;
  notes: string;
  sources: AiMarketShareSource[];
};

export const aiMarketShareLastUpdated = "2026-05-11";

export const aiMarketShareMethodology = {
  title: "Methodology",
  description:
    "This page combines public AI chatbot market-share data, traffic rankings, search visibility signals, and editorial categorization. Market share should not be interpreted as total AI revenue share or total active-user share. The T4 Atlas AI Momentum Score is an editorial composite based on visibility, growth signals, product relevance, and category strength.",
};

export const aiMarketShareSources = [
  {
    name: "Statcounter AI Chatbot Market Share",
    url: "https://gs.statcounter.com/ai-chatbot-market-share",
    description:
      "Used for publicly available AI chatbot market-share estimates.",
  },
  {
    name: "Similarweb AI Chatbots and Tools",
    url: "https://www.similarweb.com/top-websites/ai-chatbots-and-tools/",
    description:
      "Used for traffic ranking and category visibility signals.",
  },
  {
    name: "Similarweb AI Traffic",
    url: "https://www.similarweb.com/ai-traffic/",
    description:
      "Used as a reference point for AI traffic and growth patterns.",
  },
  {
    name: "Semrush AI research",
    url: "https://www.semrush.com/blog/",
    description:
      "Used for broader search visibility and AI search trend context.",
  },
  {
    name: "a16z Top Gen AI Consumer Apps",
    url: "https://a16z.com/",
    description:
      "Used as a reference for consumer AI app rankings and category momentum.",
  },
];

export const aiMarketShareData: AiToolMarketShareEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "chatbot",
    marketSharePercent: 76.85,
    trafficRank: 1,
    momentumScore: 98,
    primaryUseCase:
      "General AI assistant for writing, coding, research, analysis, productivity, and multimodal workflows.",
    notes:
      "ChatGPT remains the dominant general-purpose AI assistant by public chatbot market-share and traffic visibility indicators.",
    sources: ["Statcounter", "Similarweb", "T4 Atlas estimate"],
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "chatbot",
    marketSharePercent: 9,
    momentumScore: 82,
    primaryUseCase:
      "Google-connected AI assistant for search-adjacent tasks, productivity, research, and multimodal workflows.",
    notes:
      "Gemini benefits from Google's distribution ecosystem and is one of the most visible ChatGPT alternatives.",
    sources: ["Statcounter", "T4 Atlas estimate"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "research",
    marketSharePercent: 7.73,
    momentumScore: 86,
    primaryUseCase:
      "AI answer engine and research assistant focused on source-backed answers and discovery.",
    notes:
      "Perplexity is especially strong in research and AI search workflows rather than general document production.",
    sources: ["Statcounter", "Similarweb", "T4 Atlas estimate"],
  },
  {
    slug: "copilot",
    name: "Microsoft Copilot",
    category: "productivity",
    marketSharePercent: 3.76,
    momentumScore: 79,
    primaryUseCase:
      "AI assistant for Microsoft productivity workflows, Office documents, coding, and enterprise environments.",
    notes:
      "Copilot has strong enterprise distribution but should be evaluated separately from consumer chatbot traffic.",
    sources: ["Statcounter", "T4 Atlas estimate"],
  },
  {
    slug: "claude",
    name: "Claude",
    category: "chatbot",
    marketSharePercent: 2.66,
    momentumScore: 84,
    primaryUseCase:
      "Long-form writing, document analysis, coding support, structured reasoning, and natural language drafting.",
    notes:
      "Claude is often positioned as a strong tool for long-context writing and document-heavy workflows.",
    sources: ["Statcounter", "Similarweb", "T4 Atlas estimate"],
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "writing",
    momentumScore: 68,
    primaryUseCase:
      "Marketing copy, brand voice, campaign content, and copywriting workflows.",
    notes:
      "Jasper is more specialized than general AI assistants and is best evaluated as a marketing workflow tool.",
    sources: ["Similarweb", "T4 Atlas estimate"],
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "image",
    momentumScore: 78,
    primaryUseCase:
      "AI image generation for creators, designers, concept art, visual ideation, and creative workflows.",
    notes:
      "Midjourney remains one of the most recognized AI image-generation brands.",
    sources: ["Similarweb", "a16z", "T4 Atlas estimate"],
  },
  {
    slug: "runway",
    name: "Runway",
    category: "video",
    momentumScore: 74,
    primaryUseCase:
      "AI video generation, video editing, creative production, and generative media workflows.",
    notes:
      "Runway is strongest in video-generation and creative production workflows.",
    sources: ["Similarweb", "a16z", "T4 Atlas estimate"],
  },
];

export const aiMarketShareKeyFindings = [
  {
    title: "ChatGPT dominates general AI assistant usage",
    description:
      "Public chatbot market-share and traffic indicators suggest ChatGPT remains the clear leader among general-purpose AI assistants.",
  },
  {
    title: "AI search and research tools are becoming their own category",
    description:
      "Perplexity is best understood as part of an AI search and research workflow rather than only as a chatbot alternative.",
  },
  {
    title: "Enterprise distribution matters",
    description:
      "Tools like Microsoft Copilot may have stronger enterprise reach than consumer traffic rankings alone suggest.",
  },
  {
    title: "Specialized AI tools compete by workflow",
    description:
      "Jasper, Midjourney, Runway, and similar products should be evaluated by use case rather than general chatbot share.",
  },
];
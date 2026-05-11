export type FastestGrowingAiToolEntry = {
  slug: string;
  name: string;
  category:
    | "chatbot"
    | "research"
    | "writing"
    | "coding"
    | "image"
    | "video"
    | "productivity"
    | "workspace"
    | "meeting";
  growthCategory:
    | "hypergrowth"
    | "very fast"
    | "fast"
    | "steady";
  momentumScore: number;
  growthDrivers: string[];
  whyItMatters: string;
  relatedPage?: string;
};

export const fastestGrowingAiToolsLastUpdated = "2026-05-11";

export const fastestGrowingAiToolsMethodology = {
  title: "Methodology",
  description:
    "This page combines public AI traffic visibility trends, ecosystem adoption signals, media visibility, workflow expansion, and editorial analysis from T4 Atlas. Growth categories are directional and should not be interpreted as audited financial growth rates.",
};

export const fastestGrowingAiToolsData: FastestGrowingAiToolEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "chatbot",
    growthCategory: "hypergrowth",
    momentumScore: 99,
    growthDrivers: [
      "Mainstream adoption",
      "Enterprise integrations",
      "API ecosystem",
      "Multimodal workflows",
    ],
    whyItMatters:
      "ChatGPT has become the default reference point for consumer AI and continues expanding into productivity, coding, search, and enterprise workflows.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "research",
    growthCategory: "very fast",
    momentumScore: 91,
    growthDrivers: [
      "AI search adoption",
      "Research workflows",
      "Source-backed answers",
      "Knowledge discovery",
    ],
    whyItMatters:
      "Perplexity is helping define the emerging AI search category and is increasingly used for research-heavy workflows.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "chatbot",
    growthCategory: "very fast",
    momentumScore: 89,
    growthDrivers: [
      "Long-context workflows",
      "Document analysis",
      "Coding support",
      "Professional writing",
    ],
    whyItMatters:
      "Claude has gained momentum among power users looking for structured reasoning and long-document support.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "chatbot",
    growthCategory: "fast",
    momentumScore: 84,
    growthDrivers: [
      "Google ecosystem distribution",
      "Workspace integrations",
      "Search visibility",
      "Android distribution",
    ],
    whyItMatters:
      "Gemini benefits from deep integration across Google's ecosystem and is increasingly visible in productivity workflows.",
  },
  {
    slug: "runway",
    name: "Runway",
    category: "video",
    growthCategory: "fast",
    momentumScore: 83,
    growthDrivers: [
      "AI video generation",
      "Creator economy",
      "Short-form content",
      "Creative production",
    ],
    whyItMatters:
      "Runway is becoming one of the strongest AI-native video workflow platforms.",
    relatedPage: "/tools/ai/synthesia-vs-runway",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "image",
    growthCategory: "fast",
    momentumScore: 81,
    growthDrivers: [
      "AI art adoption",
      "Design workflows",
      "Social media visibility",
      "Creative communities",
    ],
    whyItMatters:
      "Midjourney remains one of the most culturally visible AI image-generation products.",
    relatedPage: "/tools/ai/midjourney-vs-dalle",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "workspace",
    growthCategory: "steady",
    momentumScore: 75,
    growthDrivers: [
      "Knowledge management",
      "Workspace AI",
      "Internal documentation",
      "Team productivity",
    ],
    whyItMatters:
      "Workspace-native AI assistants may become increasingly important as AI moves deeper into daily workflows.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
  {
    slug: "fireflies",
    name: "Fireflies",
    category: "meeting",
    growthCategory: "steady",
    momentumScore: 72,
    growthDrivers: [
      "Meeting automation",
      "Transcription",
      "AI summaries",
      "Remote collaboration",
    ],
    whyItMatters:
      "Meeting AI tools continue to grow as organizations automate note-taking and follow-up workflows.",
    relatedPage: "/tools/ai/best-ai-tools-for-meetings",
  },
];

export const fastestGrowingAiToolsKeyFindings = [
  {
    title: "General AI assistants still dominate growth",
    description:
      "ChatGPT, Claude, and Gemini continue expanding into new workflow categories beyond simple chat interfaces.",
  },
  {
    title: "AI search is emerging as its own market",
    description:
      "Perplexity and related products are increasingly positioned as AI-native search and research platforms.",
  },
  {
    title: "Creative AI remains a major growth segment",
    description:
      "Image and video generation tools continue benefiting from creator economy demand and social media visibility.",
  },
  {
    title: "Workflow integration matters more over time",
    description:
      "AI products with deep integration into daily work systems may have stronger long-term retention advantages.",
  },
];
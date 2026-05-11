export type MostSearchedAiToolEntry = {
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
    | "research"
    | "meeting"
    | "workspace";
  searchIntent:
    | "general"
    | "comparison"
    | "alternative"
    | "pricing"
    | "workflow"
    | "tool-specific";
  relativeSearchDemand: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  whyItIsSearched: string;
  relatedPage?: string;
};

export const mostSearchedAiToolsLastUpdated = "2026-05-11";

export const mostSearchedAiToolsMethodology = {
  title: "Methodology",
  description:
    "This page is an editorial research dataset that combines public search visibility signals, AI tool popularity, traffic indicators, and T4 Atlas topic clustering. It is not an official keyword-volume database. Relative demand is grouped into broad buckets to avoid false precision.",
};

export const mostSearchedAiToolsData: MostSearchedAiToolEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "chatbot",
    searchIntent: "general",
    relativeSearchDemand: "very high",
    momentumScore: 98,
    whyItIsSearched:
      "ChatGPT is searched heavily because it is the default reference point for general AI assistants, writing, coding, productivity, and comparison queries.",
    relatedPage: "/tools/ai/alternatives-to-chatgpt",
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "chatbot",
    searchIntent: "tool-specific",
    relativeSearchDemand: "high",
    momentumScore: 84,
    whyItIsSearched:
      "Gemini benefits from Google distribution and is often searched as a ChatGPT alternative or as part of Google AI workflows.",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "chatbot",
    searchIntent: "tool-specific",
    relativeSearchDemand: "high",
    momentumScore: 86,
    whyItIsSearched:
      "Claude is searched by users looking for long-form writing, document analysis, coding support, and comparisons against ChatGPT.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "search",
    searchIntent: "workflow",
    relativeSearchDemand: "high",
    momentumScore: 88,
    whyItIsSearched:
      "Perplexity is searched as an AI search and research tool, especially by users who want source-backed answers and discovery workflows.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "writing",
    searchIntent: "alternative",
    relativeSearchDemand: "medium",
    momentumScore: 72,
    whyItIsSearched:
      "Jasper is searched by marketers and copywriters comparing AI writing tools, brand voice workflows, and ChatGPT alternatives.",
    relatedPage: "/tools/ai/alternatives-to-jasper",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "image",
    searchIntent: "tool-specific",
    relativeSearchDemand: "high",
    momentumScore: 82,
    whyItIsSearched:
      "Midjourney is searched by creators, designers, marketers, and artists looking for high-quality AI image generation.",
    relatedPage: "/tools/ai/midjourney-vs-dalle",
  },
  {
    slug: "dalle",
    name: "DALL·E",
    category: "image",
    searchIntent: "comparison",
    relativeSearchDemand: "medium",
    momentumScore: 76,
    whyItIsSearched:
      "DALL·E is often searched in comparison with Midjourney and other image generators.",
    relatedPage: "/tools/ai/midjourney-vs-dalle",
  },
  {
    slug: "runway",
    name: "Runway",
    category: "video",
    searchIntent: "tool-specific",
    relativeSearchDemand: "medium",
    momentumScore: 78,
    whyItIsSearched:
      "Runway is searched by creators and video teams looking for AI video generation, editing, and creative production workflows.",
    relatedPage: "/tools/ai/synthesia-vs-runway",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "workspace",
    searchIntent: "workflow",
    relativeSearchDemand: "medium",
    momentumScore: 73,
    whyItIsSearched:
      "Notion AI is searched by users who already organize work in Notion and want AI support for notes, docs, tasks, and internal knowledge.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
  {
    slug: "fireflies",
    name: "Fireflies",
    category: "meeting",
    searchIntent: "workflow",
    relativeSearchDemand: "medium",
    momentumScore: 71,
    whyItIsSearched:
      "Fireflies is searched by teams looking for AI meeting notes, call transcripts, summaries, and action items.",
    relatedPage: "/tools/ai/best-ai-tools-for-meetings",
  },
];

export const mostSearchedAiToolsKeyFindings = [
  {
    title: "General AI assistants dominate search demand",
    description:
      "ChatGPT, Gemini, Claude, and Perplexity capture broad interest because they are used across many workflows rather than only one narrow category.",
  },
  {
    title: "Search intent is often comparative",
    description:
      "Many users are not only searching for tool names; they are searching for alternatives, comparisons, pricing, and workflow-specific recommendations.",
  },
  {
    title: "Workflow tools create strong long-tail demand",
    description:
      "Meeting, workspace, writing, image, video, and research tools attract narrower but commercially valuable searches.",
  },
  {
    title: "AI search tools are becoming a separate category",
    description:
      "Perplexity and similar tools are best understood as AI research/search products rather than ordinary chatbot alternatives.",
  },
];
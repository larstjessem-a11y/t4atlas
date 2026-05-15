export type MostVisitedAiWebsiteEntry = {
  slug: string;
  name: string;
  category:
    | "chatbot"
    | "ai-search"
    | "image-generation"
    | "video-generation"
    | "writing"
    | "coding"
    | "productivity"
    | "research"
    | "creative-suite";
  trafficPosition: "dominant" | "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  primaryUseCase: string;
  whyPeopleVisit: string;
  trafficNotes: string;
  relatedPage?: string;
};

export const mostVisitedAiWebsitesLastUpdated = "2026-05-14";

export const mostVisitedAiWebsitesMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for the most visited AI websites. It combines public traffic visibility signals, category relevance, product adoption, and T4 Atlas analysis. Traffic position is directional and should not be interpreted as audited visit counts.",
};

export const mostVisitedAiWebsitesData: MostVisitedAiWebsiteEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "chatbot",
    trafficPosition: "dominant",
    momentumScore: 98,
    primaryUseCase:
      "General AI assistant for writing, coding, research, productivity, analysis, and multimodal workflows.",
    whyPeopleVisit:
      "ChatGPT is the default destination for many users who want broad AI assistance across work, learning, creativity, and problem solving.",
    trafficNotes:
      "ChatGPT consistently appears as the leading AI tool website in public AI traffic rankings and chatbot visibility reports.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "ai-search",
    trafficPosition: "very high",
    momentumScore: 90,
    primaryUseCase:
      "AI search, source-backed answers, research discovery, and information synthesis.",
    whyPeopleVisit:
      "Users visit Perplexity when they want AI-generated answers with sources and less manual browsing through search results.",
    trafficNotes:
      "Perplexity is one of the clearest examples of AI-native search behavior gaining traffic momentum.",
    relatedPage: "/tools/ai/replacing/ai-tools-replacing-google-search",
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "chatbot",
    trafficPosition: "very high",
    momentumScore: 86,
    primaryUseCase:
      "Google-connected AI assistance, productivity support, multimodal tasks, and search-adjacent workflows.",
    whyPeopleVisit:
      "Gemini benefits from Google ecosystem visibility and is often used by people comparing or complementing ChatGPT.",
    trafficNotes:
      "Gemini should be viewed partly as a standalone AI site and partly as an AI layer across Google products.",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "chatbot",
    trafficPosition: "high",
    momentumScore: 87,
    primaryUseCase:
      "Long-form writing, document analysis, code reasoning, structured thinking, and professional drafting.",
    whyPeopleVisit:
      "Users visit Claude for long-context work, readable prose, document-heavy workflows, and reasoning tasks.",
    trafficNotes:
      "Claude has strong visibility among professional and power-user AI workflows.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "copilot",
    name: "Microsoft Copilot",
    category: "productivity",
    trafficPosition: "high",
    momentumScore: 81,
    primaryUseCase:
      "AI assistance inside Microsoft productivity, browser, Windows, and enterprise workflows.",
    whyPeopleVisit:
      "Copilot attracts users through Microsoft's distribution across Office, Windows, Edge, and enterprise environments.",
    trafficNotes:
      "Copilot traffic should be interpreted alongside Microsoft ecosystem distribution rather than standalone website visits alone.",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "image-generation",
    trafficPosition: "high",
    momentumScore: 82,
    primaryUseCase:
      "AI image generation, concept art, visual ideation, creative production, and design workflows.",
    whyPeopleVisit:
      "Creators and designers visit Midjourney for high-quality image generation and visual experimentation.",
    trafficNotes:
      "Midjourney remains one of the most recognizable AI image-generation brands.",
    relatedPage: "/tools/ai/midjourney-vs-dalle",
  },
  {
    slug: "runway",
    name: "Runway",
    category: "video-generation",
    trafficPosition: "medium",
    momentumScore: 78,
    primaryUseCase:
      "AI video generation, creative editing, generative media, and short-form video production.",
    whyPeopleVisit:
      "Users visit Runway to experiment with AI-native video generation and creative production workflows.",
    trafficNotes:
      "AI video remains smaller than chatbot traffic but is strategically important because of fast creative adoption.",
    relatedPage: "/tools/ai/synthesia-vs-runway",
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "writing",
    trafficPosition: "medium",
    momentumScore: 70,
    primaryUseCase:
      "Marketing copy, brand voice, campaign content, landing pages, and copywriting workflows.",
    whyPeopleVisit:
      "Marketing teams visit Jasper when they want a copywriting-focused AI platform rather than a general assistant.",
    trafficNotes:
      "Jasper is more specialized than general AI assistants and should be evaluated as a marketing workflow platform.",
    relatedPage: "/tools/ai/alternatives-to-jasper",
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "coding",
    trafficPosition: "medium",
    momentumScore: 84,
    primaryUseCase:
      "AI-native coding, codebase-aware editing, refactoring, and software development workflows.",
    whyPeopleVisit:
      "Developers visit Cursor when they want a dedicated AI coding environment rather than only an IDE plugin.",
    trafficNotes:
      "Cursor is especially relevant in AI coding and software-team workflow adoption.",
    relatedPage: "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    category: "creative-suite",
    trafficPosition: "very high",
    momentumScore: 83,
    primaryUseCase:
      "Design, presentations, social graphics, brand assets, and AI-assisted creative workflows.",
    whyPeopleVisit:
      "Canva attracts broad creative and business traffic, with AI features layered into an already large design platform.",
    trafficNotes:
      "Canva is not only an AI website, but its AI feature set makes it important in creative AI adoption.",
  },
];

export const mostVisitedAiWebsitesKeyFindings = [
  {
    title: "ChatGPT dominates AI destination traffic",
    description:
      "General-purpose AI assistants attract the broadest traffic because they support many different workflows from one interface.",
  },
  {
    title: "AI search is becoming a traffic category",
    description:
      "Perplexity and similar products show that users increasingly visit AI-native answer engines instead of traditional search pages.",
  },
  {
    title: "Creative AI has strong brand-driven traffic",
    description:
      "Image, video, and design tools attract creator traffic even when they are smaller than general chatbot platforms.",
  },
  {
    title: "Distribution changes how traffic should be read",
    description:
      "Tools embedded into ecosystems like Microsoft, Google, and Canva may have adoption strength that is not fully captured by standalone website visits.",
  },
];

export const mostVisitedAiWebsiteCategories = [
  {
    category: "General AI assistants",
    examples: ["ChatGPT", "Claude", "Gemini", "Copilot"],
    description:
      "Broad assistant platforms attract the largest cross-workflow traffic because they support writing, coding, research, productivity, and learning.",
  },
  {
    category: "AI search and research",
    examples: ["Perplexity", "ChatGPT", "Gemini"],
    description:
      "AI search tools gain traffic when users want direct answers, citations, summaries, and source-backed discovery.",
  },
  {
    category: "Creative AI",
    examples: ["Midjourney", "Runway", "Canva AI"],
    description:
      "Creative AI websites attract designers, marketers, creators, and video teams looking for image, video, and brand asset generation.",
  },
  {
    category: "AI coding",
    examples: ["Cursor", "GitHub Copilot", "ChatGPT"],
    description:
      "AI coding websites and tools attract developers looking for code generation, refactoring, debugging, and codebase-aware assistance.",
  },
];
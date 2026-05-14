export type AiReplacingGoogleSearchEntry = {
  slug: string;
  name: string;
  category:
    | "ai-search-engine"
    | "general-assistant"
    | "research-assistant"
    | "browser-integrated-ai"
    | "enterprise-search";
  replacementStrength: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  bestFor: string;
  replacesSearchFor: string;
  whyUsersSwitch: string;
  whereGoogleStillWins: string;
  relatedPage?: string;
};

export const aiReplacingGoogleSearchLastUpdated = "2026-05-13";

export const aiReplacingGoogleSearchMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI tools replacing parts of traditional Google Search behavior. It combines public AI search visibility, workflow relevance, product positioning, and T4 Atlas analysis. Replacement strength is directional and should not be interpreted as audited search market share.",
};

export const aiReplacingGoogleSearchData: AiReplacingGoogleSearchEntry[] = [
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "ai-search-engine",
    replacementStrength: "very high",
    momentumScore: 92,
    bestFor: "Source-backed AI search, research, and answer synthesis",
    replacesSearchFor:
      "Research questions, source discovery, topic overviews, product comparisons, technical exploration, and multi-source summaries.",
    whyUsersSwitch:
      "Users switch because Perplexity gives direct answers with sources and reduces the need to open many search results manually.",
    whereGoogleStillWins:
      "Google remains stronger for local search, shopping, maps, real-time web breadth, navigational queries, and highly specific website discovery.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "general-assistant",
    replacementStrength: "high",
    momentumScore: 90,
    bestFor: "Conversational answers, explanations, planning, writing, and follow-up questions",
    replacesSearchFor:
      "Explanations, brainstorming, tutorials, summaries, planning questions, coding help, and general information synthesis.",
    whyUsersSwitch:
      "Users switch because ChatGPT can answer, explain, rewrite, compare, and continue the conversation without forcing users through a list of links.",
    whereGoogleStillWins:
      "Google remains stronger for source discovery, fresh web navigation, local results, shopping, and situations where the user needs to inspect original pages.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "browser-integrated-ai",
    replacementStrength: "high",
    momentumScore: 84,
    bestFor: "Google-connected AI answers, productivity workflows, and multimodal search-adjacent tasks",
    replacesSearchFor:
      "Quick explanations, search-adjacent summaries, Google ecosystem tasks, image-related questions, and productivity support.",
    whyUsersSwitch:
      "Gemini benefits from Google's ecosystem and can combine assistant-style interaction with search-adjacent workflows.",
    whereGoogleStillWins:
      "Traditional Google Search still wins when users want broad ranked web results, maps, local intent, shopping, or direct website navigation.",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "general-assistant",
    replacementStrength: "medium",
    momentumScore: 82,
    bestFor: "Long-form reasoning, document analysis, writing, and explanation",
    replacesSearchFor:
      "Complex explanations, long-document analysis, structured writing, concept synthesis, and decision support.",
    whyUsersSwitch:
      "Users switch when they want synthesis, reasoning, and long-form answers rather than a ranked list of pages.",
    whereGoogleStillWins:
      "Claude is not primarily a web search engine and is less suited to broad web discovery, local information, shopping, and navigational search.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    category: "browser-integrated-ai",
    replacementStrength: "medium",
    momentumScore: 78,
    bestFor: "AI answers inside Microsoft and browser-adjacent workflows",
    replacesSearchFor:
      "Quick summaries, productivity questions, browser-assisted answers, Microsoft workflow support, and general AI search-adjacent tasks.",
    whyUsersSwitch:
      "Users may use Copilot when AI answers are integrated into their browser, Windows, or Microsoft productivity environment.",
    whereGoogleStillWins:
      "Google remains stronger for general search habit, local discovery, shopping, SEO-indexed web exploration, and broad navigational behavior.",
  },
  {
    slug: "you-com",
    name: "You.com",
    category: "ai-search-engine",
    replacementStrength: "emerging",
    momentumScore: 68,
    bestFor: "AI search, summarization, and alternative search workflows",
    replacesSearchFor:
      "AI-assisted web exploration, direct answers, summaries, and search workflows for users trying alternatives to Google.",
    whyUsersSwitch:
      "Users switch when they want a search experience designed around AI answers rather than traditional blue links.",
    whereGoogleStillWins:
      "Google still has much stronger distribution, index depth, local search, shopping, maps, and search habit.",
  },
];

export const aiReplacingGoogleSearchKeyFindings = [
  {
    title: "AI is replacing some search behaviors, not all search",
    description:
      "Users increasingly turn to AI tools for answers, synthesis, research, and explanations, while Google remains strong for navigation, local search, shopping, and broad web discovery.",
  },
  {
    title: "Perplexity is the clearest Google Search substitute",
    description:
      "Perplexity is more directly positioned as an AI search engine than general chatbots because it emphasizes source-backed answers and discovery.",
  },
  {
    title: "ChatGPT replaces search when users want synthesis",
    description:
      "ChatGPT is strongest when users want a conversation, explanation, plan, summary, comparison, or draft rather than a list of results.",
  },
  {
    title: "Google still owns high-intent web navigation",
    description:
      "For maps, local services, shopping, fresh web indexing, and specific website discovery, traditional search remains difficult to replace.",
  },
];

export const aiReplacingGoogleSearchUseCases = [
  {
    useCase: "Research and source discovery",
    strongestTools: ["Perplexity", "ChatGPT", "Gemini"],
    description:
      "AI search tools reduce the need to open many tabs by summarizing sources and surfacing useful references.",
  },
  {
    useCase: "Explanations and learning",
    strongestTools: ["ChatGPT", "Claude", "Gemini"],
    description:
      "Conversational AI often replaces search when users need an explanation, tutorial, simplified concept, or follow-up questions.",
  },
  {
    useCase: "Product and tool comparisons",
    strongestTools: ["Perplexity", "ChatGPT", "Google Search"],
    description:
      "AI can summarize comparison logic, but users may still rely on Google to inspect original reviews, pricing pages, and current product pages.",
  },
  {
    useCase: "Local, shopping, and navigational search",
    strongestTools: ["Google Search", "Gemini", "Copilot"],
    description:
      "Traditional search remains strongest when the user needs a location, business, product listing, map, or specific website.",
  },
  {
    useCase: "Workplace knowledge and internal search",
    strongestTools: ["ChatGPT", "Claude", "Microsoft Copilot"],
    description:
      "AI assistants increasingly replace search-like behavior inside documents, internal knowledge systems, and productivity environments.",
  },
];
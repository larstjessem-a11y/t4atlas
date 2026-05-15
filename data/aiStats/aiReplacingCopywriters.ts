export type AiReplacingCopywritersEntry = {
  slug: string;
  name: string;
  category:
    | "general-assistant"
    | "copywriting-platform"
    | "seo-content"
    | "marketing-suite"
    | "brand-voice"
    | "creative-assistant";
  replacementStrength: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  bestFor: string;
  replacesCopywritingFor: string;
  whyTeamsUseIt: string;
  whereHumansStillWin: string;
  relatedPage?: string;
};

export const aiReplacingCopywritersLastUpdated = "2026-05-14";

export const aiReplacingCopywritersMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI tools replacing parts of traditional copywriting workflows. It combines public AI tool visibility, workflow relevance, marketing adoption signals, and T4 Atlas analysis. Replacement strength is directional and should not be interpreted as audited labor-market displacement.",
};

export const aiReplacingCopywritersData: AiReplacingCopywritersEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "general-assistant",
    replacementStrength: "very high",
    momentumScore: 94,
    bestFor:
      "Drafting, rewriting, brainstorming, landing-page copy, email copy, outlines, and content iteration",
    replacesCopywritingFor:
      "First drafts, variations, headline ideas, product descriptions, email drafts, social posts, and lightweight marketing copy.",
    whyTeamsUseIt:
      "ChatGPT is flexible, fast, inexpensive, and useful across many content formats, which makes it a default tool for marketing teams and solo operators.",
    whereHumansStillWin:
      "Humans still win on positioning, taste, brand strategy, emotional nuance, original insight, and final editorial judgment.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "copywriting-platform",
    replacementStrength: "high",
    momentumScore: 82,
    bestFor:
      "Marketing campaigns, brand voice workflows, ad copy, landing pages, and repeatable copy production",
    replacesCopywritingFor:
      "Template-driven copywriting, campaign copy, social variations, ad copy, and brand-consistent content production.",
    whyTeamsUseIt:
      "Jasper is built specifically for marketing workflows and is often used by teams that need repeatable content production with brand controls.",
    whereHumansStillWin:
      "Strategic positioning, campaign concepting, differentiated messaging, and high-stakes persuasive copy still require human direction.",
    relatedPage: "/tools/ai/alternatives-to-jasper",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "general-assistant",
    replacementStrength: "high",
    momentumScore: 86,
    bestFor:
      "Long-form writing, tone refinement, editing, content restructuring, and readable brand copy",
    replacesCopywritingFor:
      "Long-form drafts, rewrites, editing passes, tone adjustment, executive summaries, and structured content.",
    whyTeamsUseIt:
      "Claude is often valued for readable prose, long-context workflows, and coherent long-form editing.",
    whereHumansStillWin:
      "Humans still outperform on original point of view, deep audience empathy, lived experience, and distinctive voice.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    category: "copywriting-platform",
    replacementStrength: "medium",
    momentumScore: 74,
    bestFor:
      "Sales copy, short-form marketing copy, outbound drafts, and GTM workflow automation",
    replacesCopywritingFor:
      "Short-form copy, sales-email drafts, campaign variations, product messaging, and repeatable GTM content.",
    whyTeamsUseIt:
      "Copy.ai is positioned around GTM and copy workflows where teams want structured content generation rather than a blank chatbot.",
    whereHumansStillWin:
      "Humans are still needed for offer design, market understanding, message testing, and final approval.",
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    category: "seo-content",
    replacementStrength: "medium",
    momentumScore: 72,
    bestFor:
      "SEO content drafts, blog outlines, product descriptions, and marketing content generation",
    replacesCopywritingFor:
      "SEO article drafts, blog structures, product copy, and content briefs.",
    whyTeamsUseIt:
      "Writesonic appeals to users who want AI-assisted SEO and marketing content workflows.",
    whereHumansStillWin:
      "Original research, expert insight, editorial standards, and fact-checking remain essential.",
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    category: "seo-content",
    replacementStrength: "medium",
    momentumScore: 76,
    bestFor:
      "SEO content optimization, briefs, topical coverage, and search-intent alignment",
    replacesCopywritingFor:
      "SEO briefing, outline planning, content optimization, and search-intent coverage checks.",
    whyTeamsUseIt:
      "Surfer SEO is useful when the copywriting workflow is tightly linked to ranking, topical coverage, and content optimization.",
    whereHumansStillWin:
      "Humans still need to supply expertise, originality, editorial judgment, and differentiated positioning.",
    relatedPage: "/tools/ai/alternatives-to-surfer-seo",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "creative-assistant",
    replacementStrength: "medium",
    momentumScore: 70,
    bestFor:
      "Internal drafts, note-to-content workflows, summaries, and lightweight workplace writing",
    replacesCopywritingFor:
      "Internal copy, rough drafts, summaries, documentation, and notes turned into publishable material.",
    whyTeamsUseIt:
      "Notion AI is convenient when content and planning already live inside a workspace.",
    whereHumansStillWin:
      "External-facing messaging, creative positioning, and polished brand content still need human review.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
];

export const aiReplacingCopywritersKeyFindings = [
  {
    title: "AI replaces first drafts faster than final strategy",
    description:
      "AI is strongest at drafts, variations, outlines, and rewrites, but weaker at positioning, taste, brand strategy, and original insight.",
  },
  {
    title: "Copywriters shift toward editors and strategists",
    description:
      "As AI handles more production work, human value moves toward judgment, direction, research, message-market fit, and final quality control.",
  },
  {
    title: "SEO copywriting is especially exposed",
    description:
      "Template-driven SEO content, briefs, outlines, and repetitive article drafts are among the easiest copywriting workflows to automate.",
  },
  {
    title: "Brand voice is becoming a software layer",
    description:
      "Marketing teams increasingly use AI tools to scale consistent messaging, but human teams still define what the brand should actually say.",
  },
];

export const aiReplacingCopywritersUseCases = [
  {
    useCase: "First drafts and idea generation",
    strongestTools: ["ChatGPT", "Claude", "Jasper"],
    description:
      "AI is highly effective for starting from a blank page, generating angles, outlining content, and producing draft variations.",
  },
  {
    useCase: "SEO content workflows",
    strongestTools: ["Surfer SEO", "Writesonic", "ChatGPT"],
    description:
      "AI can support briefs, outlines, topical coverage, and draft generation, but rankings still depend on quality, authority, and usefulness.",
  },
  {
    useCase: "Ad copy and landing pages",
    strongestTools: ["Jasper", "ChatGPT", "Copy.ai"],
    description:
      "AI can produce many variations quickly, making it useful for testing headlines, CTAs, and campaign angles.",
  },
  {
    useCase: "Brand voice and campaign consistency",
    strongestTools: ["Jasper", "Claude", "ChatGPT"],
    description:
      "AI can help scale repeatable voice and formatting, but humans still need to define positioning and approve high-stakes copy.",
  },
  {
    useCase: "Editing and rewriting",
    strongestTools: ["Claude", "ChatGPT", "Notion AI"],
    description:
      "AI is strong at restructuring, simplifying, expanding, shortening, and adjusting tone across existing content.",
  },
];
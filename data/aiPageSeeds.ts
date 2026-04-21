export type AiPageSeedType = "best" | "alternative" | "comparison";

export type AiPageSeed = {
  slug: string;
  title: string;
  type: AiPageSeedType;
  topics: string[];
  affiliateSlugs?: string[];
};

export const aiPageSeeds: AiPageSeed[] = [
  // ===== HIGH-INTENT MONEY PAGES =====
  {
    slug: "best-ai-tools-for-agencies",
    title: "Best AI Tools for Agencies",
    type: "best",
    topics: ["marketing", "productivity", "chatgpt"],
    affiliateSlugs: ["chatgpt", "jasper", "notion-ai", "zapier"],
  },
  {
    slug: "best-ai-tools-for-customer-support",
    title: "Best AI Tools for Customer Support",
    type: "best",
    topics: ["productivity", "marketing", "chatgpt"],
    affiliateSlugs: ["intercom-ai", "chatgpt", "hubspot-ai"],
  },
  {
    slug: "best-ai-tools-for-sales",
    title: "Best AI Tools for Sales",
    type: "best",
    topics: ["marketing", "productivity", "chatgpt"],
    affiliateSlugs: ["apollo", "clay", "hubspot-ai", "chatgpt"],
  },
  {
    slug: "best-ai-tools-for-email-marketing",
    title: "Best AI Tools for Email Marketing",
    type: "best",
    topics: ["marketing", "writing", "chatgpt"],
    affiliateSlugs: ["jasper", "klaviyo-ai", "chatgpt"],
  },

  // ===== BREADTH / LONG-TAIL PAGES =====
  {
    slug: "best-ai-tools-for-real-estate",
    title: "Best AI Tools for Real Estate",
    type: "best",
    topics: ["marketing", "productivity", "chatgpt"],
    affiliateSlugs: ["chatgpt", "jasper", "notion-ai"],
  },
  {
    slug: "best-ai-tools-for-lawyers",
    title: "Best AI Tools for Lawyers",
    type: "best",
    topics: ["writing", "research", "chatgpt", "claude"],
    affiliateSlugs: ["chatgpt", "claude", "perplexity"],
  },
  {
    slug: "best-ai-tools-for-doctors",
    title: "Best AI Tools for Doctors",
    type: "best",
    topics: ["writing", "research", "chatgpt", "claude"],
    affiliateSlugs: ["chatgpt", "claude", "perplexity"],
  },
  {
    slug: "best-ai-tools-for-accountants",
    title: "Best AI Tools for Accountants",
    type: "best",
    topics: ["productivity", "writing", "chatgpt"],
    affiliateSlugs: ["chatgpt", "notion-ai", "zapier"],
  },
  {
    slug: "best-ai-tools-for-blogging",
    title: "Best AI Tools for Blogging",
    type: "best",
    topics: ["writing", "seo", "chatgpt"],
    affiliateSlugs: ["chatgpt", "surfer-seo", "frase"],
  },
  {
    slug: "best-ai-tools-for-copywriting",
    title: "Best AI Tools for Copywriting",
    type: "best",
    topics: ["writing", "marketing", "chatgpt"],
    affiliateSlugs: ["jasper", "chatgpt", "claude"],
  },

  // ===== MID-FUNNEL / COMPARISON EXPANSION =====
  {
    slug: "alternatives-to-jasper",
    title: "Alternatives to Jasper",
    type: "alternative",
    topics: ["writing", "marketing", "chatgpt"],
    affiliateSlugs: ["jasper", "chatgpt", "claude"],
  },
  {
    slug: "alternatives-to-surfer-seo",
    title: "Alternatives to Surfer SEO",
    type: "alternative",
    topics: ["seo", "marketing", "chatgpt"],
    affiliateSlugs: ["surfer-seo", "ahrefs", "frase"],
  },
  {
    slug: "chatgpt-vs-jasper",
    title: "ChatGPT vs Jasper",
    type: "comparison",
    topics: ["writing", "marketing", "chatgpt"],
    affiliateSlugs: ["chatgpt", "jasper"],
  },
  {
    slug: "surfer-seo-vs-ahrefs",
    title: "Surfer SEO vs Ahrefs",
    type: "comparison",
    topics: ["seo", "marketing", "chatgpt"],
    affiliateSlugs: ["surfer-seo", "ahrefs", "frase"],
  },
];
import { aiPageSeeds } from "@/data/aiPageSeeds";

export type AiEditorialType = "best" | "alternative" | "comparison";

export type AiEditorialTopic =
  | "writing"
  | "coding"
  | "research"
  | "video"
  | "productivity"
  | "meetings"
  | "students"
  | "seo"
  | "marketing"
  | "images"
  | "avatars"
  | "youtube"
  | "creators"
  | "chatgpt"
  | "claude"
  | "perplexity"
  | "copilot"
  | "midjourney"
  | "dalle"
  | "runway"
  | "pictory"
  | "synthesia"
  | "conversion"
  | "descript";

export type AiEditorialPage = {
  slug: string;
  title: string;
  type: AiEditorialType;
  href: string;
  topics: AiEditorialTopic[];
  affiliateSlugs?: string[];
};

const baseAiEditorialPages: AiEditorialPage[] = [
  {
    slug: "best-ai-tools-for-writing",
    title: "Best AI Tools for Writing",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-writing",
    topics: ["writing", "chatgpt", "claude"],
    affiliateSlugs: ["chatgpt", "claude"],
  },
{
  slug: "best-ai-workspace-tools",
  title: "Best AI Workspace Tools",
  type: "best",
  href: "/tools/ai/best-ai-workspace-tools",
  topics: ["productivity", "meetings", "writing", "research"],
  affiliateSlugs: ["chatgpt", "claude", "notion-ai", "perplexity"],
},
  {
    slug: "best-ai-tools-for-coding",
    title: "Best AI Tools for Coding",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-coding",
    topics: ["coding", "chatgpt", "copilot", "claude"],
    affiliateSlugs: ["chatgpt", "copilot", "cursor", "claude"],
  },
  {
    slug: "best-ai-tools-for-research",
    title: "Best AI Tools for Research",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-research",
    topics: ["research", "perplexity", "chatgpt", "claude"],
    affiliateSlugs: ["perplexity", "chatgpt", "claude"],
  },
  {
    slug: "best-ai-tools-for-video-editing",
    title: "Best AI Tools for Video Editing",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-video-editing",
    topics: ["video", "descript", "runway", "pictory"],
    affiliateSlugs: ["descript", "runway", "pictory"],
  },
  {
    slug: "best-ai-video-generators",
    title: "Best AI Video Generators",
    type: "best",
    href: "/tools/ai/best-ai-video-generators",
    topics: ["video", "marketing", "runway", "pictory", "synthesia"],
    affiliateSlugs: ["runway", "synthesia", "pictory", "descript"],
  },
  {
    slug: "best-ai-tools-for-youtube",
    title: "Best AI Tools for YouTube",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-youtube",
    topics: ["video", "youtube", "creators", "runway", "pictory", "descript"],
    affiliateSlugs: ["descript", "runway", "pictory", "chatgpt"],
  },
  {
    slug: "best-ai-tools-for-content-creators",
    title: "Best AI Tools for Content Creators",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-content-creators",
    topics: [
      "creators",
      "video",
      "marketing",
      "images",
      "chatgpt",
      "runway",
      "descript",
    ],
    affiliateSlugs: ["chatgpt", "runway", "descript", "pictory"],
  },
  {
    slug: "best-ai-avatar-generators",
    title: "Best AI Avatar Generators",
    type: "best",
    href: "/tools/ai/best-ai-avatar-generators",
    topics: ["avatars", "video", "marketing", "synthesia"],
    affiliateSlugs: ["synthesia"],
  },
  {
    slug: "best-ai-tools-for-productivity",
    title: "Best AI Tools for Productivity",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-productivity",
    topics: ["productivity", "chatgpt", "copilot"],
    affiliateSlugs: ["chatgpt", "copilot", "notion-ai", "zapier"],
  },
  {
    slug: "best-ai-tools-for-meetings",
    title: "Best AI Tools for Meetings",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-meetings",
    topics: ["meetings"],
  },
  {
    slug: "best-ai-tools-for-students",
    title: "Best AI Tools for Students",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-students",
    topics: ["students", "research", "writing", "chatgpt"],
    affiliateSlugs: ["chatgpt", "perplexity", "claude"],
  },
  {
    slug: "best-ai-tools-for-marketing",
    title: "Best AI Tools for Marketing",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-marketing",
    topics: ["marketing", "writing", "images", "video"],
    affiliateSlugs: ["jasper", "chatgpt", "runway", "pictory"],
  },
  {
    slug: "best-ai-image-generators",
    title: "Best AI Image Generators",
    type: "best",
    href: "/tools/ai/best-ai-image-generators",
    topics: ["images", "midjourney", "dalle", "marketing"],
  },
  {
    slug: "alternatives-to-chatgpt",
    title: "Alternatives to ChatGPT",
    type: "alternative",
    href: "/tools/ai/alternatives-to-chatgpt",
    topics: ["chatgpt", "claude", "perplexity", "copilot"],
    affiliateSlugs: ["chatgpt", "claude", "perplexity", "copilot"],
  },
  {
    slug: "alternatives-to-midjourney",
    title: "Alternatives to Midjourney",
    type: "alternative",
    href: "/tools/ai/alternatives-to-midjourney",
    topics: ["midjourney", "images", "dalle"],
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    type: "comparison",
    href: "/tools/ai/chatgpt-vs-claude",
    topics: ["chatgpt", "claude", "writing"],
    affiliateSlugs: ["chatgpt", "claude"],
  },
  {
    slug: "perplexity-vs-chatgpt",
    title: "Perplexity vs ChatGPT",
    type: "comparison",
    href: "/tools/ai/perplexity-vs-chatgpt",
    topics: ["perplexity", "chatgpt", "research"],
    affiliateSlugs: ["perplexity", "chatgpt"],
  },
  {
    slug: "claude-vs-perplexity",
    title: "Claude vs Perplexity",
    type: "comparison",
    href: "/tools/ai/claude-vs-perplexity",
    topics: ["claude", "perplexity", "research", "writing"],
    affiliateSlugs: ["claude", "perplexity"],
  },
  {
    slug: "chatgpt-vs-copilot",
    title: "ChatGPT vs Copilot",
    type: "comparison",
    href: "/tools/ai/chatgpt-vs-copilot",
    topics: ["chatgpt", "copilot", "coding", "productivity"],
    affiliateSlugs: ["chatgpt", "copilot", "cursor"],
  },
  {
    slug: "midjourney-vs-dalle",
    title: "Midjourney vs DALLÂ·E",
    type: "comparison",
    href: "/tools/ai/midjourney-vs-dalle",
    topics: ["midjourney", "dalle", "images"],
  },
  {
    slug: "runway-vs-pictory",
    title: "Runway vs Pictory",
    type: "comparison",
    href: "/tools/ai/runway-vs-pictory",
    topics: ["video", "marketing", "runway", "pictory", "creators"],
    affiliateSlugs: ["runway", "pictory"],
  },
  {
    slug: "synthesia-vs-runway",
    title: "Synthesia vs Runway",
    type: "comparison",
    href: "/tools/ai/synthesia-vs-runway",
    topics: ["video", "marketing", "avatars", "synthesia", "runway"],
    affiliateSlugs: ["synthesia", "runway"],
  },
  {
    slug: "synthesia-vs-pictory",
    title: "Synthesia vs Pictory",
    type: "comparison",
    href: "/tools/ai/synthesia-vs-pictory",
    topics: ["video", "marketing", "avatars", "synthesia", "pictory"],
    affiliateSlugs: ["synthesia", "pictory"],
  },
  {
    slug: "runway-vs-descript",
    title: "Runway vs Descript",
    type: "comparison",
    href: "/tools/ai/runway-vs-descript",
    topics: ["video", "creators", "runway", "descript"],
    affiliateSlugs: ["runway", "descript"],
  },
  {
    slug: "best-ai-tools-for-small-business",
    title: "Best AI Tools for Small Business",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-small-business",
    topics: ["marketing", "productivity", "video", "chatgpt"],
    affiliateSlugs: ["chatgpt", "jasper", "notion-ai", "zapier"],
  },
  {
    slug: "best-ai-tools-for-startups",
    title: "Best AI Tools for Startups",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-startups",
    topics: [
      "productivity",
      "marketing",
      "chatgpt",
      "claude",
      "perplexity",
      "coding",
    ],
    affiliateSlugs: ["chatgpt", "claude", "perplexity", "copilot", "cursor"],
  },
  {
    slug: "best-ai-tools-for-lead-generation",
    title: "Best AI Tools for Lead Generation",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-lead-generation",
    topics: ["marketing", "productivity", "chatgpt"],
    affiliateSlugs: ["apollo", "clay", "chatgpt", "hubspot-ai"],
  },
  {
    slug: "best-ai-tools-for-seo",
    title: "Best AI Tools for SEO",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-seo",
    topics: ["seo", "marketing", "chatgpt"],
    affiliateSlugs: ["chatgpt", "surfer-seo", "ahrefs", "frase"],
  },
  {
    slug: "best-ai-tools-for-freelancers",
    title: "Best AI Tools for Freelancers",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-freelancers",
    topics: ["productivity", "marketing", "chatgpt"],
    affiliateSlugs: ["chatgpt", "notion-ai", "jasper", "runway"],
  },
  {
    slug: "best-ai-tools-for-ecommerce",
    title: "Best AI Tools for E-commerce",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-ecommerce",
    topics: ["marketing", "conversion", "chatgpt"],
    affiliateSlugs: ["chatgpt", "jasper", "klaviyo-ai", "intercom-ai"],
  },
];

const seededAiEditorialPages: AiEditorialPage[] = aiPageSeeds.map((seed) => ({
  slug: seed.slug,
  title: seed.title,
  type: seed.type,
  href: `/tools/ai/${seed.slug}`,
  topics: seed.topics as AiEditorialTopic[],
  affiliateSlugs: seed.affiliateSlugs,
}));

const seenSlugs = new Set(baseAiEditorialPages.map((page) => page.slug));

export const aiEditorialPages: AiEditorialPage[] = [
  ...baseAiEditorialPages,
  ...seededAiEditorialPages.filter((page) => !seenSlugs.has(page.slug)),
];
export type AiEditorialType = "best" | "alternative" | "comparison";

export type AiEditorialTopic =
  | "writing"
  | "coding"
  | "research"
  | "video"
  | "productivity"
  | "meetings"
  | "students"
  | "marketing"
  | "images"
  | "chatgpt"
  | "claude"
  | "perplexity"
  | "copilot"
  | "midjourney"
  | "dalle";

export type AiEditorialPage = {
  slug: string;
  title: string;
  type: AiEditorialType;
  href: string;
  topics: AiEditorialTopic[];
};

export const aiEditorialPages: AiEditorialPage[] = [
  {
    slug: "best-ai-tools-for-writing",
    title: "Best AI Tools for Writing",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-writing",
    topics: ["writing", "chatgpt", "claude"],
  },
  {
    slug: "best-ai-tools-for-coding",
    title: "Best AI Tools for Coding",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-coding",
    topics: ["coding", "chatgpt", "copilot", "claude"],
  },
  {
    slug: "best-ai-tools-for-research",
    title: "Best AI Tools for Research",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-research",
    topics: ["research", "perplexity", "chatgpt", "claude"],
  },
  {
    slug: "best-ai-tools-for-video-editing",
    title: "Best AI Tools for Video Editing",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-video-editing",
    topics: ["video"],
  },
  {
    slug: "best-ai-video-generators",
    title: "Best AI Video Generators",
    type: "best",
    href: "/tools/ai/best-ai-video-generators",
    topics: ["video", "marketing"],
  },
  {
    slug: "best-ai-tools-for-productivity",
    title: "Best AI Tools for Productivity",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-productivity",
    topics: ["productivity", "chatgpt", "copilot"],
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
  },
  {
    slug: "best-ai-tools-for-marketing",
    title: "Best AI Tools for Marketing",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-marketing",
    topics: ["marketing", "writing", "images"],
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
  },
  {
    slug: "perplexity-vs-chatgpt",
    title: "Perplexity vs ChatGPT",
    type: "comparison",
    href: "/tools/ai/perplexity-vs-chatgpt",
    topics: ["perplexity", "chatgpt", "research"],
  },
  {
    slug: "claude-vs-perplexity",
    title: "Claude vs Perplexity",
    type: "comparison",
    href: "/tools/ai/claude-vs-perplexity",
    topics: ["claude", "perplexity", "research", "writing"],
  },
  {
    slug: "chatgpt-vs-copilot",
    title: "ChatGPT vs Copilot",
    type: "comparison",
    href: "/tools/ai/chatgpt-vs-copilot",
    topics: ["chatgpt", "copilot", "coding", "productivity"],
  },
  {
    slug: "midjourney-vs-dalle",
    title: "Midjourney vs DALL·E",
    type: "comparison",
    href: "/tools/ai/midjourney-vs-dalle",
    topics: ["midjourney", "dalle", "images"],
  },
{
  slug: "runway-vs-pictory",
  title: "Runway vs Pictory",
  type: "comparison",
  href: "/tools/ai/runway-vs-pictory",
  topics: ["video", "marketing"],
},
];
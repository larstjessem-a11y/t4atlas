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
    topics: ["video", "descript", "runway", "pictory"],
  },
  {
    slug: "best-ai-video-generators",
    title: "Best AI Video Generators",
    type: "best",
    href: "/tools/ai/best-ai-video-generators",
    topics: ["video", "marketing", "runway", "pictory", "synthesia"],
  },
  {
    slug: "best-ai-tools-for-youtube",
    title: "Best AI Tools for YouTube",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-youtube",
    topics: ["video", "youtube", "creators", "runway", "pictory", "descript"],
  },
  {
    slug: "best-ai-tools-for-content-creators",
    title: "Best AI Tools for Content Creators",
    type: "best",
    href: "/tools/ai/best-ai-tools-for-content-creators",
    topics: ["creators", "video", "marketing", "images", "chatgpt", "runway", "descript"],
  },
  {
    slug: "best-ai-avatar-generators",
    title: "Best AI Avatar Generators",
    type: "best",
    href: "/tools/ai/best-ai-avatar-generators",
    topics: ["avatars", "video", "marketing", "synthesia"],
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
    topics: ["marketing", "writing", "images", "video"],
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
    topics: ["video", "marketing", "runway", "pictory", "creators"],
  },
  {
    slug: "synthesia-vs-runway",
    title: "Synthesia vs Runway",
    type: "comparison",
    href: "/tools/ai/synthesia-vs-runway",
    topics: ["video", "marketing", "avatars", "synthesia", "runway"],
  },
  {
    slug: "synthesia-vs-pictory",
    title: "Synthesia vs Pictory",
    type: "comparison",
    href: "/tools/ai/synthesia-vs-pictory",
    topics: ["video", "marketing", "avatars", "synthesia", "pictory"],
  },
  {
    slug: "runway-vs-descript",
    title: "Runway vs Descript",
    type: "comparison",
    href: "/tools/ai/runway-vs-descript",
    topics: ["video", "creators", "runway", "descript"],
  },
{
  slug: "best-ai-tools-for-small-business",
  title: "Best AI Tools for Small Business",
  type: "best",
  href: "/tools/ai/best-ai-tools-for-small-business",
  topics: ["marketing", "productivity", "video", "chatgpt"],
},
{
  slug: "best-ai-tools-for-seo",
  title: "Best AI Tools for SEO",
  type: "best",
  href: "/tools/ai/best-ai-tools-for-seo",
  topics: ["seo", "marketing", "chatgpt"],
},
{
  slug: "best-ai-tools-for-freelancers",
  title: "Best AI Tools for Freelancers",
  type: "best",
  href: "/tools/ai/best-ai-tools-for-freelancers",
  topics: ["productivity", "marketing", "chatgpt"],
},
{
  slug: "best-ai-tools-for-ecommerce",
  title: "Best AI Tools for E-commerce",
  type: "best",
  href: "/tools/ai/best-ai-tools-for-ecommerce",
  topics: ["marketing", "conversion", "chatgpt"],
},
];
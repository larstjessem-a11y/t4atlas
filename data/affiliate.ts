export type AffiliateModule = {
  slug: string;
  hub: string;
  name: string;
  href: string;
  description: string;
  tag: string;
  placement: "editorial_bottom" | "sidebar";
};

export const affiliateModules: AffiliateModule[] = [
  {
    slug: "chatgpt",
    hub: "ai",
    name: "ChatGPT",
    href: "#",
    description:
      "Strong all-round AI assistant for writing, coding, brainstorming, and general productivity workflows.",
    tag: "All-rounder",
    placement: "editorial_bottom",
  },
  {
    slug: "claude",
    hub: "ai",
    name: "Claude",
    href: "#",
    description:
      "Strong choice for long-form writing, document analysis, and more natural language output.",
    tag: "Long-form writing",
    placement: "editorial_bottom",
  },
  {
    slug: "perplexity",
    hub: "ai",
    name: "Perplexity",
    href: "#",
    description:
      "Useful for research-driven workflows where source discovery and evidence-backed answers matter.",
    tag: "Research",
    placement: "editorial_bottom",
  },
  {
    slug: "cursor",
    hub: "ai",
    name: "Cursor",
    href: "#",
    description:
      "AI-first coding environment built for developers who want strong editor-based assistance and agentic workflows.",
    tag: "Coding",
    placement: "editorial_bottom",
  },
];
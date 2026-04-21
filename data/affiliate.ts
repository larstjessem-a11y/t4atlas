export type AffiliateModuleSlug =
  | "chatgpt"
  | "claude"
  | "perplexity"
  | "cursor"
  | "copilot"
  | "jasper"
  | "notion-ai"
  | "zapier"
  | "surfer-seo"
  | "ahrefs"
  | "frase"
  | "apollo"
  | "clay"
  | "hubspot-ai"
  | "klaviyo-ai"
  | "intercom-ai"
  | "runway"
  | "pictory"
  | "synthesia"
  | "descript"
  | "nordnet"
  | "etoro"
  | "interactive-brokers";

export type AffiliateModule = {
  slug: AffiliateModuleSlug;
  hub: "ai" | "finance";
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
  {
    slug: "copilot",
    hub: "ai",
    name: "GitHub Copilot",
    href: "#",
    description:
      "Embedded AI coding assistance for developers working directly inside their editor and development workflow.",
    tag: "Developer workflow",
    placement: "editorial_bottom",
  },
  {
    slug: "jasper",
    hub: "ai",
    name: "Jasper",
    href: "#",
    description:
      "Marketing-focused AI platform built for campaigns, copywriting, and repeatable content production.",
    tag: "Marketing",
    placement: "editorial_bottom",
  },
  {
    slug: "notion-ai",
    hub: "ai",
    name: "Notion AI",
    href: "#",
    description:
      "AI assistance inside documents and knowledge systems for teams managing workflows, notes, and internal ops.",
    tag: "Operations",
    placement: "editorial_bottom",
  },
  {
    slug: "zapier",
    hub: "ai",
    name: "Zapier",
    href: "#",
    description:
      "Automation layer for connecting apps, reducing manual work, and building repeatable workflows across business tools.",
    tag: "Automation",
    placement: "editorial_bottom",
  },
  {
    slug: "surfer-seo",
    hub: "ai",
    name: "Surfer SEO",
    href: "#",
    description:
      "Content optimization platform for improving on-page SEO and making articles more search-competitive.",
    tag: "On-page SEO",
    placement: "editorial_bottom",
  },
  {
    slug: "ahrefs",
    hub: "ai",
    name: "Ahrefs",
    href: "#",
    description:
      "Strong keyword research and competitive SEO intelligence platform for operators who need better search data.",
    tag: "Keyword research",
    placement: "editorial_bottom",
  },
  {
    slug: "frase",
    hub: "ai",
    name: "Frase",
    href: "#",
    description:
      "SEO workflow tool combining research, outlining, and content drafting in one environment.",
    tag: "SEO workflow",
    placement: "editorial_bottom",
  },
  {
    slug: "apollo",
    hub: "ai",
    name: "Apollo",
    href: "#",
    description:
      "Lead generation and prospecting platform built for finding contacts, organizing outreach, and growing pipeline.",
    tag: "Prospecting",
    placement: "editorial_bottom",
  },
  {
    slug: "clay",
    hub: "ai",
    name: "Clay",
    href: "#",
    description:
      "Lead enrichment and workflow automation tool for building more customized, data-driven prospecting systems.",
    tag: "Lead enrichment",
    placement: "editorial_bottom",
  },
  {
    slug: "hubspot-ai",
    hub: "ai",
    name: "HubSpot AI",
    href: "#",
    description:
      "AI support inside CRM, pipeline, and marketing workflows for teams that want a more integrated operating system.",
    tag: "CRM",
    placement: "editorial_bottom",
  },
  {
    slug: "klaviyo-ai",
    hub: "ai",
    name: "Klaviyo AI",
    href: "#",
    description:
      "Email and lifecycle marketing platform that becomes especially valuable for stores focused on retention and repeat purchase.",
    tag: "Retention",
    placement: "editorial_bottom",
  },
  {
    slug: "intercom-ai",
    hub: "ai",
    name: "Intercom AI",
    href: "#",
    description:
      "Customer support automation layer for teams handling repeated questions, ticket volume, and response-time pressure.",
    tag: "Support",
    placement: "editorial_bottom",
  },
  {
    slug: "runway",
    hub: "ai",
    name: "Runway",
    href: "#",
    description:
      "Creative AI video platform for generation, editing, and more ambitious visual production workflows.",
    tag: "AI video",
    placement: "editorial_bottom",
  },
  {
    slug: "pictory",
    hub: "ai",
    name: "Pictory",
    href: "#",
    description:
      "Fast video tool for repurposing scripts, articles, and marketing content into short-form video output.",
    tag: "Repurposing",
    placement: "editorial_bottom",
  },
  {
    slug: "synthesia",
    hub: "ai",
    name: "Synthesia",
    href: "#",
    description:
      "Avatar-led video platform for training, onboarding, explainers, and professional business communication.",
    tag: "Avatar video",
    placement: "editorial_bottom",
  },
  {
    slug: "descript",
    hub: "ai",
    name: "Descript",
    href: "#",
    description:
      "Editing-first platform for transcript-based workflows, podcasts, interviews, and creator production speed.",
    tag: "Editing workflow",
    placement: "editorial_bottom",
  },
  {
    slug: "nordnet",
    hub: "finance",
    name: "Nordnet",
    href: "#",
    description:
      "Popular platform for stocks, ETFs, and long-term investing in Europe.",
    tag: "Investing",
    placement: "editorial_bottom",
  },
  {
    slug: "etoro",
    hub: "finance",
    name: "eToro",
    href: "#",
    description:
      "User-friendly trading platform with social investing features.",
    tag: "Trading",
    placement: "editorial_bottom",
  },
  {
    slug: "interactive-brokers",
    hub: "finance",
    name: "Interactive Brokers",
    href: "#",
    description:
      "Advanced trading platform with global market access and low fees.",
    tag: "Advanced",
    placement: "editorial_bottom",
  },
];

export const pageAffiliateMap: Record<string, AffiliateModuleSlug[]> = {
  "best-ai-tools-for-seo": ["chatgpt", "surfer-seo", "ahrefs", "frase"],
  "best-ai-tools-for-small-business": [
    "chatgpt",
    "jasper",
    "notion-ai",
    "zapier",
  ],
  "best-ai-tools-for-ecommerce": [
    "chatgpt",
    "jasper",
    "klaviyo-ai",
    "intercom-ai",
  ],
  "best-ai-tools-for-startups": [
    "chatgpt",
    "claude",
    "perplexity",
    "copilot",
    "cursor",
  ],
  "best-ai-tools-for-lead-generation": [
    "apollo",
    "clay",
    "chatgpt",
    "hubspot-ai",
  ],
  "best-ai-tools-for-freelancers": [
    "chatgpt",
    "notion-ai",
    "jasper",
    "runway",
  ],

  "compound-interest": ["nordnet", "interactive-brokers", "etoro"],
  "cagr-calculator": ["nordnet", "interactive-brokers", "etoro"],
  "investment-return-calculator": [
    "nordnet",
    "interactive-brokers",
    "etoro",
  ],
  "annualized-return-calculator": [
    "nordnet",
    "interactive-brokers",
    "etoro",
  ],
  "total-return-calculator": ["nordnet", "interactive-brokers", "etoro"],
  "return-multiple-calculator": ["nordnet", "interactive-brokers", "etoro"],
  "rule-of-72-calculator": ["nordnet", "interactive-brokers", "etoro"],
};
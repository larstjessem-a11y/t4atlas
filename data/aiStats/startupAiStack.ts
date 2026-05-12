export type StartupAiStackEntry = {
  slug: string;
  name: string;
  layer:
    | "core-assistant"
    | "research"
    | "coding"
    | "workspace"
    | "meetings"
    | "marketing"
    | "sales"
    | "support"
    | "operations";
  adoptionPriority: "essential" | "high" | "medium" | "optional";
  momentumScore: number;
  bestFor: string;
  stackRole: string;
  whyStartupsUseIt: string;
  risksOrLimitations: string;
  relatedPage?: string;
};

export const startupAiStackLastUpdated = "2026-05-12";

export const startupAiStackMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for startup AI stacks. It combines public AI tool visibility, workflow relevance, adoption signals, and T4 Atlas analysis. Adoption priority is directional and should not be interpreted as audited startup usage data.",
};

export const startupAiStackData: StartupAiStackEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    layer: "core-assistant",
    adoptionPriority: "essential",
    momentumScore: 97,
    bestFor: "General AI assistance across writing, coding, research, planning, and operations",
    stackRole:
      "A flexible default assistant for founders and teams that need broad support across many early-stage workflows.",
    whyStartupsUseIt:
      "Startups use ChatGPT because it can cover many jobs before specialized systems are worth buying.",
    risksOrLimitations:
      "Teams still need quality control, source checking, privacy policies, and clear workflow ownership.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "claude",
    name: "Claude",
    layer: "core-assistant",
    adoptionPriority: "high",
    momentumScore: 90,
    bestFor: "Long-form writing, document analysis, strategy memos, and structured reasoning",
    stackRole:
      "Useful for founders working with long documents, product strategy, investor material, and detailed analysis.",
    whyStartupsUseIt:
      "Claude is often used when readability, reasoning, and long-context document work matter.",
    risksOrLimitations:
      "Outputs still need verification, especially for financial, legal, technical, or market claims.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    layer: "research",
    adoptionPriority: "high",
    momentumScore: 88,
    bestFor: "Market research, competitor research, source discovery, and fast learning",
    stackRole:
      "Supports research-heavy founder work where speed and source discovery matter.",
    whyStartupsUseIt:
      "Startups use Perplexity to scan markets, compare competitors, explore trends, and find source-backed answers.",
    risksOrLimitations:
      "Research findings should be validated against primary sources before strategic decisions.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    layer: "coding",
    adoptionPriority: "high",
    momentumScore: 86,
    bestFor: "Developer productivity, code completion, implementation speed, and engineering support",
    stackRole:
      "Accelerates coding work for technical founders and software teams.",
    whyStartupsUseIt:
      "Copilot fits directly into coding workflows and can improve speed on routine implementation tasks.",
    risksOrLimitations:
      "Generated code still needs review, testing, security checks, and architectural judgment.",
    relatedPage: "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    layer: "workspace",
    adoptionPriority: "medium",
    momentumScore: 76,
    bestFor: "Internal knowledge, notes, documentation, project briefs, and startup operating systems",
    stackRole:
      "Helps turn scattered startup knowledge into searchable notes, docs, and internal working material.",
    whyStartupsUseIt:
      "Notion AI is useful when the team already runs planning, docs, and internal knowledge in Notion.",
    risksOrLimitations:
      "Value depends on documentation discipline and whether the team actually keeps knowledge organized.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
  {
    slug: "fireflies",
    name: "Fireflies",
    layer: "meetings",
    adoptionPriority: "medium",
    momentumScore: 72,
    bestFor: "Meeting notes, sales calls, customer discovery interviews, and action items",
    stackRole:
      "Captures calls and creates summaries so founders do not lose information from meetings and interviews.",
    whyStartupsUseIt:
      "Meeting tools are useful when founders spend time in sales calls, investor calls, hiring, and customer discovery.",
    risksOrLimitations:
      "Privacy and consent rules matter when recording or transcribing meetings.",
    relatedPage: "/tools/ai/best-ai-tools-for-meetings",
  },
  {
    slug: "jasper",
    name: "Jasper",
    layer: "marketing",
    adoptionPriority: "optional",
    momentumScore: 68,
    bestFor: "Marketing copy, landing pages, campaigns, and brand voice workflows",
    stackRole:
      "A specialized marketing layer for teams that need repeatable campaign and copy workflows.",
    whyStartupsUseIt:
      "Jasper can help when marketing volume and brand consistency become important.",
    risksOrLimitations:
      "Early startups may not need a specialized copy platform before they have clear positioning.",
    relatedPage: "/tools/ai/alternatives-to-jasper",
  },
  {
    slug: "zapier-ai",
    name: "Zapier AI",
    layer: "operations",
    adoptionPriority: "medium",
    momentumScore: 70,
    bestFor: "Workflow automation between apps, lightweight operations, and no-code automation",
    stackRole:
      "Connects tools and automates repetitive startup operations without requiring custom software.",
    whyStartupsUseIt:
      "Startups use automation tools to avoid manual work across CRM, email, forms, spreadsheets, and internal tools.",
    risksOrLimitations:
      "Automations can become brittle if workflows are poorly designed or not monitored.",
  },
];

export const startupAiStackKeyFindings = [
  {
    title: "Startups need breadth before specialization",
    description:
      "Early teams usually benefit most from flexible AI assistants before buying many narrow tools.",
  },
  {
    title: "Research and coding are high-leverage layers",
    description:
      "Market research, competitor analysis, code generation, debugging, and implementation support can save substantial founder time.",
  },
  {
    title: "Meetings and customer discovery create hidden data",
    description:
      "AI meeting tools can help startups capture sales calls, customer interviews, investor notes, and follow-up tasks.",
  },
  {
    title: "The best AI stack depends on stage",
    description:
      "Pre-seed teams need flexibility; later teams benefit more from specialized tools for sales, support, operations, and marketing.",
  },
];

export const startupAiStackLayers = [
  {
    layer: "Core assistant",
    tools: ["ChatGPT", "Claude"],
    description:
      "The general-purpose layer for writing, reasoning, drafting, analysis, strategy, and broad operational support.",
  },
  {
    layer: "Research",
    tools: ["Perplexity", "ChatGPT", "Claude"],
    description:
      "The research layer for market scans, competitor analysis, source discovery, trend monitoring, and fast learning.",
  },
  {
    layer: "Engineering",
    tools: ["GitHub Copilot", "ChatGPT", "Cursor"],
    description:
      "The coding and engineering layer for implementation, code completion, debugging, and technical explanation.",
  },
  {
    layer: "Workspace",
    tools: ["Notion AI", "ChatGPT", "Claude"],
    description:
      "The operating-system layer for docs, notes, planning, internal knowledge, product specs, and decision records.",
  },
  {
    layer: "Go-to-market",
    tools: ["Jasper", "ChatGPT", "Zapier AI"],
    description:
      "The marketing, sales, and automation layer for landing pages, outbound drafts, workflow automation, and campaign support.",
  },
];
export type BestAiCodingAssistantRow = {
  tool: string;
  positioning: string;
  strengths: string;
  bestFor: string;
};

export const bestAiCodingAssistantsData: BestAiCodingAssistantRow[] = [
  {
    tool: "GitHub Copilot",
    positioning: "Mainstream coding copilot",
    strengths:
      "Autocomplete, IDE integration, enterprise adoption",
    bestFor: "Broad software-team productivity",
  },
  {
    tool: "Cursor",
    positioning: "AI-native coding assistant",
    strengths:
      "Repository reasoning, multi-file editing, chat workflows",
    bestFor: "AI-native development workflows",
  },
  {
    tool: "Claude",
    positioning: "Reasoning-focused AI assistant",
    strengths:
      "Large-context reasoning, code explanation, architecture support",
    bestFor: "Complex reasoning and debugging",
  },
  {
    tool: "ChatGPT",
    positioning: "General AI coding assistant",
    strengths:
      "Broad coding support, explanation, scripting, debugging",
    bestFor: "General-purpose development support",
  },
  {
    tool: "Codeium",
    positioning: "Accessible coding assistant",
    strengths:
      "Autocomplete, broad IDE support, developer accessibility",
    bestFor: "Developers seeking lightweight copilots",
  },
  {
    tool: "Amazon Q Developer",
    positioning: "Enterprise coding assistant",
    strengths:
      "AWS integration, enterprise workflows, infrastructure support",
    bestFor: "Cloud-native enterprise teams",
  },
];

export const bestAiCodingAssistantsKeyFindings = [
  {
    title: "Coding assistants are becoming workflow systems",
    description:
      "AI coding tools increasingly support planning, debugging, repository reasoning, onboarding, and software-team coordination.",
  },
  {
    title: "Autocomplete is no longer the full market",
    description:
      "The market is moving toward AI-native development environments and broader AI-assisted engineering workflows.",
  },
  {
    title: "General AI assistants remain important",
    description:
      "Many developers still rely heavily on ChatGPT and Claude for reasoning, architecture, debugging, and explanation.",
  },
  {
    title: "Enterprise governance matters more over time",
    description:
      "Security, governance, model transparency, and integration increasingly shape enterprise AI coding adoption.",
  },
];

export const bestAiCodingAssistantsCategories = [
  {
    title: "IDE copilots",
    description:
      "Assistants integrated directly into development environments for autocomplete and inline developer support.",
  },
  {
    title: "AI-native coding systems",
    description:
      "AI-first coding environments optimized for repository reasoning and conversational development.",
  },
  {
    title: "General reasoning assistants",
    description:
      "Broad AI systems used for debugging, architecture, explanation, scripting, and technical reasoning.",
  },
  {
    title: "Enterprise development assistants",
    description:
      "AI coding tools optimized for governance, compliance, cloud integration, and large software organizations.",
  },
];

export const bestAiCodingAssistantsMethodology = {
  title: "AI coding assistant methodology",
  description:
    "This comparison combines workflow positioning, coding capabilities, developer adoption patterns, enterprise fit, ecosystem maturity, and repository-awareness signals.",
};

export const bestAiCodingAssistantsLastUpdated =
  "2026-05-28";
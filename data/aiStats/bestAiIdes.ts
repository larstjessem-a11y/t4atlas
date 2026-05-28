export type BestAiIdeRow = {
  tool: string;
  positioning: string;
  strengths: string;
  bestFor: string;
};

export const bestAiIdesData: BestAiIdeRow[] = [
  {
    tool: "Cursor",
    positioning: "AI-native coding editor",
    strengths:
      "Repository awareness, chat-first workflows, multi-file editing",
    bestFor: "AI-native software development",
  },
  {
    tool: "GitHub Copilot",
    positioning: "IDE-integrated coding assistant",
    strengths:
      "Autocomplete, ecosystem maturity, enterprise familiarity",
    bestFor: "Broad developer adoption",
  },
  {
    tool: "Windsurf",
    positioning: "AI-native IDE",
    strengths:
      "Integrated workflows, AI-assisted coding environment",
    bestFor: "Developers exploring AI-native tooling",
  },
  {
    tool: "Replit",
    positioning: "Cloud-native AI coding environment",
    strengths:
      "Rapid prototyping, browser development, collaboration",
    bestFor: "Fast iteration and startup workflows",
  },
  {
    tool: "Codeium",
    positioning: "AI coding assistant",
    strengths:
      "Autocomplete, developer accessibility, broad IDE support",
    bestFor: "Developers seeking Copilot alternatives",
  },
  {
    tool: "JetBrains AI",
    positioning: "Integrated AI development tooling",
    strengths:
      "JetBrains ecosystem integration, productivity support",
    bestFor: "JetBrains-based software teams",
  },
];

export const bestAiIdesKeyFindings = [
  {
    title: "AI IDEs are replacing simple autocomplete",
    description:
      "The market is shifting from inline suggestions toward repository-aware AI-native development environments.",
  },
  {
    title: "Cursor helped define the AI-native IDE category",
    description:
      "Cursor accelerated interest in AI-first workflows built around chat, reasoning, and codebase interaction.",
  },
  {
    title: "GitHub Copilot remains dominant in enterprises",
    description:
      "Copilot benefits from GitHub integration, familiarity, governance trust, and broad deployment.",
  },
  {
    title: "Developers increasingly combine multiple AI tools",
    description:
      "Teams often mix IDE copilots, chat assistants, APIs, and workflow tools rather than using one system alone.",
  },
];

export const bestAiIdesCategories = [
  {
    title: "AI-native editors",
    description:
      "Editors designed around AI workflows, repository awareness, and conversational development.",
  },
  {
    title: "IDE copilots",
    description:
      "Assistants integrated into traditional IDEs for autocomplete, explanation, and developer productivity.",
  },
  {
    title: "Cloud development environments",
    description:
      "Browser-native coding platforms with AI-assisted workflows and collaboration features.",
  },
  {
    title: "Enterprise coding platforms",
    description:
      "AI development tools focused on governance, scalability, ecosystem integration, and team workflows.",
  },
];

export const bestAiIdesMethodology = {
  title: "AI IDE methodology",
  description:
    "This ranking combines workflow positioning, AI-native capabilities, repository awareness, enterprise adoption signals, developer popularity, and ecosystem maturity.",
};

export const bestAiIdesLastUpdated = "2026-05-28";
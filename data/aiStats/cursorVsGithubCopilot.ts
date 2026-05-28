export type CursorVsCopilotRow = {
  category: string;
  cursor: string;
  copilot: string;
};

export const cursorVsGithubCopilotData: CursorVsCopilotRow[] = [
  {
    category: "Primary positioning",
    cursor: "AI-native coding environment",
    copilot: "AI coding assistant inside existing IDEs",
  },
  {
    category: "Workflow style",
    cursor: "Chat-first and codebase-aware",
    copilot: "Autocomplete-first and inline assistance",
  },
  {
    category: "Codebase awareness",
    cursor: "Strong repository-wide context",
    copilot: "More limited repository context",
  },
  {
    category: "IDE approach",
    cursor: "Forked AI-native editor experience",
    copilot: "Extension integrated into existing IDEs",
  },
  {
    category: "Autocomplete quality",
    cursor: "Strong",
    copilot: "Very strong and mature",
  },
  {
    category: "Multi-file editing",
    cursor: "Strong support",
    copilot: "More limited",
  },
  {
    category: "Chat integration",
    cursor: "Core workflow component",
    copilot: "Secondary workflow component",
  },
  {
    category: "Developer onboarding",
    cursor: "More workflow adaptation required",
    copilot: "Very easy for existing VS Code users",
  },
  {
    category: "Enterprise familiarity",
    cursor: "Growing rapidly",
    copilot: "Very strong enterprise trust",
  },
  {
    category: "Best suited for",
    cursor: "AI-native developers and power users",
    copilot: "Broad developer adoption",
  },
];

export const cursorVsGithubCopilotKeyFindings = [
  {
    title: "Cursor represents AI-native development",
    description:
      "Cursor moves beyond autocomplete toward repository-aware AI workflows with integrated chat, editing, and multi-file context.",
  },
  {
    title: "GitHub Copilot remains the enterprise default",
    description:
      "Copilot benefits from GitHub integration, enterprise familiarity, mature autocomplete, and low-friction adoption.",
  },
  {
    title: "The market is shifting from autocomplete to workflows",
    description:
      "The next phase of AI coding focuses on codebase understanding, multi-file changes, agents, and integrated developer workflows.",
  },
  {
    title: "Developers increasingly combine tools",
    description:
      "Many teams use Copilot for autocomplete while experimenting with Cursor for repository reasoning and AI-native editing.",
  },
];

export const cursorVsGithubCopilotUseCases = [
  {
    title: "Autocomplete and coding speed",
    description:
      "GitHub Copilot still performs extremely well for inline suggestions, rapid iteration, and low-friction developer assistance.",
  },
  {
    title: "Repository-aware editing",
    description:
      "Cursor is optimized for broader codebase understanding, refactoring, and multi-file workflows.",
  },
  {
    title: "Enterprise software teams",
    description:
      "Copilot currently benefits from stronger enterprise trust, governance familiarity, and ecosystem integration.",
  },
  {
    title: "AI-native developer workflows",
    description:
      "Cursor appeals to developers who want AI integrated deeply into planning, editing, architecture, and reasoning workflows.",
  },
];

export const cursorVsGithubCopilotLastUpdated =
  "2026-05-28";

export const cursorVsGithubCopilotMethodology = {
  title: "Comparison methodology",
  description:
    "This comparison is based on workflow positioning, ecosystem maturity, developer adoption patterns, AI-native editing capabilities, repository awareness, and enterprise adoption signals.",
};
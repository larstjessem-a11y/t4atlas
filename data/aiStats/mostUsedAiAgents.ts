export type MostUsedAiAgentRow = {
  agent: string;
  category: string;
  primaryUseCase: string;
  adoptionSignal: string;
  momentumScore: number;
};

export const mostUsedAiAgentsData: MostUsedAiAgentRow[] = [
  {
    agent: "ChatGPT",
    category: "General AI assistant",
    primaryUseCase: "Research, writing, coding, planning, and workflow support",
    adoptionSignal: "Very high consumer, professional, and enterprise visibility",
    momentumScore: 98,
  },
  {
    agent: "Microsoft Copilot",
    category: "Enterprise productivity agent",
    primaryUseCase: "Microsoft 365 workflows, documents, meetings, and enterprise search",
    adoptionSignal: "Strong enterprise distribution through Microsoft ecosystem",
    momentumScore: 92,
  },
  {
    agent: "Claude",
    category: "Reasoning and document agent",
    primaryUseCase: "Long-context analysis, writing, coding, and document workflows",
    adoptionSignal: "Strong professional and developer adoption signals",
    momentumScore: 90,
  },
  {
    agent: "Gemini",
    category: "Google ecosystem agent",
    primaryUseCase: "Search, productivity, Android, Workspace, and multimodal tasks",
    adoptionSignal: "Strong distribution through Google products",
    momentumScore: 88,
  },
  {
    agent: "Perplexity",
    category: "AI search agent",
    primaryUseCase: "Research, answer synthesis, source discovery, and search replacement",
    adoptionSignal: "High visibility in AI search and research workflows",
    momentumScore: 84,
  },
  {
    agent: "Cursor Agent",
    category: "Coding agent",
    primaryUseCase: "Codebase reasoning, multi-file edits, debugging, and AI-native development",
    adoptionSignal: "Strong developer mindshare in AI-native coding workflows",
    momentumScore: 82,
  },
  {
    agent: "Devin",
    category: "Software engineering agent",
    primaryUseCase: "Autonomous software tasks, development workflows, and coding automation",
    adoptionSignal: "High awareness as an AI software-engineering agent",
    momentumScore: 78,
  },
  {
    agent: "OpenAI Operator",
    category: "Computer-use agent",
    primaryUseCase: "Browser-based task execution, web workflows, and agentic operations",
    adoptionSignal: "High strategic relevance despite early-stage adoption",
    momentumScore: 76,
  },
  {
    agent: "Manus",
    category: "General-purpose task agent",
    primaryUseCase: "Multi-step tasks, research, automation, and agentic workflows",
    adoptionSignal: "Strong attention in early AI-agent market discussions",
    momentumScore: 74,
  },
  {
    agent: "Genspark",
    category: "AI research and task agent",
    primaryUseCase: "Research pages, automated task flows, and information synthesis",
    adoptionSignal: "Growing visibility in AI-agent and search-agent categories",
    momentumScore: 70,
  },
];

export const mostUsedAiAgentsKeyFindings = [
  {
    title: "AI agents are becoming workflow layers",
    description:
      "The leading AI agents are moving beyond chat toward research, browsing, coding, productivity, and multi-step task execution.",
  },
  {
    title: "Distribution matters as much as autonomy",
    description:
      "ChatGPT, Microsoft Copilot, Gemini, and Claude benefit from strong distribution even when agentic workflows are still evolving.",
  },
  {
    title: "Coding remains an early agent category",
    description:
      "Developer workflows are one of the first places where agentic AI has clear practical use cases.",
  },
  {
    title: "AI search is becoming agentic",
    description:
      "Perplexity, Genspark, and similar systems show how search is shifting from links toward task-oriented answer engines.",
  },
];

export const mostUsedAiAgentsCategories = [
  {
    title: "General AI assistants",
    description:
      "Broad AI systems used for writing, research, coding, planning, analysis, and everyday knowledge work.",
  },
  {
    title: "Enterprise productivity agents",
    description:
      "AI systems embedded into workplace software, documents, meetings, email, search, and internal knowledge workflows.",
  },
  {
    title: "Coding agents",
    description:
      "AI agents that assist with codebase reasoning, debugging, multi-file edits, and software-development tasks.",
  },
  {
    title: "AI search agents",
    description:
      "AI systems that combine search, source synthesis, research automation, and answer generation.",
  },
];

export const mostUsedAiAgentsMethodology = {
  title: "AI agent ranking methodology",
  description:
    "This ranking combines public visibility, workflow relevance, distribution strength, developer and enterprise adoption signals, category momentum, and T4 Atlas editorial assessment.",
};

export const mostUsedAiAgentsLastUpdated = "2026-06-03";
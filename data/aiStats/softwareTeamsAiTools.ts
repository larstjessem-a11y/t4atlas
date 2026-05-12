export type SoftwareTeamAiToolEntry = {
  slug: string;
  name: string;
  category:
    | "coding"
    | "code-review"
    | "debugging"
    | "documentation"
    | "testing"
    | "project-management"
    | "knowledge-management"
    | "research";
  adoptionLevel: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  bestFor: string;
  workflowRole: string;
  whyTeamsUseIt: string;
  risksOrLimitations: string;
  relatedPage?: string;
};

export const softwareTeamsAiToolsLastUpdated = "2026-05-12";

export const softwareTeamsAiToolsMethodology = {
  title: "Methodology",
  description:
    "This page combines public AI tool visibility, developer workflow relevance, ecosystem adoption signals, and T4 Atlas editorial analysis. Adoption levels are directional and should not be interpreted as audited enterprise usage statistics.",
};

export const softwareTeamsAiToolsData: SoftwareTeamAiToolEntry[] = [
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "coding",
    adoptionLevel: "very high",
    momentumScore: 94,
    bestFor: "In-editor code completion and pair programming",
    workflowRole:
      "Helps developers write, autocomplete, refactor, and explain code directly inside the IDE.",
    whyTeamsUseIt:
      "Copilot is widely adopted because it fits directly into existing developer workflows and supports many languages and IDE setups.",
    risksOrLimitations:
      "Teams still need code review, testing, security review, and clear policies for generated code.",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "research",
    adoptionLevel: "very high",
    momentumScore: 93,
    bestFor: "General coding help, architecture thinking, debugging, and explanations",
    workflowRole:
      "Acts as a flexible assistant for explaining code, generating examples, debugging, writing scripts, and reasoning through implementation options.",
    whyTeamsUseIt:
      "ChatGPT is flexible across coding, documentation, planning, research, and general problem solving.",
    risksOrLimitations:
      "Outputs need verification, especially for security-sensitive code, architecture decisions, and unfamiliar libraries.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "coding",
    adoptionLevel: "high",
    momentumScore: 90,
    bestFor: "AI-native coding inside a dedicated editor",
    workflowRole:
      "Supports codebase-aware editing, refactoring, chat, and multi-file code changes inside an AI-focused development environment.",
    whyTeamsUseIt:
      "Cursor is attractive for developers who want deeper AI integration than a standard autocomplete plugin.",
    risksOrLimitations:
      "Adoption may require editor migration and team-level norms for reviewing AI-generated changes.",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "documentation",
    adoptionLevel: "high",
    momentumScore: 88,
    bestFor: "Long-context reasoning, documentation, and code explanation",
    workflowRole:
      "Useful for reviewing large technical documents, summarizing code concepts, drafting documentation, and reasoning through complex implementation tradeoffs.",
    whyTeamsUseIt:
      "Claude is often valued for long-form reasoning, readability, and long-context workflows.",
    risksOrLimitations:
      "Teams should validate technical claims and avoid sending sensitive code unless policies allow it.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "research",
    adoptionLevel: "high",
    momentumScore: 84,
    bestFor: "Technical research and source discovery",
    workflowRole:
      "Helps developers research libraries, compare tools, understand frameworks, and find source-backed explanations.",
    whyTeamsUseIt:
      "Perplexity is useful when the workflow depends on discovering current information and checking sources.",
    risksOrLimitations:
      "Search results still need validation against official documentation before implementation.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "codeium",
    name: "Codeium",
    category: "coding",
    adoptionLevel: "medium",
    momentumScore: 76,
    bestFor: "AI code completion and developer productivity",
    workflowRole:
      "Provides code completion, chat, and developer assistance across common programming workflows.",
    whyTeamsUseIt:
      "Codeium is often considered by teams comparing AI coding assistants beyond Copilot.",
    risksOrLimitations:
      "Team adoption depends on IDE compatibility, security requirements, and quality expectations.",
  },
  {
    slug: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    category: "knowledge-management",
    adoptionLevel: "medium",
    momentumScore: 75,
    bestFor: "Understanding large codebases",
    workflowRole:
      "Helps developers search, understand, and reason about large codebases and code relationships.",
    whyTeamsUseIt:
      "Cody is useful where codebase understanding and developer onboarding are major bottlenecks.",
    risksOrLimitations:
      "Value depends on repository size, code search setup, and integration quality.",
  },
  {
    slug: "linear",
    name: "Linear",
    category: "project-management",
    adoptionLevel: "medium",
    momentumScore: 70,
    bestFor: "Product and engineering workflow coordination",
    workflowRole:
      "Supports issue tracking, roadmapping, project workflows, and engineering team coordination, increasingly alongside AI-enabled workflow features.",
    whyTeamsUseIt:
      "Software teams use Linear for fast product-engineering workflows and structured execution.",
    risksOrLimitations:
      "AI value depends on workflow discipline and integration with existing team processes.",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "documentation",
    adoptionLevel: "medium",
    momentumScore: 69,
    bestFor: "Engineering notes, docs, and internal knowledge",
    workflowRole:
      "Helps teams summarize notes, draft documentation, organize knowledge, and support internal wiki workflows.",
    whyTeamsUseIt:
      "Notion AI is useful when product and engineering knowledge already lives inside Notion.",
    risksOrLimitations:
      "Less effective if documentation is fragmented across many systems.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
];

export const softwareTeamsAiToolsKeyFindings = [
  {
    title: "Coding assistants are the entry point",
    description:
      "Most software teams first adopt AI through coding assistants because they fit directly into existing IDE and pull-request workflows.",
  },
  {
    title: "Research and documentation are major use cases",
    description:
      "AI tools are increasingly used for technical research, code explanation, documentation, and onboarding, not only code generation.",
  },
  {
    title: "Code review and testing remain essential",
    description:
      "AI-generated code can accelerate development, but teams still need review, tests, security checks, and engineering judgment.",
  },
  {
    title: "Workflow integration matters more than model quality alone",
    description:
      "The most useful tools are often the ones that fit naturally into editors, repositories, documentation systems, and planning workflows.",
  },
];

export const softwareTeamsAiWorkflowStages = [
  {
    stage: "Planning",
    tools: ["ChatGPT", "Claude", "Linear", "Notion AI"],
    description:
      "Teams use AI for scoping, technical planning, ticket drafting, and turning rough product ideas into implementation steps.",
  },
  {
    stage: "Coding",
    tools: ["GitHub Copilot", "Cursor", "Codeium", "ChatGPT"],
    description:
      "AI coding assistants support autocomplete, code generation, refactoring, explanation, and small implementation tasks.",
  },
  {
    stage: "Research",
    tools: ["Perplexity", "ChatGPT", "Claude"],
    description:
      "Developers use AI to compare libraries, understand frameworks, summarize documentation, and explore implementation options.",
  },
  {
    stage: "Documentation",
    tools: ["Claude", "Notion AI", "ChatGPT"],
    description:
      "AI can help write technical documentation, summarize architectural decisions, and improve onboarding material.",
  },
  {
    stage: "Codebase understanding",
    tools: ["Sourcegraph Cody", "Cursor", "Claude"],
    description:
      "AI can help developers navigate large repositories, explain unfamiliar code, and understand dependencies.",
  },
];
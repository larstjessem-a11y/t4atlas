export type AiCodingMarketShareEntry = {
  slug: string;
  name: string;
  category:
    | "ide-copilot"
    | "ai-native-editor"
    | "general-assistant"
    | "codebase-assistant"
    | "open-source-coding"
    | "enterprise-coding";
  adoptionTier:
    | "dominant"
    | "very high"
    | "high"
    | "growing";
  momentumScore: number;
  bestFor: string;
  whyDevelopersUseIt: string;
  marketPosition: string;
  risksOrLimitations: string;
  relatedPage?: string;
};

export const aiCodingMarketShareLastUpdated = "2026-05-15";

export const aiCodingMarketShareMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI coding market share and developer adoption. It combines public visibility, developer workflow relevance, ecosystem distribution, product positioning, and T4 Atlas analysis. Adoption tiers are directional and should not be interpreted as audited market share or verified seat counts.",
};

export const aiCodingMarketShareData: AiCodingMarketShareEntry[] = [
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "ide-copilot",
    adoptionTier: "dominant",
    momentumScore: 96,
    bestFor:
      "In-editor code completion, pair programming, enterprise developer productivity, and GitHub-native workflows.",
    whyDevelopersUseIt:
      "Copilot is widely adopted because it fits directly into existing IDE and GitHub workflows with minimal behavior change.",
    marketPosition:
      "GitHub Copilot is the reference product in AI coding assistance and benefits from GitHub, Microsoft, and enterprise distribution.",
    risksOrLimitations:
      "Teams still need review, tests, security controls, and policies for generated code.",
    relatedPage: "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "ai-native-editor",
    adoptionTier: "very high",
    momentumScore: 93,
    bestFor:
      "AI-native coding, codebase-aware editing, refactoring, multi-file changes, and developer-agent workflows.",
    whyDevelopersUseIt:
      "Cursor is popular with developers who want deeper AI integration than a traditional autocomplete plugin.",
    marketPosition:
      "Cursor is one of the strongest AI-native coding tools and is shaping expectations for codebase-aware development.",
    risksOrLimitations:
      "Adoption can require editor migration and new review norms for AI-generated multi-file changes.",
    relatedPage: "/tools/ai/professions/ai-tools-for-software-teams",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "general-assistant",
    adoptionTier: "very high",
    momentumScore: 92,
    bestFor:
      "Coding explanations, debugging help, scripts, architecture thinking, learning, and implementation planning.",
    whyDevelopersUseIt:
      "Developers use ChatGPT because it is flexible across code explanation, debugging, architecture, scripting, and documentation.",
    marketPosition:
      "ChatGPT is not only a coding tool, but it remains one of the most widely used AI assistants for software development support.",
    risksOrLimitations:
      "Outputs require verification against official documentation, tests, and project-specific constraints.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "general-assistant",
    adoptionTier: "high",
    momentumScore: 88,
    bestFor:
      "Long-context code reasoning, technical writing, documentation, architecture analysis, and code explanation.",
    whyDevelopersUseIt:
      "Claude is valued for long-context workflows, readable explanations, and reasoning over larger technical documents.",
    marketPosition:
      "Claude is strong among power users and teams that need long-context reasoning and documentation-heavy workflows.",
    risksOrLimitations:
      "It is less embedded into IDE workflows than dedicated coding products unless integrated through third-party tools.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "codeium",
    name: "Codeium",
    category: "ide-copilot",
    adoptionTier: "high",
    momentumScore: 80,
    bestFor:
      "AI code completion, coding chat, autocomplete alternatives, and developer productivity.",
    whyDevelopersUseIt:
      "Codeium is considered by developers and teams comparing AI coding assistants beyond Copilot.",
    marketPosition:
      "Codeium competes in the AI coding assistant category with a focus on accessibility and developer workflows.",
    risksOrLimitations:
      "Long-term differentiation depends on IDE support, code quality, enterprise trust, and developer retention.",
  },
  {
    slug: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    category: "codebase-assistant",
    adoptionTier: "high",
    momentumScore: 78,
    bestFor:
      "Large codebase understanding, code search, onboarding, repository navigation, and enterprise development environments.",
    whyDevelopersUseIt:
      "Cody is useful where codebase understanding and internal repository context are major developer bottlenecks.",
    marketPosition:
      "Cody is positioned around codebase intelligence rather than only autocomplete.",
    risksOrLimitations:
      "Value depends on repository scale, integration quality, and whether teams already use Sourcegraph-style code search.",
  },
  {
    slug: "deepseek-coder",
    name: "DeepSeek Coder",
    category: "open-source-coding",
    adoptionTier: "growing",
    momentumScore: 82,
    bestFor:
      "Coding model experimentation, cost-efficient inference, open ecosystem workflows, and developer benchmarking.",
    whyDevelopersUseIt:
      "DeepSeek gained developer attention because of strong coding and reasoning performance relative to cost.",
    marketPosition:
      "DeepSeek is important in the open and cost-efficient coding model ecosystem.",
    risksOrLimitations:
      "Enterprise adoption and ecosystem durability remain less established than incumbent tooling.",
  },
  {
    slug: "replit-ai",
    name: "Replit AI",
    category: "ai-native-editor",
    adoptionTier: "growing",
    momentumScore: 77,
    bestFor:
      "Browser-based coding, learning, prototyping, small apps, and AI-assisted development inside Replit.",
    whyDevelopersUseIt:
      "Replit AI is useful for fast prototyping and coding in a browser-based development environment.",
    marketPosition:
      "Replit AI is strongest in education, prototyping, lightweight app building, and browser-native coding.",
    risksOrLimitations:
      "It is less central in large enterprise codebase workflows than GitHub, Cursor, or Sourcegraph-based systems.",
  },
];

export const aiCodingMarketShareKeyFindings = [
  {
    title: "Copilot remains the default AI coding reference point",
    description:
      "GitHub Copilot benefits from GitHub distribution, IDE integration, Microsoft enterprise reach, and early category leadership.",
  },
  {
    title: "AI-native editors are gaining momentum",
    description:
      "Cursor and similar products show that developers may increasingly prefer coding environments built around AI from the start.",
  },
  {
    title: "General assistants still matter for coding",
    description:
      "ChatGPT and Claude are heavily used for explanation, debugging, architecture reasoning, documentation, and learning.",
  },
  {
    title: "Codebase context is the next battleground",
    description:
      "The market is moving beyond autocomplete toward repository understanding, multi-file changes, agent workflows, and codebase intelligence.",
  },
];

export const aiCodingMarketShareCategories = [
  {
    category: "IDE copilots",
    examples: ["GitHub Copilot", "Codeium"],
    description:
      "AI coding tools embedded into existing IDEs and developer workflows with minimal behavior change.",
  },
  {
    category: "AI-native coding environments",
    examples: ["Cursor", "Replit AI"],
    description:
      "Coding environments designed around AI chat, codebase awareness, refactoring, and multi-file changes.",
  },
  {
    category: "General AI assistants for coding",
    examples: ["ChatGPT", "Claude"],
    description:
      "General assistants used for debugging, explanation, architecture, scripting, documentation, and learning.",
  },
  {
    category: "Codebase intelligence",
    examples: ["Sourcegraph Cody", "Cursor"],
    description:
      "Tools focused on understanding repositories, code relationships, internal APIs, and large codebases.",
  },
];
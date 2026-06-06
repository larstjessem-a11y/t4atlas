export type MostUsedAiCodingModelRow = {
  model: string;
  developer: string;
  modelFamily: string;
  strengths: string;
  adoptionSignal: string;
  codingScore: number;
};

export const mostUsedAiCodingModelsData: MostUsedAiCodingModelRow[] = [
  {
    model: "GPT-5",
    developer: "OpenAI",
    modelFamily: "GPT",
    strengths: "General coding, reasoning, agent workflows, and software development",
    adoptionSignal: "Strong adoption across ChatGPT, APIs, Copilot ecosystem, and developer tools",
    codingScore: 98,
  },
  {
    model: "Claude Sonnet",
    developer: "Anthropic",
    modelFamily: "Claude",
    strengths: "Code generation, code review, debugging, and long-context reasoning",
    adoptionSignal: "Very strong adoption in Cursor, Windsurf, and AI-native coding workflows",
    codingScore: 96,
  },
  {
    model: "Gemini 2.5 Pro",
    developer: "Google",
    modelFamily: "Gemini",
    strengths: "Coding, multimodal workflows, reasoning, and large-context tasks",
    adoptionSignal: "Growing adoption across Google ecosystem and developer workflows",
    codingScore: 92,
  },
  {
    model: "DeepSeek Coder",
    developer: "DeepSeek",
    modelFamily: "DeepSeek",
    strengths: "Code generation, open-source coding workflows, and cost efficiency",
    adoptionSignal: "High open-source and developer visibility",
    codingScore: 88,
  },
  {
    model: "Codestral",
    developer: "Mistral",
    modelFamily: "Codestral",
    strengths: "Code completion, developer tooling, and software engineering tasks",
    adoptionSignal: "Strong interest in open and enterprise coding ecosystems",
    codingScore: 86,
  },
  {
    model: "Qwen Coder",
    developer: "Alibaba",
    modelFamily: "Qwen",
    strengths: "Code generation and open-source coding assistance",
    adoptionSignal: "Growing open-source adoption",
    codingScore: 84,
  },
  {
    model: "Gemma",
    developer: "Google",
    modelFamily: "Gemma",
    strengths: "Open-weight development and experimentation",
    adoptionSignal: "Popular among developers running local models",
    codingScore: 80,
  },
  {
    model: "Llama",
    developer: "Meta",
    modelFamily: "Llama",
    strengths: "Open-source fine-tuning and coding customization",
    adoptionSignal: "Large ecosystem and community adoption",
    codingScore: 78,
  },
];

export const mostUsedAiCodingModelsKeyFindings = [
  {
    title: "Coding models are becoming the foundation layer",
    description:
      "Many AI coding assistants increasingly compete on workflow design while relying on a small number of underlying frontier models.",
  },
  {
    title: "Claude and GPT dominate developer mindshare",
    description:
      "Claude Sonnet and GPT-series models currently appear in many leading AI coding workflows.",
  },
  {
    title: "Open-source models are gaining ground",
    description:
      "DeepSeek, Qwen, Codestral, Llama, and Gemma continue expanding the open coding ecosystem.",
  },
  {
    title: "Model quality is converging",
    description:
      "Workflow integration, context handling, and agent capabilities increasingly differentiate coding experiences.",
  },
];

export const mostUsedAiCodingModelsCategories = [
  {
    title: "Frontier coding models",
    description:
      "Large-scale models optimized for software engineering, reasoning, and code generation.",
  },
  {
    title: "Open-source coding models",
    description:
      "Models that support local deployment, fine-tuning, and community-driven development.",
  },
  {
    title: "Enterprise coding models",
    description:
      "Models increasingly embedded into commercial developer tools and enterprise workflows.",
  },
];

export const mostUsedAiCodingModelsMethodology = {
  title: "AI coding model methodology",
  description:
    "Rankings combine developer adoption signals, ecosystem visibility, tool integration, coding performance reputation, workflow relevance, and T4 Atlas editorial assessment.",
};

export const mostUsedAiCodingModelsLastUpdated = "2026-06-03";
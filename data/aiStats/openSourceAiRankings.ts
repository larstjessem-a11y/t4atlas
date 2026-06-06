export type OpenSourceAiRankingRow = {
  model: string;
  developer: string;
  category: string;
  strengths: string;
  ecosystemSignal: string;
  openSourceScore: number;
};

export const openSourceAiRankingsData: OpenSourceAiRankingRow[] = [
  {
    model: "Llama",
    developer: "Meta",
    category: "General-purpose foundation model",
    strengths:
      "Large ecosystem, extensive fine-tuning community, strong tooling support, broad deployment options",
    ecosystemSignal:
      "One of the largest open-weight AI ecosystems globally",
    openSourceScore: 96,
  },
  {
    model: "DeepSeek",
    developer: "DeepSeek",
    category: "Reasoning and coding model",
    strengths:
      "Strong reasoning performance, coding capabilities, and cost-efficient deployment",
    ecosystemSignal:
      "Rapidly growing developer and open-source adoption",
    openSourceScore: 94,
  },
  {
    model: "Qwen",
    developer: "Alibaba",
    category: "General-purpose open model family",
    strengths:
      "Broad model lineup, strong multilingual capabilities, coding and enterprise relevance",
    ecosystemSignal:
      "Increasing adoption across developers and enterprise experimentation",
    openSourceScore: 92,
  },
  {
    model: "Mistral",
    developer: "Mistral AI",
    category: "European open-weight models",
    strengths:
      "Efficient architectures, enterprise deployment flexibility, strong European presence",
    ecosystemSignal:
      "Widely discussed in enterprise and open-source AI circles",
    openSourceScore: 90,
  },
  {
    model: "Gemma",
    developer: "Google",
    category: "Open-weight research model",
    strengths:
      "Strong developer accessibility, experimentation, local deployment, and ecosystem support",
    ecosystemSignal:
      "Growing use among developers and AI researchers",
    openSourceScore: 86,
  },
  {
    model: "Phi",
    developer: "Microsoft",
    category: "Small language model family",
    strengths:
      "Efficient deployment, local inference, lightweight enterprise applications",
    ecosystemSignal:
      "Popular in edge AI and lightweight deployment discussions",
    openSourceScore: 84,
  },
  {
    model: "OLMo",
    developer: "Allen Institute for AI",
    category: "Research-focused open model",
    strengths:
      "Transparency, reproducibility, and research accessibility",
    ecosystemSignal:
      "Strong credibility within academic AI communities",
    openSourceScore: 80,
  },
  {
    model: "Falcon",
    developer: "Technology Innovation Institute",
    category: "Open foundation model",
    strengths:
      "Open deployment, research flexibility, and regional ecosystem support",
    ecosystemSignal:
      "Recognized open-source model with established community visibility",
    openSourceScore: 78,
  },
];

export const openSourceAiRankingsKeyFindings = [
  {
    title: "Open models are increasingly competitive",
    description:
      "Open-weight models continue narrowing capability gaps while providing deployment flexibility and transparency.",
  },
  {
    title: "Ecosystems matter as much as models",
    description:
      "Community support, fine-tuning resources, tooling, and integrations often determine long-term adoption.",
  },
  {
    title: "Local AI remains strategically important",
    description:
      "Organizations increasingly value models that can run within their own infrastructure and governance frameworks.",
  },
  {
    title: "Open-source AI is becoming enterprise-ready",
    description:
      "Many organizations now evaluate open models alongside commercial frontier models.",
  },
];

export const openSourceAiRankingsCategories = [
  {
    title: "Foundation models",
    description:
      "Large open-weight models used across research, enterprise AI, and application development.",
  },
  {
    title: "Coding and reasoning models",
    description:
      "Models optimized for software development, structured reasoning, and technical workflows.",
  },
  {
    title: "Research models",
    description:
      "Open models designed to maximize transparency, experimentation, and scientific reproducibility.",
  },
  {
    title: "Lightweight deployment models",
    description:
      "Efficient models suitable for local, edge, and resource-constrained environments.",
  },
];

export const openSourceAiRankingsMethodology = {
  title: "Open-source AI ranking methodology",
  description:
    "Rankings combine ecosystem strength, developer adoption, deployment flexibility, community activity, enterprise relevance, research visibility, and T4 Atlas editorial assessment.",
};

export const openSourceAiRankingsLastUpdated = "2026-06-03";
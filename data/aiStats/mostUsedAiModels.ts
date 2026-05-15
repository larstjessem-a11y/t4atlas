export type MostUsedAiModelEntry = {
  slug: string;
  name: string;
  company: string;
  category:
    | "general-model"
    | "reasoning-model"
    | "multimodal-model"
    | "coding-model"
    | "open-model"
    | "enterprise-model";
  usagePosition: "dominant" | "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  bestFor: string;
  whyItIsUsed: string;
  strengths: string[];
  limitations: string;
  relatedPage?: string;
};

export const mostUsedAiModelsLastUpdated = "2026-05-14";

export const mostUsedAiModelsMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for widely used AI models. It combines public product visibility, developer adoption, ecosystem distribution, workflow relevance, and T4 Atlas analysis. Usage position is directional and should not be interpreted as audited API volume or exact inference market share.",
};

export const mostUsedAiModelsData: MostUsedAiModelEntry[] = [
  {
    slug: "gpt-4o",
    name: "GPT-4o",
    company: "OpenAI",
    category: "multimodal-model",
    usagePosition: "dominant",
    momentumScore: 98,
    bestFor:
      "General AI assistance, multimodal workflows, coding, writing, productivity, reasoning, and broad consumer use.",
    whyItIsUsed:
      "GPT-4o combines strong reasoning, multimodal capabilities, ecosystem distribution, and broad usability across many workflows.",
    strengths: [
      "Multimodal support",
      "Broad workflow coverage",
      "Strong ecosystem distribution",
      "Consumer familiarity",
    ],
    limitations:
      "High generality can be less optimized than specialized models for narrow enterprise or domain-specific tasks.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    company: "Anthropic",
    category: "reasoning-model",
    usagePosition: "very high",
    momentumScore: 91,
    bestFor:
      "Long-context reasoning, structured writing, code reasoning, professional drafting, and document analysis.",
    whyItIsUsed:
      "Claude is widely used for readable prose, long documents, coding support, and thoughtful reasoning workflows.",
    strengths: [
      "Long context windows",
      "Readable outputs",
      "Strong reasoning",
      "Document-heavy workflows",
    ],
    limitations:
      "Less deeply integrated into mass-market ecosystems than OpenAI or Google products.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "gemini-1-5-pro",
    name: "Gemini 1.5 Pro",
    company: "Google",
    category: "multimodal-model",
    usagePosition: "very high",
    momentumScore: 88,
    bestFor:
      "Google ecosystem workflows, multimodal reasoning, large-context analysis, and search-adjacent tasks.",
    whyItIsUsed:
      "Gemini benefits from Google's distribution, multimodal focus, and integration into Workspace and Google services.",
    strengths: [
      "Large context",
      "Google integration",
      "Multimodal support",
      "Search adjacency",
    ],
    limitations:
      "Adoption visibility can be difficult to separate from broader Google ecosystem usage.",
  },
  {
    slug: "llama-3",
    name: "Llama 3",
    company: "Meta",
    category: "open-model",
    usagePosition: "high",
    momentumScore: 87,
    bestFor:
      "Open-weight deployments, local inference, experimentation, and customizable AI systems.",
    whyItIsUsed:
      "Llama is important because open-weight models enable local deployment, customization, and broader experimentation.",
    strengths: [
      "Open ecosystem",
      "Custom deployment",
      "Local hosting",
      "Developer flexibility",
    ],
    limitations:
      "Open models may require more technical setup and infrastructure management than hosted assistants.",
  },
  {
    slug: "grok",
    name: "Grok",
    company: "xAI",
    category: "general-model",
    usagePosition: "medium",
    momentumScore: 80,
    bestFor:
      "Social-media-adjacent AI interaction, conversational assistance, and real-time internet-aware workflows.",
    whyItIsUsed:
      "Grok benefits from visibility through the X ecosystem and interest around alternative AI assistants.",
    strengths: [
      "Social integration",
      "Internet-aware positioning",
      "Strong visibility",
    ],
    limitations:
      "Long-term differentiation and enterprise adoption remain less established than leading frontier models.",
  },
  {
    slug: "deepseek-r1",
    name: "DeepSeek R1",
    company: "DeepSeek",
    category: "reasoning-model",
    usagePosition: "high",
    momentumScore: 89,
    bestFor:
      "Reasoning-heavy workflows, coding, benchmark experimentation, and cost-efficient inference.",
    whyItIsUsed:
      "DeepSeek gained rapid visibility because of strong reasoning performance relative to cost and open ecosystem interest.",
    strengths: [
      "Reasoning performance",
      "Cost efficiency",
      "Developer interest",
      "Open ecosystem momentum",
    ],
    limitations:
      "Long-term enterprise penetration and ecosystem depth remain uncertain compared with larger incumbents.",
  },
  {
    slug: "copilot-model-stack",
    name: "Copilot Model Stack",
    company: "Microsoft/OpenAI",
    category: "enterprise-model",
    usagePosition: "high",
    momentumScore: 84,
    bestFor:
      "Enterprise productivity, Microsoft workflows, coding assistance, and workplace AI deployment.",
    whyItIsUsed:
      "Copilot benefits from Microsoft's enterprise footprint and distribution across Office, Windows, and GitHub.",
    strengths: [
      "Enterprise distribution",
      "Office integration",
      "Coding workflows",
      "Business adoption",
    ],
    limitations:
      "Usage is closely tied to Microsoft's ecosystem and licensing structure.",
  },
  {
    slug: "codestral",
    name: "Codestral",
    company: "Mistral",
    category: "coding-model",
    usagePosition: "medium",
    momentumScore: 76,
    bestFor:
      "Code generation, software development, lightweight coding workflows, and developer experimentation.",
    whyItIsUsed:
      "Specialized coding models attract developers who want alternatives to larger general-purpose assistants.",
    strengths: [
      "Coding specialization",
      "Developer workflows",
      "Efficiency",
    ],
    limitations:
      "Specialized coding models may lack the broader multimodal and reasoning ecosystem of frontier general models.",
  },
];

export const mostUsedAiModelsKeyFindings = [
  {
    title: "Frontier models dominate broad AI usage",
    description:
      "General-purpose frontier models attract the largest usage because they support many workflows across consumers, developers, and enterprises.",
  },
  {
    title: "Distribution matters as much as model quality",
    description:
      "The most widely used models are often embedded into ecosystems such as Microsoft, Google, OpenAI, Meta, and X.",
  },
  {
    title: "Open models remain strategically important",
    description:
      "Open-weight models matter because they enable local deployment, customization, experimentation, and lower-cost infrastructure.",
  },
  {
    title: "Reasoning and multimodal capabilities are converging",
    description:
      "The leading AI models increasingly combine reasoning, multimodal input, coding support, and productivity workflows in one system.",
  },
];

export const mostUsedAiModelCategories = [
  {
    category: "General frontier models",
    examples: ["GPT-4o", "Gemini", "Claude"],
    description:
      "Broad AI models increasingly act as general-purpose operating layers across writing, coding, research, productivity, and multimodal interaction.",
  },
  {
    category: "Open-weight models",
    examples: ["Llama 3", "DeepSeek R1"],
    description:
      "Open models are strategically important because they support local deployment, customization, experimentation, and cost control.",
  },
  {
    category: "Enterprise AI models",
    examples: ["Copilot", "GPT-4o", "Gemini"],
    description:
      "Enterprise adoption depends heavily on distribution, security, ecosystem integration, and workflow compatibility.",
  },
  {
    category: "Specialized coding and reasoning models",
    examples: ["Codestral", "Claude", "DeepSeek"],
    description:
      "Specialized models attract developers and technical teams that prioritize reasoning quality or coding efficiency.",
  },
];
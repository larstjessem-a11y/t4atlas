export type MostUsedAiApiEntry = {
  slug: string;
  provider: string;
  apiName: string;
  category:
    | "frontier-model-api"
    | "reasoning-api"
    | "multimodal-api"
    | "coding-api"
    | "open-model-api"
    | "enterprise-api";
  adoptionTier:
    | "dominant"
    | "very high"
    | "high"
    | "growing";
  momentumScore: number;
  bestFor: string;
  whyDevelopersUseIt: string;
  strengths: string[];
  limitations: string;
  relatedPage?: string;
};

export const mostUsedAiApisLastUpdated = "2026-05-15";

export const mostUsedAiApisMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for widely used AI APIs. It combines developer adoption visibility, ecosystem relevance, startup tooling integration, enterprise usage patterns, and T4 Atlas analysis. Adoption tiers are directional and should not be interpreted as audited API call volume.",
};

export const mostUsedAiApisData: MostUsedAiApiEntry[] = [
  {
    slug: "openai-api",
    provider: "OpenAI",
    apiName: "OpenAI API",
    category: "frontier-model-api",
    adoptionTier: "dominant",
    momentumScore: 99,
    bestFor:
      "General AI products, assistants, coding, multimodal applications, agents, and startup AI infrastructure.",
    whyDevelopersUseIt:
      "The OpenAI API became the default starting point for many AI startups because of ecosystem maturity, documentation, tooling, and broad model capability.",
    strengths: [
      "Large ecosystem",
      "Strong tooling",
      "Multimodal support",
      "Broad developer familiarity",
    ],
    limitations:
      "Heavy dependence on a centralized provider can create pricing, rate-limit, and platform-risk concerns.",
    relatedPage: "/tools/ai/statistics/most-used-ai-models",
  },
  {
    slug: "anthropic-api",
    provider: "Anthropic",
    apiName: "Claude API",
    category: "reasoning-api",
    adoptionTier: "very high",
    momentumScore: 91,
    bestFor:
      "Long-context workflows, reasoning-heavy systems, enterprise AI, and document analysis.",
    whyDevelopersUseIt:
      "Claude is especially attractive for reasoning quality, readable outputs, and document-heavy enterprise workflows.",
    strengths: [
      "Long context",
      "Strong reasoning",
      "Readable outputs",
      "Enterprise relevance",
    ],
    limitations:
      "Smaller ecosystem and distribution footprint compared with OpenAI.",
    relatedPage: "/tools/ai/chatgpt-vs-claude",
  },
  {
    slug: "gemini-api",
    provider: "Google",
    apiName: "Gemini API",
    category: "multimodal-api",
    adoptionTier: "very high",
    momentumScore: 88,
    bestFor:
      "Google-connected workflows, multimodal applications, search-adjacent systems, and enterprise AI.",
    whyDevelopersUseIt:
      "Google's ecosystem, multimodal capabilities, and cloud infrastructure make Gemini strategically important.",
    strengths: [
      "Google ecosystem",
      "Multimodal support",
      "Large infrastructure footprint",
      "Enterprise positioning",
    ],
    limitations:
      "Adoption patterns are partially tied to broader Google Cloud and Workspace ecosystems.",
  },
  {
    slug: "mistral-api",
    provider: "Mistral",
    apiName: "Mistral API",
    category: "open-model-api",
    adoptionTier: "high",
    momentumScore: 84,
    bestFor:
      "European AI infrastructure, efficient inference, open-weight workflows, and customizable AI systems.",
    whyDevelopersUseIt:
      "Mistral appeals to developers seeking efficiency, openness, and alternatives to US hyperscaler ecosystems.",
    strengths: [
      "Efficiency",
      "Open ecosystem alignment",
      "European positioning",
      "Flexible deployment",
    ],
    limitations:
      "Smaller ecosystem and less mainstream tooling than larger providers.",
  },
  {
    slug: "deepseek-api",
    provider: "DeepSeek",
    apiName: "DeepSeek API",
    category: "reasoning-api",
    adoptionTier: "high",
    momentumScore: 90,
    bestFor:
      "Reasoning-heavy workflows, coding systems, experimentation, and cost-efficient inference.",
    whyDevelopersUseIt:
      "DeepSeek gained rapid developer attention because of strong reasoning performance relative to cost.",
    strengths: [
      "Reasoning efficiency",
      "Cost competitiveness",
      "Developer interest",
      "Strong coding relevance",
    ],
    limitations:
      "Long-term ecosystem durability and enterprise penetration remain uncertain.",
  },
  {
    slug: "meta-llama-api",
    provider: "Meta",
    apiName: "Llama Ecosystem",
    category: "open-model-api",
    adoptionTier: "high",
    momentumScore: 87,
    bestFor:
      "Open-weight deployment, local inference, experimentation, and customizable AI systems.",
    whyDevelopersUseIt:
      "Llama is strategically important because it supports open deployment rather than purely centralized API dependence.",
    strengths: [
      "Open ecosystem",
      "Local deployment",
      "Developer flexibility",
      "Customization",
    ],
    limitations:
      "Requires more infrastructure management than hosted APIs.",
  },
  {
    slug: "cohere-api",
    provider: "Cohere",
    apiName: "Cohere API",
    category: "enterprise-api",
    adoptionTier: "growing",
    momentumScore: 74,
    bestFor:
      "Enterprise retrieval, embeddings, search, and internal AI systems.",
    whyDevelopersUseIt:
      "Cohere focuses heavily on enterprise workflows, retrieval systems, and business AI infrastructure.",
    strengths: [
      "Enterprise focus",
      "Retrieval systems",
      "Embeddings",
      "Business AI positioning",
    ],
    limitations:
      "Less consumer visibility and smaller ecosystem than frontier AI labs.",
  },
  {
    slug: "groq-api",
    provider: "Groq",
    apiName: "Groq API",
    category: "open-model-api",
    adoptionTier: "growing",
    momentumScore: 81,
    bestFor:
      "Ultra-fast inference, low-latency AI systems, and performance-sensitive applications.",
    whyDevelopersUseIt:
      "Groq gained attention because inference speed is becoming strategically important in AI product experience.",
    strengths: [
      "Low latency",
      "Fast inference",
      "Performance differentiation",
    ],
    limitations:
      "Ecosystem breadth and model diversity remain narrower than larger providers.",
  },
];

export const mostUsedAiApisKeyFindings = [
  {
    title: "API ecosystems matter as much as models",
    description:
      "The strongest AI APIs combine model quality with tooling, documentation, SDKs, integrations, and developer familiarity.",
  },
  {
    title: "Open versus closed ecosystems is a major divide",
    description:
      "Some developers prefer centralized APIs while others prioritize open-weight deployment and infrastructure flexibility.",
  },
  {
    title: "Inference economics are becoming strategic",
    description:
      "Latency, cost efficiency, and inference scalability increasingly shape API adoption decisions.",
  },
  {
    title: "Enterprise AI is creating specialized API demand",
    description:
      "Enterprise retrieval, embeddings, security, and workflow integration create demand beyond general chat APIs.",
  },
];

export const mostUsedAiApiCategories = [
  {
    category: "Frontier AI APIs",
    examples: ["OpenAI API", "Claude API", "Gemini API"],
    description:
      "Frontier AI APIs power many consumer and enterprise AI applications across writing, coding, productivity, and multimodal workflows.",
  },
  {
    category: "Open AI ecosystems",
    examples: ["Llama Ecosystem", "Mistral API"],
    description:
      "Open ecosystems matter because they support local deployment, customization, sovereignty, and infrastructure flexibility.",
  },
  {
    category: "Reasoning and coding APIs",
    examples: ["Claude API", "DeepSeek API"],
    description:
      "Reasoning-heavy APIs attract startups and developers building coding, research, and agentic systems.",
  },
  {
    category: "Enterprise AI APIs",
    examples: ["Cohere API", "Gemini API"],
    description:
      "Enterprise AI APIs focus on retrieval, security, internal workflows, embeddings, and large-scale business deployment.",
  },
];
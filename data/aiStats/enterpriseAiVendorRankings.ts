export type EnterpriseAiVendorRankingRow = {
  vendor: string;
  category: string;
  enterprisePositioning: string;
  strengths: string;
  adoptionSignal: string;
  enterpriseScore: number;
};

export const enterpriseAiVendorRankingsData: EnterpriseAiVendorRankingRow[] = [
  {
    vendor: "Microsoft",
    category: "Enterprise AI platform",
    enterprisePositioning:
      "Copilot, Azure AI, Microsoft 365, GitHub, security, and enterprise productivity",
    strengths:
      "Distribution, enterprise trust, productivity workflows, developer ecosystem, cloud integration",
    adoptionSignal:
      "Very strong enterprise distribution through Microsoft 365, Azure, Windows, GitHub, and security products",
    enterpriseScore: 98,
  },
  {
    vendor: "OpenAI",
    category: "Frontier AI provider",
    enterprisePositioning:
      "ChatGPT Enterprise, API platform, reasoning models, multimodal AI, and agentic workflows",
    strengths:
      "Frontier model visibility, developer adoption, product velocity, consumer mindshare, enterprise APIs",
    adoptionSignal:
      "Strong adoption across consumer, developer, startup, and enterprise workflows",
    enterpriseScore: 96,
  },
  {
    vendor: "Google",
    category: "AI infrastructure and productivity platform",
    enterprisePositioning:
      "Gemini, Google Cloud AI, Workspace, Vertex AI, search, Android, and data infrastructure",
    strengths:
      "AI research depth, cloud infrastructure, Workspace distribution, search, data, and multimodal AI",
    adoptionSignal:
      "Strong ecosystem reach across Google Cloud, Workspace, Android, Search, and developer tools",
    enterpriseScore: 94,
  },
  {
    vendor: "Anthropic",
    category: "Enterprise AI model provider",
    enterprisePositioning:
      "Claude for enterprise, long-context analysis, coding, documents, safety-oriented AI, and API workflows",
    strengths:
      "Long-context reasoning, enterprise trust positioning, developer mindshare, writing and analysis workflows",
    adoptionSignal:
      "Strong enterprise and developer adoption signals, especially in coding and document-heavy workflows",
    enterpriseScore: 92,
  },
  {
    vendor: "Amazon Web Services",
    category: "Cloud AI platform",
    enterprisePositioning:
      "Amazon Bedrock, Q Developer, cloud AI infrastructure, enterprise deployment, and model access",
    strengths:
      "Cloud distribution, enterprise infrastructure, model marketplace, security, and developer workflows",
    adoptionSignal:
      "Strong enterprise cloud base and growing AI platform adoption through AWS services",
    enterpriseScore: 90,
  },
  {
    vendor: "Salesforce",
    category: "CRM AI vendor",
    enterprisePositioning:
      "Einstein, Agentforce, CRM automation, customer workflows, sales, service, and marketing AI",
    strengths:
      "CRM data, enterprise workflow integration, customer operations, sales and service automation",
    adoptionSignal:
      "Strong installed base in enterprise CRM and customer-facing business workflows",
    enterpriseScore: 86,
  },
  {
    vendor: "IBM",
    category: "Enterprise AI and governance vendor",
    enterprisePositioning:
      "watsonx, governance, hybrid cloud, regulated industries, enterprise AI lifecycle, and compliance",
    strengths:
      "Governance, regulated industries, hybrid enterprise deployments, consulting, compliance positioning",
    adoptionSignal:
      "Strong enterprise relationships, especially in regulated and legacy infrastructure environments",
    enterpriseScore: 82,
  },
  {
    vendor: "Databricks",
    category: "Data and AI platform",
    enterprisePositioning:
      "Lakehouse, data infrastructure, Mosaic AI, enterprise analytics, model development, and governance",
    strengths:
      "Data platform strength, enterprise analytics, AI infrastructure, governance, and model operations",
    adoptionSignal:
      "Strong adoption among data-intensive enterprises and AI engineering teams",
    enterpriseScore: 80,
  },
  {
    vendor: "Palantir",
    category: "Operational AI platform",
    enterprisePositioning:
      "AIP, operational decision systems, defense, government, enterprise operations, and data integration",
    strengths:
      "Operational workflows, defense and government relationships, decision intelligence, data integration",
    adoptionSignal:
      "High visibility in defense, government, and operational enterprise AI deployments",
    enterpriseScore: 78,
  },
  {
    vendor: "Oracle",
    category: "Enterprise software and cloud AI vendor",
    enterprisePositioning:
      "OCI AI, enterprise databases, business applications, cloud infrastructure, and enterprise workflows",
    strengths:
      "Enterprise databases, ERP ecosystem, cloud infrastructure, long-standing enterprise relationships",
    adoptionSignal:
      "Strong legacy enterprise footprint with growing AI integration across cloud and applications",
    enterpriseScore: 74,
  },
];

export const enterpriseAiVendorRankingsKeyFindings = [
  {
    title: "Enterprise AI is distribution-led",
    description:
      "The strongest vendors combine AI capabilities with existing enterprise distribution, cloud infrastructure, security, and workflow ownership.",
  },
  {
    title: "Model quality is only one factor",
    description:
      "Enterprises also evaluate governance, procurement, security, integration, support, data control, and operational fit.",
  },
  {
    title: "Cloud platforms have structural advantages",
    description:
      "Microsoft, Google, AWS, and Oracle can embed AI into infrastructure, productivity suites, data platforms, and application ecosystems.",
  },
  {
    title: "Vertical and operational AI is emerging",
    description:
      "Vendors such as Salesforce, Palantir, Databricks, and IBM show how enterprise AI is moving into specific operational workflows.",
  },
];

export const enterpriseAiVendorRankingsCategories = [
  {
    title: "Frontier model vendors",
    description:
      "Companies primarily known for advanced AI models, APIs, assistants, and reasoning systems.",
  },
  {
    title: "Cloud AI platforms",
    description:
      "Infrastructure providers that package AI with compute, data, security, deployment, and enterprise tooling.",
  },
  {
    title: "Enterprise workflow vendors",
    description:
      "Vendors that embed AI into CRM, productivity, ERP, analytics, sales, service, and operations.",
  },
  {
    title: "Governance and operational AI vendors",
    description:
      "Vendors focused on regulated industries, operational decision systems, compliance, and enterprise AI control layers.",
  },
];

export const enterpriseAiVendorRankingsMethodology = {
  title: "Enterprise AI vendor ranking methodology",
  description:
    "This ranking combines enterprise distribution, AI product depth, cloud and data integration, governance positioning, workflow ownership, developer ecosystem strength, procurement fit, and T4 Atlas editorial assessment.",
};

export const enterpriseAiVendorRankingsLastUpdated = "2026-06-03";
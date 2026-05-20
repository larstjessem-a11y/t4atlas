export type AiAlignmentRiskRankingEntry = {
  slug: string;
  systemType: string;
  category:
    | "frontier-model"
    | "open-weight-model"
    | "ai-agent"
    | "coding-system"
    | "enterprise-copilot"
    | "ai-search";
  alignmentPressure: "very high" | "high" | "medium" | "emerging";
  autonomyRisk: "very high" | "high" | "medium" | "low";
  transparencyLevel: "high" | "medium" | "low" | "opaque";
  governanceMaturity: "high" | "medium" | "low" | "unclear";
  deploymentExposure: "very high" | "high" | "medium" | "low";
  riskScore: number;
  whyItMatters: string;
  keyRiskDrivers: string[];
  riskReductionLevers: string[];
  relatedPage?: string;
};

export const aiAlignmentRiskRankingsLastUpdated = "2026-05-15";

export const aiAlignmentRiskRankingsMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI alignment risk rankings. It compares AI system types by autonomy risk, deployment exposure, transparency, governance maturity, and alignment pressure. Scores are directional and should not be interpreted as formal safety audits, regulatory assessments, or technical alignment evaluations.",
};

export const aiAlignmentRiskRankingsData: AiAlignmentRiskRankingEntry[] = [
  {
    slug: "frontier-general-purpose-models",
    systemType: "Frontier general-purpose models",
    category: "frontier-model",
    alignmentPressure: "very high",
    autonomyRisk: "high",
    transparencyLevel: "low",
    governanceMaturity: "medium",
    deploymentExposure: "very high",
    riskScore: 94,
    whyItMatters:
      "Frontier general-purpose models are broadly deployed, increasingly capable, and used across many workflows, which creates high alignment pressure even when direct autonomy is constrained.",
    keyRiskDrivers: [
      "Broad deployment",
      "General capability",
      "Opaque internal reasoning",
      "Tool-use potential",
    ],
    riskReductionLevers: [
      "Stronger evaluations",
      "Deployment gating",
      "Red-teaming",
      "Monitoring",
      "Incident reporting",
    ],
    relatedPage: "/tools/ai/statistics/most-used-ai-models",
  },
  {
    slug: "autonomous-ai-agents",
    systemType: "Autonomous AI agents",
    category: "ai-agent",
    alignmentPressure: "very high",
    autonomyRisk: "very high",
    transparencyLevel: "low",
    governanceMaturity: "low",
    deploymentExposure: "medium",
    riskScore: 92,
    whyItMatters:
      "Agentic AI systems create higher alignment pressure because they can plan, call tools, execute multi-step tasks, and operate with less direct human control.",
    keyRiskDrivers: [
      "Multi-step action",
      "Tool use",
      "Goal persistence",
      "Failure propagation",
    ],
    riskReductionLevers: [
      "Scoped permissions",
      "Human approval gates",
      "Sandboxing",
      "Action logging",
      "Kill switches",
    ],
  },
  {
    slug: "open-weight-frontier-like-models",
    systemType: "Open-weight frontier-like models",
    category: "open-weight-model",
    alignmentPressure: "high",
    autonomyRisk: "medium",
    transparencyLevel: "medium",
    governanceMaturity: "low",
    deploymentExposure: "high",
    riskScore: 86,
    whyItMatters:
      "Open-weight models can accelerate innovation and scrutiny, but they also reduce centralized control over deployment, modification, and misuse.",
    keyRiskDrivers: [
      "Distribution control loss",
      "Fine-tuning risk",
      "Local deployment",
      "Rapid downstream modification",
    ],
    riskReductionLevers: [
      "Responsible release practices",
      "Capability thresholds",
      "Model cards",
      "Misuse monitoring",
      "Access-tiering for stronger systems",
    ],
  },
  {
    slug: "ai-coding-agents",
    systemType: "AI coding agents",
    category: "coding-system",
    alignmentPressure: "high",
    autonomyRisk: "high",
    transparencyLevel: "medium",
    governanceMaturity: "medium",
    deploymentExposure: "high",
    riskScore: 84,
    whyItMatters:
      "AI coding systems can alter software, generate code, call tools, and interact with repositories, which makes reliability, security, and oversight essential.",
    keyRiskDrivers: [
      "Code execution",
      "Repository access",
      "Security-sensitive output",
      "Multi-file changes",
    ],
    riskReductionLevers: [
      "Code review",
      "Testing",
      "Least-privilege access",
      "Security scanning",
      "Pull-request gates",
    ],
    relatedPage: "/tools/ai/statistics/ai-coding-market-share",
  },
  {
    slug: "enterprise-ai-copilots",
    systemType: "Enterprise AI copilots",
    category: "enterprise-copilot",
    alignmentPressure: "medium",
    autonomyRisk: "medium",
    transparencyLevel: "medium",
    governanceMaturity: "medium",
    deploymentExposure: "very high",
    riskScore: 80,
    whyItMatters:
      "Enterprise copilots are widely deployed inside organizations and can influence documents, decisions, communications, and internal workflows.",
    keyRiskDrivers: [
      "Enterprise data exposure",
      "Workflow influence",
      "Automation bias",
      "Broad employee access",
    ],
    riskReductionLevers: [
      "Access controls",
      "DLP",
      "Human review",
      "Use-case mapping",
      "Audit logs",
    ],
    relatedPage: "/tools/ai/risk-intelligence/enterprise-ai-risk-categories",
  },
  {
    slug: "ai-search-answer-engines",
    systemType: "AI search and answer engines",
    category: "ai-search",
    alignmentPressure: "medium",
    autonomyRisk: "low",
    transparencyLevel: "medium",
    governanceMaturity: "medium",
    deploymentExposure: "high",
    riskScore: 72,
    whyItMatters:
      "AI search systems shape information discovery and user beliefs, which creates risk around source quality, hallucinated citations, bias, and over-trust.",
    keyRiskDrivers: [
      "Information mediation",
      "Source selection",
      "Citation quality",
      "User trust",
    ],
    riskReductionLevers: [
      "Source transparency",
      "Citation quality checks",
      "Freshness indicators",
      "User feedback",
      "Publisher accountability",
    ],
    relatedPage: "/tools/ai/replacing/ai-tools-replacing-google-search",
  },
];

export const aiAlignmentRiskRankingsKeyFindings = [
  {
    title: "Autonomy changes the risk profile",
    description:
      "The same model becomes riskier when connected to tools, permissions, memory, agents, code execution, or external systems.",
  },
  {
    title: "Deployment exposure matters as much as capability",
    description:
      "A moderately risky system deployed to millions of users can create more aggregate risk than a stronger system with limited access.",
  },
  {
    title: "Governance maturity is uneven",
    description:
      "Many AI systems are being deployed faster than organizations develop monitoring, escalation, audit, and incident-response processes.",
  },
  {
    title: "Open and closed systems have different risk tradeoffs",
    description:
      "Closed systems concentrate control and opacity, while open systems increase transparency and innovation but reduce centralized deployment control.",
  },
];

export const aiAlignmentRiskDimensions = [
  {
    dimension: "Autonomy risk",
    description:
      "Measures whether the system can act across multiple steps, use tools, execute code, or pursue goals with limited human intervention.",
  },
  {
    dimension: "Transparency",
    description:
      "Measures how observable, interpretable, documented, and externally inspectable the system and deployment process are.",
  },
  {
    dimension: "Governance maturity",
    description:
      "Measures whether there are strong controls such as evaluations, monitoring, red-teaming, access limits, incident response, and deployment gates.",
  },
  {
    dimension: "Deployment exposure",
    description:
      "Measures how widely the system is used across consumers, enterprises, developers, agents, workflows, and sensitive environments.",
  },
  {
    dimension: "Alignment pressure",
    description:
      "A combined directional measure of how much alignment burden the system carries given capability, autonomy, opacity, and real-world exposure.",
  },
];
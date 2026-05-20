export type FrontierAiRiskMatrixEntry = {
  slug: string;
  capabilityArea:
    | "autonomous-agents"
    | "cyber-capability"
    | "persuasion-systems"
    | "biological-assistance"
    | "ai-coding-systems"
    | "enterprise-autonomy"
    | "synthetic-media"
    | "open-model-distribution";
  riskIntensity: "critical" | "very high" | "high" | "emerging";
  deploymentExposure: "very high" | "high" | "medium" | "low";
  governanceVisibility: "high" | "medium" | "low" | "unclear";
  scalingPotential: "very high" | "high" | "medium" | "low";
  riskScore: number;
  whyItMatters: string;
  systemicConcerns: string[];
  mitigationFocus: string[];
};

export const frontierAiRiskMatrixLastUpdated = "2026-05-15";

export const frontierAiRiskMatrixMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for frontier AI risk categories. It compares capability areas by deployment exposure, scaling potential, governance visibility, systemic concerns, and operational risk. Scores are directional and should not be interpreted as formal threat assessments or regulatory evaluations.",
};

export const frontierAiRiskMatrixData: FrontierAiRiskMatrixEntry[] = [
  {
    slug: "autonomous-ai-agents",
    capabilityArea: "autonomous-agents",
    riskIntensity: "critical",
    deploymentExposure: "medium",
    governanceVisibility: "low",
    scalingPotential: "very high",
    riskScore: 96,
    whyItMatters:
      "Autonomous AI agents combine reasoning, memory, tool use, planning, and multi-step execution, increasing the risk of unintended actions and failure propagation.",
    systemicConcerns: [
      "Goal drift",
      "Recursive task execution",
      "Permission escalation",
      "Hidden operational loops",
    ],
    mitigationFocus: [
      "Human approval gates",
      "Scoped permissions",
      "Sandboxing",
      "Action logging",
      "Kill switches",
    ],
  },
  {
    slug: "ai-assisted-cyber-capability",
    capabilityArea: "cyber-capability",
    riskIntensity: "critical",
    deploymentExposure: "high",
    governanceVisibility: "medium",
    scalingPotential: "very high",
    riskScore: 94,
    whyItMatters:
      "AI systems can accelerate phishing, exploit discovery, social engineering, malicious automation, and vulnerability analysis.",
    systemicConcerns: [
      "Attack scaling",
      "Low-cost phishing",
      "Malware iteration",
      "Defensive asymmetry",
    ],
    mitigationFocus: [
      "Security evaluations",
      "Monitoring",
      "Access restrictions",
      "Cyber threat intelligence",
      "Abuse detection",
    ],
  },
  {
    slug: "biological-assistance-capability",
    capabilityArea: "biological-assistance",
    riskIntensity: "very high",
    deploymentExposure: "low",
    governanceVisibility: "low",
    scalingPotential: "high",
    riskScore: 91,
    whyItMatters:
      "Advanced AI systems may lower barriers to biological reasoning, experimental design, or misuse-relevant scientific workflows.",
    systemicConcerns: [
      "Knowledge amplification",
      "Misuse enablement",
      "Distributed experimentation",
      "Lower expertise thresholds",
    ],
    mitigationFocus: [
      "Capability evaluations",
      "Access controls",
      "Biosecurity review",
      "Threat modeling",
      "Expert oversight",
    ],
  },
  {
    slug: "persuasion-and-influence-systems",
    capabilityArea: "persuasion-systems",
    riskIntensity: "very high",
    deploymentExposure: "very high",
    governanceVisibility: "medium",
    scalingPotential: "very high",
    riskScore: 90,
    whyItMatters:
      "AI systems can generate personalized persuasion, synthetic media, targeted messaging, and scalable information influence.",
    systemicConcerns: [
      "Mass persuasion",
      "Synthetic trust",
      "Information distortion",
      "Narrative manipulation",
    ],
    mitigationFocus: [
      "Content provenance",
      "Detection systems",
      "Platform governance",
      "Media literacy",
      "Transparency labeling",
    ],
  },
  {
    slug: "ai-coding-and-execution-systems",
    capabilityArea: "ai-coding-systems",
    riskIntensity: "high",
    deploymentExposure: "high",
    governanceVisibility: "medium",
    scalingPotential: "high",
    riskScore: 84,
    whyItMatters:
      "AI coding systems increasingly interact with repositories, cloud systems, infrastructure, and deployment pipelines.",
    systemicConcerns: [
      "Security vulnerabilities",
      "Unsafe automation",
      "Infrastructure access",
      "Large-scale code generation",
    ],
    mitigationFocus: [
      "Code review",
      "Testing",
      "Least-privilege access",
      "Repository controls",
      "Security scanning",
    ],
  },
  {
    slug: "synthetic-media-generation",
    capabilityArea: "synthetic-media",
    riskIntensity: "high",
    deploymentExposure: "very high",
    governanceVisibility: "medium",
    scalingPotential: "very high",
    riskScore: 82,
    whyItMatters:
      "Synthetic media systems can generate realistic text, images, audio, and video at industrial scale.",
    systemicConcerns: [
      "Deepfakes",
      "Synthetic identity",
      "Information overload",
      "Trust erosion",
    ],
    mitigationFocus: [
      "Watermarking",
      "Provenance systems",
      "Detection tooling",
      "Platform moderation",
      "Identity verification",
    ],
  },
  {
    slug: "enterprise-workflow-autonomy",
    capabilityArea: "enterprise-autonomy",
    riskIntensity: "high",
    deploymentExposure: "high",
    governanceVisibility: "medium",
    scalingPotential: "high",
    riskScore: 80,
    whyItMatters:
      "Organizations increasingly embed AI into operational workflows, reporting, customer interactions, analytics, and decision support.",
    systemicConcerns: [
      "Automation bias",
      "Operational dependency",
      "Governance drift",
      "Hidden workflow failures",
    ],
    mitigationFocus: [
      "Human review",
      "Audit trails",
      "Workflow governance",
      "Fallback procedures",
      "Monitoring",
    ],
  },
  {
    slug: "open-model-distribution",
    capabilityArea: "open-model-distribution",
    riskIntensity: "emerging",
    deploymentExposure: "high",
    governanceVisibility: "low",
    scalingPotential: "very high",
    riskScore: 76,
    whyItMatters:
      "Open-weight model ecosystems accelerate innovation and transparency but reduce centralized deployment control.",
    systemicConcerns: [
      "Unrestricted redistribution",
      "Fine-tuning misuse",
      "Rapid downstream adaptation",
      "Governance fragmentation",
    ],
    mitigationFocus: [
      "Responsible release practices",
      "Capability thresholds",
      "Model documentation",
      "Community monitoring",
      "Access-tiering",
    ],
  },
];

export const frontierAiRiskMatrixKeyFindings = [
  {
    title: "Autonomy amplifies operational risk",
    description:
      "AI systems become significantly riskier when they gain memory, tool access, multi-step execution, or independent operational capability.",
  },
  {
    title: "Deployment scale changes systemic impact",
    description:
      "A moderately risky system deployed to millions of users can create larger aggregate effects than a stronger but isolated capability.",
  },
  {
    title: "Cyber and persuasion risks scale rapidly",
    description:
      "AI lowers the cost and increases the scalability of cyber operations, social engineering, synthetic media, and information influence.",
  },
  {
    title: "Governance visibility remains uneven",
    description:
      "Many frontier AI capabilities are advancing faster than transparency, evaluations, monitoring, and governance systems.",
  },
];

export const frontierAiRiskMatrixDimensions = [
  {
    dimension: "Risk intensity",
    description:
      "Directional estimate of the severity and systemic relevance of the capability area.",
  },
  {
    dimension: "Deployment exposure",
    description:
      "Measures how widely the capability is exposed across users, enterprises, APIs, products, or infrastructure.",
  },
  {
    dimension: "Governance visibility",
    description:
      "Measures how observable, monitored, documented, and governable the capability area currently is.",
  },
  {
    dimension: "Scaling potential",
    description:
      "Measures how rapidly the capability can spread, scale, replicate, or compound operationally.",
  },
];
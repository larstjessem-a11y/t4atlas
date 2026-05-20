export type MostSensitiveAiCapabilityEntry = {
  slug: string;
  capability: string;
  category:
    | "cyber"
    | "biological"
    | "persuasion"
    | "autonomy"
    | "synthetic-media"
    | "infrastructure"
    | "surveillance";
  sensitivityLevel: "critical" | "very high" | "high" | "emerging";
  deploymentExposure: "very high" | "high" | "medium" | "low";
  misusePotential: "very high" | "high" | "medium";
  riskScore: number;
  whySensitive: string;
  systemicConcerns: string[];
  governancePriorities: string[];
};

export const mostSensitiveAiCapabilitiesLastUpdated = "2026-05-15";

export const mostSensitiveAiCapabilitiesMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for identifying sensitive AI capability areas. It compares capability domains by misuse potential, deployment exposure, governance difficulty, and systemic relevance. Scores are directional and should not be interpreted as formal threat assessments or regulatory evaluations.",
};

export const mostSensitiveAiCapabilitiesData: MostSensitiveAiCapabilityEntry[] =
  [
    {
      slug: "ai-assisted-cyber-operations",
      capability: "AI-assisted cyber operations",
      category: "cyber",
      sensitivityLevel: "critical",
      deploymentExposure: "high",
      misusePotential: "very high",
      riskScore: 96,
      whySensitive:
        "AI can lower the barrier to phishing, exploit analysis, social engineering, malware iteration, and offensive cyber workflows.",
      systemicConcerns: [
        "Attack scaling",
        "Automated phishing",
        "Exploit acceleration",
        "Asymmetric cyber capability",
      ],
      governancePriorities: [
        "Cyber evaluations",
        "Monitoring",
        "Abuse detection",
        "Access restrictions",
        "Threat intelligence",
      ],
    },
    {
      slug: "biological-reasoning-assistance",
      capability: "Biological reasoning assistance",
      category: "biological",
      sensitivityLevel: "very high",
      deploymentExposure: "low",
      misusePotential: "very high",
      riskScore: 92,
      whySensitive:
        "Advanced AI systems may increase access to biological reasoning, experimental design assistance, and misuse-relevant scientific workflows.",
      systemicConcerns: [
        "Lower expertise thresholds",
        "Distributed experimentation",
        "Knowledge amplification",
        "Biosecurity misuse risk",
      ],
      governancePriorities: [
        "Capability thresholds",
        "Biosecurity review",
        "Expert oversight",
        "Access controls",
        "Threat modeling",
      ],
    },
    {
      slug: "personalized-persuasion-systems",
      capability: "Personalized persuasion systems",
      category: "persuasion",
      sensitivityLevel: "very high",
      deploymentExposure: "very high",
      misusePotential: "very high",
      riskScore: 91,
      whySensitive:
        "AI systems can personalize messaging, optimize persuasion, generate synthetic trust, and scale influence operations.",
      systemicConcerns: [
        "Manipulation at scale",
        "Synthetic trust",
        "Behavioral targeting",
        "Information ecosystem distortion",
      ],
      governancePriorities: [
        "Transparency labeling",
        "Content provenance",
        "Platform governance",
        "Media literacy",
        "Disclosure requirements",
      ],
    },
    {
      slug: "autonomous-agentic-systems",
      capability: "Autonomous agentic systems",
      category: "autonomy",
      sensitivityLevel: "critical",
      deploymentExposure: "medium",
      misusePotential: "high",
      riskScore: 90,
      whySensitive:
        "Autonomous AI agents can plan, execute tasks, use tools, access systems, and operate across multiple steps with limited oversight.",
      systemicConcerns: [
        "Goal drift",
        "Recursive execution",
        "Operational instability",
        "Unintended escalation",
      ],
      governancePriorities: [
        "Permission scoping",
        "Human approval gates",
        "Kill switches",
        "Sandboxing",
        "Action logging",
      ],
    },
    {
      slug: "synthetic-media-generation",
      capability: "Synthetic media generation",
      category: "synthetic-media",
      sensitivityLevel: "high",
      deploymentExposure: "very high",
      misusePotential: "high",
      riskScore: 84,
      whySensitive:
        "AI-generated text, video, images, and voice can scale misinformation, impersonation, and synthetic identity creation.",
      systemicConcerns: [
        "Deepfakes",
        "Identity fraud",
        "Trust erosion",
        "Information overload",
      ],
      governancePriorities: [
        "Watermarking",
        "Detection systems",
        "Identity verification",
        "Platform moderation",
        "Provenance standards",
      ],
    },
    {
      slug: "critical-infrastructure-ai-control",
      capability: "Critical infrastructure AI control",
      category: "infrastructure",
      sensitivityLevel: "very high",
      deploymentExposure: "medium",
      misusePotential: "high",
      riskScore: 86,
      whySensitive:
        "AI systems increasingly interact with industrial systems, cloud infrastructure, logistics, utilities, and operational technology.",
      systemicConcerns: [
        "Infrastructure dependency",
        "Operational disruption",
        "Automation failures",
        "Cascade effects",
      ],
      governancePriorities: [
        "Isolation controls",
        "Human override capability",
        "Resilience testing",
        "Monitoring",
        "Fallback procedures",
      ],
    },
    {
      slug: "mass-surveillance-and-tracking",
      capability: "Mass surveillance and tracking",
      category: "surveillance",
      sensitivityLevel: "high",
      deploymentExposure: "high",
      misusePotential: "high",
      riskScore: 82,
      whySensitive:
        "AI systems can increase the scale and efficiency of surveillance, behavioral monitoring, and identity analysis.",
      systemicConcerns: [
        "Privacy erosion",
        "Behavioral profiling",
        "Political misuse",
        "Population-scale monitoring",
      ],
      governancePriorities: [
        "Legal safeguards",
        "Oversight",
        "Transparency",
        "Data minimization",
        "Independent review",
      ],
    },
  ];

export const mostSensitiveAiCapabilitiesKeyFindings = [
  {
    title: "Sensitivity depends on capability plus scale",
    description:
      "A capability becomes more sensitive when it combines strong misuse potential with broad deployment exposure and low governance visibility.",
  },
  {
    title: "Cyber and persuasion scale fastest",
    description:
      "Cyber operations and persuasion systems can spread rapidly because AI dramatically lowers cost and increases automation.",
  },
  {
    title: "Autonomy changes the risk landscape",
    description:
      "Systems that can independently plan, execute, or interact with tools create qualitatively different governance challenges.",
  },
  {
    title: "Governance capacity is uneven",
    description:
      "AI capability growth is moving faster than monitoring, auditing, resilience testing, and operational governance in many sectors.",
  },
];

export const mostSensitiveAiCapabilityDimensions = [
  {
    dimension: "Sensitivity level",
    description:
      "Directional estimate of how strategically sensitive the capability area is.",
  },
  {
    dimension: "Deployment exposure",
    description:
      "Measures how widely the capability may spread across APIs, products, organizations, or users.",
  },
  {
    dimension: "Misuse potential",
    description:
      "Measures how easily the capability could be used for harmful, destabilizing, or unauthorized purposes.",
  },
  {
    dimension: "Governance complexity",
    description:
      "Measures how difficult the capability is to monitor, restrict, audit, or govern once deployed.",
  },
];
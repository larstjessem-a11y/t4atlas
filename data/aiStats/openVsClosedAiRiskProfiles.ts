export type OpenVsClosedAiRiskProfileEntry = {
  slug: string;
  profile: string;
  systemType: "open-weight-ai" | "closed-frontier-ai" | "hybrid-ai";
  riskTradeoff:
    | "distribution-risk"
    | "opacity-risk"
    | "governance-risk"
    | "innovation-risk"
    | "security-risk"
    | "accountability-risk";
  riskScore: number;
  primaryBenefit: string;
  primaryRisk: string;
  whyItMatters: string;
  mitigationApproach: string;
};

export const openVsClosedAiRiskProfilesLastUpdated = "2026-05-15";

export const openVsClosedAiRiskProfilesMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for comparing open and closed AI risk profiles. It maps tradeoffs around transparency, control, misuse risk, governance, accountability, innovation, and deployment exposure. Scores are directional and should not be interpreted as formal safety audits, regulatory assessments, or vendor evaluations.",
};

export const openVsClosedAiRiskProfilesData: OpenVsClosedAiRiskProfileEntry[] = [
  {
    slug: "open-model-distribution-risk",
    profile: "Open model distribution risk",
    systemType: "open-weight-ai",
    riskTradeoff: "distribution-risk",
    riskScore: 90,
    primaryBenefit:
      "Open-weight models improve transparency, research access, local deployment, competition, and independent scrutiny.",
    primaryRisk:
      "Once powerful model weights are widely distributed, centralized control over downstream use, fine-tuning, and misuse becomes much weaker.",
    whyItMatters:
      "Open AI ecosystems can accelerate innovation, but they also make it harder to restrict dangerous downstream adaptations if capabilities cross sensitive thresholds.",
    mitigationApproach:
      "Use staged release, capability thresholds, responsible disclosure, model cards, abuse monitoring, and access-tiering for higher-risk systems.",
  },
  {
    slug: "closed-model-opacity-risk",
    profile: "Closed model opacity risk",
    systemType: "closed-frontier-ai",
    riskTradeoff: "opacity-risk",
    riskScore: 88,
    primaryBenefit:
      "Closed systems can maintain stronger access control, monitoring, abuse prevention, and deployment discipline.",
    primaryRisk:
      "External researchers, users, regulators, and customers may have limited visibility into training data, evaluations, failure modes, and safety claims.",
    whyItMatters:
      "Closed frontier systems concentrate both capability and knowledge inside a small number of organizations, which creates trust and accountability challenges.",
    mitigationApproach:
      "Improve third-party audits, structured transparency reports, evaluation disclosure, incident reporting, and regulator access.",
  },
  {
    slug: "open-ecosystem-innovation-risk",
    profile: "Open ecosystem innovation risk",
    systemType: "open-weight-ai",
    riskTradeoff: "innovation-risk",
    riskScore: 78,
    primaryBenefit:
      "Open models lower barriers for startups, researchers, public institutions, and smaller countries to build AI systems.",
    primaryRisk:
      "Rapid innovation can outpace shared norms, governance standards, and abuse monitoring.",
    whyItMatters:
      "Open ecosystems can distribute AI benefits more widely, but they can also create fragmented responsibility and uneven deployment practices.",
    mitigationApproach:
      "Support shared evaluation standards, safety tooling, community reporting channels, and responsible deployment documentation.",
  },
  {
    slug: "closed-platform-concentration-risk",
    profile: "Closed platform concentration risk",
    systemType: "closed-frontier-ai",
    riskTradeoff: "governance-risk",
    riskScore: 84,
    primaryBenefit:
      "Large closed platforms can invest heavily in safety teams, monitoring, infrastructure, and coordinated deployment controls.",
    primaryRisk:
      "A small number of companies may control access to frontier AI capabilities, pricing, governance decisions, and deployment norms.",
    whyItMatters:
      "Concentration risk matters because AI governance choices may become de facto infrastructure decisions for large parts of the economy.",
    mitigationApproach:
      "Encourage interoperability, regulatory oversight, market competition, portability, and transparent governance commitments.",
  },
  {
    slug: "hybrid-deployment-risk",
    profile: "Hybrid deployment risk",
    systemType: "hybrid-ai",
    riskTradeoff: "accountability-risk",
    riskScore: 82,
    primaryBenefit:
      "Hybrid approaches can combine open model flexibility with controlled enterprise deployment and governance layers.",
    primaryRisk:
      "Responsibility can become unclear when open models, third-party tools, enterprise integrations, and custom fine-tuning are combined.",
    whyItMatters:
      "Many real-world AI deployments will be hybrid, making accountability and monitoring more complex than the open-versus-closed debate suggests.",
    mitigationApproach:
      "Map model provenance, define responsibility boundaries, log deployments, monitor outputs, and assign clear governance ownership.",
  },
  {
    slug: "open-model-security-risk",
    profile: "Open model security risk",
    systemType: "open-weight-ai",
    riskTradeoff: "security-risk",
    riskScore: 86,
    primaryBenefit:
      "Open models allow defenders and researchers to inspect, test, adapt, and harden systems outside a single vendor environment.",
    primaryRisk:
      "Open access can also allow adversaries to fine-tune or adapt models for phishing, exploit assistance, malware iteration, or evasion workflows.",
    whyItMatters:
      "The security tradeoff is dual-use: openness helps defenders but can also improve adversary capability if safeguards are weak.",
    mitigationApproach:
      "Pair openness with misuse evaluations, cyber capability thresholds, monitoring, responsible release practices, and security research norms.",
  },
];

export const openVsClosedAiRiskProfilesKeyFindings = [
  {
    title: "Open and closed systems have different risk profiles",
    description:
      "Open systems increase transparency and distribution, while closed systems increase centralized control but reduce external visibility.",
  },
  {
    title: "The debate is not simply safety versus openness",
    description:
      "Both open and closed AI systems create benefits and risks. The risk profile depends on capability level, deployment context, access control, and governance maturity.",
  },
  {
    title: "Hybrid deployments may be the real default",
    description:
      "Many organizations will combine open models, closed APIs, custom fine-tuning, enterprise integrations, and internal governance layers.",
  },
  {
    title: "Accountability is the central challenge",
    description:
      "The key question is who can inspect, control, audit, restrict, or take responsibility for a system once it is deployed.",
  },
];

export const openVsClosedAiComparisonDimensions = [
  {
    dimension: "Transparency",
    openProfile:
      "Open-weight systems can support external inspection, independent testing, and reproducibility.",
    closedProfile:
      "Closed systems often provide less direct visibility but may publish selected evaluations, safety reports, or policy commitments.",
  },
  {
    dimension: "Deployment control",
    openProfile:
      "Open systems are harder to restrict once distributed and can be modified or deployed by many actors.",
    closedProfile:
      "Closed systems allow stronger centralized access control, monitoring, rate limits, and policy enforcement.",
  },
  {
    dimension: "Innovation speed",
    openProfile:
      "Open ecosystems can accelerate experimentation, localization, competition, and downstream innovation.",
    closedProfile:
      "Closed systems may move quickly internally but concentrate experimentation within fewer organizations.",
  },
  {
    dimension: "Misuse management",
    openProfile:
      "Misuse management is difficult once model weights are broadly available.",
    closedProfile:
      "Misuse can be monitored and restricted more directly, but users must trust the platform's internal controls.",
  },
  {
    dimension: "Accountability",
    openProfile:
      "Accountability is distributed across model creators, deployers, fine-tuners, platforms, and users.",
    closedProfile:
      "Accountability is more centralized but can be opaque without audits, reporting, and external oversight.",
  },
];
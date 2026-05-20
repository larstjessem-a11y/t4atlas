export type EnterpriseAiRiskCategoryEntry = {
  slug: string;
  riskCategory: string;
  category:
    | "data-governance"
    | "model-behavior"
    | "security"
    | "compliance"
    | "operations"
    | "human-oversight"
    | "vendor-risk"
    | "reputation";
  severity: "critical" | "high" | "medium" | "emerging";
  likelihood: "high" | "medium" | "low";
  riskScore: number;
  whereItAppears: string;
  whyItMatters: string;
  mitigationApproach: string;
};

export const enterpriseAiRiskCategoriesLastUpdated = "2026-05-15";

export const enterpriseAiRiskCategoriesMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for enterprise AI risk categories. It combines AI deployment patterns, governance concerns, operational exposure, security risk, compliance pressure, and T4 Atlas analysis. Risk scores are directional and should not be interpreted as formal audits, legal advice, or regulatory assessments.",
};

export const enterpriseAiRiskCategoriesData: EnterpriseAiRiskCategoryEntry[] = [
  {
    slug: "sensitive-data-leakage",
    riskCategory: "Sensitive data leakage",
    category: "data-governance",
    severity: "critical",
    likelihood: "high",
    riskScore: 96,
    whereItAppears:
      "Employee prompts, document uploads, chat logs, API integrations, CRM data, patient records, legal documents, and internal knowledge systems.",
    whyItMatters:
      "Enterprise AI systems can accidentally expose sensitive data if employees paste confidential material into external tools or if integrations are poorly controlled.",
    mitigationApproach:
      "Use access controls, approved AI tools, data-loss prevention, logging, prompt policies, vendor review, and clear rules for sensitive information.",
  },
  {
    slug: "hallucinated-output",
    riskCategory: "Hallucinated or unreliable output",
    category: "model-behavior",
    severity: "high",
    likelihood: "high",
    riskScore: 92,
    whereItAppears:
      "Research summaries, legal drafts, clinical summaries, financial analysis, customer support responses, code explanations, and operational reports.",
    whyItMatters:
      "AI systems can produce confident but incorrect outputs. In enterprise settings, these errors can propagate into decisions, documents, and customer-facing workflows.",
    mitigationApproach:
      "Require source verification, human review, confidence labeling, retrieval grounding, workflow-specific testing, and clear boundaries for high-stakes use.",
  },
  {
    slug: "ai-enabled-cyber-exposure",
    riskCategory: "AI-enabled cyber exposure",
    category: "security",
    severity: "critical",
    likelihood: "medium",
    riskScore: 90,
    whereItAppears:
      "Code generation, phishing simulations, vulnerability analysis, support automation, internal agents, and AI-connected developer workflows.",
    whyItMatters:
      "AI can increase cyber risk by helping attackers scale social engineering, generate malicious code, or exploit poorly secured internal AI tools.",
    mitigationApproach:
      "Combine security review, red-teaming, secure coding controls, model access limits, monitoring, phishing resilience, and incident-response planning.",
  },
  {
    slug: "regulatory-compliance-failure",
    riskCategory: "Regulatory and compliance failure",
    category: "compliance",
    severity: "high",
    likelihood: "medium",
    riskScore: 86,
    whereItAppears:
      "Healthcare, finance, HR, legal, insurance, public sector, education, and customer-facing automated decision workflows.",
    whyItMatters:
      "AI deployment can create compliance risk if systems process personal data, influence decisions, or generate records without proper governance.",
    mitigationApproach:
      "Map applicable regulations, document use cases, maintain audit trails, conduct vendor reviews, define accountability, and restrict high-risk automation.",
  },
  {
    slug: "overreliance-and-automation-bias",
    riskCategory: "Overreliance and automation bias",
    category: "human-oversight",
    severity: "high",
    likelihood: "high",
    riskScore: 88,
    whereItAppears:
      "Decision support, clinical workflows, hiring, financial review, customer support, legal drafting, research synthesis, and management reporting.",
    whyItMatters:
      "Employees may trust AI outputs too much, especially when the system is fast, fluent, or embedded into official workflows.",
    mitigationApproach:
      "Use human-in-the-loop review, training, escalation rules, output uncertainty, audit sampling, and clear accountability for final decisions.",
  },
  {
    slug: "vendor-lock-in",
    riskCategory: "AI vendor lock-in",
    category: "vendor-risk",
    severity: "medium",
    likelihood: "high",
    riskScore: 76,
    whereItAppears:
      "Enterprise AI platforms, model APIs, copilots, internal knowledge systems, CRM integrations, and productivity suites.",
    whyItMatters:
      "Companies can become dependent on one AI vendor’s pricing, model quality, roadmap, compliance posture, and availability.",
    mitigationApproach:
      "Design portable architectures, keep data export options, evaluate multi-model strategies, monitor pricing exposure, and avoid hard-coded dependencies.",
  },
  {
    slug: "operational-dependency",
    riskCategory: "Operational dependency on AI systems",
    category: "operations",
    severity: "high",
    likelihood: "medium",
    riskScore: 82,
    whereItAppears:
      "Customer support, sales workflows, documentation, internal search, coding pipelines, analytics, and automated reporting.",
    whyItMatters:
      "If AI becomes embedded in core workflows without fallback plans, outages, degraded model quality, or policy changes can disrupt operations.",
    mitigationApproach:
      "Maintain fallback workflows, monitor model performance, document dependencies, set service-level expectations, and avoid invisible single points of failure.",
  },
  {
    slug: "brand-and-reputation-risk",
    riskCategory: "Brand and reputation risk",
    category: "reputation",
    severity: "medium",
    likelihood: "medium",
    riskScore: 72,
    whereItAppears:
      "Customer support chatbots, marketing content, social media, public-facing AI assistants, automated emails, and sales outreach.",
    whyItMatters:
      "Low-quality, biased, inaccurate, or inappropriate AI outputs can damage trust even when the direct operational impact is limited.",
    mitigationApproach:
      "Use brand review, content controls, escalation paths, customer-facing disclaimers, monitoring, and human approval for sensitive communications.",
  },
];

export const enterpriseAiRiskCategoriesKeyFindings = [
  {
    title: "Data leakage is the highest baseline risk",
    description:
      "Most enterprise AI deployments create immediate data-governance risk because employees can expose sensitive information through prompts, uploads, logs, or integrations.",
  },
  {
    title: "Fluent output creates overconfidence",
    description:
      "AI systems can sound authoritative even when wrong, which makes hallucinations and automation bias especially important enterprise risks.",
  },
  {
    title: "Governance must follow workflow exposure",
    description:
      "The more deeply AI is embedded into decisions, documents, customer interactions, or operations, the stronger governance controls need to be.",
  },
  {
    title: "Vendor and operational dependency are underappreciated",
    description:
      "As AI becomes infrastructure, companies need to manage provider risk, fallback plans, pricing exposure, and model performance drift.",
  },
];

export const enterpriseAiRiskControlLayers = [
  {
    layer: "Policy and acceptable use",
    controls: ["Approved tools", "Prompt rules", "Sensitive data policy"],
    description:
      "Define where AI can be used, what data can be entered, and which workflows require human review.",
  },
  {
    layer: "Technical controls",
    controls: ["Access control", "Logging", "Data-loss prevention", "Monitoring"],
    description:
      "Use technical safeguards to reduce leakage, abuse, unauthorized access, and invisible high-risk AI use.",
  },
  {
    layer: "Workflow governance",
    controls: ["Human review", "Escalation rules", "Audit sampling"],
    description:
      "Match review requirements to the risk level of the workflow and the consequences of a wrong output.",
  },
  {
    layer: "Vendor and resilience management",
    controls: ["Vendor review", "Fallback workflows", "Portability planning"],
    description:
      "Treat AI vendors as operational dependencies and manage lock-in, outages, policy changes, and pricing exposure.",
  },
];
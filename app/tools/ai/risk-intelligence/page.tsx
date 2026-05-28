import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import IntelligenceSubnav from "@/components/intelligence/IntelligenceSubnav";

export const metadata: Metadata = {
  title: "AI Risk Intelligence | T4 Atlas",
  description:
    "Explore structured AI risk intelligence across enterprise AI risk, alignment risk, frontier AI capabilities, open versus closed AI systems, and governance readiness.",
};

const riskPages = [
  {
    title: "Enterprise AI Risk Categories",
    href: "/tools/ai/risk-intelligence/enterprise-ai-risk-categories",
    description:
      "Map enterprise AI risks across hallucinations, data leakage, cyber exposure, compliance, operational dependency, and governance failure.",
    label: "Enterprise risk",
  },
  {
    title: "AI Alignment Risk Rankings",
    href: "/tools/ai/risk-intelligence/ai-alignment-risk-rankings",
    description:
      "Compare AI systems and deployment patterns by alignment pressure, autonomy, transparency, governance maturity, and real-world exposure.",
    label: "Alignment",
  },
  {
    title: "Frontier AI Risk Matrix",
    href: "/tools/ai/risk-intelligence/frontier-ai-risk-matrix",
    description:
      "Analyze frontier AI risks across autonomy, cyber capability, persuasion, biological assistance, opacity, and deployment scale.",
    label: "Frontier AI",
  },
  {
    title: "Open vs Closed AI Risk Profiles",
    href: "/tools/ai/risk-intelligence/open-vs-closed-ai-risk-profiles",
    description:
      "Compare risk tradeoffs between open-weight AI systems and closed frontier platforms.",
    label: "Risk profiles",
  },
  {
    title: "Most Sensitive AI Capabilities",
    href: "/tools/ai/risk-intelligence/most-sensitive-ai-capabilities",
    description:
      "Identify AI capabilities that create higher operational, cyber, biosecurity, persuasion, and governance risks.",
    label: "Capabilities",
  },
];

const frameworkDimensions = [
  {
    title: "Autonomy risk",
    description:
      "How independently an AI system can plan, act, use tools, or operate across steps without human control.",
  },
  {
    title: "Cyber capability",
    description:
      "Whether the system can assist with vulnerability discovery, exploit reasoning, phishing, or offensive cyber workflows.",
  },
  {
    title: "Manipulation risk",
    description:
      "Potential to generate persuasive content, targeted influence, deception, synthetic media, or misinformation at scale.",
  },
  {
    title: "Biological assistance",
    description:
      "Potential to help users reason about biological systems, lab workflows, pathogen design, or misuse-relevant knowledge.",
  },
  {
    title: "Deployment scale",
    description:
      "How widely the system is exposed to users, enterprises, developers, agents, or automated workflows.",
  },
  {
    title: "Governance maturity",
    description:
      "The strength of evaluations, red-teaming, monitoring, access controls, safety policies, and deployment discipline.",
  },
];

const relatedPages = [
  {
    title: "Enterprise AI Adoption Statistics",
    href: "/tools/ai/statistics/enterprise-ai-adoption-statistics",
    description:
      "Explore enterprise AI adoption across productivity, software development, research, operations, and governance-sensitive workflows.",
    label: "Enterprise",
  },
  {
    title: "Most Used AI APIs",
    href: "/tools/ai/statistics/most-used-ai-apis",
    description:
      "Explore widely used AI APIs across frontier models, reasoning APIs, open-model ecosystems, and enterprise AI infrastructure.",
    label: "APIs",
  },
  {
    title: "Most Used AI Models",
    href: "/tools/ai/statistics/most-used-ai-models",
    description:
      "Explore widely used AI models across frontier assistants, reasoning systems, multimodal models, and open-weight models.",
    label: "Models",
  },
];

export default function AiRiskIntelligenceHubPage() {
  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI risk intelligence"
        title="AI Risk Intelligence"
        description="A structured hub for mapping AI risk across enterprise deployment, alignment pressure, frontier capabilities, governance maturity, open versus closed systems, and operational exposure."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Risk Intelligence" },
        ]}
        actions={[
          { label: "Risk pages", href: "#risk-pages" },
          {
            label: "Framework",
            href: "#framework",
            variant: "secondary",
          },
        ]}
      />

      <IntelligenceSubnav
        items={[
          { label: "Risk pages", href: "#risk-pages" },
          { label: "Framework", href: "#framework" },
          { label: "Positioning", href: "#positioning" },
          { label: "Related", href: "#related-intelligence" },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <IntelligenceCard
          eyebrow="Focus"
          title="Operational risk"
          description="Risks created when AI systems are deployed inside real workflows, organizations, infrastructure, and decision loops."
        />
        <IntelligenceCard
          eyebrow="Focus"
          title="Governance risk"
          description="Failures of oversight, monitoring, access control, red-teaming, policy, and deployment discipline."
        />
        <IntelligenceCard
          eyebrow="Focus"
          title="Capability risk"
          description="Risk from AI systems gaining stronger autonomy, persuasion, cyber, biological, or agentic capabilities."
        />
        <IntelligenceCard
          eyebrow="Focus"
          title="Systemic risk"
          description="Risks that emerge when many AI systems interact with markets, institutions, information ecosystems, and security environments."
        />
      </div>

      <IntelligenceSection
        id="risk-pages"
        eyebrow="Core pages"
        title="AI risk intelligence pages"
        description="Start with these structured risk pages. Each page uses a measured, analytical framework rather than sensational claims."
      >
        <RelatedIntelligencePages pages={riskPages} />
      </IntelligenceSection>

      <IntelligenceSection
        id="framework"
        eyebrow="Framework"
        title="T4 Atlas AI Risk Framework"
        description="The goal is not to make dramatic predictions. The goal is to compare AI systems and deployment patterns across repeatable risk dimensions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {frameworkDimensions.map((dimension) => (
            <IntelligenceCard
              key={dimension.title}
              eyebrow="Risk dimension"
              title={dimension.title}
              description={dimension.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="positioning"
        eyebrow="Positioning"
        title="How to read AI risk intelligence"
        description="AI risk should be analyzed as a set of operational, technical, governance, and systemic risk factors rather than a single abstract threat."
      >
        <div className="space-y-4 leading-7 text-slate-300">
          <p>
            The most useful risk question is usually not whether a model is
            simply “safe” or “unsafe.” A better question is which capabilities it
            has, where it is deployed, who can access it, how it is monitored,
            and what happens if it is misused or fails.
          </p>

          <p>
            T4 Atlas risk pages use directional scoring and structured
            comparison to make AI deployment risk easier to reason about. These
            pages are not formal safety audits, regulatory assessments, or
            investment recommendations.
          </p>

          <p>
            The framework emphasizes practical deployment risk, enterprise
            governance, capability thresholds, transparency, and real-world
            exposure.
          </p>
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="related-intelligence"
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Connect AI risk intelligence with enterprise adoption, model usage, and API infrastructure."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
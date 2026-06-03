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
  eyebrow="Definition"
  title="What Is Risk Intelligence?"
  description="Risk intelligence is the process of collecting, analyzing, and interpreting signals that help organizations anticipate emerging risks before they become operational problems."
>
  <div className="space-y-4 leading-7 text-slate-300">
    <p>
      Risk intelligence goes beyond traditional risk management. Instead of
      focusing only on known risks and compliance requirements, risk
      intelligence attempts to identify emerging threats, capability shifts,
      geopolitical changes, technological disruptions, and operational
      vulnerabilities.
    </p>

    <p>
      In the AI domain, risk intelligence helps organizations understand how
      changing AI capabilities, deployment patterns, governance maturity, and
      frontier-model development may create new forms of operational exposure.
    </p>
  </div>
</IntelligenceSection>

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
<IntelligenceSection
  eyebrow="Enterprise"
  title="What Is a Risk Intelligence Platform?"
  description="Risk intelligence platforms aggregate signals from multiple sources and help organizations convert uncertainty into actionable decisions."
>
  <div className="space-y-4 leading-7 text-slate-300">
    <p>
      Modern risk intelligence platforms combine data, analytics, monitoring,
      scenario analysis, and expert interpretation. The goal is not simply to
      collect information but to identify meaningful changes that affect
      business operations.
    </p>

    <p>
      Risk intelligence platforms are increasingly used to monitor AI
      development, cyber threats, supply-chain exposure, geopolitical risk,
      workforce disruption, regulatory change, and emerging technologies.
    </p>

    <p>
      AI risk intelligence can be viewed as one specialized branch within the
      broader field of enterprise risk intelligence.
    </p>
  </div>
</IntelligenceSection>
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

<p>
  Organizations increasingly need operational intelligence rather than static
  risk registers. AI systems evolve rapidly, which means risk assessments must
  continuously adapt to changing capabilities, deployment models, governance
  practices, and real-world adoption patterns.
</p>
        </div>
      </IntelligenceSection>

<IntelligenceSection
  eyebrow="FAQ"
  title="Frequently Asked Questions"
>
  <div className="space-y-6 text-slate-300">
    <div>
      <h3 className="font-semibold text-white">
        What is risk intelligence?
      </h3>
      <p className="mt-2">
        Risk intelligence is the structured analysis of signals, trends, and
        emerging threats that may affect organizations, markets, technologies,
        or operations.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-white">
        What is a risk intelligence platform?
      </h3>
      <p className="mt-2">
        A risk intelligence platform combines data collection, monitoring,
        analytics, and interpretation to help organizations anticipate and
        manage emerging risks.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-white">
        What is AI risk intelligence?
      </h3>
      <p className="mt-2">
        AI risk intelligence focuses on the risks created by AI capabilities,
        deployment practices, governance systems, frontier-model development,
        and operational exposure.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-white">
        How is risk intelligence different from risk management?
      </h3>
      <p className="mt-2">
        Risk management typically focuses on known risks, while risk
        intelligence focuses on identifying emerging risks and changing threat
        landscapes before they become operational issues.
      </p>
    </div>
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
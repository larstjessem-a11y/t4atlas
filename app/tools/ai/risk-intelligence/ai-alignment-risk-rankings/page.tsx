import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiAlignmentRiskDimensions,
  aiAlignmentRiskRankingsData,
  aiAlignmentRiskRankingsKeyFindings,
  aiAlignmentRiskRankingsLastUpdated,
  aiAlignmentRiskRankingsMethodology,
} from "@/data/aiStats/aiAlignmentRiskRankings";

export const metadata: Metadata = {
  title: "AI Alignment Risk Rankings | T4 Atlas",
  description:
    "Explore AI alignment risk rankings by system type, autonomy risk, transparency, governance maturity, deployment exposure, and alignment pressure.",
};

const relatedPages = [
  {
    title: "AI Risk Intelligence",
    href: "/tools/ai/risk-intelligence",
    description:
      "Explore structured AI risk intelligence across enterprise risk, alignment pressure, frontier capabilities, governance, and deployment exposure.",
    label: "Risk hub",
  },
  {
    title: "Enterprise AI Risk Categories",
    href: "/tools/ai/risk-intelligence/enterprise-ai-risk-categories",
    description:
      "Map enterprise AI risks across data leakage, hallucinations, cyber exposure, compliance, operational dependency, and governance failure.",
    label: "Enterprise risk",
  },
  {
    title: "AI Coding Market Share",
    href: "/tools/ai/statistics/ai-coding-market-share",
    description:
      "Explore AI coding market share signals across IDE copilots, AI-native editors, general assistants, codebase tools, and developer workflows.",
    label: "Coding",
  },
];

export default function AiAlignmentRiskRankingsPage() {
  const sortedSystems = [...aiAlignmentRiskRankingsData].sort(
    (a, b) => b.riskScore - a.riskScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI alignment risk intelligence"
        title="AI Alignment Risk Rankings"
        description="A structured ranking of AI system types by alignment pressure, autonomy risk, transparency, governance maturity, deployment exposure, and real-world risk drivers."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Risk Intelligence", href: "/tools/ai/risk-intelligence" },
          { label: "AI Alignment Risk Rankings" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Risk table",
            href: "#risk-table",
            variant: "secondary",
          },
          {
            label: "Dimensions",
            href: "#dimensions",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${aiAlignmentRiskRankingsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiAlignmentRiskRankingsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Alignment risk snapshot"
        description="Alignment risk rises when strong AI systems become more autonomous, more widely deployed, less transparent, and more deeply embedded into real-world workflows."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedSystems.slice(0, 4).map((system) => (
            <IntelligenceCard
              key={system.slug}
              eyebrow={system.alignmentPressure}
              title={system.systemType}
              score={system.riskScore}
              description={system.whyItMatters}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="risk-table"
        title="AI alignment risk rankings table"
        description="A structured comparison of AI system types by alignment pressure, autonomy, transparency, governance maturity, deployment exposure, and risk score."
      >
        <IntelligenceTable
          data={sortedSystems}
          columns={[
            {
              key: "systemType",
              label: "System type",
              render: (item) => (
                <span className="font-semibold text-[var(--t4-text)]">
                  {item.systemType}
                </span>
              ),
            },
            {
              key: "category",
              label: "Category",
              render: (item) => (
                <span className="capitalize">
                  {item.category.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "alignmentPressure",
              label: "Alignment pressure",
              render: (item) => (
                <span className="capitalize">{item.alignmentPressure}</span>
              ),
            },
            {
              key: "autonomyRisk",
              label: "Autonomy",
              render: (item) => (
                <span className="capitalize">{item.autonomyRisk}</span>
              ),
            },
            {
              key: "deploymentExposure",
              label: "Exposure",
              render: (item) => (
                <span className="capitalize">{item.deploymentExposure}</span>
              ),
            },
            {
              key: "riskScore",
              label: "Risk score",
              render: (item) => (
                <span className="font-semibold text-[#1e3a5f]">
                  {item.riskScore}
                </span>
              ),
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="dimensions"
        title="AI alignment risk dimensions"
        description="The T4 Atlas alignment risk model focuses on practical deployment risk rather than abstract speculation. The same system can become more or less risky depending on access, autonomy, monitoring, and governance."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiAlignmentRiskDimensions.map((dimension) => (
            <IntelligenceCard
              key={dimension.dimension}
              eyebrow="Risk dimension"
              title={dimension.dimension}
              description={dimension.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret alignment risk"
        description="Alignment risk is not a single property of a model. It depends on the system design, tool access, deployment scale, transparency, governance maturity, and the consequences of failure."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedSystems.map((system) => (
            <IntelligenceCard
              key={system.slug}
              eyebrow={`${system.category.replace(/-/g, " ")} · ${
                system.alignmentPressure
              }`}
              title={system.systemType}
              score={system.riskScore}
             description={system.whyItMatters}
>
  <div className="space-y-3">
    <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Key risk drivers
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {system.keyRiskDrivers.map((driver) => (
                    <span
                      key={driver}
                      className="rounded-full border border-[var(--t4-border)] bg-[#f8f6f1] px-3 py-1 text-xs font-medium text-[var(--t4-muted)]"
                    >
                      {driver}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Risk reduction levers
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {system.riskReductionLevers.map((lever) => (
                    <span
                      key={lever}
                 className="t4-tag rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {lever}
                    </span>
                  ))}
 </div>
                </div>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={aiAlignmentRiskRankingsMethodology.title}
        description={aiAlignmentRiskRankingsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It does
          not provide formal model safety audits, regulatory assessments,
          technical alignment evaluations, or vendor certifications.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI risk intelligence pages"
        description="Use these pages to connect alignment risk with enterprise deployment, AI coding risk, and broader AI governance questions."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
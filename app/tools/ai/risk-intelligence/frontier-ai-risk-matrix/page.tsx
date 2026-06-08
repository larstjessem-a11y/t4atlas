import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  frontierAiRiskMatrixData,
  frontierAiRiskMatrixDimensions,
  frontierAiRiskMatrixKeyFindings,
  frontierAiRiskMatrixLastUpdated,
  frontierAiRiskMatrixMethodology,
} from "@/data/aiStats/frontierAiRiskMatrix";

export const metadata: Metadata = {
  title: "Frontier AI Risk Matrix | T4 Atlas",
  description:
    "Explore the frontier AI risk matrix across autonomy, cyber capability, persuasion, biological assistance, AI coding, synthetic media, enterprise autonomy, and open-model distribution.",
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
    title: "AI Alignment Risk Rankings",
    href: "/tools/ai/risk-intelligence/ai-alignment-risk-rankings",
    description:
      "Compare AI system types by alignment pressure, autonomy risk, transparency, governance maturity, and deployment exposure.",
    label: "Alignment",
  },
  {
    title: "Enterprise AI Risk Categories",
    href: "/tools/ai/risk-intelligence/enterprise-ai-risk-categories",
    description:
      "Map enterprise AI risks across data leakage, hallucinations, cyber exposure, compliance, operational dependency, and governance failure.",
    label: "Enterprise risk",
  },
];

export default function FrontierAiRiskMatrixPage() {
  const sortedRisks = [...frontierAiRiskMatrixData].sort(
    (a, b) => b.riskScore - a.riskScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="Frontier AI risk intelligence"
        title="Frontier AI Risk Matrix"
        description="A structured matrix for comparing frontier AI risk across autonomy, cyber capability, persuasion systems, biological assistance, AI coding systems, synthetic media, enterprise autonomy, and open-model distribution."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Risk Intelligence", href: "/tools/ai/risk-intelligence" },
          { label: "Frontier AI Risk Matrix" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Risk matrix",
            href: "#risk-matrix",
            variant: "secondary",
          },
          {
            label: "Dimensions",
            href: "#dimensions",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${frontierAiRiskMatrixLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {frontierAiRiskMatrixKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Frontier AI risk snapshot"
        description="Frontier AI risk increases when high-impact capabilities become more autonomous, more scalable, more widely deployed, and less visible to governance systems."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedRisks.slice(0, 4).map((risk) => (
            <IntelligenceCard
              key={risk.slug}
              eyebrow={`${risk.riskIntensity} · ${risk.deploymentExposure} exposure`}
              title={risk.capabilityArea.replace(/-/g, " ")}
              score={risk.riskScore}
              description={risk.whyItMatters}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="risk-matrix"
        title="Frontier AI risk matrix table"
        description="A structured comparison of frontier AI capability areas by risk intensity, deployment exposure, governance visibility, scaling potential, and overall risk score."
      >
        <IntelligenceTable
          data={sortedRisks}
          columns={[
            {
              key: "capabilityArea",
              label: "Capability area",
              render: (item) => (
                <span className="font-semibold capitalize text-[var(--t4-text)]">
                  {item.capabilityArea.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "riskIntensity",
              label: "Risk intensity",
              render: (item) => (
                <span className="capitalize">{item.riskIntensity}</span>
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
              key: "governanceVisibility",
              label: "Governance visibility",
              render: (item) => (
                <span className="capitalize">{item.governanceVisibility}</span>
              ),
            },
            {
              key: "scalingPotential",
              label: "Scaling potential",
              render: (item) => (
                <span className="capitalize">{item.scalingPotential}</span>
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
        title="Frontier AI risk dimensions"
        description="The matrix compares each capability area using repeatable dimensions rather than treating AI risk as one broad category."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {frontierAiRiskMatrixDimensions.map((dimension) => (
            <IntelligenceCard
              key={dimension.dimension}
              eyebrow="Matrix dimension"
              title={dimension.dimension}
              description={dimension.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret the frontier AI risk matrix"
        description="The highest-risk areas are not always the most visible. Risk depends on capability, exposure, scaling potential, governance visibility, and the consequences of misuse or failure."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedRisks.map((risk) => (
            <IntelligenceCard
              key={risk.slug}
              eyebrow={`${risk.capabilityArea.replace(/-/g, " ")} · ${
                risk.riskIntensity
              }`}
              title={risk.capabilityArea.replace(/-/g, " ")}
              score={risk.riskScore}
              description={risk.whyItMatters}
            > <div className="space-y-3">
              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Systemic concerns
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {risk.systemicConcerns.map((concern) => (
                    <span
                      key={concern}
                      className="rounded-full border border-[var(--t4-border)] bg-[#f8f6f1] px-3 py-1 text-xs font-medium text-[var(--t4-muted)]"
                    >
                      {concern}
                    </span>
                  ))}

                </div>
              </div>

              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Mitigation focus
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {risk.mitigationFocus.map((mitigation) => (
                    <span
                      key={mitigation}
                      className="t4-tag rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {mitigation}
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
        title={frontierAiRiskMatrixMethodology.title}
        description={frontierAiRiskMatrixMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It does
          not provide a formal threat assessment, model safety audit, legal
          opinion, or regulatory evaluation.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI risk intelligence pages"
        description="Use these pages to connect frontier AI risk with alignment pressure, enterprise deployment, and operational governance."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
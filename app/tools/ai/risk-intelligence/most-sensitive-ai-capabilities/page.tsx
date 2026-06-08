import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostSensitiveAiCapabilitiesData,
  mostSensitiveAiCapabilitiesKeyFindings,
  mostSensitiveAiCapabilitiesLastUpdated,
  mostSensitiveAiCapabilitiesMethodology,
  mostSensitiveAiCapabilityDimensions,
} from "@/data/aiStats/mostSensitiveAiCapabilities";

export const metadata: Metadata = {
  title: "Most Sensitive AI Capabilities | T4 Atlas",
  description:
    "Explore sensitive AI capability areas across cyber operations, biological reasoning, persuasion systems, autonomous agents, synthetic media, infrastructure control, and surveillance.",
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
    title: "Frontier AI Risk Matrix",
    href: "/tools/ai/risk-intelligence/frontier-ai-risk-matrix",
    description:
      "Analyze frontier AI risks across autonomy, cyber capability, persuasion, biological assistance, opacity, and deployment scale.",
    label: "Frontier AI",
  },
  {
    title: "AI Alignment Risk Rankings",
    href: "/tools/ai/risk-intelligence/ai-alignment-risk-rankings",
    description:
      "Compare AI system types by alignment pressure, autonomy risk, transparency, governance maturity, and deployment exposure.",
    label: "Alignment",
  },
];

export default function MostSensitiveAiCapabilitiesPage() {
  const sortedCapabilities = [...mostSensitiveAiCapabilitiesData].sort(
    (a, b) => b.riskScore - a.riskScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI capability risk intelligence"
        title="Most Sensitive AI Capabilities"
        description="A structured overview of sensitive AI capability areas across cyber operations, biological reasoning, persuasion systems, autonomous agents, synthetic media, infrastructure control, and surveillance."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Risk Intelligence", href: "/tools/ai/risk-intelligence" },
          { label: "Most Sensitive AI Capabilities" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Capability table",
            href: "#capability-table",
            variant: "secondary",
          },
          {
            label: "Dimensions",
            href: "#dimensions",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostSensitiveAiCapabilitiesLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostSensitiveAiCapabilitiesKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Sensitive AI capability snapshot"
        description="AI capabilities become more sensitive when they combine high misuse potential, broad deployment exposure, rapid scaling, weak governance visibility, or possible systemic effects."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedCapabilities.slice(0, 4).map((capability) => (
            <IntelligenceCard
              key={capability.slug}
              eyebrow={`${capability.sensitivityLevel} · ${capability.deploymentExposure} exposure`}
              title={capability.capability}
              score={capability.riskScore}
              description={capability.whySensitive}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="capability-table"
        title="Most sensitive AI capabilities table"
        description="A structured comparison of sensitive AI capability areas by category, sensitivity level, deployment exposure, misuse potential, and risk score."
      >
        <IntelligenceTable
          data={sortedCapabilities}
          columns={[
            {
              key: "capability",
              label: "Capability",
              render: (item) => (
                <span className="font-semibold text-[var(--t4-text)]">
                  {item.capability}
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
              key: "sensitivityLevel",
              label: "Sensitivity",
              render: (item) => (
                <span className="capitalize">{item.sensitivityLevel}</span>
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
              key: "misusePotential",
              label: "Misuse potential",
              render: (item) => (
                <span className="capitalize">{item.misusePotential}</span>
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
        title="Sensitive AI capability dimensions"
        description="The T4 Atlas sensitive capability model compares each capability area by sensitivity, exposure, misuse potential, and governance complexity."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mostSensitiveAiCapabilityDimensions.map((dimension) => (
            <IntelligenceCard
              key={dimension.dimension}
              eyebrow="Capability dimension"
              title={dimension.dimension}
              description={dimension.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret sensitive AI capabilities"
        description="The purpose is not to sensationalize AI risk. The goal is to identify capability areas where stronger monitoring, access control, governance, evaluations, and resilience planning are most important."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedCapabilities.map((capability) => (
            <IntelligenceCard
              key={capability.slug}
              eyebrow={`${capability.category.replace(/-/g, " ")} · ${
                capability.sensitivityLevel
              }`}
              title={capability.capability}
              score={capability.riskScore}
             description={capability.whySensitive}
>
  <div className="space-y-3">
    <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Systemic concerns
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {capability.systemicConcerns.map((concern) => (
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
                  Governance priorities
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {capability.governancePriorities.map((priority) => (
                    <span
                      key={priority}
                      className="t4-tag rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {priority}
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
        title={mostSensitiveAiCapabilitiesMethodology.title}
        description={mostSensitiveAiCapabilitiesMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It does
          not provide a formal threat assessment, regulatory evaluation, model
          safety audit, or legal opinion.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI risk intelligence pages"
        description="Use these pages to connect sensitive AI capabilities with frontier AI risk, alignment pressure, and broader AI governance questions."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
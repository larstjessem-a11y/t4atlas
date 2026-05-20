import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  enterpriseAiRiskCategoriesData,
  enterpriseAiRiskCategoriesKeyFindings,
  enterpriseAiRiskCategoriesLastUpdated,
  enterpriseAiRiskCategoriesMethodology,
  enterpriseAiRiskControlLayers,
} from "@/data/aiStats/enterpriseAiRiskCategories";

export const metadata: Metadata = {
  title: "Enterprise AI Risk Categories | T4 Atlas",
  description:
    "Explore enterprise AI risk categories across data leakage, hallucinations, cyber exposure, compliance, automation bias, vendor lock-in, operational dependency, and reputation risk.",
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
    title: "Enterprise AI Adoption Statistics",
    href: "/tools/ai/statistics/enterprise-ai-adoption-statistics",
    description:
      "Explore enterprise AI adoption across productivity, software development, customer support, research, marketing, operations, and knowledge management.",
    label: "Enterprise",
  },
  {
    title: "Most Used AI APIs",
    href: "/tools/ai/statistics/most-used-ai-apis",
    description:
      "Explore widely used AI APIs across frontier models, reasoning APIs, multimodal systems, open-model ecosystems, and enterprise AI infrastructure.",
    label: "APIs",
  },
];

export default function EnterpriseAiRiskCategoriesPage() {
  const sortedRisks = [...enterpriseAiRiskCategoriesData].sort(
    (a, b) => b.riskScore - a.riskScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="Enterprise AI risk intelligence"
        title="Enterprise AI Risk Categories"
        description="A structured map of enterprise AI risks across sensitive data leakage, hallucinated output, cyber exposure, regulatory compliance, automation bias, vendor lock-in, operational dependency, and reputation risk."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Risk Intelligence", href: "/tools/ai/risk-intelligence" },
          { label: "Enterprise AI Risk Categories" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Risk table",
            href: "#risk-table",
            variant: "secondary",
          },
          {
            label: "Control layers",
            href: "#control-layers",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${enterpriseAiRiskCategoriesLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {enterpriseAiRiskCategoriesKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Enterprise AI risk snapshot"
        description="The highest enterprise AI risks usually appear where sensitive data, high-stakes decisions, customer-facing workflows, security exposure, or operational dependency meet weak governance."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedRisks.slice(0, 4).map((risk) => (
            <IntelligenceCard
              key={risk.slug}
              eyebrow={`${risk.severity} · ${risk.likelihood} likelihood`}
              title={risk.riskCategory}
              score={risk.riskScore}
              description={risk.whyItMatters}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="risk-table"
        title="Enterprise AI risk categories table"
        description="A structured comparison of enterprise AI risk categories by severity, likelihood, risk score, workflow exposure, and mitigation approach."
      >
        <IntelligenceTable
          data={sortedRisks}
          columns={[
            {
              key: "riskCategory",
              label: "Risk category",
              render: (item) => (
                <span className="font-semibold text-white">
                  {item.riskCategory}
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
              key: "severity",
              label: "Severity",
              render: (item) => (
                <span className="capitalize">{item.severity}</span>
              ),
            },
            {
              key: "likelihood",
              label: "Likelihood",
              render: (item) => (
                <span className="capitalize">{item.likelihood}</span>
              ),
            },
            {
              key: "riskScore",
              label: "Risk score",
              render: (item) => (
                <span className="font-semibold text-cyan-200">
                  {item.riskScore}
                </span>
              ),
            },
            {
              key: "mitigationApproach",
              label: "Mitigation approach",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="control-layers"
        title="Enterprise AI risk control layers"
        description="Enterprise AI risk management works best when policy, technical controls, workflow governance, and vendor resilience are designed together."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {enterpriseAiRiskControlLayers.map((layer) => (
            <IntelligenceCard
              key={layer.layer}
              eyebrow="Control layer"
              title={layer.layer}
              description={layer.description}
            >
              <div className="flex flex-wrap gap-2">
                {layer.controls.map((control) => (
                  <span
                    key={control}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {control}
                  </span>
                ))}
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret enterprise AI risk"
        description="Enterprise AI risk is not one problem. It is a combination of model behavior, data governance, workflow exposure, security posture, human oversight, and vendor dependency."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedRisks.map((risk) => (
            <IntelligenceCard
              key={risk.slug}
              eyebrow={`${risk.category.replace(/-/g, " ")} · ${risk.severity}`}
              title={risk.riskCategory}
              score={risk.riskScore}
              description={risk.whyItMatters}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Where it appears
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {risk.whereItAppears}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Mitigation approach
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {risk.mitigationApproach}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={enterpriseAiRiskCategoriesMethodology.title}
        description={enterpriseAiRiskCategoriesMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It does
          not provide legal advice, regulatory assessment, formal risk audit, or
          vendor-specific security certification.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect enterprise AI risk with AI adoption, infrastructure, and broader AI governance questions."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
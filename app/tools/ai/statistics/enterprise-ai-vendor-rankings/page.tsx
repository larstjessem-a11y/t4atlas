import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  enterpriseAiVendorRankingsCategories,
  enterpriseAiVendorRankingsData,
  enterpriseAiVendorRankingsKeyFindings,
  enterpriseAiVendorRankingsMethodology,
  enterpriseAiVendorRankingsLastUpdated,
} from "@/data/aiStats/enterpriseAiVendorRankings";

export const metadata: Metadata = {
  title: "Enterprise AI Vendor Rankings (2026) | T4 Atlas",
  description:
    "Compare enterprise AI vendors including Microsoft, OpenAI, Google, Anthropic, AWS, Salesforce, IBM, Databricks, Palantir, and Oracle.",
};

const relatedPages = [
  {
    title: "Enterprise AI Adoption Statistics",
    href: "/tools/ai/statistics/enterprise-ai-adoption-statistics",
    description:
      "Explore enterprise AI adoption across productivity, software development, customer support, research, marketing, operations, knowledge management, and security.",
    label: "Enterprise",
  },
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, visibility, traffic rankings, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "Most Used AI APIs",
    href: "/tools/ai/statistics/most-used-ai-apis",
    description:
      "Explore widely used AI APIs across frontier models, reasoning APIs, multimodal systems, open-model ecosystems, and enterprise AI infrastructure.",
    label: "APIs",
  },
];

export default function EnterpriseAiVendorRankingsPage() {
  const sortedVendors = [...enterpriseAiVendorRankingsData].sort(
    (a, b) => b.enterpriseScore - a.enterpriseScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="Enterprise AI statistics"
        title="Enterprise AI Vendor Rankings"
        description="A structured comparison of leading enterprise AI vendors by distribution strength, workflow ownership, cloud integration, governance positioning, infrastructure depth, and operational fit."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Enterprise AI Vendor Rankings" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "View data table",
            href: "#data-table",
            variant: "secondary",
          },
          {
            label: "Methodology",
            href: "#methodology",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${enterpriseAiVendorRankingsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {enterpriseAiVendorRankingsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Enterprise AI vendor snapshot"
        description="Enterprise AI adoption is shaped by more than model quality. Distribution, procurement fit, cloud relationships, governance, security, and integration into existing workflows are often decisive."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedVendors.slice(0, 4).map((vendor) => (
            <IntelligenceCard
              key={vendor.vendor}
              eyebrow={vendor.category}
              title={vendor.vendor}
              score={vendor.enterpriseScore}
              description="Enterprise score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="Enterprise AI vendor ranking table"
        description="A structured comparison of leading enterprise AI vendors by category, positioning, strengths, adoption signal, and T4 Atlas enterprise score."
      >
        <IntelligenceTable
          data={sortedVendors}
          columns={[
            {
              key: "vendor",
              label: "Vendor",
              render: (item) => (
                <span className="font-semibold text-white">{item.vendor}</span>
              ),
            },
            {
              key: "category",
              label: "Category",
            },
            {
              key: "enterprisePositioning",
              label: "Enterprise positioning",
            },
            {
              key: "strengths",
              label: "Strengths",
            },
            {
              key: "adoptionSignal",
              label: "Adoption signal",
            },
            {
              key: "enterpriseScore",
              label: "Score",
              render: (item) => (
                <span className="font-semibold text-cyan-200">
                  {item.enterpriseScore}
                </span>
              ),
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="Enterprise AI vendor categories"
        description="Enterprise AI vendors differ by where they sit in the stack: frontier models, cloud infrastructure, workflow platforms, operational systems, governance layers, and data platforms."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {enterpriseAiVendorRankingsCategories.map((category) => (
            <IntelligenceCard
              key={category.title}
              eyebrow="Category"
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="What the rankings mean"
        description="The ranking reflects enterprise positioning, not official revenue share. In practice, enterprise buyers evaluate trust, security, integration, support, procurement pathways, governance, and workflow fit."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedVendors.map((vendor) => (
            <IntelligenceCard
              key={vendor.vendor}
              eyebrow={vendor.category}
              title={vendor.vendor}
              score={vendor.enterpriseScore}
              description={vendor.enterprisePositioning}
            >
              <p className="text-xs text-slate-400">
                Signal: {vendor.adoptionSignal}
              </p>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={enterpriseAiVendorRankingsMethodology.title}
        description={enterpriseAiVendorRankingsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page should not be interpreted as official enterprise AI revenue
          share, customer-count share, or verified procurement data.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related enterprise AI statistics"
        description="Use these pages to connect enterprise vendor rankings with adoption patterns, market share, API usage, and broader AI infrastructure trends."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
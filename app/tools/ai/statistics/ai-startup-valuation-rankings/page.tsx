import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiStartupValuationCategories,
  aiStartupValuationsData,
  aiStartupValuationsKeyFindings,
  aiStartupValuationsLastUpdated,
  aiStartupValuationsMethodology,
} from "@/data/aiStats/aiStartupValuations";

export const metadata: Metadata = {
  title: "AI Startup Valuation Rankings | T4 Atlas",
  description:
    "Explore AI startup valuation rankings by category, valuation tier, momentum score, strategic importance, and valuation risk.",
};

const relatedPages = [
  {
    title: "Most Funded AI Startups",
    href: "/tools/ai/statistics/most-funded-ai-startups",
    description:
      "Explore heavily funded AI startups across frontier models, AI search, infrastructure, coding, robotics, and enterprise AI.",
    label: "Funding",
  },
  {
    title: "Most Used AI Models",
    href: "/tools/ai/statistics/most-used-ai-models",
    description:
      "Explore widely used AI models across frontier assistants, reasoning systems, multimodal models, open-weight models, and enterprise AI.",
    label: "Models",
  },
  {
    title: "Most Visited AI Websites",
    href: "/tools/ai/statistics/most-visited-ai-websites",
    description:
      "Explore high-visibility AI websites by category, traffic position, momentum score, and traffic interpretation.",
    label: "Traffic",
  },
];

export default function AiStartupValuationRankingsPage() {
  const sortedStartups = [...aiStartupValuationsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI valuation intelligence"
        title="AI Startup Valuation Rankings"
        description="A structured overview of high-valuation AI startups across frontier models, AI search, infrastructure, coding, robotics, creative AI, enterprise AI, and agentic systems."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Startup Valuation Rankings" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Valuation table",
            href: "#valuation-table",
            variant: "secondary",
          },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${aiStartupValuationsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiStartupValuationsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI startup valuation snapshot"
        description="AI startup valuations are shaped by model capability, distribution, strategic partnerships, compute access, enterprise adoption, and control over high-value workflows. These valuation tiers are directional, not live audited financial data."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedStartups.slice(0, 4).map((startup) => (
            <IntelligenceCard
              key={startup.slug}
              eyebrow={startup.valuationTier}
              title={startup.company}
              score={startup.momentumScore}
              description={startup.primaryFocus}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="valuation-table"
        title="AI startup valuation rankings table"
        description="A structured comparison of AI startups by category, valuation tier, momentum score, strategic focus, and valuation caution."
      >
        <IntelligenceTable
          data={sortedStartups}
          columns={[
            {
              key: "company",
              label: "Company",
              render: (item) => (
                <span className="font-semibold text-[var(--t4-text)]">
                  {item.company}
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
              key: "valuationTier",
              label: "Valuation tier",
              render: (item) => (
                <span className="capitalize">{item.valuationTier}</span>
              ),
            },
            {
              key: "momentumScore",
              label: "Momentum",
              render: (item) => (
                <span className="font-semibold text-[#1e3a5f]">
                  {item.momentumScore}
                </span>
              ),
            },
            {
              key: "primaryFocus",
              label: "Primary focus",
            },
            {
              key: "valuationCaution",
              label: "Valuation caution",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="categories"
        title="AI valuation categories"
        description="Private AI valuations cluster around a few strategic themes: frontier models, AI-native workflows, infrastructure, robotics, and agentic systems."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiStartupValuationCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="Valuation category"
              title={category.category}
              description={category.description}
            >
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-[var(--t4-border)] bg-[#f8f6f1] px-3 py-1 text-xs font-medium text-[var(--t4-muted)]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret AI startup valuations"
        description="High private valuations can reflect strategic scarcity, investor demand, expected platform control, compute access, and future workflow ownership. They should not be read as simple indicators of profitability or low risk."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedStartups.map((startup) => (
            <IntelligenceCard
              key={startup.slug}
              eyebrow={`${startup.category.replace(/-/g, " ")} · ${
                startup.valuationTier
              }`}
              title={startup.company}
              score={startup.momentumScore}
              description={startup.whyValuationMatters}
            >
              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Valuation caution
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {startup.valuationCaution}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={aiStartupValuationsMethodology.title}
        description={aiStartupValuationsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It does
          not provide investment advice, live valuation data, audited
          capitalization tables, or exact private-market pricing.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI startup valuations with funding momentum, AI model usage, and AI website traffic."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
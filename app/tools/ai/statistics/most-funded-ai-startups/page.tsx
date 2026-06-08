import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostFundedAiStartupCategories,
  mostFundedAiStartupsData,
  mostFundedAiStartupsKeyFindings,
  mostFundedAiStartupsLastUpdated,
  mostFundedAiStartupsMethodology,
} from "@/data/aiStats/mostFundedAiStartups";

export const metadata: Metadata = {
  title: "Most Funded AI Startups | T4 Atlas",
  description:
    "Explore the most funded AI startups by category, funding tier, momentum score, strategic importance, and investor interest.",
};

const relatedPages = [
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
  {
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Compare AI tools by growth drivers, momentum signals, and workflow expansion.",
    label: "Growth",
  },
];

export default function MostFundedAiStartupsPage() {
  const sortedStartups = [...mostFundedAiStartupsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI startup intelligence"
        title="Most Funded AI Startups"
        description="A structured overview of heavily funded AI startups across frontier models, AI search, infrastructure, coding, robotics, creative AI, enterprise AI, and defense-adjacent AI."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Funded AI Startups" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Startup table",
            href: "#startup-table",
            variant: "secondary",
          },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostFundedAiStartupsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostFundedAiStartupsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI startup funding snapshot"
        description="AI funding is concentrated around frontier model labs, AI infrastructure, search disruption, coding productivity, robotics, and AI-native application layers. Funding is also increasingly tied to strategic control over compute, data, distribution, and enterprise workflows."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedStartups.slice(0, 4).map((startup) => (
            <IntelligenceCard
              key={startup.slug}
              eyebrow={startup.fundingTier}
              title={startup.company}
              score={startup.momentumScore}
              description={startup.primaryFocus}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="startup-table"
        title="Most funded AI startups table"
        description="A structured comparison of heavily funded AI startups by category, funding tier, momentum score, primary focus, and strategic importance."
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
              key: "fundingTier",
              label: "Funding tier",
              render: (item) => (
                <span className="capitalize">{item.fundingTier}</span>
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
              key: "strategicImportance",
              label: "Strategic importance",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="categories"
        title="AI startup funding categories"
        description="The most visible AI funding clusters tend to form around foundation models, infrastructure, AI-native applications, robotics, agents, and enterprise deployment."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mostFundedAiStartupCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="Funding category"
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
        title="Why investors care"
        description="AI funding is not only about software revenue. It is also about control over model capabilities, compute demand, enterprise distribution, developer workflows, automation, and strategic infrastructure."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedStartups.map((startup) => (
            <IntelligenceCard
              key={startup.slug}
              eyebrow={`${startup.category.replace(/-/g, " ")} · ${
                startup.fundingTier
              }`}
              title={startup.company}
              score={startup.momentumScore}
              description={startup.whyInvestorsCare}
            >
              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Strategic importance
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {startup.strategicImportance}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={mostFundedAiStartupsMethodology.title}
        description={mostFundedAiStartupsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. Funding
          tiers are broad categories, not live capitalization tables, audited
          funding totals, or investment advice.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI startup funding with model adoption, website traffic, and growth momentum."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
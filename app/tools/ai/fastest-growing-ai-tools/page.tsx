import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  fastestGrowingAiToolsData,
  fastestGrowingAiToolsKeyFindings,
  fastestGrowingAiToolsLastUpdated,
  fastestGrowingAiToolsMethodology,
} from "@/data/aiStats/fastestGrowingAiTools";

export const metadata: Metadata = {
  title: "Fastest Growing AI Tools | T4 Atlas",
  description:
    "Explore the fastest growing AI tools by category, growth drivers, momentum score, and workflow relevance.",
};

const relatedPages = [
  {
    title: "AI Statistics Hub",
    href: "/tools/ai/statistics",
    description:
      "Explore T4 Atlas AI statistics pages for market share, search demand, growth trends, and tool momentum.",
    label: "Statistics",
  },
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "Most Searched AI Tools",
    href: "/tools/ai/most-searched-ai-tools",
    description:
      "See which AI tools attract the strongest search demand and what users are looking for.",
    label: "Search demand",
  },
];

export default function FastestGrowingAiToolsPage() {
  const sortedTools = [...fastestGrowingAiToolsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI statistics"
        title="Fastest Growing AI Tools"
        description="A structured look at fast-growing AI tools across chatbots, AI search, workspace tools, creative AI, meeting assistants, and productivity workflows."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Fastest Growing AI Tools" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "View ranking",
            href: "#ranking",
            variant: "secondary",
          },
          {
            label: "Methodology",
            href: "#methodology",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${fastestGrowingAiToolsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {fastestGrowingAiToolsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Growth momentum snapshot"
        description="This snapshot ranks AI tools by directional growth momentum, category visibility, workflow expansion, and public adoption signals."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.growthCategory}
              title={tool.name}
              score={tool.momentumScore}
              description="Momentum score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="ranking"
        title="Fastest growing AI tools table"
        description="A structured ranking of major AI tools by growth category, momentum score, growth drivers, and why the tool matters."
      >
        <IntelligenceTable
          data={sortedTools}
          columns={[
            {
              key: "name",
              label: "Tool",
              render: (tool) => (
                <span className="font-semibold text-white">{tool.name}</span>
              ),
            },
            {
              key: "category",
              label: "Category",
              render: (tool) => (
                <span className="capitalize">{tool.category}</span>
              ),
            },
            {
              key: "growthCategory",
              label: "Growth",
              render: (tool) => (
                <span className="capitalize">{tool.growthCategory}</span>
              ),
            },
            {
              key: "momentumScore",
              label: "Momentum",
              render: (tool) => (
                <span className="font-semibold text-cyan-200">
                  {tool.momentumScore}
                </span>
              ),
            },
            {
              key: "growthDrivers",
              label: "Growth drivers",
              render: (tool) => tool.growthDrivers.join(", "),
            },
            {
              key: "whyItMatters",
              label: "Why it matters",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="Growth drivers by tool"
        description="Growth does not come from one signal alone. Distribution, workflow adoption, media visibility, integrations, and category expansion all matter."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.category} · ${tool.growthCategory}`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyItMatters}
            >
              <div className="flex flex-wrap gap-2">
                {tool.growthDrivers.map((driver) => (
                  <span
                    key={driver}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {driver}
                  </span>
                ))}
              </div>

              {tool.relatedPage ? (
                <Link
                  href={tool.relatedPage}
                  className="mt-4 inline-flex text-sm font-medium text-cyan-200 underline"
                >
                  Related T4 Atlas guide
                </Link>
              ) : null}
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={fastestGrowingAiToolsMethodology.title}
        description={fastestGrowingAiToolsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          Growth categories are directional and designed to compare relative
          ecosystem momentum, not audited revenue growth or verified user-growth
          rates.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI statistics and guides"
        description="Use these pages to connect growth momentum with market share, search demand, and practical workflow decisions."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
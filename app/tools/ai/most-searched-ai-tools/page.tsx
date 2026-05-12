import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostSearchedAiToolsData,
  mostSearchedAiToolsKeyFindings,
  mostSearchedAiToolsLastUpdated,
  mostSearchedAiToolsMethodology,
} from "@/data/aiStats/mostSearchedAiTools";

export const metadata: Metadata = {
  title: "Most Searched AI Tools | T4 Atlas",
  description:
    "Explore the most searched AI tools by category, search intent, relative demand, and T4 Atlas momentum score.",
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
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Compare AI tools by growth drivers, momentum signals, and workflow expansion.",
    label: "Growth",
  },
];

export default function MostSearchedAiToolsPage() {
  const sortedTools = [...mostSearchedAiToolsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI statistics"
        title="Most Searched AI Tools"
        description="A structured overview of the AI tools people search for most often, grouped by category, search intent, relative demand, and T4 Atlas momentum score."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Searched AI Tools" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "View ranking",
            href: "#data-table",
            variant: "secondary",
          },
          {
            label: "Methodology",
            href: "#methodology",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostSearchedAiToolsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostSearchedAiToolsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Search demand snapshot"
        description="This snapshot highlights AI tools with high public search visibility and strong workflow relevance. Relative demand is grouped into broad buckets rather than exact search-volume estimates."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.relativeSearchDemand} demand`}
              title={tool.name}
              score={tool.momentumScore}
              description="Momentum score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="Most searched AI tools table"
        description="A structured table of major AI tools by category, search intent, relative demand, momentum score, and why users search for them."
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
              key: "searchIntent",
              label: "Search intent",
              render: (tool) => (
                <span className="capitalize">{tool.searchIntent}</span>
              ),
            },
            {
              key: "relativeSearchDemand",
              label: "Relative demand",
              render: (tool) => (
                <span className="capitalize">
                  {tool.relativeSearchDemand}
                </span>
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
              key: "whyItIsSearched",
              label: "Why it is searched",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="AI tools by search intent"
        description="Search demand is not only about brand awareness. Many AI searches are driven by comparisons, alternatives, workflow needs, and category exploration."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.category} · ${tool.searchIntent}`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyItIsSearched}
            >
              {tool.relatedPage ? (
                <Link
                  href={tool.relatedPage}
                  className="inline-flex text-sm font-medium text-cyan-200 underline"
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
        title={mostSearchedAiToolsMethodology.title}
        description={mostSearchedAiToolsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          Relative search demand is grouped into broad categories to avoid false
          precision. This page is intended as an intelligence overview, not a
          replacement for a dedicated keyword database.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI statistics and guides"
        description="Use these pages to connect search demand with market share, growth momentum, and practical workflow decisions."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiMarketShareData,
  aiMarketShareKeyFindings,
  aiMarketShareLastUpdated,
  aiMarketShareMethodology,
  aiMarketShareSources,
} from "@/data/aiStats/aiMarketShare";

export const metadata: Metadata = {
  title: "AI Tools Market Share | T4 Atlas",
  description:
    "Explore AI tools market share, chatbot visibility, AI traffic signals, and T4 Atlas momentum scores for ChatGPT, Gemini, Claude, Perplexity, Copilot, and more.",
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
    title: "Most Searched AI Tools",
    href: "/tools/ai/most-searched-ai-tools",
    description:
      "See which AI tools attract the strongest search demand and what users are looking for.",
    label: "Search demand",
  },
  {
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Compare AI tools by growth drivers, momentum signals, and workflow expansion.",
    label: "Growth",
  },
];

export default function AiToolsMarketSharePage() {
  const sortedByMomentum = [...aiMarketShareData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI statistics"
        title="AI Tools Market Share"
        description="A structured overview of AI tool visibility, chatbot market-share signals, traffic rankings, and T4 Atlas momentum scores across major AI assistants and specialized AI products."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Tools Market Share" },
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
        meta={`Last updated: ${aiMarketShareLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiMarketShareKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI market share snapshot"
        description="The table below combines public chatbot market-share signals, traffic visibility, and a T4 Atlas editorial momentum score. Market share numbers should not be interpreted as revenue share or total active-user share."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedByMomentum.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.category}
              title={tool.name}
              score={tool.momentumScore}
              description="Momentum score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="AI tools market share and momentum table"
        description="A structured comparison of major AI tools by category, market-share signal, traffic rank, momentum, and primary use case."
      >
        <IntelligenceTable
          data={sortedByMomentum}
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
              key: "marketSharePercent",
              label: "Market share",
              render: (tool) =>
                tool.marketSharePercent !== undefined
                  ? `${tool.marketSharePercent}%`
                  : "—",
            },
            {
              key: "trafficRank",
              label: "Traffic rank",
              render: (tool) => (tool.trafficRank ? `#${tool.trafficRank}` : "—"),
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
              key: "primaryUseCase",
              label: "Primary use case",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="What the numbers mean"
        description="Market-share signals, traffic rankings, and momentum scores reflect different dimensions of the AI ecosystem. These cards explain how each tool should be interpreted."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedByMomentum.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.category}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.notes}
            >
              <p className="text-xs text-slate-400">
                Sources: {tool.sources.join(", ")}
              </p>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={aiMarketShareMethodology.title}
        description={aiMarketShareMethodology.description}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiMarketShareSources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-500/30 hover:bg-slate-900"
            >
              <h3 className="font-semibold text-white">{source.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {source.description}
              </p>
            </a>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI statistics and guides"
        description="Use these pages to connect AI market share with search demand, growth momentum, and practical workflow decisions."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
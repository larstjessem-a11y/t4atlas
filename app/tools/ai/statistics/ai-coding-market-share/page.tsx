import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiCodingMarketShareCategories,
  aiCodingMarketShareData,
  aiCodingMarketShareKeyFindings,
  aiCodingMarketShareLastUpdated,
  aiCodingMarketShareMethodology,
} from "@/data/aiStats/aiCodingMarketShare";

export const metadata: Metadata = {
  title: "AI Coding Market Share | T4 Atlas",
  description:
    "Explore AI coding market share signals by tool category, adoption tier, developer workflow, momentum score, and codebase relevance.",
};

const relatedPages = [
  {
    title: "Most Used AI Tools for Software Teams",
    href: "/tools/ai/professions/ai-tools-for-software-teams",
    description:
      "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
    label: "Software teams",
  },
  {
    title: "Most Used AI APIs",
    href: "/tools/ai/statistics/most-used-ai-apis",
    description:
      "Explore widely used AI APIs across frontier models, reasoning APIs, multimodal systems, open-model ecosystems, and enterprise AI infrastructure.",
    label: "APIs",
  },
  {
    title: "Enterprise AI Adoption Statistics",
    href: "/tools/ai/statistics/enterprise-ai-adoption-statistics",
    description:
      "Explore enterprise AI adoption across productivity, software development, customer support, research, marketing, operations, and knowledge management.",
    label: "Enterprise",
  },
];

export default function AiCodingMarketSharePage() {
  const sortedTools = [...aiCodingMarketShareData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI coding intelligence"
        title="AI Coding Market Share"
        description="A structured view of AI coding market share signals across IDE copilots, AI-native editors, general assistants, codebase assistants, open coding models, and enterprise developer workflows."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Coding Market Share" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Market table",
            href: "#market-table",
            variant: "secondary",
          },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${aiCodingMarketShareLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiCodingMarketShareKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI coding market snapshot"
        description="AI coding adoption is strongest where tools fit directly into existing developer workflows. The market is moving from autocomplete toward codebase awareness, multi-file changes, software agents, and repository-level intelligence."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.adoptionTier}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.bestFor}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="market-table"
        title="AI coding market share table"
        description="A structured comparison of AI coding tools by category, adoption tier, momentum score, developer use case, market position, and limitations."
      >
        <IntelligenceTable
          data={sortedTools}
          columns={[
            {
              key: "name",
              label: "Tool",
              render: (item) => (
                <span className="font-semibold text-white">{item.name}</span>
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
              key: "adoptionTier",
              label: "Adoption",
              render: (item) => (
                <span className="capitalize">{item.adoptionTier}</span>
              ),
            },
            {
              key: "momentumScore",
              label: "Momentum",
              render: (item) => (
                <span className="font-semibold text-cyan-200">
                  {item.momentumScore}
                </span>
              ),
            },
            {
              key: "bestFor",
              label: "Best for",
            },
            {
              key: "marketPosition",
              label: "Market position",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="categories"
        title="AI coding tool categories"
        description="AI coding tools are no longer one category. The market is separating into IDE copilots, AI-native editors, general assistants, open coding models, and codebase intelligence platforms."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiCodingMarketShareCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="Coding category"
              title={category.category}
              description={category.description}
            >
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
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
        title="How developers should interpret AI coding adoption"
        description="AI coding market share is not only about seat counts. It is also about workflow depth, IDE integration, codebase context, enterprise trust, developer retention, and whether the tool becomes part of the daily engineering loop."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.category.replace(/-/g, " ")} · ${
                tool.adoptionTier
              }`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyDevelopersUseIt}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Market position
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.marketPosition}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Risk or limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.risksOrLimitations}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={aiCodingMarketShareMethodology.title}
        description={aiCodingMarketShareMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It does
          not claim audited market share, verified seat counts, exact revenue
          share, or live developer adoption statistics.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI coding adoption with software-team workflows, AI APIs, and broader enterprise AI adoption."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
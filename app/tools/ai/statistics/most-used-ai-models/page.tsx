import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostUsedAiModelCategories,
  mostUsedAiModelsData,
  mostUsedAiModelsKeyFindings,
  mostUsedAiModelsLastUpdated,
  mostUsedAiModelsMethodology,
} from "@/data/aiStats/mostUsedAiModels";

export const metadata: Metadata = {
  title: "Most Used AI Models | T4 Atlas",
  description:
    "Explore the most used AI models by category, company, usage position, momentum score, strengths, limitations, and workflow relevance.",
};

const relatedPages = [
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
    label: "Market share",
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

export default function MostUsedAiModelsPage() {
  const sortedModels = [...mostUsedAiModelsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI model intelligence"
        title="Most Used AI Models"
        description="A structured overview of widely used AI models across frontier assistants, reasoning models, multimodal systems, open-weight models, enterprise AI, and coding-focused models."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Used AI Models" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Model table",
            href: "#model-table",
            variant: "secondary",
          },
          {
            label: "Model categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostUsedAiModelsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostUsedAiModelsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI model usage snapshot"
        description="AI model usage is shaped by product distribution, developer adoption, workflow relevance, cost, multimodal capability, and ecosystem integration. The most visible models are often embedded into high-traffic products and enterprise platforms."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedModels.slice(0, 4).map((model) => (
            <IntelligenceCard
              key={model.slug}
              eyebrow={model.usagePosition}
              title={model.name}
              score={model.momentumScore}
              description={`${model.company} · ${model.bestFor}`}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="model-table"
        title="Most used AI models table"
        description="A structured comparison of AI models by company, category, usage position, momentum score, strengths, and limitations."
      >
        <IntelligenceTable
          data={sortedModels}
          columns={[
            {
              key: "name",
              label: "Model",
              render: (item) => (
                <span className="font-semibold text-white">{item.name}</span>
              ),
            },
            {
              key: "company",
              label: "Company",
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
              key: "usagePosition",
              label: "Usage position",
              render: (item) => (
                <span className="capitalize">{item.usagePosition}</span>
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
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="categories"
        title="AI model categories"
        description="AI model adoption is easier to understand by category: frontier general models, open-weight models, enterprise models, coding models, and reasoning-focused systems."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mostUsedAiModelCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="Model category"
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
        title="How to interpret AI model usage"
        description="The most used AI models are not always the most technically advanced models in every benchmark. Distribution, pricing, product packaging, developer tooling, and integration into daily workflows often matter just as much."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedModels.map((model) => (
            <IntelligenceCard
              key={model.slug}
              eyebrow={`${model.company} · ${model.usagePosition}`}
              title={model.name}
              score={model.momentumScore}
              description={model.whyItIsUsed}
            >
              <div className="flex flex-wrap gap-2">
                {model.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {strength}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {model.limitations}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={mostUsedAiModelsMethodology.title}
        description={mostUsedAiModelsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It does
          not claim audited API volume, exact inference market share, or verified
          enterprise deployment counts.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI model usage with tool market share, AI website traffic, and growth momentum."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
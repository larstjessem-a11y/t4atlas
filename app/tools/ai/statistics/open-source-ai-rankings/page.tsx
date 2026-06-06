import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  openSourceAiRankingsCategories,
  openSourceAiRankingsData,
  openSourceAiRankingsKeyFindings,
  openSourceAiRankingsMethodology,
  openSourceAiRankingsLastUpdated,
} from "@/data/aiStats/openSourceAiRankings";

export const metadata: Metadata = {
  title: "Open Source AI Rankings (2026) | T4 Atlas",
  description:
    "Compare leading open-source and open-weight AI ecosystems including Llama, DeepSeek, Qwen, Mistral, Gemma, Phi, OLMo, and Falcon.",
};

const relatedPages = [
  {
    title: "Most Used AI Coding Models",
    href: "/tools/ai/statistics/most-used-ai-coding-models",
    description:
      "Compare influential AI coding models across commercial and open-source developer ecosystems.",
    label: "Coding models",
  },
  {
    title: "Most Used AI Models",
    href: "/tools/ai/statistics/most-used-ai-models",
    description:
      "Explore widely used AI models across frontier assistants, reasoning systems, multimodal models, and open-weight models.",
    label: "Models",
  },
  {
    title: "Enterprise AI Vendor Rankings",
    href: "/tools/ai/statistics/enterprise-ai-vendor-rankings",
    description:
      "Compare leading enterprise AI vendors by distribution, workflow ownership, cloud integration, governance, and operational fit.",
    label: "Enterprise",
  },
];

export default function OpenSourceAiRankingsPage() {
  const sortedModels = [...openSourceAiRankingsData].sort(
    (a, b) => b.openSourceScore - a.openSourceScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="Open-source AI statistics"
        title="Open Source AI Rankings"
        description="A structured comparison of leading open-source and open-weight AI model ecosystems by adoption, deployment flexibility, community strength, enterprise relevance, and research visibility."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Open Source AI Rankings" },
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
        meta={`Last updated: ${openSourceAiRankingsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {openSourceAiRankingsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Open-source AI ecosystem snapshot"
        description="Open-source and open-weight AI models are becoming central to local deployment, enterprise experimentation, research transparency, fine-tuning, and strategic AI independence."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedModels.slice(0, 4).map((model) => (
            <IntelligenceCard
              key={model.model}
              eyebrow={model.developer}
              title={model.model}
              score={model.openSourceScore}
              description="Open-source score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="Open-source AI ranking table"
        description="A structured comparison of leading open-source and open-weight AI ecosystems by developer, category, strengths, ecosystem signal, and T4 Atlas open-source score."
      >
        <IntelligenceTable
          data={sortedModels}
          columns={[
            {
              key: "model",
              label: "Model",
              render: (item) => (
                <span className="font-semibold text-white">{item.model}</span>
              ),
            },
            {
              key: "developer",
              label: "Developer",
            },
            {
              key: "category",
              label: "Category",
            },
            {
              key: "strengths",
              label: "Strengths",
            },
            {
              key: "ecosystemSignal",
              label: "Ecosystem signal",
            },
            {
              key: "openSourceScore",
              label: "Score",
              render: (item) => (
                <span className="font-semibold text-cyan-200">
                  {item.openSourceScore}
                </span>
              ),
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="Open-source AI categories"
        description="Open AI ecosystems differ by model size, deployment flexibility, transparency, enterprise usability, coding strength, and community tooling."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {openSourceAiRankingsCategories.map((category) => (
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
        description="This ranking reflects ecosystem relevance rather than official usage share. For open-source AI, community adoption, deployment flexibility, tooling, fine-tuning support, and enterprise control often matter as much as raw model capability."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedModels.map((model) => (
            <IntelligenceCard
              key={model.model}
              eyebrow={model.developer}
              title={model.model}
              score={model.openSourceScore}
              description={model.strengths}
            >
              <p className="text-xs text-slate-400">
                Signal: {model.ecosystemSignal}
              </p>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={openSourceAiRankingsMethodology.title}
        description={openSourceAiRankingsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page should not be interpreted as official open-source model
          usage share, benchmark ranking, or verified deployment telemetry.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related open-source and model statistics"
        description="Use these pages to connect open-source AI rankings with coding models, general AI model adoption, and enterprise vendor positioning."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
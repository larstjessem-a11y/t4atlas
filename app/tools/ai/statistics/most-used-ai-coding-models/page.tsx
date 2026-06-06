import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostUsedAiCodingModelsCategories,
  mostUsedAiCodingModelsData,
  mostUsedAiCodingModelsKeyFindings,
  mostUsedAiCodingModelsMethodology,
  mostUsedAiCodingModelsLastUpdated,
} from "@/data/aiStats/mostUsedAiCodingModels";

export const metadata: Metadata = {
  title: "Most Used AI Coding Models (2026) | T4 Atlas",
  description:
    "Compare influential AI coding models including GPT-5, Claude Sonnet, Gemini, DeepSeek Coder, Codestral, Qwen Coder, Llama, and Gemma.",
};

const relatedPages = [
  {
    title: "AI Coding Market Share",
    href: "/tools/ai/statistics/ai-coding-market-share",
    description:
      "Explore AI coding market share signals across IDE copilots, AI-native editors, general assistants, and developer workflows.",
    label: "Coding",
  },
  {
    title: "Best AI Coding Assistants",
    href: "/tools/ai/best-ai-coding-assistants",
    description:
      "Compare AI coding assistants for developers, software teams, and codebase workflows.",
    label: "Assistants",
  },
  {
    title: "Open Source AI Rankings",
    href: "/tools/ai/statistics/open-source-ai-rankings",
    description:
      "Compare leading open-source and open-weight AI model ecosystems.",
    label: "Open source",
  },
];

export default function MostUsedAiCodingModelsPage() {
  const sortedModels = [...mostUsedAiCodingModelsData].sort(
    (a, b) => b.codingScore - a.codingScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI coding statistics"
        title="Most Used AI Coding Models"
        description="A structured comparison of influential AI coding models across commercial frontier systems, open-source model families, developer tools, and AI-native software engineering workflows."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Used AI Coding Models" },
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
        meta={`Last updated: ${mostUsedAiCodingModelsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostUsedAiCodingModelsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI coding model snapshot"
        description="AI coding tools increasingly compete on workflow, context, and agentic behavior, but the underlying model layer remains critical for reasoning, generation quality, debugging, and codebase understanding."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedModels.slice(0, 4).map((model) => (
            <IntelligenceCard
              key={model.model}
              eyebrow={model.developer}
              title={model.model}
              score={model.codingScore}
              description="Coding score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="Most used AI coding models table"
        description="A structured comparison of coding models by developer, model family, strengths, adoption signal, and T4 Atlas coding score."
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
              key: "modelFamily",
              label: "Family",
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
              key: "codingScore",
              label: "Score",
              render: (item) => (
                <span className="font-semibold text-cyan-200">
                  {item.codingScore}
                </span>
              ),
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="Coding model categories"
        description="AI coding models differ by deployment model, enterprise fit, openness, coding specialization, and integration into developer tools."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {mostUsedAiCodingModelsCategories.map((category) => (
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
        description="The ranking reflects model visibility and coding-workflow relevance, not official usage telemetry. In practice, developer adoption depends heavily on which model is embedded inside tools like Cursor, Copilot, Windsurf, and AI IDEs."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedModels.map((model) => (
            <IntelligenceCard
              key={model.model}
              eyebrow={model.developer}
              title={model.model}
              score={model.codingScore}
              description={model.strengths}
            >
              <p className="text-xs text-slate-400">
                Signal: {model.adoptionSignal}
              </p>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={mostUsedAiCodingModelsMethodology.title}
        description={mostUsedAiCodingModelsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page should not be interpreted as official model usage share,
          benchmark ranking, or verified developer telemetry.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI coding statistics"
        description="Use these pages to connect coding models with AI coding assistants, AI IDEs, open-source models, and developer workflows."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
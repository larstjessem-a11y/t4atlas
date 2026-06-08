import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostUsedAiApiCategories,
  mostUsedAiApisData,
  mostUsedAiApisKeyFindings,
  mostUsedAiApisLastUpdated,
  mostUsedAiApisMethodology,
} from "@/data/aiStats/mostUsedAiApis";

export const metadata: Metadata = {
  title: "Most Used AI APIs | T4 Atlas",
  description:
    "Explore the most used AI APIs by provider, category, adoption tier, momentum score, strengths, limitations, and developer use case.",
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
    title: "Most Funded AI Startups",
    href: "/tools/ai/statistics/most-funded-ai-startups",
    description:
      "Explore heavily funded AI startups across frontier models, AI search, infrastructure, coding, robotics, and enterprise AI.",
    label: "Funding",
  },
  {
    title: "Most Used AI Tools for Software Teams",
    href: "/tools/ai/professions/ai-tools-for-software-teams",
    description:
      "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
    label: "Software teams",
  },
];

export default function MostUsedAiApisPage() {
  const sortedApis = [...mostUsedAiApisData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI infrastructure intelligence"
        title="Most Used AI APIs"
        description="A structured overview of widely used AI APIs across frontier model providers, reasoning APIs, multimodal systems, open-model ecosystems, coding APIs, and enterprise AI infrastructure."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Used AI APIs" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "API table",
            href: "#api-table",
            variant: "secondary",
          },
          {
            label: "API categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostUsedAiApisLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostUsedAiApisKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI API adoption snapshot"
        description="AI API adoption is shaped by model quality, developer tooling, latency, cost, documentation, ecosystem maturity, enterprise trust, and deployment flexibility."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedApis.slice(0, 4).map((api) => (
            <IntelligenceCard
              key={api.slug}
              eyebrow={api.adoptionTier}
              title={api.apiName}
              score={api.momentumScore}
              description={`${api.provider} · ${api.bestFor}`}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="api-table"
        title="Most used AI APIs table"
        description="A structured comparison of AI APIs by provider, category, adoption tier, momentum score, developer use case, strengths, and limitations."
      >
        <IntelligenceTable
          data={sortedApis}
          columns={[
            {
              key: "apiName",
              label: "API",
              render: (item) => (
                <span className="font-semibold text-[var(--t4-text)]">
                  {item.apiName}
                </span>
              ),
            },
            {
              key: "provider",
              label: "Provider",
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
                <span className="font-semibold text-[#1e3a5f]">
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
        title="AI API categories"
        description="AI APIs cluster into frontier platforms, open ecosystems, reasoning and coding APIs, multimodal systems, and enterprise infrastructure services."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mostUsedAiApiCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="API category"
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
        title="How developers should interpret AI API adoption"
        description="The most used AI API is not always the best API for every product. Developers should weigh capability, cost, latency, privacy, deployment options, vendor lock-in, and long-term ecosystem risk."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedApis.map((api) => (
            <IntelligenceCard
              key={api.slug}
              eyebrow={`${api.provider} · ${api.adoptionTier}`}
              title={api.apiName}
              score={api.momentumScore}
              description={api.whyDevelopersUseIt}
            >
              <div className="flex flex-wrap gap-2">
                {api.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-[var(--t4-border)] bg-[#f8f6f1] px-3 py-1 text-xs font-medium text-[var(--t4-muted)]"
                  >
                    {strength}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {api.limitations}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={mostUsedAiApisMethodology.title}
        description={mostUsedAiApisMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It does
          not claim audited API call volume, exact market share, verified
          revenue, or live usage data.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI API adoption with model usage, startup funding, and software-team workflow adoption."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
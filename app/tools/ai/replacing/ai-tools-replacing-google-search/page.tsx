import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiReplacingGoogleSearchData,
  aiReplacingGoogleSearchKeyFindings,
  aiReplacingGoogleSearchLastUpdated,
  aiReplacingGoogleSearchMethodology,
  aiReplacingGoogleSearchUseCases,
} from "@/data/aiStats/aiReplacingGoogleSearch";

export const metadata: Metadata = {
  title: "AI Tools Replacing Google Search | T4 Atlas",
  description:
    "Explore which AI tools are replacing parts of Google Search behavior, including Perplexity, ChatGPT, Gemini, Claude, Copilot, and AI search engines.",
};

const relatedPages = [
  {
    title: "Most Searched AI Tools",
    href: "/tools/ai/most-searched-ai-tools",
    description:
      "Explore which AI tools attract the strongest search demand and why users search for them.",
    label: "Search demand",
  },
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "Best AI Tools for Research",
    href: "/tools/ai/best-ai-tools-for-research",
    description:
      "Compare AI research tools for source discovery, summarization, and knowledge workflows.",
    label: "Research",
  },
];

export default function AiToolsReplacingGoogleSearchPage() {
  const sortedTools = [...aiReplacingGoogleSearchData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI replacement intelligence"
        title="AI Tools Replacing Google Search"
        description="A structured view of which AI tools are replacing parts of traditional Google Search behavior across research, explanations, comparisons, workplace knowledge, and direct answer workflows."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Replacing Google Search" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Tool table",
            href: "#tool-table",
            variant: "secondary",
          },
          {
            label: "Use cases",
            href: "#use-cases",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${aiReplacingGoogleSearchLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiReplacingGoogleSearchKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Search replacement snapshot"
        description="AI is not replacing all search behavior equally. It is strongest where users want synthesis, explanation, source-backed answers, research workflows, or follow-up questions instead of a ranked list of links."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.replacementStrength}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.bestFor}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="tool-table"
        title="AI tools replacing Google Search"
        description="A structured comparison of AI tools by replacement strength, category, momentum, search-like use case, and where Google still remains stronger."
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
                <span className="capitalize">
                  {tool.category.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "replacementStrength",
              label: "Replacement strength",
              render: (tool) => (
                <span className="capitalize">{tool.replacementStrength}</span>
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
              key: "replacesSearchFor",
              label: "Replaces search for",
            },
            {
              key: "whereGoogleStillWins",
              label: "Where Google still wins",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="use-cases"
        title="Where AI replaces search behavior"
        description="The shift from search to AI is best understood by use case. Users are not abandoning search entirely; they are replacing specific search behaviors with AI-native workflows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiReplacingGoogleSearchUseCases.map((useCase) => (
            <IntelligenceCard
              key={useCase.useCase}
              eyebrow="Use case"
              title={useCase.useCase}
              description={useCase.description}
            >
              <div className="flex flex-wrap gap-2">
                {useCase.strongestTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="What users should watch"
        description="The key question is not whether AI replaces Google entirely. The better question is which search jobs move to AI assistants, which stay with traditional search, and which become hybrid workflows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.category.replace(/-/g, " ")} · ${
                tool.replacementStrength
              }`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyUsersSwitch}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Replaces search for
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.replacesSearchFor}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Where Google still wins
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.whereGoogleStillWins}
                </p>
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
        title={aiReplacingGoogleSearchMethodology.title}
        description={aiReplacingGoogleSearchMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It
          describes changing search behavior and AI workflow substitution, not
          audited search market share.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI search replacement with search demand, market share, and research workflow adoption."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
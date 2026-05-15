import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiReplacingCopywritersData,
  aiReplacingCopywritersKeyFindings,
  aiReplacingCopywritersLastUpdated,
  aiReplacingCopywritersMethodology,
  aiReplacingCopywritersUseCases,
} from "@/data/aiStats/aiReplacingCopywriters";

export const metadata: Metadata = {
  title: "AI Tools Replacing Copywriters | T4 Atlas",
  description:
    "Explore which AI tools are replacing parts of copywriting workflows, including ChatGPT, Claude, Jasper, Copy.ai, Writesonic, Surfer SEO, and Notion AI.",
};

const relatedPages = [
  {
    title: "Best AI Tools for Writing",
    href: "/tools/ai/best-ai-tools-for-writing",
    description:
      "Compare AI writing tools for drafting, editing, rewriting, long-form content, and marketing workflows.",
    label: "Writing",
  },
  {
    title: "Most Searched AI Tools",
    href: "/tools/ai/most-searched-ai-tools",
    description:
      "Explore which AI tools attract the strongest search demand and why users search for them.",
    label: "Search demand",
  },
  {
    title: "AI Tools Replacing Google Search",
    href: "/tools/ai/replacing/ai-tools-replacing-google-search",
    description:
      "Explore how AI tools are replacing parts of traditional Google Search behavior.",
    label: "Replacement",
  },
];

export default function AiToolsReplacingCopywritersPage() {
  const sortedTools = [...aiReplacingCopywritersData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI replacement intelligence"
        title="AI Tools Replacing Copywriters"
        description="A structured view of which AI tools are replacing parts of traditional copywriting workflows across first drafts, SEO content, ad copy, brand voice, editing, and campaign production."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Replacing Copywriters" },
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
        meta={`Last updated: ${aiReplacingCopywritersLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiReplacingCopywritersKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Copywriting replacement snapshot"
        description="AI is replacing the production layer of copywriting faster than the strategic layer. First drafts, outlines, rewrites, SEO briefs, and content variations are highly exposed, while positioning, taste, brand strategy, and final judgment remain human-heavy."
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
        title="AI tools replacing copywriting workflows"
        description="A structured comparison of AI tools by replacement strength, category, momentum, copywriting use case, and where human copywriters still have an advantage."
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
              key: "replacesCopywritingFor",
              label: "Replaces copywriting for",
            },
            {
              key: "whereHumansStillWin",
              label: "Where humans still win",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="use-cases"
        title="Where AI replaces copywriting work"
        description="The replacement effect is strongest where the task is repetitive, format-driven, or draft-heavy. It is weaker where the work depends on positioning, insight, audience judgment, or creative taste."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiReplacingCopywritersUseCases.map((useCase) => (
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
        title="What copywriters and marketing teams should watch"
        description="The main question is not whether AI replaces all copywriters. The better question is which parts of copywriting become automated, which parts become faster, and which human skills become more valuable."
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
              description={tool.whyTeamsUseIt}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Replaces copywriting for
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.replacesCopywritingFor}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Where humans still win
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.whereHumansStillWin}
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
        title={aiReplacingCopywritersMethodology.title}
        description={aiReplacingCopywritersMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It
          describes workflow substitution inside copywriting and marketing work,
          not verified labor-market displacement or audited employment impact.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect copywriting replacement with AI writing tools, search demand, and broader AI disruption patterns."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
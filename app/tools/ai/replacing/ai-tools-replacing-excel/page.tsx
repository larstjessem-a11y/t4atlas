import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiReplacingExcelData,
  aiReplacingExcelKeyFindings,
  aiReplacingExcelLastUpdated,
  aiReplacingExcelMethodology,
  aiReplacingExcelUseCases,
} from "@/data/aiStats/aiReplacingExcel";

export const metadata: Metadata = {
  title: "AI Tools Replacing Excel | T4 Atlas",
  description:
    "Explore which AI tools are replacing parts of Excel and spreadsheet workflows, including Copilot, ChatGPT, Gemini, Airtable AI, Rows, Power BI Copilot, and Zapier AI.",
};

const relatedPages = [
  {
    title: "Typical AI Stack for Startups",
    href: "/tools/ai/workflows/typical-ai-stack-for-startups",
    description:
      "See how startups combine AI tools across research, coding, workspace, meetings, marketing, sales, and operations.",
    label: "Workflow",
  },
  {
    title: "Best AI Workspace Tools",
    href: "/tools/ai/best-ai-workspace-tools",
    description:
      "Compare AI tools for workspace productivity, documents, research, meetings, and daily work.",
    label: "Workspace",
  },
  {
    title: "Most Adopted AI Workflows",
    href: "/tools/ai/workflows/most-adopted-ai-workflows",
    description:
      "Explore the AI workflows organizations adopt across writing, coding, meetings, research, operations, and knowledge management.",
    label: "Workflow",
  },
];

export default function AiToolsReplacingExcelPage() {
  const sortedTools = [...aiReplacingExcelData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI replacement intelligence"
        title="AI Tools Replacing Excel"
        description="A structured view of which AI tools are replacing parts of Excel and spreadsheet workflows across formulas, data cleanup, dashboards, operational trackers, automation, and business analysis."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Replacing Excel" },
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
        meta={`Last updated: ${aiReplacingExcelLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiReplacingExcelKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Excel replacement snapshot"
        description="AI is not replacing Excel in one clean jump. It is replacing spreadsheet assistance, formula support, repetitive data work, operational trackers, and some reporting workflows while Excel remains strong for modeling, finance, and flexible analysis."
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
        title="AI tools replacing Excel workflows"
        description="A structured comparison of AI tools by replacement strength, category, momentum, spreadsheet use case, and where Excel still remains stronger."
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
              key: "replacesExcelFor",
              label: "Replaces Excel for",
            },
            {
              key: "whereExcelStillWins",
              label: "Where Excel still wins",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="use-cases"
        title="Where AI replaces Excel work"
        description="Excel replacement is best understood by workflow. AI tools are strongest when they reduce repetitive spreadsheet support work or move spreadsheet-like tasks into structured, automated systems."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiReplacingExcelUseCases.map((useCase) => (
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
        title="What spreadsheet-heavy teams should watch"
        description="The most important shift is not simply Excel versus AI. It is the movement from isolated spreadsheets toward AI-assisted analysis, governed dashboards, structured databases, and automated workflows."
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
                  Replaces Excel for
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.replacesExcelFor}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Where Excel still wins
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.whereExcelStillWins}
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
        title={aiReplacingExcelMethodology.title}
        description={aiReplacingExcelMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It
          describes workflow substitution inside spreadsheet-heavy work, not
          audited spreadsheet software market share or verified enterprise
          replacement rates.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect spreadsheet replacement with workflow adoption, startup AI stacks, and workspace productivity tools."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
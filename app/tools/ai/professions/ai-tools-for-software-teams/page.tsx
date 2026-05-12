import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  softwareTeamsAiToolsData,
  softwareTeamsAiToolsKeyFindings,
  softwareTeamsAiToolsLastUpdated,
  softwareTeamsAiToolsMethodology,
  softwareTeamsAiWorkflowStages,
} from "@/data/aiStats/softwareTeamsAiTools";

export const metadata: Metadata = {
  title: "Most Used AI Tools for Software Teams | T4 Atlas",
  description:
    "Explore the most used AI tools for software teams by workflow, adoption level, category, momentum score, and engineering use case.",
};

const relatedPages = [
  {
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Compare AI tools by growth drivers, momentum signals, and workflow expansion.",
    label: "Growth",
  },
  {
    title: "Best AI Tools for Productivity",
    href: "/tools/ai/best-ai-tools-for-productivity",
    description:
      "Explore AI tools for productivity, planning, writing, research, and daily work.",
    label: "Productivity",
  },
  {
    title: "Best AI Tools for Research",
    href: "/tools/ai/best-ai-tools-for-research",
    description:
      "Compare AI research tools for source discovery, summarization, and knowledge workflows.",
    label: "Research",
  },
];

export default function AiToolsForSoftwareTeamsPage() {
  const sortedTools = [...softwareTeamsAiToolsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI profession intelligence"
        title="Most Used AI Tools for Software Teams"
        description="A structured view of the AI tools software teams use across coding, research, documentation, codebase understanding, planning, and engineering workflow coordination."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Software Teams" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Tool table",
            href: "#tool-table",
            variant: "secondary",
          },
          {
            label: "Workflow stages",
            href: "#workflow-stages",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${softwareTeamsAiToolsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {softwareTeamsAiToolsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Software team AI adoption snapshot"
        description="Software teams tend to adopt AI first where it fits existing workflows: code completion, debugging, research, documentation, and planning. The highest-value tools are usually the ones that reduce friction inside existing engineering systems."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.category}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.bestFor}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="tool-table"
        title="Most used AI tools for software teams"
        description="A structured comparison of AI tools by software-team use case, adoption level, workflow role, and limitations."
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
              key: "adoptionLevel",
              label: "Adoption",
              render: (tool) => (
                <span className="capitalize">{tool.adoptionLevel}</span>
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
              key: "bestFor",
              label: "Best for",
            },
            {
              key: "workflowRole",
              label: "Workflow role",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="workflow-stages"
        title="AI workflow stages for software teams"
        description="AI adoption is strongest when each tool has a clear role in the engineering workflow rather than being treated as a generic chatbot."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {softwareTeamsAiWorkflowStages.map((stage) => (
            <IntelligenceCard
              key={stage.stage}
              eyebrow="Workflow stage"
              title={stage.stage}
              description={stage.description}
            >
              <div className="flex flex-wrap gap-2">
                {stage.tools.map((tool) => (
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
        title="What software teams should watch"
        description="AI coding tools can create real leverage, but the main risk is confusing speed with correctness. The best teams combine AI acceleration with review, testing, architecture discipline, and security controls."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.category} · ${tool.adoptionLevel}`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyTeamsUseIt}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Risk or limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {tool.risksOrLimitations}
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
        title={softwareTeamsAiToolsMethodology.title}
        description={softwareTeamsAiToolsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. Adoption
          levels are based on public visibility, workflow relevance, ecosystem
          presence, and editorial analysis rather than audited usage data.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect software-team adoption with broader AI growth, productivity, and research-tool trends."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
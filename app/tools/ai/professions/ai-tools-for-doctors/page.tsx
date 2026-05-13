import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  doctorsAiToolsData,
  doctorsAiToolsKeyFindings,
  doctorsAiToolsLastUpdated,
  doctorsAiToolsMethodology,
  doctorsAiWorkflowStages,
} from "@/data/aiStats/doctorsAiTools";

export const metadata: Metadata = {
  title: "Most Used AI Tools for Doctors | T4 Atlas",
  description:
    "Explore AI tools used by doctors across clinical documentation, medical search, patient communication, research, and practice operations.",
};

const relatedPages = [
  {
    title: "Best AI Tools for Research",
    href: "/tools/ai/best-ai-tools-for-research",
    description:
      "Compare AI research tools for source discovery, summarization, and knowledge workflows.",
    label: "Research",
  },
  {
    title: "Best AI Workspace Tools",
    href: "/tools/ai/best-ai-workspace-tools",
    description:
      "Compare AI tools for workspace productivity, documents, meetings, research, and daily work.",
    label: "Workspace",
  },
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
    label: "Statistics",
  },
];

export default function AiToolsForDoctorsPage() {
  const sortedTools = [...doctorsAiToolsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI profession intelligence"
        title="Most Used AI Tools for Doctors"
        description="A structured view of AI tools doctors use across clinical documentation, medical reference, patient communication, research, and practice operations."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Doctors" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Tool table",
            href: "#tool-table",
            variant: "secondary",
          },
          {
            label: "Clinical workflows",
            href: "#workflow-stages",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${doctorsAiToolsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {doctorsAiToolsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Doctor AI adoption snapshot"
        description="For doctors, the most valuable AI use cases are often not flashy diagnostic tools, but documentation, communication, medical reference, research support, and administrative workflow automation."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.category.replace(/-/g, " ")}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.bestFor}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="tool-table"
        title="Most used AI tools for doctors"
        description="A structured comparison of AI tools by clinical or operational category, adoption level, workflow role, and limitation."
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
        title="AI workflow stages for doctors"
        description="The safest and most useful medical AI workflows usually keep the clinician in control while reducing documentation, search, communication, and operational friction."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {doctorsAiWorkflowStages.map((stage) => (
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
        title="What doctors should watch"
        description="Medical AI is high-leverage but high-risk. The best near-term uses are often clinician-supervised workflows that reduce administrative burden while preserving professional judgment."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.category.replace(/-/g, " ")} · ${
                tool.adoptionLevel
              }`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyDoctorsUseIt}
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
        title={doctorsAiToolsMethodology.title}
        description={doctorsAiToolsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview, not
          medical advice or a clinical endorsement. AI tools used in healthcare
          require clinician review, privacy safeguards, consent where relevant,
          local regulatory compliance, and appropriate governance.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect medical AI adoption with research workflows, workspace tools, and broader AI market signals."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
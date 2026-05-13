import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostAdoptedAiWorkflowsData,
  mostAdoptedAiWorkflowsKeyFindings,
  mostAdoptedAiWorkflowsLastUpdated,
  mostAdoptedAiWorkflowsMethodology,
  mostAdoptedAiWorkflowStages,
} from "@/data/aiStats/mostAdoptedAiWorkflows";

export const metadata: Metadata = {
  title: "Most Adopted AI Workflows | T4 Atlas",
  description:
    "Explore the most adopted AI workflows across writing, coding, meetings, research, healthcare, marketing, operations, and knowledge management.",
};

const relatedPages = [
  {
    title: "Typical AI Stack for Startups",
    href: "/tools/ai/workflows/typical-ai-stack-for-startups",
    description:
      "See how startups can combine AI tools across research, coding, workspace, meetings, marketing, sales, and operations.",
    label: "Workflow",
  },
  {
    title: "Most Used AI Tools for Software Teams",
    href: "/tools/ai/professions/ai-tools-for-software-teams",
    description:
      "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
    label: "Profession",
  },
  {
    title: "Most Used AI Tools for Doctors",
    href: "/tools/ai/professions/ai-tools-for-doctors",
    description:
      "See how doctors use AI tools across documentation, medical search, patient communication, research, and practice operations.",
    label: "Profession",
  },
];

export default function MostAdoptedAiWorkflowsPage() {
  const sortedWorkflows = [...mostAdoptedAiWorkflowsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI workflow intelligence"
        title="Most Adopted AI Workflows"
        description="A structured view of the AI workflows organizations are adopting across writing, coding, meetings, research, healthcare, marketing, operations, and knowledge management."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Adopted AI Workflows" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Workflow table",
            href: "#workflow-table",
            variant: "secondary",
          },
          {
            label: "Adoption stages",
            href: "#adoption-stages",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostAdoptedAiWorkflowsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostAdoptedAiWorkflowsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI workflow adoption snapshot"
        description="AI adoption is strongest where the workflow is frequent, text-heavy, repetitive, or embedded in existing digital systems. Writing, coding, research, meetings, and documentation are currently among the highest-friction areas being reshaped by AI."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedWorkflows.slice(0, 4).map((workflow) => (
            <IntelligenceCard
              key={workflow.slug}
              eyebrow={workflow.category.replace(/-/g, " ")}
              title={workflow.workflow}
              score={workflow.momentumScore}
              description={workflow.businessImpact}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="workflow-table"
        title="Most adopted AI workflows table"
        description="A structured comparison of AI workflows by category, adoption level, momentum score, primary tools, business impact, and limitations."
      >
        <IntelligenceTable
          data={sortedWorkflows}
          columns={[
            {
              key: "workflow",
              label: "Workflow",
              render: (item) => (
                <span className="font-semibold text-white">
                  {item.workflow}
                </span>
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
              key: "adoptionLevel",
              label: "Adoption",
              render: (item) => (
                <span className="capitalize">{item.adoptionLevel}</span>
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
              key: "primaryTools",
              label: "Primary tools",
              render: (item) => item.primaryTools.join(", "),
            },
            {
              key: "businessImpact",
              label: "Business impact",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="adoption-stages"
        title="AI workflow adoption stages"
        description="AI workflows tend to spread through recognizable clusters: communication, engineering, meetings, operations, healthcare, and knowledge management."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mostAdoptedAiWorkflowStages.map((stage) => (
            <IntelligenceCard
              key={stage.stage}
              eyebrow="Adoption stage"
              title={stage.stage}
              description={stage.description}
            >
              <div className="flex flex-wrap gap-2">
                {stage.workflows.map((workflow) => (
                  <span
                    key={workflow}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {workflow}
                  </span>
                ))}
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="What organizations should watch"
        description="Adoption is not only about using AI tools. The important question is which workflows become faster, cheaper, more reliable, or more scalable when AI is embedded into the way work actually happens."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedWorkflows.map((workflow) => (
            <IntelligenceCard
              key={workflow.slug}
              eyebrow={`${workflow.category.replace(/-/g, " ")} · ${
                workflow.adoptionLevel
              }`}
              title={workflow.workflow}
              score={workflow.momentumScore}
              description={workflow.whyItIsAdopted}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Business impact
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {workflow.businessImpact}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Risk or limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {workflow.risksOrLimitations}
                </p>
              </div>

              {workflow.relatedPage ? (
                <Link
                  href={workflow.relatedPage}
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
        title={mostAdoptedAiWorkflowsMethodology.title}
        description={mostAdoptedAiWorkflowsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It
          prioritizes practical workflow relevance, adoption visibility, and
          operational impact rather than claiming precise audited usage
          percentages.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI workflow adoption with startup stacks, professional use cases, and broader AI market signals."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
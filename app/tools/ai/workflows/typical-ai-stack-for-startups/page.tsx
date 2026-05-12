import type { Metadata } from "next";
import Link from "next/link";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  startupAiStackData,
  startupAiStackKeyFindings,
  startupAiStackLastUpdated,
  startupAiStackLayers,
  startupAiStackMethodology,
} from "@/data/aiStats/startupAiStack";

export const metadata: Metadata = {
  title: "Typical AI Stack for Startups | T4 Atlas",
  description:
    "Explore a typical AI stack for startups across core assistants, research, coding, workspace, meetings, marketing, sales, support, and operations.",
};

const relatedPages = [
  {
    title: "Most Used AI Tools for Software Teams",
    href: "/tools/ai/professions/ai-tools-for-software-teams",
    description:
      "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
    label: "Profession",
  },
  {
    title: "Best AI Workspace Tools",
    href: "/tools/ai/best-ai-workspace-tools",
    description:
      "Compare AI tools for workspace productivity, documents, meetings, research, and daily work.",
    label: "Workspace",
  },
  {
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Compare AI tools by growth drivers, momentum signals, and workflow expansion.",
    label: "Growth",
  },
];

export default function TypicalAiStackForStartupsPage() {
  const sortedTools = [...startupAiStackData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI workflow intelligence"
        title="Typical AI Stack for Startups"
        description="A structured view of how startups can combine AI tools across core assistance, research, coding, workspace, meetings, marketing, sales, support, and lightweight operations."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Startup AI Stack" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Stack table",
            href: "#stack-table",
            variant: "secondary",
          },
          {
            label: "Stack layers",
            href: "#stack-layers",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${startupAiStackLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {startupAiStackKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Startup AI stack snapshot"
        description="Startups usually need broad leverage before specialization. The strongest early AI stack often combines a general assistant, research layer, coding support, workspace knowledge, and lightweight automation."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedTools.slice(0, 4).map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={tool.layer.replace(/-/g, " ")}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.bestFor}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="stack-table"
        title="Typical AI stack for startups"
        description="A structured comparison of AI tools by stack layer, adoption priority, momentum score, role in the startup stack, and key limitation."
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
              key: "layer",
              label: "Layer",
              render: (tool) => (
                <span className="capitalize">
                  {tool.layer.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "adoptionPriority",
              label: "Priority",
              render: (tool) => (
                <span className="capitalize">{tool.adoptionPriority}</span>
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
              key: "stackRole",
              label: "Stack role",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="stack-layers"
        title="Startup AI stack layers"
        description="A useful AI stack is not just a list of tools. Each layer should have a clear job inside the company operating system."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {startupAiStackLayers.map((layer) => (
            <IntelligenceCard
              key={layer.layer}
              eyebrow="Stack layer"
              title={layer.layer}
              description={layer.description}
            >
              <div className="flex flex-wrap gap-2">
                {layer.tools.map((tool) => (
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
        title="How startups should choose AI tools"
        description="The mistake is buying too many AI tools before the startup knows which workflows actually matter. Early teams should usually start broad, then specialize once repeated bottlenecks become obvious."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedTools.map((tool) => (
            <IntelligenceCard
              key={tool.slug}
              eyebrow={`${tool.layer.replace(/-/g, " ")} · ${
                tool.adoptionPriority
              }`}
              title={tool.name}
              score={tool.momentumScore}
              description={tool.whyStartupsUseIt}
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
        title={startupAiStackMethodology.title}
        description={startupAiStackMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional startup intelligence guide. It
          prioritizes practical workflow fit over a perfect universal ranking,
          because the right AI stack depends heavily on stage, team size, product
          type, and go-to-market model.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect startup AI stacks with software-team adoption, workspace tools, and AI growth trends."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceSubnav from "@/components/intelligence/IntelligenceSubnav";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  bestAiCodingAssistantsCategories,
  bestAiCodingAssistantsData,
  bestAiCodingAssistantsKeyFindings,
  bestAiCodingAssistantsLastUpdated,
  bestAiCodingAssistantsMethodology,
} from "@/data/aiStats/bestAiCodingAssistants";

export const metadata: Metadata = {
  title: "Best AI Coding Assistants | Developer Tools Compared",
  description:
    "Explore the best AI coding assistants for autocomplete, debugging, repository reasoning, architecture, code explanation, enterprise workflows, and developer productivity.",
};

const relatedPages = [
  {
    title: "AI Coding Hub",
    href: "/tools/ai/coding",
    description:
      "Explore AI coding tools, AI IDEs, coding assistants, developer workflows, AI coding market share, and software-team adoption.",
    label: "Coding hub",
  },
  {
    title: "Best AI IDEs",
    href: "/tools/ai/best-ai-ides",
    description:
      "Compare AI-native IDEs and coding environments for software development, prototyping, refactoring, and codebase workflows.",
    label: "AI IDEs",
  },
  {
    title: "Cursor vs GitHub Copilot",
    href: "/tools/ai/cursor-vs-github-copilot",
    description:
      "Compare Cursor and GitHub Copilot across AI-native coding, autocomplete, codebase awareness, multi-file editing, and enterprise adoption.",
    label: "Comparison",
  },
];

export default function BestAiCodingAssistantsPage() {
  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI coding intelligence"
        title="Best AI Coding Assistants"
        description="Compare AI coding assistants for autocomplete, debugging, code explanation, repository reasoning, architecture support, enterprise workflows, and software-team productivity."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Coding", href: "/tools/ai/coding" },
          { label: "Best AI Coding Assistants" },
        ]}
        actions={[
          { label: "Rankings", href: "#rankings" },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
          {
            label: "Related",
            href: "#related-intelligence",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${bestAiCodingAssistantsLastUpdated}`}
      />

      <IntelligenceSubnav
        items={[
          { label: "Key findings", href: "#key-findings" },
          { label: "Rankings", href: "#rankings" },
          { label: "Categories", href: "#categories" },
          { label: "Methodology", href: "#methodology" },
          { label: "Related", href: "#related-intelligence" },
        ]}
      />

      <div
        id="key-findings"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {bestAiCodingAssistantsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        id="rankings"
        eyebrow="Coding assistant rankings"
        title="Best AI coding assistants"
        description="AI coding assistants now span IDE copilots, AI-native editors, general reasoning assistants, cloud development assistants, and enterprise coding tools."
      >
        <IntelligenceTable
          data={bestAiCodingAssistantsData}
          columns={[
            {
              key: "tool",
              label: "Tool",
              render: (item) => (
                <span className="font-semibold text-white">{item.tool}</span>
              ),
            },
            {
              key: "positioning",
              label: "Positioning",
            },
            {
              key: "strengths",
              label: "Strengths",
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
        eyebrow="Market categories"
        title="AI coding assistant categories"
        description="The coding assistant market is no longer just autocomplete. Different tools now support different parts of the software-development lifecycle."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {bestAiCodingAssistantsCategories.map((item) => (
            <IntelligenceCard
              key={item.title}
              eyebrow="Category"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Workflow analysis"
        title="How to choose an AI coding assistant"
        description="The best AI coding assistant depends on whether your workflow prioritizes autocomplete, repository reasoning, debugging, architecture, cloud integration, or enterprise governance."
      >
        <div className="space-y-4 text-sm leading-7 text-slate-300 md:text-base">
          <p>
            GitHub Copilot remains one of the strongest default choices for
            broad developer productivity because it fits naturally inside
            existing IDE workflows. Cursor is stronger when developers want a
            more AI-native environment built around chat, codebase reasoning,
            and multi-file editing.
          </p>

          <p>
            Claude and ChatGPT remain important even when teams use dedicated
            coding tools. They are often used for explanation, architecture,
            debugging, documentation, and reasoning through unfamiliar systems.
          </p>

          <p>
            For enterprise teams, the evaluation should include more than
            productivity. Security, repository access, governance, auditability,
            cloud integration, and developer adoption all matter.
          </p>
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={bestAiCodingAssistantsMethodology.title}
        description={bestAiCodingAssistantsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is a structured editorial comparison. It does not provide
          formal benchmarks, procurement advice, or verified market-share data.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        id="related-intelligence"
        eyebrow="Related intelligence"
        title="Related AI coding pages"
        description="Use these pages to connect coding assistants with AI IDEs, software-team workflows, and AI coding market share."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
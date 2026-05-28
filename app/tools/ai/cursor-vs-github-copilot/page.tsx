import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceSubnav from "@/components/intelligence/IntelligenceSubnav";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  cursorVsGithubCopilotData,
  cursorVsGithubCopilotKeyFindings,
  cursorVsGithubCopilotLastUpdated,
  cursorVsGithubCopilotMethodology,
  cursorVsGithubCopilotUseCases,
} from "@/data/aiStats/cursorVsGithubCopilot";

export const metadata: Metadata = {
  title: "Cursor vs GitHub Copilot | AI Coding Tools Compared",
  description:
    "Compare Cursor and GitHub Copilot across AI-native coding, autocomplete, codebase awareness, multi-file editing, enterprise adoption, and developer workflows.",
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
    title: "AI Coding Market Share",
    href: "/tools/ai/statistics/ai-coding-market-share",
    description:
      "Explore AI coding market share signals across IDE copilots, AI-native editors, general assistants, codebase tools, and developer workflows.",
    label: "Statistics",
  },
  {
    title: "Most Used AI Tools for Software Teams",
    href: "/tools/ai/professions/ai-tools-for-software-teams",
    description:
      "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
    label: "Software teams",
  },
];

export default function CursorVsGithubCopilotPage() {
  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI coding comparison"
        title="Cursor vs GitHub Copilot"
        description="A structured comparison of Cursor and GitHub Copilot across AI-native coding, autocomplete, codebase awareness, multi-file editing, chat workflows, enterprise adoption, and developer productivity."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Coding", href: "/tools/ai/coding" },
          { label: "Cursor vs GitHub Copilot" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Comparison table",
            href: "#comparison-table",
            variant: "secondary",
          },
          {
            label: "Use cases",
            href: "#use-cases",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${cursorVsGithubCopilotLastUpdated}`}
      />

      <IntelligenceSubnav
        items={[
          { label: "Key findings", href: "#key-findings" },
          { label: "Table", href: "#comparison-table" },
          { label: "Use cases", href: "#use-cases" },
          { label: "Verdict", href: "#verdict" },
          { label: "Related", href: "#related-intelligence" },
        ]}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cursorVsGithubCopilotKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Cursor vs Copilot snapshot"
        description="Cursor and GitHub Copilot are both AI coding tools, but they represent different product philosophies. Copilot is optimized for broad, low-friction adoption inside existing IDEs. Cursor is optimized for AI-native development with deeper codebase interaction."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <IntelligenceCard
            eyebrow="Cursor"
            title="AI-native coding environment"
            description="Cursor is best understood as an AI-native editor for developers who want chat, codebase context, multi-file editing, and deeper AI-assisted workflows built into the coding environment."
          />

          <IntelligenceCard
            eyebrow="GitHub Copilot"
            title="Enterprise-ready coding assistant"
            description="GitHub Copilot is best understood as a mature AI coding assistant that fits into existing IDEs and developer workflows with very low adoption friction."
          />
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="comparison-table"
        title="Cursor vs GitHub Copilot comparison table"
        description="A structured comparison of Cursor and GitHub Copilot by workflow positioning, codebase awareness, IDE approach, autocomplete, multi-file editing, and enterprise fit."
      >
        <IntelligenceTable
          data={cursorVsGithubCopilotData}
          columns={[
            {
              key: "category",
              label: "Category",
              render: (item) => (
                <span className="font-semibold text-white">
                  {item.category}
                </span>
              ),
            },
            {
              key: "cursor",
              label: "Cursor",
            },
            {
              key: "copilot",
              label: "GitHub Copilot",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="use-cases"
        eyebrow="Use cases"
        title="When to use Cursor vs GitHub Copilot"
        description="The best choice depends on whether your team wants a low-friction assistant inside existing tools or a more AI-native coding environment."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {cursorVsGithubCopilotUseCases.map((item) => (
            <IntelligenceCard
              key={item.title}
              eyebrow="Use case"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="verdict"
        eyebrow="Verdict"
        title="Which is better: Cursor or GitHub Copilot?"
        description="The short answer: GitHub Copilot is usually better for broad enterprise adoption and low-friction autocomplete. Cursor is usually better for developers who want a deeper AI-native coding workflow."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <IntelligenceCard
            eyebrow="Choose Cursor if"
            title="You want AI-native development"
            description="Cursor is a stronger fit if your workflow depends on repository-aware chat, larger refactors, multi-file edits, codebase reasoning, and a development environment designed around AI from the start."
          />

          <IntelligenceCard
            eyebrow="Choose GitHub Copilot if"
            title="You want low-friction adoption"
            description="GitHub Copilot is a stronger fit if your team already uses GitHub and established IDEs, wants mature autocomplete, and needs enterprise familiarity and broad developer adoption."
          />
        </div>

        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300 md:p-5 md:text-base">
          <p>
            The most likely future is not one winner replacing the other. Many
            software teams will use Copilot-style assistance for everyday
            autocomplete while adopting Cursor-style workflows for deeper
            codebase reasoning, refactoring, and AI-native development.
          </p>
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={cursorVsGithubCopilotMethodology.title}
        description={cursorVsGithubCopilotMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a structured comparison for developer
          workflows. It is not a formal benchmark, vendor audit, or enterprise
          procurement recommendation.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        id="related-intelligence"
        eyebrow="Related intelligence"
        title="Related AI coding intelligence pages"
        description="Use these pages to connect Cursor and GitHub Copilot with AI coding market share, software-team workflows, and developer tool adoption."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
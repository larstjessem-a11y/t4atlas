import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceSubnav from "@/components/intelligence/IntelligenceSubnav";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";

import {
  bestAiIdesCategories,
  bestAiIdesData,
  bestAiIdesKeyFindings,
  bestAiIdesLastUpdated,
  bestAiIdesMethodology,
} from "@/data/aiStats/bestAiIdes";

export const metadata: Metadata = {
  title: "Best AI IDEs | AI-Native Editors & Coding Environments",
  description:
    "Explore the best AI IDEs and AI-native coding environments for software development, repository-aware coding, autocomplete, debugging, and developer productivity.",
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
    title: "Cursor vs GitHub Copilot",
    href: "/tools/ai/cursor-vs-github-copilot",
    description:
      "Compare Cursor and GitHub Copilot across AI-native coding, autocomplete, codebase awareness, multi-file editing, and enterprise adoption.",
    label: "Comparison",
  },
  {
    title: "AI Coding Market Share",
    href: "/tools/ai/statistics/ai-coding-market-share",
    description:
      "Explore AI coding market share signals across IDE copilots, AI-native editors, general assistants, codebase tools, and developer workflows.",
    label: "Statistics",
  },
];

export const dynamic = "force-static";

export default function BestAiIdesPage() {
  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI coding intelligence"
        title="Best AI IDEs"
        description="Explore the leading AI IDEs and AI-native coding environments for repository-aware development, autocomplete, debugging, refactoring, software-team workflows, and AI-assisted software engineering."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Coding", href: "/tools/ai/coding" },
          { label: "Best AI IDEs" },
        ]}
        actions={[
          {
            label: "Best AI IDEs",
            href: "#rankings",
          },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
          {
            label: "Methodology",
            href: "#methodology",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${bestAiIdesLastUpdated}`}
      />

      <IntelligenceSubnav
        items={[
          { label: "Rankings", href: "#rankings" },
          { label: "Key findings", href: "#key-findings" },
          { label: "Categories", href: "#categories" },
          { label: "Methodology", href: "#methodology" },
          { label: "Related", href: "#related-intelligence" },
        ]}
      />

      <div
        id="key-findings"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {bestAiIdesKeyFindings.map((item) => (
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
        eyebrow="AI IDE rankings"
        title="Best AI IDEs and AI-native coding environments"
        description="AI IDEs combine coding assistants, repository awareness, chat workflows, debugging support, and AI-native editing into integrated software-development environments."
      >
        <IntelligenceTable
          data={bestAiIdesData}
          columns={[
            {
              key: "tool",
              label: "Tool",
              render: (item) => (
                <span className="font-semibold text-white">
                  {item.tool}
                </span>
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
        title="The main categories of AI IDEs"
        description="The AI coding ecosystem is fragmenting into multiple categories rather than converging on a single winner."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {bestAiIdesCategories.map((item) => (
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
        eyebrow="Positioning"
        title="How the AI IDE market is evolving"
        description="The market is moving from autocomplete toward AI-native development workflows with repository context, conversational editing, multi-file changes, and integrated reasoning."
      >
        <div className="space-y-4 text-sm leading-7 text-slate-300 md:text-base">
          <p>
            Traditional coding assistants focused mainly on autocomplete.
            Modern AI IDEs increasingly focus on broader developer workflows:
            planning, repository reasoning, architecture support, debugging,
            documentation, onboarding, and coordinated code changes.
          </p>

          <p>
            Cursor accelerated interest in AI-native editors, while GitHub
            Copilot demonstrated how deeply AI can integrate into mainstream
            software development. The market now includes AI-first editors,
            cloud-native environments, enterprise copilots, and model-driven
            development systems.
          </p>

          <p>
            The long-term winners may not be defined by autocomplete quality
            alone. Workflow integration, enterprise trust, repository awareness,
            governance, and ecosystem integration are becoming equally
            important.
          </p>
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={bestAiIdesMethodology.title}
        description={bestAiIdesMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page combines public positioning, workflow capabilities,
          ecosystem maturity, AI-native development features, enterprise
          adoption patterns, and developer popularity signals.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        id="related-intelligence"
        eyebrow="Related intelligence"
        title="Related AI coding pages"
        description="Use these pages to connect AI IDEs with coding assistants, software-team workflows, AI APIs, and coding market share."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
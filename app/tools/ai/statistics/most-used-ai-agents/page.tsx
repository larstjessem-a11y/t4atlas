import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostUsedAiAgentsCategories,
  mostUsedAiAgentsData,
  mostUsedAiAgentsKeyFindings,
  mostUsedAiAgentsMethodology,
  mostUsedAiAgentsLastUpdated,
} from "@/data/aiStats/mostUsedAiAgents";

export const metadata: Metadata = {
  title: "Most Used AI Agents (2026) | T4 Atlas",
  description:
    "Explore the most used AI agents across general assistants, enterprise productivity, AI search, coding agents, computer-use agents, and agentic workflows.",
};

const relatedPages = [
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, visibility, traffic rankings, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "AI Browser Market Share",
    href: "/tools/ai/statistics/ai-browser-market-share",
    description:
      "Compare AI browser positioning across mainstream browsers, AI-native browsers, enterprise browsers, and search-agent browsers.",
    label: "Browsers",
  },
  {
    title: "Most Used AI Coding Models",
    href: "/tools/ai/statistics/most-used-ai-coding-models",
    description:
      "Compare influential AI coding models across commercial and open-source developer ecosystems.",
    label: "Coding models",
  },
];

export default function MostUsedAiAgentsPage() {
  const sortedAgents = [...mostUsedAiAgentsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI agent statistics"
        title="Most Used AI Agents"
        description="A structured overview of the most visible AI agents across general assistants, enterprise productivity, AI search, coding, computer-use, and multi-step task workflows."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Used AI Agents" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "View data table",
            href: "#data-table",
            variant: "secondary",
          },
          {
            label: "Methodology",
            href: "#methodology",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostUsedAiAgentsLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostUsedAiAgentsKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI agent momentum snapshot"
        description="AI agents are moving beyond chat toward research, coding, enterprise productivity, browsing, and multi-step execution. The cards below show the highest-scoring agents in this T4 Atlas editorial ranking."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedAgents.slice(0, 4).map((agent) => (
            <IntelligenceCard
              key={agent.agent}
              eyebrow={agent.category}
              title={agent.agent}
              score={agent.momentumScore}
              description="Momentum score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="Most used AI agents table"
        description="A structured comparison of leading AI agents by category, primary use case, adoption signal, and T4 Atlas momentum score."
      >
        <IntelligenceTable
          data={sortedAgents}
          columns={[
            {
              key: "agent",
              label: "Agent",
              render: (item) => (
                <span className="font-semibold text-white">{item.agent}</span>
              ),
            },
            {
              key: "category",
              label: "Category",
            },
            {
              key: "primaryUseCase",
              label: "Primary use case",
            },
            {
              key: "adoptionSignal",
              label: "Adoption signal",
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
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="AI agent categories"
        description="The AI-agent market is still early. These categories help separate broad assistants from more specialized agents for enterprise productivity, coding, research, and browsing."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mostUsedAiAgentsCategories.map((category) => (
            <IntelligenceCard
              key={category.title}
              eyebrow="Category"
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="What the rankings mean"
        description="AI-agent adoption is not yet measured by one clean public metric. Distribution, workflow relevance, enterprise integration, developer mindshare, and strategic momentum all matter."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedAgents.map((agent) => (
            <IntelligenceCard
              key={agent.agent}
              eyebrow={agent.category}
              title={agent.agent}
              score={agent.momentumScore}
              description={agent.primaryUseCase}
            >
              <p className="text-xs text-slate-400">
                Signal: {agent.adoptionSignal}
              </p>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={mostUsedAiAgentsMethodology.title}
        description={mostUsedAiAgentsMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is a structured editorial ranking. It should not be
          interpreted as official active-user market share, revenue share, or
          verified product telemetry.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI statistics"
        description="Use these pages to connect AI agents with market share, AI browsers, coding models, and broader AI adoption signals."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
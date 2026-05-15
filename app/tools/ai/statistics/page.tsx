import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";

export const metadata: Metadata = {
  title: "AI Statistics Hub | Market Share, Search Demand & Growth",
  description:
    "Explore AI statistics, market-share signals, search demand, growth trends, and AI tool momentum data from T4 Atlas.",
};

const statisticsPages = [
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "Most Searched AI Tools",
    href: "/tools/ai/most-searched-ai-tools",
    description:
      "Explore which AI tools attract the strongest search demand and why users search for them.",
    label: "Search demand",
  },
  {
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Track fast-growing AI tools by growth drivers, workflow relevance, and momentum score.",
    label: "Growth trends",
  },
];

const workflowPages = [
  {
    title: "Best AI Workspace Tools",
    href: "/tools/ai/best-ai-workspace-tools",
    description:
      "Compare AI tools for workspace productivity, documents, research, meetings, and daily work.",
    label: "Workflow",
  },
  {
    title: "Best AI Tools for Productivity",
    href: "/tools/ai/best-ai-tools-for-productivity",
    description:
      "Explore AI tools for daily productivity, task support, writing, planning, and work automation.",
    label: "Productivity",
  },
  {
    title: "ChatGPT vs Claude",
    href: "/tools/ai/chatgpt-vs-claude",
    description:
      "Compare two leading AI assistants for writing, coding, reasoning, documents, and productivity.",
    label: "Comparison",
  },
{
  title: "Most Used AI Tools for Software Teams",
  href: "/tools/ai/professions/ai-tools-for-software-teams",
  description:
    "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
  label: "Profession",
},
{
  title: "Typical AI Stack for Startups",
  href: "/tools/ai/workflows/typical-ai-stack-for-startups",
  description:
    "See how startups can combine AI tools across research, coding, workspace, meetings, marketing, sales, and operations.",
  label: "Workflow",
},
{
  title: "Most Used AI Tools for Doctors",
  href: "/tools/ai/professions/ai-tools-for-doctors",
  description:
    "See how doctors use AI tools across documentation, medical search, patient communication, research, and practice operations.",
  label: "Profession",
},
{
  title: "Most Adopted AI Workflows",
  href: "/tools/ai/workflows/most-adopted-ai-workflows",
  description:
    "Explore the AI workflows organizations adopt across writing, coding, meetings, research, healthcare, marketing, operations, and knowledge management.",
  label: "Workflow",
},
{
  title: "AI Tools Replacing Google Search",
  href: "/tools/ai/replacing/ai-tools-replacing-google-search",
  description:
    "Explore which AI tools are replacing parts of traditional Google Search behavior across research, explanations, comparisons, and AI-native workflows.",
  label: "Replacement",
},
{
  title: "AI Tools Replacing Copywriters",
  href: "/tools/ai/replacing/ai-tools-replacing-copywriters",
  description:
    "Explore which AI tools are replacing parts of copywriting workflows across drafts, SEO content, ad copy, brand voice, and editing.",
  label: "Replacement",
},
];

export default function AiStatisticsHubPage() {
  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI statistics hub"
        title="AI Statistics Hub"
        description="Explore AI market-share signals, search demand, growth momentum, tool categories, and workflow-level adoption patterns. This hub connects T4 Atlas data pages for tracking how the AI tool ecosystem is evolving."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics" },
        ]}
        actions={[
          {
            label: "Browse statistics",
            href: "#statistics-pages",
          },
          {
            label: "Methodology",
            href: "#methodology",
            variant: "secondary",
          },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <IntelligenceCard
          eyebrow="Signal"
          title="Market share"
          description="Understand which AI tools dominate public visibility, chatbot market-share estimates, and traffic signals."
        />

        <IntelligenceCard
          eyebrow="Signal"
          title="Search demand"
          description="Track which AI tools people search for and what those searches reveal about user intent."
        />

        <IntelligenceCard
          eyebrow="Signal"
          title="Growth momentum"
          description="Compare tools by growth drivers, ecosystem adoption, workflow expansion, and category relevance."
        />
      </div>

      <IntelligenceSection
        id="statistics-pages"
        eyebrow="Core pages"
        title="AI statistics and data pages"
        description="Start with the core AI statistics pages below. Each page uses a consistent methodology and links back into related AI guides, comparisons, and workflow pages."
      >
        <RelatedIntelligencePages pages={statisticsPages} />
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title="How T4 Atlas tracks AI statistics"
      >
        <div className="space-y-4 leading-7 text-slate-300">
          <p>
            AI tool markets are still young, fragmented, and difficult to
            measure with a single metric. T4 Atlas separates market-share
            signals, search demand, traffic visibility, and editorial momentum
            analysis rather than treating them as one number.
          </p>

          <p>
            The goal is not to claim a perfect official ranking. The goal is to
            make the AI tool landscape easier to compare by combining public
            signals, workflow relevance, and category-level interpretation.
          </p>

          <p>
            Market share, traffic, search visibility, and growth momentum can
            point in different directions. That is why the statistics pages
            explain both the data and the limitations behind each ranking.
          </p>
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related guides"
        title="Related AI workflow guides"
        description="Use these pages to connect AI statistics with practical workflow and tool-selection decisions."
      >
        <RelatedIntelligencePages pages={workflowPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
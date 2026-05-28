import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceSubnav from "@/components/intelligence/IntelligenceSubnav";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";

export const metadata: Metadata = {
  title: "AI Coding Hub | AI IDEs, Coding Assistants & Developer Workflows",
  description:
    "Explore AI coding tools, AI IDEs, coding assistants, developer workflows, AI coding market share, and software-team adoption from T4 Atlas.",
};

const featuredCodingPages = [
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
  {
    title: "Most Used AI APIs",
    href: "/tools/ai/statistics/most-used-ai-apis",
    description:
      "Explore widely used AI APIs across frontier models, reasoning APIs, multimodal systems, open-model ecosystems, and enterprise AI infrastructure.",
    label: "APIs",
  },
{
  title: "Cursor vs GitHub Copilot",
  href: "/tools/ai/cursor-vs-github-copilot",
  description:
    "Compare Cursor and GitHub Copilot across AI-native coding, autocomplete, codebase awareness, multi-file editing, and enterprise adoption.",
  label: "Comparison",
},
{
  title: "Best AI IDEs",
  href: "/tools/ai/best-ai-ides",
  description:
    "Compare AI-native IDEs and coding environments for software development, prototyping, refactoring, and codebase workflows.",
  label: "AI IDEs",
},
{
  title: "Best AI Coding Assistants",
  href: "/tools/ai/best-ai-coding-assistants",
  description:
    "Compare AI coding assistants for autocomplete, debugging, repository reasoning, architecture support, and developer productivity.",
  label: "Coding assistants",
},
];


const codingUseCases = [
  {
    title: "Autocomplete and pair programming",
    description:
      "AI copilots help developers write code faster inside existing IDEs with minimal workflow change.",
  },
  {
    title: "AI-native code editing",
    description:
      "Tools such as Cursor move beyond autocomplete toward chat, refactoring, multi-file edits, and codebase-aware development.",
  },
  {
    title: "Debugging and explanation",
    description:
      "General assistants help explain errors, reason through architecture, write scripts, and debug unfamiliar code.",
  },
  {
    title: "Software-team workflows",
    description:
      "AI tools increasingly support documentation, pull requests, tests, onboarding, planning, and internal engineering knowledge.",
  },
];

const relatedPages = [
  {
    title: "Enterprise AI Adoption Statistics",
    href: "/tools/ai/statistics/enterprise-ai-adoption-statistics",
    description:
      "Explore enterprise AI adoption across productivity, software development, customer support, research, marketing, operations, and knowledge management.",
    label: "Enterprise",
  },
  {
    title: "AI Alignment Risk Rankings",
    href: "/tools/ai/risk-intelligence/ai-alignment-risk-rankings",
    description:
      "Compare AI system types by alignment pressure, autonomy risk, transparency, governance maturity, and deployment exposure.",
    label: "Risk",
  },
  {
    title: "Most Used AI Models",
    href: "/tools/ai/statistics/most-used-ai-models",
    description:
      "Explore widely used AI models across frontier assistants, reasoning systems, multimodal models, open-weight models, and enterprise AI.",
    label: "Models",
  },
];

export default function AiCodingHubPage() {
  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI coding intelligence"
        title="AI Coding Hub"
        description="Explore AI coding tools, AI-native IDEs, developer copilots, coding assistants, software-team workflows, AI coding market share, and the infrastructure behind modern AI-assisted software development."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Coding" },
        ]}
        actions={[
          { label: "Featured pages", href: "#featured-pages" },
          {
            label: "Use cases",
            href: "#use-cases",
            variant: "secondary",
          },
          {
            label: "Related intelligence",
            href: "#related-intelligence",
            variant: "secondary",
          },
        ]}
      />

      <IntelligenceSubnav
        items={[
          { label: "Featured", href: "#featured-pages" },
          { label: "Use cases", href: "#use-cases" },
          { label: "Related", href: "#related-intelligence" },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <IntelligenceCard
          eyebrow="Layer"
          title="AI IDEs"
          description="AI-native coding environments built around chat, codebase context, refactoring, and multi-file changes."
        />

        <IntelligenceCard
          eyebrow="Layer"
          title="Coding assistants"
          description="Copilots and assistants that support autocomplete, debugging, tests, documentation, and code review."
        />

        <IntelligenceCard
          eyebrow="Layer"
          title="Developer workflows"
          description="AI support for planning, pull requests, onboarding, software-team knowledge, and internal documentation."
        />

        <IntelligenceCard
          eyebrow="Layer"
          title="AI coding infrastructure"
          description="Models, APIs, codebase systems, and enterprise controls that power AI-assisted software development."
        />
      </div>

      <IntelligenceSection
        id="featured-pages"
        eyebrow="Core coding pages"
        title="AI coding intelligence pages"
        description="Start with the core AI coding pages below. These connect developer tools, software-team adoption, APIs, market share, and workflow-level AI adoption."
      >
        <RelatedIntelligencePages pages={featuredCodingPages} />
      </IntelligenceSection>


      <IntelligenceSection
        id="use-cases"
        eyebrow="Use cases"
        title="Where AI coding tools fit in developer workflows"
        description="AI coding adoption is not one use case. Developers use different tools for autocomplete, debugging, architecture, refactoring, documentation, codebase understanding, and team workflows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {codingUseCases.map((item) => (
            <IntelligenceCard
              key={item.title}
              eyebrow="Developer workflow"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Positioning"
        title="How to think about AI coding tools"
        description="The AI coding market is moving from simple autocomplete toward AI-native development environments, repository-aware assistance, multi-file changes, and agentic developer workflows."
      >
        <div className="space-y-4 text-sm leading-7 text-slate-300 md:text-base">
          <p>
            GitHub Copilot helped define the first wave of AI coding adoption by
            fitting directly into existing IDE workflows. The next wave is more
            ambitious: AI-native editors, codebase-aware systems, coding agents,
            and model-powered developer infrastructure.
          </p>

          <p>
            For teams, the important question is not only which AI coding tool is
            best. The more useful question is where AI should enter the software
            lifecycle: autocomplete, planning, debugging, documentation, testing,
            code review, onboarding, or production operations.
          </p>

          <p>
            T4 Atlas treats AI coding as both a tool-selection problem and an
            intelligence problem. Market share, developer adoption, model
            capability, enterprise governance, and workflow depth all matter.
          </p>
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="related-intelligence"
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI coding with enterprise adoption, model usage, AI APIs, and AI risk governance."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
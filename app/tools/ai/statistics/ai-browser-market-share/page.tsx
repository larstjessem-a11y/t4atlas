import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  aiBrowserMarketShareCategories,
  aiBrowserMarketShareData,
  aiBrowserMarketShareKeyFindings,
  aiBrowserMarketShareMethodology,
  aiBrowserMarketShareLastUpdated,
} from "@/data/aiStats/aiBrowserMarketShare";

export const metadata: Metadata = {
  title: "AI Browser Market Share | T4 Atlas",
  description:
    "Compare AI browser positioning across Chrome, Edge, Safari, Arc, Perplexity Comet, Brave, Opera, Dia, and emerging AI-native browsers.",
};

const relatedPages = [
  {
    title: "Most Used AI Agents",
    href: "/tools/ai/statistics/most-used-ai-agents",
    description:
      "Compare leading AI agents across assistants, enterprise productivity, coding, AI search, and agentic workflows.",
    label: "Agents",
  },
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, visibility, traffic rankings, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "Most Used AI Models",
    href: "/tools/ai/statistics/most-used-ai-models",
    description:
      "Explore widely used AI models across frontier assistants, reasoning systems, multimodal models, and open-weight models.",
    label: "Models",
  },
];

export default function AiBrowserMarketSharePage() {
  const sortedBrowsers = [...aiBrowserMarketShareData].sort(
    (a, b) => b.aiReadinessScore - a.aiReadinessScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI browser statistics"
        title="AI Browser Market Share"
        description="A structured comparison of AI browser positioning across mainstream browsers, enterprise browsers, AI-native challengers, privacy browsers, and search-agent browsing experiences."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "AI Browser Market Share" },
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
        meta={`Last updated: ${aiBrowserMarketShareLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiBrowserMarketShareKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI browser readiness snapshot"
        description="The AI browser market is still early. Distribution, ecosystem ownership, AI search integration, enterprise positioning, and assistant access may matter more than current AI-native browser usage."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedBrowsers.slice(0, 4).map((browser) => (
            <IntelligenceCard
              key={browser.browser}
              eyebrow={browser.category}
              title={browser.browser}
              score={browser.aiReadinessScore}
              description="AI readiness score"
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="data-table"
        title="AI browser market positioning table"
        description="A structured comparison of browsers by category, AI positioning, distribution signal, and T4 Atlas AI-readiness score."
      >
        <IntelligenceTable
          data={sortedBrowsers}
          columns={[
            {
              key: "browser",
              label: "Browser",
              render: (item) => (
                <span className="font-semibold text-[var(--t4-text)]">{item.browser}</span>
              ),
            },
            {
              key: "category",
              label: "Category",
            },
            {
              key: "aiPositioning",
              label: "AI positioning",
            },
            {
              key: "distributionSignal",
              label: "Distribution signal",
            },
            {
              key: "aiReadinessScore",
              label: "AI readiness",
              render: (item) => (
                <span className="font-semibold text-[#1e3a5f]">
                  {item.aiReadinessScore}
                </span>
              ),
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        title="AI browser categories"
        description="AI browsing is emerging at the intersection of search, assistants, agents, operating systems, and enterprise productivity."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiBrowserMarketShareCategories.map((category) => (
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
        description="This page compares strategic AI-browser positioning rather than official browser usage share. Traditional browsers may dominate through distribution while AI-native challengers shape the future interface."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedBrowsers.map((browser) => (
            <IntelligenceCard
              key={browser.browser}
              eyebrow={browser.category}
              title={browser.browser}
              score={browser.aiReadinessScore}
              description={browser.aiPositioning}
            >
              <p className="text-xs text-[var(--t4-muted)]">
                Signal: {browser.distributionSignal}
              </p>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={aiBrowserMarketShareMethodology.title}
        description={aiBrowserMarketShareMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This ranking should not be interpreted as official browser market
          share, active-user share, or verified traffic telemetry.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI statistics"
        description="Use these pages to connect AI browsers with AI agents, AI market share, and broader model adoption."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
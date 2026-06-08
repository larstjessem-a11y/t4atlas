import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  mostVisitedAiWebsiteCategories,
  mostVisitedAiWebsitesData,
  mostVisitedAiWebsitesKeyFindings,
  mostVisitedAiWebsitesLastUpdated,
  mostVisitedAiWebsitesMethodology,
} from "@/data/aiStats/mostVisitedAiWebsites";

export const metadata: Metadata = {
  title: "Most Visited AI Websites | T4 Atlas",
  description:
    "Explore the most visited AI websites by category, traffic position, momentum score, primary use case, and traffic interpretation.",
};

const relatedPages = [
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
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
      "Compare AI tools by growth drivers, momentum signals, and workflow expansion.",
    label: "Growth",
  },
];

export default function MostVisitedAiWebsitesPage() {
  const sortedWebsites = [...mostVisitedAiWebsitesData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI traffic intelligence"
        title="Most Visited AI Websites"
        description="A structured overview of high-visibility AI websites across chatbots, AI search, image generation, video generation, coding, productivity, research, and creative AI."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Most Visited AI Websites" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Website table",
            href: "#website-table",
            variant: "secondary",
          },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${mostVisitedAiWebsitesLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostVisitedAiWebsitesKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="AI website traffic snapshot"
        description="AI traffic is not only about standalone website visits. Some tools are pure AI destinations, while others are embedded into major ecosystems such as Microsoft, Google, Canva, or developer platforms."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedWebsites.slice(0, 4).map((website) => (
            <IntelligenceCard
              key={website.slug}
              eyebrow={website.trafficPosition}
              title={website.name}
              score={website.momentumScore}
              description={website.primaryUseCase}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="website-table"
        title="Most visited AI websites table"
        description="A structured comparison of AI websites by category, traffic position, momentum score, primary use case, and traffic interpretation."
      >
        <IntelligenceTable
          data={sortedWebsites}
          columns={[
            {
              key: "name",
              label: "Website",
              render: (item) => (
                <span className="font-semibold text-[var(--t4-text)]">{item.name}</span>
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
              key: "trafficPosition",
              label: "Traffic position",
              render: (item) => (
                <span className="capitalize">{item.trafficPosition}</span>
              ),
            },
            {
              key: "momentumScore",
              label: "Momentum",
              render: (item) => (
                <span className="font-semibold text-[#1e3a5f]">
                  {item.momentumScore}
                </span>
              ),
            },
            {
              key: "primaryUseCase",
              label: "Primary use case",
            },
            {
              key: "trafficNotes",
              label: "Traffic notes",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="categories"
        title="AI website categories"
        description="The most visited AI websites cluster into several categories: general assistants, AI search, creative AI, coding, productivity, and research."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mostVisitedAiWebsiteCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="Category"
              title={category.category}
              description={category.description}
            >
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-[var(--t4-border)] bg-[#f8f6f1] px-3 py-1 text-xs font-medium text-[var(--t4-muted)]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret AI website traffic"
        description="Website traffic is a useful signal, but it does not equal revenue, enterprise adoption, active users, or workflow depth. The strongest AI products often combine traffic, distribution, retention, and ecosystem integration."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedWebsites.map((website) => (
            <IntelligenceCard
              key={website.slug}
              eyebrow={`${website.category.replace(/-/g, " ")} · ${
                website.trafficPosition
              }`}
              title={website.name}
              score={website.momentumScore}
              description={website.whyPeopleVisit}
            >
              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Traffic notes
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {website.trafficNotes}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={mostVisitedAiWebsitesMethodology.title}
        description={mostVisitedAiWebsitesMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It
          should be read as a synthesis of public visibility signals and
          category interpretation, not as audited web analytics or exact visit
          counts.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect AI website traffic with market share, search demand, and growth momentum."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  enterpriseAiAdoptionCategories,
  enterpriseAiAdoptionData,
  enterpriseAiAdoptionKeyFindings,
  enterpriseAiAdoptionLastUpdated,
  enterpriseAiAdoptionMethodology,
} from "@/data/aiStats/enterpriseAiAdoption";

export const metadata: Metadata = {
  title: "Enterprise AI Adoption Statistics | T4 Atlas",
  description:
    "Explore enterprise AI adoption statistics by workflow category, adoption tier, momentum score, use case, adoption drivers, and deployment barriers.",
};

const relatedPages = [
  {
    title: "Most Used AI APIs",
    href: "/tools/ai/statistics/most-used-ai-apis",
    description:
      "Explore widely used AI APIs across frontier models, reasoning APIs, multimodal systems, open-model ecosystems, and enterprise AI infrastructure.",
    label: "APIs",
  },
  {
    title: "Most Adopted AI Workflows",
    href: "/tools/ai/workflows/most-adopted-ai-workflows",
    description:
      "Explore the AI workflows organizations adopt across writing, coding, meetings, research, healthcare, marketing, operations, and knowledge management.",
    label: "Workflows",
  },
  {
    title: "Most Used AI Tools for Software Teams",
    href: "/tools/ai/professions/ai-tools-for-software-teams",
    description:
      "See which AI tools software teams use across coding, research, documentation, planning, and codebase workflows.",
    label: "Software teams",
  },
];

export default function EnterpriseAiAdoptionStatisticsPage() {
  const sortedCategories = [...enterpriseAiAdoptionData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="Enterprise AI intelligence"
        title="Enterprise AI Adoption Statistics"
        description="A structured overview of enterprise AI adoption across productivity, software development, customer support, research, marketing, operations, knowledge management, and security workflows."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Statistics", href: "/tools/ai/statistics" },
          { label: "Enterprise AI Adoption Statistics" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Adoption table",
            href: "#adoption-table",
            variant: "secondary",
          },
          {
            label: "Categories",
            href: "#categories",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${enterpriseAiAdoptionLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {enterpriseAiAdoptionKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Enterprise AI adoption snapshot"
        description="Enterprise AI adoption is strongest where workflows are digital, repetitive, document-heavy, measurable, and already embedded in existing software platforms. Governance, security, and integration remain the main constraints."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedCategories.slice(0, 4).map((item) => (
            <IntelligenceCard
              key={item.slug}
              eyebrow={item.adoptionTier}
              title={item.category.replace(/-/g, " ")}
              score={item.momentumScore}
              description={item.enterpriseUseCase}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="adoption-table"
        title="Enterprise AI adoption table"
        description="A structured comparison of enterprise AI adoption by workflow category, adoption tier, momentum score, use case, adoption driver, and deployment barrier."
      >
        <IntelligenceTable
          data={sortedCategories}
          columns={[
            {
              key: "category",
              label: "Category",
              render: (item) => (
                <span className="font-semibold capitalize text-[var(--t4-text)]">
                  {item.category.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "adoptionTier",
              label: "Adoption",
              render: (item) => (
                <span className="capitalize">{item.adoptionTier}</span>
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
              key: "enterpriseUseCase",
              label: "Enterprise use case",
            },
            {
              key: "whyCompaniesAdoptIt",
              label: "Why companies adopt it",
            },
            {
              key: "adoptionBarrier",
              label: "Adoption barrier",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="categories"
        title="Enterprise AI adoption categories"
        description="Enterprise AI adoption usually enters through productivity, software development, internal knowledge, customer support, research, operations, and security workflows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {enterpriseAiAdoptionCategories.map((category) => (
            <IntelligenceCard
              key={category.category}
              eyebrow="Enterprise category"
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
        title="How to interpret enterprise AI adoption"
        description="Enterprise AI adoption is not simply about buying tools. The real question is which workflows become faster, safer, cheaper, more scalable, or easier to govern when AI becomes part of the operating system."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedCategories.map((item) => (
            <IntelligenceCard
              key={item.slug}
              eyebrow={`${item.category.replace(/-/g, " ")} · ${
                item.adoptionTier
              }`}
              title={item.enterpriseUseCase}
              score={item.momentumScore}
              description={item.whyCompaniesAdoptIt}
            >
              <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]">
                  Adoption barrier
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {item.adoptionBarrier}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={enterpriseAiAdoptionMethodology.title}
        description={enterpriseAiAdoptionMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          This page is intended as a directional intelligence overview. It does
          not claim audited enterprise deployment statistics, exact market share,
          or verified company-level adoption rates.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI intelligence pages"
        description="Use these pages to connect enterprise AI adoption with AI APIs, workflow adoption, and software-team usage patterns."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
import type { Metadata } from "next";
import IntelligenceCard from "@/components/intelligence/IntelligenceCard";
import IntelligenceHero from "@/components/intelligence/IntelligenceHero";
import IntelligencePageLayout from "@/components/intelligence/IntelligencePageLayout";
import IntelligenceSection from "@/components/intelligence/IntelligenceSection";
import IntelligenceTable from "@/components/intelligence/IntelligenceTable";
import RelatedIntelligencePages from "@/components/intelligence/RelatedIntelligencePages";
import {
  openVsClosedAiComparisonDimensions,
  openVsClosedAiRiskProfilesData,
  openVsClosedAiRiskProfilesKeyFindings,
  openVsClosedAiRiskProfilesLastUpdated,
  openVsClosedAiRiskProfilesMethodology,
} from "@/data/aiStats/openVsClosedAiRiskProfiles";

export const metadata: Metadata = {
  title: "Open vs Closed AI Risk Profiles | T4 Atlas",
  description:
    "Compare open and closed AI risk profiles across transparency, deployment control, misuse risk, governance, accountability, and innovation tradeoffs.",
};

const relatedPages = [
  {
    title: "AI Risk Intelligence",
    href: "/tools/ai/risk-intelligence",
    description:
      "Explore structured AI risk intelligence across enterprise risk, alignment pressure, frontier capabilities, governance, and deployment exposure.",
    label: "Risk hub",
  },
  {
    title: "Frontier AI Risk Matrix",
    href: "/tools/ai/risk-intelligence/frontier-ai-risk-matrix",
    description:
      "Analyze frontier AI risks across autonomy, cyber capability, persuasion, biological assistance, opacity, and deployment scale.",
    label: "Frontier AI",
  },
  {
    title: "AI Alignment Risk Rankings",
    href: "/tools/ai/risk-intelligence/ai-alignment-risk-rankings",
    description:
      "Compare AI system types by alignment pressure, autonomy risk, transparency, governance maturity, and deployment exposure.",
    label: "Alignment",
  },
];

export default function OpenVsClosedAiRiskProfilesPage() {
  const sortedProfiles = [...openVsClosedAiRiskProfilesData].sort(
    (a, b) => b.riskScore - a.riskScore
  );

  return (
    <IntelligencePageLayout hub="ai">
      <IntelligenceHero
        eyebrow="AI risk profile intelligence"
        title="Open vs Closed AI Risk Profiles"
        description="A structured comparison of open-weight AI systems, closed frontier AI platforms, and hybrid deployments across transparency, deployment control, misuse risk, governance, accountability, and innovation tradeoffs."
        breadcrumbs={[
          { label: "Tools", href: "/tools" },
          { label: "AI Tools", href: "/tools/ai" },
          { label: "AI Risk Intelligence", href: "/tools/ai/risk-intelligence" },
          { label: "Open vs Closed AI Risk Profiles" },
        ]}
        actions={[
          { label: "Key findings", href: "#key-findings" },
          {
            label: "Risk table",
            href: "#risk-table",
            variant: "secondary",
          },
          {
            label: "Comparison",
            href: "#comparison",
            variant: "secondary",
          },
        ]}
        meta={`Last updated: ${openVsClosedAiRiskProfilesLastUpdated}`}
      />

      <div id="key-findings" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {openVsClosedAiRiskProfilesKeyFindings.map((item) => (
          <IntelligenceCard
            key={item.title}
            eyebrow="Key finding"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <IntelligenceSection
        title="Open vs closed AI risk snapshot"
        description="Open and closed AI systems create different risk tradeoffs. Open systems often improve transparency and innovation, while closed systems can preserve stronger deployment control but create opacity and concentration risk."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {sortedProfiles.slice(0, 4).map((profile) => (
            <IntelligenceCard
              key={profile.slug}
              eyebrow={profile.systemType.replace(/-/g, " ")}
              title={profile.profile}
              score={profile.riskScore}
              description={profile.whyItMatters}
            />
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="risk-table"
        title="Open vs closed AI risk profiles table"
        description="A structured comparison of open, closed, and hybrid AI risk profiles by system type, tradeoff, risk score, benefit, risk, and mitigation approach."
      >
        <IntelligenceTable
          data={sortedProfiles}
          columns={[
            {
              key: "profile",
              label: "Risk profile",
              render: (item) => (
                <span className="font-semibold text-white">{item.profile}</span>
              ),
            },
            {
              key: "systemType",
              label: "System type",
              render: (item) => (
                <span className="capitalize">
                  {item.systemType.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "riskTradeoff",
              label: "Risk tradeoff",
              render: (item) => (
                <span className="capitalize">
                  {item.riskTradeoff.replace(/-/g, " ")}
                </span>
              ),
            },
            {
              key: "riskScore",
              label: "Risk score",
              render: (item) => (
                <span className="font-semibold text-cyan-200">
                  {item.riskScore}
                </span>
              ),
            },
            {
              key: "primaryBenefit",
              label: "Primary benefit",
            },
            {
              key: "primaryRisk",
              label: "Primary risk",
            },
          ]}
        />
      </IntelligenceSection>

      <IntelligenceSection
        id="comparison"
        title="Open vs closed AI comparison dimensions"
        description="The open-versus-closed AI debate is best understood across specific dimensions, not as a simple binary between safety and innovation."
      >
        <div className="grid gap-4">
          {openVsClosedAiComparisonDimensions.map((dimension) => (
            <IntelligenceCard
              key={dimension.dimension}
              eyebrow="Comparison dimension"
              title={dimension.dimension}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    Open-weight profile
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {dimension.openProfile}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    Closed frontier profile
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {dimension.closedProfile}
                  </p>
                </div>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        title="How to interpret open and closed AI risk"
        description="The central question is not whether open or closed AI is always safer. The more useful question is which capabilities are being released, who can access them, how they can be modified, and what governance mechanisms exist."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sortedProfiles.map((profile) => (
            <IntelligenceCard
              key={profile.slug}
              eyebrow={`${profile.systemType.replace(/-/g, " ")} · ${
                profile.riskTradeoff
              }`}
              title={profile.profile}
              score={profile.riskScore}
              description={profile.whyItMatters}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Primary risk
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {profile.primaryRisk}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Mitigation approach
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {profile.mitigationApproach}
                </p>
              </div>
            </IntelligenceCard>
          ))}
        </div>
      </IntelligenceSection>

      <IntelligenceSection
        id="methodology"
        eyebrow="Methodology"
        title={openVsClosedAiRiskProfilesMethodology.title}
        description={openVsClosedAiRiskProfilesMethodology.description}
      >
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          This page is intended as a directional intelligence overview. It does
          not provide a formal safety audit, regulatory assessment, legal
          opinion, or vendor-specific evaluation.
        </p>
      </IntelligenceSection>

      <IntelligenceSection
        eyebrow="Related intelligence"
        title="Related AI risk intelligence pages"
        description="Use these pages to connect open and closed AI risk with frontier capabilities, alignment pressure, and AI governance."
      >
        <RelatedIntelligencePages pages={relatedPages} />
      </IntelligenceSection>
    </IntelligencePageLayout>
  );
}
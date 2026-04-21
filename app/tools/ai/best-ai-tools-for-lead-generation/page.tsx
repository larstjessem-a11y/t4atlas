import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "Best AI Tools for Lead Generation | T4 Atlas",
};

export default function BestAiToolsForLeadGenPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border p-6 shadow-sm">
          <h1 className="text-4xl font-semibold">
            Best AI Tools for Lead Generation
          </h1>
          <p className="text-gray-600">
            AI tools can dramatically improve prospecting, enrichment, and
            outreach workflows.
          </p>
        </div>

        <AiMoneyPicks
          picks={[
            {
              name: "Apollo",
              bestFor: "Prospecting",
              idealFor: "Outbound teams",
              whyChooseIt:
                "Strong database and outreach workflows.",
              watchOutFor: "Needs structured outreach strategy",
            },
            {
              name: "Clay",
              bestFor: "Lead enrichment",
              idealFor: "Advanced workflows",
              whyChooseIt:
                "Extremely powerful data enrichment layer.",
              watchOutFor: "More complex setup",
            },
            {
              name: "ChatGPT",
              bestFor: "Outreach personalization",
              idealFor: "Cold email and messaging",
              whyChooseIt:
                "Great for crafting tailored outreach at scale.",
              watchOutFor: "Requires prompt iteration",
            },
            {
              name: "HubSpot AI",
              bestFor: "Pipeline and CRM",
              idealFor: "Inbound + outbound teams",
              whyChooseIt:
                "Central system for managing leads and workflows.",
              watchOutFor: "Best when fully adopted",
            },
          ]}
        />

        <AffiliateBlock
          slug="best-ai-tools-for-lead-generation"
          placement="editorial_bottom"
        />

        <AiRelatedLinks currentSlug="best-ai-tools-for-lead-generation" />
      </div>
    </main>
  );
}
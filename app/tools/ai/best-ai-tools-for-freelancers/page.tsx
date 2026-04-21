import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "Best AI Tools for Freelancers | T4 Atlas",
};

export default function BestAiToolsForFreelancersPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border p-6 shadow-sm">
          <h1 className="text-4xl font-semibold">
            Best AI Tools for Freelancers
          </h1>
          <p className="text-gray-600">
            Freelancers can use AI to increase output, reduce time per project,
            and improve quality.
          </p>
        </div>

        <AiMoneyPicks
          picks={[
            {
              name: "ChatGPT",
              bestFor: "General work",
              idealFor: "All freelancers",
              whyChooseIt:
                "Handles writing, ideation, editing, and workflows.",
              watchOutFor: "Needs structure",
            },
            {
              name: "Notion AI",
              bestFor: "Organization",
              idealFor: "Client and project tracking",
              whyChooseIt:
                "Centralizes workflows and notes.",
              watchOutFor: "Best inside Notion ecosystem",
            },
            {
              name: "Jasper",
              bestFor: "Content freelancers",
              idealFor: "Copywriting and marketing",
              whyChooseIt:
                "Optimized for marketing output.",
              watchOutFor: "Narrower use case",
            },
            {
              name: "Runway",
              bestFor: "Creative freelancers",
              idealFor: "Video and content production",
              whyChooseIt:
                "Strong creative AI capabilities.",
              watchOutFor: "Learning curve",
            },
          ]}
        />

        <AffiliateBlock
          slug="best-ai-tools-for-freelancers"
          placement="editorial_bottom"
        />

        <AiRelatedLinks currentSlug="best-ai-tools-for-freelancers" />
      </div>
    </main>
  );
}
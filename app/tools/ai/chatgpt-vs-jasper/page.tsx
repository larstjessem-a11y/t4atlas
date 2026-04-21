import type { Metadata } from "next";
import Link from "next/link";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "ChatGPT vs Jasper | T4 Atlas",
  description:
    "Compare ChatGPT vs Jasper for marketing, copywriting, general AI workflows, and content production.",
  keywords: [
    "chatgpt vs jasper",
    "jasper vs chatgpt",
    "which is better chatgpt or jasper",
    "chatgpt vs jasper ai",
  ],
};

export default function ChatGptVsJasperPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>ChatGPT vs Jasper</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            ChatGPT vs Jasper
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            ChatGPT and Jasper overlap in writing and marketing work, but they
            are optimized for different workflows. ChatGPT is broader and more
            flexible, while Jasper is more tightly focused on campaign-oriented
            content production.
          </p>
        </div>

        <div className="grid gap-6">
          <AiMoneyPicks
            title="ChatGPT vs Jasper by use case"
            intro="The better option depends on whether you want an all-round AI system or a more marketing-specific content workflow."
            picks={[
              {
                name: "ChatGPT",
                bestFor: "General-purpose AI work",
                idealFor:
                  "Users who need one tool across writing, planning, ideation, analysis, and broader business workflows",
                whyChooseIt:
                  "ChatGPT is stronger if your work goes beyond content production and you want one flexible system for many tasks.",
                watchOutFor:
                  "It usually requires more prompt design and internal process structure than Jasper.",
              },
              {
                name: "Jasper",
                bestFor: "Marketing teams and campaign workflows",
                idealFor:
                  "Teams producing repeatable campaign assets, landing pages, email copy, and ad creative",
                whyChooseIt:
                  "Jasper is stronger when you want a more opinionated content-production workflow built around marketing output.",
                watchOutFor:
                  "It is a narrower choice if you want one AI system to support many kinds of work.",
              },
            ]}
          />

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Side-by-side comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-left">ChatGPT</th>
                    <th className="p-3 text-left">Jasper</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Workflow scope</td>
                    <td className="p-3">Broad and flexible</td>
                    <td className="p-3">Marketing-focused</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Writing quality</td>
                    <td className="p-3">Very strong with prompting</td>
                    <td className="p-3">Strong for campaign content</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Team workflow fit</td>
                    <td className="p-3">Adaptable</td>
                    <td className="p-3">More opinionated</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best use</td>
                    <td className="p-3">General AI support</td>
                    <td className="p-3">Marketing production</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AffiliateBlock
            slug="chatgpt-vs-jasper"
            placement="editorial_bottom"
            title="Recommended tools in this comparison"
          />

          <AiRelatedLinks currentSlug="chatgpt-vs-jasper" />
        </div>
      </div>
    </main>
  );
}
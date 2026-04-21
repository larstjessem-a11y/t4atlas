import type { Metadata } from "next";
import Link from "next/link";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "Alternatives to Jasper | T4 Atlas",
  description:
    "Compare the best alternatives to Jasper for AI writing, campaign production, and marketing workflows.",
  keywords: [
    "alternatives to jasper",
    "jasper alternatives",
    "best alternatives to jasper",
    "jasper competitors",
  ],
};

export default function AlternativesToJasperPage() {
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
            <span>Alternatives to Jasper</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI alternatives
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Alternatives to Jasper
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Jasper is a strong marketing-focused AI platform, but it is not the
            best fit for every workflow. The best alternative depends on whether
            you want lower cost, broader flexibility, or stronger long-form
            writing.
          </p>
        </div>

        <div className="grid gap-6">
          <AiMoneyPicks
            title="Best Jasper alternatives"
            intro="These are the strongest alternatives if you want to replace Jasper with something broader, cheaper, or better suited to your content workflow."
            picks={[
              {
                name: "ChatGPT",
                bestFor: "Flexible all-round use",
                idealFor:
                  "Teams that want one tool for writing, planning, ideation, and broader workflow support",
                whyChooseIt:
                  "ChatGPT is a strong Jasper alternative because it is more flexible across use cases than a marketing-only platform.",
                watchOutFor:
                  "It needs stronger prompting and process design than a more workflow-opinionated product.",
              },
              {
                name: "Claude",
                bestFor: "Long-form writing",
                idealFor:
                  "Teams that care more about readability, coherence, and natural output than campaign templates",
                whyChooseIt:
                  "Claude is especially strong when the main need is polished long-form writing rather than repeatable marketing production.",
                watchOutFor:
                  "It has less workflow scaffolding for campaign-heavy teams.",
              },
              {
                name: "Jasper",
                bestFor: "Marketing-first workflows",
                idealFor:
                  "Teams that actually need structured campaign production and template-driven content",
                whyChooseIt:
                  "Jasper can still be the best option if your workflow depends on repeatable content operations inside a marketing team.",
                watchOutFor:
                  "It is a weaker fit if your use case is broader than campaign and copy production.",
              },
            ]}
          />

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Tool</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Strength</th>
                    <th className="p-3 text-left">Weakness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">Flexible general use</td>
                    <td className="p-3">Very broad workflow coverage</td>
                    <td className="p-3">Needs more structure</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Claude</td>
                    <td className="p-3">Long-form writing</td>
                    <td className="p-3">Natural, coherent output</td>
                    <td className="p-3">Less marketing workflow scaffolding</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Marketing production</td>
                    <td className="p-3">Template-driven campaigns</td>
                    <td className="p-3">Narrower use case</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AffiliateBlock
            slug="alternatives-to-jasper"
            placement="editorial_bottom"
            title="Recommended Jasper alternatives"
          />

          <AiRelatedLinks currentSlug="alternatives-to-jasper" />
        </div>
      </div>
    </main>
  );
}
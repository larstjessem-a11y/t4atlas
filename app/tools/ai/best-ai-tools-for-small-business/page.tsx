import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "Best AI Tools for Small Business | T4 Atlas",
  description:
    "Compare the best AI tools for small businesses, including tools for marketing, automation, customer support, and content creation.",
  keywords: [
    "best ai tools for small business",
    "ai tools for business",
    "ai automation tools",
    "ai tools for marketing and operations",
  ],
};

export default function BestAiToolsForSmallBusinessPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>Best AI Tools for Small Business</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Small Business
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI tools can help small businesses automate repetitive tasks,
            improve marketing, handle customer communication, and scale output
            without hiring. The right stack depends on whether your main
            constraint is time, skills, or budget.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <AiMoneyPicks
            title="Best AI tools for small business workflows"
            intro="These tools help small businesses automate key operations like marketing, customer communication, content creation, and internal workflows."
            picks={[
              {
                name: "ChatGPT",
                bestFor: "General business tasks and content",
                idealFor: "Small teams handling multiple workflows",
                whyChooseIt:
                  "ChatGPT can handle writing, planning, customer replies, documentation, and automation ideas across the entire business.",
                watchOutFor:
                  "It requires clear prompts and structured workflows to be used effectively at scale.",
              },
              {
                name: "Jasper",
                bestFor: "Marketing and copywriting",
                idealFor: "Businesses focused on growth and campaigns",
                whyChooseIt:
                  "Jasper is optimized for marketing workflows and helps produce ads, landing pages, and campaign content faster.",
                watchOutFor:
                  "It is less useful outside marketing-heavy workflows.",
              },
              {
                name: "Notion AI",
                bestFor: "Internal workflows and documentation",
                idealFor: "Teams already using Notion",
                whyChooseIt:
                  "Notion AI integrates directly into documents, making it easy to manage operations, notes, and workflows with AI support.",
                watchOutFor:
                  "It is not a strong standalone AI tool outside its ecosystem.",
              },
              {
                name: "Zapier + AI",
                bestFor: "Automation",
                idealFor: "Businesses that want to reduce manual work",
                whyChooseIt:
                  "Zapier combined with AI tools can automate repetitive processes across apps and systems.",
                watchOutFor:
                  "Setup complexity can increase as workflows grow.",
              },
            ]}
          />

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
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
                    <td className="p-3">General workflows</td>
                    <td className="p-3">Extremely flexible</td>
                    <td className="p-3">Needs structure</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Marketing</td>
                    <td className="p-3">Strong campaign workflows</td>
                    <td className="p-3">Narrow focus</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notion AI</td>
                    <td className="p-3">Internal ops</td>
                    <td className="p-3">Seamless integration</td>
                    <td className="p-3">Limited standalone power</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Zapier</td>
                    <td className="p-3">Automation</td>
                    <td className="p-3">Connects workflows</td>
                    <td className="p-3">Setup complexity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AffiliateBlock
            slug="best-ai-tools-for-small-business"
            placement="editorial_bottom"
            title="Recommended small business tools"
          />

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose</h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Identify your main bottleneck: marketing, operations, or time.</li>
              <li>Start with one tool that removes the biggest constraint.</li>
              <li>Layer automation only after you have a working workflow.</li>
            </ul>
          </section>

          <AiRelatedLinks currentSlug="best-ai-tools-for-small-business" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Marketing | T4 Atlas",
  description:
    "Compare the best AI tools for marketing, including tools for content creation, campaign workflows, research, and go-to-market execution.",
  keywords: [
    "best ai tools for marketing",
    "ai tools for marketing",
    "best ai for marketers",
    "ai marketing tools",
    "best ai tools for content marketing",
  ],
};

export default function BestAiToolsForMarketingPage() {
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
            <span>Best AI Tools for Marketing</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Marketing
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI marketing tools can help with content creation, campaign
            planning, workflow automation, research, and go-to-market execution.
            The best option depends on whether you want a broad all-purpose
            assistant, a marketing-first platform, or AI embedded inside your
            existing CRM and content stack.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top AI tools for marketing
            </h2>

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
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Marketing teams and brand workflows</td>
                    <td className="p-3">Marketing-first positioning and governance</td>
                    <td className="p-3">More specialized and often pricier</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Copy.ai</td>
                    <td className="p-3">GTM and workflow automation</td>
                    <td className="p-3">Strong go-to-market workflow focus</td>
                    <td className="p-3">More GTM-oriented than general-purpose</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">General marketing support</td>
                    <td className="p-3">Broad flexibility across many tasks</td>
                    <td className="p-3">Needs stronger process design from the user</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">HubSpot / Breeze</td>
                    <td className="p-3">Marketing inside HubSpot</td>
                    <td className="p-3">Built into a broader marketing platform</td>
                    <td className="p-3">Best fit mainly for HubSpot users</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best picks by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for marketing teams
                </h3>
                <p className="text-gray-600">
                  Jasper is the clearest fit if your main goal is scaling
                  marketing output with stronger brand control and team-oriented
                  workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for GTM workflows
                </h3>
                <p className="text-gray-600">
                  Copy.ai makes the most sense when the real goal is not just
                  writing copy, but coordinating go-to-market workflows and
                  repetitive marketing tasks.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best all-rounder
                </h3>
                <p className="text-gray-600">
                  ChatGPT is usually the best all-round choice for marketers who
                  want one tool for brainstorming, drafting, rewriting, campaign
                  planning, and general problem-solving.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for HubSpot users
                </h3>
                <p className="text-gray-600">
                  HubSpot with Breeze is the most natural option if your content,
                  CRM, and campaign workflows already run inside HubSpot.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose</h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose Jasper if you want a marketing-first AI platform.</li>
              <li>Choose Copy.ai if GTM workflows are the main bottleneck.</li>
              <li>Choose ChatGPT if you want one flexible general-purpose assistant.</li>
              <li>Choose HubSpot/Breeze if your marketing stack already lives in HubSpot.</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related AI pages</h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/best-ai-tools-for-productivity"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Productivity
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-writing"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Writing
              </Link>

              <Link
                href="/tools/ai/alternatives-to-chatgpt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to ChatGPT
              </Link>
            </div>
          </section>

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
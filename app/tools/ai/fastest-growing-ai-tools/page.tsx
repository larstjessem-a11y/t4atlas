import type { Metadata } from "next";
import Link from "next/link";
import {
  fastestGrowingAiToolsData,
  fastestGrowingAiToolsKeyFindings,
  fastestGrowingAiToolsLastUpdated,
  fastestGrowingAiToolsMethodology,
} from "@/data/aiStats/fastestGrowingAiTools";

export const metadata: Metadata = {
  title: "Fastest Growing AI Tools | T4 Atlas",
  description:
    "Explore the fastest growing AI tools by category, growth drivers, momentum score, and workflow relevance.",
};

export default function FastestGrowingAiToolsPage() {
  const sortedTools = [...fastestGrowingAiToolsData].sort(
    (a, b) => b.momentumScore - a.momentumScore
  );

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>Fastest Growing AI Tools</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI statistics
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Fastest Growing AI Tools
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            A structured look at fast-growing AI tools across chatbots, AI
            search, workspace tools, creative AI, meeting assistants, and
            productivity workflows.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#key-findings"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Key findings
            </a>
            <a
              href="#ranking"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              View ranking
            </a>
            <a
              href="#methodology"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Methodology
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Last updated: {fastestGrowingAiToolsLastUpdated}
          </p>
        </section>

        <section
          id="key-findings"
          className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {fastestGrowingAiToolsKeyFindings.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-white p-5 shadow-sm"
            >
              <h2 className="text-base font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Growth momentum snapshot
          </h2>
          <p className="mb-5 max-w-3xl text-gray-600">
            This snapshot ranks AI tools by directional growth momentum, category
            visibility, workflow expansion, and public adoption signals.
          </p>

          <div className="grid gap-4 md:grid-cols-4">
            {sortedTools.slice(0, 4).map((tool) => (
              <div
                key={tool.slug}
                className="rounded-2xl border bg-gray-50 p-4"
              >
                <div className="text-sm text-gray-500">Momentum score</div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {tool.momentumScore}
                </div>
                <div className="mt-2 font-medium">{tool.name}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                  {tool.growthCategory}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="ranking"
          className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            Fastest growing AI tools table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-2xl border text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Tool</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Growth</th>
                  <th className="p-3 text-left">Momentum</th>
                  <th className="p-3 text-left">Growth drivers</th>
                  <th className="p-3 text-left">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {sortedTools.map((tool) => (
                  <tr key={tool.slug} className="border-t">
                    <td className="p-3 font-medium">{tool.name}</td>
                    <td className="p-3 capitalize">{tool.category}</td>
                    <td className="p-3 capitalize">{tool.growthCategory}</td>
                    <td className="p-3 font-medium">{tool.momentumScore}</td>
                    <td className="p-3 text-gray-600">
                      {tool.growthDrivers.join(", ")}
                    </td>
                    <td className="p-3 text-gray-600">{tool.whyItMatters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Growth drivers by tool
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {sortedTools.map((tool) => (
              <div key={tool.slug} className="rounded-2xl border bg-gray-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                      {tool.category} · {tool.growthCategory}
                    </p>
                  </div>

                  <div className="rounded-full border bg-white px-3 py-1 text-sm font-medium">
                    {tool.momentumScore}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.growthDrivers.map((driver) => (
                    <span
                      key={driver}
                      className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {driver}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tool.whyItMatters}
                </p>

                {tool.relatedPage ? (
                  <Link
                    href={tool.relatedPage}
                    className="mt-4 inline-flex text-sm font-medium text-gray-900 underline"
                  >
                    Related T4 Atlas guide
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section
          id="methodology"
          className="mb-8 rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {fastestGrowingAiToolsMethodology.title}
          </h2>
          <p className="max-w-3xl leading-7 text-gray-600">
            {fastestGrowingAiToolsMethodology.description}
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Related AI statistics and guides
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/ai/ai-tools-market-share"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              AI Tools Market Share
            </Link>
            <Link
              href="/tools/ai/most-searched-ai-tools"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Most Searched AI Tools
            </Link>
            <Link
              href="/tools/ai/best-ai-workspace-tools"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Workspace Tools
            </Link>
            <Link
              href="/tools/ai/best-ai-tools-for-productivity"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Tools for Productivity
            </Link>
            <Link
              href="/tools/ai/chatgpt-vs-claude"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              ChatGPT vs Claude
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
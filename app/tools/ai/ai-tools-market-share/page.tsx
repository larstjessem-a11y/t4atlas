import type { Metadata } from "next";
import Link from "next/link";
import {
  aiMarketShareData,
  aiMarketShareKeyFindings,
  aiMarketShareLastUpdated,
  aiMarketShareMethodology,
  aiMarketShareSources,
} from "@/data/aiStats/aiMarketShare";

export const metadata: Metadata = {
  title: "AI Tools Market Share | T4 Atlas",
  description:
    "Explore AI tools market share, chatbot visibility, AI traffic signals, and T4 Atlas momentum scores for ChatGPT, Gemini, Claude, Perplexity, Copilot, and more.",
};

export default function AiToolsMarketSharePage() {
  const sortedByMomentum = [...aiMarketShareData].sort(
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
            <span>AI Tools Market Share</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI statistics
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            AI Tools Market Share
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            A structured overview of AI tool visibility, chatbot market-share
            signals, traffic rankings, and T4 Atlas momentum scores across major
            AI assistants and specialized AI products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#key-findings"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Key findings
            </a>
            <a
              href="#data-table"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              View data table
            </a>
            <a
              href="#methodology"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Methodology
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Last updated: {aiMarketShareLastUpdated}
          </p>
        </section>

        <section
          id="key-findings"
          className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {aiMarketShareKeyFindings.map((item) => (
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
            AI market share snapshot
          </h2>
          <p className="mb-5 max-w-3xl text-gray-600">
            The table below combines public chatbot market-share signals,
            traffic visibility, and a T4 Atlas editorial momentum score. Market
            share numbers should not be interpreted as revenue share or total
            active-user share.
          </p>

          <div className="grid gap-4 md:grid-cols-4">
            {sortedByMomentum.slice(0, 4).map((tool) => (
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
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="data-table"
          className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            AI tools market share and momentum table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-2xl border text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Tool</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Market share</th>
                  <th className="p-3 text-left">Traffic rank</th>
                  <th className="p-3 text-left">Momentum</th>
                  <th className="p-3 text-left">Primary use case</th>
                </tr>
              </thead>
              <tbody>
                {sortedByMomentum.map((tool) => (
                  <tr key={tool.slug} className="border-t">
                    <td className="p-3 font-medium">{tool.name}</td>
                    <td className="p-3 capitalize">{tool.category}</td>
                    <td className="p-3">
                      {tool.marketSharePercent !== undefined
                        ? `${tool.marketSharePercent}%`
                        : "—"}
                    </td>
                    <td className="p-3">
                      {tool.trafficRank ? `#${tool.trafficRank}` : "—"}
                    </td>
                    <td className="p-3 font-medium">{tool.momentumScore}</td>
                    <td className="p-3 text-gray-600">
                      {tool.primaryUseCase}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            What the numbers mean
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {sortedByMomentum.map((tool) => (
              <div key={tool.slug} className="rounded-2xl border bg-gray-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                      {tool.category}
                    </p>
                  </div>
                  <div className="rounded-full border bg-white px-3 py-1 text-sm font-medium">
                    {tool.momentumScore}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {tool.notes}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  Sources: {tool.sources.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="methodology"
          className="mb-8 rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {aiMarketShareMethodology.title}
          </h2>
          <p className="max-w-3xl leading-7 text-gray-600">
            {aiMarketShareMethodology.description}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {aiMarketShareSources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border bg-white p-4 transition hover:bg-gray-50"
              >
                <h3 className="font-semibold text-gray-900">{source.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {source.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Related AI guides</h2>

          <div className="flex flex-wrap gap-3">
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
              href="/tools/ai/best-ai-tools-for-writing"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Writing Tools
            </Link>
            <Link
              href="/tools/ai/chatgpt-vs-claude"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              ChatGPT vs Claude
            </Link>
            <Link
              href="/tools/ai/alternatives-to-chatgpt"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Alternatives to ChatGPT
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
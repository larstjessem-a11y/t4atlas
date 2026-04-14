import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Research | T4 Atlas",
  description:
    "Compare the best AI tools for research, including tools for finding sources, summarizing information, and building research workflows.",
  keywords: [
    "best ai tools for research",
    "ai research tools",
    "best ai for research",
    "ai tools for academic research",
    "ai tools for information gathering",
  ],
};

export default function BestAiToolsForResearchPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
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
            <span>Best AI Tools for Research</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Research
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI tools for research focus on finding information, summarizing
            sources, and helping you build a structured understanding of a topic.
            The best option depends on whether you prioritize speed, accuracy,
            source transparency, or integration into your workflow.
          </p>
        </div>

        {/* Top ad */}
        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          {/* Table */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top AI research tools
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
                    <td className="p-3 font-medium">Perplexity</td>
                    <td className="p-3">Fast research and source discovery</td>
                    <td className="p-3">Built-in citations and sources</td>
                    <td className="p-3">Less flexible outside research</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">General research and synthesis</td>
                    <td className="p-3">Strong summarization and reasoning</td>
                    <td className="p-3">Sources depend on workflow</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Claude</td>
                    <td className="p-3">Document-based research</td>
                    <td className="p-3">Strong long-form analysis</td>
                    <td className="p-3">Less focused on live web search</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Elicit</td>
                    <td className="p-3">Academic research workflows</td>
                    <td className="p-3">Paper-based analysis</td>
                    <td className="p-3">More niche use case</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Use cases */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Best picks by use case
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for fast research
                </h3>
                <p className="text-gray-600">
                  Perplexity is often the best choice when speed matters and you
                  want to quickly find and compare sources.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for synthesis and explanation
                </h3>
                <p className="text-gray-600">
                  ChatGPT is strong when you already have information and want to
                  summarize, structure, or explain it.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for document-heavy workflows
                </h3>
                <p className="text-gray-600">
                  Claude is useful when working with long documents, PDFs, or
                  detailed reports.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for academic research
                </h3>
                <p className="text-gray-600">
                  Elicit is designed for academic-style workflows and literature
                  review tasks.
                </p>
              </div>
            </div>
          </section>

          {/* Middle ad */}
          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          {/* Internal linking */}
          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Related AI pages
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/perplexity-vs-chatgpt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Perplexity vs ChatGPT
              </Link>

              <Link
                href="/tools/ai/alternatives-to-chatgpt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to ChatGPT
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-writing"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Writing
              </Link>
            </div>
          </section>

          {/* Bottom ad */}
          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
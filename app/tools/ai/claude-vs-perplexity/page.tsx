import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude vs Perplexity | Which AI Is Better? | T4 Atlas",
  description:
    "Compare Claude vs Perplexity for research, writing, document analysis, and everyday AI workflows. See strengths, weaknesses, and best use cases.",
  keywords: [
    "claude vs perplexity",
    "perplexity vs claude",
    "which is better claude or perplexity",
    "ai research tool comparison",
  ],
};

export default function ClaudeVsPerplexityPage() {
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
            <span>Claude vs Perplexity</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Claude vs Perplexity
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Claude and Perplexity serve different kinds of AI workflows. Claude
            is generally stronger for long-form reasoning, writing, and document
            work, while Perplexity is better for fast research, source discovery,
            and question-driven exploration.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick verdict</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Choose Claude if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You work with long documents and detailed reasoning</li>
                  <li>You want stronger long-form writing and synthesis</li>
                  <li>You care more about analysis than live sourcing</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Choose Perplexity if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You need fast research with visible sources</li>
                  <li>You compare claims and articles often</li>
                  <li>You want an evidence-first workflow</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Side-by-side comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-left">Claude</th>
                    <th className="p-3 text-left">Perplexity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Long-form writing</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">Good, but less central</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Research</td>
                    <td className="p-3">Strong analysis</td>
                    <td className="p-3">Excellent discovery and sourcing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Sources</td>
                    <td className="p-3">More workflow-dependent</td>
                    <td className="p-3">Core strength</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Documents</td>
                    <td className="p-3">Very strong</td>
                    <td className="p-3">Less document-centered</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best overall use</td>
                    <td className="p-3">Deep thinking and synthesis</td>
                    <td className="p-3">Fast source-backed answers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for document analysis</h3>
                <p className="text-gray-600">
                  Claude is usually stronger when the task involves reading,
                  interpreting, and synthesizing longer documents or structured material.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for fast research</h3>
                <p className="text-gray-600">
                  Perplexity is better when the goal is quick discovery,
                  comparison, and source-backed information retrieval.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for writing</h3>
                <p className="text-gray-600">
                  Claude is usually the better option if your end goal is polished,
                  long-form output rather than research collection.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for evidence-first workflows</h3>
                <p className="text-gray-600">
                  Perplexity fits better when you want sources visible from the
                  start instead of relying on later verification.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related AI pages</h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/perplexity-vs-chatgpt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Perplexity vs ChatGPT
              </Link>

              <Link
                href="/tools/ai/chatgpt-vs-claude"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                ChatGPT vs Claude
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-research"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Research
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
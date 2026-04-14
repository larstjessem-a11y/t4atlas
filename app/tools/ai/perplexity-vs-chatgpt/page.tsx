import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perplexity vs ChatGPT | Which AI Is Better? | T4 Atlas",
  description:
    "Compare Perplexity vs ChatGPT for research, writing, and everyday AI workflows. See strengths, weaknesses, and which tool is better for your use case.",
  keywords: [
    "perplexity vs chatgpt",
    "chatgpt vs perplexity",
    "which is better perplexity or chatgpt",
    "ai research tool comparison",
  ],
};

export default function PerplexityVsChatGPTPage() {
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
            <span>Perplexity vs ChatGPT</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Perplexity vs ChatGPT
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Perplexity and ChatGPT overlap in some everyday AI tasks, but they
            are optimized for different workflows. Perplexity is especially
            strong for research and source-driven answers, while ChatGPT is a
            stronger all-rounder for writing, coding, and broader task support.
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
                <h3 className="mb-2 text-lg font-semibold">Choose Perplexity if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You mainly do research and information gathering</li>
                  <li>You want source-backed answers quickly</li>
                  <li>You compare articles, claims, and summaries often</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Choose ChatGPT if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You need a broader general-purpose assistant</li>
                  <li>You write, code, plan, and brainstorm in one place</li>
                  <li>You want more flexibility across many workflows</li>
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
                    <th className="p-3 text-left">Perplexity</th>
                    <th className="p-3 text-left">ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Research</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">Strong, but broader focus</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Sources</td>
                    <td className="p-3">Core strength</td>
                    <td className="p-3">Can vary by workflow</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Writing</td>
                    <td className="p-3">Useful for drafting from research</td>
                    <td className="p-3">Better all-round writing tool</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Coding</td>
                    <td className="p-3">More limited</td>
                    <td className="p-3">Much stronger</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">General assistant use</td>
                    <td className="p-3">More research-centered</td>
                    <td className="p-3">Broader and more flexible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for research</h3>
                <p className="text-gray-600">
                  Perplexity is usually the better choice when the goal is fast,
                  source-backed information retrieval and comparison.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for writing</h3>
                <p className="text-gray-600">
                  ChatGPT is typically the stronger option for drafting,
                  rewriting, and longer-form content creation once the research
                  is already done.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for mixed workflows</h3>
                <p className="text-gray-600">
                  ChatGPT is better if you want one assistant for ideation,
                  writing, coding, planning, and general task support.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for evidence-first answers</h3>
                <p className="text-gray-600">
                  Perplexity stands out when your workflow depends on seeing
                  sources early and often.
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
                href="/tools/ai/alternatives-to-chatgpt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to ChatGPT
              </Link>

              <Link
                href="/tools/ai/chatgpt-vs-claude"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                ChatGPT vs Claude
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-writing"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Writing
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
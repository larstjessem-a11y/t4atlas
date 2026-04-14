import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Writing | T4 Atlas",
  description:
    "Compare the best AI tools for writing, including options for blog posts, marketing copy, editing, research support, and long-form content.",
  keywords: [
    "best ai tools for writing",
    "best ai writing tools",
    "ai tools for blog writing",
    "ai copywriting tools",
    "best ai for writing",
  ],
};

export default function BestAiToolsForWritingPage() {
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
            <span>Best AI Tools for Writing</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Writing
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI writing tools can help with ideation, outlining, drafting,
            editing, research support, and rewriting. The best option depends on
            whether you care most about speed, quality, long-form output,
            workflow integration, or price.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Quick comparison
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
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">General writing workflows</td>
                    <td className="p-3">Versatile and strong all-rounder</td>
                    <td className="p-3">Can need heavy prompting</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Claude</td>
                    <td className="p-3">Long-form writing and tone</td>
                    <td className="p-3">Strong coherence and readability</td>
                    <td className="p-3">Less tool ecosystem depth</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Marketing teams and copywriting</td>
                    <td className="p-3">Workflow-oriented templates</td>
                    <td className="p-3">Can be expensive</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notion AI</td>
                    <td className="p-3">Writing inside documents</td>
                    <td className="p-3">Convenient in-notes workflow</td>
                    <td className="p-3">Less powerful as a standalone writer</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Perplexity</td>
                    <td className="p-3">Research-backed drafting</td>
                    <td className="p-3">Fast answer + source workflow</td>
                    <td className="p-3">Not primarily a writing platform</td>
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
                  Best all-rounder
                </h3>
                <p className="text-gray-600">
                  ChatGPT is the best all-round option for most users because it
                  can handle brainstorming, drafting, rewriting, and structured
                  editing across many writing styles.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for long-form writing
                </h3>
                <p className="text-gray-600">
                  Claude is especially strong for long-form writing where flow,
                  tone consistency, and natural readability matter.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for marketing copy
                </h3>
                <p className="text-gray-600">
                  Jasper is best suited to teams focused on ad copy, landing
                  pages, marketing workflows, and campaign ideation.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for research-assisted writing
                </h3>
                <p className="text-gray-600">
                  Perplexity is useful when the writing process depends heavily
                  on finding, checking, and summarizing information first.
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
              <li>Choose ChatGPT if you want broad flexibility.</li>
              <li>Choose Claude if you prioritize long-form readability.</li>
              <li>Choose Jasper if you run a copy-heavy marketing workflow.</li>
              <li>Choose Notion AI if you mainly write inside Notion already.</li>
              <li>Choose Perplexity if research is the bottleneck.</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Related AI pages
            </h2>

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
                href="/tools/ai/best-ai-tools-for-coding"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Coding
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
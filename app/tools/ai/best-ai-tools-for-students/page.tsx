import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Students | T4 Atlas",
  description:
    "Compare the best AI tools for students, including tools for research, note-taking, writing support, study help, and academic productivity.",
  keywords: [
    "best ai tools for students",
    "ai tools for students",
    "best ai for studying",
    "ai study tools",
    "best ai for academic productivity",
  ],
};

export default function BestAiToolsForStudentsPage() {
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
            <span>Best AI Tools for Students</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Students
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI tools can help students with research, note-taking, summarizing,
            writing support, and study planning. The best option depends on
            whether you need better research, better writing, or a more efficient
            way to organize your academic workflow.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top AI tools for students
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
                    <td className="p-3">General study support</td>
                    <td className="p-3">Flexible and broad use cases</td>
                    <td className="p-3">Needs careful prompting</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Perplexity</td>
                    <td className="p-3">Research and source discovery</td>
                    <td className="p-3">Source-backed answers</td>
                    <td className="p-3">Less strong for polished writing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notion AI</td>
                    <td className="p-3">Notes and study organization</td>
                    <td className="p-3">Integrated workspace flow</td>
                    <td className="p-3">Less capable as a standalone assistant</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Claude</td>
                    <td className="p-3">Reading and long-form synthesis</td>
                    <td className="p-3">Strong document reasoning</td>
                    <td className="p-3">Smaller ecosystem</td>
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
                  ChatGPT is the strongest all-round option for most students
                  because it can help with explanations, outlining, studying,
                  brainstorming, and structured writing support.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for research
                </h3>
                <p className="text-gray-600">
                  Perplexity is often the best option when the key challenge is
                  finding trustworthy sources and quickly comparing information.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for notes and organization
                </h3>
                <p className="text-gray-600">
                  Notion AI works well for students who already organize their
                  coursework, notes, and projects inside one workspace.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for reading-heavy subjects
                </h3>
                <p className="text-gray-600">
                  Claude is useful when your workload includes long readings,
                  PDFs, and detailed synthesis across larger documents.
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
              <li>Choose ChatGPT if you want one flexible AI study assistant.</li>
              <li>Choose Perplexity if research and source-finding matter most.</li>
              <li>Choose Notion AI if your main bottleneck is organization.</li>
              <li>Choose Claude if you work with long readings and synthesis.</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related AI pages</h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/best-ai-tools-for-research"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Research
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-productivity"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Productivity
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
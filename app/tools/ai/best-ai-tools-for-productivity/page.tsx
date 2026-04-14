import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Productivity | T4 Atlas",
  description:
    "Compare the best AI tools for productivity, including tools for writing, meetings, task management, research, and everyday workflows.",
  keywords: [
    "best ai tools for productivity",
    "ai productivity tools",
    "best ai for productivity",
    "ai tools for work",
    "ai tools for daily workflows",
  ],
};

export default function BestAiToolsForProductivityPage() {
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
            <span>Best AI Tools for Productivity</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Productivity
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI productivity tools can help with writing, note-taking, meetings,
            task management, research, and day-to-day workflow acceleration. The
            best tool depends on whether you want a general AI assistant, a
            document-centric workflow, or something more specialized.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top AI productivity tools
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
                    <td className="p-3">General productivity</td>
                    <td className="p-3">Broadest all-round use</td>
                    <td className="p-3">Needs prompting discipline</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notion AI</td>
                    <td className="p-3">Docs and workspace workflows</td>
                    <td className="p-3">Seamless note workflow</td>
                    <td className="p-3">Less powerful standalone</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Perplexity</td>
                    <td className="p-3">Research-heavy tasks</td>
                    <td className="p-3">Fast source-backed answers</td>
                    <td className="p-3">Not the best workflow hub</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Claude</td>
                    <td className="p-3">Long-form documents and synthesis</td>
                    <td className="p-3">Strong reasoning and writing flow</td>
                    <td className="p-3">Smaller ecosystem</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Otter</td>
                    <td className="p-3">Meetings and transcripts</td>
                    <td className="p-3">Meeting capture and summaries</td>
                    <td className="p-3">Narrower use case</td>
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
                  ChatGPT is the best all-round productivity tool for most
                  people because it can help with planning, writing, summaries,
                  brainstorming, and general problem-solving in one place.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for note-taking workflows
                </h3>
                <p className="text-gray-600">
                  Notion AI is especially useful if your daily work already
                  happens inside documents, notes, and project pages.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for research productivity
                </h3>
                <p className="text-gray-600">
                  Perplexity is the strongest option when your productivity
                  bottleneck is information gathering and source checking.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for meetings
                </h3>
                <p className="text-gray-600">
                  Otter is a practical choice for meetings, transcripts, and
                  turning conversations into searchable notes and summaries.
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
              <li>Choose ChatGPT if you want one flexible AI workspace.</li>
              <li>Choose Notion AI if your work already lives inside Notion.</li>
              <li>Choose Perplexity if research slows you down most.</li>
              <li>Choose Claude if you work with long documents and synthesis.</li>
              <li>Choose Otter if meetings and notes are the bottleneck.</li>
            </ul>
          </section>

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
                href="/tools/ai/best-ai-tools-for-writing"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Writing
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
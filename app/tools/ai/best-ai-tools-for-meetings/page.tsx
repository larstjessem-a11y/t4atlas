import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Meetings | T4 Atlas",
  description:
    "Compare the best AI tools for meetings, including tools for transcription, summaries, action items, and meeting productivity workflows.",
  keywords: [
    "best ai tools for meetings",
    "ai meeting tools",
    "best ai meeting assistant",
    "ai note taker for meetings",
    "best ai tools for meeting notes",
  ],
};

export default function BestAiToolsForMeetingsPage() {
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
            <span>Best AI Tools for Meetings</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Meetings
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI meeting tools can transcribe calls, summarize discussions, extract
            action items, and make meetings easier to search later. The best tool
            depends on whether you care most about live notes, team workflows,
            post-meeting summaries, or broader knowledge capture.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top AI meeting tools
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
                    <td className="p-3 font-medium">Otter</td>
                    <td className="p-3">All-round meeting capture</td>
                    <td className="p-3">Transcription, summaries, action items</td>
                    <td className="p-3">Can feel broad if you want something simpler</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Fireflies</td>
                    <td className="p-3">Team meeting workflows</td>
                    <td className="p-3">Strong summaries and collaboration features</td>
                    <td className="p-3">Can feel more workflow-heavy</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Fathom</td>
                    <td className="p-3">Fast post-meeting recaps</td>
                    <td className="p-3">Instant summaries and action items</td>
                    <td className="p-3">More focused than broad workspace tools</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notta</td>
                    <td className="p-3">Transcription and meeting notes</td>
                    <td className="p-3">Notes, summaries, and action plans</td>
                    <td className="p-3">Less top-of-mind than some larger brands</td>
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
                  Otter is a strong default choice if you want one tool that
                  handles transcription, summaries, and follow-up across common
                  meeting workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for team workflows
                </h3>
                <p className="text-gray-600">
                  Fireflies makes sense if you want collaborative notes, meeting
                  summaries, and a more workflow-oriented approach for teams.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for fast summaries
                </h3>
                <p className="text-gray-600">
                  Fathom is especially good when your main goal is quick
                  summaries and action items right after a meeting ends.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for transcription-first workflows
                </h3>
                <p className="text-gray-600">
                  Notta fits well if you care most about getting clean
                  transcripts, summaries, and usable notes from meetings or recordings.
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
              <li>Choose Otter if you want a broad meeting assistant.</li>
              <li>Choose Fireflies if you want stronger team collaboration features.</li>
              <li>Choose Fathom if speed and recap quality matter most.</li>
              <li>Choose Notta if transcription and structured notes are the priority.</li>
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
                href="/tools/ai/best-ai-tools-for-research"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Research
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
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Meeting Tools (Compared by Use Case)",
  description:
    "Compare the best AI meeting tools for transcription, summaries, action items, team workflows, sales calls, and searchable meeting notes.",
};

const meetingTools = [
  {
    name: "Otter",
    bestFor: "Best all-round AI meeting assistant",
    strength: "Transcription, summaries, action items, and searchable notes",
    weakness: "Can feel broader than needed for simple meeting recap workflows",
  },
  {
    name: "Fireflies",
    bestFor: "Best for team meeting workflows",
    strength: "Team collaboration, searchable meeting history, and integrations",
    weakness: "Can feel workflow-heavy for solo users",
  },
  {
    name: "Fathom",
    bestFor: "Best for fast meeting summaries",
    strength: "Quick recaps, highlights, and follow-up action items",
    weakness: "More focused than full knowledge management tools",
  },
  {
    name: "Notta",
    bestFor: "Best for transcription-first workflows",
    strength: "Clean transcripts, multilingual notes, and meeting summaries",
    weakness: "Less dominant brand awareness than some alternatives",
  },
];

export default function BestAiToolsForMeetingsPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
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
            <span>Best AI Tools for Meetings</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI meeting tools
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Meeting Tools
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best AI meeting tool depends on your workflow. Otter is a strong
            all-rounder, Fireflies works well for teams, Fathom is excellent for
            fast recaps, and Notta is useful when clean transcription is the main
            priority.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#comparison"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Compare tools
            </a>
            <a
              href="#decision-guide"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Choose by use case
            </a>
          </div>
        </section>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <section className="mb-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
          <p className="leading-7 text-gray-600">
            Choose Otter if you want a broad AI meeting assistant, Fireflies if
            your team needs collaboration and searchable meeting history, Fathom
            if you mainly want fast summaries, and Notta if transcription quality
            is your primary need.
          </p>
        </section>

        <section
          id="comparison"
          className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            AI meeting tools compared
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
                {meetingTools.map((tool) => (
                  <tr key={tool.name} className="border-t">
                    <td className="p-3 font-medium">{tool.name}</td>
                    <td className="p-3">{tool.bestFor}</td>
                    <td className="p-3">{tool.strength}</td>
                    <td className="p-3">{tool.weakness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="decision-guide"
          className="mt-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            Best AI meeting tool for your use case
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Recurring team meetings</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fireflies is usually the better fit if meeting history, team
                workflows, and collaboration matter.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Fast meeting recaps</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fathom is a strong choice when you mainly want highlights,
                summaries, and follow-up items quickly.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">General meeting notes</h3>
              <p className="mt-2 text-sm text-gray-600">
                Otter is a good default if you want transcription, summaries,
                action items, and searchable notes in one tool.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Transcription-first workflows</h3>
              <p className="mt-2 text-sm text-gray-600">
                Notta is worth considering if transcript quality and structured
                meeting notes are more important than a full team workflow.
              </p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (middle)
        </div>

        <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            What to compare before choosing
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Transcription accuracy",
              "Meeting summaries",
              "Action item extraction",
              "Calendar and video-call integrations",
              "Team collaboration features",
              "Searchable meeting history",
            ].map((item) => (
              <div key={item} className="rounded-2xl border bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Common mistakes when choosing AI meeting tools
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Choosing a tool without checking video-call integrations.</li>
            <li>Paying for team features when you only need personal notes.</li>
            <li>Ignoring privacy and meeting consent requirements.</li>
            <li>Choosing transcription when you actually need action tracking.</li>
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Related AI pages</h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/ai/best-ai-tools-for-productivity"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Tools for Productivity
            </Link>

            <Link
              href="/tools/ai/best-ai-tools-for-writing"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Writing Tools
            </Link>

            <Link
              href="/tools/ai/best-ai-tools-for-research"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Tools for Research
            </Link>

            <Link
              href="/tools/ai/alternatives-to-chatgpt"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Alternatives to ChatGPT
            </Link>
          </div>
        </section>

        <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (bottom)
        </div>
      </div>
    </main>
  );
}
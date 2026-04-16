import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Best AI Tools for YouTube | T4 Atlas",
  description:
    "Compare the best AI tools for YouTube creators, including tools for video generation, editing, thumbnails, scripts, captions, and content workflows.",
  keywords: [
    "best ai tools for youtube",
    "best ai tools for youtube creators",
    "ai tools for youtube",
    "youtube ai tools",
    "best ai for youtube videos",
  ],
};

export default function BestAiToolsForYouTubePage() {
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
            <span>Best AI Tools for YouTube</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for YouTube
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI tools can help YouTube creators with scripting, editing,
            thumbnails, captions, research, and video generation. The best tool
            depends on whether you care most about speed, short-form output,
            editing workflow, or production quality.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

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
                    <td className="p-3 font-medium">Descript</td>
                    <td className="p-3">Editing and podcast-style workflows</td>
                    <td className="p-3">Easy script-based editing</td>
                    <td className="p-3">Less cinematic generation</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Runway</td>
                    <td className="p-3">Creative AI video production</td>
                    <td className="p-3">Strong generative features</td>
                    <td className="p-3">Can require experimentation</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Pictory</td>
                    <td className="p-3">Fast short-form and repurposed content</td>
                    <td className="p-3">Very fast workflow</td>
                    <td className="p-3">Limited creative control</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">Scripts and ideation</td>
                    <td className="p-3">Flexible writing support</td>
                    <td className="p-3">Not a video editor</td>
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
                  Best for editing workflow
                </h3>
                <p className="text-gray-600">
                  Descript is one of the easiest tools for creators who want to
                  edit video the same way they edit text.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for creative AI video
                </h3>
                <p className="text-gray-600">
                  Runway is the stronger option if your channel depends on
                  visually ambitious AI-assisted production.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for fast repurposing
                </h3>
                <p className="text-gray-600">
                  Pictory is useful if you turn scripts, blogs, or long videos
                  into short YouTube content quickly.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for script development
                </h3>
                <p className="text-gray-600">
                  ChatGPT is strong for brainstorming titles, outlines, hooks,
                  scripts, and video concepts before production starts.
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
              <li>Choose Descript if your bottleneck is editing speed.</li>
              <li>Choose Runway if your bottleneck is creative production quality.</li>
              <li>Choose Pictory if you need fast repurposed content.</li>
              <li>Choose ChatGPT if scripting and ideation are your main bottlenecks.</li>
            </ul>
          </section>

          <AiRelatedLinks currentSlug="best-ai-tools-for-youtube" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
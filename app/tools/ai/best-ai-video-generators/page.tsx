import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Best AI Video Generators | T4 Atlas",
  description:
    "Compare the best AI video generators for social media clips, avatar videos, cinematic generation, ads, and fast content production workflows.",
  keywords: [
    "best ai video generators",
    "best ai video generator",
    "ai video generators",
    "ai tools for video generation",
    "best ai video tools",
  ],
};

export default function BestAiVideoGeneratorsPage() {
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
            <span>Best AI Video Generators</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Video Generators
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI video generators help create clips, presentations, talking-head
            videos, cinematic sequences, and marketing assets much faster than
            traditional workflows. The best option depends on whether you care
            most about realism, speed, avatars, editing flexibility, or social
            media output.
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
                    <td className="p-3 font-medium">Runway</td>
                    <td className="p-3">Creative video generation</td>
                    <td className="p-3">Strong generative video features</td>
                    <td className="p-3">Can require experimentation</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Synthesia</td>
                    <td className="p-3">Avatar and business videos</td>
                    <td className="p-3">Fast professional presenter videos</td>
                    <td className="p-3">Less suited to cinematic output</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Pictory</td>
                    <td className="p-3">Fast social and repurposed content</td>
                    <td className="p-3">Simple workflow for short videos</td>
                    <td className="p-3">Limited creative control</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Descript</td>
                    <td className="p-3">Editing and script-based workflows</td>
                    <td className="p-3">Very accessible for creators</td>
                    <td className="p-3">Less focused on pure generation</td>
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
                  Best for creative AI video
                </h3>
                <p className="text-gray-600">
                  Runway is the strongest option when you want AI-first video
                  generation, creative experimentation, and visually ambitious
                  output.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for business and training videos
                </h3>
                <p className="text-gray-600">
                  Synthesia is often the best fit for avatar-led explainers,
                  onboarding, internal training, and corporate communications.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for fast short-form content
                </h3>
                <p className="text-gray-600">
                  Pictory is useful when speed matters more than fine-grained
                  control and you want to turn scripts or articles into videos
                  quickly.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Best for creator workflows
                </h3>
                <p className="text-gray-600">
                  Descript is a strong option if your process combines editing,
                  transcription, script cleanup, and publishing support.
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
              <li>Choose Runway if you want the strongest creative generation angle.</li>
              <li>Choose Synthesia if you mainly make avatar-led business videos.</li>
              <li>Choose Pictory if speed and short-form output matter most.</li>
              <li>Choose Descript if editing workflow matters as much as generation.</li>
            </ul>
          </section>

          <AiRelatedLinks currentSlug="best-ai-video-generators" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Runway vs Pictory | Which AI Video Tool Is Better? | T4 Atlas",
  description:
    "Compare Runway vs Pictory for AI video generation, editing, short-form content, and creative workflows. See strengths, weaknesses, and best use cases.",
  keywords: [
    "runway vs pictory",
    "pictory vs runway",
    "which is better runway or pictory",
    "ai video tool comparison",
    "ai video generator comparison",
  ],
};

export default function RunwayVsPictoryPage() {
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
            <span>Runway vs Pictory</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Runway vs Pictory
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Runway and Pictory both help creators produce video faster, but they
            target different workflows. Runway is more ambitious for creative
            AI video generation, while Pictory is more focused on fast, practical
            short-form and repurposed content workflows.
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
                <h3 className="mb-2 text-lg font-semibold">Choose Runway if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You want AI-first creative video generation</li>
                  <li>You care about experimentation and visual ambition</li>
                  <li>You need more than simple repurposing workflows</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Choose Pictory if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You want fast social and marketing video output</li>
                  <li>You turn scripts or articles into videos often</li>
                  <li>You prioritize speed and simplicity over control</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Side-by-side comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-left">Runway</th>
                    <th className="p-3 text-left">Pictory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Core strength</td>
                    <td className="p-3">Creative AI video generation</td>
                    <td className="p-3">Fast content repurposing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Ease of use</td>
                    <td className="p-3">More experimentation required</td>
                    <td className="p-3">Very accessible</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Creative control</td>
                    <td className="p-3">Higher potential</td>
                    <td className="p-3">More template-like workflow</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best for</td>
                    <td className="p-3">Creators and visual experimentation</td>
                    <td className="p-3">Marketers and short-form publishing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Output style</td>
                    <td className="p-3">More generative and creative</td>
                    <td className="p-3">More practical and structured</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for creative AI video
                </h3>
                <p className="text-gray-600">
                  Runway is usually the better option if you want more visually
                  ambitious AI generation and a more experimental creative workflow.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for fast content production
                </h3>
                <p className="text-gray-600">
                  Pictory is stronger when speed matters most and you want to
                  turn written content into videos with minimal effort.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for social media teams
                </h3>
                <p className="text-gray-600">
                  Pictory often fits better for teams publishing frequent,
                  practical marketing and social content.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for advanced creators
                </h3>
                <p className="text-gray-600">
                  Runway is the better fit if your process depends on pushing AI
                  video tools beyond simple templated outputs.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AiRelatedLinks currentSlug="runway-vs-pictory" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
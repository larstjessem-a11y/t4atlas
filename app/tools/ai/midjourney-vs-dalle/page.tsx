import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Midjourney vs DALL·E | T4 Atlas",
  description:
    "Compare Midjourney vs DALL·E across image quality, style, prompt control, usability, and best use cases.",
  keywords: [
    "midjourney vs dalle",
    "midjourney vs dall e",
    "dalle vs midjourney",
    "best ai image generator comparison",
    "midjourney vs openai image generator",
  ],
};

export default function MidjourneyVsDallePage() {
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
            <span>Midjourney vs DALL·E</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Midjourney vs DALL·E
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Midjourney and DALL·E are two of the most popular AI image
            generators. They differ significantly in style, usability, and how
            much control you have over the final output.
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
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-left">Midjourney</th>
                    <th className="p-3 text-left">DALL·E</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Image quality</td>
                    <td className="p-3">Very high, artistic</td>
                    <td className="p-3">High, more neutral</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Style control</td>
                    <td className="p-3">Strong stylistic output</td>
                    <td className="p-3">More literal prompt interpretation</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Ease of use</td>
                    <td className="p-3">Learning curve (Discord-based)</td>
                    <td className="p-3">Simple and accessible</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best use</td>
                    <td className="p-3">Art, concept visuals</td>
                    <td className="p-3">General-purpose images</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              When to choose Midjourney
            </h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>You want visually striking, artistic images</li>
              <li>You care about style and aesthetics over precision</li>
              <li>You are comfortable experimenting with prompts</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              When to choose DALL·E
            </h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>You want a simple and fast workflow</li>
              <li>You need predictable outputs from prompts</li>
              <li>You are using AI as part of a broader tool ecosystem</li>
            </ul>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Final verdict</h2>

            <p className="text-gray-600">
              Choose Midjourney if your priority is visual quality and artistic
              output. Choose DALL·E if you want a simpler, more predictable, and
              more accessible image generation workflow.
            </p>
          </section>

          <AiRelatedLinks currentSlug="midjourney-vs-dalle" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
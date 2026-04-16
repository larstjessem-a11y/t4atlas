import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Synthesia vs Pictory | Which AI Video Tool Is Better? | T4 Atlas",
  description:
    "Compare Synthesia vs Pictory for avatar videos, business content, short-form clips, and fast video workflows. See strengths, weaknesses, and best use cases.",
  keywords: [
    "synthesia vs pictory",
    "pictory vs synthesia",
    "which is better synthesia or pictory",
    "ai video tool comparison",
    "avatar video vs short form video tools",
  ],
};

export default function SynthesiaVsPictoryPage() {
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
            <span>Synthesia vs Pictory</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Synthesia vs Pictory
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Synthesia and Pictory both make video production faster, but they
            are built for different jobs. Synthesia is designed for avatar-led
            business videos, while Pictory is stronger for fast short-form and
            repurposed content workflows.
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
                <h3 className="mb-2 text-lg font-semibold">Choose Synthesia if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You create training, onboarding, or explainers</li>
                  <li>You want avatar-led videos at scale</li>
                  <li>You prioritize consistency and business polish</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Choose Pictory if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You turn text into short videos quickly</li>
                  <li>You focus on social and marketing output</li>
                  <li>You care more about speed than presentation realism</li>
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
                    <th className="p-3 text-left">Synthesia</th>
                    <th className="p-3 text-left">Pictory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Core focus</td>
                    <td className="p-3">Avatar-led business video</td>
                    <td className="p-3">Fast repurposed content</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Ease of use</td>
                    <td className="p-3">Simple and structured</td>
                    <td className="p-3">Very fast and accessible</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best for</td>
                    <td className="p-3">Training and explainers</td>
                    <td className="p-3">Social and marketing clips</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Creative flexibility</td>
                    <td className="p-3">More limited</td>
                    <td className="p-3">Limited but faster</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Output style</td>
                    <td className="p-3">Polished and presenter-led</td>
                    <td className="p-3">Practical and short-form oriented</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for business video</h3>
                <p className="text-gray-600">
                  Synthesia is stronger when the output needs to feel
                  standardized, scalable, and presentation-ready.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for fast publishing</h3>
                <p className="text-gray-600">
                  Pictory is better if your workflow is built around speed and
                  frequent short-form publishing.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for onboarding content</h3>
                <p className="text-gray-600">
                  Synthesia is often the better fit for training, onboarding,
                  and internal communications.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for repurposing articles</h3>
                <p className="text-gray-600">
                  Pictory is stronger when you want to transform written content
                  into video quickly.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AiRelatedLinks currentSlug="synthesia-vs-pictory" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
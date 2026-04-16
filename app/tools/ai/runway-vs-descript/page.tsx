import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Runway vs Descript | Which AI Video Tool Is Better? | T4 Atlas",
  description:
    "Compare Runway vs Descript for AI video generation, creator editing, script-based workflows, and creative production. See strengths, weaknesses, and best use cases.",
  keywords: [
    "runway vs descript",
    "descript vs runway",
    "which is better runway or descript",
    "ai video editing comparison",
    "ai creator tool comparison",
  ],
};

export default function RunwayVsDescriptPage() {
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
            <span>Runway vs Descript</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Runway vs Descript
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Runway and Descript both speed up video workflows, but they serve
            different creators. Runway leans toward creative AI video generation,
            while Descript is stronger for editing, transcription, and
            script-driven production.
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
                  <li>You want AI-first visual experimentation</li>
                  <li>You care about generative video capabilities</li>
                  <li>You create more ambitious visual content</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Choose Descript if:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You edit podcasts, interviews, and talking-head videos</li>
                  <li>You want text-based editing and transcription</li>
                  <li>You prioritize editing speed over visual experimentation</li>
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
                    <th className="p-3 text-left">Runway</th>
                    <th className="p-3 text-left">Descript</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Core strength</td>
                    <td className="p-3">Creative AI generation</td>
                    <td className="p-3">Editing and transcript workflow</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Ease of use</td>
                    <td className="p-3">More exploratory</td>
                    <td className="p-3">Very accessible</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best for</td>
                    <td className="p-3">Visual creators</td>
                    <td className="p-3">Editors and podcasters</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Workflow style</td>
                    <td className="p-3">Generation-first</td>
                    <td className="p-3">Editing-first</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Output angle</td>
                    <td className="p-3">More experimental</td>
                    <td className="p-3">More practical and polished</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for creative video</h3>
                <p className="text-gray-600">
                  Runway is stronger when you want AI-generated visuals and a
                  more experimental production pipeline.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for editing speed</h3>
                <p className="text-gray-600">
                  Descript is the better fit if your main need is to cut,
                  rewrite, and publish quickly.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for podcasts and interviews</h3>
                <p className="text-gray-600">
                  Descript works especially well for talking-head, interview,
                  and transcript-heavy creator workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Best for AI-first visuals</h3>
                <p className="text-gray-600">
                  Runway is more compelling if visuals and AI-native generation
                  are central to your content strategy.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AiRelatedLinks currentSlug="runway-vs-descript" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
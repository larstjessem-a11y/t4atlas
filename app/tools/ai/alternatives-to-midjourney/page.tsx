import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alternatives to Midjourney | T4 Atlas",
  description:
    "Explore the best alternatives to Midjourney for AI image generation. Compare DALL·E, Stable Diffusion, and other tools for different workflows.",
  keywords: [
    "alternatives to midjourney",
    "midjourney alternatives",
    "best ai image generator",
    "ai art tools",
    "midjourney competitors",
  ],
};

export default function AlternativesToMidjourneyPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
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
            <span>Alternatives to Midjourney</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI alternatives
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Alternatives to Midjourney
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Midjourney is known for producing high-quality AI-generated images,
            but it is not the best fit for every workflow. Depending on your
            needs, tools like DALL·E and Stable Diffusion may offer better
            flexibility, control, or integration.
          </p>
        </div>

        {/* Top ad */}
        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          {/* Table */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top Midjourney alternatives
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
                    <td className="p-3 font-medium">DALL·E</td>
                    <td className="p-3">Ease of use</td>
                    <td className="p-3">Simple interface and integration</td>
                    <td className="p-3">Less stylistic control</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Stable Diffusion</td>
                    <td className="p-3">Customization and control</td>
                    <td className="p-3">Open ecosystem and flexibility</td>
                    <td className="p-3">More complex setup</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Leonardo AI</td>
                    <td className="p-3">Game assets and creative workflows</td>
                    <td className="p-3">Strong creative tooling</td>
                    <td className="p-3">Smaller ecosystem</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Firefly</td>
                    <td className="p-3">Design workflows</td>
                    <td className="p-3">Adobe ecosystem integration</td>
                    <td className="p-3">Requires Adobe tools</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Use cases */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Best by use case
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for beginners
                </h3>
                <p className="text-gray-600">
                  DALL·E is typically the easiest entry point for generating
                  images without needing to manage complex settings.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for full control
                </h3>
                <p className="text-gray-600">
                  Stable Diffusion is ideal if you want full control over models,
                  prompts, and outputs.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for creative production
                </h3>
                <p className="text-gray-600">
                  Leonardo AI is often used for assets, concept art, and game
                  design workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for designers
                </h3>
                <p className="text-gray-600">
                  Firefly fits well if you are already working inside Adobe
                  products and want AI generation integrated into your workflow.
                </p>
              </div>
            </div>
          </section>

          {/* Middle ad */}
          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          {/* Internal linking */}
          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Related AI pages
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/best-ai-tools-for-writing"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Writing
              </Link>

              <Link
                href="/tools/ai/alternatives-to-chatgpt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to ChatGPT
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-coding"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Coding
              </Link>
            </div>
          </section>

          {/* Bottom ad */}
          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
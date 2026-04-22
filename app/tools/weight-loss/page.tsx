import type { Metadata } from "next";
import Link from "next/link";
import { weightLossCalculators } from "@/data/weightLossCalculators";
import { weightLossScenarios } from "@/data/weightLossScenarios";
import { weightLossEditorialPages } from "@/data/weightLossEditorial";

export const metadata: Metadata = {
  title: "Weight Loss Tools Hub | T4 Atlas",
  description:
    "Explore weight loss calculators, calorie deficit tools, TDEE estimates, BMI scenarios, timelines, and evidence-aware guides.",
};

const bestPages = weightLossEditorialPages.filter((page) => page.type === "best");
const comparisonPages = weightLossEditorialPages.filter(
  (page) => page.type === "comparison"
);
const guidePages = weightLossEditorialPages.filter((page) => page.type === "guide");
const alternativePages = weightLossEditorialPages.filter(
  (page) => page.type === "alternative"
);

export default function WeightLossHubPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <span>Weight Loss</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Weight loss hub
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Weight Loss Tools
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Explore calculators, scenario pages, and decision guides for calorie
            deficit planning, energy expenditure, BMI, and realistic weight loss
            timelines.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 lg:col-span-2">
            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Core calculators</h2>
              <p className="mb-5 text-gray-600">
                These are the core tools for calorie planning, maintenance
                estimates, BMI checks, and timeline planning.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {weightLossCalculators.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/weight-loss/${item.slug}`}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Popular scenarios</h2>
              <p className="mb-5 text-gray-600">
                These long-tail scenario pages are designed to answer specific
                questions around timelines, calorie deficits, BMI, and daily
                energy needs.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {weightLossScenarios.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/weight-loss/${item.slug}`}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Best apps and tools</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {bestPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Comparisons and guides</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Comparisons
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    {comparisonPages.map((page) => (
                      <Link
                        key={page.slug}
                        href={page.href}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Guides
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    {guidePages.map((page) => (
                      <Link
                        key={page.slug}
                        href={page.href}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {page.title}
                      </Link>
                    ))}
                    {alternativePages.map((page) => (
                      <Link
                        key={page.slug}
                        href={page.href}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Hub focus</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "calculators",
                "scenarios",
                "calorie deficit",
                "TDEE",
                "BMI",
                "timelines",
                "guides",
                "apps",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                Quick links
              </h3>

              <div className="flex flex-col gap-2 text-sm">
                {weightLossCalculators.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/weight-loss/${item.slug}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Sidebar ad / affiliate slot
            </div>
          </aside>
        </div>

        <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (bottom)
        </div>
      </div>
    </main>
  );
}
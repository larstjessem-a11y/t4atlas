import Link from "next/link";
import { hubs } from "@/data/hubs";

const sleepHub = {
  slug: "sleep",
  href: "/sleep",
  name: "Sleep",
  description:
    "Sleep assessment tools, sleep guides, schedule support, insomnia patterns, and possible sleep apnea warning signs.",
  categories: ["Sleep tools", "Guides", "Assessment"],
  featuredLinks: [
    {
      name: "Sleep Assessment Tool",
      href: "/tools/sleep/sleep-assessment",
    },
    {
      name: "Why Can’t I Fall Asleep?",
      href: "/sleep/why-cant-i-fall-asleep",
    },
    {
      name: "How to Fix Your Sleep Schedule",
      href: "/sleep/how-to-fix-sleep-schedule",
    },
  ],
};

const homepageHubs = [...hubs, sleepHub];

export default function HomePage() {
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <section className="mb-16 overflow-hidden rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-sm">
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                Multi-hub tools platform
              </div>

              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                T4 Atlas
              </h1>

              <p className="mb-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                A growing library of tools, calculators, guides, comparison
                pages, and decision systems organized into focused hubs.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools"
                  className="inline-flex items-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Explore all tools
                </Link>

                <Link
                  href="/sleep"
                  className="inline-flex items-center rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  Explore Sleep hub
                </Link>

                <Link
                  href="/tools/ai"
                  className="inline-flex items-center rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  Explore AI hub
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Platform structure
                  </div>
                  <div className="text-sm text-gray-500">
                    Hubs, tools, guides, and decision pages
                  </div>
                </div>

                <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                  Atlas view
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {homepageHubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={hub.href}
                    className="rounded-2xl border bg-gray-50 px-4 py-4 transition hover:bg-white hover:shadow-sm"
                  >
                    <div className="mb-1 text-sm font-semibold text-gray-900">
                      {hub.name}
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      {hub.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                Explore hubs
              </h2>
              <p className="mt-1 max-w-2xl text-gray-600">
                Start with a hub and then move deeper into calculators, guides,
                scenario pages, and high-intent comparison content.
              </p>
            </div>

            <div className="rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Structured ecosystems
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {homepageHubs.map((hub) => (
              <div
                key={hub.slug}
                className="rounded-[1.75rem] border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                      {hub.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-gray-600">
                      {hub.description}
                    </p>
                  </div>

                  <div className="hidden rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-500 sm:inline-flex">
                    Hub
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {hub.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mb-6 rounded-2xl bg-gray-50 p-4">
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Featured pages
                  </div>

                  <div className="grid gap-2 text-sm">
                    {hub.featuredLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 transition hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={hub.href}
                  className="inline-flex items-center rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  Explore {hub.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                Built for speed and clarity
              </div>

              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                Structured tools, not content chaos
              </h3>

              <p className="max-w-2xl text-gray-600">
                T4 Atlas is designed as a multi-hub platform where each topic
                can grow into its own ecosystem of tools, guides, comparison
                pages, money pages, and decision frameworks.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border bg-white px-4 py-4">
                <div className="mb-1 text-sm font-semibold text-gray-900">
                  Tools
                </div>
                <div className="text-sm text-gray-600">
                  Calculators and utilities
                </div>
              </div>

              <div className="rounded-2xl border bg-white px-4 py-4">
                <div className="mb-1 text-sm font-semibold text-gray-900">
                  Guides
                </div>
                <div className="text-sm text-gray-600">
                  Explainers and decision support
                </div>
              </div>

              <div className="rounded-2xl border bg-white px-4 py-4">
                <div className="mb-1 text-sm font-semibold text-gray-900">
                  Comparisons
                </div>
                <div className="text-sm text-gray-600">
                  High-intent choice pages
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
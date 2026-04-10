import Link from "next/link";
import { hubs } from "@/data/hubs";

export default function HomePage() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            T4 Atlas
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            A growing library of tools, calculators, guides, and decision pages
            organized into focused hubs.
          </p>

          <Link
            href="/tools"
            className="inline-block rounded-xl bg-black text-white px-6 py-3 text-lg font-medium hover:bg-gray-800"
          >
            Explore Tools
          </Link>
        </section>

        {/* Hubs */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Explore hubs</h2>
            <p className="text-gray-500 mt-1">
              Start with a hub and then explore calculators, guides, scenarios,
              and comparison pages within that topic.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {hubs.map((hub) => (
              <div
                key={hub.slug}
                className="rounded-3xl border bg-white p-6 shadow-sm"
              >
                <div className="mb-3">
                  <h3 className="text-2xl font-semibold">{hub.name}</h3>
                  <p className="mt-2 text-gray-600">{hub.description}</p>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {hub.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mb-5">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Featured pages
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    {hub.featuredLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={hub.href}
                  className="inline-block rounded-xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  Explore {hub.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Simple value block */}
        <section className="rounded-2xl border bg-white p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Built for speed and clarity
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            T4 Atlas is designed as a multi-hub platform where each topic grows
            into its own structured ecosystem of tools, guides, scenarios, and
            decision pages.
          </p>
        </section>
      </div>
    </main>
  );
}
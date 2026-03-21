import Link from "next/link";
import { tools } from "@/data/tools";

export default function HomePage() {
  const categories = Array.from(new Set(tools.map((t) => t.category)));

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            T4 Atlas
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            A global library of online tools, calculators, and data utilities.
          </p>

          <Link
            href="/tools"
            className="inline-block rounded-xl bg-black text-white px-6 py-3 text-lg font-medium hover:bg-gray-800"
          >
            Explore Tools
          </Link>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Browse categories</h2>
            <p className="text-gray-500 mt-1">
              Start with a category and explore tools within each domain.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/tools/${category}`}
                className="block rounded-2xl border p-6 bg-white hover:bg-gray-50 transition"
              >
                <div className="text-lg font-semibold capitalize">
                  {category}
                </div>

                <div className="text-sm text-gray-500 mt-1">
                  Browse {category} tools
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Simple value block */}
        <section className="rounded-2xl border bg-white p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Built for speed and clarity
          </h3>

          <p className="text-gray-600 max-w-xl mx-auto">
            All tools are designed to be fast, accurate, and easy to use — whether
            you need quick conversions or detailed calculations.
          </p>
        </section>

      </div>
    </main>
  );
}
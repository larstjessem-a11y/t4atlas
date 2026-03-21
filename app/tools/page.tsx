import Link from "next/link";
import { tools } from "@/data/tools";

export default function ToolsPage() {
  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  return (
    <main className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500 mb-2">T4 Atlas</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            All Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore free online tools, calculators, converters, and utilities
            organized into clear categories.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Browse categories</h2>
              <p className="text-sm text-gray-500 mt-1">
                Start with a category, then drill down into subcategories and tools.
              </p>
            </div>

            <div className="rounded-lg border border-dashed px-4 py-3 text-xs text-gray-400">
              Promo / ad slot
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/tools/${category}`}
                className="group rounded-xl border p-5 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <div className="mb-2 text-base font-semibold capitalize text-gray-900">
                  {category.replace(/-/g, " ")}
                </div>

                <div className="text-sm text-gray-500">
                  Browse {category.replace(/-/g, " ")} tools
                </div>

                <div className="mt-4 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Open category →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
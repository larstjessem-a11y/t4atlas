import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

const popularConverterSlugs = [
  "fahrenheit-to-celsius",
  "feet-to-meters",
  "meters-to-feet",
  "inches-to-cm",
  "cm-to-inches",
];

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const categoryTools = tools.filter((tool) => tool.category === category);

  if (categoryTools.length === 0) {
    notFound();
  }

  const subcategories = Array.from(
    new Set(categoryTools.map((tool) => tool.subcategory))
  );

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ");

  const popularConverters = categoryTools.filter((tool) =>
    popularConverterSlugs.includes(tool.slug)
  );

  return (
    <main className="py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/tools"
            className="mb-3 inline-flex text-sm text-gray-500 hover:text-gray-900"
          >
            ← All tools
          </Link>

          <p className="mb-2 text-sm font-medium text-gray-500">Category</p>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight">
            {categoryTitle}
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Explore free online {categoryTitle.toLowerCase()} on T4 Atlas.
          </p>
        </div>

        {category === "converters" && popularConverters.length > 0 && (
          <section className="mb-8 rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Popular converters</h2>
              <p className="mt-2 text-sm text-gray-600">
                Start with the most commonly searched conversion tools.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularConverters.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="rounded-2xl border bg-gray-50 p-4 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="font-medium text-gray-900">{tool.name}</div>
                  <div className="mt-1 text-sm text-gray-600">
                    {tool.unitFrom} to {tool.unitTo}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="grid gap-6 lg:grid-cols-[1.1fr,2fr]">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Subcategories</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Browse by topic cluster.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {subcategories.map((subcategory) => {
                const count = categoryTools.filter(
                  (tool) => tool.subcategory === subcategory
                ).length;

                return (
                  <Link
                    key={subcategory}
                    href={`/tools/${category}/subcategory/${subcategory}`}
                    className="inline-block rounded-lg border px-3 py-2 text-sm capitalize hover:bg-gray-50"
                  >
                    {subcategory} ({count})
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg border border-dashed px-4 py-6 text-center text-xs text-gray-400">
              Category promo / ad slot
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All tools</h2>
              <p className="mt-1 text-sm text-gray-500">
                Every tool currently available in this category.
              </p>
            </div>

            <div className="grid gap-3">
              {categoryTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="block rounded-xl border p-4 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div className="font-medium">{tool.name}</div>
                  <div className="mt-1 text-sm text-gray-500">
                    {tool.type === "converter"
                      ? `Convert ${tool.unitFrom} to ${tool.unitTo}`
                      : tool.description ?? "Open tool"}
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-wide text-gray-400">
                    {tool.subcategory}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
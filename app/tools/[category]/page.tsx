import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

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

  return (
    <main className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            href="/tools"
            className="inline-flex text-sm text-gray-500 hover:text-gray-900 mb-3"
          >
            ← All tools
          </Link>

          <p className="text-sm font-medium text-gray-500 mb-2">Category</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            {categoryTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore free online {categoryTitle.toLowerCase()} on T4 Atlas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr,2fr]">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Subcategories</h2>
                <p className="text-sm text-gray-500 mt-1">
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

            <div className="mt-6 rounded-lg border border-dashed px-4 py-6 text-xs text-gray-400 text-center">
              Category promo / ad slot
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All tools</h2>
              <p className="text-sm text-gray-500 mt-1">
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
                  <div className="text-sm text-gray-500 mt-1">
                    Convert {tool.unitFrom} to {tool.unitTo}
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
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
};

export default async function SubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = await params;

  const subcategoryTools = tools.filter(
    (tool) =>
      tool.category === category && tool.subcategory === subcategory
  );

  if (subcategoryTools.length === 0) {
    notFound();
  }

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ");
  const subcategoryTitle =
    subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace(/-/g, " ");

  return (
    <main className="py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/tools/${category}`}
            className="inline-flex text-sm text-gray-500 hover:text-gray-900 mb-3"
          >
            ← {categoryTitle}
          </Link>

          <p className="text-sm font-medium text-gray-500 mb-2">
            {categoryTitle}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            {subcategoryTitle} {categoryTitle}
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            Explore free online {subcategoryTitle.toLowerCase()}{" "}
            {categoryTitle.toLowerCase()} tools on T4 Atlas.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">

          {/* Tools */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Tools</h2>
              <p className="text-sm text-gray-500 mt-1">
                All tools in this subcategory.
              </p>
            </div>

            <div className="grid gap-3">
              {subcategoryTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="block rounded-xl border p-4 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div className="font-medium">{tool.name}</div>

                  <div className="text-sm text-gray-500 mt-1">
                    Convert {tool.unitFrom} to {tool.unitTo}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="text-sm text-gray-500 mt-2">
                This section contains tools for {subcategoryTitle.toLowerCase()}{" "}
                conversions and calculations.
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-dashed px-4 py-6 text-xs text-gray-400 text-center">
              Subcategory ad / promo slot
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
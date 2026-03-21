"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  factor: number;
  unitFrom: string;
  unitTo: string;
  formula: string;
  examples: number[];
  reverseSlug?: string;
};

export default function ToolTemplate({ tool }: { tool?: Tool }) {
  const [value, setValue] = useState("");

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

  const result = value ? (parseFloat(value) * tool.factor).toFixed(2) : "0";

  const relatedTools = tools
    .filter(
      (t) =>
        t.category === tool.category &&
        t.subcategory === tool.subcategory &&
        t.slug !== tool.slug
    )
    .slice(0, 5);

  if (relatedTools.length === 0) {
    relatedTools.push(
      ...tools.filter(
        (t) => t.category === tool.category && t.slug !== tool.slug
      )
    );
  }

  const categoryLabel = tool.category.replace(/-/g, " ");
  const subcategoryLabel = tool.subcategory.replace(/-/g, " ");

  return (
    <main className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href={`/tools/${tool.category}`} className="hover:text-gray-900 capitalize">
              {categoryLabel}
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
              className="hover:text-gray-900 capitalize"
            >
              {subcategoryLabel}
            </Link>
          </div>

          <p className="text-sm font-medium text-gray-500 mb-2 capitalize">
            {subcategoryLabel} {categoryLabel}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            {tool.name}
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            Convert {tool.unitFrom} to {tool.unitTo} instantly using this free online tool.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Ad slot (top)
            </div>

            {tool.reverseSlug && (
              <div className="mb-6">
                <Link
                  href={`/tools/${tool.category}/${tool.reverseSlug}`}
                  className="inline-block rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                  Switch to {tool.unitTo} to {tool.unitFrom}
                </Link>
              </div>
            )}

            <div className="rounded-2xl bg-gray-50 p-5 border">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter {tool.unitFrom}
              </label>

              <input
                type="number"
                value={value}
                placeholder={`Enter ${tool.unitFrom}`}
                onChange={(e) => setValue(e.target.value)}
                className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
              />

              <div className="mt-6 rounded-xl bg-white border p-5 text-center">
                <div className="text-sm text-gray-500 mb-1">Result</div>
                <div className="text-3xl font-bold tracking-tight">
                  {result} {tool.unitTo}
                </div>
              </div>
            </div>

            <div className="my-6 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Ad slot (middle)
            </div>

            <div className="grid gap-6">
              <section>
                <h2 className="text-xl font-semibold mb-2">Conversion formula</h2>
                <p className="text-gray-600">{tool.formula}</p>
              </section>

              {tool.examples && tool.factor && tool.unitFrom && tool.unitTo && (
  <section>
    <h2 className="text-xl font-semibold mb-2">Examples</h2>
    <ul className="space-y-2 text-gray-600">
      {tool.examples.map((example) => (
        <li key={example}>
          {example} {tool.unitFrom} ={" "}
          {(example * tool.factor).toFixed(2)} {tool.unitTo}
        </li>
      ))}
    </ul>
  </section>
)}
            </div>

            <div className="my-8 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Ad slot (bottom)
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-3">Related tools</h2>

              <div className="flex flex-wrap gap-2">
                {relatedTools.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/tools/${related.category}/${related.slug}`}
                    className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    {related.name}
                  </Link>
                ))}

                <Link
                  href={`/tools/${tool.category}`}
                  className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  All {tool.category}
                </Link>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border bg-white p-6 shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-3">About this tool</h3>
            <p className="text-sm text-gray-600">
              This tool helps you convert {tool.unitFrom} to {tool.unitTo} quickly and accurately.
              It belongs to the {subcategoryLabel} section within {categoryLabel}.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href={`/tools/${tool.category}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  All {tool.category}
                </Link>
<Link
  href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
  className="text-gray-600 hover:text-gray-900 capitalize"
>
  {subcategoryLabel} {categoryLabel}
</Link>
                <Link
                  href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
                  className="text-gray-600 hover:text-gray-900 capitalize"
                >
                  {subcategoryLabel} {categoryLabel}
                </Link>
                {tool.reverseSlug && (
                  <Link
                    href={`/tools/${tool.category}/${tool.reverseSlug}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {tool.unitTo} to {tool.unitFrom}
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Sidebar promo / ad slot
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
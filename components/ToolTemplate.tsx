"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  type: "converter" | "finance";
  description?: string;
  seoIntro?: string;
  factor?: number;
  unitFrom?: string;
  unitTo?: string;
  formula?: string;
  examples?: number[];
  reverseSlug?: string;
financeType?:
  | "simple-interest"
  | "compound-interest"
  | "loan-payment"
  | "roi-calculator"
  | "savings-growth"
  | "cagr"
  | "break-even"
  | "apr-calculator";
};

export default function ToolTemplate({ tool }: { tool?: Tool }) {
  const [value, setValue] = useState("");

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

  const numericValue = parseFloat(value) || 0;
  const result =
    value && tool.factor ? (numericValue * tool.factor).toFixed(2) : "0";

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
      ...tools
        .filter((t) => t.category === tool.category && t.slug !== tool.slug)
        .slice(0, 5)
    );
  }

  const categoryLabel = tool.category.replace(/-/g, " ");
  const subcategoryLabel = tool.subcategory.replace(/-/g, " ");

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}`}
              className="hover:text-gray-900 capitalize"
            >
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

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {subcategoryLabel} {categoryLabel}
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              {tool.name}
            </h1>

            <p className="text-base leading-7 text-gray-600 md:text-lg">
              {tool.description
                ? tool.description
                : `Convert ${tool.unitFrom} to ${tool.unitTo} instantly using this free online tool.`}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),360px]">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (top)
            </div>

            {tool.reverseSlug && tool.unitFrom && tool.unitTo && (
              <div className="mb-6">
                <Link
                  href={`/tools/${tool.category}/${tool.reverseSlug}`}
                  className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
                >
                  Switch to {tool.unitTo} to {tool.unitFrom}
                </Link>
              </div>
            )}

            <div className="overflow-hidden rounded-3xl border bg-gray-50">
              <div className="border-b bg-white/80 px-5 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Converter
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter a value below to convert instantly.
                </p>
              </div>

              <div className="space-y-5 p-5 md:p-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Enter {tool.unitFrom}
                  </label>

                  <input
                    type="number"
                    value={value}
                    placeholder={`Enter ${tool.unitFrom ?? "value"}`}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                  />
                </div>

                <div className="rounded-3xl border bg-white p-5">
                  <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Result
                  </div>
                  <div className="text-3xl font-semibold tracking-tight text-gray-900">
                    {result} {tool.unitTo}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (middle)
            </div>

            <div className="grid gap-6">
              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">Conversion formula</h2>
                <p className="text-gray-600">{tool.formula}</p>
              </section>

              {tool.examples &&
                tool.factor &&
                tool.unitFrom &&
                tool.unitTo && (
                  <section className="rounded-2xl border p-5">
                    <h2 className="mb-2 text-xl font-semibold">Examples</h2>
                    <ul className="space-y-2 text-gray-600">
                      {tool.examples.map((example) => (
                        <li key={example}>
                          {example} {tool.unitFrom} ={" "}
                          {(example * (tool.factor ?? 0)).toFixed(2)}{" "}
                          {tool.unitTo}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
            </div>

            <div className="mt-10 space-y-8">
              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">
                  What is {tool.name}?
                </h2>
                <p className="text-gray-600">
                  {tool.seoIntro
                    ? tool.seoIntro
                    : tool.description
                    ? tool.description
                    : `This tool helps you convert ${tool.unitFrom} to ${tool.unitTo} quickly and accurately.`}
                </p>
              </section>

              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">Why this matters</h2>
                <p className="text-gray-600">
                  Accurate unit conversions help you avoid mistakes, compare values
                  correctly, and work faster whether you are calculating for daily
                  life, travel, health, fitness, engineering, or business.
                </p>
              </section>

              <section className="rounded-2xl border p-5">
                <h2 className="mb-4 text-xl font-semibold">FAQ</h2>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <h3 className="mb-2 font-medium text-gray-900">
                      How do you convert {tool.unitFrom} to {tool.unitTo}?
                    </h3>
                    <p className="text-sm text-gray-600">
                      You convert {tool.unitFrom} to {tool.unitTo} by applying the
                      correct conversion factor. This calculator does that
                      automatically when you enter a value.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <h3 className="mb-2 font-medium text-gray-900">
                      When is this converter useful?
                    </h3>
                    <p className="text-sm text-gray-600">
                      This converter is useful whenever you need a fast and accurate
                      unit conversion for work, study, travel, shopping, fitness,
                      cooking, or technical tasks.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (bottom)
            </div>

            <div className="border-t pt-6">
              <h2 className="mb-3 text-xl font-semibold">Related tools</h2>

              <div className="flex flex-wrap gap-2">
                {relatedTools.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/tools/${related.category}/${related.slug}`}
                    className="inline-block rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    {related.name}
                  </Link>
                ))}

                <Link
                  href={`/tools/${tool.category}`}
                  className="inline-block rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  All {tool.category}
                </Link>
              </div>
            </div>
          </section>

          <aside className="h-fit rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">About this tool</h3>
            <p className="text-sm leading-6 text-gray-600">
              This tool helps you convert {tool.unitFrom} to {tool.unitTo} quickly
              and accurately. It belongs to the {subcategoryLabel} section within{" "}
              {categoryLabel}.
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-900">
                Quick links
              </h4>

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

                {tool.reverseSlug && tool.unitFrom && tool.unitTo && (
                  <Link
                    href={`/tools/${tool.category}/${tool.reverseSlug}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {tool.unitTo} to {tool.unitFrom}
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Sidebar promo / ad slot
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
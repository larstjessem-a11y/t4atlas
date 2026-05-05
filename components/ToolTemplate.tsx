"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";
import {
  monetizationConfig,
  defaultMonetizationConfig,
} from "@/data/monetization";

type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  type: "converter" | "finance" | "dev";
  description?: string;
  factor?: number;
  unitFrom?: string;
  unitTo?: string;
  formula?: string;
  examples?: number[];
  reverseSlug?: string;
};

export default function ToolTemplate({ tool }: { tool?: Tool }) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

  const monetization =
    monetizationConfig[tool.category] ?? defaultMonetizationConfig;

  const factor = tool.factor ?? 1;
  const unitFrom = tool.unitFrom ?? "value";
  const unitTo = tool.unitTo ?? "result";

  const result = useMemo(() => {
    if (!input.trim()) return "";

    const value = Number(input);
    if (Number.isNaN(value)) return "";

    return (value * factor).toString();
  }, [input, factor]);

  const relatedTools = tools
    .filter(
      (item) =>
        item.category === tool.category &&
        item.subcategory === tool.subcategory &&
        item.slug !== tool.slug
    )
    .slice(0, 6);

  async function handleCopy() {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  }

  const categoryLabel = tool.category.replace(/-/g, " ");
  const subcategoryLabel = tool.subcategory.replace(/-/g, " ");

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}`}
              className="capitalize hover:text-gray-900"
            >
              {categoryLabel}
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
              className="capitalize hover:text-gray-900"
            >
              {subcategoryLabel}
            </Link>
          </div>

          <h1 className="text-4xl font-semibold text-gray-900">{tool.name}</h1>

          <p className="mt-3 max-w-3xl text-gray-600">
            {tool.description || "Simple conversion tool."}
          </p>

{tool.slug === "fahrenheit-to-celsius" ? (
  <div className="mt-5 rounded-2xl border bg-gray-50 p-4 text-center">
    <div className="text-sm text-gray-500">Quick answer</div>

    <div className="mt-2 text-xl font-semibold text-gray-900">
      32°F = 0°C
    </div>

    <div className="mt-1 text-sm text-gray-600">
      68°F = 20°C • 77°F = 25°C • 86°F = 30°C
    </div>
  </div>

) : tool.slug === "feet-to-meters" ? (
  <div className="mt-5 rounded-2xl border bg-gray-50 p-4 text-center">
    <div className="text-sm text-gray-500">Quick answer</div>

    <div className="mt-2 text-xl font-semibold text-gray-900">
      6 ft = 1.83 m
    </div>

    <div className="mt-1 text-sm text-gray-600">
      5 ft = 1.52 m • 10 ft = 3.05 m • 100 ft = 30.48 m
    </div>
  </div>

) : tool.slug === "meters-to-feet" ? (
  <div className="mt-5 rounded-2xl border bg-gray-50 p-4 text-center">
    <div className="text-sm text-gray-500">Quick answer</div>

    <div className="mt-2 text-xl font-semibold text-gray-900">
      1.8 m = 5.91 ft
    </div>

    <div className="mt-1 text-sm text-gray-600">
      1.75 m = 5.74 ft • 2 m = 6.56 ft • 10 m = 32.81 ft
    </div>
  </div>

) : tool.slug === "inches-to-cm" ? (
  <div className="mt-5 rounded-2xl border bg-gray-50 p-4 text-center">
    <div className="text-sm text-gray-500">Quick answer</div>

    <div className="mt-2 text-xl font-semibold text-gray-900">
      1 inch = 2.54 cm
    </div>

    <div className="mt-1 text-sm text-gray-600">
      10 inches = 25.4 cm • 12 inches = 30.48 cm • 20 inches = 50.8 cm
    </div>
  </div>

) : tool.slug === "cm-to-inches" ? (
  <div className="mt-5 rounded-2xl border bg-gray-50 p-4 text-center">
    <div className="text-sm text-gray-500">Quick answer</div>

    <div className="mt-2 text-xl font-semibold text-gray-900">
      1 cm = 0.39 inches
    </div>

    <div className="mt-1 text-sm text-gray-600">
      10 cm = 3.94 in • 20 cm = 7.87 in • 30 cm = 11.81 in
    </div>
  </div>

) : (
  <div className="mt-5 rounded-2xl border bg-gray-50 p-4 text-center">
    <div className="text-sm text-gray-500">Quick conversion</div>
    <div className="mt-2 text-2xl font-semibold text-gray-900">
      1 {unitFrom} = {factor.toFixed(4)} {unitTo}
    </div>
  </div>
)}
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),360px]">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            {monetization.ads.top && (
              <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Ad slot (top)
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Enter {unitFrom}
                </label>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={`Enter ${unitFrom}...`}
                  className="w-full rounded-2xl border p-4 text-lg"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Result in {unitTo}
                  </label>

                  <button
                    onClick={handleCopy}
                    className="rounded border px-3 py-1 text-xs"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <input
                  value={result}
                  readOnly
                  className="w-full rounded-2xl border p-4 text-lg"
                />
              </div>
            </div>

            {monetization.ads.middle && (
              <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Ad slot (middle)
              </div>
            )}

            <section className="mt-6 rounded-2xl border p-5">
              <h2 className="mb-2 text-xl font-semibold">How to use</h2>
              <p className="text-gray-600">
                Enter a value in {unitFrom} to convert it to {unitTo}. The result
                updates automatically using the conversion factor for this unit
                pair.
              </p>

              {tool.formula && (
                <p className="mt-3 rounded-xl bg-gray-50 p-3 text-sm text-gray-700">
                  Formula: {tool.formula}
                </p>
              )}
            </section>

            {tool.examples && tool.examples.length > 0 && (
              <section className="mt-6">
                <h2 className="text-lg font-semibold">Common conversions</h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {tool.examples.map((value) => (
                    <div
                      key={value}
                      className="rounded-xl border px-4 py-2 text-sm text-gray-700"
                    >
                      {value} {unitFrom} = {(value * factor).toFixed(2)} {unitTo}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {tool.reverseSlug && (
              <section className="mt-6 rounded-2xl border bg-gray-50 p-5">
                <h2 className="text-lg font-semibold">
                  Need the opposite conversion?
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  You can also convert {unitTo} back to {unitFrom}.
                </p>
                <Link
                  href={`/tools/converters/${tool.reverseSlug}`}
                  className="mt-3 inline-flex rounded-xl border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Convert {unitTo} to {unitFrom}
                </Link>
              </section>
            )}

            {monetization.ads.bottom && (
              <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Ad slot (bottom)
              </div>
            )}

            <div className="mt-6 text-center text-xs text-gray-400">
              Fast, accurate, and free conversion tool
            </div>
          </section>

          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 font-semibold">Related tools</h3>

            <div className="mb-6 flex flex-col gap-2 text-sm">
              {relatedTools.map((item) => (
                <Link
                  key={item.slug}
                  href={`/tools/${item.category}/${item.slug}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-900">
                Quick links
              </h4>

              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href={`/tools/${tool.category}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  All {categoryLabel}
                </Link>

                <Link
                  href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {subcategoryLabel}
                </Link>
              </div>
            </div>

            {monetization.ads.sidebar && (
              <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Sidebar ad slot
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
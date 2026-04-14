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
};

export default function ToolTemplate({ tool }: { tool?: Tool }) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

  const monetization =
    monetizationConfig[tool.category] ?? defaultMonetizationConfig;

  const result = useMemo(() => {
    if (!input.trim()) return "";

    const value = Number(input);
    if (isNaN(value)) return "";

    if (tool.factor) {
      return (value * tool.factor).toString();
    }

    return "";
  }, [input, tool.factor]);

  const relatedTools = tools
    .filter(
      (t) =>
        t.category === tool.category &&
        t.subcategory === tool.subcategory &&
        t.slug !== tool.slug
    )
    .slice(0, 6);

  async function handleCopy() {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  const categoryLabel = tool.category.replace(/-/g, " ");
  const subcategoryLabel = tool.subcategory.replace(/-/g, " ");

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
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

          <h1 className="text-4xl font-semibold text-gray-900">
            {tool.name}
          </h1>

          <p className="mt-3 max-w-3xl text-gray-600">
            {tool.description || "Simple conversion tool."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),360px]">
          {/* MAIN */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            {/* Top ad */}
            {monetization.ads.top && (
              <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Ad slot (top)
              </div>
            )}

            {/* Converter UI */}
            <div className="grid gap-5 md:grid-cols-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Enter ${tool.unitFrom || "value"}...`}
                className="w-full rounded-2xl border p-4 text-lg"
              />

              <div>
                <button
                  onClick={handleCopy}
                  className="mb-2 rounded border px-3 py-1 text-xs"
                >
                  {copied ? "Copied" : "Copy"}
                </button>

                <input
                  value={result}
                  readOnly
                  className="w-full rounded-2xl border p-4 text-lg"
                />
              </div>
            </div>

            {/* Middle ad */}
            {monetization.ads.middle && (
              <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Ad slot (middle)
              </div>
            )}

            {/* Simple explanation */}
            <div className="mt-6 rounded-2xl border p-5">
              <h2 className="mb-2 text-xl font-semibold">How to use</h2>
              <p className="text-gray-600">
                Enter a value in {tool.unitFrom} to convert it to{" "}
                {tool.unitTo}.
              </p>
            </div>

            {/* Bottom ad */}
            {monetization.ads.bottom && (
              <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
                Ad slot (bottom)
              </div>
            )}
          </section>

          {/* SIDEBAR */}
          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 font-semibold">Related tools</h3>

            <div className="mb-6 flex flex-col gap-2 text-sm">
              {relatedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.category}/${t.slug}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {t.name}
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

            {/* Sidebar ad */}
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
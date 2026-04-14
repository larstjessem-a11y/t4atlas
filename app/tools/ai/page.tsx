import type { Metadata } from "next";
import Link from "next/link";
import { aiNavigation } from "@/data/navigation";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "AI Tools Hub | T4 Atlas",
  description:
    "Explore AI tool comparisons, alternatives, and best-of guides for writing, coding, research, productivity, and more.",
};

export default function AiHubPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <span>AI Tools</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI hub
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            AI Tools
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Explore the best AI tools, product alternatives, and head-to-head
            comparisons for writing, coding, research, productivity, image
            generation, and more.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
         

          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">AI hub focus</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "best tools",
                "alternatives",
                "comparisons",
                "writing",
                "coding",
                "research",
                "productivity",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
<div className="mt-6 rounded-2xl bg-gray-50 p-4">
  <h3 className="mb-3 text-sm font-semibold text-gray-900">Quick links</h3>

  <div className="flex flex-col gap-2 text-sm">
    {aiNavigation.moneyPages.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="text-gray-600 hover:text-gray-900"
      >
        {item.name}
      </Link>
    ))}

    {aiNavigation.comparisons.map((item) => (
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
            <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Sidebar ad / affiliate slot
            </div>
          </aside>
        </div>

        <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (bottom)
        </div>
<div className="mt-8">
  <AffiliateBlock
    hub="ai"
    placement="editorial_bottom"
    title="Recommended AI tools"
  />
</div>
      </div>
    </main>
  );
}
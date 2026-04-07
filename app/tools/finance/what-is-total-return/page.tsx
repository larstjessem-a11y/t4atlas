import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Total Return? | T4 Atlas",
  description:
    "Learn what total return is, how it works, how to calculate it, and why total return matters when comparing investments.",
  keywords: [
    "what is total return",
    "total return explained",
    "total return meaning",
    "how to calculate total return",
    "total return vs roi",
    "investment total return",
  ],
};

export default function WhatIsTotalReturnPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/finance" className="hover:text-gray-900">
              Finance Tools
            </Link>
            <span>→</span>
            <span>What Is Total Return?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is Total Return?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Total return measures the full gain or loss of an investment over a
            holding period. It focuses on the overall change between starting
            value and ending value, rather than the annualized rate of growth.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Total return formula</h2>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800">
              Total Return = (Ending Value - Starting Value) / Starting Value
            </div>

            <p className="mt-4 text-gray-600">
              Total return is usually shown as a percentage and tells you how much
              an investment gained or lost over the full period measured.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Why total return is useful</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Simple measure of full investment performance</li>
              <li>Easy to compare overall outcomes</li>
              <li>Useful for stocks, funds, property, and business investments</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Limitations of total return</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Does not account for time</li>
              <li>Does not show annualized growth</li>
              <li>Can mislead when comparing different holding periods</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Total return vs other metrics
            </h2>

            <p className="text-gray-600 mb-4">
              Total return is often compared with ROI, CAGR, and annualized return.
              It tells you the full outcome, while CAGR and annualized return help
              normalize results across time.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/roi-vs-cagr-vs-payback"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                ROI vs CAGR vs Payback
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Use our total return calculator
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/total-return-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Total Return Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Typical use cases
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>measuring stock portfolio growth</li>
              <li>comparing property appreciation</li>
              <li>evaluating fund performance</li>
              <li>reviewing business or private investments</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use total return?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>When you want the full outcome of an investment</li>
              <li>When comparing simple gain or loss</li>
              <li>When time normalization is not the main issue</li>
              <li>When screening investments quickly before deeper analysis</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
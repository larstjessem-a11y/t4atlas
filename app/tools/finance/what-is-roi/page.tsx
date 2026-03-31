import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is ROI? | T4 Atlas",
  description:
    "Learn what ROI (Return on Investment) is, how it works, how to calculate it, and when to use ROI in investment decisions.",
  keywords: [
    "what is roi",
    "return on investment explained",
    "roi meaning",
    "how to calculate roi",
    "roi formula",
  ],
};

export default function WhatIsRoiPage() {
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
            <span>What Is ROI?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is ROI?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            ROI, or Return on Investment, is one of the simplest and most widely
            used metrics for evaluating how profitable an investment is relative
            to its cost.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">ROI formula</h2>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800">
              ROI = (Gain - Cost) / Cost
            </div>

            <p className="mt-4 text-gray-600">
              ROI is usually expressed as a percentage. A higher ROI means a more
              profitable investment relative to its cost.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Why ROI is useful</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Simple and easy to understand</li>
              <li>Quick comparison between investments</li>
              <li>Widely used across industries</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Limitations of ROI</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Does not account for time</li>
              <li>Ignores risk and volatility</li>
              <li>Can be misleading for long-term investments</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              ROI vs other metrics
            </h2>

            <p className="text-gray-600 mb-4">
              ROI is often compared with CAGR and payback period. Each measures
              different aspects of an investment.
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
              Use our ROI calculator
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/roi-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                ROI Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use ROI?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Short-term investment comparisons</li>
              <li>Quick profitability checks</li>
              <li>Early-stage decision making</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
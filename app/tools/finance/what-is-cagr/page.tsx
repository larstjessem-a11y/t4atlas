import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is CAGR? | T4 Atlas",
  description:
    "Learn what CAGR (Compound Annual Growth Rate) is, how it works, how to calculate it, and when to use CAGR to compare long-term investments.",
  keywords: [
    "what is cagr",
    "compound annual growth rate explained",
    "cagr meaning",
    "how to calculate cagr",
    "cagr formula",
  ],
};

export default function WhatIsCagrPage() {
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
            <span>What Is CAGR?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is CAGR?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            CAGR, or Compound Annual Growth Rate, measures the average annual
            growth rate of an investment over a period of time, assuming the
            returns were compounded evenly each year.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">CAGR formula</h2>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800">
              CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1
            </div>

            <p className="mt-4 text-gray-600">
              CAGR is usually expressed as a percentage and helps normalize returns
              across time periods.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Why CAGR is useful</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Accounts for time</li>
              <li>Helps compare investments over different periods</li>
              <li>Smoother and more comparable than raw total return</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Limitations of CAGR</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Smooths volatility and hides the path of returns</li>
              <li>Assumes steady compounding</li>
              <li>Does not capture risk by itself</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              CAGR vs other metrics
            </h2>

            <p className="text-gray-600 mb-4">
              CAGR is often compared with ROI and payback period. Each metric tells
              you something different about performance, growth, or recovery time.
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
              Use our CAGR calculator
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/cagr-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                CAGR Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use CAGR?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Long-term investment comparisons</li>
              <li>Comparing performance across time horizons</li>
              <li>Evaluating growth-oriented assets</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
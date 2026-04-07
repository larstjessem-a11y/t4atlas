import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Payback Period? | T4 Atlas",
  description:
    "Learn what payback period is, how it works, how to calculate it, and when to use payback period to evaluate investments, projects, and business decisions.",
  keywords: [
    "what is payback period",
    "payback period explained",
    "payback period meaning",
    "how to calculate payback period",
    "payback period formula",
    "investment payback period",
  ],
};

export default function WhatIsPaybackPeriodPage() {
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
            <span>What Is Payback Period?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is Payback Period?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Payback period measures how long it takes to recover the original
            cost of an investment. It is one of the simplest ways to think about
            capital recovery, liquidity, and risk.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Payback period formula</h2>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800">
              Payback Period = Initial Investment / Annual Cash Flow
            </div>

            <p className="mt-4 text-gray-600">
              In simple cases, payback period is calculated by dividing the
              initial investment by the yearly cash inflow or savings produced
              by the investment.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Why payback period is useful</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Simple to understand</li>
              <li>Useful for risk-aware decisions</li>
              <li>Highlights speed of capital recovery</li>
              <li>Helpful for comparing practical real-world investments</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Limitations of payback period</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Ignores returns after payback is reached</li>
              <li>Does not measure full profitability</li>
              <li>Does not annualize performance</li>
              <li>Can favor short-term recovery over total long-term gain</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Payback period vs other metrics
            </h2>

            <p className="text-gray-600 mb-4">
              Payback period is often used alongside ROI and CAGR. Payback tells
              you how fast capital comes back, while ROI and CAGR tell you more
              about profitability and long-term performance.
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
              Use our payback calculator
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/payback-period"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Payback Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Typical use cases
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>solar panels</li>
              <li>rental properties</li>
              <li>equipment purchases</li>
              <li>small business investments</li>
              <li>capital budgeting decisions</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use payback period?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>When liquidity matters</li>
              <li>When downside risk matters more than upside potential</li>
              <li>When comparing practical projects with clear cash flows</li>
              <li>When you want to know how fast capital comes back</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
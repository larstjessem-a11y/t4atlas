import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is the Rule of 72? | T4 Atlas",
  description:
    "Learn what the Rule of 72 is, how it works, how to estimate doubling time, and when to use it for investment and compounding decisions.",
  keywords: [
    "what is rule of 72",
    "rule of 72 explained",
    "how long to double money",
    "rule of 72 formula",
    "compound interest doubling time",
  ],
};

export default function WhatIsRuleOf72Page() {
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
            <span>What Is the Rule of 72?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is the Rule of 72?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The Rule of 72 is a simple way to estimate how long it takes for an
            investment to double. It is widely used in finance to quickly
            understand the impact of compounding over time.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Rule of 72 formula</h2>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800">
              Years to Double ≈ 72 / Annual Return Rate (%)
            </div>

            <p className="mt-4 text-gray-600">
              Divide 72 by the annual return rate to estimate how many years it
              takes for an investment to double in value.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Why the Rule of 72 is useful</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Quick mental estimate</li>
              <li>Easy way to understand compounding</li>
              <li>Helps compare different return rates</li>
              <li>Useful for long-term planning</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Limitations of the Rule of 72</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Approximation, not exact</li>
              <li>Less accurate for very high or very low rates</li>
              <li>Assumes constant return over time</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Rule of 72 vs other metrics
            </h2>

            <p className="text-gray-600 mb-4">
              The Rule of 72 complements metrics like CAGR and annualized return.
              While CAGR gives you the exact annual growth rate, the Rule of 72
              gives a fast estimate of how long it takes for your investment to
              double.
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
              Use our Rule of 72 calculator
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/rule-of-72-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Rule of 72 Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Typical use cases
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>long-term investing</li>
              <li>retirement planning</li>
              <li>comparing interest rates</li>
              <li>understanding compounding effects</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use the Rule of 72?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>When you want a quick estimate</li>
              <li>When comparing investment opportunities</li>
              <li>When planning long-term growth</li>
              <li>When teaching or explaining compounding</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
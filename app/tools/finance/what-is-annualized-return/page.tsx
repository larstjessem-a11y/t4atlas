import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Annualized Return? | T4 Atlas",
  description:
    "Learn what annualized return is, how it works, and how to compare investment performance across different time periods.",
  keywords: [
    "what is annualized return",
    "annualized return explained",
    "average annual return meaning",
    "investment return per year",
  ],
};

export default function WhatIsAnnualizedReturnPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools">Tools</Link>
            <span>→</span>
            <Link href="/tools/finance">Finance Tools</Link>
            <span>→</span>
            <span>What Is Annualized Return?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is Annualized Return?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Annualized return measures the average yearly return of an investment over time. 
            It allows you to compare investments across different time periods on a consistent basis.
          </p>
        </div>

        <div className="grid gap-6">

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Why annualized return matters
            </h2>

            <p className="text-gray-600">
              Without annualization, it is difficult to compare investments that have been held for different lengths of time. 
              Annualized return converts total performance into a yearly rate, making comparisons much clearer.
            </p>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When to use annualized return
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>comparing investments over different time periods</li>
              <li>evaluating portfolio performance</li>
              <li>benchmarking against market returns</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Annualized return vs CAGR
            </h2>

            <p className="text-gray-600">
              Annualized return and CAGR are closely related. CAGR assumes smooth compounding, 
              while annualized return may reflect actual variations depending on how it is calculated.
            </p>

            <div className="mt-4">
              <Link
                href="/tools/finance/annualized-return-vs-cagr"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Annualized Return vs CAGR
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Use the calculator
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/annualized-return-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Annualized Return Calculator
              </Link>

              <Link
                href="/tools/finance/cagr-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                CAGR Calculator
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
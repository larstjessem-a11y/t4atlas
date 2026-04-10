import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annualized Return vs CAGR | T4 Atlas",
  description:
    "Compare annualized return vs CAGR, understand the differences, and learn when to use each metric for investment analysis.",
  keywords: [
    "annualized return vs cagr",
    "cagr vs annualized return",
    "difference between cagr and annualized return",
    "investment return comparison",
  ],
};

export default function AnnualizedVsCagrPage() {
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
            <span>Annualized Return vs CAGR</span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Annualized Return vs CAGR
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Annualized return and CAGR are often used interchangeably, but they
            are not always the same. Understanding the difference helps you
            compare investments more accurately.
          </p>
        </div>

        <div className="grid gap-6">

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Key difference</h2>

            <p className="text-gray-600">
              CAGR assumes smooth compounding over time, while annualized return
              may reflect the actual average yearly return depending on how it is
              calculated. In many simple cases, they are identical, but in more
              complex scenarios they can differ.
            </p>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">When they are the same</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>single investment period</li>
              <li>no irregular cash flows</li>
              <li>consistent compounding</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">When they differ</h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>irregular contributions</li>
              <li>varying returns year-to-year</li>
              <li>real-world portfolio performance</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Which should you use?
            </h2>

            <p className="text-gray-600">
              Use CAGR when you want a clean, comparable growth rate. Use
              annualized return when working with real-world data that includes
              variation, contributions, or non-uniform growth.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Use the tools
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/cagr-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                CAGR Calculator
              </Link>

              <Link
                href="/tools/finance/annualized-return-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Annualized Return Calculator
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
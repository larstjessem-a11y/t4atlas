import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Dividend Yield | T4 Atlas",
  description:
    "Learn how to calculate dividend yield, compare dividend-paying stocks, and use our dividend yield calculator for different investing scenarios.",
  keywords: [
    "how to calculate dividend yield",
    "dividend yield calculator",
    "dividend investing guide",
    "high dividend yield stocks",
    "dividend income investing",
    "stock dividend yield",
  ],
};

export default function DividendYieldGuidePage() {
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
              Finance
            </Link>
            <span>→</span>
            <span>Dividend Yield Guide</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            How to Calculate Dividend Yield
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Dividend yield is one of the fastest ways to estimate how much income
            a stock generates relative to its price. This guide explains the
            formula, what dividend yield actually tells you, and how to use it
            alongside other investing metrics.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              What is dividend yield?
            </h2>
            <p className="leading-7 text-gray-600">
              Dividend yield measures how much annual dividend income a company
              pays relative to its current share price. It is usually expressed
              as a percentage and is commonly used by income-focused investors to
              compare dividend-paying stocks.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Dividend yield formula
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                The standard formula is:
              </p>

              <p className="font-medium text-gray-900">
                Dividend Yield (%) = (Annual Dividend per Share / Share Price) × 100
              </p>

              <p>
                For example, if a stock pays 5 dollars per year in dividends and
                the share price is 100 dollars, the dividend yield is 5%.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Use our dividend yield calculator
            </h2>
            <p className="mb-4 leading-7 text-gray-600">
              Use the calculator to test different combinations of share price
              and annual dividend per share. This can help you compare stocks and
              understand how yield changes when price moves.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/dividend-yield-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Open Dividend Yield Calculator
              </Link>

              <Link
                href="/tools/finance/dividend-yield-calculator?scenario=income-stocks"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Income Stock Scenario
              </Link>

              <Link
                href="/tools/finance/dividend-yield-calculator?scenario=high-vs-low-yield"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                High vs Low Yield Scenario
              </Link>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Why a high dividend yield is not always better
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                A very high dividend yield can sometimes be a warning sign rather
                than an opportunity. If a stock price falls sharply while the
                dividend remains unchanged, the yield rises — but that does not
                necessarily mean the business is healthy.
              </p>
              <p>
                Investors should also look at payout ratio, balance sheet
                strength, earnings stability, and whether the dividend is likely
                to be maintained.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Dividend yield vs total return
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Dividend yield measures income, but it does not capture total
                return. A stock with a high dividend yield can still perform
                poorly if the share price declines. That is why investors often
                use dividend yield together with total return, CAGR, and
                valuation metrics.
              </p>
              <p>
                In other words, a strong dividend may help, but it should not be
                the only reason to buy a stock.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  What is a good dividend yield?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  It depends on sector, market conditions, and risk. A moderate
                  and sustainable dividend yield is often more attractive than an
                  unusually high yield that may not be sustainable.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is dividend yield the same as return?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. Dividend yield measures income relative to price. Total
                  return also includes capital gains or losses in the stock price.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Why does dividend yield change even when the dividend stays the same?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Because the share price changes. If the stock price falls, the
                  dividend yield rises. If the price rises, the dividend yield falls.
                </p>
              </div>
            </div>
          </section>

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related finance tools</h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/dividend-yield-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Dividend Yield Calculator
              </Link>
              <Link
                href="/tools/finance/cagr-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                CAGR Calculator
              </Link>
              <Link
                href="/tools/finance/roi-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                ROI Calculator
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
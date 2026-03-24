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
    Dividend yield vs other investment metrics
  </h2>

  <p className="mb-4 text-gray-600">
    Dividend yield is just one way to evaluate an investment. To get a more complete picture, it is often used alongside other financial metrics that measure growth, profitability, and total return.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border rounded-2xl overflow-hidden text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-3">Metric</th>
          <th className="text-left p-3">What it measures</th>
          <th className="text-left p-3">Best used for</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="p-3 font-medium">Dividend Yield</td>
          <td className="p-3">Income relative to price</td>
          <td className="p-3">Comparing dividend-paying stocks</td>
        </tr>
        <tr className="border-t">
          <td className="p-3 font-medium">ROI</td>
          <td className="p-3">Profit relative to investment</td>
          <td className="p-3">Evaluating investment efficiency</td>
        </tr>
        <tr className="border-t">
          <td className="p-3 font-medium">CAGR</td>
          <td className="p-3">Annualized growth rate</td>
          <td className="p-3">Long-term investment performance</td>
        </tr>
        <tr className="border-t">
          <td className="p-3 font-medium">Investment Return</td>
          <td className="p-3">Total gain or loss</td>
          <td className="p-3">Overall performance evaluation</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="mt-4 flex flex-wrap gap-3">
    <Link
      href="/tools/finance/roi-calculator"
      className="inline-flex rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
    >
      ROI Calculator
    </Link>

    <Link
      href="/tools/finance/cagr-calculator"
      className="inline-flex rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
    >
      CAGR Calculator
    </Link>

    <Link
      href="/tools/finance/investment-return-calculator"
      className="inline-flex rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
    >
      Investment Return Calculator
    </Link>
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
    How to interpret dividend yield
  </h2>

  <div className="space-y-4 text-gray-600">
    <p>
      Dividend yield is most useful when you compare it in context. A 4% yield
      may look attractive, but the number only becomes meaningful when you also
      consider the quality of the business, the sustainability of the payout,
      and the broader return profile of the stock.
    </p>

    <p>
      In practice, investors often interpret dividend yield alongside payout
      ratio, earnings stability, balance sheet strength, and long-term return.
      A lower but sustainable yield can be more valuable than a very high yield
      that may later be reduced.
    </p>

    <p>
      It is also important to remember that yield changes as the stock price
      moves. A rising yield can reflect higher income potential, but it can also
      signal that the market expects weaker performance ahead.
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

<section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
  <h2 className="mb-3 text-2xl font-semibold">
    Next step: compare income, growth, and total return
  </h2>

  <p className="mb-5 max-w-3xl leading-7 text-gray-600">
    Dividend yield is useful for evaluating income, but it should rarely be used on its own. To get a better picture of an investment, compare dividend income with total return, annualized growth, and overall profitability.
  </p>

  <div className="flex flex-wrap gap-3">
    <Link
      href="/tools/finance/dividend-yield-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Calculate Dividend Yield
    </Link>

    <Link
      href="/tools/finance/cagr-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Compare with CAGR
    </Link>

    <Link
      href="/tools/finance/investment-return-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Check Investment Return
    </Link>
  </div>

  <div className="mt-5 rounded-2xl border border-dashed p-4 text-sm text-gray-500">
    Future lead capture block: get investing frameworks, comparison checklists, or tool updates by email.
  </div>
</section>

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
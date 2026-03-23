import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage vs Rent Calculator Guide | T4 Atlas",
  description:
    "Compare mortgage costs with renting and use our mortgage calculator to test different housing scenarios, interest rates, and loan terms.",
  keywords: [
    "mortgage vs rent calculator",
    "rent vs buy guide",
    "mortgage calculator",
    "mortgage vs renting",
    "home buying calculator",
    "rent or buy decision",
  ],
};

export default function MortgageVsRentPage() {
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
            <span>Mortgage vs Rent Guide</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Mortgage vs Rent Calculator Guide
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Deciding whether to rent or buy depends on more than just the monthly
            payment. This guide helps you think through the key variables and use
            a mortgage calculator to compare realistic scenarios.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Why this comparison matters
            </h2>
            <p className="leading-7 text-gray-600">
              Many people compare rent with mortgage payments as if they were
              directly equivalent. In reality, buying a home also includes
              interest costs, maintenance, taxes, insurance, and the opportunity
              cost of capital. Renting may look more expensive month to month,
              while buying may create long-term equity. The right answer depends
              on your time horizon, interest rates, housing prices, flexibility,
              and how long you expect to stay in the property.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              What to compare when renting vs buying
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                A good mortgage vs rent comparison should include more than the
                monthly payment. You should compare mortgage principal and
                interest, property taxes, maintenance, insurance, fees, expected
                appreciation, and the return you might earn if you invested your
                down payment instead.
              </p>

              <p>
                Renting often provides flexibility and lower upfront costs.
                Buying may make more sense if you plan to stay in the home for
                several years and can handle interest-rate risk, maintenance, and
                transaction costs.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Use our mortgage calculator
            </h2>
            <p className="mb-4 leading-7 text-gray-600">
              Start by estimating your monthly mortgage payment under different
              interest-rate and loan-term scenarios. Then compare that with your
              expected rent and additional ownership costs.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/mortgage-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Open Mortgage Calculator
              </Link>

              <Link
                href="/tools/finance/mortgage-calculator?scenario=5-percent-interest"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Mortgage at 5% Interest
              </Link>

              <Link
                href="/tools/finance/mortgage-calculator?scenario=30-year-mortgage"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                30-Year Mortgage Scenario
              </Link>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              When buying usually makes more sense
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Buying tends to look more attractive when you expect to stay in
                the same property for a longer period, when mortgage rates are
                manageable, and when local housing prices are not severely
                stretched relative to income and rent.
              </p>
              <p>
                A mortgage calculator is useful here because small changes in
                interest rates or loan term can materially change the monthly
                payment and total borrowing cost.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              When renting may be the smarter option
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Renting may be preferable when you need flexibility, expect to
                move within a few years, or want to avoid the risk of unexpected
                maintenance and housing-market downside. In some markets, renting
                is significantly cheaper than owning even before accounting for
                opportunity cost.
              </p>
              <p>
                The best decision is rarely ideological. It is usually a
                function of time horizon, cash flow, and your realistic
                assumptions about costs and risk.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is it always better to buy than rent?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. Buying makes more sense in some markets and time horizons,
                  while renting can be financially and practically superior in
                  others. Mobility, transaction costs, interest rates, and market
                  risk all matter.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  What is the biggest mistake in rent vs buy comparisons?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  The most common mistake is comparing rent only with the monthly
                  mortgage payment while ignoring taxes, maintenance, insurance,
                  fees, and the cost of tying up capital in a home.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Should I use different mortgage scenarios?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Yes. Testing different interest rates and loan terms is one of
                  the fastest ways to understand how sensitive your decision is
                  to changing market conditions.
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
                href="/tools/finance/mortgage-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Mortgage Calculator
              </Link>
              <Link
                href="/tools/finance/loan-payment"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Loan Payment Calculator
              </Link>
              <Link
                href="/tools/finance/break-even-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Break-Even Calculator
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
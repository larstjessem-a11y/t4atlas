import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ROI vs CAGR vs Payback Period | T4 Atlas",
  description:
    "Compare ROI, CAGR, and payback period. Learn the differences, when to use each metric, and how to evaluate investments effectively.",
  keywords: [
    "roi vs cagr vs payback",
    "difference between roi and cagr",
    "payback period vs roi",
    "which metric to use investment",
    "investment return metrics comparison",
  ],
};

export default function RoiVsCagrVsPaybackPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
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
            <span>ROI vs CAGR vs Payback</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            ROI vs CAGR vs Payback Period
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            ROI, CAGR, and payback period are three of the most common metrics used
            to evaluate investments. They measure different aspects of performance,
            and choosing the wrong one can lead to poor decisions.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Metric</th>
                    <th className="p-3 text-left">What it measures</th>
                    <th className="p-3 text-left">Time factor</th>
                    <th className="p-3 text-left">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">ROI</td>
                    <td className="p-3">Total return</td>
                    <td className="p-3">Ignored</td>
                    <td className="p-3">Simple comparisons</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">CAGR</td>
                    <td className="p-3">Annualized return</td>
                    <td className="p-3">Included</td>
                    <td className="p-3">Long-term investments</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Payback</td>
                    <td className="p-3">Time to recover investment</td>
                    <td className="p-3">Core metric</td>
                    <td className="p-3">Risk / liquidity focus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">ROI (Return on Investment)</h2>
            <p className="text-gray-600 mb-4">
              ROI measures the total return relative to the initial investment.
              It is simple and intuitive but does not account for time.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/tools/finance/roi-calculator" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                ROI Calculator
              </Link>

<Link
  href="/tools/finance/what-is-roi"
  className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
>
  What Is ROI?
</Link>

            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">CAGR (Compound Annual Growth Rate)</h2>
            <p className="text-gray-600 mb-4">
              CAGR shows the annual growth rate of an investment over time.
              It smooths volatility and enables better comparisons across time horizons.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/tools/finance/cagr-calculator" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                CAGR Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Payback Period</h2>
            <p className="text-gray-600 mb-4">
              Payback period measures how long it takes to recover the initial investment.
              It is often used to assess risk and liquidity rather than return.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/tools/finance/payback-period" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Payback Calculator
              </Link>
<Link
  href="/tools/finance/what-is-payback-period"
  className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
>
  What Is Payback Period?
</Link>

            </div>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use each?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Use ROI → when comparing simple outcomes</li>
              <li>Use CAGR → when comparing investments over time</li>
              <li>Use Payback → when evaluating risk and liquidity</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Common mistake
            </h2>

            <p className="text-gray-600">
              Many investors compare ROI across different time periods without adjusting
              for time. This leads to misleading conclusions and poor investment decisions.
            </p>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Use the right metric for the job
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link href="/tools/finance/roi-calculator" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                ROI Calculator
              </Link>

              <Link href="/tools/finance/cagr-calculator" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                CAGR Calculator
              </Link>

              <Link href="/tools/finance/payback-period" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Payback Calculator
              </Link>

              <Link href="/tools/finance/best-investments-with-fastest-payback-period" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Best Investments (Payback)
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long to Reach $100k? | T4 Atlas",
  description:
    "Estimate how long it takes to reach $100,000 based on savings rate, returns, and compounding. Explore scenarios and strategies.",
  keywords: [
    "how long to reach 100k",
    "how to reach 100k savings",
    "time to 100k investment",
    "how long to save 100k",
  ],
};

export default function HowLongToReach100kPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools">Tools</Link>
            <span>→</span>
            <Link href="/tools/finance">Finance Tools</Link>
            <span>→</span>
            <span>How Long to Reach $100k</span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            How Long Does It Take to Reach $100k?
          </h1>

          <p className="text-base leading-7 text-gray-600 md:text-lg">
            Reaching your first $100,000 is one of the most important milestones in building wealth. 
            The time it takes depends on your savings rate, your return, and how consistently you invest.
          </p>
        </div>

        <div className="grid gap-6">

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              The three key drivers
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>How much you save each month</li>
              <li>Your annual return (investment performance)</li>
              <li>How long you stay invested</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Example timelines
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>$500/month at 7% → ~12–13 years</li>
              <li>$1,000/month at 7% → ~8–9 years</li>
              <li>$2,000/month at 7% → ~5–6 years</li>
              <li>$1,000/month at 10% → faster due to compounding</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Use the calculators
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/savings-growth"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Savings Growth Calculator
              </Link>

              <Link
                href="/tools/finance/compound-interest"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Compound Interest Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Why the first $100k matters
            </h2>

            <p className="text-gray-600">
              The first $100,000 is often the hardest because most of the growth comes from savings, not compounding. 
              After that, compounding starts to work more in your favor, accelerating your wealth over time.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Related tools and guides
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/rule-of-72-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Rule of 72 Calculator
              </Link>

              <Link
                href="/tools/finance/what-is-cagr"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                What Is CAGR?
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
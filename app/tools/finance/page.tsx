import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { financeEditorialPages } from "@/data/financeEditorial";

export const metadata: Metadata = {
  title: "Finance Tools Hub | T4 Atlas",
  description:
    "Explore finance calculators, investment tools, comparisons, best-of pages, alternatives, and editorial content for investing, budgeting, banking, and saving.",
};

const financeTools = tools.filter((tool) => tool.category === "finance");

const investmentCalculators = financeTools.filter((tool) =>
  [
    "roi-calculator",
    "cagr",
    "investment-return",
    "annualized-return",
    "total-return",
    "return-multiple",
    "payback-period",
    "rule-of-72",
  ].includes(tool.financeType ?? "")
);

const loanAndInterestCalculators = financeTools.filter((tool) =>
  [
    "simple-interest",
    "compound-interest",
    "loan-payment",
    "savings-growth",
    "break-even",
    "apr-calculator",
  ].includes(tool.financeType ?? "")
);

const bestPages = financeEditorialPages.filter((page) => page.type === "best");
const alternativePages = financeEditorialPages.filter(
  (page) => page.type === "alternative"
);
const comparisonPages = financeEditorialPages.filter(
  (page) => page.type === "comparison"
);

function FinanceToolCard({
  name,
  description,
  href,
}: {
  name: string;
  description?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border bg-white px-4 py-4 transition hover:bg-gray-50 hover:shadow-sm"
    >
      <div className="text-sm font-semibold text-gray-900">{name}</div>
      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      )}
    </Link>
  );
}

export default function FinanceHubPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <span>Finance</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance hub
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Finance Tools
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Explore finance calculators, investment return tools, interest
            calculators, budgeting guides, broker comparisons, and personal
            finance decision pages.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <section className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Finance calculators
              </h2>
              <p className="mt-2 max-w-3xl text-gray-600">
                Start with calculators for investment returns, CAGR, ROI,
                compound interest, loan payments, savings growth, and payback
                period.
              </p>
            </div>

            <Link
              href="/tools"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              All tools
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {financeTools.slice(0, 9).map((tool) => (
              <FinanceToolCard
                key={tool.slug}
                name={tool.name}
                description={tool.description}
                href={`/tools/finance/${tool.slug}`}
              />
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 lg:col-span-2">
            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">
                Investment calculators
              </h2>
              <p className="mb-5 text-gray-600">
                Tools for ROI, CAGR, annualized return, total return, payback
                period, and investment growth.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {investmentCalculators.map((tool) => (
                  <FinanceToolCard
                    key={tool.slug}
                    name={tool.name}
                    description={tool.description}
                    href={`/tools/finance/${tool.slug}`}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">
                Loan, savings, and interest calculators
              </h2>
              <p className="mb-5 text-gray-600">
                Tools for compound interest, simple interest, loan payments,
                APR, savings growth, and break-even calculations.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {loanAndInterestCalculators.map((tool) => (
                  <FinanceToolCard
                    key={tool.slug}
                    name={tool.name}
                    description={tool.description}
                    href={`/tools/finance/${tool.slug}`}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">
                Best finance apps and platforms
              </h2>
              <p className="mb-5 text-gray-600">
                Best-of pages compare apps, platforms, and tools across
                budgeting, investing, saving, and banking.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {bestPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Alternatives</h2>
              <p className="mb-5 text-gray-600">
                Alternative pages are useful when users already know one product
                and want close substitutes.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {alternativePages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Comparisons</h2>
              <p className="mb-5 text-gray-600">
                Comparison pages help users decide between two specific brokers,
                platforms, or finance products.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {comparisonPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Finance hub focus</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "calculators",
                "investing",
                "returns",
                "interest",
                "budgeting",
                "saving",
                "brokers",
                "comparisons",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                Popular calculators
              </h3>

              <div className="flex flex-col gap-2 text-sm">
                {financeTools.slice(0, 8).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.category}/${tool.slug}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                Personal finance pages
              </h3>

              <div className="flex flex-col gap-2 text-sm">
                {financeEditorialPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Sidebar ad / affiliate slot
            </div>
          </aside>
        </div>

        <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (bottom)
        </div>
      </div>
    </main>
  );
}
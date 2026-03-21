"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  type: "converter" | "finance";
  financeType?:
    | "simple-interest"
    | "compound-interest"
    | "loan-payment"
    | "roi-calculator"
    | "savings-growth";
};
export default function FinanceTemplate({ tool }: { tool?: Tool }) {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [annualContribution, setAnnualContribution] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

  const p = parseFloat(principal) || 0;
  const r = (parseFloat(rate) || 0) / 100;
  const t = parseFloat(years) || 0;
  const c = parseFloat(annualContribution) || 0;
  const f = parseFloat(finalValue) || 0;
  const m = parseFloat(monthlyContribution) || 0;

  const isCompound = tool.financeType === "compound-interest";
  const isLoan = tool.financeType === "loan-payment";
  const isSimple = tool.financeType === "simple-interest";
  const isROI = tool.financeType === "roi-calculator";
  const isSavings = tool.financeType === "savings-growth";

  let primaryValue = 0;
  let secondaryValue = 0;
  let primaryLabel = "Interest";
  let secondaryLabel = "Total amount";

  if (isCompound) {
    let total = p * Math.pow(1 + r, t);

    if (c > 0 && r > 0) {
      total += c * ((Math.pow(1 + r, t) - 1) / r);
    } else if (c > 0) {
      total += c * t;
    }

    const interest = total - p - c * t;

    primaryValue = interest;
    secondaryValue = total;
    primaryLabel = "Total interest earned";
    secondaryLabel = "Total amount";
  } else if (isLoan) {
    const monthlyRate = r / 12;
    const numberOfPayments = t * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0 && numberOfPayments > 0) {
      monthlyPayment =
        (p * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else if (numberOfPayments > 0) {
      monthlyPayment = p / numberOfPayments;
    }

    const totalPaid = monthlyPayment * numberOfPayments;

    primaryValue = monthlyPayment;
    secondaryValue = totalPaid;
    primaryLabel = "Monthly payment";
    secondaryLabel = "Total paid";
  } else if (isROI) {
    const profit = f - p;
    const roiPercent = p > 0 ? (profit / p) * 100 : 0;

    primaryValue = roiPercent;
    secondaryValue = profit;
    primaryLabel = "ROI (%)";
    secondaryLabel = "Profit";
  } else if (isSavings) {
    const monthlyRate = r / 12;
    const numberOfMonths = t * 12;

    let futureValuePrincipal = 0;
    let futureValueContributions = 0;

    if (monthlyRate > 0) {
      futureValuePrincipal = p * Math.pow(1 + monthlyRate, numberOfMonths);
      futureValueContributions =
        m *
        ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate);
    } else {
      futureValuePrincipal = p;
      futureValueContributions = m * numberOfMonths;
    }

    const total = futureValuePrincipal + futureValueContributions;
    const totalContributed = p + m * numberOfMonths;
    const growth = total - totalContributed;

    primaryValue = total;
    secondaryValue = growth;
    primaryLabel = "Total savings";
    secondaryLabel = "Growth";
  } else if (isSimple) {
    const interest = p * r * t;
    const total = p + interest;

    primaryValue = interest;
    secondaryValue = total;
    primaryLabel = "Interest";
    secondaryLabel = "Total amount";
  }

  const categoryLabel = tool.category.replace(/-/g, " ");
  const subcategoryLabel = tool.subcategory.replace(/-/g, " ");

  const relatedTools = tools
    .filter(
      (t) =>
        t.category === tool.category &&
        t.subcategory === tool.subcategory &&
        t.slug !== tool.slug
    )
    .slice(0, 5);

  return (
    <main className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}`}
              className="hover:text-gray-900 capitalize"
            >
              {categoryLabel}
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
              className="hover:text-gray-900 capitalize"
            >
              {subcategoryLabel}
            </Link>
          </div>

          <p className="text-sm font-medium text-gray-500 mb-2 capitalize">
            {subcategoryLabel} {categoryLabel}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            {tool.name}
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            {isCompound
              ? "Estimate growth from compound interest, including optional annual contributions."
              : isLoan
              ? "Estimate monthly loan payments based on principal, interest rate, and loan term."
              : isROI
              ? "Calculate ROI based on the amount invested and the final value of the investment."
              : isSavings
              ? "Estimate how your savings can grow over time with monthly contributions and compound growth."
              : "Calculate simple interest based on principal, annual rate, and time."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Ad slot (top)
            </div>

            <div className="rounded-2xl bg-gray-50 p-5 border space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isLoan
                    ? "Loan amount"
                    : isROI
                    ? "Initial investment"
                    : isSavings
                    ? "Initial savings"
                    : "Initial amount"}
                </label>
                <input
                  type="number"
                  value={principal}
                  placeholder={
                    isLoan
                      ? "Enter loan amount"
                      : isROI
                      ? "Enter initial investment"
                      : isSavings
                      ? "Enter initial savings"
                      : "Enter initial amount"
                  }
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
                />
              </div>

              {isROI ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Final value
                  </label>
                  <input
                    type="number"
                    value={finalValue}
                    placeholder="Enter final value"
                    onChange={(e) => setFinalValue(e.target.value)}
                    className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual interest rate (%)
                  </label>
                  <input
                    type="number"
                    value={rate}
                    placeholder="Enter interest rate"
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
                  />
                </div>
              )}

              {!isROI && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time (years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    placeholder="Enter years"
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
                  />
                </div>
              )}

              {isCompound && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual contribution
                  </label>
                  <input
                    type="number"
                    value={annualContribution}
                    placeholder="Optional yearly contribution"
                    onChange={(e) => setAnnualContribution(e.target.value)}
                    className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
                  />
                </div>
              )}

              {isSavings && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly contribution
                  </label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    placeholder="Enter monthly contribution"
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="w-full rounded-xl border bg-white p-4 text-lg outline-none focus:border-gray-400"
                  />
                </div>
              )}

              <div className="mt-6 rounded-xl bg-white border p-5 text-center">
                <div className="text-sm text-gray-500 mb-1">{primaryLabel}</div>
                <div className="text-3xl font-bold tracking-tight mb-4">
                  {primaryValue.toFixed(2)}
                </div>

                <div className="text-sm text-gray-500 mb-1">{secondaryLabel}</div>
                <div className="text-3xl font-bold tracking-tight">
                  {secondaryValue.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="my-6 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Ad slot (middle)
            </div>

            <div className="grid gap-6">
              <section>
                <h2 className="text-xl font-semibold mb-2">Formula</h2>
                {isCompound ? (
                  <div className="text-gray-600 space-y-2">
                    <p>A = P × (1 + r)^t</p>
                    <p>Contributions are added annually and compounded forward.</p>
                  </div>
                ) : isLoan ? (
                  <div className="text-gray-600 space-y-2">
                    <p>M = P × r / (1 - (1 + r)^-n)</p>
                    <p>
                      Where M is monthly payment, P is principal, r is monthly interest rate,
                      and n is total number of monthly payments.
                    </p>
                  </div>
                ) : isROI ? (
                  <div className="text-gray-600 space-y-2">
                    <p>ROI (%) = ((Final Value - Initial Investment) / Initial Investment) × 100</p>
                    <p>Profit = Final Value - Initial Investment</p>
                  </div>
                ) : isSavings ? (
                  <div className="text-gray-600 space-y-2">
                    <p>FV = P × (1 + r/12)^(12t) + PMT × (((1 + r/12)^(12t) - 1) / (r/12))</p>
                    <p>
                      This estimates savings growth from an initial balance plus recurring monthly contributions.
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-600">
                    Interest = principal × rate × time
                  </p>
                )}
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">How to use</h2>
                <p className="text-gray-600">
                  {isCompound
                    ? "Enter your starting amount, interest rate, time horizon, and optional yearly contributions."
                    : isLoan
                    ? "Enter loan amount, annual interest rate, and loan term to estimate monthly payment and total paid."
                    : isROI
                    ? "Enter the amount invested and the final value to calculate ROI percentage and profit."
                    : isSavings
                    ? "Enter your current savings, expected annual return, number of years, and monthly contribution to estimate future savings."
                    : "Enter your starting amount, annual interest rate, and number of years."}
                </p>
              </section>
            </div>

            <div className="my-8 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Ad slot (bottom)
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-3">Related tools</h2>

              <div className="flex flex-wrap gap-2">
                {relatedTools.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/tools/${related.category}/${related.slug}`}
                    className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    {related.name}
                  </Link>
                ))}

                <Link
                  href={`/tools/${tool.category}`}
                  className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  All {tool.category}
                </Link>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border bg-white p-6 shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-3">About this tool</h3>
            <p className="text-sm text-gray-600">
              {isCompound
                ? "Estimates long-term growth with compound interest and contributions."
                : isLoan
                ? "Estimates monthly payments and total repayment cost for a standard amortizing loan."
                : isROI
                ? "Calculates ROI and profit based on an investment's starting amount and final value."
                : isSavings
                ? "Estimates future savings value using an initial balance, monthly contributions, and annual return."
                : "Calculates simple interest without compounding."}
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Quick links
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href={`/tools/${tool.category}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  All {tool.category}
                </Link>
                <Link
                  href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
                  className="text-gray-600 hover:text-gray-900 capitalize"
                >
                  {subcategoryLabel} {categoryLabel}
                </Link>
                {tool.financeType === "simple-interest" && (
                  <Link
                    href="/tools/finance/compound-interest"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Compound Interest
                  </Link>
                )}
                {tool.financeType === "compound-interest" && (
                  <Link
                    href="/tools/finance/simple-interest"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Simple Interest
                  </Link>
                )}
                {tool.financeType !== "loan-payment" && (
                  <Link
                    href="/tools/finance/loan-payment"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Loan Payment Calculator
                  </Link>
                )}
                {tool.financeType !== "roi-calculator" && (
                  <Link
                    href="/tools/finance/roi-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    ROI Calculator
                  </Link>
                )}
                {tool.financeType !== "savings-growth" && (
                  <Link
                    href="/tools/finance/savings-growth"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Savings Growth Calculator
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed p-4 text-xs text-center text-gray-400">
              Sidebar promo / ad slot
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
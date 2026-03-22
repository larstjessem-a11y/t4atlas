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
  description?: string;
  seoIntro?: string;
  financeType?:
    | "simple-interest"
    | "compound-interest"
    | "loan-payment"
    | "roi-calculator"
    | "savings-growth"
    | "cagr";
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
  const isCAGR = tool.financeType === "cagr";

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
  } else if (isCAGR) {
    const cagr =
      p > 0 && f > 0 && t > 0 ? (Math.pow(f / p, 1 / t) - 1) * 100 : 0;

    primaryValue = cagr;
    secondaryValue = f - p;
    primaryLabel = "CAGR (%)";
    secondaryLabel = "Total growth";
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
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
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

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {subcategoryLabel} {categoryLabel}
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              {tool.name}
            </h1>

            <p className="text-base leading-7 text-gray-600 md:text-lg">
              {tool.description
                ? tool.description
                : isCompound
                  ? "Estimate how your investment grows over time with compound interest, including optional annual contributions."
                  : isLoan
                    ? "Calculate monthly loan payments and total repayment based on interest rate and loan duration."
                    : isROI
                      ? "Calculate return on investment (ROI) based on your initial investment and final value."
                      : isSavings
                        ? "Estimate how your savings grow over time with regular monthly contributions and compound interest."
                        : isCAGR
                          ? "Calculate the compound annual growth rate (CAGR) to understand the average yearly return of an investment."
                          : "Calculate simple interest based on principal, interest rate, and time."}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),360px]">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (top)
            </div>

            <div className="overflow-hidden rounded-3xl border bg-gray-50">
              <div className="border-b bg-white/80 px-5 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Calculator
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter your numbers below to see the result instantly.
                </p>
              </div>

              <div className="space-y-5 p-5 md:p-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {isLoan
                      ? "Loan amount"
                      : isROI
                        ? "Initial investment"
                        : isSavings
                          ? "Initial savings"
                          : isCAGR
                            ? "Beginning value"
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
                            : isCAGR
                              ? "Enter beginning value"
                              : "Enter initial amount"
                    }
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                  />
                </div>

                {isROI || isCAGR ? (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Final value
                    </label>
                    <input
                      type="number"
                      value={finalValue}
                      placeholder="Enter final value"
                      onChange={(e) => setFinalValue(e.target.value)}
                      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Annual interest rate (%)
                    </label>
                    <input
                      type="number"
                      value={rate}
                      placeholder="Enter interest rate"
                      onChange={(e) => setRate(e.target.value)}
                      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                    />
                  </div>
                )}

                {!isROI && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Time (years)
                    </label>
                    <input
                      type="number"
                      value={years}
                      placeholder="Enter years"
                      onChange={(e) => setYears(e.target.value)}
                      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                    />
                  </div>
                )}

                {isCompound && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Annual contribution
                    </label>
                    <input
                      type="number"
                      value={annualContribution}
                      placeholder="Optional yearly contribution"
                      onChange={(e) => setAnnualContribution(e.target.value)}
                      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                    />
                  </div>
                )}

                {isSavings && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Monthly contribution
                    </label>
                    <input
                      type="number"
                      value={monthlyContribution}
                      placeholder="Enter monthly contribution"
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                    />
                  </div>
                )}

                <div className="grid gap-4 rounded-3xl border bg-white p-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                      {primaryLabel}
                    </div>
                    <div className="text-3xl font-semibold tracking-tight text-gray-900">
                      {primaryValue.toFixed(2)}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                      {secondaryLabel}
                    </div>
                    <div className="text-3xl font-semibold tracking-tight text-gray-900">
                      {secondaryValue.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (middle)
            </div>

            <div className="grid gap-6">
              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">Formula</h2>
                {isCompound ? (
                  <div className="space-y-2 text-gray-600">
                    <p>A = P × (1 + r)^t</p>
                    <p>Contributions are added annually and compounded forward.</p>
                  </div>
                ) : isLoan ? (
                  <div className="space-y-2 text-gray-600">
                    <p>M = P × r / (1 - (1 + r)^-n)</p>
                    <p>
                      Where M is monthly payment, P is principal, r is monthly
                      interest rate, and n is total number of monthly payments.
                    </p>
                  </div>
                ) : isROI ? (
                  <div className="space-y-2 text-gray-600">
                    <p>
                      ROI (%) = ((Final Value - Initial Investment) / Initial
                      Investment) × 100
                    </p>
                    <p>Profit = Final Value - Initial Investment</p>
                  </div>
                ) : isSavings ? (
                  <div className="space-y-2 text-gray-600">
                    <p>
                      FV = P × (1 + r/12)^(12t) + PMT × (((1 + r/12)^(12t) - 1) /
                      (r/12))
                    </p>
                    <p>
                      This estimates savings growth from an initial balance plus
                      recurring monthly contributions.
                    </p>
                  </div>
                ) : isCAGR ? (
                  <div className="space-y-2 text-gray-600">
                    <p>CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1</p>
                    <p>
                      This shows the average annual growth rate over a period of
                      time, assuming compounding.
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-600">
                    Interest = principal × rate × time
                  </p>
                )}
              </section>

              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">How to use</h2>
                <p className="text-gray-600">
                  {isCompound
                    ? "Enter your starting amount, interest rate, time horizon, and optional yearly contributions."
                    : isLoan
                      ? "Enter loan amount, annual interest rate, and loan term to estimate monthly payment and total paid."
                      : isROI
                        ? "Enter the amount invested and the final value to calculate ROI percentage and profit."
                        : isSavings
                          ? "Enter your current savings, expected annual return, number of years, and monthly contribution to estimate future savings."
                          : isCAGR
                            ? "Enter the beginning value, ending value, and the number of years to calculate the annualized return."
                            : "Enter your starting amount, annual interest rate, and number of years."}
                </p>
              </section>
            </div>

            <div className="mt-10 space-y-8">
              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">
                  What is {tool.name}?
                </h2>
                <p className="text-gray-600">
                  {tool.seoIntro
                    ? tool.seoIntro
                    : tool.description
                      ? tool.description
                      : "This calculator helps you estimate financial outcomes based on your inputs."}
                </p>
              </section>

              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">Why this matters</h2>
                <p className="text-gray-600">
                  Understanding your financial results helps you make better
                  decisions, compare different scenarios, and plan for the future
                  with more confidence.
                </p>
              </section>

              <section className="rounded-2xl border p-5">
                <h2 className="mb-4 text-xl font-semibold">FAQ</h2>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <h3 className="mb-2 font-medium text-gray-900">
                      {isCompound
                        ? "What does compound interest mean?"
                        : isLoan
                          ? "How is a loan payment calculated?"
                          : isROI
                            ? "What is a good ROI?"
                            : isSavings
                              ? "How does savings growth work?"
                              : isCAGR
                                ? "What does CAGR tell you?"
                                : "What is simple interest?"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isCompound
                        ? "Compound interest means you earn interest on both your original amount and the interest already added over time."
                        : isLoan
                          ? "Loan payments are usually based on the loan amount, interest rate, and repayment period, with each payment covering both interest and principal."
                          : isROI
                            ? "A good ROI depends on the type of investment, risk level, and time horizon, but higher ROI generally indicates a more profitable investment."
                            : isSavings
                              ? "Savings growth comes from your starting balance, regular contributions, and any interest or returns earned over time."
                              : isCAGR
                                ? "CAGR shows the average annual growth rate of an investment over multiple years, assuming the returns were compounded."
                                : "Simple interest is calculated only on the original principal, not on accumulated interest."}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <h3 className="mb-2 font-medium text-gray-900">
                      {isCompound
                        ? "Why use a compound interest calculator?"
                        : isLoan
                          ? "Why use a loan payment calculator?"
                          : isROI
                            ? "Why use an ROI calculator?"
                            : isSavings
                              ? "Why use a savings growth calculator?"
                              : isCAGR
                                ? "Why use a CAGR calculator?"
                                : "Why use a simple interest calculator?"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isCompound
                        ? "It helps you estimate long-term investment growth and understand how contributions and reinvested returns affect the final outcome."
                        : isLoan
                          ? "It helps you compare borrowing costs and understand what your monthly payments may look like before taking on debt."
                          : isROI
                            ? "It helps you compare investments and quickly see whether a project or trade produced a positive return."
                            : isSavings
                              ? "It helps you plan future savings goals and see how recurring deposits may grow over time."
                              : isCAGR
                                ? "It helps you compare investments with different time periods by converting total growth into an annualized return."
                                : "It helps you quickly estimate interest earned or paid in straightforward non-compounding scenarios."}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (bottom)
            </div>

            <div className="border-t pt-6">
              <h2 className="mb-3 text-xl font-semibold">Related tools</h2>

              <div className="flex flex-wrap gap-2">
                {relatedTools.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/tools/${related.category}/${related.slug}`}
                    className="inline-block rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    {related.name}
                  </Link>
                ))}

                <Link
                  href={`/tools/${tool.category}`}
                  className="inline-block rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  All {tool.category}
                </Link>
              </div>
            </div>
          </section>

          <aside className="h-fit rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">About this tool</h3>
            <p className="text-sm leading-6 text-gray-600">
              {isCompound
                ? "Estimates long-term growth with compound interest and contributions."
                : isLoan
                  ? "Estimates monthly payments and total repayment cost for a standard amortizing loan."
                  : isROI
                    ? "Calculates ROI and profit based on an investment's starting amount and final value."
                    : isSavings
                      ? "Estimates future savings value using an initial balance, monthly contributions, and annual return."
                      : isCAGR
                        ? "Calculates the annualized growth rate of an investment over time."
                        : "Calculates simple interest without compounding."}
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-900">
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

                {tool.financeType !== "simple-interest" && (
                  <Link
                    href="/tools/finance/simple-interest"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Simple Interest
                  </Link>
                )}

                {tool.financeType !== "compound-interest" && (
                  <Link
                    href="/tools/finance/compound-interest"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Compound Interest
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

                {tool.financeType !== "cagr" && (
                  <Link
                    href="/tools/finance/cagr-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    CAGR Calculator
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Sidebar promo / ad slot
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
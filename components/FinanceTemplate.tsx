"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  type: "converter" | "finance" | "dev";
  description?: string;
  seoIntro?: string;
financeType?:
  | "simple-interest"
  | "compound-interest"
  | "loan-payment"
  | "roi-calculator"
  | "savings-growth"
  | "cagr"
  | "break-even"
  | "apr-calculator"
  | "investment-return"
  | "payback-period"
  | "annualized-return"
  | "total-return"
  | "return-multiple"
  | "rule-of-72";
  longTailScenarios?: {
    slug: string;
    label: string;
    prefill?: {
      principal?: string;
      rate?: string;
      years?: string;
      finalValue?: string;
      annualContribution?: string;
    };
  }[];
};

export default function FinanceTemplate({
  tool,
  scenario,
}: {
  tool?: Tool;
  scenario?: string;
}) {
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
  const isBreakEven = tool.financeType === "break-even";
  const isAPR = tool.financeType === "apr-calculator";
  const isInvestmentReturn = tool.financeType === "investment-return";
  const isPaybackPeriod = tool.financeType === "payback-period";
  const isMortgage = tool.slug === "mortgage-calculator";
  const isDividendYield = tool.slug === "dividend-yield-calculator";
  const isAnnualizedReturn = tool.financeType === "annualized-return";
  const isTotalReturn = tool.financeType === "total-return";
  const isReturnMultiple = tool.financeType === "return-multiple";
  const isRuleOf72 = tool.financeType === "rule-of-72";

  useEffect(() => {
    if (!scenario) return;

    const matchedScenario = tool.longTailScenarios?.find(
      (item) => item.slug === scenario
    );

    if (!matchedScenario?.prefill) return;

    if (matchedScenario.prefill.principal !== undefined) {
      setPrincipal(matchedScenario.prefill.principal);
    }

    if (matchedScenario.prefill.rate !== undefined) {
      setRate(matchedScenario.prefill.rate);
    }

    if (matchedScenario.prefill.years !== undefined) {
      setYears(matchedScenario.prefill.years);
    }

    if (matchedScenario.prefill.finalValue !== undefined) {
      setFinalValue(matchedScenario.prefill.finalValue);
    }

    if (matchedScenario.prefill.annualContribution !== undefined) {
      setAnnualContribution(matchedScenario.prefill.annualContribution);
    }
  }, [scenario, tool.longTailScenarios]);

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
    primaryLabel = isMortgage ? "Monthly mortgage payment" : "Monthly payment";
    secondaryLabel = "Total paid";
  } else if (isROI || isInvestmentReturn) {
    if (isDividendYield) {
      const dividendYield = p > 0 ? (f / p) * 100 : 0;

      primaryValue = dividendYield;
      secondaryValue = f;
      primaryLabel = "Dividend yield (%)";
      secondaryLabel = "Annual dividend";
    } else if (isInvestmentReturn) {
      const investmentReturn = p > 0 ? ((f - p) / p) * 100 : 0;
      const gainLoss = f - p;

      primaryValue = investmentReturn;
      secondaryValue = gainLoss;
      primaryLabel = "Investment return (%)";
      secondaryLabel = "Gain / Loss";
    } else {
      const profit = f - p;
      const roiPercent = p > 0 ? (profit / p) * 100 : 0;

      primaryValue = roiPercent;
      secondaryValue = profit;
      primaryLabel = "ROI (%)";
      secondaryLabel = "Profit";
    }
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
} else if (isAnnualizedReturn) {
  const annualizedReturn =
    p > 0 && f > 0 && t > 0 ? (Math.pow(f / p, 1 / t) - 1) * 100 : 0;

  primaryValue = annualizedReturn;
  secondaryValue = f - p;
  primaryLabel = "Annualized return (%)";
  secondaryLabel = "Total growth";
} else if (isTotalReturn) {
  const totalReturn = p > 0 ? ((f - p) / p) * 100 : 0;
  const gainLoss = f - p;

  primaryValue = totalReturn;
  secondaryValue = gainLoss;
  primaryLabel = "Total return (%)";
  secondaryLabel = "Gain / Loss";
} else if (isReturnMultiple) {
  const multiple = p > 0 ? f / p : 0;
  const gainLoss = f - p;

  primaryValue = multiple;
  secondaryValue = gainLoss;
  primaryLabel = "Return multiple (x)";
  secondaryLabel = "Gain / Loss";
} else if (isRuleOf72) {
  const doublingTime = r > 0 ? 72 / (r * 100) : 0;

  primaryValue = doublingTime;
  secondaryValue = r * 100;
  primaryLabel = "Years to double";
  secondaryLabel = "Interest rate (%)";
} else if (isBreakEven) {
    const fixedCosts = parseFloat(rate) || 0;
    const variableCostPerUnit = parseFloat(finalValue) || 0;
    const contributionMargin = p - variableCostPerUnit;
    const breakEvenUnits =
      contributionMargin > 0 ? fixedCosts / contributionMargin : 0;

    primaryValue = breakEvenUnits;
    secondaryValue = contributionMargin;
    primaryLabel = "Break-even units";
    secondaryLabel = "Contribution margin per unit";
  } else if (isAPR) {
    const fees = parseFloat(rate) || 0;
    const totalInterest = parseFloat(finalValue) || 0;
    const apr = p > 0 ? ((fees + totalInterest) / p) * 100 : 0;

    primaryValue = apr;
    secondaryValue = fees + totalInterest;
    primaryLabel = "APR estimate (%)";
    secondaryLabel = "Total borrowing cost";
  } else if (isPaybackPeriod) {
    const paybackYears = c > 0 ? p / c : 0;

    primaryValue = paybackYears;
    secondaryValue = c;
    primaryLabel = "Payback period (years)";
    secondaryLabel = "Annual cash flow";
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

  const activeScenario = tool.longTailScenarios?.find(
    (item) => item.slug === scenario
  );

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
              {activeScenario ? activeScenario.label : tool.name}
            </h1>

            <p className="text-base leading-7 text-gray-600 md:text-lg">
              {activeScenario
                ? `Use this ${activeScenario.label.toLowerCase()} tool to explore this specific scenario and compare how different assumptions affect your result.`
                : tool.description
                ? tool.description
                : isCompound
                ? "Estimate how your investment grows over time with compound interest, including optional annual contributions."
                : isCompound
? "Estimate how your investment grows over time with compound interest, including optional annual contributions."
: isMortgage
? "Estimate your monthly mortgage payment based on home loan amount, interest rate, and repayment term."
: isDividendYield
? "Calculate dividend yield using annual dividend and share price to compare income-producing stocks."
: isBreakEven
? "Calculate the break-even point based on fixed costs, selling price, and variable cost per unit."
: isAPR
? "Estimate annual percentage rate (APR) based on loan amount, fees, and interest costs."
: isInvestmentReturn
? "Calculate investment return based on starting value and ending value to evaluate overall portfolio performance."
: isAnnualizedReturn
? "Calculate annualized return to compare investments held over different time periods on a like-for-like basis."
: isTotalReturn
? "Calculate total return to measure the full percentage gain or loss between starting value and ending value."
: isReturnMultiple
? "Calculate return multiple to see how many times your original investment has grown."
: isRuleOf72
? "Estimate how many years it takes for money to double based on a given annual return or interest rate."
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
               {!isRuleOf72 && (
  <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {isMortgage
  ? "Mortgage amount"
  : isDividendYield
  ? "Share price"
  : isBreakEven
  ? "Selling price per unit"
  : isAPR
  ? "Loan amount"
  : isLoan
  ? "Loan amount"
  : isInvestmentReturn || isAnnualizedReturn || isTotalReturn || isReturnMultiple
  ? "Starting value"
  : isROI
  ? "Initial investment"
  : isSavings
  ? "Initial savings"
  : isCAGR
  ? "Beginning value"
  : isRuleOf72
  ? "Unused"
  : "Initial amount"}
                  </label>
                  <input
                    type="number"
                    value={principal}
                    placeholder={isMortgage
  ? "Enter mortgage amount"
  : isDividendYield
  ? "Enter share price"
  : isBreakEven
  ? "Enter selling price per unit"
  : isAPR
  ? "Enter loan amount"
  : isLoan
  ? "Enter loan amount"
  : isInvestmentReturn || isAnnualizedReturn || isTotalReturn || isReturnMultiple
  ? "Enter starting value"
  : isROI
  ? "Enter initial investment"
  : isSavings
  ? "Enter initial savings"
  : isCAGR
  ? "Enter beginning value"
  : isRuleOf72
  ? "Enter initial amount"
  : "Enter initial amount"}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                  />
                  </div>
)}

                {isBreakEven ? (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Fixed costs
                      </label>
                      <input
                        type="number"
                        value={rate}
                        placeholder="Enter fixed costs"
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Variable cost per unit
                      </label>
                      <input
                        type="number"
                        value={finalValue}
                        placeholder="Enter variable cost per unit"
                        onChange={(e) => setFinalValue(e.target.value)}
                        className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                      />
                    </div>
                  </>
                ) : isAPR ? (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Loan fees
                      </label>
                      <input
                        type="number"
                        value={rate}
                        placeholder="Enter loan fees"
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Total interest cost
                      </label>
                      <input
                        type="number"
                        value={finalValue}
                        placeholder="Enter total interest cost"
                        onChange={(e) => setFinalValue(e.target.value)}
                        className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                      />
                    </div>
                  </>
) : isRuleOf72 ? (
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Annual interest rate (%)
    </label>
    <input
      type="number"
      value={rate}
      placeholder="Enter annual rate"
      onChange={(e) => setRate(e.target.value)}
      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
    />
  </div>
                ) : isROI || isCAGR || isInvestmentReturn || isAnnualizedReturn || isTotalReturn || isReturnMultiple ? (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {isDividendYield
  ? "Annual dividend per share"
  : isInvestmentReturn || isAnnualizedReturn || isTotalReturn || isReturnMultiple
  ? "Ending value"
  : "Final value"}
                    </label>
                    <input
                      type="number"
                      value={finalValue}
                      placeholder={isDividendYield
  ? "Enter annual dividend"
  : isInvestmentReturn || isAnnualizedReturn || isTotalReturn || isReturnMultiple
  ? "Enter ending value"
  : "Enter final value"}
                      onChange={(e) => setFinalValue(e.target.value)}
                      className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
                    />
                  </div>
                ) : isPaybackPeriod ? (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Annual cash flow
                    </label>
                    <input
                      type="number"
                      value={annualContribution}
                      placeholder="Enter annual cash flow"
                      onChange={(e) => setAnnualContribution(e.target.value)}
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

                {!isROI &&
  !isBreakEven &&
  !isAPR &&
  !isInvestmentReturn &&
  !isTotalReturn &&
  !isReturnMultiple && (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        {isMortgage ? "Mortgage term (years)" : "Time (years)"}
                      </label>
                      <input
                        type="number"
                        value={years}
                        placeholder={
                          isMortgage ? "Enter mortgage term" : "Enter years"
                        }
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
                ) : isMortgage || isLoan ? (
                  <div className="space-y-2 text-gray-600">
                    <p>M = P × r / (1 - (1 + r)^-n)</p>
                    <p>
                      Where M is monthly payment, P is principal, r is monthly
                      interest rate, and n is total number of monthly payments.
                    </p>
                  </div>
                ) : isDividendYield ? (
                  <div className="space-y-2 text-gray-600">
                    <p>Dividend Yield (%) = (Annual Dividend / Share Price) × 100</p>
                    <p>
                      This measures how much annual dividend income a stock pays
                      relative to its current share price.
                    </p>
                  </div>
                ) : isBreakEven ? (
                  <div className="space-y-2 text-gray-600">
                    <p>
                      Break-even units = Fixed Costs / (Selling Price per Unit -
                      Variable Cost per Unit)
                    </p>
                    <p>
                      This shows how many units you need to sell before total revenue
                      equals total costs.
                    </p>
                  </div>
                ) : isAPR ? (
                  <div className="space-y-2 text-gray-600">
                    <p>
                      APR (%) ≈ ((Loan Fees + Total Interest Cost) / Loan Amount) ×
                      100
                    </p>
                    <p>
                      This simplified APR estimate helps compare the total borrowing
                      cost of different loan offers.
                    </p>
                  </div>
                ) : isInvestmentReturn ? (
                  <div className="space-y-2 text-gray-600">
                    <p>
                      Investment Return (%) = ((Ending Value - Starting Value) /
                      Starting Value) × 100
                    </p>
                    <p>
                      This shows the total percentage gain or loss of an investment
                      over the period measured.
                    </p>
                  </div>
                ) : isPaybackPeriod ? (
                  <div className="space-y-2 text-gray-600">
                    <p>Payback Period = Initial Investment / Annual Cash Flow</p>
                    <p>
                      This shows how many years it takes for cumulative cash flow or
                      savings to recover the upfront investment.
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
) : isAnnualizedReturn ? (
  <div className="space-y-2 text-gray-600">
    <p>Annualized Return = (Ending Value / Starting Value)^(1 / Years) - 1</p>
    <p>
      This converts total growth into an annualized rate so different holding
      periods can be compared more fairly.
    </p>
  </div>
) : isTotalReturn ? (
  <div className="space-y-2 text-gray-600">
    <p>Total Return (%) = ((Ending Value - Starting Value) / Starting Value) × 100</p>
    <p>
      This shows the full percentage gain or loss over the full holding period.
    </p>
  </div>
) : isReturnMultiple ? (
  <div className="space-y-2 text-gray-600">
    <p>Return Multiple = Ending Value / Starting Value</p>
    <p>
      This shows how many times the original investment has grown, such as 2x or 3x.
    </p>
  </div>
) : isRuleOf72 ? (
  <div className="space-y-2 text-gray-600">
    <p>Years to Double ≈ 72 / Annual Return Rate (%)</p>
    <p>
      This quick rule estimates how long it takes for money to double at a given annual rate.
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
  : isMortgage
  ? "Enter your mortgage amount, annual interest rate, and repayment term to estimate your monthly mortgage payment and total paid."
  : isDividendYield
  ? "Enter the current share price and annual dividend per share to calculate dividend yield."
  : isBreakEven
  ? "Enter fixed costs, selling price per unit, and variable cost per unit to calculate your break-even point."
  : isAPR
  ? "Enter loan amount, total fees, and total interest cost to estimate the annual percentage rate."
  : isInvestmentReturn
  ? "Enter the starting value and ending value to calculate the total return of an investment."
  : isAnnualizedReturn
  ? "Enter the starting value, ending value, and number of years to calculate annualized return."
  : isTotalReturn
  ? "Enter the starting value and ending value to calculate total return percentage and gain or loss."
  : isReturnMultiple
  ? "Enter the starting value and ending value to calculate how many times your investment has grown."
  : isRuleOf72
  ? "Enter the annual return or interest rate to estimate how many years it takes for money to double."
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

            {tool.longTailScenarios && tool.longTailScenarios.length > 0 && (
              <section className="mt-8 rounded-2xl border p-5">
                <h2 className="mb-3 text-xl font-semibold">
                  {isMortgage ? "Mortgage calculator scenarios" : "Popular scenarios"}
                </h2>

                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    Many users search for specific scenarios. Here are common
                    variations you can explore:
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    {tool.longTailScenarios.map((scenarioItem) => (
                      <li key={scenarioItem.slug}>
                        <Link
                          href={`/tools/${tool.category}/${tool.slug}?scenario=${scenarioItem.slug}`}
                          className="hover:underline"
                        >
                          {scenarioItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p>
                    Adjust the inputs above to test different scenarios and
                    understand how the result changes based on your assumptions.
                  </p>
                </div>
              </section>
            )}

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
  : isMortgage
  ? "How is a mortgage payment calculated?"
  : isDividendYield
  ? "What does dividend yield tell you?"
  : isBreakEven
  ? "What is a break-even point?"
  : isAPR
  ? "What does APR tell you?"
  : isInvestmentReturn
  ? "What does investment return tell you?"
  : isAnnualizedReturn
  ? "What does annualized return tell you?"
  : isTotalReturn
  ? "What does total return tell you?"
  : isReturnMultiple
  ? "What does return multiple mean?"
  : isRuleOf72
  ? "What is the Rule of 72?"
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
  : isMortgage
  ? "Mortgage payments are typically based on the home loan amount, interest rate, and mortgage term, with each payment covering both interest and principal."
  : isDividendYield
  ? "Dividend yield tells you how much annual dividend income a stock generates relative to its share price, shown as a percentage."
  : isBreakEven
  ? "The break-even point is the number of units you must sell to cover all fixed and variable costs before making a profit."
  : isAPR
  ? "APR helps show the total borrowing cost of a loan by including interest and certain fees in one comparable percentage figure."
  : isInvestmentReturn
  ? "Investment return shows the total percentage gain or loss between the starting value and ending value of an investment."
  : isAnnualizedReturn
  ? "Annualized return shows the average yearly return of an investment across the full holding period."
  : isTotalReturn
  ? "Total return shows the full gain or loss over the entire period, without adjusting for time."
  : isReturnMultiple
  ? "Return multiple shows how many times the original investment has grown, such as 2x or 3x."
  : isRuleOf72
  ? "The Rule of 72 is a shortcut that estimates how many years it takes for an investment to double at a given annual return."
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
  : isMortgage
  ? "Why use a mortgage calculator?"
  : isDividendYield
  ? "Why use a dividend yield calculator?"
  : isBreakEven
  ? "Why use a break-even calculator?"
  : isAPR
  ? "Why use an APR calculator?"
  : isInvestmentReturn
  ? "Why use an investment return calculator?"
  : isAnnualizedReturn
  ? "Why use an annualized return calculator?"
  : isTotalReturn
  ? "Why use a total return calculator?"
  : isReturnMultiple
  ? "Why use a return multiple calculator?"
  : isRuleOf72
  ? "Why use a Rule of 72 calculator?"
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
  : isMortgage
  ? "It helps you estimate home loan costs, compare mortgage options, and understand what your monthly housing payment could look like."
  : isDividendYield
  ? "It helps you compare dividend-paying stocks and evaluate whether the income from a stock matches your investing goals."
  : isBreakEven
  ? "It helps you understand how much you need to sell before becoming profitable, which is critical for pricing, planning, and business decisions."
  : isAPR
  ? "It helps you compare loans more fairly by combining borrowing fees and interest costs into a single estimate."
  : isInvestmentReturn
  ? "It helps you evaluate whether an investment gained or lost value over time and compare overall outcomes across investments."
  : isAnnualizedReturn
  ? "It helps you compare investments across different holding periods by converting total growth into an annual rate."
  : isTotalReturn
  ? "It helps you measure the full gain or loss of an investment quickly without adjusting for time."
  : isReturnMultiple
  ? "It helps you see how many times an investment has grown, which is especially useful in venture, private equity, or high-growth scenarios."
  : isRuleOf72
  ? "It helps you estimate how quickly money can double at a given annual return, making long-term growth easier to visualize."
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
  : isMortgage
  ? "Estimates monthly mortgage payments and total repayment cost for a home loan."
  : isDividendYield
  ? "Calculates dividend yield based on annual dividend and share price."
  : isBreakEven
  ? "Calculates the number of units needed to cover fixed and variable costs."
  : isAPR
  ? "Estimates annual percentage rate based on loan amount, fees, and interest costs."
  : isInvestmentReturn
  ? "Calculates total investment return based on starting and ending value."
  : isAnnualizedReturn
  ? "Calculates annualized return so investments across different time periods can be compared."
  : isTotalReturn
  ? "Calculates the full percentage gain or loss between starting value and ending value."
  : isReturnMultiple
  ? "Calculates how many times an investment has grown, such as 2x or 3x."
  : isRuleOf72
  ? "Estimates how many years it takes for money to double at a given annual return."
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
  href="/tools/finance/roi-vs-cagr-vs-payback"
  className="text-gray-600 hover:text-gray-900"
>
  ROI vs CAGR vs Payback
</Link>

<Link
  href="/tools/finance/what-is-roi"
  className="text-gray-600 hover:text-gray-900"
>
  What Is ROI?
</Link>

<Link
  href="/tools/finance/what-is-cagr"
  className="text-gray-600 hover:text-gray-900"
>
  What Is CAGR?
</Link>

<Link
  href="/tools/finance/what-is-payback-period"
  className="text-gray-600 hover:text-gray-900"
>
  What Is Payback Period?
</Link>

<Link
  href="/tools/finance/what-is-total-return"
  className="text-gray-600 hover:text-gray-900"
>
  What Is Total Return?
</Link>


<Link
  href="/tools/finance/best-investments-with-fastest-payback-period"
  className="text-gray-600 hover:text-gray-900"
>
  Fastest Payback Investments
</Link>

<Link
  href="/tools/finance/best-passive-income-investments-ranked"
  className="text-gray-600 hover:text-gray-900"
>
  Best Passive Income Investments
</Link>


                <Link
                  href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
                  className="text-gray-600 hover:text-gray-900 capitalize"
                >
                  {subcategoryLabel} {categoryLabel}
                </Link>

                <Link
                  href="/tools/finance/mortgage-vs-rent"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Mortgage vs Rent Guide
                </Link>

                <Link
                  href="/tools/finance/how-to-calculate-dividend-yield"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dividend Yield Guide
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

                {tool.slug !== "mortgage-calculator" && (
                  <Link
                    href="/tools/finance/mortgage-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Mortgage Calculator
                  </Link>
                )}

                {tool.slug !== "dividend-yield-calculator" && (
                  <Link
                    href="/tools/finance/dividend-yield-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Dividend Yield Calculator
                  </Link>
                )}

                {tool.slug !== "break-even-calculator" && (
                  <Link
                    href="/tools/finance/break-even-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Break-Even Calculator
                  </Link>
                )}

                {tool.slug !== "apr-calculator" && (
                  <Link
                    href="/tools/finance/apr-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    APR Calculator
                  </Link>
                )}

                {tool.slug !== "investment-return-calculator" && (
                  <Link
                    href="/tools/finance/investment-return-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Investment Return Calculator
                  </Link>
                )}

{tool.slug !== "total-return-calculator" && (
  <Link
    href="/tools/finance/total-return-calculator"
    className="text-gray-600 hover:text-gray-900"
  >
    Total Return Calculator
  </Link>
)}

{tool.slug === "total-return-calculator" && (
  <Link
    href="/tools/finance/what-is-total-return"
    className="text-gray-600 hover:text-gray-900"
  >
    What Is Total Return?
  </Link>
)}

                {tool.slug !== "payback-period" && (
                  <Link
                    href="/tools/finance/payback-period"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Payback Period Calculator
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

                {tool.financeType !== "roi-calculator" && !isDividendYield && (
                  <Link
                    href="/tools/finance/roi-calculator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    ROI Calculator
                  </Link>
                )}

{tool.slug !== "annualized-return-calculator" && (
  <Link
    href="/tools/finance/annualized-return-calculator"
    className="text-gray-600 hover:text-gray-900"
  >
    Annualized Return Calculator
  </Link>
)}

{tool.slug !== "total-return-calculator" && (
  <Link
    href="/tools/finance/total-return-calculator"
    className="text-gray-600 hover:text-gray-900"
  >
    Total Return Calculator
  </Link>
)}

{tool.slug !== "return-multiple-calculator" && (
  <Link
    href="/tools/finance/return-multiple-calculator"
    className="text-gray-600 hover:text-gray-900"
  >
    Return Multiple Calculator
  </Link>
)}

{tool.slug !== "rule-of-72-calculator" && (
  <Link
    href="/tools/finance/rule-of-72-calculator"
    className="text-gray-600 hover:text-gray-900"
  >
    Rule of 72 Calculator
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
                {tool.slug !== "payback-period" && (
  <Link
    href="/tools/finance/payback-period"
    className="text-gray-600 hover:text-gray-900"
  >
    Payback Period Calculator
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
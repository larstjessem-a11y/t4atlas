import { aiEditorialPages } from "@/data/aiEditorial";

export type NavLinkItem = {
  name: string;
  href: string;
};

export type CategoryNavigation = {
  guides: NavLinkItem[];
  comparisons: NavLinkItem[];
  moneyPages: NavLinkItem[];
  tools: NavLinkItem[];
};

export const financeNavigation: CategoryNavigation = {
  guides: [
    { name: "What Is ROI?", href: "/tools/finance/what-is-roi" },
    { name: "What Is CAGR?", href: "/tools/finance/what-is-cagr" },
    {
      name: "What Is Payback Period?",
      href: "/tools/finance/what-is-payback-period",
    },
    {
      name: "What Is Total Return?",
      href: "/tools/finance/what-is-total-return",
    },
    {
      name: "What Is Annualized Return?",
      href: "/tools/finance/what-is-annualized-return",
    },
    {
      name: "What Is the Rule of 72?",
      href: "/tools/finance/what-is-rule-of-72",
    },
  ],
  comparisons: [
    {
      name: "ROI vs CAGR vs Payback",
      href: "/tools/finance/roi-vs-cagr-vs-payback",
    },
    {
      name: "Annualized Return vs CAGR",
      href: "/tools/finance/annualized-return-vs-cagr",
    },
    {
      name: "Total Return vs ROI",
      href: "/tools/finance/total-return-vs-roi",
    },
  ],
  moneyPages: [
    {
      name: "Best Investments with Fastest Payback Period",
      href: "/tools/finance/best-investments-with-fastest-payback-period",
    },
    {
      name: "Best Passive Income Investments",
      href: "/tools/finance/best-passive-income-investments-ranked",
    },
    {
      name: "How Long to Reach $100k",
      href: "/tools/finance/how-long-to-reach-100k",
    },
    {
      name: "Mortgage vs Rent Guide",
      href: "/tools/finance/mortgage-vs-rent",
    },
    {
      name: "Dividend Yield Guide",
      href: "/tools/finance/how-to-calculate-dividend-yield",
    },
  ],
  tools: [
    { name: "Simple Interest", href: "/tools/finance/simple-interest" },
    { name: "Compound Interest", href: "/tools/finance/compound-interest" },
    { name: "Mortgage Calculator", href: "/tools/finance/mortgage-calculator" },
    {
      name: "Dividend Yield Calculator",
      href: "/tools/finance/dividend-yield-calculator",
    },
    {
      name: "Break-Even Calculator",
      href: "/tools/finance/break-even-calculator",
    },
    { name: "APR Calculator", href: "/tools/finance/apr-calculator" },
    {
      name: "Investment Return Calculator",
      href: "/tools/finance/investment-return-calculator",
    },
    { name: "Payback Calculator", href: "/tools/finance/payback-period" },
    { name: "Loan Payment Calculator", href: "/tools/finance/loan-payment" },
    { name: "ROI Calculator", href: "/tools/finance/roi-calculator" },
    {
      name: "Savings Growth Calculator",
      href: "/tools/finance/savings-growth",
    },
    { name: "CAGR Calculator", href: "/tools/finance/cagr-calculator" },
    {
      name: "Annualized Return Calculator",
      href: "/tools/finance/annualized-return-calculator",
    },
    {
      name: "Total Return Calculator",
      href: "/tools/finance/total-return-calculator",
    },
    {
      name: "Return Multiple Calculator",
      href: "/tools/finance/return-multiple-calculator",
    },
    {
      name: "Rule of 72 Calculator",
      href: "/tools/finance/rule-of-72-calculator",
    },
  ],
};

export const aiNavigation: CategoryNavigation = {
  guides: [],
  comparisons: aiEditorialPages
    .filter((page) => page.type === "comparison")
    .map((page) => ({
      name: page.title,
      href: page.href,
    })),
  moneyPages: aiEditorialPages
    .filter((page) => page.type === "best" || page.type === "alternative")
    .map((page) => ({
      name: page.title,
      href: page.href,
    })),
  tools: [],
};
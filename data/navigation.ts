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
  comparisons: [
    {
      name: "ChatGPT vs Claude",
      href: "/tools/ai/chatgpt-vs-claude",
    },
    {
      name: "Perplexity vs ChatGPT",
      href: "/tools/ai/perplexity-vs-chatgpt",
    },
    {
      name: "Claude vs Perplexity",
      href: "/tools/ai/claude-vs-perplexity",
    },
    {
      name: "ChatGPT vs Copilot",
      href: "/tools/ai/chatgpt-vs-copilot",
    },
  ],
  moneyPages: [
    {
      name: "Best AI Tools for Writing",
      href: "/tools/ai/best-ai-tools-for-writing",
    },
    {
      name: "Best AI Tools for Coding",
      href: "/tools/ai/best-ai-tools-for-coding",
    },
    {
      name: "Best AI Tools for Research",
      href: "/tools/ai/best-ai-tools-for-research",
    },
    {
      name: "Best AI Tools for Video Editing",
      href: "/tools/ai/best-ai-tools-for-video-editing",
    },
    {
      name: "Best AI Tools for Productivity",
      href: "/tools/ai/best-ai-tools-for-productivity",
    },
    {
      name: "Best AI Tools for Meetings",
      href: "/tools/ai/best-ai-tools-for-meetings",
    },
    {
      name: "Best AI Tools for Students",
      href: "/tools/ai/best-ai-tools-for-students",
    },
    {
      name: "Best AI Tools for Marketing",
      href: "/tools/ai/best-ai-tools-for-marketing",
    },
    {
      name: "Alternatives to ChatGPT",
      href: "/tools/ai/alternatives-to-chatgpt",
    },
    {
      name: "Alternatives to Midjourney",
      href: "/tools/ai/alternatives-to-midjourney",
    },
  ],
  tools: [],
};
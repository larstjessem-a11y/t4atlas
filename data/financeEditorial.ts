export type FinanceEditorialType = "best" | "alternative" | "comparison";

export type FinanceEditorialTopic =
  | "credit-cards"
  | "investing"
  | "brokers"
  | "banking"
  | "saving"
  | "budgeting"
  | "loans"
  | "mortgage"
  | "side-income";

export type FinanceEditorialPage = {
  slug: string;
  title: string;
  type: FinanceEditorialType;
  href: string;
  topics: FinanceEditorialTopic[];
  affiliateSlugs?: string[];
};

export const financeEditorialPages: FinanceEditorialPage[] = [
  {
    slug: "best-budgeting-apps",
    title: "Best Budgeting Apps",
    type: "best",
    href: "/tools/finance/best-budgeting-apps",
    topics: ["budgeting", "saving"],
    affiliateSlugs: ["ynab", "pocketguard", "mint"],
  },
  {
    slug: "best-investing-apps",
    title: "Best Investing Apps",
    type: "best",
    href: "/tools/finance/best-investing-apps",
    topics: ["investing", "brokers"],
    affiliateSlugs: ["etoro", "trading212", "degiro"],
  },
  {
    slug: "best-high-yield-savings-accounts",
    title: "Best High Yield Savings Accounts",
    type: "best",
    href: "/tools/finance/best-high-yield-savings-accounts",
    topics: ["saving", "banking"],
    affiliateSlugs: ["wise", "revolut"],
  },
  {
    slug: "alternatives-to-robinhood",
    title: "Alternatives to Robinhood",
    type: "alternative",
    href: "/tools/finance/alternatives-to-robinhood",
    topics: ["investing", "brokers"],
    affiliateSlugs: ["etoro", "trading212", "degiro"],
  },
  {
    slug: "etoro-vs-degiro",
    title: "eToro vs DEGIRO",
    type: "comparison",
    href: "/tools/finance/etoro-vs-degiro",
    topics: ["investing", "brokers"],
    affiliateSlugs: ["etoro", "degiro"],
  },
];
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
  // BEST
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
    slug: "best-stock-brokers-for-beginners",
    title: "Best Stock Brokers for Beginners",
    type: "best",
    href: "/tools/finance/best-stock-brokers-for-beginners",
    topics: ["brokers", "investing"],
    affiliateSlugs: ["etoro", "degiro", "trading212"],
  },
  {
    slug: "best-passive-income-investments",
    title: "Best Passive Income Investments",
    type: "best",
    href: "/tools/finance/best-passive-income-investments",
    topics: ["investing", "side-income"],
  },

  // ALTERNATIVES
  {
    slug: "alternatives-to-robinhood",
    title: "Alternatives to Robinhood",
    type: "alternative",
    href: "/tools/finance/alternatives-to-robinhood",
    topics: ["investing", "brokers"],
    affiliateSlugs: ["etoro", "trading212", "degiro"],
  },
  {
    slug: "alternatives-to-etoro",
    title: "Alternatives to eToro",
    type: "alternative",
    href: "/tools/finance/alternatives-to-etoro",
    topics: ["investing", "brokers"],
    affiliateSlugs: ["degiro", "trading212"],
  },
  {
    slug: "alternatives-to-revolut",
    title: "Alternatives to Revolut",
    type: "alternative",
    href: "/tools/finance/alternatives-to-revolut",
    topics: ["banking", "saving"],
  },
  {
    slug: "alternatives-to-ynab",
    title: "Alternatives to YNAB",
    type: "alternative",
    href: "/tools/finance/alternatives-to-ynab",
    topics: ["budgeting"],
  },

  // COMPARISONS
  {
    slug: "etoro-vs-degiro",
    title: "eToro vs DEGIRO",
    type: "comparison",
    href: "/tools/finance/etoro-vs-degiro",
    topics: ["investing", "brokers"],
    affiliateSlugs: ["etoro", "degiro"],
  },
  {
    slug: "etoro-vs-trading212",
    title: "eToro vs Trading 212",
    type: "comparison",
    href: "/tools/finance/etoro-vs-trading212",
    topics: ["investing", "brokers"],
  },
  {
    slug: "degiro-vs-trading212",
    title: "DEGIRO vs Trading 212",
    type: "comparison",
    href: "/tools/finance/degiro-vs-trading212",
    topics: ["investing", "brokers"],
  },
  {
    slug: "revolut-vs-wise",
    title: "Revolut vs Wise",
    type: "comparison",
    href: "/tools/finance/revolut-vs-wise",
    topics: ["banking", "saving"],
  },
  {
    slug: "ynab-vs-mint",
    title: "YNAB vs Mint",
    type: "comparison",
    href: "/tools/finance/ynab-vs-mint",
    topics: ["budgeting"],
  },
];
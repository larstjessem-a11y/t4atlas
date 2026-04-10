export type HubItem = {
  slug: string;
  name: string;
  href: string;
  description: string;
  categories: string[];
  featuredLinks: {
    name: string;
    href: string;
  }[];
};

export const hubs: HubItem[] = [
{
  slug: "converters",
  name: "Converters",
  href: "/tools/converters",
  description:
    "Fast, simple conversion tools for length, weight, temperature, and other everyday unit conversions.",
  categories: [
    "length",
    "weight",
    "temperature",
    "everyday utilities",
  ],
  featuredLinks: [
    {
      name: "Length Converters",
      href: "/tools/converters/subcategory/length",
    },
    {
      name: "Weight Converters",
      href: "/tools/converters/subcategory/weight",
    },
    {
      name: "Temperature Converters",
      href: "/tools/converters/subcategory/temperature",
    },
    {
      name: "All Converters",
      href: "/tools/converters",
    },
  ],
},  

{
    slug: "finance",
    name: "Finance",
    href: "/tools/finance",
    description:
      "Investment calculators, return metrics, compounding scenarios, and decision pages for wealth-building and investment analysis.",
    categories: [
      "investment analysis",
      "compound growth",
      "return metrics",
      "decision support",
    ],
    featuredLinks: [
      {
        name: "ROI Calculator",
        href: "/tools/finance/roi-calculator",
      },
      {
        name: "CAGR Calculator",
        href: "/tools/finance/cagr-calculator",
      },
      {
        name: "How Long to Reach $100k",
        href: "/tools/finance/how-long-to-reach-100k",
      },
      {
        name: "ROI vs CAGR vs Payback",
        href: "/tools/finance/roi-vs-cagr-vs-payback",
      },
    ],
  },
  {
    slug: "development",
    name: "Development",
    href: "/tools/development",
    description:
      "Developer utilities for JSON, encoding, JWT inspection, timestamps, hashing, and debugging workflows.",
    categories: [
      "debugging",
      "encoding",
      "json tools",
      "auth tools",
    ],
    featuredLinks: [
      {
        name: "JSON Formatter",
        href: "/tools/development/json-formatter",
      },
      {
        name: "JWT Decoder",
        href: "/tools/development/jwt-decoder",
      },
      {
        name: "What Is JSON?",
        href: "/tools/development/what-is-json",
      },
      {
        name: "Best Debugging Tools for Developers",
        href: "/tools/development/best-debugging-tools-for-developers",
      },
    ],
  },
];
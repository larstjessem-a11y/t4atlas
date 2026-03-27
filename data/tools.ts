export type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  type: "finance" | "converter" | "dev";
  description?: string;
  seoIntro?: string;
  seoTitle?: string;
  seoDescription?: string;
  factor?: number;
  unitFrom?: string;
  unitTo?: string;
  formula?: string;
  examples?: number[];
  reverseSlug?: string;
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
  | "payback-period";
devToolType?:
  | "json-formatter"
  | "json-minifier"
  | "json-validator"
  | "base64-encoder"
  | "base64-decoder"
  | "url-encoder"
  | "url-decoder"
  | "unix-timestamp-converter"
  | "uuid-generator"
  | "hash-generator"
  | "jwt-decoder";
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

export const tools: Tool[] = [
  {
    slug: "cm-to-inches",
    type: "converter",
    name: "CM to Inches Converter",
    category: "converters",
    subcategory: "length",
    factor: 1 / 2.54,
    unitFrom: "cm",
    unitTo: "inches",
    formula: "1 cm = 0.3937 inches",
    examples: [150, 160, 170, 180],
    reverseSlug: "inches-to-cm",
  },
  {
    slug: "inches-to-cm",
 type: "converter",
    name: "Inches to CM Converter",
    category: "converters",
    subcategory: "length",
    factor: 2.54,
    unitFrom: "inches",
    unitTo: "cm",
    formula: "1 inch = 2.54 cm",
    examples: [10, 20, 30, 40],
    reverseSlug: "cm-to-inches",
  },
  {
    slug: "kg-to-lbs",
 type: "converter",
    name: "KG to LBS Converter",
    category: "converters",
    subcategory: "weight",
    factor: 2.20462,
    unitFrom: "kg",
    unitTo: "lbs",
    formula: "1 kg = 2.20462 lbs",
    examples: [50, 60, 70, 80],
    reverseSlug: "lbs-to-kg",
  },
  {
    slug: "lbs-to-kg",
 type: "converter",
    name: "LBS to KG Converter",
    category: "converters",
    subcategory: "weight",
    factor: 1 / 2.20462,
    unitFrom: "lbs",
    unitTo: "kg",
    formula: "1 lb = 0.453592 kg",
    examples: [100, 120, 150, 200],
    reverseSlug: "kg-to-lbs",
  },
  {
    slug: "celsius-to-fahrenheit",
 type: "converter",
    name: "Celsius to Fahrenheit Converter",
    category: "converters",
    subcategory: "temperature",
    factor: 9 / 5,
    unitFrom: "°C",
    unitTo: "°F",
    formula: "°F = (°C × 9/5) + 32",
    examples: [0, 10, 20, 30],
    reverseSlug: "fahrenheit-to-celsius",
  },
  {
    slug: "fahrenheit-to-celsius",
 type: "converter",
    name: "Fahrenheit to Celsius Converter",
    category: "converters",
    subcategory: "temperature",
    factor: 5 / 9,
    unitFrom: "°F",
    unitTo: "°C",
    formula: "°C = (°F - 32) × 5/9",
    examples: [32, 50, 68, 86],
    reverseSlug: "celsius-to-fahrenheit",
  },
{
  slug: "meters-to-feet",
 type: "converter",
  name: "Meters to Feet Converter",
  category: "converters",
  subcategory: "length",
  factor: 3.28084,
  unitFrom: "meters",
  unitTo: "feet",
  formula: "1 meter = 3.28084 feet",
  examples: [1, 5, 10, 20],
  reverseSlug: "feet-to-meters",
},
{
  slug: "feet-to-meters",
 type: "converter",
  name: "Feet to Meters Converter",
  category: "converters",
  subcategory: "length",
  factor: 1 / 3.28084,
  unitFrom: "feet",
  unitTo: "meters",
  formula: "1 foot = 0.3048 meters",
  examples: [3, 6, 10, 20],
  reverseSlug: "meters-to-feet",
},
{
  slug: "km-to-miles",
 type: "converter",
  name: "KM to Miles Converter",
  category: "converters",
  subcategory: "length",
  factor: 0.621371,
  unitFrom: "km",
  unitTo: "miles",
  formula: "1 km = 0.621371 miles",
  examples: [1, 5, 10, 50],
  reverseSlug: "miles-to-km",
},
{
  slug: "miles-to-km",
 type: "converter",
  name: "Miles to KM Converter",
  category: "converters",
  subcategory: "length",
  factor: 1 / 0.621371,
  unitFrom: "miles",
  unitTo: "km",
  formula: "1 mile = 1.60934 km",
  examples: [1, 5, 10, 20],
  reverseSlug: "km-to-miles",
},
{
  slug: "grams-to-ounces",
 type: "converter",
  name: "Grams to Ounces Converter",
  category: "converters",
  subcategory: "weight",
  factor: 0.035274,
  unitFrom: "grams",
  unitTo: "ounces",
  formula: "1 gram = 0.035274 ounces",
  examples: [100, 200, 500, 1000],
  reverseSlug: "ounces-to-grams",
},
{
  slug: "ounces-to-grams",
 type: "converter",
  name: "Ounces to Grams Converter",
  category: "converters",
  subcategory: "weight",
  factor: 1 / 0.035274,
  unitFrom: "ounces",
  unitTo: "grams",
  formula: "1 ounce = 28.3495 grams",
  examples: [1, 5, 10, 20],
  reverseSlug: "grams-to-ounces",
},
{
  slug: "liters-to-gallons",
 type: "converter",
  name: "Liters to Gallons Converter",
  category: "converters",
  subcategory: "volume",
  factor: 0.264172,
  unitFrom: "liters",
  unitTo: "gallons",
  formula: "1 liter = 0.264172 gallons",
  examples: [1, 5, 10, 20],
  reverseSlug: "gallons-to-liters",
},
{
  slug: "gallons-to-liters",
 type: "converter",
  name: "Gallons to Liters Converter",
  category: "converters",
  subcategory: "volume",
  factor: 1 / 0.264172,
  unitFrom: "gallons",
  unitTo: "liters",
  formula: "1 gallon = 3.78541 liters",
  examples: [1, 5, 10, 20],
  reverseSlug: "liters-to-gallons",
},
{
  slug: "ml-to-oz",
 type: "converter",
  name: "ML to Ounces Converter",
  category: "converters",
  subcategory: "volume",
  factor: 0.033814,
  unitFrom: "ml",
  unitTo: "oz",
  formula: "1 ml = 0.033814 ounces",
  examples: [100, 250, 500, 1000],
  reverseSlug: "oz-to-ml",
},
{
  slug: "oz-to-ml",
 type: "converter",
  name: "Ounces to ML Converter",
  category: "converters",
  subcategory: "volume",
  factor: 1 / 0.033814,
  unitFrom: "oz",
  unitTo: "ml",
  formula: "1 ounce = 29.5735 ml",
  examples: [1, 5, 10, 20],
  reverseSlug: "ml-to-oz",
},
{
  slug: "kmh-to-mph",
 type: "converter",
  name: "KM/H to MPH Converter",
  category: "converters",
  subcategory: "speed",
  factor: 0.621371,
  unitFrom: "km/h",
  unitTo: "mph",
  formula: "1 km/h = 0.621371 mph",
  examples: [30, 50, 80, 100],
  reverseSlug: "mph-to-kmh",
},
{
  slug: "mph-to-kmh",
 type: "converter",
  name: "MPH to KM/H Converter",
  category: "converters",
  subcategory: "speed",
  factor: 1 / 0.621371,
  unitFrom: "mph",
  unitTo: "km/h",
  formula: "1 mph = 1.60934 km/h",
  examples: [10, 30, 60, 100],
  reverseSlug: "kmh-to-mph",
},
{
  slug: "square-meters-to-square-feet",
 type: "converter",
  name: "Square Meters to Square Feet Converter",
  category: "converters",
  subcategory: "area",
  factor: 10.7639,
  unitFrom: "m²",
  unitTo: "ft²",
  formula: "1 square meter = 10.7639 square feet",
  examples: [1, 10, 50, 100],
  reverseSlug: "square-feet-to-square-meters",
},
{
  slug: "square-feet-to-square-meters",
 type: "converter",
  name: "Square Feet to Square Meters Converter",
  category: "converters",
  subcategory: "area",
  factor: 1 / 10.7639,
  unitFrom: "ft²",
  unitTo: "m²",
  formula: "1 square foot = 0.092903 square meters",
  examples: [10, 100, 500, 1000],
  reverseSlug: "square-meters-to-square-feet",
},
{
  slug: "acres-to-hectares",
 type: "converter",
  name: "Acres to Hectares Converter",
  category: "converters",
  subcategory: "area",
  factor: 0.404686,
  unitFrom: "acres",
  unitTo: "hectares",
  formula: "1 acre = 0.404686 hectares",
  examples: [1, 5, 10, 50],
  reverseSlug: "hectares-to-acres",
},
{
  slug: "hectares-to-acres",
 type: "converter",
  name: "Hectares to Acres Converter",
  category: "converters",
  subcategory: "area",
  factor: 1 / 0.404686,
  unitFrom: "hectares",
  unitTo: "acres",
  formula: "1 hectare = 2.47105 acres",
  examples: [1, 5, 10, 20],
  reverseSlug: "acres-to-hectares",
},
{
  slug: "seconds-to-minutes",
 type: "converter",
  name: "Seconds to Minutes Converter",
  category: "converters",
  subcategory: "time",
  factor: 1 / 60,
  unitFrom: "seconds",
  unitTo: "minutes",
  formula: "1 minute = 60 seconds",
  examples: [30, 60, 120, 300],
  reverseSlug: "minutes-to-seconds",
},
{
  slug: "minutes-to-seconds",
 type: "converter",
  name: "Minutes to Seconds Converter",
  category: "converters",
  subcategory: "time",
  factor: 60,
  unitFrom: "minutes",
  unitTo: "seconds",
  formula: "1 minute = 60 seconds",
  examples: [1, 5, 10, 30],
  reverseSlug: "seconds-to-minutes",
},
{
  slug: "hours-to-minutes",
 type: "converter",
  name: "Hours to Minutes Converter",
  category: "converters",
  subcategory: "time",
  factor: 60,
  unitFrom: "hours",
  unitTo: "minutes",
  formula: "1 hour = 60 minutes",
  examples: [1, 2, 5, 10],
  reverseSlug: "minutes-to-hours",
},
{
  slug: "minutes-to-hours",
 type: "converter",
  name: "Minutes to Hours Converter",
  category: "converters",
  subcategory: "time",
  factor: 1 / 60,
  unitFrom: "minutes",
  unitTo: "hours",
  formula: "1 hour = 60 minutes",
  examples: [30, 60, 90, 120],
  reverseSlug: "hours-to-minutes",
},
{
  slug: "mb-to-gb",
 type: "converter",
  name: "MB to GB Converter",
  category: "converters",
  subcategory: "data",
  factor: 1 / 1024,
  unitFrom: "MB",
  unitTo: "GB",
  formula: "1 GB = 1024 MB",
  examples: [100, 500, 1024, 2048],
  reverseSlug: "gb-to-mb",
},
{
  slug: "gb-to-mb",
 type: "converter",
  name: "GB to MB Converter",
  category: "converters",
  subcategory: "data",
  factor: 1024,
  unitFrom: "GB",
  unitTo: "MB",
  formula: "1 GB = 1024 MB",
  examples: [1, 2, 5, 10],
  reverseSlug: "mb-to-gb",
},
{
  slug: "bytes-to-kb",
 type: "converter",
  name: "Bytes to KB Converter",
  category: "converters",
  subcategory: "data",
  factor: 1 / 1024,
  unitFrom: "bytes",
  unitTo: "KB",
  formula: "1 KB = 1024 bytes",
  examples: [512, 1024, 2048, 4096],
  reverseSlug: "kb-to-bytes",
},
{
  slug: "kb-to-bytes",
 type: "converter",
  name: "KB to Bytes Converter",
  category: "converters",
  subcategory: "data",
  factor: 1024,
  unitFrom: "KB",
  unitTo: "bytes",
  formula: "1 KB = 1024 bytes",
  examples: [1, 2, 10, 100],
  reverseSlug: "bytes-to-kb",
},
{
  slug: "simple-interest",
  name: "Simple Interest Calculator",
  category: "finance",
  subcategory: "interest",
  type: "finance",
financeType: "simple-interest",
description:
  "Calculate simple interest based on principal, interest rate, and time without compounding.",
seoIntro:
  "A simple interest calculator helps you estimate how much interest you earn or pay on a fixed principal over time without compounding. It is useful for basic loans, savings, and short-term financial planning.",
seoTitle: "Simple Interest Calculator – Calculate Interest Easily",
seoDescription:
  "Use this free simple interest calculator to estimate interest and total amount based on principal, rate, and time.",
},
{
  slug: "compound-interest",
  name: "Compound Interest Calculator",
  category: "finance",
  subcategory: "interest",
  type: "finance",
  financeType: "compound-interest",
description:
  "Estimate how your investment grows over time with compound interest, including optional annual contributions.",
seoIntro:
  "A compound interest calculator shows how your investment grows over time when interest is reinvested. It is essential for understanding long-term investing, savings, and exponential growth.",
seoTitle: "Compound Interest Calculator – Estimate Investment Growth",
seoDescription:
  "Use this compound interest calculator to estimate investment growth with optional annual contributions over time.",
},
{
  slug: "loan-payment",
  name: "Loan Payment Calculator",
  category: "finance",
  subcategory: "loans",
  type: "finance",
  financeType: "loan-payment",
description:
  "Calculate monthly loan payments and total repayment cost based on interest rate and loan duration.",
seoIntro:
  "A loan payment calculator helps you estimate your monthly payments and total repayment amount based on interest rate and loan term. It is commonly used for mortgages, car loans, and personal loans.",
seoTitle: "Loan Payment Calculator – Estimate Monthly Loan Payments",
seoDescription:
  "Calculate monthly loan payments and total repayment using this free loan payment calculator.",
longTailScenarios: [
  {
    slug: "5-year-loan",
    label: "Loan payment calculator for 5 year loan",
  },
  {
    slug: "monthly-loan-with-interest",
    label: "Monthly loan calculator with interest",
  },
  {
    slug: "by-term-length",
    label: "Loan payment calculator by term length",
  },
  {
    slug: "how-much-will-my-loan-payment-be",
    label: "How much will my loan payment be",
  },
],
},
{
  slug: "roi-calculator",
  name: "ROI Calculator",
  category: "finance",
  subcategory: "returns",
  type: "finance",
  financeType: "roi-calculator",
description:
  "Calculate return on investment (ROI) based on the initial investment and final value.",
seoIntro:
  "An ROI calculator helps you measure the profitability of an investment by comparing the initial cost with the final value. It is useful for evaluating business decisions, trades, and investment opportunities.",
seoTitle: "ROI Calculator – Calculate Return on Investment",
seoDescription:
  "Use this ROI calculator to measure return on investment and profit based on initial cost and final value.",
},
{
  slug: "savings-growth",
  name: "Savings Growth Calculator",
  category: "finance",
  subcategory: "savings",
  type: "finance",
  financeType: "savings-growth",
description:
  "Estimate how your savings grow over time with monthly contributions and compound interest.",
seoIntro:
  "A savings growth calculator estimates how your savings will grow over time with regular contributions and compound interest. It is useful for long-term planning such as retirement or wealth building.",
seoTitle: "Savings Growth Calculator – Estimate Future Savings",
seoDescription:
  "Estimate how your savings can grow over time with monthly contributions and compound returns.",
},
{
  slug: "cagr-calculator",
  name: "CAGR Calculator",
  category: "finance",
  subcategory: "investment",
  type: "finance",
  financeType: "cagr",
  description:
    "Calculate the compound annual growth rate (CAGR) to measure the average yearly return of an investment over time.",
  seoIntro:
    "A CAGR calculator helps you measure the average annual return of an investment over multiple years. It is useful when you want to compare investments with different time horizons on a like-for-like basis.",
seoTitle: "CAGR Calculator – Calculate Compound Annual Growth Rate",
seoDescription:
  "Use this CAGR calculator to find the annualized return of an investment over multiple years.",
longTailScenarios: [
  {
    slug: "stock-returns",
    label: "CAGR calculator for stock returns",
  },
  {
    slug: "over-5-years",
    label: "CAGR calculator over 5 years",
  },
  {
    slug: "annualized-return",
    label: "Annualized return calculator for investments",
  },
  {
    slug: "vs-average-annual-return",
    label: "CAGR vs average annual return",
  },
],
},
{
  slug: "mortgage-calculator",
  name: "Mortgage Calculator",
  category: "finance",
  subcategory: "loans",
  type: "finance",
  financeType: "loan-payment",
  description:
    "Estimate your monthly mortgage payment based on loan amount, interest rate, and loan term.",
  seoIntro:
    "A mortgage calculator helps you estimate your monthly home loan payments based on interest rate, loan term, and principal. It is essential when comparing mortgages and planning home purchases.",
  seoTitle: "Mortgage Calculator – Estimate Monthly Mortgage Payments",
  seoDescription:
    "Use this free mortgage calculator to estimate monthly mortgage payments, total repayment, and borrowing costs based on loan amount, rate, and term.",
longTailScenarios: [
  {
    slug: "5-percent-interest",
    label: "Mortgage calculator with 5% interest",
    prefill: {
      rate: "5",
    },
  },
  {
    slug: "30-year-mortgage",
    label: "30 year mortgage calculator",
    prefill: {
      years: "30",
    },
  },
  {
    slug: "extra-payments",
    label: "Mortgage calculator with extra payments",
  },
  {
    slug: "different-loan-amounts",
    label: "Mortgage calculator for different loan amounts",
    prefill: {
      principal: "500000",
    },
  },
],},
{
  slug: "dividend-yield-calculator",
  name: "Dividend Yield Calculator",
  category: "finance",
  subcategory: "investing",
  type: "finance",
  financeType: "roi-calculator",
  description:
    "Calculate dividend yield based on annual dividends and share price to evaluate income-generating investments.",
  seoIntro:
    "A dividend yield calculator helps you determine how much income you earn from a stock relative to its price. It is widely used by investors to compare dividend-paying stocks and assess passive income potential.",
seoTitle: "Dividend Yield Calculator – Calculate Stock Dividend Yield",
seoDescription:
  "Calculate dividend yield from annual dividend and share price using this free dividend yield calculator.",
longTailScenarios: [
  {
    slug: "income-stocks",
    label: "Dividend yield calculator for income stocks",
    prefill: {
      principal: "100",
      finalValue: "5",
    },
  },
  {
    slug: "high-vs-low-yield",
    label: "High dividend yield vs low dividend yield",
    prefill: {
      principal: "100",
      finalValue: "8",
    },
  },
  {
    slug: "by-share-price",
    label: "Dividend yield calculator by share price",
    prefill: {
      principal: "50",
      finalValue: "2",
    },
  },
  {
    slug: "long-term-investors",
    label: "Dividend income calculator for long term investors",
    prefill: {
      principal: "120",
      finalValue: "6",
    },
  },
],
},
{
  slug: "break-even-calculator",
  name: "Break-Even Calculator",
  category: "finance",
  subcategory: "business",
  type: "finance",
  financeType: "break-even",
  description:
    "Calculate the break-even point based on fixed costs, selling price, and variable cost per unit.",
  seoIntro:
    "A break-even calculator helps you find out how many units you need to sell to cover your costs. It is useful for pricing decisions, business planning, and understanding when a product or service becomes profitable.",
  seoTitle: "Break-Even Calculator – Calculate Break-Even Point",
  seoDescription:
    "Use this free break-even calculator to estimate how many units you need to sell to cover fixed and variable costs.",
longTailScenarios: [
  {
    slug: "small-business",
    label: "Break-even calculator for small business",
    prefill: {
      principal: "50",
      rate: "10000",
      finalValue: "20",
    },
  },
  {
    slug: "saas-pricing",
    label: "Break-even calculator for SaaS pricing",
    prefill: {
      principal: "30",
      rate: "20000",
      finalValue: "5",
    },
  },
  {
    slug: "how-many-units",
    label: "How many units to sell to break even",
    prefill: {
      principal: "40",
      rate: "12000",
      finalValue: "15",
    },
  },
  {
    slug: "product-pricing",
    label: "Break-even analysis for product pricing",
    prefill: {
      principal: "80",
      rate: "25000",
      finalValue: "35",
    },
  },
],
},
{
  slug: "apr-calculator",
  name: "APR Calculator",
  category: "finance",
  subcategory: "loans",
  type: "finance",
  financeType: "apr-calculator",
  description:
    "Estimate annual percentage rate (APR) based on loan amount, fees, and interest costs.",
  seoIntro:
    "An APR calculator helps you estimate the annual percentage rate of a loan by taking into account both interest and certain borrowing costs. It is useful when comparing loans, credit products, and financing offers.",
  seoTitle: "APR Calculator – Estimate Annual Percentage Rate",
  seoDescription:
    "Use this free APR calculator to estimate annual percentage rate and compare borrowing costs across different loan offers.",
  longTailScenarios: [
    {
      slug: "personal-loan-apr",
      label: "APR calculator for personal loans",
      prefill: {
        principal: "10000",
        rate: "500",
        finalValue: "1200",
      },
    },
    {
      slug: "loan-fees-and-apr",
      label: "Loan fees and APR calculator",
      prefill: {
        principal: "20000",
        rate: "1000",
        finalValue: "1800",
      },
    },
    {
      slug: "compare-loan-offers",
      label: "APR calculator to compare loan offers",
      prefill: {
        principal: "15000",
        rate: "750",
        finalValue: "1500",
      },
    },
    {
      slug: "credit-cost-comparison",
         label: "Credit cost comparison calculator",
      prefill: {
        principal: "5000",
        rate: "250",
        finalValue: "700",
      },
    },
  ],
  },
  {
    slug: "investment-return-calculator",
    name: "Investment Return Calculator",
    category: "finance",
    subcategory: "investing",
    type: "finance",
    financeType: "investment-return",
    description:
      "Calculate investment return based on starting value and ending value to evaluate overall portfolio performance.",
    seoIntro:
      "An investment return calculator helps you measure how much an investment has gained or lost over time. It is useful for comparing portfolio performance, evaluating trades, and understanding absolute returns.",
    seoTitle: "Investment Return Calculator – Measure Portfolio Performance",
    seoDescription:
      "Use this free investment return calculator to estimate total investment return based on starting and ending value.",
    longTailScenarios: [
      {
        slug: "stock-investment-return",
        label: "Investment return calculator for stocks",
        prefill: {
          principal: "10000",
          finalValue: "12500",
        },
      },
      {
        slug: "portfolio-performance",
        label: "Portfolio performance calculator",
        prefill: {
          principal: "50000",
          finalValue: "58000",
        },
      },
      {
        slug: "gain-or-loss",
        label: "Investment gain or loss calculator",
        prefill: {
          principal: "8000",
          finalValue: "7200",
        },
      },
      {
        slug: "compare-investment-outcomes",
        label: "Compare investment outcomes",
        prefill: {
          principal: "15000",
          finalValue: "19500",
        },
      },
    ],
  },
{
  slug: "payback-period",
  name: "Payback Period Calculator",
  category: "finance",
  subcategory: "investment-analysis",
  type: "finance",
  financeType: "payback-period",
  description:
    "Calculate how long it takes to recover an initial investment based on recurring cash flow.",
  seoIntro:
    "Use this payback period calculator to estimate how long it will take for an investment to pay for itself. It is useful for business purchases, rental properties, solar panels, equipment investments, and side projects.",
  seoTitle:
    "Payback Period Calculator | Calculate Investment Recovery Time",
  seoDescription:
    "Free payback period calculator for investments, equipment, solar panels, and business decisions. Estimate how long it takes to recover your upfront cost.",
  longTailScenarios: [
    {
      slug: "solar-panel-payback-period-calculator",
      label: "Solar panel payback period calculator",
      prefill: {
        principal: "150000",
        annualContribution: "18000",
      },
    },
    {
      slug: "rental-property-payback-period-calculator",
      label: "Rental property payback period calculator",
      prefill: {
        principal: "500000",
        annualContribution: "60000",
      },
    },
    {
      slug: "equipment-payback-period-calculator",
      label: "Equipment payback period calculator",
      prefill: {
        principal: "120000",
        annualContribution: "30000",
      },
    },
    {
      slug: "small-business-investment-payback-calculator",
      label: "Small business investment payback calculator",
      prefill: {
        principal: "80000",
        annualContribution: "20000",
      },
    },
  ],
},
{
  slug: "json-formatter",
  name: "JSON Formatter",
  category: "development",
  subcategory: "json-tools",
  type: "dev",
  devToolType: "json-formatter",
  description:
    "Format and prettify raw JSON so it is easier to read, inspect, and debug.",
  seoIntro:
    "Use this JSON formatter to prettify raw JSON, make nested objects easier to read, and inspect structured data directly in the browser.",
  seoTitle: "JSON Formatter | Format and Prettify JSON Online",
  seoDescription:
    "Free JSON formatter to prettify, validate, and inspect raw JSON online. Clean up and format structured JSON instantly in your browser.",
},
{
  slug: "json-minifier",
  name: "JSON Minifier",
  category: "development",
  subcategory: "json-tools",
  type: "dev",
  devToolType: "json-minifier",
  description:
    "Minify JSON by removing whitespace and unnecessary formatting.",
  seoIntro:
    "Use this JSON minifier to compress formatted JSON into a compact version without changing the underlying data.",
  seoTitle: "JSON Minifier | Minify JSON Online",
  seoDescription:
    "Free JSON minifier to compress and validate JSON online. Remove whitespace and generate compact JSON instantly in your browser.",
},
{
  slug: "json-validator",
  name: "JSON Validator",
  category: "development",
  subcategory: "json-tools",
  type: "dev",
  devToolType: "json-validator",
  description:
    "Validate JSON syntax and check whether your input is properly structured.",
  seoIntro:
    "Use this JSON validator to test whether your JSON is valid and identify malformed input before using it in applications, APIs, or configs.",
  seoTitle: "JSON Validator | Validate JSON Online",
  seoDescription:
    "Free JSON validator to check JSON syntax online. Validate structured JSON input and catch malformed JSON instantly in your browser.",
},
{
  slug: "base64-encoder",
  name: "Base64 Encoder",
  category: "development",
  subcategory: "encoding-tools",
  type: "dev",
  devToolType: "base64-encoder",
  description:
    "Encode plain text into Base64 format directly in your browser.",
  seoIntro:
    "Use this Base64 encoder to convert plain text into Base64 format for development, APIs, debugging, and quick transformations.",
  seoTitle: "Base64 Encoder | Encode Text to Base64 Online",
  seoDescription:
    "Free Base64 encoder to convert text into Base64 online. Fast browser-based encoding for developers and technical workflows.",
},
{
  slug: "base64-decoder",
  name: "Base64 Decoder",
  category: "development",
  subcategory: "encoding-tools",
  type: "dev",
  devToolType: "base64-decoder",
  description:
    "Decode Base64 text back into readable plain text.",
  seoIntro:
    "Use this Base64 decoder to convert Base64 strings back into readable text for debugging, APIs, and development workflows.",
  seoTitle: "Base64 Decoder | Decode Base64 Online",
  seoDescription:
    "Free Base64 decoder to decode Base64 strings online. Convert encoded text back into readable output instantly in your browser.",
},
{
  slug: "url-encoder",
  name: "URL Encoder",
  category: "development",
  subcategory: "encoding-tools",
  type: "dev",
  devToolType: "url-encoder",
  description:
    "Encode text for safe use in URLs, query strings, and technical workflows.",
  seoIntro:
    "Use this URL encoder to convert text into URL-safe encoded format for query parameters, links, APIs, and browser-based debugging.",
  seoTitle: "URL Encoder | Encode URL Components Online",
  seoDescription:
    "Free URL encoder to encode text and query parameters online. Convert strings into URL-safe format instantly in your browser.",
},
{
  slug: "url-decoder",
  name: "URL Decoder",
  category: "development",
  subcategory: "encoding-tools",
  type: "dev",
  devToolType: "url-decoder",
  description:
    "Decode URL-encoded text into readable plain text.",
  seoIntro:
    "Use this URL decoder to convert encoded URL components back into readable text for debugging links, parameters, and web requests.",
  seoTitle: "URL Decoder | Decode URL Components Online",
  seoDescription:
    "Free URL decoder to decode URL-encoded text online. Convert encoded strings back into readable text instantly in your browser.",
},
{
  slug: "unix-timestamp-converter",
  name: "Unix Timestamp Converter",
  category: "development",
  subcategory: "time-tools",
  type: "dev",
  devToolType: "unix-timestamp-converter",
  description:
    "Convert Unix timestamps into readable dates and convert readable dates back into Unix timestamps.",
  seoIntro:
    "Use this Unix timestamp converter to convert epoch timestamps into readable date formats and turn human-readable dates into Unix timestamps for debugging, APIs, and development workflows.",
  seoTitle: "Unix Timestamp Converter | Convert Epoch Time Online",
  seoDescription:
    "Free Unix timestamp converter to convert epoch time into readable dates and convert dates into Unix timestamps online.",
},
{
  slug: "uuid-generator",
  name: "UUID Generator",
  category: "development",
  subcategory: "id-tools",
  type: "dev",
  devToolType: "uuid-generator",
  description:
    "Generate a random UUID instantly in your browser for development, testing, and identifiers.",
  seoIntro:
    "Use this UUID generator to create random UUIDs instantly in the browser for IDs, testing, debugging, and development workflows.",
  seoTitle: "UUID Generator | Generate Random UUID Online",
  seoDescription:
    "Free UUID generator to create random UUIDs online. Generate browser-based UUIDs instantly for development and testing.",
},
{
  slug: "hash-generator",
  name: "Hash Generator",
  category: "development",
  subcategory: "security-tools",
  type: "dev",
  devToolType: "hash-generator",
  description:
    "Generate SHA-1 and SHA-256 hashes from input text directly in your browser.",
  seoIntro:
    "Use this hash generator to create SHA-1 and SHA-256 hashes from text for development, debugging, signatures, and technical workflows.",
  seoTitle: "Hash Generator | Generate SHA-1 and SHA-256 Online",
  seoDescription:
    "Free hash generator to create SHA-1 and SHA-256 hashes online. Generate secure text hashes instantly in your browser.",
},
{
  slug: "jwt-decoder",
  name: "JWT Decoder",
  category: "development",
  subcategory: "auth-tools",
  type: "dev",
  devToolType: "jwt-decoder",
  description:
    "Decode JWT tokens in the browser by inspecting the header, payload, and signature parts.",
  seoIntro:
    "Use this JWT decoder to inspect token headers and payloads directly in the browser for debugging authentication flows, APIs, and auth-related workflows.",
  seoTitle: "JWT Decoder | Decode JWT Tokens Online",
  seoDescription:
    "Free JWT decoder to inspect token headers and payloads online. Decode JWTs instantly in your browser for debugging and development.",
},
];
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
  | "payback-period"
  | "annualized-return"
  | "total-return"
  | "return-multiple"
  | "rule-of-72";
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
  seoTitle?: string;
  seoDescription?: string;
  intro?: string;
  prefill?: {
    principal?: string;
    rate?: string;
    years?: string;
    finalValue?: string;
    annualContribution?: string;
    monthlyContribution?: string;
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
    seoTitle: "Centimeter to Inches (CM -> Inches) Converter",
    seoDescription: "Convert Centimeter to Inches instantly. Fast, simple, and accurate length conversion.",
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
    seoTitle: "Inches to Centimeter (Inches -> CM) Converter",
    seoDescription: "Convert Inches to Centimeter instantly. Fast, simple, and accurate length conversion.",
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
    seoTitle: "Celsius to Fahrenheit (°C → °F) Converter",
seoDescription:"Convert Celsius to Fahrenheit instantly. Fast, simple, and accurate temperature conversion.",
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
    seoTitle: "Fahrenheit to Celsius (°F → °C) Converter",
    seoDescription: "Convert Fahrenheit to Celsius instantly. Fast, simple, and accurate temperature conversion.",
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
  seoTitle: "Meter to Feet Converter",
  seoDescription: "Convert Meter to Feet instantly. Fast, simple, and accurate length conversion.",
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
  seoTitle: "Feet to Meter Converter",
  seoDescription: "Convert Feet to Meter instantly. Fast, simple, and accurate length conversion.",
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
  slug: "feet-to-inches",
  type: "converter",
  name: "Feet to Inches Converter",
  category: "converters",
  subcategory: "length",
  factor: 12,
  unitFrom: "feet",
  unitTo: "inches",
  formula: "1 foot = 12 inches",
  examples: [1, 5, 6, 10],
  reverseSlug: "inches-to-feet",
},
{
  slug: "inches-to-feet",
  type: "converter",
  name: "Inches to Feet Converter",
  category: "converters",
  subcategory: "length",
  factor: 1 / 12,
  unitFrom: "inches",
  unitTo: "feet",
  formula: "1 inch = 0.0833 feet",
  examples: [12, 24, 36, 72],
  reverseSlug: "feet-to-inches",
},
{
  slug: "kg-to-stone",
  type: "converter",
  name: "KG to Stone Converter",
  category: "converters",
  subcategory: "weight",
  factor: 0.157473,
  unitFrom: "kg",
  unitTo: "stone",
  formula: "1 kg = 0.157473 stone",
  examples: [50, 60, 70, 80],
  reverseSlug: "stone-to-kg",
},
{
  slug: "stone-to-kg",
  type: "converter",
  name: "Stone to KG Converter",
  category: "converters",
  subcategory: "weight",
  factor: 1 / 0.157473,
  unitFrom: "stone",
  unitTo: "kg",
  formula: "1 stone = 6.35029 kg",
  examples: [8, 10, 12, 15],
  reverseSlug: "kg-to-stone",
},
{
  slug: "days-to-hours",
  type: "converter",
  name: "Days to Hours Converter",
  category: "converters",
  subcategory: "time",
  factor: 24,
  unitFrom: "days",
  unitTo: "hours",
  formula: "1 day = 24 hours",
  examples: [1, 2, 3, 7],
  reverseSlug: "hours-to-days",
},
{
  slug: "hours-to-days",
  type: "converter",
  name: "Hours to Days Converter",
  category: "converters",
  subcategory: "time",
  factor: 1 / 24,
  unitFrom: "hours",
  unitTo: "days",
  formula: "1 hour = 0.04167 days",
  examples: [24, 48, 72, 168],
  reverseSlug: "days-to-hours",
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
longTailScenarios: [
  {
    slug: "1000-invested-for-5-years-at-5-percent",
    label: "$1,000 Invested for 5 Years at 5%",
    seoTitle:
      "$1,000 Invested for 5 Years at 5% | Compound Interest Calculator",
    seoDescription:
      "See how much $1,000 grows to after 5 years at 5% with compound interest using this scenario calculator.",
    intro:
      "Use this scenario to estimate how much $1,000 could grow over 5 years at a 5% annual return.",
    prefill: {
      principal: "1000",
      rate: "5",
      years: "5",
    },
  },
  {
    slug: "5000-invested-for-10-years-at-7-percent",
    label: "$5,000 Invested for 10 Years at 7%",
    seoTitle:
      "$5,000 Invested for 10 Years at 7% | Compound Interest Calculator",
    seoDescription:
      "Estimate how much $5,000 could grow to after 10 years at 7% with compound interest.",
    intro:
      "Use this scenario to estimate how much $5,000 could grow over 10 years at a 7% annual return.",
    prefill: {
      principal: "5000",
      rate: "7",
      years: "10",
    },
  },
  {
    slug: "10000-invested-for-10-years-at-7-percent",
    label: "$10,000 Invested for 10 Years at 7%",
    seoTitle:
      "$10,000 Invested for 10 Years at 7% | Compound Interest Calculator",
    seoDescription:
      "See how much $10,000 grows to after 10 years at 7% with compound interest using this scenario calculator.",
    intro:
      "Use this scenario to estimate how much $10,000 could grow over 10 years at a 7% annual return.",
    prefill: {
      principal: "10000",
      rate: "7",
      years: "10",
    },
  },
  {
    slug: "10000-invested-for-20-years-at-8-percent",
    label: "$10,000 Invested for 20 Years at 8%",
    seoTitle:
      "$10,000 Invested for 20 Years at 8% | Compound Interest Calculator",
    seoDescription:
      "Calculate how much $10,000 could grow to after 20 years at 8% with compound interest.",
    intro:
      "Use this scenario to estimate long-term compounding on $10,000 over 20 years at an 8% annual return.",
    prefill: {
      principal: "10000",
      rate: "8",
      years: "20",
    },
  },
  {
    slug: "50000-invested-for-20-years-at-7-percent",
    label: "$50,000 Invested for 20 Years at 7%",
    seoTitle:
      "$50,000 Invested for 20 Years at 7% | Compound Interest Calculator",
    seoDescription:
      "Estimate how much $50,000 could grow to after 20 years at 7% using compound interest.",
    intro:
      "Use this scenario to estimate how much $50,000 could grow over 20 years at a 7% annual return.",
    prefill: {
      principal: "50000",
      rate: "7",
      years: "20",
    },
  },
  {
    slug: "100000-invested-for-30-years-at-10-percent",
    label: "$100,000 Invested for 30 Years at 10%",
    seoTitle:
      "$100,000 Invested for 30 Years at 10% | Compound Interest Calculator",
    seoDescription:
      "Estimate how much $100,000 could grow to after 30 years at 10% using compound interest.",
    intro:
      "Use this scenario to estimate long-term compounding on $100,000 invested for 30 years at 10%.",
    prefill: {
      principal: "100000",
      rate: "10",
      years: "30",
    },
  },
  {
    slug: "1000-per-year-for-20-years-at-7-percent",
    label: "$1,000 per Year for 20 Years at 7%",
    seoTitle:
      "$1,000 per Year for 20 Years at 7% | Compound Interest Calculator",
    seoDescription:
      "Estimate the future value of investing $1,000 per year for 20 years at 7% with compound interest.",
    intro:
      "Use this scenario to model annual contributions of $1,000 over 20 years at a 7% annual return.",
    prefill: {
      principal: "0",
      rate: "7",
      years: "20",
      annualContribution: "1000",
    },
  },
  {
    slug: "5000-per-year-for-30-years-at-8-percent",
    label: "$5,000 per Year for 30 Years at 8%",
    seoTitle:
      "$5,000 per Year for 30 Years at 8% | Compound Interest Calculator",
    seoDescription:
      "Estimate the future value of investing $5,000 per year for 30 years at 8% using compound interest.",
    intro:
      "Use this scenario to model annual contributions of $5,000 over 30 years at an 8% annual return.",
    prefill: {
      principal: "0",
      rate: "8",
      years: "30",
      annualContribution: "5000",
    },
  },
],},
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
longTailScenarios: [
  {
    slug: "100-per-month-for-10-years-at-5-percent",
    label: "$100 per Month for 10 Years at 5%",
    seoTitle:
      "$100 per Month for 10 Years at 5% | Savings Growth Calculator",
    seoDescription:
      "See how much savings could grow if you invest $100 per month for 10 years at 5% annual return.",
    intro:
      "Use this scenario to estimate the future value of saving $100 per month for 10 years at a 5% annual return.",
    prefill: {
      principal: "0",
      rate: "5",
      years: "10",
      monthlyContribution: "100",
    },
  },
  {
    slug: "500-per-month-for-10-years-at-7-percent",
    label: "$500 per Month for 10 Years at 7%",
    seoTitle:
      "$500 per Month for 10 Years at 7% | Savings Growth Calculator",
    seoDescription:
      "Estimate how much $500 monthly savings could grow to over 10 years at 7% annual return.",
    intro:
      "Use this scenario to estimate savings growth from investing $500 per month for 10 years at 7%.",
    prefill: {
      principal: "0",
      rate: "7",
      years: "10",
      monthlyContribution: "500",
    },
  },
  {
    slug: "1000-per-month-for-10-years-at-7-percent",
    label: "$1,000 per Month for 10 Years at 7%",
    seoTitle:
      "$1,000 per Month for 10 Years at 7% | Savings Growth Calculator",
    seoDescription:
      "See how much savings could grow if you invest $1,000 per month for 10 years at 7% annual return.",
    intro:
      "Use this scenario to estimate the future value of saving $1,000 per month for 10 years at 7%.",
    prefill: {
      principal: "0",
      rate: "7",
      years: "10",
      monthlyContribution: "1000",
    },
  },
  {
    slug: "500-per-month-for-20-years-at-8-percent",
    label: "$500 per Month for 20 Years at 8%",
    seoTitle:
      "$500 per Month for 20 Years at 8% | Savings Growth Calculator",
    seoDescription:
      "Estimate how much $500 monthly savings could grow to over 20 years at 8% annual return.",
    intro:
      "Use this scenario to estimate long-term savings growth from investing $500 per month for 20 years at 8%.",
    prefill: {
      principal: "0",
      rate: "8",
      years: "20",
      monthlyContribution: "500",
    },
  },
  {
    slug: "1000-per-month-for-20-years-at-7-percent",
    label: "$1,000 per Month for 20 Years at 7%",
    seoTitle:
      "$1,000 per Month for 20 Years at 7% | Savings Growth Calculator",
    seoDescription:
      "Estimate how much $1,000 monthly savings could grow to over 20 years at 7% annual return.",
    intro:
      "Use this scenario to estimate long-term savings growth from investing $1,000 per month for 20 years at 7%.",
    prefill: {
      principal: "0",
      rate: "7",
      years: "20",
      monthlyContribution: "1000",
    },
  },
  {
    slug: "2000-per-month-for-15-years-at-6-percent",
    label: "$2,000 per Month for 15 Years at 6%",
    seoTitle:
      "$2,000 per Month for 15 Years at 6% | Savings Growth Calculator",
    seoDescription:
      "Calculate the future value of saving $2,000 per month for 15 years at a 6% annual return.",
    intro:
      "Use this scenario to estimate savings growth from monthly contributions of $2,000 over 15 years at 6%.",
    prefill: {
      principal: "0",
      rate: "6",
      years: "15",
      monthlyContribution: "2000",
    },
  },
  {
    slug: "100000-starting-balance-and-1000-per-month-for-20-years",
    label: "$100,000 Starting Balance + $1,000 per Month for 20 Years",
    seoTitle:
      "$100,000 Starting Balance and $1,000 per Month for 20 Years | Savings Growth Calculator",
    seoDescription:
      "Estimate how much $100,000 plus monthly contributions of $1,000 could grow to over 20 years.",
    intro:
      "Use this scenario to model a large starting balance combined with ongoing monthly contributions over 20 years.",
    prefill: {
      principal: "100000",
      rate: "7",
      years: "20",
      monthlyContribution: "1000",
    },
  },
  {
    slug: "50000-starting-balance-and-500-per-month-for-30-years",
    label: "$50,000 Starting Balance + $500 per Month for 30 Years",
    seoTitle:
      "$50,000 Starting Balance and $500 per Month for 30 Years | Savings Growth Calculator",
    seoDescription:
      "Estimate how much $50,000 plus monthly contributions of $500 could grow to over 30 years at compound returns.",
    intro:
      "Use this scenario to model a starting balance of $50,000 plus monthly contributions of $500 over 30 years.",
    prefill: {
      principal: "50000",
      rate: "7",
      years: "30",
      monthlyContribution: "500",
    },
  },
],},
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
    "Calculate dividend yield from annual dividend and share price. Use the formula, examples, and scenario presets to compare income-generating investments.",
  seoIntro:
    "A dividend yield calculator helps you estimate how much annual dividend income a stock pays relative to its current share price. It is commonly used by income investors to compare dividend-paying stocks, screen for passive income opportunities, and understand whether a yield is realistic or unusually high.",
seoTitle: "Dividend Yield Calculator (Free + Examples)",
seoDescription:
  "Calculate dividend yield instantly. Includes examples and formula to compare income stocks.",
  longTailScenarios: [
    {
      slug: "100-dollar-stock-3-dollar-dividend",
      label: "Dividend yield for $100 stock with $3 dividend",
      seoTitle: "Dividend Yield for $100 Stock With $3 Dividend",
      seoDescription:
        "Calculate dividend yield for a $100 stock paying a $3 annual dividend.",
      intro:
        "A stock priced at $100 with a $3 annual dividend has a dividend yield of 3%. This is a common example for understanding how dividend yield works.",
      prefill: {
        principal: "100",
        finalValue: "3",
      },
    },
    {
      slug: "50-dollar-stock-2-dollar-dividend",
      label: "Dividend yield for $50 stock with $2 dividend",
      seoTitle: "Dividend Yield for $50 Stock With $2 Dividend",
      seoDescription:
        "Calculate dividend yield for a $50 stock paying a $2 annual dividend.",
      intro:
        "A stock priced at $50 with a $2 annual dividend has a dividend yield of 4%. This scenario is useful for comparing income stocks with different prices.",
      prefill: {
        principal: "50",
        finalValue: "2",
      },
    },
    {
      slug: "25-dollar-stock-1-dollar-dividend",
      label: "Dividend yield for $25 stock with $1 dividend",
      seoTitle: "Dividend Yield for $25 Stock With $1 Dividend",
      seoDescription:
        "Calculate dividend yield for a $25 stock paying a $1 annual dividend.",
      intro:
        "A stock priced at $25 with a $1 annual dividend has a dividend yield of 4%. Lower-priced stocks can have the same yield as higher-priced stocks if the dividend scales proportionally.",
      prefill: {
        principal: "25",
        finalValue: "1",
      },
    },
    {
      slug: "high-dividend-yield-example",
      label: "High dividend yield example",
      seoTitle: "High Dividend Yield Example",
      seoDescription:
        "Use this example to understand how high dividend yields are calculated and why they should be interpreted carefully.",
      intro:
        "A high dividend yield can look attractive, but it may also reflect a falling share price or market concern about dividend sustainability.",
      prefill: {
        principal: "40",
        finalValue: "4",
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
  slug: "annualized-return-calculator",
  name: "Annualized Return Calculator",
  category: "finance",
  subcategory: "investment-analysis",
  type: "finance",
  financeType: "annualized-return",
  description:
    "Calculate annualized return to compare investments across different time periods.",
  seoIntro:
    "Use this annualized return calculator to convert total growth into an annual rate so you can compare investments held over different time horizons.",
  seoTitle: "Annualized Return Calculator | Compare Investment Growth",
  seoDescription:
    "Free annualized return calculator to compare investments over different time periods. Convert total growth into an annual return rate instantly.",
  longTailScenarios: [
    {
      slug: "stock-portfolio-annualized-return",
      label: "Stock Portfolio Annualized Return Calculator",
      prefill: {
        principal: "10000",
        finalValue: "15800",
        years: "5",
      },
    },
    {
      slug: "real-estate-annualized-return",
      label: "Real Estate Annualized Return Calculator",
      prefill: {
        principal: "250000",
        finalValue: "340000",
        years: "7",
      },
    },
    {
      slug: "fund-investment-annualized-return",
      label: "Fund Investment Annualized Return Calculator",
      prefill: {
        principal: "5000",
        finalValue: "7600",
        years: "4",
      },
    },
  ],
},
{
  slug: "total-return-calculator",
  name: "Total Return Calculator",
  category: "finance",
  subcategory: "investment-analysis",
  type: "finance",
  financeType: "total-return",
  description:
    "Calculate total return as the full percentage gain or loss between starting value and ending value.",
  seoIntro:
    "Use this total return calculator to measure the full percentage gain or loss of an investment over the period you held it.",
  seoTitle: "Total Return Calculator | Measure Full Investment Return",
  seoDescription:
    "Free total return calculator to measure the full gain or loss of an investment. Compare starting and ending value instantly.",
  longTailScenarios: [
    {
      slug: "stock-total-return",
      label: "Stock Total Return Calculator",
      prefill: {
        principal: "12000",
        finalValue: "15600",
      },
    },
    {
      slug: "index-fund-total-return",
      label: "Index Fund Total Return Calculator",
      prefill: {
        principal: "20000",
        finalValue: "27800",
      },
    },
    {
      slug: "property-total-return",
      label: "Property Total Return Calculator",
      prefill: {
        principal: "300000",
        finalValue: "390000",
      },
    },
  ],
},
{
  slug: "return-multiple-calculator",
  name: "Return Multiple Calculator",
  category: "finance",
  subcategory: "investment-analysis",
  type: "finance",
  financeType: "return-multiple",
  description:
    "Calculate return multiple to see how many times your original investment has grown.",
  seoIntro:
    "Use this return multiple calculator to measure how many times your original investment has grown, such as 2x, 3x, or more.",
  seoTitle: "Return Multiple Calculator | Measure 2x, 3x, and More",
  seoDescription:
    "Free return multiple calculator to see how many times an investment has grown. Calculate 2x, 3x, and other return multiples instantly.",
  longTailScenarios: [
    {
      slug: "venture-investment-multiple",
      label: "Venture Investment Multiple Calculator",
      prefill: {
        principal: "50000",
        finalValue: "175000",
      },
    },
    {
      slug: "stock-return-multiple",
      label: "Stock Return Multiple Calculator",
      prefill: {
        principal: "8000",
        finalValue: "18400",
      },
    },
    {
      slug: "crypto-return-multiple",
      label: "Crypto Return Multiple Calculator",
      prefill: {
        principal: "3000",
        finalValue: "9600",
      },
    },
  ],
},
{
  slug: "rule-of-72-calculator",
  name: "Rule of 72 Calculator",
  category: "finance",
  subcategory: "investment-analysis",
  type: "finance",
  financeType: "rule-of-72",
  description:
    "Estimate how long it takes an investment to double using the Rule of 72.",
  seoIntro:
    "Use this Rule of 72 calculator to estimate how many years it takes for money to double at a given annual interest or return rate.",
  seoTitle: "Rule of 72 Calculator | Estimate Doubling Time",
  seoDescription:
    "Free Rule of 72 calculator to estimate how long it takes an investment to double based on annual return or interest rate.",
 longTailScenarios: [
  {
    slug: "how-long-to-double-money-at-4-percent",
    label: "How Long to Double Money at 4%",
    seoTitle:
      "How Long to Double Money at 4%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 4% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 4% annual return.",
    prefill: {
      rate: "4",
    },
  },
  {
    slug: "how-long-to-double-money-at-5-percent",
    label: "How Long to Double Money at 5%",
    seoTitle:
      "How Long to Double Money at 5%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 5% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 5% annual return.",
    prefill: {
      rate: "5",
    },
  },
  {
    slug: "how-long-to-double-money-at-6-percent",
    label: "How Long to Double Money at 6%",
    seoTitle:
      "How Long to Double Money at 6%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 6% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 6% annual return.",
    prefill: {
      rate: "6",
    },
  },
  {
    slug: "how-long-to-double-money-at-7-percent",
    label: "How Long to Double Money at 7%",
    seoTitle:
      "How Long to Double Money at 7%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 7% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 7% annual return.",
    prefill: {
      rate: "7",
    },
  },
  {
    slug: "how-long-to-double-money-at-8-percent",
    label: "How Long to Double Money at 8%",
    seoTitle:
      "How Long to Double Money at 8%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at an 8% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at an 8% annual return.",
    prefill: {
      rate: "8",
    },
  },
  {
    slug: "how-long-to-double-money-at-10-percent",
    label: "How Long to Double Money at 10%",
    seoTitle:
      "How Long to Double Money at 10%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 10% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 10% annual return.",
    prefill: {
      rate: "10",
    },
  },
  {
    slug: "how-long-to-double-money-at-12-percent",
    label: "How Long to Double Money at 12%",
    seoTitle:
      "How Long to Double Money at 12%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 12% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 12% annual return.",
    prefill: {
      rate: "12",
    },
  },
  {
    slug: "how-long-to-double-money-at-15-percent",
    label: "How Long to Double Money at 15%",
    seoTitle:
      "How Long to Double Money at 15%? | Rule of 72 Calculator",
    seoDescription:
      "Estimate how long it takes to double money at a 15% annual return using the Rule of 72.",
    intro:
      "Use this scenario to estimate how many years it takes to double money at a 15% annual return.",
    prefill: {
      rate: "15",
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
{
  slug: "sleep-assessment",
  name: "Sleep Assessment",
  category: "sleep",
  subcategory: "sleep-tools",
  type: "dev",
  description: "Answer a few questions to understand your most likely sleep problem pattern.",
  seoTitle: "Sleep Assessment Tool – Find Your Sleep Problem Type",
  seoDescription: "Answer simple questions about insomnia, sleep schedule, stress, and sleep apnea warning signs."
}
];
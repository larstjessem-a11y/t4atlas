import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinanceTemplate from "@/components/FinanceTemplate";
import { tools } from "@/data/tools";
import {
  financeEditorialPages,
  type FinanceEditorialPage,
  type FinanceEditorialTopic,
} from "@/data/financeEditorial";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    scenario?: string;
  }>;
};

const financeTools = tools.filter((tool) => tool.category === "finance");

function getRelatedPages(page: FinanceEditorialPage) {
  return financeEditorialPages
    .filter((item) => item.slug !== page.slug)
    .map((item) => {
      const overlap = item.topics.filter((topic) =>
        page.topics.includes(topic)
      ).length;

      return { ...item, score: overlap };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function getTopicAngle(topics: FinanceEditorialTopic[]) {
  if (topics.includes("brokers")) {
    return {
      shortAnswer:
        "Broker and investing platform decisions should be based on fees, available markets, usability, regulation, account types, and whether the product fits how you actually invest.",
      whatToCompare: [
        "Trading fees, currency fees, and spread costs",
        "Available stocks, ETFs, funds, and markets",
        "Account types and tax/reporting support",
        "Ease of use for beginners versus advanced investors",
      ],
      warning:
        "Do not choose a broker only because it is popular. A low-cost platform that lacks the markets or account features you need can still be the wrong choice.",
    };
  }

  if (topics.includes("budgeting")) {
    return {
      shortAnswer:
        "Budgeting tools are most useful when they make spending visible, reduce friction, and help you act consistently rather than just track numbers passively.",
      whatToCompare: [
        "Automatic transaction import",
        "Category rules and recurring expenses",
        "Goal tracking and savings targets",
        "Ease of use across mobile and desktop",
      ],
      warning:
        "A budgeting app only helps if you keep using it. Simplicity often matters more than advanced features.",
    };
  }

  if (topics.includes("saving") || topics.includes("banking")) {
    return {
      shortAnswer:
        "Savings and banking products should be compared on yield, fees, access, safety, currency support, and how easily the account fits your financial workflow.",
      whatToCompare: [
        "Interest rate or yield",
        "Fees, withdrawal limits, and transfer speed",
        "Deposit protection and provider credibility",
        "Currency support and international use",
      ],
      warning:
        "A high advertised rate is not enough. Always check restrictions, fees, and whether the rate is temporary.",
    };
  }

  if (topics.includes("side-income")) {
    return {
      shortAnswer:
        "Side-income and passive-income ideas should be judged by capital required, risk, time input, scalability, and how predictable the income really is.",
      whatToCompare: [
        "Startup capital required",
        "Time and maintenance burden",
        "Risk of loss or income volatility",
        "Scalability and realistic monthly upside",
      ],
      warning:
        "Most passive-income ideas are not truly passive at the start. Treat them as assets that need setup, testing, and maintenance.",
    };
  }

  return {
    shortAnswer:
      "Finance decisions work best when you compare costs, risk, expected return, time horizon, and practical usability together rather than optimizing one number in isolation.",
    whatToCompare: [
      "Expected return or savings impact",
      "Fees and hidden costs",
      "Risk, volatility, and downside scenarios",
      "Fit with your time horizon and goals",
    ],
    warning:
      "Avoid making financial decisions from a single metric. A good choice usually depends on context, risk tolerance, and alternatives.",
  };
}

function getTypeAngle(page: FinanceEditorialPage) {
  if (page.type === "comparison") {
    return {
      label: "Comparison guide",
      explanation:
        "This page compares two finance products or concepts directly. The goal is not to declare a universal winner, but to clarify which option is better for different user needs.",
      decisionFrame:
        "Use this comparison by first deciding what matters most to you: cost, simplicity, features, market access, automation, or long-term flexibility.",
    };
  }

  if (page.type === "alternative") {
    return {
      label: "Alternative guide",
      explanation:
        "This page is for users who already know one product or concept and want close substitutes. Alternatives should be judged by what problem they solve better, not just by having similar branding.",
      decisionFrame:
        "Use this guide to compare whether the alternative gives you lower cost, better usability, more relevant features, or a better fit for your country and financial setup.",
    };
  }

  return {
    label: "Best-of guide",
    explanation:
      "This page is designed to help narrow a crowded market into a smaller set of practical options. The best choice depends on the user profile, not just the product with the most features.",
    decisionFrame:
      "Use this guide by matching your goal to the right category: beginner use, low cost, automation, long-term investing, budgeting control, or income generation.",
  };
}

export async function generateStaticParams() {
  return [
    ...financeEditorialPages.map((page) => ({
      slug: page.slug,
    })),
    ...financeTools.map((tool) => ({
      slug: tool.slug,
    })),
  ];
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const scenario = resolvedSearchParams?.scenario;

  const tool = financeTools.find((item) => item.slug === slug);

  if (tool) {
    const activeScenario = tool.longTailScenarios?.find(
      (item) => item.slug === scenario
    );

    const title = activeScenario?.seoTitle
      ? activeScenario.seoTitle
      : activeScenario
      ? `${activeScenario.label} | T4 Atlas`
      : tool.seoTitle ?? `${tool.name} | T4 Atlas`;

    const description = activeScenario?.seoDescription
      ? activeScenario.seoDescription
      : activeScenario
      ? activeScenario.intro ??
        `Use this ${activeScenario.label.toLowerCase()} tool on T4 Atlas to explore this finance scenario.`
      : tool.seoDescription ??
        tool.description ??
        `Use the ${tool.name} on T4 Atlas.`;

    return {
      title,
      description,
    };
  }

  const page = financeEditorialPages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Finance Tools | T4 Atlas",
      description:
        "Explore finance calculators, comparisons, best-of pages, and alternatives.",
    };
  }

  return {
    title: `${page.title} | T4 Atlas`,
    description: `Compare ${page.title.toLowerCase()} with practical finance tools, decision criteria, risks, and related calculators on T4 Atlas.`,
  };
}

export default async function FinanceDynamicPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const scenario = resolvedSearchParams?.scenario;

  const tool = financeTools.find((item) => item.slug === slug);

  if (tool) {
    return <FinanceTemplate tool={tool} scenario={scenario} />;
  }

  const page = financeEditorialPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const relatedPages = getRelatedPages(page);
  const topicAngle = getTopicAngle(page.topics);
  const typeAngle = getTypeAngle(page);

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/finance" className="hover:text-gray-900">
              Finance
            </Link>
            <span>→</span>
            <span>{page.title}</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {typeAngle.label}
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {page.title}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            {topicAngle.shortAnswer}
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
            <p className="leading-7 text-gray-600">{topicAngle.shortAnswer}</p>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              How to think about this page
            </h2>
            <p className="leading-7 text-gray-600">{typeAngle.explanation}</p>
            <p className="mt-4 leading-7 text-gray-600">
              {typeAngle.decisionFrame}
            </p>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">What to compare</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {topicAngle.whatToCompare.map((item) => (
                <div key={item} className="rounded-2xl border bg-gray-50 p-4">
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Common mistake</h2>
            <p className="leading-7 text-gray-600">{topicAngle.warning}</p>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Use finance calculators
            </h2>
            <p className="mb-5 leading-7 text-gray-600">
              Editorial finance pages are most useful when combined with actual
              calculations. Use these tools to test returns, yields, growth
              rates, and investment scenarios.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/tools/finance/dividend-yield-calculator"
                className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                Dividend Yield Calculator
              </Link>
              <Link
                href="/tools/finance/roi-calculator"
                className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                ROI Calculator
              </Link>
              <Link
                href="/tools/finance/cagr-calculator"
                className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                CAGR Calculator
              </Link>
              <Link
                href="/tools/finance/investment-return-calculator"
                className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                Investment Return Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {page.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Affiliate-ready section
            </h2>
            <p className="leading-7 text-gray-600">
              This page is structured for future affiliate or sponsored
              placements. Product recommendations should later be based on
              transparent criteria such as cost, availability, usability, and fit
              for the target user.
            </p>

            {page.affiliateSlugs && page.affiliateSlugs.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {page.affiliateSlugs.map((slug) => (
                  <span
                    key={slug}
                    className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                  >
                    {slug}
                  </span>
                ))}
              </div>
            )}
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Related finance pages
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedPages.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>

          <div className="my-4 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
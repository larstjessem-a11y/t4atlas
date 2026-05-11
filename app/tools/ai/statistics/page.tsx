import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Statistics Hub | Market Share, Search Demand & Growth",
  description:
    "Explore AI statistics, market-share signals, search demand, growth trends, and AI tool momentum data from T4 Atlas.",
};

const statisticsPages = [
  {
    title: "AI Tools Market Share",
    href: "/tools/ai/ai-tools-market-share",
    description:
      "Compare major AI tools by market-share signals, traffic visibility, and T4 Atlas momentum score.",
    label: "Market share",
  },
  {
    title: "Most Searched AI Tools",
    href: "/tools/ai/most-searched-ai-tools",
    description:
      "Explore which AI tools attract the strongest search demand and why users search for them.",
    label: "Search demand",
  },
  {
    title: "Fastest Growing AI Tools",
    href: "/tools/ai/fastest-growing-ai-tools",
    description:
      "Track fast-growing AI tools by growth drivers, workflow relevance, and momentum score.",
    label: "Growth trends",
  },
];

export default function AiStatisticsHubPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>AI Statistics</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI statistics hub
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            AI Statistics Hub
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Explore AI market-share signals, search demand, growth momentum,
            tool categories, and workflow-level adoption patterns. This hub
            connects T4 Atlas data pages for tracking how the AI tool ecosystem
            is evolving.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#statistics-pages"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Browse statistics
            </a>
            <a
              href="#methodology"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Methodology
            </a>
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">
              Market share signals
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Understand which AI tools dominate public visibility and chatbot
              market-share estimates.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">
              Search demand
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Track which AI tools people search for and what those searches
              reveal about user intent.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">
              Growth momentum
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Compare tools by growth drivers, ecosystem adoption, workflow
              expansion, and category relevance.
            </p>
          </div>
        </section>

        <section
          id="statistics-pages"
          className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            AI statistics and data pages
          </h2>
          <p className="mb-5 max-w-3xl text-gray-600">
            Start with the core AI statistics pages below. Each page uses a
            consistent methodology and links back into related AI guides,
            comparisons, and workflow pages.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {statisticsPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-3xl border bg-gray-50 p-5 transition hover:bg-white hover:shadow-sm"
              >
                <span className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                  {page.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="methodology"
          className="mb-8 rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            How T4 Atlas tracks AI statistics
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              AI tool markets are still young, fragmented, and difficult to
              measure with a single metric. T4 Atlas separates market-share
              signals, search demand, traffic visibility, and editorial momentum
              analysis rather than treating them as one number.
            </p>

            <p>
              The goal is not to claim a perfect official ranking. The goal is
              to make the AI tool landscape easier to compare by combining public
              signals, workflow relevance, and category-level interpretation.
            </p>

            <p>
              Market share, traffic, search visibility, and growth momentum can
              point in different directions. That is why the statistics pages
              explain both the data and the limitations behind each ranking.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Related AI workflow guides
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/ai/best-ai-workspace-tools"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Workspace Tools
            </Link>
            <Link
              href="/tools/ai/best-ai-tools-for-productivity"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Tools for Productivity
            </Link>
            <Link
              href="/tools/ai/best-ai-tools-for-writing"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Writing Tools
            </Link>
            <Link
              href="/tools/ai/best-ai-tools-for-meetings"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Meeting Tools
            </Link>
            <Link
              href="/tools/ai/chatgpt-vs-claude"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              ChatGPT vs Claude
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
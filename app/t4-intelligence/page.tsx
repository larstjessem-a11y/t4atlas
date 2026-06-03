import type { Metadata } from "next";
import Link from "next/link";
import {
  intelligenceArticles,
  intelligenceCategories,
} from "@/data/intelligenceArticles";

export const metadata: Metadata = {
  title: "T4 Intelligence | Analysis, Risk and Future Insight",
  description:
    "T4 Intelligence publishes structured analysis on AI, biosecurity, pandemics, geopolitics, supply-chain risk, operational risk, preparedness, and future scenarios.",
};

const featuredArticles = intelligenceArticles.filter(
  (article) => article.featured
);

export default function T4IntelligenceHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-3 py-6 text-slate-100 sm:px-4 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <section className="mb-8 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-5 shadow-2xl shadow-blue-950/20 md:rounded-[2rem] md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-400 md:text-sm">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>→</span>
            <span>T4 Intelligence</span>
          </div>

          <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
            Analysis layer
          </span>

          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            T4 Intelligence
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:mt-5 md:text-lg md:leading-8">
            Structured analysis on AI, biosecurity, geopolitics, supply-chain
            risk, operational resilience, preparedness, and future scenarios.
            T4 Intelligence connects data, risk signals, and strategic
            interpretation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Featured analysis
            </a>

            <a
              href="#categories"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Browse categories
            </a>
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
            <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
              Data layer
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white">
              What the data shows
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              T4 Atlas tools, statistics, rankings, comparisons, and datasets.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
            <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
              Intelligence layer
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white">
              What it means
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Analysis, scenarios, implications, and future-risk interpretation.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
            <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
              Publishing engine
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white">
              Multi-channel output
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Articles designed for newsletters, LinkedIn, reports, and video.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
            <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
              Commercial layer
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white">
              Built for monetization
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Newsletter, lead generation, reports, affiliates, and sponsored
              analysis.
            </p>
          </div>
        </section>

        <section
          id="featured"
          className="mb-8 rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8"
        >
          <div className="mb-5">
            <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
              Featured
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Featured intelligence analysis
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              Start with the core analyses that define the T4 Intelligence
              layer.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/t4-intelligence/analysis/${article.slug}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
                  {
                    intelligenceCategories.find(
                      (category) => category.slug === article.category
                    )?.title
                  }
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {article.description}
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  {article.readingTime} min read
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="categories"
          className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8"
        >
          <div className="mb-5">
            <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
              Categories
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Browse intelligence categories
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
              >
                <h3 className="font-semibold text-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getIntelligenceArticlesByCategory,
  intelligenceCategories,
  type IntelligenceCategory,
} from "@/data/intelligenceArticles";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return intelligenceCategories.map((category) => ({
    category: category.slug,
  }));
}

function isIntelligenceCategory(value: string): value is IntelligenceCategory {
  return intelligenceCategories.some((category) => category.slug === value);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isIntelligenceCategory(category)) {
    return {
      title: "T4 Intelligence | T4 Atlas",
      description:
        "Structured analysis on AI, biosecurity, geopolitics, supply-chain risk, operational risk, preparedness, and future scenarios.",
    };
  }

  const categoryConfig = intelligenceCategories.find(
    (item) => item.slug === category
  );

  return {
    title: `${categoryConfig?.title ?? "T4 Intelligence"} | T4 Atlas`,
    description:
      categoryConfig?.description ??
      "Structured intelligence analysis from T4 Atlas.",
  };
}

export default async function T4IntelligenceCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  if (!isIntelligenceCategory(category)) {
    notFound();
  }

  const categoryConfig = intelligenceCategories.find(
    (item) => item.slug === category
  );

  const articles = getIntelligenceArticlesByCategory(category);

  return (
    <main className="min-h-screen bg-slate-950 px-3 py-6 text-slate-100 sm:px-4 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <section className="mb-8 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-5 shadow-2xl shadow-blue-950/20 md:rounded-[2rem] md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-400 md:text-sm">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>→</span>
            <Link
              href="/t4-intelligence"
              className="transition hover:text-white"
            >
              T4 Intelligence
            </Link>
            <span>→</span>
            <span>{categoryConfig?.title}</span>
          </div>

          <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
            T4 Intelligence category
          </span>

          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {categoryConfig?.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:mt-5 md:text-lg md:leading-8">
            {categoryConfig?.description}
          </p>
        </section>

        <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
          <div className="mb-5">
            <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
              Articles
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Latest analysis
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/t4-intelligence/analysis/${article.slug}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
                  {article.publishedAt} · {article.readingTime} min read
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>

          {articles.length === 0 ? (
            <p className="text-sm leading-7 text-slate-300">
              No articles have been published in this category yet.
            </p>
          ) : null}
        </section>
      </div>
    </main>
  );
}
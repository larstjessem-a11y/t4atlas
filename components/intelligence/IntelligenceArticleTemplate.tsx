import Link from "next/link";
import AffiliateBlock from "@/components/AffiliateBlock";
import type { IntelligenceArticle } from "@/data/intelligenceArticles";
import {
  getIntelligenceArticle,
  intelligenceCategories,
} from "@/data/intelligenceArticles";
import NewsletterSignup from "@/components/intelligence/NewsletterSignup";

type IntelligenceArticleTemplateProps = {
  article: IntelligenceArticle;
};

function getCategoryLabel(categorySlug: IntelligenceArticle["category"]) {
  return (
    intelligenceCategories.find((category) => category.slug === categorySlug)
      ?.title ?? "T4 Intelligence"
  );
}

function getRelatedArticles(article: IntelligenceArticle) {
  return article.relatedArticles
    .map((slug) => getIntelligenceArticle(slug))
    .filter((item): item is IntelligenceArticle => Boolean(item));
}

export default function IntelligenceArticleTemplate({
  article,
}: IntelligenceArticleTemplateProps) {
  const relatedArticles = getRelatedArticles(article);
  const categoryLabel = getCategoryLabel(article.category);

  return (
    <main className="min-h-screen bg-slate-950 px-3 py-6 text-slate-100 sm:px-4 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-5xl">
        <article className="grid gap-6">
          <section className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-5 shadow-2xl shadow-blue-950/20 md:rounded-[2rem] md:p-8">
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
              <Link
                href={`/t4-intelligence/${article.category}`}
                className="transition hover:text-white"
              >
                {categoryLabel}
              </Link>
            </div>

            <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
              {categoryLabel}
            </span>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:mt-5 md:text-lg md:leading-8">
              {article.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400 md:text-sm">
              <span>{article.publishedAt}</span>
              <span>·</span>
              <span>{article.readingTime} min read</span>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
            <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
              Executive Summary
            </span>

            <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              {article.executiveSummary}
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Key Takeaways
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {article.keyTakeaways.map((takeaway) => (
                <div
                  key={takeaway}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {takeaway}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
            <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
              Main Analysis
            </span>

            <div className="space-y-8">
              {article.mainAnalysis.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Strategic Implications
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300 md:text-base">
              {article.strategicImplications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              What Happens Next?
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300 md:text-base">
              {article.whatHappensNext.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-cyan-500/20 bg-cyan-500/10 p-5 shadow-xl shadow-cyan-950/10 md:rounded-[2rem] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Join T4 Intelligence
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-cyan-50/80 md:text-base">
              Get structured analysis on AI, biosecurity, geopolitics, supply
              chains, operational risk, and future scenarios.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <NewsletterSignup />
              <button className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Join newsletter
              </button>
            </div>
          </section>

          {article.relatedDatasets.length > 0 ? (
            <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Related T4 Atlas Data
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {article.relatedDatasets.map((dataset) => (
                  <Link
                    key={dataset.href}
                    href={dataset.href}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
                  >
                    <div className="font-semibold text-white">
                      {dataset.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {dataset.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {article.affiliateCategory ? (
            <AffiliateBlock
              slug={`t4-intelligence-${article.slug}`}
              placement="editorial_bottom"
              title="Related resources"
            />
          ) : null}

          {relatedArticles.length > 0 ? (
            <section className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30 md:rounded-[2rem] md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Related Intelligence Articles
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/t4-intelligence/analysis/${related.slug}`}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
                  >
                    <div className="text-xs font-medium uppercase tracking-wide text-cyan-200">
                      {getCategoryLabel(related.category)}
                    </div>
                    <div className="mt-2 font-semibold text-white">
                      {related.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </main>
  );
}
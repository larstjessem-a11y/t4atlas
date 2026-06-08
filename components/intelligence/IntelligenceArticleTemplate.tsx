import Link from "next/link";
import AffiliateBlock from "@/components/AffiliateBlock";
import type { IntelligenceArticle } from "@/data/intelligenceArticles";
import {
  getIntelligenceArticle,
  intelligenceCategories,
} from "@/data/intelligenceArticles";
import NewsletterSignup from "@/components/intelligence/NewsletterSignup";
import T4BiosecurityConvergenceDiagram from "@/components/intelligence/T4BiosecurityConvergenceDiagram";
import T4Divider from "@/components/intelligence/T4Divider";
import T4SignalBadge from "@/components/intelligence/T4SignalBadge";
import T4CompassIcon from "@/components/intelligence/T4CompassIcon";
import T4RouteMarker from "@/components/intelligence/T4RouteMarker";

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
    <main className="min-h-screen bg-[var(--t4-background)] px-3 py-6 text-[var(--t4-text)] sm:px-4 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-5xl">
        <article className="grid gap-6">
          <section className="t4-map-texture t4-contours relative overflow-hidden rounded-[1.75rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <img
              src="/branding/t4-compass-rose.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] opacity-[0.07] md:-right-14 md:-top-20 md:h-[380px] md:w-[380px]"
            />

            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-[var(--t4-muted)] md:text-sm">
                <Link href="/" className="transition hover:text-[var(--t4-blue)]">
                  Home
                </Link>
                <span>→</span>
                <Link
                  href="/t4-intelligence"
                  className="transition hover:text-[var(--t4-blue)]"
                >
                  T4 Intelligence
                </Link>
                <span>→</span>
                <Link
                  href={`/t4-intelligence/${article.category}`}
                  className="transition hover:text-[var(--t4-blue)]"
                >
                  {categoryLabel}
                </Link>
              </div>

              <span className="mb-4 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
                {categoryLabel}
              </span>

              <h1 className="t4-title max-w-4xl text-3xl font-semibold text-[var(--t4-text)] sm:text-4xl md:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--t4-muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
                {article.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-[var(--t4-muted)] md:text-sm">
                <span>{article.publishedAt}</span>
                <span>·</span>
                <span>{article.readingTime} min read</span>
              </div>
<div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#7c5b2d]">
  <T4CompassIcon />
  <span>Mapping signals, risks, and future scenarios</span>
</div>
<div className="mt-5 flex flex-wrap gap-2">
  <T4SignalBadge label="Signal" />
  <T4SignalBadge label="Frontier" variant="frontier" />
</div>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <span className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
              Executive Summary
            </span>

            <p className="max-w-3xl text-sm leading-7 text-[var(--t4-muted)] md:text-base">
              {article.executiveSummary}
            </p>
          </section>
<T4Divider />
          <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
              Key Takeaways
            </h2>

           <div className="mt-6 grid gap-4 md:grid-cols-2">
  {article.keyTakeaways.map((takeaway, index) => (
    <div
      key={takeaway}
      className="rounded-[1.5rem] border border-[var(--t4-border)] bg-white/80 p-5"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-semibold text-white">
          {index + 1}
        </div>

        <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
          Key Finding
        </span>
      </div>

      <p className="leading-7 text-[var(--t4-muted)]">
        {takeaway}
      </p>
    </div>
  ))}
</div>
          </section>

<section className="rounded-[1.5rem] border-l-4 border-[#a67c3d] bg-[#f8f6f1] p-6 md:p-8">
  <blockquote className="max-w-3xl text-xl font-medium leading-9 text-[var(--t4-text)] md:text-2xl">
    “The most important developments are often visible years before they become
    obvious.”
  </blockquote>

  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#7c5b2d]">
    T4 Intelligence
  </p>
</section>
<T4Divider />
{article.slug ===
"ai-biology-and-national-security-are-becoming-the-same-conversation" ? (
  <T4BiosecurityConvergenceDiagram />
) : null}
<T4Divider />
          <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <span className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
              Main Analysis
            </span>

            <div className="mx-auto max-w-3xl space-y-10">
              {article.mainAnalysis.map((section) => (
                <div key={section.title}>
                  <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-[var(--t4-muted)]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
<T4Divider />
<section className="rounded-[1.5rem] border border-[#a67c3d]/30 bg-[#f8f6f1] p-5 shadow-sm md:rounded-[2rem] md:p-8">
 <T4SignalBadge label="Watchlist" variant="watchlist" />

  <h2 className="mb-3 text-2xl font-semibold text-[var(--t4-text)]">
    Why This Matters
  </h2>

  <p className="max-w-3xl leading-7 text-[var(--t4-muted)]">
    The most important implication is not the individual event itself, but what
    it reveals about larger trends. Strategic signals often matter long before
    they become visible in traditional headlines.
  </p>
</section>
<T4Divider />
          <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
              Strategic Implications
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-[var(--t4-muted)] md:text-base">
              {article.strategicImplications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
<T4Divider />
          <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
              What Happens Next?
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-[var(--t4-muted)] md:text-base">
              {article.whatHappensNext.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

<section className="rounded-[1.5rem] border border-[#1e3a5f]/20 bg-[#e7eef5] p-5 shadow-sm md:rounded-[2rem] md:p-8">
  <div className="mb-3 flex items-center gap-2">
  <T4RouteMarker />
  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1e3a5f]">
    Signal Tracking
  </span>
</div>

  <h2 className="mb-3 text-2xl font-semibold text-[var(--t4-text)]">
    What We Are Watching
  </h2>

  <p className="max-w-3xl leading-7 text-[var(--t4-muted)]">
    T4 Intelligence monitors developments that may materially change the
    trajectory of this topic over the next 6–24 months.
  </p>
</section>

          <section className="rounded-[1.5rem] border border-[#1e3a5f]/20 bg-[#e7eef5] p-5 shadow-sm md:rounded-[2rem] md:p-8">
            <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
              Join T4 Intelligence
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--t4-muted)] md:text-base">
              Get structured analysis on AI, biosecurity, geopolitics, supply
              chains, operational risk, and future scenarios.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <NewsletterSignup />
            </div>
          </section>

          {article.relatedDatasets.length > 0 ? (
            <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
              <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
                Related T4 Atlas Data
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {article.relatedDatasets.map((dataset) => (
                  <Link
                    key={dataset.href}
                    href={dataset.href}
                    className="rounded-2xl border border-[var(--t4-border)] bg-white/70 p-4 transition hover:border-[#1e3a5f]/40 hover:bg-white"
                  >
                    <div className="font-semibold text-[var(--t4-text)]">
                      {dataset.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
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
            <section className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
              <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
                Related Intelligence Articles
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/t4-intelligence/analysis/${related.slug}`}
                    className="rounded-2xl border border-[var(--t4-border)] bg-white/70 p-4 transition hover:border-[#1e3a5f]/40 hover:bg-white"
                  >
                    <div className="text-xs font-medium uppercase tracking-wide text-[#1e3a5f]">
                      {getCategoryLabel(related.category)}
                    </div>
                    <div className="mt-2 font-semibold text-[var(--t4-text)]">
                      {related.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
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
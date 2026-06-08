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

const focusAreas = [
  {
    label: "Strategic Risk",
    title: "Signals Before They Become Headlines",
    description:
      "Identify emerging risks across technology, health, geopolitics, and operations before they become visible to everyone else.",
  },
  {
    label: "Future Scenarios",
    title: "Structured Thinking About Uncertainty",
    description:
      "Explore plausible future developments, second-order effects, and strategic consequences across industries and societies.",
  },
  {
    label: "Operational Resilience",
    title: "From Risk Awareness to Preparedness",
    description:
      "Understand how organizations can improve resilience, continuity planning, workforce readiness, and decision-making under uncertainty.",
  },
  {
    label: "Technology & Security",
    title: "AI, Biosecurity and Emerging Risks",
    description:
      "Track how AI, biotechnology, cybersecurity, and geopolitical competition are reshaping the global risk landscape.",
  },
];

export default function T4IntelligenceHubPage() {
  return (
    <main className="min-h-screen bg-[var(--t4-background)] px-3 py-6 text-[var(--t4-text)] sm:px-4 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <section className="t4-map-texture t4-contours relative mb-8 overflow-hidden rounded-[1.75rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
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
              <span>T4 Intelligence</span>
            </div>

            <span className="mb-4 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
              Risk · Strategy · Futures
            </span>

            <h1 className="t4-title max-w-4xl text-3xl font-semibold text-[var(--t4-text)] sm:text-4xl md:text-5xl lg:text-6xl">
              T4 Intelligence
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--t4-muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
              T4 Intelligence analyzes emerging risks, technological change,
              and strategic uncertainty. We combine data, scenario analysis, and
              operational insight across AI, biosecurity, geopolitics, supply
              chains, resilience, and future risk.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "AI",
                "Biosecurity",
                "Geopolitics",
                "Supply Chains",
                "Preparedness",
                "Future Risk",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-[var(--t4-border)] bg-white/70 px-3 py-1 text-xs font-medium text-[var(--t4-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="rounded-2xl bg-[var(--t4-blue)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#162d49]"
              >
                Featured analysis
              </a>

              <a
                href="#categories"
                className="rounded-2xl border border-[var(--t4-border)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--t4-text)] transition hover:bg-[var(--t4-surface-soft)]"
              >
                Browse categories
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm"
            >
              <div className="text-xs font-medium uppercase tracking-wide text-[#1e3a5f]">
                {item.label}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-[var(--t4-text)]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section
          id="featured"
          className="mb-8 rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8"
        >
          <div className="mb-5">
            <span className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
              Featured
            </span>

            <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
              Featured intelligence analysis
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--t4-muted)] md:text-base">
              Start with the core analyses that define the T4 Intelligence
              layer.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/t4-intelligence/analysis/${article.slug}`}
                className="rounded-2xl border border-[var(--t4-border)] bg-white/70 p-4 transition hover:border-[#a67c3d]/50 hover:bg-white"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-[#1e3a5f]">
                  {
                    intelligenceCategories.find(
                      (category) => category.slug === article.category
                    )?.title
                  }
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[var(--t4-text)]">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {article.description}
                </p>
                <div className="mt-3 text-xs text-[var(--t4-muted)]">
                  {article.readingTime} min read
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="categories"
          className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8"
        >
          <div className="mb-5">
            <span className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
              Categories
            </span>

            <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
              Browse intelligence categories
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="rounded-2xl border border-[var(--t4-border)] bg-white/70 p-4 transition hover:border-[#a67c3d]/50 hover:bg-white"
              >
                <h3 className="font-semibold text-[var(--t4-text)]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
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
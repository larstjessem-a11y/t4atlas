import Link from "next/link";
import { hubs } from "@/data/hubs";

const primaryHubs = hubs.filter((hub) =>
  ["ai", "finance", "development"].includes(hub.slug)
);

const featuredIntelligence = [
  {
    title: "AI Risk Intelligence",
    href: "/tools/ai/risk-intelligence",
    label: "Risk",
    description:
      "Structured analysis of frontier AI risk, enterprise governance, sensitive capabilities, and operational exposure.",
  },
  {
    title: "AI Statistics Hub",
    href: "/tools/ai/statistics",
    label: "Data",
    description:
      "Market share, adoption, funding, valuations, models, APIs, agents, and enterprise AI signals.",
  },
  {
    title: "Enterprise AI Vendor Rankings",
    href: "/tools/ai/statistics/enterprise-ai-vendor-rankings",
    label: "Enterprise",
    description:
      "Compare leading AI vendors by distribution, workflow ownership, governance, and operational fit.",
  },
  {
    title: "Most Used AI Agents",
    href: "/tools/ai/statistics/most-used-ai-agents",
    label: "Agents",
    description:
      "Track the rise of AI agents across research, productivity, coding, search, and enterprise workflows.",
  },
];

const featuredAnalysis = [
  {
    title: "AI, Biology, and National Security Are Becoming the Same Conversation",
    href: "/t4-intelligence/analysis/ai-biology-and-national-security-are-becoming-the-same-conversation",
    label: "Biosecurity",
    description:
      "Why AI-enabled biology is moving from science fiction into the center of national-security strategy.",
  },
  {
    title: "The Silent Risk Every Company Ignores",
    href: "/t4-intelligence/analysis/the-silent-risk-every-company-ignores",
    label: "Operational Intelligence",
    description:
      "Why workforce resilience, absenteeism, and health shocks are becoming strategic business risks.",
  },
  {
    title: "The Next Pandemic Won't Start in a Wet Market",
    href: "/t4-intelligence/analysis/the-next-pandemic-wont-start-in-a-wet-market",
    label: "Biosecurity",
    description:
      "How synthetic biology and dual-use technologies are changing pandemic risk.",
  },
  {
    title: "The Geography of Risk",
    href: "/t4-intelligence/analysis/the-geography-of-risk",
    label: "Geopolitics",
    description:
      "Taiwan, Hormuz, Suez, Panama, and the chokepoints that shape global risk.",
  },
];

export default function HomePage() {
  return (
    <main className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
       <section className="t4-map-texture t4-contours relative mb-10 overflow-hidden rounded-[2rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] shadow-sm">
<img
  src="/branding/t4-compass-rose.svg"
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] opacity-[0.09] md:-right-14 md:-top-20 md:h-[420px] md:w-[420px]"
/>
  <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
    <div>
      <div className="mb-4 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
        Modern exploration · data · intelligence
      </div>

      <h1 className="t4-title mb-5 max-w-4xl text-4xl font-semibold text-[var(--t4-text)] md:text-5xl lg:text-6xl">
        Navigate technology, risk, and the future
      </h1>

      <p className="mb-6 max-w-2xl text-lg leading-8 text-[var(--t4-muted)] md:text-xl">
        T4 Atlas is a modern intelligence and exploration platform for
        AI, biosecurity, geopolitics, operational resilience, data
        tools, and emerging-risk analysis.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/t4-intelligence"
          className="inline-flex items-center rounded-2xl bg-[var(--t4-blue)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#162d49]"
        >
          Explore Intelligence
        </Link>

        <Link
          href="/tools/ai/statistics"
          className="inline-flex items-center rounded-2xl border border-[var(--t4-border)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--t4-text)] transition hover:bg-[var(--t4-surface-soft)]"
        >
          AI Data Layer
        </Link>

        <Link
          href="/tools/ai"
          className="inline-flex items-center rounded-2xl border border-[var(--t4-border)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--t4-text)] transition hover:bg-[var(--t4-surface-soft)]"
        >
          AI Tools
        </Link>
      </div>
    </div>

    <div className="rounded-[1.75rem] border border-[var(--t4-border)] bg-[#f8f6f1] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[var(--t4-text)]">
            Atlas map
          </div>
          <div className="text-sm text-[var(--t4-muted)]">
            Primary hubs and intelligence layers
          </div>
        </div>

        <div className="rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#7c5b2d]">
          Field view
        </div>
      </div>

      <div className="grid gap-3">
        <Link
          href="/t4-intelligence"
          className="rounded-2xl border border-[var(--t4-border)] bg-[var(--t4-surface)] px-4 py-4 transition hover:border-[#a67c3d]/50 hover:bg-white"
        >
          <div className="mb-1 text-sm font-semibold text-[var(--t4-text)]">
            T4 Intelligence
          </div>
          <div className="text-sm leading-6 text-[var(--t4-muted)]">
            Analysis, scenarios, strategic risk, and future insight.
          </div>
        </Link>

        {primaryHubs.map((hub) => (
          <Link
            key={hub.slug}
            href={hub.href}
            className="rounded-2xl border border-[var(--t4-border)] bg-[var(--t4-surface)] px-4 py-4 transition hover:border-[#a67c3d]/50 hover:bg-white"
          >
            <div className="mb-1 text-sm font-semibold text-[var(--t4-text)]">
              {hub.name}
            </div>
            <div className="text-sm leading-6 text-[var(--t4-muted)]">
              {hub.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

        <section className="mb-12 rounded-[1.75rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
                Data layer
              </div>
              <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] md:text-3xl">
                AI data, rankings, and decision systems
              </h2>
              <p className="mt-2 max-w-3xl text-[var(--t4-muted)]">
                Structured AI market intelligence across tools, models,
                funding, agents, enterprise vendors, adoption, and workflow
                transformation.
              </p>
            </div>

            <Link
              href="/tools/ai/statistics"
              className="inline-flex rounded-2xl border border-[var(--t4-border)] bg-white/70 px-4 py-2.5 text-sm font-medium text-[var(--t4-text)] transition hover:bg-[var(--t4-surface-soft)]"
            >
              Explore AI statistics
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredIntelligence.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-[var(--t4-border)] bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#a67c3d]/50 hover:shadow-md"
              >
                <span className="mb-3 inline-flex rounded-full border border-[var(--t4-border)] bg-[#f8f6f1] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--t4-muted)]">
                  {item.label}
                </span>
                <h3 className="text-lg font-semibold text-[var(--t4-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[1.75rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-[#1e3a5f]/20 bg-[#e7eef5] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#1e3a5f]">
                T4 Intelligence
              </div>

              <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] md:text-3xl">
                Field reports on risk, technology, and resilience
              </h2>

              <p className="mt-2 max-w-3xl text-[var(--t4-muted)]">
                Strategic analysis across AI, biosecurity, geopolitics, supply
                chains, preparedness, operational resilience, and future
                scenarios.
              </p>
            </div>

            <Link
              href="/t4-intelligence"
              className="inline-flex rounded-2xl bg-[var(--t4-blue)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#162d49]"
            >
              Explore T4 Intelligence
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredAnalysis.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-[var(--t4-border)] bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1e3a5f]/40 hover:shadow-md"
              >
                <span className="mb-3 inline-flex rounded-full border border-[#1e3a5f]/20 bg-[#e7eef5] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#1e3a5f]">
                  {item.label}
                </span>

                <h3 className="text-lg font-semibold text-[var(--t4-text)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
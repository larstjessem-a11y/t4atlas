import Link from "next/link";
import { hubs } from "@/data/hubs";

const sleepHub = {
  slug: "sleep",
  href: "/sleep",
  name: "Sleep",
  description:
    "Sleep assessment tools, sleep guides, schedule support, insomnia patterns, and possible sleep apnea warning signs.",
  categories: ["Sleep tools", "Guides", "Assessment"],
  featuredLinks: [
    { name: "Sleep Assessment Tool", href: "/tools/sleep/sleep-assessment" },
    { name: "Why Can’t I Fall Asleep?", href: "/sleep/why-cant-i-fall-asleep" },
    { name: "How to Fix Your Sleep Schedule", href: "/sleep/how-to-fix-sleep-schedule" },
  ],
};

const homepageHubs = [...hubs, sleepHub];

const featuredIntelligence = [
  {
    title: "AI Risk Intelligence",
    href: "/tools/ai/risk-intelligence",
    label: "Risk",
    description:
      "Structured analysis of frontier AI risk, enterprise governance, alignment pressure, and sensitive AI capabilities.",
  },
  {
    title: "AI Statistics Hub",
    href: "/tools/ai/statistics",
    label: "Statistics",
    description:
      "Market share, search demand, growth trends, funding, valuations, models, APIs, and enterprise adoption.",
  },
  {
    title: "Most Funded AI Startups",
    href: "/tools/ai/statistics/most-funded-ai-startups",
    label: "Funding",
    description:
      "Track heavily funded AI startups across frontier models, AI search, infrastructure, coding, robotics, and enterprise AI.",
  },
  {
    title: "AI Coding Market Share",
    href: "/tools/ai/statistics/ai-coding-market-share",
    label: "Coding",
    description:
      "Compare AI coding tools across copilots, AI-native editors, codebase assistants, APIs, and developer workflows.",
  },
];

const featuredAnalysis = [
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
    title: "Europe's AI Problem Is Not Technology",
    href: "/t4-intelligence/analysis/europes-ai-problem-is-not-technology",
    label: "AI",
    description:
      "Why Europe has AI talent but struggles with commercialization and scale.",
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
    <main className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 overflow-hidden rounded-[2rem] border bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 shadow-sm">
          <div className="grid gap-10 px-6 py-10 text-white md:px-10 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
                Tools · calculators · intelligence
              </div>

              <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                T4 Atlas
              </h1>

              <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                A growing multi-hub platform for tools, calculators, comparison
                pages, market intelligence, and structured decision systems.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/ai/risk-intelligence"
                  className="inline-flex items-center rounded-2xl bg-cyan-200 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
                >
                  AI Risk Intelligence
                </Link>

                <Link
                  href="/tools/ai/statistics"
                  className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  AI Statistics
                </Link>

                <Link
                  href="/tools"
                  className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore all tools
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Platform map
                  </div>
                  <div className="text-sm text-slate-400">
                    Hubs, tools, guides, and intelligence layers
                  </div>
                </div>

                <div className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                  Atlas view
                </div>
              </div>

              <div className="grid gap-3">
                {homepageHubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={hub.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                  >
                    <div className="mb-1 text-sm font-semibold text-white">
                      {hub.name}
                    </div>
                    <div className="text-sm leading-6 text-slate-300">
                      {hub.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-[1.75rem] border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                Featured intelligence
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                New AI intelligence layers
              </h2>
              <p className="mt-2 max-w-3xl text-gray-600">
                Structured analysis across AI risk, market structure, funding,
                adoption, APIs, models, and developer workflows.
              </p>
            </div>

            <Link
              href="/tools/ai"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Explore AI hub
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredIntelligence.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mb-3 inline-flex rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                  {item.label}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

<section className="mb-12 rounded-[1.75rem] border bg-slate-950 p-6 text-white shadow-sm md:p-8">
  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
    <div>
      <div className="mb-3 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
        T4 Intelligence
      </div>

      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Analysis, risk and future insight
      </h2>

      <p className="mt-2 max-w-3xl text-slate-300">
        Structured analysis across AI, biosecurity, geopolitics, supply chains,
        preparedness, operational resilience, and future scenarios.
      </p>
    </div>

    <Link
      href="/t4-intelligence"
      className="inline-flex rounded-2xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
    >
      Explore T4 Intelligence
    </Link>
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    {featuredAnalysis.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
      >
        <span className="mb-3 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200">
          {item.label}
        </span>

        <h3 className="text-lg font-semibold">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {item.description}
        </p>
      </Link>
    ))}
  </div>
</section>

        <section className="mb-16">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                Explore hubs
              </h2>
              <p className="mt-1 max-w-2xl text-gray-600">
                Start with a hub and then move deeper into calculators, guides,
                scenario pages, comparison content, and structured intelligence.
              </p>
            </div>

            <div className="rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Structured ecosystems
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {homepageHubs.map((hub) => (
              <div
                key={hub.slug}
                className="rounded-[1.75rem] border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                      {hub.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-gray-600">
                      {hub.description}
                    </p>
                  </div>

                  <div className="hidden rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-500 sm:inline-flex">
                    Hub
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {hub.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mb-6 rounded-2xl bg-gray-50 p-4">
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Featured pages
                  </div>

                  <div className="grid gap-2 text-sm">
                    {hub.featuredLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 transition hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={hub.href}
                  className="inline-flex items-center rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  Explore {hub.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                Built for speed and clarity
              </div>

              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                Structured tools, not content chaos
              </h3>

              <p className="max-w-2xl text-gray-600">
                T4 Atlas is designed as a multi-hub platform where each topic
                can grow into its own ecosystem of tools, guides, comparison
                pages, money pages, data pages, and decision frameworks.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Tools", "Guides", "Intelligence"].map((item) => (
                <div key={item} className="rounded-2xl border bg-white px-4 py-4">
                  <div className="mb-1 text-sm font-semibold text-gray-900">
                    {item}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item === "Tools"
                      ? "Calculators and utilities"
                      : item === "Guides"
                        ? "Explainers and decision support"
                        : "Market, risk, and adoption analysis"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
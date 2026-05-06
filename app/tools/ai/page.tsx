import type { Metadata } from "next";
import Link from "next/link";
import AffiliateBlock from "@/components/AffiliateBlock";
import { aiEditorialPages } from "@/data/aiEditorial";

export const metadata: Metadata = {
  title: "AI Tools Hub | Best AI Tools, Alternatives & Comparisons",
  description:
    "Explore AI tool comparisons, alternatives, and best-of guides for writing, productivity, meetings, marketing, coding, research, image generation, and video.",
};

const bestPages = aiEditorialPages.filter((page) => page.type === "best");
const alternativePages = aiEditorialPages.filter(
  (page) => page.type === "alternative"
);
const comparisonPages = aiEditorialPages.filter(
  (page) => page.type === "comparison"
);

const priorityPages = [
  "/tools/ai/best-ai-tools-for-meetings",
  "/tools/ai/best-ai-tools-for-writing",
  "/tools/ai/best-ai-tools-for-productivity",
  "/tools/ai/best-ai-tools-for-lead-generation",
  "/tools/ai/best-ai-tools-for-copywriting",
  "/tools/ai/alternatives-to-jasper",
  "/tools/ai/chatgpt-vs-jasper",
  "/tools/ai/alternatives-to-chatgpt",
];

const popularPages = aiEditorialPages.filter((page) =>
  priorityPages.includes(page.href)
);

const productivityCluster = aiEditorialPages.filter(
  (page) =>
    page.topics.includes("productivity") ||
    page.topics.includes("meetings") ||
    page.topics.includes("writing")
);

const creatorCluster = aiEditorialPages.filter(
  (page) =>
    page.topics.includes("marketing") ||
    page.topics.includes("creators") ||
    page.topics.includes("youtube") ||
    page.topics.includes("images") ||
    page.topics.includes("video")
);

const researchAndWorkCluster = aiEditorialPages.filter(
  (page) =>
    page.topics.includes("research") ||
    page.topics.includes("coding")
);

export default function AiHubPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <span>AI Tools</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI tools hub
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            AI Tools Hub
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Compare AI tools by use case. Start with writing, productivity,
            meetings, lead generation, marketing, research, coding, image
            generation, video, and product alternatives.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#popular"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Popular AI pages
            </a>
            <a
              href="#clusters"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Browse by use case
            </a>
          </div>
        </section>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <section
          id="popular"
          className="mb-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">Popular AI tool pages</h2>
          <p className="mb-5 text-gray-600">
            Start with the AI guides and comparisons that are most useful for
            choosing tools by workflow.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-2xl border bg-gray-50 p-4 transition hover:bg-white hover:shadow-sm"
              >
                <div className="font-medium text-gray-900">{page.title}</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-gray-500">
                  {page.type}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div id="clusters" className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 lg:col-span-2">
            <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
              <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                High-intent cluster
              </span>

              <h2 className="mb-3 text-2xl font-semibold">
                AI productivity and workflow tools
              </h2>

              <p className="mb-5 text-gray-600">
                Tools for meetings, writing, productivity, lead generation,
                sales, and daily work automation.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {productivityCluster.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-2xl border bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">
                AI marketing and creator tools
              </h2>

              <p className="mb-5 text-gray-600">
                Tools for copywriting, content creation, image generation, video
                workflows, YouTube, creators, and marketing teams.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {creatorCluster.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">
                AI research, coding, and business tools
              </h2>

              <p className="mb-5 text-gray-600">
                Tools for research workflows, coding support, documentation,
                business productivity, and technical work.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {researchAndWorkCluster.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Alternatives</h2>
              <p className="mb-5 text-gray-600">
                Alternative pages help when you already know one AI product and
                want close substitutes.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {alternativePages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Comparisons</h2>
              <p className="mb-5 text-gray-600">
                Head-to-head pages help you compare two specific AI tools before
                choosing.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {comparisonPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">AI hub focus</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "productivity",
                "meetings",
                "writing",
                "lead generation",
                "copywriting",
                "research",
                "coding",
                "images",
                "video",
                "alternatives",
                "comparisons",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                Quick links
              </h3>

              <div className="flex flex-col gap-2 text-sm">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Sidebar ad / affiliate slot
            </div>
          </aside>
        </div>

        <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (bottom)
        </div>
      </div>
    </main>
  );
}
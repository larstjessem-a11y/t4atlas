import type { Metadata } from "next";
import Link from "next/link";

import {
  aiBrowserMarketShareCategories,
  aiBrowserMarketShareData,
  aiBrowserMarketShareKeyFindings,
  aiBrowserMarketShareMethodology,
  aiBrowserMarketShareLastUpdated,
} from "@/data/aiStats/aiBrowserMarketShare";

export const metadata: Metadata = {
  title: "AI Browser Market Share | AI Browsers Compared",
  description:
    "Compare AI browser market positioning, including Chrome, Edge, Safari, Arc, Perplexity Comet, Brave, Opera, and Dia.",
};

export default function AiBrowserMarketSharePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <nav className="mb-4 text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/tools/ai" className="hover:text-cyan-400">
            AI
          </Link>{" "}
          /{" "}
          <Link href="/tools/ai/statistics" className="hover:text-cyan-400">
            Statistics
          </Link>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-white">
          AI Browser Market Share
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          AI browsers are emerging as a new interface layer between search,
          assistants, agents, and everyday web workflows. This page compares
          mainstream browsers, AI-native browsers, enterprise browsers, and
          privacy-focused browsers by AI positioning and distribution strength.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {aiBrowserMarketShareLastUpdated}
        </p>
      </div>

      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Key Findings
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {aiBrowserMarketShareKeyFindings.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
            >
              <h3 className="font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 overflow-hidden rounded-3xl border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left">Browser</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">AI Positioning</th>
                <th className="px-4 py-3 text-left">Distribution Signal</th>
                <th className="px-4 py-3 text-left">AI Readiness</th>
              </tr>
            </thead>

            <tbody>
              {aiBrowserMarketShareData.map((item) => (
                <tr key={item.browser} className="border-t border-slate-800">
                  <td className="px-4 py-3 font-medium text-white">
                    {item.browser}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {item.category}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {item.aiPositioning}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {item.distributionSignal}
                  </td>
                  <td className="px-4 py-3 text-cyan-400">
                    {item.aiReadinessScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          AI Browser Categories
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {aiBrowserMarketShareCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <h3 className="font-medium text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Methodology
        </h2>

        <p className="text-slate-300">
          {aiBrowserMarketShareMethodology.description}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Related AI Statistics
        </h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/tools/ai/statistics/most-used-ai-agents"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Used AI Agents
          </Link>

          <Link
            href="/tools/ai/statistics/most-used-ai-apis"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Used AI APIs
          </Link>

          <Link
            href="/tools/ai/statistics/most-used-ai-models"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Used AI Models
          </Link>
        </div>
      </section>
    </main>
  );
}
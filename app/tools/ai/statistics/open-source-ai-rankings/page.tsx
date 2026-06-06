import type { Metadata } from "next";
import Link from "next/link";

import {
  openSourceAiRankingsCategories,
  openSourceAiRankingsData,
  openSourceAiRankingsKeyFindings,
  openSourceAiRankingsMethodology,
  openSourceAiRankingsLastUpdated,
} from "@/data/aiStats/openSourceAiRankings";

export const metadata: Metadata = {
  title: "Open Source AI Rankings (2026) | T4 Atlas",
  description:
    "Compare leading open-source AI models including Llama, DeepSeek, Qwen, Mistral, Gemma, Phi, OLMo, and Falcon.",
};

export default function OpenSourceAiRankingsPage() {
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
          Open Source AI Rankings
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Open-source AI models are becoming increasingly capable and are
          reshaping how developers, researchers, startups, and enterprises
          deploy artificial intelligence. This ranking compares the most
          influential open-weight AI ecosystems.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {openSourceAiRankingsLastUpdated}
        </p>
      </div>

      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Key Findings
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {openSourceAiRankingsKeyFindings.map((item) => (
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
          <table className="w-full min-w-[1000px]">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left">Model</th>
                <th className="px-4 py-3 text-left">Developer</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Strengths</th>
                <th className="px-4 py-3 text-left">Ecosystem Signal</th>
                <th className="px-4 py-3 text-left">Score</th>
              </tr>
            </thead>

            <tbody>
              {openSourceAiRankingsData.map((item) => (
                <tr key={item.model} className="border-t border-slate-800">
                  <td className="px-4 py-3 font-medium text-white">
                    {item.model}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.developer}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.category}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.strengths}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.ecosystemSignal}
                  </td>

                  <td className="px-4 py-3 text-cyan-400">
                    {item.openSourceScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Open Source AI Categories
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {openSourceAiRankingsCategories.map((category) => (
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
          {openSourceAiRankingsMethodology.description}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Related AI Statistics
        </h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/tools/ai/statistics/most-used-ai-coding-models"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Used AI Coding Models
          </Link>

          <Link
            href="/tools/ai/statistics/most-used-ai-agents"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Used AI Agents
          </Link>

          <Link
            href="/tools/ai/statistics/enterprise-ai-vendor-rankings"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Enterprise AI Vendor Rankings
          </Link>
        </div>
      </section>
    </main>
  );
}
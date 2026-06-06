import type { Metadata } from "next";
import Link from "next/link";

import {
  mostUsedAiAgentsCategories,
  mostUsedAiAgentsData,
  mostUsedAiAgentsKeyFindings,
  mostUsedAiAgentsMethodology,
  mostUsedAiAgentsLastUpdated,
} from "@/data/aiStats/mostUsedAiAgents";

export const metadata: Metadata = {
  title: "Most Used AI Agents (2026) | T4 Atlas",
  description:
    "Explore the most used AI agents, including ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, Cursor Agent, Devin, Manus, and more.",
};

export default function MostUsedAiAgentsPage() {
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
          Most Used AI Agents
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          AI agents are evolving from simple chat interfaces into workflow
          engines that can research, browse, code, plan, and execute tasks.
          This ranking highlights the most visible and influential AI agents
          across consumer, enterprise, search, and developer ecosystems.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {mostUsedAiAgentsLastUpdated}
        </p>
      </div>

      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Key Findings
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {mostUsedAiAgentsKeyFindings.map((item) => (
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
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left">Agent</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Primary Use Case</th>
                <th className="px-4 py-3 text-left">Adoption Signal</th>
                <th className="px-4 py-3 text-left">Momentum</th>
              </tr>
            </thead>

            <tbody>
              {mostUsedAiAgentsData.map((item) => (
                <tr
                  key={item.agent}
                  className="border-t border-slate-800"
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {item.agent}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.category}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.primaryUseCase}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.adoptionSignal}
                  </td>

                  <td className="px-4 py-3 text-cyan-400">
                    {item.momentumScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          AI Agent Categories
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {mostUsedAiAgentsCategories.map((category) => (
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
          {mostUsedAiAgentsMethodology.description}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Related AI Statistics
        </h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/tools/ai/statistics/ai-tools-market-share"
            className="text-cyan-400 hover:text-cyan-300"
          >
            AI Tools Market Share
          </Link>

          <Link
            href="/tools/ai/statistics/most-funded-ai-startups"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Funded AI Startups
          </Link>

          <Link
            href="/tools/ai/statistics/ai-startup-valuation-rankings"
            className="text-cyan-400 hover:text-cyan-300"
          >
            AI Startup Valuation Rankings
          </Link>
        </div>
      </section>
    </main>
  );
}
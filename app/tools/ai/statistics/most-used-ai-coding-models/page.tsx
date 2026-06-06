import type { Metadata } from "next";
import Link from "next/link";

import {
  mostUsedAiCodingModelsCategories,
  mostUsedAiCodingModelsData,
  mostUsedAiCodingModelsKeyFindings,
  mostUsedAiCodingModelsMethodology,
  mostUsedAiCodingModelsLastUpdated,
} from "@/data/aiStats/mostUsedAiCodingModels";

export const metadata: Metadata = {
  title: "Most Used AI Coding Models (2026) | T4 Atlas",
  description:
    "Compare the most used AI coding models including GPT-5, Claude Sonnet, Gemini 2.5 Pro, DeepSeek Coder, Codestral, Qwen Coder, Llama, and Gemma.",
};

export default function MostUsedAiCodingModelsPage() {
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
          Most Used AI Coding Models
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          AI coding assistants increasingly rely on a small group of powerful
          underlying models. This ranking compares the most influential coding
          models across commercial and open-source ecosystems.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {mostUsedAiCodingModelsLastUpdated}
        </p>
      </div>

      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Key Findings
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {mostUsedAiCodingModelsKeyFindings.map((item) => (
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
                <th className="px-4 py-3 text-left">Family</th>
                <th className="px-4 py-3 text-left">Strengths</th>
                <th className="px-4 py-3 text-left">Adoption Signal</th>
                <th className="px-4 py-3 text-left">Score</th>
              </tr>
            </thead>

            <tbody>
              {mostUsedAiCodingModelsData.map((item) => (
                <tr key={item.model} className="border-t border-slate-800">
                  <td className="px-4 py-3 font-medium text-white">
                    {item.model}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.developer}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.modelFamily}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.strengths}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.adoptionSignal}
                  </td>

                  <td className="px-4 py-3 text-cyan-400">
                    {item.codingScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Coding Model Categories
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {mostUsedAiCodingModelsCategories.map((category) => (
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
          {mostUsedAiCodingModelsMethodology.description}
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
            href="/tools/ai/best-ai-coding-assistants"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Best AI Coding Assistants
          </Link>

          <Link
            href="/tools/ai/best-ai-ides"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Best AI IDEs
          </Link>
        </div>
      </section>
    </main>
  );
}
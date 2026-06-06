import type { Metadata } from "next";
import Link from "next/link";

import {
  enterpriseAiVendorRankingsCategories,
  enterpriseAiVendorRankingsData,
  enterpriseAiVendorRankingsKeyFindings,
  enterpriseAiVendorRankingsMethodology,
  enterpriseAiVendorRankingsLastUpdated,
} from "@/data/aiStats/enterpriseAiVendorRankings";

export const metadata: Metadata = {
  title: "Enterprise AI Vendor Rankings (2026) | T4 Atlas",
  description:
    "Compare enterprise AI vendors including Microsoft, OpenAI, Google, Anthropic, AWS, Salesforce, IBM, Databricks, Palantir, and Oracle.",
};

export default function EnterpriseAiVendorRankingsPage() {
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
          Enterprise AI Vendor Rankings
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Enterprise AI adoption is shaped by more than model quality. This
          ranking compares leading enterprise AI vendors by distribution,
          workflow ownership, cloud integration, governance positioning, and
          operational fit.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {enterpriseAiVendorRankingsLastUpdated}
        </p>
      </div>

      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Key Findings
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {enterpriseAiVendorRankingsKeyFindings.map((item) => (
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
          <table className="w-full min-w-[1100px]">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left">Vendor</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Enterprise Positioning</th>
                <th className="px-4 py-3 text-left">Strengths</th>
                <th className="px-4 py-3 text-left">Adoption Signal</th>
                <th className="px-4 py-3 text-left">Score</th>
              </tr>
            </thead>

            <tbody>
              {enterpriseAiVendorRankingsData.map((item) => (
                <tr key={item.vendor} className="border-t border-slate-800">
                  <td className="px-4 py-3 font-medium text-white">
                    {item.vendor}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.category}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.enterprisePositioning}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.strengths}
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    {item.adoptionSignal}
                  </td>

                  <td className="px-4 py-3 text-cyan-400">
                    {item.enterpriseScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Enterprise AI Vendor Categories
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {enterpriseAiVendorRankingsCategories.map((category) => (
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
          {enterpriseAiVendorRankingsMethodology.description}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Related AI Statistics
        </h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/tools/ai/statistics/enterprise-ai-adoption-statistics"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Enterprise AI Adoption Statistics
          </Link>

          <Link
            href="/tools/ai/statistics/most-used-ai-apis"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Most Used AI APIs
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
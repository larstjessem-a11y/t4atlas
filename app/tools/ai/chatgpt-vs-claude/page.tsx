import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude | Which AI Is Better? | T4 Atlas",
  description:
    "Compare ChatGPT vs Claude for writing, coding, and research. See differences in performance, strengths, and which AI assistant is right for you.",
  keywords: [
    "chatgpt vs claude",
    "claude vs chatgpt",
    "which is better chatgpt or claude",
    "ai comparison",
  ],
};

export default function ChatGPTvsClaudePage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>ChatGPT vs Claude</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            ChatGPT vs Claude
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            ChatGPT and Claude are two of the most advanced AI assistants
            available today. While both are powerful, they differ in writing
            style, reasoning approach, and ideal use cases.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick verdict</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Choose ChatGPT if:
                </h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You want strong coding capabilities</li>
                  <li>You need a broad ecosystem of tools</li>
                  <li>You use AI across multiple workflows</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Choose Claude if:
                </h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You prioritize long-form writing</li>
                  <li>You want more natural, human-like tone</li>
                  <li>You work heavily with documents</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Side-by-side comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-left">ChatGPT</th>
                    <th className="p-3 text-left">Claude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Writing quality</td>
                    <td className="p-3">Strong and structured</td>
                    <td className="p-3">Very natural and fluent</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Coding</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">Good</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Research</td>
                    <td className="p-3">Strong generalist</td>
                    <td className="p-3">Strong reasoning</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Tone</td>
                    <td className="p-3">Adaptive</td>
                    <td className="p-3">More human-like</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Ecosystem</td>
                    <td className="p-3">Large and growing</td>
                    <td className="p-3">More limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Detailed comparison</h2>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Writing</h3>
                <p className="text-gray-600">
                  Claude is often preferred for long-form writing because of its
                  coherence and natural tone. ChatGPT, however, performs better
                  when structure and clarity are prioritized.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Coding</h3>
                <p className="text-gray-600">
                  ChatGPT is generally stronger for coding tasks, debugging, and
                  technical explanations, especially in complex workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">Use cases</h3>
                <p className="text-gray-600">
                  ChatGPT is a better general-purpose tool, while Claude tends
                  to excel in writing-heavy or document-focused workflows.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AiRelatedLinks currentSlug="chatgpt-vs-claude" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
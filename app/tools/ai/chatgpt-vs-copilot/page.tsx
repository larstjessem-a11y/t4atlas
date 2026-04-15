import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "ChatGPT vs Copilot | Which AI Is Better? | T4 Atlas",
  description:
    "Compare ChatGPT vs Copilot for coding, productivity, and day-to-day workflows. See strengths, weaknesses, and which tool is better for your use case.",
  keywords: [
    "chatgpt vs copilot",
    "copilot vs chatgpt",
    "which is better chatgpt or copilot",
    "ai coding comparison",
  ],
};

export default function ChatGPTVsCopilotPage() {
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
            <span>ChatGPT vs Copilot</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            ChatGPT vs Copilot
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            ChatGPT and Copilot overlap in some tasks, but they are optimized
            for different workflows. ChatGPT is the broader all-purpose AI
            assistant, while Copilot is more tightly focused on coding and
            editor-based developer workflows.
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
                  <li>You want one AI tool for many different workflows</li>
                  <li>You write, plan, brainstorm, and code in one place</li>
                  <li>
                    You care more about flexibility than IDE-native workflow
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Choose Copilot if:
                </h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>You spend most of your time coding inside an editor</li>
                  <li>You want faster code completion and inline assistance</li>
                  <li>You prefer AI embedded in a developer workflow</li>
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
                    <th className="p-3 text-left">Copilot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Coding</td>
                    <td className="p-3">Strong broad coding support</td>
                    <td className="p-3">
                      Excellent editor-centric coding flow
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Productivity</td>
                    <td className="p-3">Very broad</td>
                    <td className="p-3">More developer-focused</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Writing</td>
                    <td className="p-3">Strong</td>
                    <td className="p-3">Less central use case</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Workflow fit</td>
                    <td className="p-3">General-purpose interface</td>
                    <td className="p-3">Native developer workflow</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best overall use</td>
                    <td className="p-3">All-round AI assistant</td>
                    <td className="p-3">Coding and software development</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Best by use case</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for general work
                </h3>
                <p className="text-gray-600">
                  ChatGPT is usually the better choice if you want one assistant
                  for writing, analysis, planning, and coding support.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for software development
                </h3>
                <p className="text-gray-600">
                  Copilot is typically stronger when the main job is writing and
                  editing code inside an IDE.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for mixed workflows
                </h3>
                <p className="text-gray-600">
                  ChatGPT fits better if your work regularly switches between
                  coding, documentation, research, and communication.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for low-friction coding help
                </h3>
                <p className="text-gray-600">
                  Copilot is better when you want fast suggestions and coding
                  assistance directly where you work.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AiRelatedLinks currentSlug="chatgpt-vs-copilot" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
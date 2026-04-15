import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";

export const metadata: Metadata = {
  title: "Alternatives to ChatGPT | T4 Atlas",
  description:
    "Explore the best alternatives to ChatGPT for writing, coding, research, and productivity. Compare Claude, Perplexity, Jasper, and more.",
  keywords: [
    "alternatives to chatgpt",
    "chatgpt alternatives",
    "best chatgpt alternatives",
    "ai assistants like chatgpt",
  ],
};

export default function AlternativesToChatGPTPage() {
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
            <span>Alternatives to ChatGPT</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI alternatives
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Alternatives to ChatGPT
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            ChatGPT is one of the most popular AI assistants, but it is not the
            best choice for every use case. Depending on your needs,
            alternatives like Claude, Perplexity, and Jasper may offer better
            performance for long-form writing, research, or structured
            workflows.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top ChatGPT alternatives
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Tool</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Key strength</th>
                    <th className="p-3 text-left">Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Claude</td>
                    <td className="p-3">Long-form writing</td>
                    <td className="p-3">
                      Strong coherence and natural language flow
                    </td>
                    <td className="p-3">Smaller ecosystem</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Perplexity</td>
                    <td className="p-3">Research and fact-finding</td>
                    <td className="p-3">Built-in sources and citations</td>
                    <td className="p-3">Less writing-focused</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Marketing and copywriting</td>
                    <td className="p-3">
                      Structured workflows and templates
                    </td>
                    <td className="p-3">Higher cost</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notion AI</td>
                    <td className="p-3">Document workflows</td>
                    <td className="p-3">Seamless integration in notes</td>
                    <td className="p-3">Limited standalone power</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Which alternative should you choose?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for long-form writing
                </h3>
                <p className="text-gray-600">
                  Claude is often the strongest option for long-form writing,
                  especially when clarity, structure, and tone consistency
                  matter.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for research workflows
                </h3>
                <p className="text-gray-600">
                  Perplexity stands out when your workflow depends on finding
                  reliable sources and summarizing information quickly.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for marketing teams
                </h3>
                <p className="text-gray-600">
                  Jasper is optimized for structured marketing workflows and is
                  often used by teams working with campaigns and ad copy.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for productivity workflows
                </h3>
                <p className="text-gray-600">
                  Notion AI is a good fit if you already use Notion and want AI
                  assistance directly inside your documents.
                </p>
              </div>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AiRelatedLinks
            currentSlug="alternatives-to-chatgpt"
            title="Related AI comparisons"
          />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
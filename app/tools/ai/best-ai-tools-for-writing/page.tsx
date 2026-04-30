import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Writing Tools (Compared by Use Case)",
  description:
    "Compare the best AI writing tools for blogs, long-form writing, copywriting, editing, research, and content workflows.",
};

const tools = [
  {
    name: "ChatGPT",
    bestFor: "Best all-round AI writing assistant",
    strength: "Flexible writing, rewriting, outlining, and editing",
    weakness: "Requires good prompting for consistent output",
  },
  {
    name: "Claude",
    bestFor: "Best for long-form writing",
    strength: "Natural flow, readability, and long-context drafting",
    weakness: "Less ecosystem depth than some alternatives",
  },
  {
    name: "Jasper",
    bestFor: "Best for marketing copy",
    strength: "Templates, brand voice, and campaign workflows",
    weakness: "Can be expensive for solo users",
  },
  {
    name: "Perplexity",
    bestFor: "Best for research-assisted writing",
    strength: "Fast research workflow with source-oriented answers",
    weakness: "Not primarily built as a writing editor",
  },
  {
    name: "Notion AI",
    bestFor: "Best inside documents and notes",
    strength: "Convenient if you already write in Notion",
    weakness: "Less powerful as a standalone writing platform",
  },
];

export default function BestAiToolsForWritingPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>Best AI Tools for Writing</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI writing tools
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Writing Tools (Compared by Use Case)
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best AI writing tool depends on the job. ChatGPT is the best all-round AI writing tool for most users, Claude is strong for long-form writing, Jasper is built
            for marketing workflows, Perplexity helps with research-backed
            drafts, and Notion AI works best inside an existing document system.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#quick-comparison"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Compare tools
            </a>
            <a
              href="#how-to-choose"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              How to choose
            </a>
          </div>
        </section>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <section className="mb-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
          <p className="leading-7 text-gray-600">
            For most people, start with ChatGPT or Claude. Choose ChatGPT if you
            want the broadest general writing assistant. Choose Claude if you
            care most about long-form readability and natural tone. Choose Jasper
            if your writing is mostly marketing copy and campaign work.
          </p>
        </section>

        <section
          id="quick-comparison"
          className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            AI writing tools compared
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-2xl border text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Tool</th>
                  <th className="p-3 text-left">Best for</th>
                  <th className="p-3 text-left">Strength</th>
                  <th className="p-3 text-left">Weakness</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool) => (
                  <tr key={tool.name} className="border-t">
                    <td className="p-3 font-medium">{tool.name}</td>
                    <td className="p-3">{tool.bestFor}</td>
                    <td className="p-3">{tool.strength}</td>
                    <td className="p-3">{tool.weakness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Best picks by use case</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool.name} className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {tool.bestFor}: {tool.name}
                </h3>
                <p className="text-gray-600">
                  {tool.name} is strongest when you need {tool.strength.toLowerCase()}.
                  The main limitation is that it {tool.weakness.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (middle)
        </div>

        <section
          id="how-to-choose"
          className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            How to choose an AI writing tool
          </h2>
<div className="mt-4 rounded-2xl border bg-gray-50 p-5">
  <h3 className="mb-3 text-lg font-semibold text-gray-900">
    Best AI writing tool for your use case
  </h3>

  <div className="grid gap-3 md:grid-cols-2 text-sm">
    <div className="rounded-xl border p-3">
      <strong>Blog writing:</strong> Claude or ChatGPT
    </div>
    <div className="rounded-xl border p-3">
      <strong>Marketing copy:</strong> Jasper
    </div>
    <div className="rounded-xl border p-3">
      <strong>SEO content:</strong> ChatGPT + SEO tools
    </div>
    <div className="rounded-xl border p-3">
      <strong>Academic writing:</strong> Claude or specialized tools
    </div>
    <div className="rounded-xl border p-3">
      <strong>Research + writing:</strong> Perplexity + ChatGPT
    </div>
    <div className="rounded-xl border p-3">
      <strong>Notes & workflow:</strong> Notion AI
    </div>
  </div>
</div>
          <div className="space-y-4 text-gray-600">
            <p>
              Do not choose an AI writing tool only by brand name. Start with the
              writing workflow you actually need: drafting, rewriting, editing,
              research, marketing copy, or long-form content.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Choose <strong>ChatGPT</strong> if you want one flexible tool for
                brainstorming, drafting, editing, and rewriting.
              </li>
              <li>
                Choose <strong>Claude</strong> if your main priority is readable
                long-form writing and tone consistency.
              </li>
              <li>
                Choose <strong>Jasper</strong> if you need marketing templates,
                brand voice, and copywriting workflows.
              </li>
              <li>
                Choose <strong>Perplexity</strong> if research and source-backed
                drafting are the bottleneck.
              </li>
              <li>
                Choose <strong>Notion AI</strong> if your writing already lives
                inside Notion.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Common mistakes when choosing AI writing tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Choosing by hype</h3>
              <p className="mt-2 text-sm text-gray-600">
                The most talked-about tool is not always the best fit for your
                workflow.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Ignoring editing</h3>
              <p className="mt-2 text-sm text-gray-600">
                AI writing still needs review, fact-checking, structure, and
                human judgment.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Overpaying too early</h3>
              <p className="mt-2 text-sm text-gray-600">
                Many users should test a general-purpose tool before paying for a
                specialized writing platform.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold">Using one tool for everything</h3>
              <p className="mt-2 text-sm text-gray-600">
                Research, drafting, editing, and publishing may need different
                workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Related AI comparison pages
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/ai/chatgpt-vs-claude"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              ChatGPT vs Claude
            </Link>

            <Link
              href="/tools/ai/alternatives-to-chatgpt"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Alternatives to ChatGPT
            </Link>

            <Link
              href="/tools/ai/best-ai-tools-for-copywriting"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Tools for Copywriting
            </Link>

            <Link
              href="/tools/ai/best-ai-tools-for-seo"
              className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Best AI Tools for SEO
            </Link>
          </div>
        </section>

        <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (bottom)
        </div>
      </div>
    </main>
  );
}
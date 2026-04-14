import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Video Editing | T4 Atlas",
  description:
    "Compare the best AI tools for video editing, including tools for automatic editing, content creation, captions, and social media workflows.",
  keywords: [
    "best ai tools for video editing",
    "ai video editing tools",
    "ai video generator",
    "ai tools for video creation",
    "ai video editors",
  ],
};

export default function BestAiToolsForVideoEditingPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
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
            <span>Best AI Tools for Video Editing</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Video Editing
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI video tools can automate editing, generate content, create
            captions, and optimize videos for social media. The best tool depends
            on whether you want fast short-form content, full video production,
            or editing assistance inside an existing workflow.
          </p>
        </div>

        {/* Top ad */}
        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          {/* Table */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Top AI video tools
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
                  <tr className="border-t">
                    <td className="p-3 font-medium">Runway</td>
                    <td className="p-3">AI video generation</td>
                    <td className="p-3">Advanced generative features</td>
                    <td className="p-3">Still evolving workflows</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Descript</td>
                    <td className="p-3">Editing via text</td>
                    <td className="p-3">Simple and intuitive editing model</td>
                    <td className="p-3">Less traditional editing control</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Pictory</td>
                    <td className="p-3">Short-form content</td>
                    <td className="p-3">Fast social media video creation</td>
                    <td className="p-3">Limited customization</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Synthesia</td>
                    <td className="p-3">AI avatars and presentations</td>
                    <td className="p-3">Professional video generation</td>
                    <td className="p-3">Less flexible editing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Use cases */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Best by use case
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for AI-generated video
                </h3>
                <p className="text-gray-600">
                  Runway is one of the leading tools for generating and editing
                  video using AI-first workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for editing via text
                </h3>
                <p className="text-gray-600">
                  Descript allows you to edit video by editing text, making it
                  one of the easiest tools to learn.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for social content
                </h3>
                <p className="text-gray-600">
                  Pictory is useful for quickly creating short-form content for
                  social platforms.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">
                  Best for business videos
                </h3>
                <p className="text-gray-600">
                  Synthesia is commonly used for presentations, training
                  materials, and corporate communication.
                </p>
              </div>
            </div>
          </section>

          {/* Middle ad */}
          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          {/* Internal linking */}
          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Related AI pages
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/alternatives-to-midjourney"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to Midjourney
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-writing"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Writing
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-coding"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Coding
              </Link>
            </div>
          </section>

          {/* Bottom ad */}
          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
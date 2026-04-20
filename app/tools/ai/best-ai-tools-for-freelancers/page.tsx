import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AiMoneyPicks from "@/components/AiMoneyPicks";

export const metadata: Metadata = {
  title: "Best AI Tools for Freelancers | T4 Atlas",
  description:
    "Compare the best AI tools for freelancers, including tools for writing, client delivery, productivity, marketing, and scaling output.",
  keywords: [
    "best ai tools for freelancers",
    "ai tools for freelancers",
    "best ai tools for solopreneurs",
    "ai tools for client work",
    "best ai tools to make money online",
  ],
};

export default function BestAiToolsForFreelancersPage() {
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
            <span>Best AI Tools for Freelancers</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for Freelancers
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Freelancers can use AI to increase output, reduce time spent per
            deliverable, and make their services more scalable. The right tools
            depend on whether your main bottleneck is production speed, client
            communication, marketing, or workflow organization.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <AiMoneyPicks
            title="Best AI tools for freelance workflows"
            intro="These are the strongest options if you want to deliver faster, handle more client work, and improve the economics of your freelance business."
            picks={[
              {
                name: "ChatGPT",
                bestFor: "General freelance work across many services",
                idealFor: "Freelancers who write, plan, research, pitch, and deliver client work",
                whyChooseIt:
                  "ChatGPT is the strongest all-rounder for freelancers because it can support proposals, drafts, revisions, communication, and structured delivery across many niches.",
                watchOutFor:
                  "Its value depends heavily on having clear prompts, service workflows, and review standards.",
              },
              {
                name: "Notion AI",
                bestFor: "Workflow organization and project management",
                idealFor: "Freelancers managing several clients and ongoing tasks",
                whyChooseIt:
                  "Notion AI helps keep client work, notes, deliverables, and internal systems organized in one place.",
                watchOutFor:
                  "It is strongest inside a Notion-centered workflow and weaker as a standalone AI solution.",
              },
              {
                name: "Jasper",
                bestFor: "Freelancers selling marketing and copy services",
                idealFor: "Writers, marketers, and service providers producing client-facing content",
                whyChooseIt:
                  "Jasper is useful when your freelance business depends on repeatable campaign content, ad copy, or content marketing deliverables.",
                watchOutFor:
                  "It is less compelling if your client work is not marketing-heavy.",
              },
              {
                name: "Runway",
                bestFor: "Creative and video-based freelance services",
                idealFor: "Freelancers offering higher-value visual or short-form video services",
                whyChooseIt:
                  "Runway can expand the kinds of creative services you can offer and support faster video production without a large team.",
                watchOutFor:
                  "It makes the most sense when visual content is part of your actual service mix.",
              },
            ]}
          />

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

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
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">General client work</td>
                    <td className="p-3">Very flexible and scalable</td>
                    <td className="p-3">Needs a strong process</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Notion AI</td>
                    <td className="p-3">Organization</td>
                    <td className="p-3">Keeps projects structured</td>
                    <td className="p-3">Less useful outside its ecosystem</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Marketing services</td>
                    <td className="p-3">Speeds up repeatable delivery</td>
                    <td className="p-3">Narrower focus</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Runway</td>
                    <td className="p-3">Creative services</td>
                    <td className="p-3">Opens higher-value visual work</td>
                    <td className="p-3">Less useful for non-creative freelancers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose</h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose tools that help you deliver faster without lowering quality.</li>
              <li>Prioritize tools that let you charge more or handle more clients.</li>
              <li>Build one repeatable service workflow before adding more tools.</li>
            </ul>
          </section>

          <AiRelatedLinks currentSlug="best-ai-tools-for-freelancers" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
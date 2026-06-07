import type { Metadata } from "next";
import Link from "next/link";
import AffiliateBlock from "@/components/AffiliateBlock";
import NewsletterSignup from "@/components/intelligence/NewsletterSignup";

export const metadata: Metadata = {
  title: "Best AI Sales Tools | AI Tools for Sales Teams",
  description:
    "Compare the best AI sales tools for prospecting, lead generation, outreach, CRM workflows, sales assistants, meeting follow-up, and sales-team productivity.",
  keywords: [
    "best ai sales tools",
    "best ai tools for sales",
    "ai sales tools",
    "ai tools for sales teams",
    "ai sales assistants",
    "ai tools for lead generation",
    "ai sales automation tools",
    "best ai sales assistant",
  ],
};

const salesTools = [
  {
    rank: 1,
    name: "ChatGPT",
    bestFor: "Best overall AI sales assistant",
    price: "Free / Team plans",
    crm: "Indirect",
    email: "Yes",
    automation: "Prompt-based",
    score: 94,
    summary:
      "ChatGPT is the most flexible AI sales assistant for research, prospecting prompts, outbound drafts, objection handling, call preparation, proposals, and sales enablement content.",
    pros: [
      "Very flexible across many sales workflows",
      "Strong for research, messaging, roleplay, and proposal drafts",
      "Easy to adopt without changing the sales stack",
    ],
    cons: [
      "Requires human review before sending outreach",
      "Does not replace CRM-native workflows",
      "Quality depends heavily on prompts and context",
    ],
  },
  {
    rank: 2,
    name: "HubSpot AI",
    bestFor: "Best for CRM-connected sales teams",
    price: "Included in HubSpot ecosystem / paid plans vary",
    crm: "Native",
    email: "Yes",
    automation: "CRM workflows",
    score: 92,
    summary:
      "HubSpot AI is strongest when sales teams want AI inside CRM records, customer notes, emails, pipeline workflows, content generation, and sales-team operations.",
    pros: [
      "Native CRM context",
      "Useful for sales emails, summaries, and pipeline workflows",
      "Strong fit for SMB and mid-market sales teams",
    ],
    cons: [
      "Best if the team already uses HubSpot",
      "Less flexible than general AI assistants outside CRM workflows",
      "Pricing depends on HubSpot plan and setup",
    ],
  },
  {
    rank: 3,
    name: "Apollo",
    bestFor: "Best for outbound SDR teams",
    price: "Free / paid plans",
    crm: "Integrations",
    email: "Yes",
    automation: "Sequences",
    score: 90,
    summary:
      "Apollo is best for teams focused on prospecting, lead databases, outbound sequences, contact enrichment, sales engagement, and structured SDR workflows.",
    pros: [
      "Strong prospecting and lead database",
      "Useful for outbound sequences and contact discovery",
      "Good fit for SDR teams and growth teams",
    ],
    cons: [
      "Requires careful targeting to avoid low-quality outreach",
      "Data quality can vary by market",
      "Needs strong sales process discipline",
    ],
  },
  {
    rank: 4,
    name: "Claude",
    bestFor: "Best for sales research and long-form messaging",
    price: "Free / Pro / Team plans",
    crm: "Indirect",
    email: "Yes",
    automation: "Prompt-based",
    score: 88,
    summary:
      "Claude is particularly useful for long-context sales research, account planning, readable outbound drafts, proposal support, sales narratives, and customer-document analysis.",
    pros: [
      "Strong for long documents and account research",
      "Good writing quality for sales narratives",
      "Useful for complex B2B sales preparation",
    ],
    cons: [
      "Less directly integrated into sales platforms by default",
      "Requires structured context from the user",
      "Not a prospecting database or CRM",
    ],
  },
  {
    rank: 5,
    name: "Clay",
    bestFor: "Best for enrichment and sales automation",
    price: "Paid plans",
    crm: "Integrations",
    email: "Indirect",
    automation: "High",
    score: 86,
    summary:
      "Clay is strongest for sales teams that want data enrichment, account research automation, AI-assisted outbound workflows, and more advanced prospecting systems.",
    pros: [
      "Powerful enrichment and workflow automation",
      "Strong for complex outbound research",
      "Useful for growth and revenue operations teams",
    ],
    cons: [
      "More complex than simple AI assistants",
      "Requires setup and workflow design",
      "Best for teams with clear outbound processes",
    ],
  },
  {
    rank: 6,
    name: "Fireflies",
    bestFor: "Best for sales meetings and follow-up",
    price: "Free / paid plans",
    crm: "Integrations",
    email: "Indirect",
    automation: "Meeting workflows",
    score: 82,
    summary:
      "Fireflies is useful for recording sales meetings, generating transcripts, summarizing calls, extracting action items, and making customer conversations searchable.",
    pros: [
      "Good for meeting summaries and follow-up",
      "Creates searchable sales conversation records",
      "Useful for handoffs and account memory",
    ],
    cons: [
      "Focused on meetings rather than full sales execution",
      "Does not replace CRM or prospecting tools",
      "Requires meeting-data governance and consent awareness",
    ],
  },
];

const useCases = [
  {
    title: "Best AI sales tool overall",
    tool: "ChatGPT",
    description:
      "Best when a team wants one flexible AI assistant for research, outreach drafts, objection handling, call preparation, and proposal support.",
  },
  {
    title: "Best AI sales tool for CRM workflows",
    tool: "HubSpot AI",
    description:
      "Best when the main bottleneck is CRM notes, pipeline workflows, customer records, email drafting, and sales operations inside HubSpot.",
  },
  {
    title: "Best AI sales tool for outbound prospecting",
    tool: "Apollo",
    description:
      "Best for SDR teams that need prospecting, lead discovery, contact enrichment, sales sequences, and outbound pipeline creation.",
  },
  {
    title: "Best AI sales tool for research",
    tool: "Claude",
    description:
      "Best for long-form account research, complex B2B sales preparation, customer-document review, and readable sales narratives.",
  },
  {
    title: "Best AI sales tool for enrichment",
    tool: "Clay",
    description:
      "Best for teams building advanced outbound workflows that combine data enrichment, research, personalization, and automation.",
  },
  {
    title: "Best AI sales tool for meetings",
    tool: "Fireflies",
    description:
      "Best for call summaries, transcripts, action items, sales handoffs, and searchable customer conversations.",
  },
];

const faqs = [
  {
    question: "What is the best AI sales tool?",
    answer:
      "For most teams, the best AI sales tool is not one product. A strong setup often combines ChatGPT or Claude for flexible sales assistance, HubSpot AI for CRM workflows, Apollo for prospecting, and Fireflies for meeting follow-up.",
  },
  {
    question: "What is the best AI tool for outbound sales?",
    answer:
      "Apollo and Clay are strong options for outbound sales. Apollo is useful for prospecting and sales sequences, while Clay is stronger for enrichment-heavy and automated outbound workflows.",
  },
  {
    question: "What AI tool is best for CRM workflows?",
    answer:
      "HubSpot AI is a strong option for teams already using HubSpot because it works close to CRM records, emails, pipeline workflows, customer notes, and sales operations.",
  },
  {
    question: "Can AI replace SDRs?",
    answer:
      "AI can automate parts of SDR workflows such as research, list building, email drafts, personalization, and follow-up reminders. It does not fully replace human judgment, targeting, relationship-building, or sales strategy.",
  },
  {
    question: "What is the best AI sales assistant for startups?",
    answer:
      "Startups often benefit from ChatGPT or Claude for flexible sales work, Apollo for outbound prospecting, and HubSpot AI if they already use HubSpot as their CRM.",
  },
  {
    question: "Which AI tools help with lead generation?",
    answer:
      "Apollo, Clay, ChatGPT, and HubSpot AI can all support lead generation in different ways. Apollo and Clay help with prospecting and enrichment, while ChatGPT and HubSpot AI help with messaging and workflow support.",
  },
  {
    question: "What AI sales tool works with HubSpot?",
    answer:
      "HubSpot AI is the native option inside HubSpot. Many external tools also integrate with HubSpot, including prospecting, meeting, and enrichment platforms.",
  },
  {
    question: "What is the best AI tool for sales emails?",
    answer:
      "ChatGPT, Claude, HubSpot AI, and Apollo can all help with sales emails. ChatGPT and Claude are flexible for drafting and personalization, HubSpot AI is useful inside CRM workflows, and Apollo supports outbound sequences.",
  },
  {
    question: "Are AI sales tools worth it?",
    answer:
      "AI sales tools are worth it when they reduce repetitive work, improve research quality, speed up follow-up, or help teams maintain better CRM hygiene. They are less useful when teams lack a clear sales process.",
  },
  {
    question: "What should sales teams automate first with AI?",
    answer:
      "Most sales teams should start with account research, call summaries, CRM note cleanup, first-draft outreach, objection handling practice, and follow-up workflows before moving into more complex automation.",
  },
];

export default function BestAiToolsForSalesPage() {
  return (
    <main className="px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl">
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
            <span>Best AI Sales Tools</span>
          </div>

          <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            AI sales tools
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Sales Tools
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI sales tools help teams find prospects, research accounts, write
            outreach, manage CRM workflows, summarize meetings, improve
            follow-up, and move faster through the sales cycle.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best AI sales stack depends on the bottleneck: prospecting,
            outreach, CRM hygiene, account research, meeting follow-up, or
            revenue operations. This guide ranks the strongest options by sales
            workflow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#top-picks"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              See top picks
            </a>
            <a
              href="#comparison"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Compare tools
            </a>
            <a
              href="#faq"
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              FAQ
            </a>
          </div>
        </section>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Executive summary</h2>
            <div className="space-y-4 leading-7 text-gray-600">
              <p>
                For most sales teams, the strongest AI sales setup is not one
                tool. It is a small stack: a flexible assistant for thinking and
                writing, a CRM-connected tool for pipeline workflows, a
                prospecting platform for outbound sales, and a meeting assistant
                for follow-up.
              </p>
              <p>
                ChatGPT is the best overall AI sales assistant. HubSpot AI is
                the strongest CRM-connected option for teams already using
                HubSpot. Apollo is strongest for outbound SDR teams. Claude is
                excellent for deep sales research and long-form messaging. Clay
                is best for enrichment-heavy workflows, while Fireflies is best
                for sales meetings and follow-up.
              </p>
            </div>
          </section>

          <section
            id="top-picks"
            className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              Best AI sales tools by category
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <div key={item.title} className="rounded-2xl border bg-gray-50 p-5">
                  <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                    {item.title}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.tool}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="comparison"
            className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              AI sales tools compared
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Rank</th>
                    <th className="p-3 text-left">Tool</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">CRM</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Automation</th>
                    <th className="p-3 text-left">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {salesTools.map((tool) => (
                    <tr key={tool.name} className="border-t align-top">
                      <td className="p-3 text-gray-600">#{tool.rank}</td>
                      <td className="p-3 font-semibold text-gray-900">
                        {tool.name}
                      </td>
                      <td className="p-3 text-gray-700">{tool.bestFor}</td>
                      <td className="p-3 text-gray-700">{tool.price}</td>
                      <td className="p-3 text-gray-700">{tool.crm}</td>
                      <td className="p-3 text-gray-700">{tool.email}</td>
                      <td className="p-3 text-gray-700">{tool.automation}</td>
                      <td className="p-3 font-semibold text-gray-900">
                        {tool.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              What are AI sales tools?
            </h2>

            <div className="space-y-4 leading-7 text-gray-600">
              <p>
                AI sales tools use artificial intelligence to support sales
                workflows such as prospecting, account research, lead
                enrichment, email drafting, CRM updates, meeting summaries, call
                analysis, forecasting, and follow-up.
              </p>
              <p>
                Some AI sales tools work as general-purpose assistants. Others
                are built directly into CRM platforms, outbound sales systems,
                meeting tools, data enrichment tools, and revenue operations
                workflows. The best tool depends on where the sales process is
                slowest.
              </p>
            </div>
          </section>

          <section
            id="use-cases"
            className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              Best AI tools for sales teams by use case
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map((item) => (
                <div key={item.title} className="rounded-2xl border bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-700">
                    Recommended tool: {item.tool}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-slate-950 to-gray-900 p-6 text-white shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Get weekly AI and sales workflow intelligence
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              Join T4 Intelligence for practical analysis on AI adoption,
              workflow automation, operational risk, and the tools changing how
              teams work.
            </p>
            <NewsletterSignup />
          </section>

          <AffiliateBlock
            slug="best-ai-tools-for-sales"
            placement="editorial_bottom"
            title="Recommended AI sales tools"
          />

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-semibold">
              Best AI sales tools ranked
            </h2>

            <div className="space-y-6">
              {salesTools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-2xl border bg-gray-50 p-5"
                >
                  <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                    #{tool.rank} · {tool.bestFor}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {tool.name}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {tool.summary}
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pros</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-600">
                        {tool.pros.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">Cons</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-600">
                        {tool.cons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#affiliate-programs-coming-soon"
                      className="rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                    >
                      Review option
                    </a>
                    <a
                      href="#comparison"
                      className="rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Compare
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              AI sales assistants vs AI sales platforms
            </h2>

            <div className="space-y-4 leading-7 text-gray-600">
              <p>
                AI sales assistants help individual sellers with writing,
                research, summarization, call preparation, objection handling,
                and follow-up. ChatGPT and Claude are good examples.
              </p>
              <p>
                AI sales platforms go deeper into CRM data, lead databases,
                sequences, enrichment, pipeline management, and revenue
                operations. HubSpot AI, Apollo, and Clay are closer to this
                category.
              </p>
              <p>
                Small teams often start with a general AI assistant. Larger
                sales teams usually need AI tools connected directly to CRM,
                prospecting, meeting, and reporting workflows.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              How to choose the best AI sales tool
            </h2>

            <ul className="list-disc space-y-2 pl-5 leading-7 text-gray-600">
              <li>
                Choose a prospecting tool if the main bottleneck is finding
                qualified leads.
              </li>
              <li>
                Choose a CRM-connected AI tool if the team needs better
                pipeline, email, and customer-record workflows.
              </li>
              <li>
                Choose a meeting assistant if calls create too much manual
                follow-up.
              </li>
              <li>
                Choose ChatGPT or Claude if the bottleneck is messaging,
                account research, objections, proposals, or general sales
                thinking.
              </li>
              <li>
                Choose Clay if the team needs enrichment, research automation,
                and more advanced outbound workflows.
              </li>
            </ul>
          </section>

          <section
            id="faq"
            className="rounded-3xl border bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              {faqs.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="affiliate-programs-coming-soon"
            className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Related AI sales and intelligence guides
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/ai/best-ai-tools-for-lead-generation"
                className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Lead Generation
              </Link>

              <Link
                href="/tools/ai/best-ai-tools-for-marketing"
                className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Tools for Marketing
              </Link>

              <Link
                href="/tools/ai/best-ai-workspace-tools"
                className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best AI Workspace Tools
              </Link>

              <Link
                href="/tools/ai/statistics/most-used-ai-agents"
                className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Most Used AI Agents
              </Link>

              <Link
                href="/tools/ai/statistics/enterprise-ai-vendor-rankings"
                className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Enterprise AI Vendor Rankings
              </Link>

              <Link
                href="/t4-intelligence/analysis/the-first-ai-native-company-has-probably-already-been-founded"
                className="inline-flex rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                The First AI-Native Company
              </Link>
            </div>
          </section>

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}
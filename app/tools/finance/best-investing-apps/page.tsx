import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Investing Apps | T4 Atlas",
  description:
    "Compare the best investing apps for beginners, long-term investors, ETF buyers, and low-cost portfolio building.",
};

const appPicks = [
  {
    name: "Trading 212",
    bestFor: "Beginner-friendly investing",
    idealFor:
      "Users who want an accessible investing app with a simple interface and broad appeal",
    whyChooseIt:
      "Trading 212 is attractive for newer investors who want a clean experience and low-friction access to investing.",
    watchOutFor:
      "It may be less appealing if your priority is advanced broker features or professional-style tooling.",
  },
  {
    name: "DEGIRO",
    bestFor: "Low-cost investing",
    idealFor:
      "Users who care about cost-efficiency and broad market access for long-term investing",
    whyChooseIt:
      "DEGIRO is a strong choice when minimizing costs matters and the goal is long-term ETF and stock investing.",
    watchOutFor:
      "The platform may feel less polished for users who want a more consumer-friendly app experience.",
  },
  {
    name: "eToro",
    bestFor: "Social investing and simplicity",
    idealFor:
      "Users who want a more mainstream investing app with a social layer and easier onboarding",
    whyChooseIt:
      "eToro is useful when simplicity, accessibility, and a more consumer-facing investing experience matter most.",
    watchOutFor:
      "It may be less attractive if your main priority is the lowest possible cost structure.",
  },
  {
    name: "Interactive Brokers",
    bestFor: "Serious and advanced investors",
    idealFor:
      "Users who want broader capabilities, more depth, and stronger platform flexibility",
    whyChooseIt:
      "Interactive Brokers is one of the strongest options when the user wants more than a lightweight app and values breadth and capability.",
    watchOutFor:
      "It can feel more complex than beginner-focused investing apps.",
  },
];

export default function BestInvestingAppsPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/finance" className="hover:text-gray-900">
              Finance
            </Link>
            <span>→</span>
            <span>Best Investing Apps</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Investing apps
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best Investing Apps
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best investing app depends on what kind of investor you are. Some
            users want the simplest possible start, others want lower costs,
            broader market access, or a more advanced platform over time.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top picks</h2>
            <p className="mb-5 text-gray-600">
              These are strong options depending on whether your priority is
              simplicity, cost, broader market access, or long-term investing
              flexibility.
            </p>

            <div className="grid gap-4">
              {appPicks.map((pick) => (
                <div key={pick.name} className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {pick.name}
                  </h3>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Best for
                      </p>
                      <p className="text-gray-700">{pick.bestFor}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Ideal for
                      </p>
                      <p className="text-gray-700">{pick.idealFor}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Why choose it
                      </p>
                      <p className="text-gray-700">{pick.whyChooseIt}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Watch out for
                      </p>
                      <p className="text-gray-700">{pick.watchOutFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">App</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Strength</th>
                    <th className="p-3 text-left">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Trading 212</td>
                    <td className="p-3">Beginners</td>
                    <td className="p-3">Easy to get started</td>
                    <td className="p-3">Less depth for advanced users</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">DEGIRO</td>
                    <td className="p-3">Low-cost investing</td>
                    <td className="p-3">Cost-efficient access</td>
                    <td className="p-3">Less polished experience</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">eToro</td>
                    <td className="p-3">Accessibility</td>
                    <td className="p-3">Simple and mainstream-friendly</td>
                    <td className="p-3">May not be cheapest</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Interactive Brokers</td>
                    <td className="p-3">Advanced use</td>
                    <td className="p-3">Strong capabilities</td>
                    <td className="p-3">Higher complexity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose the right investing app</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose simplicity first if your main risk is never getting started.</li>
              <li>Choose cost first if you expect to invest for many years.</li>
              <li>Choose platform depth only if you will actually use the extra features.</li>
              <li>Match the app to your real investing behavior, not your idealized one.</li>
            </ul>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related finance pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/best-budgeting-apps"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Budgeting Apps
              </Link>
              <Link
                href="/tools/finance/alternatives-to-robinhood"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to Robinhood
              </Link>
              <Link
                href="/tools/finance/etoro-vs-degiro"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                eToro vs DEGIRO
              </Link>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Method note</h2>
            <p className="text-gray-600">
              The best investing app is not automatically the one with the most
              features. It is usually the one that best fits your cost sensitivity,
              investing style, and likelihood of staying consistent over time.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
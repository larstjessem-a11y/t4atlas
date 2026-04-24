import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Budgeting Apps | T4 Atlas",
  description:
    "Compare the best budgeting apps for expense tracking, zero-based budgeting, automation, and everyday financial planning.",
};

const appPicks = [
  {
    name: "YNAB",
    bestFor: "Intentional budgeting",
    idealFor:
      "People who want a hands-on budgeting system with strong planning discipline",
    whyChooseIt:
      "YNAB is one of the strongest options if your goal is to give every dollar a job and build a more deliberate budgeting habit.",
    watchOutFor:
      "It has a learning curve and works best if you are willing to actively engage with the system.",
  },
  {
    name: "PocketGuard",
    bestFor: "Simplicity",
    idealFor:
      "Users who want an easier budgeting app without too much manual complexity",
    whyChooseIt:
      "PocketGuard is appealing when the main goal is to quickly understand spending and see what is safe to spend.",
    watchOutFor:
      "It may feel less powerful if you want deep customization or a more structured budget philosophy.",
  },
  {
    name: "Monarch Money",
    bestFor: "Modern household money management",
    idealFor:
      "Users who want a more polished all-in-one money dashboard and planning experience",
    whyChooseIt:
      "Monarch Money fits well if you want budgeting, tracking, and financial overview in a more modern interface.",
    watchOutFor:
      "It is more compelling for users who value the interface and overview, not just bare-bones budgeting.",
  },
  {
    name: "Goodbudget",
    bestFor: "Envelope-style budgeting",
    idealFor:
      "People who want a digital version of traditional envelope budgeting",
    whyChooseIt:
      "Goodbudget is useful when you want a simpler budgeting philosophy built around allocating money into clear spending buckets.",
    watchOutFor:
      "It is less attractive if you want heavy automation and bank-sync-driven workflows.",
  },
];

export default function BestBudgetingAppsPage() {
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
            <span>Best Budgeting Apps</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Budgeting apps
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best Budgeting Apps
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best budgeting app depends on how you actually manage money. Some
            people want a strict budgeting method, others want simplicity,
            automation, or a clearer overview of spending and saving.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top picks</h2>
            <p className="mb-5 text-gray-600">
              These are strong options depending on whether your main priority is
              budgeting discipline, simplicity, envelope budgeting, or modern
              financial visibility.
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
                    <td className="p-3 font-medium">YNAB</td>
                    <td className="p-3">Budgeting discipline</td>
                    <td className="p-3">Strong method and structure</td>
                    <td className="p-3">Learning curve</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">PocketGuard</td>
                    <td className="p-3">Simplicity</td>
                    <td className="p-3">Easy to understand</td>
                    <td className="p-3">Less depth for advanced users</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Monarch Money</td>
                    <td className="p-3">Money overview</td>
                    <td className="p-3">Polished and broad dashboard</td>
                    <td className="p-3">Best for users who value overview</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Goodbudget</td>
                    <td className="p-3">Envelope budgeting</td>
                    <td className="p-3">Simple budgeting philosophy</td>
                    <td className="p-3">Less automation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose the right budgeting app</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose structure-first if your main problem is overspending without a plan.</li>
              <li>Choose simplicity-first if your main problem is sticking with the app at all.</li>
              <li>Choose overview-first if you want budgeting plus a broader money dashboard.</li>
              <li>Pick the app that matches how you naturally make financial decisions.</li>
            </ul>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related finance pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/best-investing-apps"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Investing Apps
              </Link>
              <Link
                href="/tools/finance/best-high-yield-savings-accounts"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best High Yield Savings Accounts
              </Link>
              <Link
                href="/tools/finance/alternatives-to-robinhood"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Alternatives to Robinhood
              </Link>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Method note</h2>
            <p className="text-gray-600">
              A budgeting app does not fix money habits by itself. The best one is
              usually the app that makes planning, visibility, and consistency
              easier enough that you actually keep using it.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
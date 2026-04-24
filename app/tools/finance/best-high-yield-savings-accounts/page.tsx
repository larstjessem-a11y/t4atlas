import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best High Yield Savings Accounts | T4 Atlas",
  description:
    "Compare the best high yield savings accounts for earning more interest, preserving cash, and improving short-term savings efficiency.",
};

const accountPicks = [
  {
    name: "Wise",
    bestFor: "Flexible international cash management",
    idealFor:
      "Users who want a modern money platform with cash management utility and cross-border flexibility",
    whyChooseIt:
      "Wise is appealing when users want a more flexible cash platform and value low-friction money movement alongside saving utility.",
    watchOutFor:
      "It is less of a classic savings-product choice if your only goal is a traditional savings account structure.",
  },
  {
    name: "Revolut",
    bestFor: "Modern app-based money management",
    idealFor:
      "Users who want savings features inside a broader app-based financial ecosystem",
    whyChooseIt:
      "Revolut is useful when convenience, app experience, and broader everyday money management matter alongside saving.",
    watchOutFor:
      "It may be less attractive for people who want a more traditional savings setup and fewer bundled features.",
  },
  {
    name: "Traditional online savings account",
    bestFor: "Straightforward cash parking",
    idealFor:
      "Users who mainly want a simple place to hold emergency savings or near-term cash",
    whyChooseIt:
      "A standard online savings account is still often the cleanest option when the goal is stability and simple interest on cash reserves.",
    watchOutFor:
      "Rates, features, and practical value vary widely by region and provider.",
  },
];

export default function BestHighYieldSavingsAccountsPage() {
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
            <span>Best High Yield Savings Accounts</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Savings accounts
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best High Yield Savings Accounts
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best high yield savings account depends on what you want from
            your cash. Some users prioritize yield, others want flexibility,
            app-based convenience, or a safer place to park short-term money.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top picks</h2>
            <p className="mb-5 text-gray-600">
              These are useful options depending on whether your priority is
              convenience, flexibility, or straightforward cash preservation.
            </p>

            <div className="grid gap-4">
              {accountPicks.map((pick) => (
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
                    <th className="p-3 text-left">Option</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Strength</th>
                    <th className="p-3 text-left">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Wise</td>
                    <td className="p-3">Flexibility</td>
                    <td className="p-3">Modern cash utility</td>
                    <td className="p-3">Not a classic savings-only setup</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Revolut</td>
                    <td className="p-3">App-first users</td>
                    <td className="p-3">Convenient ecosystem</td>
                    <td className="p-3">May be broader than needed</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Online savings account</td>
                    <td className="p-3">Cash reserves</td>
                    <td className="p-3">Simple and familiar</td>
                    <td className="p-3">Actual value depends on provider</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose the right savings option</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose simplicity if the main goal is to protect and separate emergency savings.</li>
              <li>Choose flexibility if your money moves across currencies or platforms regularly.</li>
              <li>Compare the real net value, not just headline yield.</li>
              <li>Keep short-term cash tools separate from long-term investing decisions.</li>
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
                href="/tools/finance/best-investing-apps"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Investing Apps
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
              A high yield savings option is useful when it helps preserve cash,
              improve accessibility, and reduce idle-money inefficiency without
              pushing you into unnecessary product complexity.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
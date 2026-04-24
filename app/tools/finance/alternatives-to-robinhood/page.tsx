import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alternatives to Robinhood | T4 Atlas",
  description:
    "Compare strong alternatives to Robinhood for lower costs, broader market access, better investing tools, and long-term portfolio building.",
};

const alternatives = [
  {
    name: "Trading 212",
    bestFor: "Simple investing alternative",
    idealFor:
      "Users who want an easy-to-use investing app with a beginner-friendly feel",
    whyChooseIt:
      "Trading 212 is a natural Robinhood alternative for users who mainly want a clean interface and low-friction access to investing.",
    watchOutFor:
      "It may be less attractive if you want deeper broker functionality or a more professional platform.",
  },
  {
    name: "DEGIRO",
    bestFor: "Lower-cost long-term investing",
    idealFor:
      "Investors who care more about cost-efficiency and broad market access than social or app-first features",
    whyChooseIt:
      "DEGIRO is often more appealing than Robinhood if your priority is long-term investing with cost awareness.",
    watchOutFor:
      "The user experience can feel less polished if you prefer a more consumer-styled investing app.",
  },
  {
    name: "eToro",
    bestFor: "Mainstream app experience",
    idealFor:
      "Users who want a more social, accessible, and app-driven investing platform",
    whyChooseIt:
      "eToro works well as a Robinhood alternative when the user wants accessibility and a more mainstream entry point into investing.",
    watchOutFor:
      "It may not be the best fit if your main priority is minimizing long-term investing costs.",
  },
  {
    name: "Interactive Brokers",
    bestFor: "Advanced investors",
    idealFor:
      "Users who want broader platform depth, stronger tooling, and more flexibility than a lightweight app can offer",
    whyChooseIt:
      "Interactive Brokers is a strong step up for users who have outgrown simple investing apps and want more control.",
    watchOutFor:
      "It has a steeper learning curve than Robinhood-style beginner platforms.",
  },
];

export default function AlternativesToRobinhoodPage() {
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
            <span>Alternatives to Robinhood</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Broker alternatives
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Alternatives to Robinhood
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best Robinhood alternative depends on what you want more of:
            lower costs, broader market access, a cleaner long-term investing
            setup, or a more advanced broker platform.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top alternatives</h2>
            <p className="mb-5 text-gray-600">
              These platforms are strong alternatives depending on whether your
              main priority is simplicity, cost-efficiency, mainstream app
              experience, or a more advanced broker setup.
            </p>

            <div className="grid gap-4">
              {alternatives.map((pick) => (
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
                    <th className="p-3 text-left">Platform</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Strength</th>
                    <th className="p-3 text-left">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Trading 212</td>
                    <td className="p-3">Ease of use</td>
                    <td className="p-3">Beginner-friendly experience</td>
                    <td className="p-3">Less advanced depth</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">DEGIRO</td>
                    <td className="p-3">Long-term investors</td>
                    <td className="p-3">Cost-efficient access</td>
                    <td className="p-3">Less polished UX</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">eToro</td>
                    <td className="p-3">Mainstream adoption</td>
                    <td className="p-3">Accessible and social</td>
                    <td className="p-3">May not be cheapest</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Interactive Brokers</td>
                    <td className="p-3">Advanced users</td>
                    <td className="p-3">Strong platform capability</td>
                    <td className="p-3">More complexity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose a Robinhood alternative</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose simplicity if you mainly want a low-friction investing experience.</li>
              <li>Choose cost-efficiency if your focus is long-term compounding and low drag.</li>
              <li>Choose platform depth only if you will actually use advanced features.</li>
              <li>Pick the broker that fits your real investing style, not your aspirational one.</li>
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
                href="/tools/finance/etoro-vs-degiro"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                eToro vs DEGIRO
              </Link>
              <Link
                href="/tools/finance/best-budgeting-apps"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Budgeting Apps
              </Link>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Method note</h2>
            <p className="text-gray-600">
              The best alternative to Robinhood is the platform that better matches
              your cost sensitivity, investing horizon, and desired level of
              simplicity or platform depth.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
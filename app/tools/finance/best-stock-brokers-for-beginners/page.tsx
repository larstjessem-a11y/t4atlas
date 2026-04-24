import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Stock Brokers for Beginners | T4 Atlas",
  description:
    "Compare the best stock brokers for beginners based on simplicity, usability, low friction, and long-term investing fit.",
};

const brokerPicks = [
  {
    name: "Trading 212",
    bestFor: "Beginner-friendly simplicity",
    idealFor:
      "Users who want a straightforward app experience and a low-friction first step into investing",
    whyChooseIt:
      "Trading 212 is a strong beginner option because it reduces friction, feels accessible, and makes it easier to take the first investing steps.",
    watchOutFor:
      "It may feel limiting later if you want deeper broker tools or a more advanced platform setup.",
  },
  {
    name: "eToro",
    bestFor: "Mainstream accessibility",
    idealFor:
      "Users who want a more consumer-facing platform and an approachable investing experience",
    whyChooseIt:
      "eToro works well for beginners who value easy onboarding, a mainstream app feel, and a platform that feels less intimidating.",
    watchOutFor:
      "It may not be the strongest choice if your top priority is minimizing long-term investing costs.",
  },
  {
    name: "DEGIRO",
    bestFor: "Cost-aware beginners",
    idealFor:
      "Beginners who are already thinking long term and care about cost discipline from the start",
    whyChooseIt:
      "DEGIRO is often appealing when the beginner investor is serious about long-term investing efficiency and wants a more broker-oriented setup.",
    watchOutFor:
      "The experience can feel less polished and less beginner-friendly than more consumer-styled apps.",
  },
  {
    name: "Interactive Brokers",
    bestFor: "Beginners who want room to grow",
    idealFor:
      "Users who can handle more complexity and want to avoid switching platforms later",
    whyChooseIt:
      "Interactive Brokers can make sense for more serious beginners who want a platform with deeper long-term capability.",
    watchOutFor:
      "It is easier to feel overwhelmed here than on simpler beginner-first platforms.",
  },
];

export default function BestStockBrokersForBeginnersPage() {
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
            <span>Best Stock Brokers for Beginners</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Beginner brokers
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best Stock Brokers for Beginners
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best stock broker for beginners is usually the one that makes it
            easiest to get started without creating unnecessary confusion. Some
            people need the simplest possible experience, while others want a
            broker they can keep using as they grow.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top picks</h2>
            <p className="mb-5 text-gray-600">
              These are strong beginner broker options depending on whether your
              priority is simplicity, cost-efficiency, accessibility, or long-term
              platform depth.
            </p>

            <div className="grid gap-4">
              {brokerPicks.map((pick) => (
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
                    <th className="p-3 text-left">Broker</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Strength</th>
                    <th className="p-3 text-left">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Trading 212</td>
                    <td className="p-3">Simplicity</td>
                    <td className="p-3">Easy first step into investing</td>
                    <td className="p-3">Less advanced depth later</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">eToro</td>
                    <td className="p-3">Accessibility</td>
                    <td className="p-3">Approachable platform feel</td>
                    <td className="p-3">May not be cheapest long term</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">DEGIRO</td>
                    <td className="p-3">Cost-aware beginners</td>
                    <td className="p-3">Cost-efficient long-term fit</td>
                    <td className="p-3">Less beginner-polished experience</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Interactive Brokers</td>
                    <td className="p-3">Growth potential</td>
                    <td className="p-3">More platform capability</td>
                    <td className="p-3">Higher complexity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How beginners should choose a broker</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose simplicity first if your biggest risk is procrastination.</li>
              <li>Choose cost-efficiency early if you already know you will invest for years.</li>
              <li>Do not choose complexity just because it feels more serious.</li>
              <li>Pick the platform that makes good investing behavior easier to repeat.</li>
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
              For beginners, the best broker is usually the one that reduces
              friction enough to help you start and stay consistent, without
              pulling you into unnecessary platform complexity too early.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
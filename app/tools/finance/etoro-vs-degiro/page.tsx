import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "eToro vs DEGIRO | T4 Atlas",
  description:
    "Compare eToro vs DEGIRO on simplicity, costs, long-term investing fit, platform experience, and investor type.",
};

export default function EtoroVsDegiroPage() {
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
            <span>eToro vs DEGIRO</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Broker comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            eToro vs DEGIRO
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            eToro and DEGIRO appeal to different kinds of investors. eToro is
            generally more consumer-friendly and accessible, while DEGIRO often
            appeals more to cost-conscious long-term investors who care about
            efficiency and market access.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Factor</th>
                    <th className="p-3 text-left">eToro</th>
                    <th className="p-3 text-left">DEGIRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Best for</td>
                    <td className="p-3">Accessibility and mainstream use</td>
                    <td className="p-3">Low-cost long-term investing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">User experience</td>
                    <td className="p-3">More consumer-friendly</td>
                    <td className="p-3">More functional than polished</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Cost sensitivity</td>
                    <td className="p-3">Not always the cheapest choice</td>
                    <td className="p-3">Often more attractive on cost</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Investor type</td>
                    <td className="p-3">Newer or mainstream investors</td>
                    <td className="p-3">Deliberate long-term investors</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Platform feel</td>
                    <td className="p-3">More app-first</td>
                    <td className="p-3">More broker-first</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">When eToro makes more sense</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>You want a simpler and more approachable investing experience.</li>
              <li>You value ease of use more than squeezing out every possible cost advantage.</li>
              <li>You prefer a more consumer-facing platform and lower perceived friction.</li>
            </ul>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">When DEGIRO makes more sense</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>You are more focused on long-term investing efficiency.</li>
              <li>You care more about cost discipline than app polish.</li>
              <li>You want a platform that feels more like a traditional broker environment.</li>
            </ul>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Bottom line</h2>
            <p className="text-gray-600">
              eToro is often the better fit for people who want a more accessible
              investing experience, while DEGIRO is often the better fit for
              users who prioritize cost-efficiency and long-term investing
              discipline. The better platform depends less on hype and more on
              your actual investing behavior.
            </p>
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
              Broker comparisons are most useful when they focus on fit. The
              right platform is the one that best matches your costs, habits,
              experience level, and long-term investing style.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
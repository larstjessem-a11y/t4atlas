import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Weight Loss Apps | T4 Atlas",
  description:
    "Compare the best weight loss apps for calorie tracking, habit building, coaching, and sustainable weight management.",
};

const appPicks = [
  {
    name: "MyFitnessPal",
    bestFor: "Large food database",
    idealFor:
      "Users who want a familiar calorie tracker with broad food logging coverage",
    whyChooseIt:
      "MyFitnessPal is still one of the most recognizable options for calorie tracking, food logging, and day-to-day weight loss support.",
    watchOutFor:
      "The experience depends a lot on how consistently you log and whether you want deeper coaching or just tracking.",
  },
  {
    name: "Lifesum",
    bestFor: "Cleaner user experience",
    idealFor:
      "Users who want calorie tracking with a more polished wellness-oriented feel",
    whyChooseIt:
      "Lifesum is often appealing for people who want a more modern interface and a broader nutrition-and-habits framing.",
    watchOutFor:
      "It may be less attractive if your main priority is the biggest food database possible.",
  },
  {
    name: "Cronometer",
    bestFor: "Detailed nutrition tracking",
    idealFor:
      "Users who care about more granular nutrient data, not just calories",
    whyChooseIt:
      "Cronometer is useful when you want to track macros and micronutrients in a more detailed way than many mainstream apps provide.",
    watchOutFor:
      "It can feel more technical than simpler consumer weight loss apps.",
  },
  {
    name: "Noom",
    bestFor: "Behavior change and coaching",
    idealFor:
      "Users who want more structure, psychology, and guided habit support",
    whyChooseIt:
      "Noom is useful for people who do better with more coaching-style framing rather than pure calorie tracking alone.",
    watchOutFor:
      "It is less compelling if you already know the basics and mainly want a lightweight tracker.",
  },
];

export default function BestWeightLossAppsPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/weight-loss" className="hover:text-gray-900">
              Weight Loss
            </Link>
            <span>→</span>
            <span>Best Weight Loss Apps</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Weight loss apps
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best Weight Loss Apps
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best weight loss app depends on what you actually need. Some
            people need a food logger. Others need habit coaching, better
            nutrition visibility, or a simpler daily system they can stick with.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top picks</h2>
            <p className="mb-5 text-gray-600">
              These are strong options depending on whether your main priority is
              calorie tracking, coaching, nutrition detail, or ease of use.
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
                    <td className="p-3 font-medium">MyFitnessPal</td>
                    <td className="p-3">Food logging</td>
                    <td className="p-3">Huge food database</td>
                    <td className="p-3">Can feel generic without consistency</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Lifesum</td>
                    <td className="p-3">User experience</td>
                    <td className="p-3">Cleaner app feel</td>
                    <td className="p-3">Less attractive if database size is everything</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Cronometer</td>
                    <td className="p-3">Nutrition detail</td>
                    <td className="p-3">Strong micronutrient tracking</td>
                    <td className="p-3">Can feel more technical</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Noom</td>
                    <td className="p-3">Behavior change</td>
                    <td className="p-3">More guided structure</td>
                    <td className="p-3">Less ideal if you just want a simple tracker</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose the right app</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose tracking-first if your main problem is awareness.</li>
              <li>Choose coaching-first if your main problem is adherence.</li>
              <li>Choose detailed nutrition tracking if macros and food quality matter to you.</li>
              <li>Choose the app you are realistically likely to use every day.</li>
            </ul>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/weight-loss/calorie-deficit-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Calorie Deficit Calculator
              </Link>
              <Link
                href="/tools/weight-loss/tdee-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                TDEE Calculator
              </Link>
              <Link
                href="/tools/weight-loss/weight-loss-timeline-calculator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Weight Loss Timeline Calculator
              </Link>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Method note</h2>
            <p className="text-gray-600">
              Apps can support weight loss, but they do not cause it on their own.
              The most useful app is usually the one that makes calorie awareness,
              planning, and adherence easier over time.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
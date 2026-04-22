import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Calorie Tracking Apps | T4 Atlas",
  description:
    "Compare the best calorie tracking apps for food logging, macro tracking, and long-term weight loss consistency.",
};

const appPicks = [
  {
    name: "MyFitnessPal",
    bestFor: "All-around calorie tracking",
    idealFor:
      "Users who want a familiar calorie tracker with a large food database and broad feature coverage",
    whyChooseIt:
      "MyFitnessPal remains one of the most widely used calorie tracking apps and works well for both beginners and experienced users.",
    watchOutFor:
      "The free experience is more limited than before, and some users may want a cleaner app experience.",
  },
  {
    name: "Cronometer",
    bestFor: "Detailed nutrition tracking",
    idealFor:
      "Users who care about more than calories and want detailed macro and micronutrient visibility",
    whyChooseIt:
      "Cronometer is especially useful when nutrition quality and data precision matter, not just calorie counting.",
    watchOutFor:
      "It can feel more technical and less lightweight than simpler calorie tracking apps.",
  },
  {
    name: "Lifesum",
    bestFor: "Cleaner lifestyle experience",
    idealFor:
      "Users who want a more polished and wellness-oriented calorie tracking app",
    whyChooseIt:
      "Lifesum is appealing for people who want calorie tracking with a stronger lifestyle and habit layer.",
    watchOutFor:
      "It may be less attractive if your main priority is maximum database size or detailed analytics.",
  },
  {
    name: "Lose It!",
    bestFor: "Simple weight loss tracking",
    idealFor:
      "Users who want a fast, accessible calorie tracking experience without too much complexity",
    whyChooseIt:
      "Lose It! works well when the main goal is simple daily calorie awareness and consistency.",
    watchOutFor:
      "It is less compelling if you want deeper nutrition tracking or broader health data.",
  },
];

export default function BestCalorieTrackingAppsPage() {
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
            <span>Best Calorie Tracking Apps</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Calorie tracking apps
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best Calorie Tracking Apps
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            The best calorie tracking app is the one you are actually willing to
            use consistently. Some people need simplicity, others need detailed
            nutrition data, and some want a more guided lifestyle experience.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Top picks</h2>
            <p className="mb-5 text-gray-600">
              These are strong options depending on whether your priority is
              simplicity, precision, food database quality, or long-term
              usability.
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
                    <td className="p-3">General use</td>
                    <td className="p-3">Large food database</td>
                    <td className="p-3">More limited free experience</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Cronometer</td>
                    <td className="p-3">Precision</td>
                    <td className="p-3">Detailed nutrient tracking</td>
                    <td className="p-3">More technical feel</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Lifesum</td>
                    <td className="p-3">Lifestyle UX</td>
                    <td className="p-3">Cleaner app experience</td>
                    <td className="p-3">Less compelling for power users</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Lose It!</td>
                    <td className="p-3">Simplicity</td>
                    <td className="p-3">Fast and accessible</td>
                    <td className="p-3">Less advanced depth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              How to choose the right calorie tracking app
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Choose the app you are realistically willing to use every day.</li>
              <li>Go simple first if consistency is your main bottleneck.</li>
              <li>Choose detailed tracking only if you will actually use that data.</li>
              <li>Food logging works best as a feedback system, not a perfection system.</li>
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
                href="/tools/weight-loss/best-weight-loss-apps"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Weight Loss Apps
              </Link>
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Method note</h2>
            <p className="text-gray-600">
              Calorie tracking apps can improve awareness, consistency, and
              planning, but they are only useful if they fit into real life well
              enough to be used repeatedly over time.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
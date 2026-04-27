import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MyFitnessPal Alternatives | T4 Atlas",
  description:
    "Compare MyFitnessPal alternatives for calorie tracking, features, accuracy, and ease of use.",
};

const apps = [
  {
    name: "Cronometer",
    description: "Detailed nutrition tracking with micronutrients",
  },
  {
    name: "Lose It!",
    description: "Simple calorie tracking with strong habit focus",
  },
  {
    name: "Lifesum",
    description: "Clean UI with diet plans and guidance",
  },
  {
    name: "Yazio",
    description: "Popular app with fasting and calorie tracking",
  },
];

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-4 text-4xl font-semibold">
          MyFitnessPal Alternatives
        </h1>

        <p className="mb-6 text-gray-600">
          MyFitnessPal is one of the most widely used calorie tracking apps,
          but it is not the only option. Depending on your goals, you may prefer
          a simpler interface, more detailed nutrition data, or better habit tracking.
        </p>

        {/* QUICK ANSWER */}
        <section className="mb-8 rounded-3xl border bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Best alternatives</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Cronometer — best for detailed nutrition tracking</li>
            <li>Lose It! — best for simplicity</li>
            <li>Lifesum — best for guided dieting</li>
            <li>Yazio — best for fasting + calorie tracking</li>
          </ul>
        </section>

        {/* APP LIST */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Top alternatives</h2>

          <div className="grid gap-4">
            {apps.map((app) => (
              <div key={app.name} className="rounded-2xl border p-4">
                <p className="font-semibold">{app.name}</p>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY SWITCH */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">Why consider alternatives?</h2>
          <p className="text-gray-600 mb-3">
            Some users find MyFitnessPal too complex, too focused on calories,
            or lacking detailed nutrition insights.
          </p>
          <p className="text-gray-600">
            Other apps may provide better tracking, cleaner interfaces, or
            additional features like fasting or habit-based guidance.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8 rounded-2xl border bg-blue-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">Track your calorie intake</h2>
          <p className="mb-3 text-sm text-gray-600">
            Combine app tracking with a realistic calorie target for better results.
          </p>
          <Link
            href="/tools/weight-loss/calorie-deficit-calculator"
            className="inline-block rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Calculate your target
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">FAQ</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Is MyFitnessPal the best app?</strong><br />
              It is popular, but not always the best choice depending on your needs.
            </p>
            <p>
              <strong>Do I need a tracking app to lose weight?</strong><br />
              No, but it can improve awareness and consistency.
            </p>
            <p>
              <strong>Which app is most accurate?</strong><br />
              Cronometer is often considered one of the most accurate for nutrition tracking.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/best-calorie-tracking-apps" className="rounded-xl border px-4 py-2 text-sm">
            Best Calorie Tracking Apps
          </Link>
          <Link href="/tools/weight-loss/best-weight-loss-apps" className="rounded-xl border px-4 py-2 text-sm">
            Best Weight Loss Apps
          </Link>
          <Link href="/tools/weight-loss/calorie-deficit-calculator" className="rounded-xl border px-4 py-2 text-sm">
            Calorie Deficit Calculator
          </Link>
          <Link href="/tools/weight-loss" className="rounded-xl border px-4 py-2 text-sm">
            Weight Loss Hub
          </Link>
        </div>

      </div>
    </main>
  );
}
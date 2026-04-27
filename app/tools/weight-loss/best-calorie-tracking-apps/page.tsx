import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Calorie Tracking Apps | T4 Atlas",
  description:
    "Compare the best calorie tracking apps for weight loss, nutrition tracking, simplicity, and long-term consistency.",
};

const apps = [
  {
    name: "MyFitnessPal",
    bestFor: "All-around calorie tracking",
    strength: "Large food database and broad recognition",
    watchOutFor: "Some features are behind a paywall",
  },
  {
    name: "Cronometer",
    bestFor: "Detailed nutrition tracking",
    strength: "Strong micronutrient and accuracy focus",
    watchOutFor: "More detailed than some users need",
  },
  {
    name: "Lose It!",
    bestFor: "Simple weight loss tracking",
    strength: "Easy logging and beginner-friendly design",
    watchOutFor: "Less detailed nutrition depth",
  },
  {
    name: "Lifesum",
    bestFor: "Guided lifestyle tracking",
    strength: "Clean interface and diet guidance",
    watchOutFor: "Best features may require premium",
  },
];

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">
          Best Calorie Tracking Apps
        </h1>

        <p className="mb-6 text-gray-600">
          The best calorie tracking app is the one you can use consistently.
          Some people need a large food database, others need simplicity,
          detailed nutrition data, or habit support.
        </p>

        <section className="mb-8 rounded-3xl border bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-600">
            <li>Best all-around: MyFitnessPal</li>
            <li>Best for detail: Cronometer</li>
            <li>Best for simplicity: Lose It!</li>
            <li>Best guided experience: Lifesum</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">App</th>
                  <th className="p-3 text-left">Best for</th>
                  <th className="p-3 text-left">Strength</th>
                  <th className="p-3 text-left">Watch out for</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <tr key={app.name} className="border-t">
                    <td className="p-3 font-medium">{app.name}</td>
                    <td className="p-3">{app.bestFor}</td>
                    <td className="p-3">{app.strength}</td>
                    <td className="p-3">{app.watchOutFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">
            What matters most in a calorie tracking app?
          </h2>
          <p className="mb-3 text-gray-600">
            Accuracy matters, but consistency matters more. A perfect app that
            you stop using after a week is less useful than a simpler app you
            actually use every day.
          </p>
          <p className="text-gray-600">
            The best app should make it easier to understand intake, spot
            patterns, and stay close to your calorie target without making food
            logging feel like a second job.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">
            When calorie tracking works best
          </h2>
          <p className="text-gray-600">
            Calorie tracking works best when paired with a realistic target,
            adequate protein intake, and a sustainable weight loss pace. The app
            should support the plan — not become the entire plan.
          </p>
        </section>

        <section className="mb-8 rounded-2xl border bg-blue-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Calculate your calorie target first
          </h2>
          <p className="mb-3 text-sm text-gray-600">
            Before choosing an app, estimate your daily calorie target for weight
            loss.
          </p>
          <Link
            href="/tools/weight-loss/calorie-deficit-calculator"
            className="inline-block rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Open calculator
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">FAQ</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Do calorie tracking apps help with weight loss?</strong>
              <br />
              They can help by improving awareness and consistency, but weight
              loss still depends on maintaining a calorie deficit.
            </p>
            <p>
              <strong>Which calorie tracking app is best for beginners?</strong>
              <br />
              Lose It! and MyFitnessPal are often easier starting points for
              beginners.
            </p>
            <p>
              <strong>Which app is best for detailed nutrition?</strong>
              <br />
              Cronometer is usually the strongest choice for detailed nutrition
              and micronutrient tracking.
            </p>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/tools/weight-loss/myfitnesspal-alternatives"
            className="rounded-xl border px-4 py-2 text-sm"
          >
            MyFitnessPal Alternatives
          </Link>
          <Link
            href="/tools/weight-loss/best-weight-loss-apps"
            className="rounded-xl border px-4 py-2 text-sm"
          >
            Best Weight Loss Apps
          </Link>
          <Link
            href="/tools/weight-loss/how-many-calories-to-lose-weight"
            className="rounded-xl border px-4 py-2 text-sm"
          >
            Calories to Lose Weight
          </Link>
          <Link
            href="/tools/weight-loss"
            className="rounded-xl border px-4 py-2 text-sm"
          >
            Weight Loss Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
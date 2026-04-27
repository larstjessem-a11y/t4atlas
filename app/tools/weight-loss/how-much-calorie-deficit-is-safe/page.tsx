import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Calorie Deficit Is Safe? | T4 Atlas",
  description:
    "Understand safe calorie deficit ranges for sustainable and effective weight loss.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-4 text-4xl font-semibold">
          How Much Calorie Deficit Is Safe?
        </h1>

        <p className="mb-6 text-gray-600">
          A safe calorie deficit is one that produces steady progress without making the plan too difficult to sustain.
        </p>

        {/* QUICK ANSWER */}
        <section className="mb-8 rounded-3xl border bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Quick answer</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Small: 250–300 kcal/day (slow but sustainable)</li>
            <li>Moderate: ~500 kcal/day (most common)</li>
            <li>Aggressive: 750–1000 kcal/day (harder to sustain)</li>
          </ul>
        </section>

        {/* TABLE */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Deficit</th>
                  <th className="p-3 text-left">Weight loss speed</th>
                  <th className="p-3 text-left">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">250–300 kcal</td>
                  <td className="p-3">Slow</td>
                  <td className="p-3">Easy</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">500 kcal</td>
                  <td className="p-3">Moderate</td>
                  <td className="p-3">Balanced</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">750–1000 kcal</td>
                  <td className="p-3">Fast</td>
                  <td className="p-3">Hard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* EXPLANATION */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">What “safe” actually means</h2>
          <p className="text-gray-600 mb-3">
            A deficit is not unsafe because of the number alone, but because of how it affects your ability to stay consistent.
          </p>
          <p className="text-gray-600">
            If hunger, fatigue, or social constraints make the plan hard to follow, the effective deficit disappears.
          </p>
        </section>

        {/* WHO SHOULD BE CAUTIOUS */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">When to be more cautious</h2>
          <p className="text-gray-600">
            Larger deficits may not be appropriate for people with medical conditions, high stress, or a history of disordered eating.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8 p-6 rounded-2xl border bg-blue-50">
          <h2 className="text-xl font-semibold mb-2">Find your calorie target</h2>
          <p className="text-sm text-gray-600 mb-3">
            Use a calculator to estimate a realistic and sustainable deficit.
          </p>
          <Link
            href="/tools/weight-loss/calorie-deficit-calculator"
            className="inline-block rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Open calculator
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">FAQ</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Is a 500 calorie deficit safe?</strong><br />
              Yes, for most people it is considered a moderate and sustainable approach.
            </p>
            <p>
              <strong>Is a 1000 calorie deficit too much?</strong><br />
              It can work short-term, but is often harder to maintain consistently.
            </p>
            <p>
              <strong>What is the safest way to lose weight?</strong><br />
              A moderate deficit combined with consistency and adequate protein intake.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/500-calorie-deficit-results" className="border px-4 py-2 rounded-xl text-sm">
            500 Calorie Deficit Results
          </Link>
          <Link href="/tools/weight-loss/safe-weight-loss-rate" className="border px-4 py-2 rounded-xl text-sm">
            Safe Weight Loss Rate
          </Link>
          <Link href="/tools/weight-loss" className="border px-4 py-2 rounded-xl text-sm">
            Weight Loss Hub
          </Link>
        </div>

      </div>
    </main>
  );
}
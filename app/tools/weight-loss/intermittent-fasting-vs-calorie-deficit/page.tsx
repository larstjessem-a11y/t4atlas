import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intermittent Fasting vs Calorie Deficit | T4 Atlas",
  description:
    "Compare intermittent fasting and calorie deficit for weight loss, sustainability, and results.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-4 text-4xl font-semibold">
          Intermittent Fasting vs Calorie Deficit
        </h1>

        <p className="mb-6 text-gray-600">
          Intermittent fasting is a meal timing strategy. A calorie deficit is the mechanism that actually causes weight loss.
        </p>

        {/* QUICK ANSWER */}
        <section className="mb-8 rounded-3xl border bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
          <p className="text-gray-600">
            You can lose weight with or without intermittent fasting. What matters is whether you maintain a calorie deficit over time.
          </p>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Intermittent Fasting</th>
                  <th className="p-3 text-left">Calorie Deficit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">What it is</td>
                  <td className="p-3">Meal timing strategy</td>
                  <td className="p-3">Energy balance (eat less than you burn)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Direct cause of weight loss</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Flexibility</td>
                  <td className="p-3">Lower (fixed eating windows)</td>
                  <td className="p-3">Higher (can be adjusted)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Best for</td>
                  <td className="p-3">People who prefer fewer meals</td>
                  <td className="p-3">All weight loss strategies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* EXPLANATION */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">What actually matters</h2>
          <p className="text-gray-600 mb-3">
            Many diets seem different, but they work through the same mechanism: reducing total calorie intake.
          </p>
          <p className="text-gray-600">
            Intermittent fasting can help some people eat less by limiting eating windows, but it is not required for fat loss.
          </p>
        </section>

        {/* WHEN FASTING HELPS */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">When fasting can help</h2>
          <p className="text-gray-600">
            Fasting can be useful if it reduces snacking or simplifies eating patterns. For others, it increases hunger and makes adherence harder.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8 p-6 rounded-2xl border bg-blue-50">
          <h2 className="text-xl font-semibold mb-2">Calculate your calorie deficit</h2>
          <p className="text-sm text-gray-600 mb-3">
            Use a simple calculator to estimate how many calories you need to lose weight.
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
              <strong>Is fasting better than calorie counting?</strong><br />
              Not necessarily. Both can work, but only if they create a calorie deficit.
            </p>
            <p>
              <strong>Can I lose weight without fasting?</strong><br />
              Yes. Most people lose weight without using fasting at all.
            </p>
            <p>
              <strong>Is fasting required for fat loss?</strong><br />
              No. A calorie deficit is required, fasting is optional.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/how-many-calories-to-lose-weight" className="border px-4 py-2 rounded-xl text-sm">
            Calories to Lose Weight
          </Link>
          <Link href="/tools/weight-loss/calorie-deficit-for-fat-loss" className="border px-4 py-2 rounded-xl text-sm">
            Calorie Deficit for Fat Loss
          </Link>
          <Link href="/tools/weight-loss" className="border px-4 py-2 rounded-xl text-sm">
            Weight Loss Hub
          </Link>
        </div>

      </div>
    </main>
  );
}
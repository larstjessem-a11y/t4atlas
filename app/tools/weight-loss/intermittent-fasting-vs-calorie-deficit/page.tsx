import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intermittent Fasting vs Calorie Deficit | T4 Atlas",
  description:
    "Compare intermittent fasting and calorie deficits for weight loss.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">Intermittent Fasting vs Calorie Deficit</h1>
        <p className="mb-8 text-gray-600">
          Intermittent fasting is a meal timing strategy. A calorie deficit is the mechanism that causes weight loss.
        </p>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Bottom line</h2>
          <p className="text-gray-600">
            Fasting can help some people eat fewer calories, but weight loss still depends on maintaining a calorie deficit over time.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/calorie-deficit-calculator" className="rounded-2xl border px-4 py-2 text-sm">Calorie Deficit Calculator</Link>
          <Link href="/tools/weight-loss/how-many-calories-to-lose-weight" className="rounded-2xl border px-4 py-2 text-sm">Calories to Lose Weight</Link>
          <Link href="/tools/weight-loss" className="rounded-2xl border px-4 py-2 text-sm">Weight Loss Hub</Link>
        </div>
      </div>
    </main>
  );
}
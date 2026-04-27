import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Actually Causes Weight Loss? | T4 Atlas",
  description:
    "Understand what actually causes weight loss and how calorie deficit, adherence, and metabolism interact.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">What Actually Causes Weight Loss?</h1>
        <p className="mb-8 text-gray-600">
          Weight loss happens when the body consistently uses more energy than it takes in. The practical challenge is creating that deficit sustainably.
        </p>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">The core mechanism</h2>
          <p className="text-gray-600">
            Diet type, exercise, fasting, and food quality can all matter, but they work mainly by changing calorie intake, energy expenditure, adherence, and satiety.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/calorie-deficit-for-fat-loss" className="rounded-2xl border px-4 py-2 text-sm">Calorie Deficit for Fat Loss</Link>
          <Link href="/tools/weight-loss/calories-vs-macros" className="rounded-2xl border px-4 py-2 text-sm">Calories vs Macros</Link>
          <Link href="/tools/weight-loss" className="rounded-2xl border px-4 py-2 text-sm">Weight Loss Hub</Link>
        </div>
      </div>
    </main>
  );
}
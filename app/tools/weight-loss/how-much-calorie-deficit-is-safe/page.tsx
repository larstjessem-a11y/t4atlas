import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Calorie Deficit Is Safe? | T4 Atlas",
  description:
    "Understand safer calorie deficit ranges for sustainable weight loss.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">How Much Calorie Deficit Is Safe?</h1>
        <p className="mb-8 text-gray-600">
          A safer calorie deficit is usually one that produces progress without making hunger, fatigue, and adherence unmanageable.
        </p>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Practical range</h2>
          <p className="text-gray-600">
            Many people do best with a moderate deficit around 300–500 kcal per day. Larger deficits can work, but are harder to sustain and should be used more cautiously.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/safe-weight-loss-rate" className="rounded-2xl border px-4 py-2 text-sm">Safe Weight Loss Rate</Link>
          <Link href="/tools/weight-loss/500-calorie-deficit-results" className="rounded-2xl border px-4 py-2 text-sm">500 Calorie Deficit Results</Link>
          <Link href="/tools/weight-loss" className="rounded-2xl border px-4 py-2 text-sm">Weight Loss Hub</Link>
        </div>
      </div>
    </main>
  );
}
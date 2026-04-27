import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MyFitnessPal Alternatives | T4 Atlas",
  description:
    "Compare MyFitnessPal alternatives for calorie tracking, nutrition detail, simplicity, and habit building.",
};

const alternatives = [
  "Cronometer",
  "Lose It!",
  "Lifesum",
  "Yazio",
];

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">MyFitnessPal Alternatives</h1>
        <p className="mb-8 text-gray-600">
          MyFitnessPal is popular, but it is not the only option. Some users prefer simpler tracking, more nutrition detail, or a cleaner app experience.
        </p>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Popular alternatives</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            {alternatives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/best-calorie-tracking-apps" className="rounded-2xl border px-4 py-2 text-sm">Best Calorie Tracking Apps</Link>
          <Link href="/tools/weight-loss/best-weight-loss-apps" className="rounded-2xl border px-4 py-2 text-sm">Best Weight Loss Apps</Link>
          <Link href="/tools/weight-loss" className="rounded-2xl border px-4 py-2 text-sm">Weight Loss Hub</Link>
        </div>
      </div>
    </main>
  );
}
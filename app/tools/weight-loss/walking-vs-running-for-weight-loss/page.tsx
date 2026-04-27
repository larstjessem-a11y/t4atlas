import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Walking vs Running for Weight Loss | T4 Atlas",
  description:
    "Compare walking and running for weight loss, calorie burn, adherence, and sustainability.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">Walking vs Running for Weight Loss</h1>
        <p className="mb-8 text-gray-600">
          Running burns more calories per minute, but walking is easier to recover from and often easier to repeat consistently.
        </p>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Best choice</h2>
          <p className="text-gray-600">
            Running is efficient. Walking is sustainable. For many people, the best answer is walking daily plus occasional higher-intensity training.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/tdee-calculator" className="rounded-2xl border px-4 py-2 text-sm">TDEE Calculator</Link>
          <Link href="/tools/weight-loss/calorie-deficit-calculator" className="rounded-2xl border px-4 py-2 text-sm">Calorie Deficit Calculator</Link>
          <Link href="/tools/weight-loss" className="rounded-2xl border px-4 py-2 text-sm">Weight Loss Hub</Link>
        </div>
      </div>
    </main>
  );
}
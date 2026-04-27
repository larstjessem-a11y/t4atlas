import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Walking vs Running for Weight Loss | T4 Atlas",
  description:
    "Compare walking and running for weight loss, calorie burn, adherence, recovery, and sustainability.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">
          Walking vs Running for Weight Loss
        </h1>

        <p className="mb-6 text-gray-600">
          Running burns more calories per minute, but walking is easier to repeat
          consistently. The better choice depends on your fitness level, injury
          risk, recovery, and long-term adherence.
        </p>

        <section className="mb-8 rounded-3xl border bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
          <p className="text-gray-600">
            Running is more time-efficient. Walking is usually more sustainable.
            For many people, the best strategy is regular walking plus some
            higher-intensity exercise when recovery allows.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Walking</th>
                  <th className="p-3 text-left">Running</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Calories per minute</td>
                  <td className="p-3">Lower</td>
                  <td className="p-3">Higher</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Recovery demand</td>
                  <td className="p-3">Low</td>
                  <td className="p-3">Higher</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Injury risk</td>
                  <td className="p-3">Lower</td>
                  <td className="p-3">Higher</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Best for</td>
                  <td className="p-3">Consistency and beginners</td>
                  <td className="p-3">Time-efficient calorie burn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">When walking is better</h2>
          <p className="text-gray-600">
            Walking is often better if you are just starting out, have joint pain,
            recover poorly from intense exercise, or want a daily habit that does
            not increase hunger or fatigue too much.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">When running is better</h2>
          <p className="text-gray-600">
            Running can be better if you are already conditioned, tolerate impact
            well, and want to burn more calories in less time.
          </p>
        </section>

        <section className="mb-8 rounded-2xl border bg-blue-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">Estimate your daily calorie burn</h2>
          <p className="mb-3 text-sm text-gray-600">
            Use the TDEE calculator to estimate how activity affects your calorie needs.
          </p>
          <Link
            href="/tools/weight-loss/tdee-calculator"
            className="inline-block rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Open TDEE Calculator
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">FAQ</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Is walking enough for weight loss?</strong>
              <br />
              Yes, if it helps create or support a calorie deficit over time.
            </p>
            <p>
              <strong>Does running burn more calories?</strong>
              <br />
              Usually yes, per minute. But walking may be easier to do more often.
            </p>
            <p>
              <strong>Which is better for beginners?</strong>
              <br />
              Walking is usually the better starting point for most beginners.
            </p>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/tdee-calculator" className="rounded-xl border px-4 py-2 text-sm">
            TDEE Calculator
          </Link>
          <Link href="/tools/weight-loss/calorie-deficit-calculator" className="rounded-xl border px-4 py-2 text-sm">
            Calorie Deficit Calculator
          </Link>
          <Link href="/tools/weight-loss/how-fast-can-you-lose-weight" className="rounded-xl border px-4 py-2 text-sm">
            How Fast Can You Lose Weight
          </Link>
          <Link href="/tools/weight-loss" className="rounded-xl border px-4 py-2 text-sm">
            Weight Loss Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
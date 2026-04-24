import type { Metadata } from "next";
import Link from "next/link";
import WeightLossCalorieDeficitCalculator from "@/components/WeightLossCalorieDeficitCalculator";

export const metadata: Metadata = {
  title: "How Many Calories to Lose 1 kg? | T4 Atlas",
  description:
    "Find out roughly how many calories it takes to lose 1 kg, and how daily calorie deficits translate into weekly fat loss.",
};

export default function HowManyCaloriesToLose1KgPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/weight-loss" className="hover:text-gray-900">
              Weight Loss
            </Link>
            <span>→</span>
            <span>How Many Calories to Lose 1 kg</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Calorie deficit
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            How Many Calories Does It Take to Lose 1 kg?
          </h1>

          <p className="max-w-3xl text-gray-600">
            A common planning estimate is that losing 1 kg of body fat requires
            a cumulative calorie deficit of roughly 7700 kcal. In practice, real
            weight loss is rarely perfectly linear, but this is a useful rule of
            thumb for planning.
          </p>
        </div>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Quick answer</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                Rough total deficit
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">
                7700
              </div>
              <div className="mt-1 text-sm text-gray-500">kcal</div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                500 kcal/day
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">
                ~15
              </div>
              <div className="mt-1 text-sm text-gray-500">days per 1 kg</div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                1000 kcal/day
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">
                ~8
              </div>
              <div className="mt-1 text-sm text-gray-500">days per 1 kg</div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Calorie deficit calculator
          </h2>

          <WeightLossCalorieDeficitCalculator
            initialSex="male"
            initialAge="35"
            initialHeightCm="180"
            initialWeightKg="90"
            initialActivityLevel="moderate"
            initialWeeklyLossKg="1"
          />
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            What 7700 kcal actually means
          </h2>

          <p className="text-gray-600 mb-3">
            The 7700 kcal rule is a simplified estimate based on the energy
            stored in 1 kg of body fat. It is useful for planning, but your body
            is not a perfectly static machine.
          </p>

          <p className="text-gray-600">
            Water retention, adherence, food intake accuracy, training, sleep,
            and metabolic adaptation all affect what happens in real life.
          </p>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Example daily deficits
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>250 kcal/day deficit: about 31 days per 1 kg</li>
            <li>500 kcal/day deficit: about 15 days per 1 kg</li>
            <li>750 kcal/day deficit: about 10 days per 1 kg</li>
            <li>1000 kcal/day deficit: about 8 days per 1 kg</li>
          </ul>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">Common mistakes</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Treating the 7700 kcal rule as exact rather than approximate</li>
            <li>Ignoring water-weight fluctuations</li>
            <li>Using a deficit that is too aggressive to sustain</li>
            <li>Expecting the same rate of loss forever</li>
          </ul>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/weight-loss/how-many-calories-to-lose-weight"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              How Many Calories to Lose Weight
            </Link>
            <Link
              href="/tools/weight-loss/calorie-deficit-calculator"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Calorie Deficit Calculator
            </Link>
            <Link
              href="/tools/weight-loss/lose-5-kg-timeline"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Lose 5 kg timeline
            </Link>
            <Link
              href="/tools/weight-loss/lose-10-kg-timeline"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Lose 10 kg timeline
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
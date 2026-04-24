import type { Metadata } from "next";
import Link from "next/link";
import WeightLossCalorieDeficitCalculator from "@/components/WeightLossCalorieDeficitCalculator";

export const metadata: Metadata = {
  title: "500 Calorie Deficit Results | T4 Atlas",
  description:
    "See what results a 500 calorie deficit may produce over time, including weekly weight loss estimates and realistic expectations.",
};

export default function FiveHundredCalorieDeficitResultsPage() {
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
            <span>500 Calorie Deficit Results</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Calorie deficit results
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            500 Calorie Deficit Results
          </h1>

          <p className="max-w-3xl text-gray-600">
            A 500 calorie deficit is one of the most commonly recommended starting
            points for weight loss. It is often large enough to create meaningful
            progress, but still small enough to be sustainable for many people.
          </p>
        </div>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Quick answer</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                Daily deficit
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">
                500
              </div>
              <div className="mt-1 text-sm text-gray-500">kcal/day</div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                Weekly deficit
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">
                3500
              </div>
              <div className="mt-1 text-sm text-gray-500">kcal/week</div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                Typical result
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">
                ~0.5
              </div>
              <div className="mt-1 text-sm text-gray-500">kg/week</div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Calculator</h2>

          <WeightLossCalorieDeficitCalculator
            initialSex="male"
            initialAge="35"
            initialHeightCm="180"
            initialWeightKg="90"
            initialActivityLevel="moderate"
            initialWeeklyLossKg="0.5"
          />
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            What results can you expect?
          </h2>

          <p className="text-gray-600 mb-3">
            In rough planning terms, a 500 calorie deficit per day creates a
            weekly deficit of about 3500 kcal. That often corresponds to around
            0.4–0.5 kg of body weight loss per week.
          </p>

          <p className="text-gray-600">
            That makes it one of the most widely used “middle path” approaches:
            not too slow to be discouraging, but not so aggressive that it becomes
            difficult to sustain for most people.
          </p>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">What 500 kcal/day can look like</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>eating a bit less while maintaining activity</li>
            <li>removing energy-dense snacks and liquid calories</li>
            <li>combining moderate dietary changes with more walking or training</li>
            <li>tightening portions without extreme restriction</li>
          </ul>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">Common mistakes</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Assuming 500 kcal/day guarantees perfectly linear results</li>
            <li>Ignoring weekends, snacks, and liquid calories</li>
            <li>Overestimating calorie burn from exercise</li>
            <li>Expecting the same rate of loss indefinitely</li>
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
              href="/tools/weight-loss/how-many-calories-to-lose-1-kg"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              How Many Calories to Lose 1 kg
            </Link>
            <Link
              href="/tools/weight-loss/calorie-deficit-calculator"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Calorie Deficit Calculator
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
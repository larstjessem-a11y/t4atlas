import type { Metadata } from "next";
import Link from "next/link";
import WeightLossTimelineCalculator from "@/components/WeightLossTimelineCalculator";

export const metadata: Metadata = {
  title: "How Long to Lose 5 kg | Timeline Calculator",
  description:
    "Estimate how long it may take to lose 5 kg based on calorie deficit, weight, and consistency.",
};

export default function Lose5KgTimelinePage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">

        {/* HERO */}
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">

          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools">Tools</Link>
            <span>→</span>
            <Link href="/tools/weight-loss">Weight Loss</Link>
            <span>→</span>
            <span>Lose 5 kg Timeline</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Weight loss timeline
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            How Long Does It Take to Lose 5 kg?
          </h1>

          <p className="max-w-3xl text-gray-600">
            Losing 5 kg is often achievable within a few months with a consistent
            calorie deficit. For many people, this is a realistic and sustainable
            short-term weight loss goal.
          </p>
        </div>

        {/* CALCULATOR */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Timeline calculator
          </h2>

          <WeightLossTimelineCalculator
            initialCurrentWeight="80"
            initialTargetWeight="75"
            initialDailyDeficit="500"
          />
        </section>

        {/* QUICK ANSWER */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Typical timeline to lose 5 kg
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>500 kcal daily deficit: ~10 weeks</li>
            <li>750 kcal daily deficit: ~7–8 weeks</li>
            <li>1000 kcal daily deficit: ~5–6 weeks</li>
          </ul>

          <p className="mt-4 text-gray-600">
            This is often considered a realistic timeframe for sustainable weight
            loss without excessive restriction.
          </p>
        </section>

        {/* EXPLANATION */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Why 5 kg is a realistic goal
          </h2>

          <p className="text-gray-600 mb-3">
            Losing 5 kg requires a total energy deficit of roughly 35,000–40,000 kcal.
            Spread over weeks, this becomes manageable with consistent diet and activity.
          </p>

          <p className="text-gray-600">
            Compared to larger weight loss targets, this level is easier to sustain
            and often leads to better long-term adherence.
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Common mistakes
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Trying to lose 5 kg too quickly</li>
            <li>Overestimating calorie burn</li>
            <li>Inconsistent diet adherence</li>
            <li>Ignoring daily habits and routine</li>
          </ul>
        </section>

        {/* RELATED LINKS */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Related tools
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link href="/tools/weight-loss/lose-10-kg-timeline" className="border px-4 py-2 rounded-xl">
              Lose 10 kg timeline
            </Link>
            <Link href="/tools/weight-loss/calorie-deficit-calculator" className="border px-4 py-2 rounded-xl">
              Calorie Deficit Calculator
            </Link>
            <Link href="/tools/weight-loss/tdee-calculator" className="border px-4 py-2 rounded-xl">
              TDEE Calculator
            </Link>
            <Link href="/tools/weight-loss/bmi-calculator" className="border px-4 py-2 rounded-xl">
              BMI Calculator
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
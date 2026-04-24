import type { Metadata } from "next";
import Link from "next/link";
import WeightLossTimelineCalculator from "@/components/WeightLossTimelineCalculator";

export const metadata: Metadata = {
  title: "How Long to Lose 10 kg | Timeline Calculator",
  description:
    "Estimate how long it may take to lose 10 kg based on daily calorie deficit and weight loss pace.",
};

export default function Lose10KgTimelinePage() {
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
            <span>Lose 10 kg Timeline</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Weight loss timeline
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            How Long Does It Take to Lose 10 kg?
          </h1>

          <p className="max-w-3xl text-gray-600">
            Losing 10 kg usually takes time, consistency, and a realistic calorie
            deficit. For most people, the timeline is measured in months rather
            than weeks.
          </p>
        </div>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Timeline calculator</h2>

          <WeightLossTimelineCalculator
            initialCurrentWeight="90"
            initialTargetWeight="80"
            initialDailyDeficit="500"
          />
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Typical timeline to lose 10 kg
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>500 kcal daily deficit: about 20 weeks</li>
            <li>750 kcal daily deficit: about 13–14 weeks</li>
            <li>1000 kcal daily deficit: about 10–11 weeks</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Faster weight loss is possible, but it often becomes harder to
            sustain and may increase fatigue, hunger, and muscle loss risk.
          </p>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">Why 10 kg takes time</h2>

          <p className="text-gray-600 mb-3">
            A rough planning assumption is that 1 kg of body fat corresponds to
            around 7700 kcal. That means losing 10 kg requires a substantial
            cumulative energy deficit over time.
          </p>

          <p className="text-gray-600">
            In real life, progress is rarely perfectly linear. Water shifts,
            adherence, activity changes, and metabolic adaptation all affect the
            actual timeline.
          </p>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">Common mistakes</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Trying to lose 10 kg too quickly</li>
            <li>Using an unrealistic calorie deficit</li>
            <li>Ignoring consistency and adherence</li>
            <li>Expecting a perfectly straight-line result</li>
          </ul>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/weight-loss/calorie-deficit-calculator"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Calorie Deficit Calculator
            </Link>
            <Link
              href="/tools/weight-loss/tdee-calculator"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              TDEE Calculator
            </Link>
            <Link
              href="/tools/weight-loss/bmi-calculator"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              BMI Calculator
            </Link>
            <Link
              href="/tools/weight-loss/weight-loss-timeline-calculator"
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Weight Loss Timeline Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
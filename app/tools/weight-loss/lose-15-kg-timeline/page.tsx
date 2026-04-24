import type { Metadata } from "next";
import Link from "next/link";
import WeightLossTimelineCalculator from "@/components/WeightLossTimelineCalculator";

export const metadata: Metadata = {
  title: "How Long to Lose 15 kg | Timeline Calculator",
  description:
    "Estimate how long it may take to lose 15 kg based on calorie deficit, body weight, and consistency.",
};

export default function Lose15KgTimelinePage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools">Tools</Link>
            <span>→</span>
            <Link href="/tools/weight-loss">Weight Loss</Link>
            <span>→</span>
            <span>Lose 15 kg Timeline</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Weight loss timeline
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            How Long Does It Take to Lose 15 kg?
          </h1>

          <p className="max-w-3xl text-gray-600">
            Losing 15 kg is a meaningful long-term goal for most people. It
            usually requires several months of consistency, a sustainable calorie
            deficit, and realistic expectations around pace and adherence.
          </p>
        </div>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Timeline calculator</h2>

          <WeightLossTimelineCalculator
            initialCurrentWeight="95"
            initialTargetWeight="80"
            initialDailyDeficit="500"
          />
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Typical timeline to lose 15 kg
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>500 kcal daily deficit: ~30 weeks</li>
            <li>750 kcal daily deficit: ~20–21 weeks</li>
            <li>1000 kcal daily deficit: ~15–16 weeks</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Larger weight loss goals often look simple on paper, but in real life
            they depend heavily on consistency over time.
          </p>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">Why 15 kg takes time</h2>

          <p className="text-gray-600 mb-3">
            A 15 kg weight loss target implies a very large cumulative energy
            deficit. That makes sustainability, hunger management, and daily
            habits far more important than short bursts of motivation.
          </p>

          <p className="text-gray-600">
            For most people, this kind of goal is best treated as a medium-term
            project rather than a quick fix.
          </p>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">Common mistakes</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Choosing an overly aggressive calorie deficit too early</li>
            <li>Trying to rely on motivation instead of systems and routine</li>
            <li>Expecting perfectly linear progress over many months</li>
            <li>Not adjusting for adherence fatigue over time</li>
          </ul>
        </section>

        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>

          <div className="flex flex-wrap gap-3">
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
          </div>
        </section>
      </div>
    </main>
  );
}
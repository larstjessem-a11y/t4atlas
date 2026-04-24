import type { Metadata } from "next";
import Link from "next/link";
import WeightLossTdeeCalculator from "@/components/WeightLossTdeeCalculator";

export const metadata: Metadata = {
  title: "How Many Calories to Lose Weight | Calculator",
  description:
    "Find out how many calories you need to lose weight based on your TDEE and desired calorie deficit.",
};

export default function HowManyCaloriesToLoseWeightPage() {
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
            <span>Calories to Lose Weight</span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            How Many Calories Do You Need to Lose Weight?
          </h1>

          <p className="max-w-3xl text-gray-600">
            To lose weight, you need to eat fewer calories than your body burns.
            This is called a calorie deficit. The exact number depends on your
            metabolism, activity level, and how fast you want to lose weight.
          </p>
        </div>

        {/* CALCULATOR */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Calorie needs calculator
          </h2>

          <WeightLossTdeeCalculator />
        </section>

        {/* QUICK ANSWER */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Quick answer
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Maintenance calories = your TDEE</li>
            <li>Weight loss = TDEE minus calorie deficit</li>
            <li>Typical deficit: 300–1000 kcal per day</li>
          </ul>
        </section>

        {/* DEFICIT EXAMPLES */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Example calorie deficits
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>300 kcal deficit → slow, sustainable fat loss</li>
            <li>500 kcal deficit → moderate fat loss (~0.5 kg/week)</li>
            <li>750 kcal deficit → faster progress</li>
            <li>1000 kcal deficit → aggressive, harder to sustain</li>
          </ul>
        </section>

        {/* EXPLANATION */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            How calorie deficits work
          </h2>

          <p className="text-gray-600 mb-3">
            Your body requires a certain number of calories each day to maintain
            weight. This is called your Total Daily Energy Expenditure (TDEE).
          </p>

          <p className="text-gray-600">
            When you consistently eat fewer calories than your TDEE, your body
            uses stored energy — primarily fat — to make up the difference.
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8 mb-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Common mistakes
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Choosing a deficit that is too aggressive</li>
            <li>Ignoring activity level</li>
            <li>Underestimating calorie intake</li>
            <li>Expecting linear progress</li>
          </ul>
        </section>
<section className="mt-6">
  <h2 className="text-xl font-semibold mb-3">FAQ</h2>
  <div className="space-y-3 text-sm text-gray-600">
    <p><strong>How many calories should I eat to lose weight?</strong><br/>Typically 300–500 kcal below your TDEE.</p>
    <p><strong>Is a 500 calorie deficit enough?</strong><br/>Yes, for most people it produces steady fat loss.</p>
    <p><strong>How fast can I lose weight?</strong><br/>Usually 0.5 kg per week is realistic.</p>
  </div>
</section>
        {/* RELATED */}
        <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Related tools
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link href="/tools/weight-loss/calorie-deficit-calculator" className="border px-4 py-2 rounded-xl">
              Calorie Deficit Calculator
            </Link>
            <Link href="/tools/weight-loss/lose-5-kg-timeline" className="border px-4 py-2 rounded-xl">
              Lose 5 kg timeline
            </Link>
            <Link href="/tools/weight-loss/lose-10-kg-timeline" className="border px-4 py-2 rounded-xl">
              Lose 10 kg timeline
            </Link>
            <Link href="/tools/weight-loss/lose-15-kg-timeline" className="border px-4 py-2 rounded-xl">
              Lose 15 kg timeline
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
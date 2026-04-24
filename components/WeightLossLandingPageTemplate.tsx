import Link from "next/link";
import WeightLossCalorieDeficitCalculator from "@/components/WeightLossCalorieDeficitCalculator";
import WeightLossTimelineCalculator from "@/components/WeightLossTimelineCalculator";
import WeightLossTdeeCalculator from "@/components/WeightLossTdeeCalculator";
import WeightLossBmiCalculator from "@/components/WeightLossBmiCalculator";
import type { WeightLossLandingPage } from "@/data/weightLossLandingPages";

export default function WeightLossLandingPageTemplate({
  page,
}: {
  page: WeightLossLandingPage;
}) {
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
            <span>{page.title}</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {page.label}
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {page.title}
          </h1>

          <p className="max-w-3xl text-gray-600">{page.intro}</p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">
              {page.quickAnswerTitle}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {page.quickAnswerItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {page.calculatorType ? (
            <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl font-semibold">Calculator</h2>

              {page.calculatorType === "calorie-deficit" ? (
                <WeightLossCalorieDeficitCalculator
                  initialSex={page.calculatorPrefill?.sex}
                  initialAge={page.calculatorPrefill?.age}
                  initialHeightCm={page.calculatorPrefill?.heightCm}
                  initialWeightKg={page.calculatorPrefill?.weightKg}
                  initialActivityLevel={page.calculatorPrefill?.activityLevel}
                  initialWeeklyLossKg={page.calculatorPrefill?.weeklyLossKg}
                />
              ) : page.calculatorType === "timeline" ? (
                <WeightLossTimelineCalculator
                  initialCurrentWeight={page.calculatorPrefill?.currentWeight}
                  initialTargetWeight={page.calculatorPrefill?.targetWeight}
                  initialDailyDeficit={page.calculatorPrefill?.dailyDeficit}
                />
              ) : page.calculatorType === "tdee" ? (
                <WeightLossTdeeCalculator />
              ) : page.calculatorType === "bmi" ? (
                <WeightLossBmiCalculator />
              ) : null}
            </section>
          ) : null}

          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>
              <p className="text-gray-600">{section.body}</p>
            </section>
          ))}

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>

            <div className="flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
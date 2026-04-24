import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WeightLossBmiCalculator from "@/components/WeightLossBmiCalculator";
import WeightLossTdeeCalculator from "@/components/WeightLossTdeeCalculator";
import { weightLossCalculators } from "@/data/weightLossCalculators";
import { weightLossScenarios } from "@/data/weightLossScenarios";
import WeightLossCalorieDeficitCalculator from "@/components/WeightLossCalorieDeficitCalculator";
import WeightLossTimelineCalculator from "@/components/WeightLossTimelineCalculator";
import TrustBlock from "@/components/TrustBlock";
import WeightLossLandingPageTemplate from "@/components/WeightLossLandingPageTemplate";
import { weightLossLandingPages } from "@/data/weightLossLandingPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const calculatorParams = weightLossCalculators.map((item) => ({
    slug: item.slug,
  }));

  const scenarioParams = weightLossScenarios.map((item) => ({
    slug: item.slug,
  }));

  const landingParams = weightLossLandingPages.map((item) => ({
  slug: item.slug,
}));

return [...calculatorParams, ...scenarioParams, ...landingParams];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const calculator = weightLossCalculators.find((item) => item.slug === slug);
  if (calculator) {
    return {
      title: calculator.seoTitle,
      description: calculator.seoDescription,
    };
  }

  const scenario = weightLossScenarios.find((item) => item.slug === slug);
  if (scenario) {
    return {
      title: scenario.seoTitle,
      description: scenario.seoDescription,
    };
  }
const landingPage = weightLossLandingPages.find((item) => item.slug === slug);
if (landingPage) {
  return {
    title: landingPage.seoTitle,
    description: landingPage.seoDescription,
  };
}

  return {
    title: "Weight Loss Tools | T4 Atlas",
    description: "Explore weight loss calculators, scenarios, and guides.",
  };
}

export default async function WeightLossDynamicPage({ params }: PageProps) {
  const { slug } = await params;

  const calculator = weightLossCalculators.find((item) => item.slug === slug);

  if (calculator) {
    const relatedScenarios = weightLossScenarios.filter(
      (item) => item.calculatorSlug === calculator.slug
    );

    return (
      <WeightLossCalculatorPage
        calculator={calculator}
        relatedScenarios={relatedScenarios}
      />
    );
  }

  const scenario = weightLossScenarios.find((item) => item.slug === slug);

  if (scenario) {
    const parentCalculator = weightLossCalculators.find(
      (item) => item.slug === scenario.calculatorSlug
    );

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
              <span>{scenario.title}</span>
            </div>

            <div className="mb-3">
              <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                Weight loss scenario
              </span>
            </div>

            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              {scenario.title}
            </h1>

            <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
              {scenario.intro}
            </p>
          </div>

          <div className="grid gap-6">
          {parentCalculator?.type === "timeline" ? (
  <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
    <h2 className="mb-3 text-2xl font-semibold">Scenario calculator</h2>
    <WeightLossTimelineCalculator
      initialCurrentWeight={scenario.prefill?.currentWeight}
      initialTargetWeight={scenario.prefill?.targetWeight}
      initialDailyDeficit={scenario.prefill?.dailyDeficit}
    />
  </section>
) : parentCalculator?.type === "calorie-deficit" ? (
  <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
    <h2 className="mb-3 text-2xl font-semibold">Scenario calculator</h2>
    <WeightLossCalorieDeficitCalculator
      initialSex={scenario.prefill?.sex}
      initialAge={scenario.prefill?.age}
      initialHeightCm={scenario.prefill?.heightCm}
      initialWeightKg={scenario.prefill?.weightKg}
      initialActivityLevel={scenario.prefill?.activityLevel}
      initialWeeklyLossKg={scenario.prefill?.weeklyLossKg}
    />
  </section>
) : (
  <>
    <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-3 text-2xl font-semibold">Scenario setup</h2>
      <p className="text-gray-600">
        This scenario is linked to{" "}
        {parentCalculator ? parentCalculator.title : "a calculator"} and is
        ready for prefilled calculator logic.
      </p>
    </section>

    <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-3 text-2xl font-semibold">Prefill data</h2>
      <pre className="overflow-x-auto rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
        {JSON.stringify(scenario.prefill ?? {}, null, 2)}
      </pre>
    </section>
  </>
)}
            {parentCalculator ? (
              <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-3 text-2xl font-semibold">Related calculator</h2>
                <Link
                  href={`/tools/weight-loss/${parentCalculator.slug}`}
                  className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  {parentCalculator.title}
                </Link>
              </section>
            ) : null}
          </div>
        </div>
      </main>
    );
  }
  const landingPage = weightLossLandingPages.find((item) => item.slug === slug);

  if (landingPage) {
    return <WeightLossLandingPageTemplate page={landingPage} />;
  }
  notFound();
}

function WeightLossCalculatorPage({
  calculator,
  relatedScenarios,
}: {
  calculator: (typeof weightLossCalculators)[number];
  relatedScenarios: (typeof weightLossScenarios)[number][];
}) {
  const isBmi = calculator.type === "bmi";

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
            <span>{calculator.title}</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Weight loss calculator
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {calculator.title}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            {calculator.intro}
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Calculator</h2>

           {isBmi ? (
  <WeightLossBmiCalculator />
) : calculator.type === "bmi" ? (
  <WeightLossBmiCalculator />
) : calculator.type === "tdee" ? (
  <WeightLossTdeeCalculator />
) : calculator.type === "calorie-deficit" ? (
  <WeightLossCalorieDeficitCalculator />
) : calculator.type === "timeline" ? (
  <WeightLossTimelineCalculator />
) : (
  <p className="text-gray-600">
    Calculator UI placeholder. BMI, TDEE, and calorie deficit are now live
    pilots. The remaining calculator types will be connected next using the
    same route.
  </p>
)}
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">About this calculator</h2>
            <p className="text-gray-600">{calculator.description}</p>
          </section>

          {relatedScenarios.length > 0 ? (
            <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">Popular scenarios</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedScenarios.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/weight-loss/${item.slug}`}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
<section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
  <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>

  <div className="flex flex-wrap gap-3">
    <Link
      href="/tools/weight-loss/bmi-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      BMI Calculator
    </Link>

    <Link
      href="/tools/weight-loss/tdee-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      TDEE Calculator
    </Link>

    <Link
      href="/tools/weight-loss/calorie-deficit-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Calorie Deficit Calculator
    </Link>

    <Link
      href="/tools/weight-loss/weight-loss-timeline-calculator"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Weight Loss Timeline Calculator
    </Link>

    <Link
      href="/tools/weight-loss/best-weight-loss-apps"
      className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Best Weight Loss Apps
    </Link>
  </div>
</section>
        </div>
      </div>
<TrustBlock />
    </main>
  );
}
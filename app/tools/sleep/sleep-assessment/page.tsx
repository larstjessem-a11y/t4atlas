import SleepAssessmentEngine from "@/components/SleepAssessmentEngine";

export const metadata = {
  title: "Sleep Assessment Tool – Find Your Sleep Problem Type | T4 Atlas",
  description:
    "Answer a few simple questions about insomnia, sleep schedule, stress, caffeine, and possible sleep apnea warning signs.",
};

export default function SleepAssessmentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <p className="text-sm font-medium text-gray-500">Sleep Tool</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Sleep Assessment Tool
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700">
          Answer a few questions to understand which sleep pattern best matches
          your situation: insomnia-type sleep problems, circadian rhythm
          disruption, stress-related sleep difficulty, or possible sleep apnea
          warning signs.
        </p>
      </section>

      <section className="rounded-2xl border bg-white p-4 shadow-sm">
        <SleepAssessmentEngine />
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">What this tool can help with</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            <li>Difficulty falling asleep</li>
            <li>Waking during the night</li>
            <li>Irregular sleep schedules</li>
            <li>Stress or worry at bedtime</li>
            <li>Possible sleep apnea warning signs</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Important note</h2>
          <p className="mt-3 text-gray-700">
            This tool does not diagnose medical conditions. If you have loud
            snoring, witnessed breathing pauses, gasping, chest pain, severe
            daytime sleepiness, or sudden changes in sleep, consider speaking
            with a healthcare professional.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border p-5">
        <h2 className="text-lg font-semibold">Recommended next steps</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <a
            href="/tools/sleep/sleep-plan-generator"
            className="rounded-xl border p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold">Sleep Plan Generator</h3>
            <p className="mt-2 text-sm text-gray-600">
              Build a simple sleep plan based on wake time, bedtime, caffeine,
              and light exposure.
            </p>
          </a>

          <a
            href="/tools/sleep/sleep-restriction-calculator"
            className="rounded-xl border p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold">Sleep Restriction Calculator</h3>
            <p className="mt-2 text-sm text-gray-600">
              Estimate a CBT-I inspired sleep window based on actual sleep time.
            </p>
          </a>

          <a
            href="/tools/sleep/sleep-apnea-symptoms-test"
            className="rounded-xl border p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold">Sleep Apnea Symptoms Test</h3>
            <p className="mt-2 text-sm text-gray-600">
              Check whether your answers include warning signs that deserve
              medical follow-up.
            </p>
          </a>
        </div>
      </section>

      <section className="mt-10 border-t pt-6 text-sm text-gray-500">
        <p>
          Ad placement placeholder: top/mid/bottom ad slots can be added here
          once traffic reaches monetization threshold.
        </p>
      </section>
    </main>
  );
}
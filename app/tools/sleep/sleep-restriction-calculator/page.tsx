export const metadata = {
  title: "Sleep Restriction Calculator | T4 Atlas",
  description:
    "Estimate a CBT-I inspired sleep window based on average sleep time and wake time.",
};

export default function SleepRestrictionCalculatorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <p className="text-sm font-medium text-gray-500">Sleep Tool</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Sleep Restriction Calculator
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700">
          Estimate a conservative sleep window inspired by CBT-I principles. This
          is an educational tool, not medical treatment.
        </p>
      </section>

      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">MVP calculation rule</h2>
        <p className="mt-3 text-gray-700">
          A simple CBT-I inspired approach starts with your actual average sleep
          time, then creates a stable sleep window around a fixed wake time.
        </p>

        <div className="mt-5 rounded-xl border bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            Example: if you sleep about 6 hours per night and need to wake at
            07:00, your initial sleep window could be approximately 01:00–07:00.
          </p>
        </div>

        <p className="mt-5 text-sm text-gray-600">
          For safety, sleep restriction should be used carefully. People with
          bipolar disorder, epilepsy, severe daytime sleepiness, high-risk jobs,
          or suspected sleep apnea should seek professional advice before using
          restrictive sleep scheduling.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border p-5">
        <h2 className="text-lg font-semibold">Recommended next step</h2>
        <p className="mt-3 text-gray-700">
          Start with the Sleep Assessment Tool to check whether your pattern
          looks more like insomnia, circadian disruption, stress-related sleep
          difficulty, or possible apnea risk.
        </p>
        <a
          href="/tools/sleep/sleep-assessment"
          className="mt-5 inline-block rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Take the Sleep Assessment
        </a>
      </section>
    </main>
  );
}
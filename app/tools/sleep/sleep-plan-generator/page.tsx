export const metadata = {
  title: "Sleep Plan Generator | T4 Atlas",
  description:
    "Create a simple sleep plan based on wake time, bedtime, caffeine timing, light exposure, and evening routine.",
};

export default function SleepPlanGeneratorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <p className="text-sm font-medium text-gray-500">Sleep Tool</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Sleep Plan Generator
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700">
          Build a practical sleep plan using wake time, caffeine cutoff, morning
          light, and a realistic bedtime window.
        </p>
      </section>

      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">MVP sleep plan</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Wake time</h3>
            <p className="mt-2 text-sm text-gray-600">
              Choose one wake time and keep it stable for 7 days, including
              weekends if possible.
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Morning light</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get outdoor light or bright indoor light within the first hour
              after waking.
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Caffeine cutoff</h3>
            <p className="mt-2 text-sm text-gray-600">
              Avoid caffeine in the late afternoon and evening. For many people,
              early afternoon is a useful cutoff.
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Bedtime window</h3>
            <p className="mt-2 text-sm text-gray-600">
              Do not go to bed just because you want more sleep. Go when sleepy
              and keep the wake time fixed.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border p-5">
        <h2 className="text-lg font-semibold">Recommended next step</h2>
        <p className="mt-3 text-gray-700">
          If you are not sure what type of sleep problem you have, start with the
          Sleep Assessment Tool.
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
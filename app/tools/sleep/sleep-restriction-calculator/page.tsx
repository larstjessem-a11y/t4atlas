import Link from "next/link";
import SleepRestrictionCalculator from "@/components/SleepRestrictionCalculator";

export const metadata = {
  title: "Sleep Restriction Calculator | T4 Atlas",
  description:
    "Estimate a CBT-I inspired sleep window based on average sleep time and fixed wake time. Educational tool with safety guidance.",
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
          Estimate a conservative sleep window inspired by CBT-I principles.
          This is an educational tool, not medical treatment.
        </p>
      </section>

      <SleepRestrictionCalculator />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">What is sleep restriction?</h2>
          <p className="mt-3 text-gray-700">
            Sleep restriction is a CBT-I technique that limits time in bed to
            better match actual sleep time. The aim is to improve sleep
            efficiency and reduce long periods awake in bed.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Important safety note</h2>
          <p className="mt-3 text-gray-700">
            Be careful with restrictive sleep scheduling if you have bipolar
            disorder, epilepsy, severe daytime sleepiness, suspected sleep apnea,
            safety-critical work, or significant medical illness.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Example</h2>
        <p className="mt-3 text-gray-700">
          If you sleep about 6 hours per night and need to wake at 07:00, a
          conservative starting sleep window could be around 01:00–07:00. This
          should be adjusted carefully based on sleepiness, safety, and actual
          response.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Recommended next steps</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Link
            href="/tools/sleep/sleep-assessment"
            className="rounded-xl border p-4 hover:bg-gray-50"
          >
            Take the Sleep Assessment
          </Link>
          <Link
            href="/tools/sleep/sleep-plan-generator"
            className="rounded-xl border p-4 hover:bg-gray-50"
          >
            Build a Sleep Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
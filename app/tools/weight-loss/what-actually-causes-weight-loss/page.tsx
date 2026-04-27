import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Actually Causes Weight Loss? | T4 Atlas",
  description:
    "Understand what actually causes weight loss, including calorie deficit, adherence, activity, metabolism, and diet quality.",
};

export default function Page() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-semibold">
          What Actually Causes Weight Loss?
        </h1>

        <p className="mb-6 text-gray-600">
          Weight loss happens when your body uses more energy than you take in over time.
          The practical challenge is not knowing this — it is creating a deficit you can
          actually maintain.
        </p>

        <section className="mb-8 rounded-3xl border bg-gray-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Short answer</h2>
          <p className="text-gray-600">
            A sustained calorie deficit causes weight loss. Diet type, exercise,
            fasting, protein intake, and food quality matter mainly because they affect
            calorie intake, energy use, hunger, and adherence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">What affects weight loss?</h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Calorie deficit</td>
                  <td className="p-3">Core mechanism</td>
                  <td className="p-3">Creates the energy gap needed for weight loss</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Protein</td>
                  <td className="p-3">Supports body composition</td>
                  <td className="p-3">Helps preserve muscle and reduce hunger</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Activity</td>
                  <td className="p-3">Increases energy use</td>
                  <td className="p-3">Can make the deficit easier to maintain</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Sleep and stress</td>
                  <td className="p-3">Affects adherence</td>
                  <td className="p-3">Influences hunger, cravings, and consistency</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Diet structure</td>
                  <td className="p-3">Behavioral tool</td>
                  <td className="p-3">Helps some people eat fewer calories consistently</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Why different diets can all work
          </h2>
          <p className="mb-3 text-gray-600">
            Low-carb, low-fat, intermittent fasting, meal plans, and calorie tracking
            can all lead to weight loss if they help create a sustained calorie deficit.
          </p>
          <p className="text-gray-600">
            The diet is the method. The calorie deficit is the mechanism.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Why people fail even when they know the mechanism
          </h2>
          <p className="text-gray-600">
            Most failed weight loss attempts are not failures of physics. They are
            failures of adherence, environment, hunger management, expectations, and
            routine. A technically perfect plan that cannot be followed is not a good plan.
          </p>
        </section>

        <section className="mb-8 rounded-2xl border bg-blue-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">Estimate your calorie target</h2>
          <p className="mb-3 text-sm text-gray-600">
            Use a calculator to estimate your maintenance calories and a realistic
            deficit.
          </p>
          <Link
            href="/tools/weight-loss/calorie-deficit-calculator"
            className="inline-block rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Open calculator
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">FAQ</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Is weight loss only about calories?</strong>
              <br />
              Calories are the core mechanism, but food quality, protein, activity,
              sleep, and stress affect whether the deficit is sustainable.
            </p>
            <p>
              <strong>Does exercise cause weight loss?</strong>
              <br />
              Exercise can help by increasing energy use, but weight loss still depends
              on the overall energy balance.
            </p>
            <p>
              <strong>What is the most important factor?</strong>
              <br />
              A calorie deficit you can maintain consistently over time.
            </p>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tools/weight-loss/calorie-deficit-for-fat-loss" className="rounded-xl border px-4 py-2 text-sm">
            Calorie Deficit for Fat Loss
          </Link>
          <Link href="/tools/weight-loss/calories-vs-macros" className="rounded-xl border px-4 py-2 text-sm">
            Calories vs Macros
          </Link>
          <Link href="/tools/weight-loss/best-diet-for-fat-loss" className="rounded-xl border px-4 py-2 text-sm">
            Best Diet for Fat Loss
          </Link>
          <Link href="/tools/weight-loss" className="rounded-xl border px-4 py-2 text-sm">
            Weight Loss Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
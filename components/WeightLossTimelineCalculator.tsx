"use client";

import { useMemo, useState } from "react";

type WeightLossTimelineCalculatorProps = {
  initialCurrentWeight?: string;
  initialTargetWeight?: string;
  initialDailyDeficit?: string;
};

export default function WeightLossTimelineCalculator({
  initialCurrentWeight = "",
  initialTargetWeight = "",
  initialDailyDeficit = "",
}: WeightLossTimelineCalculatorProps) {
  const [currentWeight, setCurrentWeight] = useState(initialCurrentWeight);
  const [targetWeight, setTargetWeight] = useState(initialTargetWeight);
  const [dailyDeficit, setDailyDeficit] = useState(initialDailyDeficit);

  const result = useMemo(() => {
    const cw = parseFloat(currentWeight);
    const tw = parseFloat(targetWeight);
    const deficit = parseFloat(dailyDeficit);

    if (!cw || !tw || !deficit || cw <= 0 || tw <= 0 || deficit <= 0 || cw <= tw) {
      return null;
    }

    const weightToLose = cw - tw;
    const totalCalories = weightToLose * 7700;
    const days = totalCalories / deficit;
    const weeks = days / 7;
    const months = weeks / 4.345;

    return {
      weightToLose,
      days,
      weeks,
      months,
    };
  }, [currentWeight, targetWeight, dailyDeficit]);

  return (
    <div className="grid gap-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Current weight (kg)
        </label>
        <input
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          placeholder="Enter current weight"
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Target weight (kg)
        </label>
        <input
          type="number"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value)}
          placeholder="Enter target weight"
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Daily calorie deficit
        </label>
        <input
          type="number"
          value={dailyDeficit}
          onChange={(e) => setDailyDeficit(e.target.value)}
          placeholder="Enter daily calorie deficit"
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        />
      </div>

      <div className="grid gap-4 rounded-3xl border bg-white p-5 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Weight to lose
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.weightToLose.toFixed(1) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">kg</div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Estimated days
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? Math.round(result.days) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">days</div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Estimated weeks
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.weeks.toFixed(1) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">weeks</div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Estimated months
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.months.toFixed(1) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">months</div>
        </div>
      </div>

      <p className="text-sm leading-6 text-gray-500">
        This estimate assumes a stable average calorie deficit over time. Real-world
        weight loss is rarely linear and may vary due to adherence, water balance,
        activity changes, and metabolic adaptation.
      </p>
    </div>
  );
}
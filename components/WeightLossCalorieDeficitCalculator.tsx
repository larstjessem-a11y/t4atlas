"use client";

import { useMemo, useState } from "react";

type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very-active";

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  "very-active": 1.9,
};

type WeightLossCalorieDeficitCalculatorProps = {
  initialSex?: "male" | "female";
  initialAge?: string;
  initialHeightCm?: string;
  initialWeightKg?: string;
  initialActivityLevel?: ActivityLevel;
  initialWeeklyLossKg?: string;
};

export default function WeightLossCalorieDeficitCalculator({
  initialSex = "male",
  initialAge = "",
  initialHeightCm = "",
  initialWeightKg = "",
  initialActivityLevel = "moderate",
  initialWeeklyLossKg = "0.5",
}: WeightLossCalorieDeficitCalculatorProps) {
  const [sex, setSex] = useState<"male" | "female">(initialSex);
  const [age, setAge] = useState(initialAge);
  const [heightCm, setHeightCm] = useState(initialHeightCm);
  const [weightKg, setWeightKg] = useState(initialWeightKg);
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>(initialActivityLevel);
  const [weeklyLossKg, setWeeklyLossKg] = useState(initialWeeklyLossKg);

  const result = useMemo(() => {
    const a = parseFloat(age);
    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);
    const weeklyLoss = parseFloat(weeklyLossKg);

    if (
      !a ||
      !h ||
      !w ||
      !weeklyLoss ||
      a <= 0 ||
      h <= 0 ||
      w <= 0 ||
      weeklyLoss <= 0
    ) {
      return null;
    }

    const bmr =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * activityMultipliers[activityLevel];

    const dailyDeficit = (weeklyLoss * 7700) / 7;
    const targetCalories = tdee - dailyDeficit;

    return {
      bmr,
      tdee,
      dailyDeficit,
      targetCalories,
    };
  }, [sex, age, heightCm, weightKg, activityLevel, weeklyLossKg]);

  return (
    <div className="grid gap-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Sex
        </label>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value as "male" | "female")}
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Height (cm)
        </label>
        <input
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(e.target.value)}
          placeholder="Enter height in cm"
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(e.target.value)}
          placeholder="Enter weight in kg"
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Activity level
        </label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Lightly active</option>
          <option value="moderate">Moderately active</option>
          <option value="active">Active</option>
          <option value="very-active">Very active</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Target weekly weight loss (kg)
        </label>
        <select
          value={weeklyLossKg}
          onChange={(e) => setWeeklyLossKg(e.target.value)}
          className="w-full rounded-2xl border bg-white p-4 text-lg outline-none transition focus:border-gray-400"
        >
          <option value="0.25">0.25 kg/week</option>
          <option value="0.5">0.5 kg/week</option>
          <option value="0.75">0.75 kg/week</option>
          <option value="1">1 kg/week</option>
        </select>
      </div>

      <div className="grid gap-4 rounded-3xl border bg-white p-5 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Estimated TDEE
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.tdee.toFixed(0) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">Calories/day</div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Estimated daily deficit
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.dailyDeficit.toFixed(0) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">Calories/day</div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4 md:col-span-2">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Estimated target intake
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.targetCalories.toFixed(0) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">Calories/day</div>
        </div>
      </div>

      <p className="text-sm leading-6 text-gray-500">
        This is a planning estimate based on common energy-balance assumptions.
        Real-world weight loss varies based on adherence, water shifts, body
        composition, and metabolic adaptation.
      </p>
    </div>
  );
}
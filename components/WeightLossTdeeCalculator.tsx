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

export default function WeightLossTdeeCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>("moderate");

  const result = useMemo(() => {
    const a = parseFloat(age);
    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);

    if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) {
      return null;
    }

    const bmr =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * activityMultipliers[activityLevel];

    return {
      bmr,
      tdee,
    };
  }, [sex, age, heightCm, weightKg, activityLevel]);

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

      <div className="grid gap-4 rounded-3xl border bg-white p-5 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            BMR
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.bmr.toFixed(0) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">Calories/day</div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            TDEE
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {result ? result.tdee.toFixed(0) : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-500">Calories/day</div>
        </div>
      </div>
    </div>
  );
}
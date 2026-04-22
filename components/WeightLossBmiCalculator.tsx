"use client";

import { useMemo, useState } from "react";

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

export default function WeightLossBmiCalculator() {
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const bmiResult = useMemo(() => {
    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);

    if (!h || !w || h <= 0 || w <= 0) {
      return null;
    }

    const bmi = w / Math.pow(h / 100, 2);
    return {
      bmi,
      category: getBmiCategory(bmi),
    };
  }, [heightCm, weightKg]);

  return (
    <div className="grid gap-4">
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

      <div className="grid gap-4 rounded-3xl border bg-white p-5 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            BMI
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {bmiResult ? bmiResult.bmi.toFixed(1) : "—"}
          </div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Category
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900">
            {bmiResult ? bmiResult.category : "—"}
          </div>
        </div>
      </div>
    </div>
  );
}
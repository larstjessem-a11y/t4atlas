"use client";

import { useState } from "react";

type Tool = {
  slug: string;
  name: string;
  category: string;
  factor: number;
  unitFrom: string;
  unitTo: string;
  formula: string;
  examples: number[];
};

export default function CmToInchesClient({ tool }: { tool?: Tool }) {
  const [value, setValue] = useState("");

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

const result = value
  ? (parseFloat(value) * tool.factor).toFixed(2)
  : "0";

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-sm rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-2">{tool.name}</h1>

        <p className="text-gray-600 mb-6">
          Convert {tool.unitFrom} to {tool.unitTo} instantly using this free tool.
        </p>

        <input
          type="number"
          value={value}
          placeholder={`Enter ${tool.unitFrom}`}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border rounded-lg p-3 text-lg"
        />

        <div className="mt-6 text-center">
          <div className="text-sm text-gray-500">Result</div>
          <div className="text-3xl font-bold">
            {result} {tool.unitTo}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">Conversion formula</h3>
          <p className="text-gray-600">{tool.formula}</p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Examples</h3>
          <ul className="text-gray-600 space-y-1">
            {tool.examples.map((example) => (
              <li key={example}>
                {example} {tool.unitFrom} = (example * tool.factor).toFixed(2) {tool.unitTo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
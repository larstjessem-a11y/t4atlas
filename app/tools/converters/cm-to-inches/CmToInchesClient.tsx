"use client";

import { useState } from "react";

export default function CmToInchesClient() {
  const [cm, setCm] = useState("");
  const inches = cm ? (parseFloat(cm) / 2.54).toFixed(2) : "0";

 return (
  <main className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-xl mx-auto bg-white shadow-sm rounded-xl p-6">
      
      <h1 className="text-2xl font-semibold mb-2">
        CM to Inches Converter
      </h1>

      <p className="text-gray-600 mb-6">
        Convert centimeters (cm) to inches instantly using this free tool.
      </p>

      <input
        type="number"
        value={cm}
        placeholder="Enter centimeters"
        onChange={(e) => setCm(e.target.value)}
        className="w-full border rounded-lg p-3 text-lg"
      />

      <div className="mt-6 text-center">
        <div className="text-sm text-gray-500">Result</div>
        <div className="text-3xl font-bold">{inches} inches</div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Conversion formula</h3>
        <p className="text-gray-600">1 cm = 0.3937 inches</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Example</h3>
        <p className="text-gray-600">
          180 cm = {(180 / 2.54).toFixed(2)} inches
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Common conversions</h3>
        <ul className="text-gray-600 space-y-1">
          <li>150 cm = {(150 / 2.54).toFixed(2)} inches</li>
          <li>160 cm = {(160 / 2.54).toFixed(2)} inches</li>
          <li>170 cm = {(170 / 2.54).toFixed(2)} inches</li>
        </ul>
      </div>

    </div>
  </main>
);
}
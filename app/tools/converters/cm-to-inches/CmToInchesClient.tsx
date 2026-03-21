"use client";

import { useState } from "react";

export default function CmToInchesClient() {
  const [cm, setCm] = useState("");
  const inches = cm ? (parseFloat(cm) / 2.54).toFixed(2) : "0";

  return (
    <main style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>CM to Inches Converter</h1>

      <p>
        Use this free tool to convert centimeters (cm) to inches instantly.
      </p>

      <input
        type="number"
        value={cm}
        placeholder="Enter centimeters"
        onChange={(e) => setCm(e.target.value)}
        style={{ padding: "12px", width: "100%", marginTop: "20px" }}
      />

      <h2 style={{ marginTop: "20px" }}>{inches} inches</h2>

      <h3 style={{ marginTop: "40px" }}>Conversion formula</h3>
      <p>1 cm = 0.3937 inches</p>

      <h3>Example</h3>
      <p>180 cm = {(180 / 2.54).toFixed(2)} inches</p>

      <h3>Common conversions</h3>
      <ul>
        <li>150 cm = {(150 / 2.54).toFixed(2)} inches</li>
        <li>160 cm = {(160 / 2.54).toFixed(2)} inches</li>
        <li>170 cm = {(170 / 2.54).toFixed(2)} inches</li>
      </ul>
    </main>
  );
}
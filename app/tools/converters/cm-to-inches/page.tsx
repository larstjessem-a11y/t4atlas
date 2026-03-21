"use client";

export default function Page() {
  return (
    <main style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>CM to Inches Converter</h1>
      <p>Convert centimeters to inches instantly.</p>

      <input
        type="number"
        id="cm"
        placeholder="Enter cm"
        style={{ padding: "10px", width: "100%", marginTop: "20px" }}
        onInput={(e) => {
          const cm = (e.target as HTMLInputElement).value;
          const inches = parseFloat(cm) / 2.54 || 0;
          const output = document.getElementById("result");
          if (output) {
            output.textContent = inches.toFixed(2) + " inches";
          }
        }}
      />

      <h2 id="result" style={{ marginTop: "20px" }}>
        0 inches
      </h2>

      <p style={{ marginTop: "40px" }}>
        Formula: inches = cm / 2.54
      </p>
    </main>
  );
}
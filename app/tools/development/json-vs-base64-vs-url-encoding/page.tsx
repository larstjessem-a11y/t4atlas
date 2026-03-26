import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JSON vs Base64 vs URL Encoding | T4 Atlas",
  description:
    "Understand the difference between JSON, Base64, and URL encoding. Learn when to use each format and how they work together in real developer workflows.",
  keywords: [
    "json vs base64 vs url encoding",
    "difference between json and base64",
    "url encoding vs base64",
    "encoding vs data format",
    "developer debugging formats",
  ],
};

export default function JsonVsBase64VsUrlEncodingPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/development" className="hover:text-gray-900">
              Development Tools
            </Link>
            <span>→</span>
            <span>JSON vs Base64 vs URL Encoding</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Development guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            JSON vs Base64 vs URL Encoding
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            JSON, Base64, and URL encoding are often used together, but they solve
            completely different problems. Understanding the difference is key to
            debugging APIs, logs, and data pipelines effectively.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Concept</th>
                    <th className="p-3 text-left">What it is</th>
                    <th className="p-3 text-left">Purpose</th>
                    <th className="p-3 text-left">Reversible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">JSON</td>
                    <td className="p-3">Data format</td>
                    <td className="p-3">Structure and transport</td>
                    <td className="p-3">Yes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Base64</td>
                    <td className="p-3">Encoding</td>
                    <td className="p-3">Text-safe representation</td>
                    <td className="p-3">Yes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">URL Encoding</td>
                    <td className="p-3">Encoding</td>
                    <td className="p-3">Safe URLs</td>
                    <td className="p-3">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">1. JSON</h2>
            <p className="text-gray-600 mb-4">
              JSON is a structured data format used to represent objects and
              arrays. It is human-readable and widely used in APIs.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/tools/development/json-formatter" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                JSON Formatter
              </Link>
              <Link href="/tools/development/json-validator" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                JSON Validator
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">2. Base64</h2>
            <p className="text-gray-600 mb-4">
              Base64 is an encoding method used to convert data into a text-safe
              format. It is commonly used inside JSON or APIs.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/tools/development/base64-encoder" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Base64 Encoder
              </Link>
              <Link href="/tools/development/base64-decoder" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Base64 Decoder
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">3. URL Encoding</h2>
            <p className="text-gray-600 mb-4">
              URL encoding ensures that special characters can safely be included
              in URLs without breaking them.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link href="/tools/development/url-encoder" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                URL Encoder
              </Link>
              <Link href="/tools/development/url-decoder" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                URL Decoder
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              How they work together (real example)
            </h2>

            <p className="text-gray-600">
              A common pattern is:
              JSON → Base64 → URL Encoding.
            </p>

            <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
              <li>JSON structures the data</li>
              <li>Base64 encodes it safely</li>
              <li>URL encoding makes it safe for transport in URLs</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Which one should you use?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Use JSON → for structured data</li>
              <li>Use Base64 → for safe transport</li>
              <li>Use URL encoding → for URLs</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related tools</h2>

            <div className="flex flex-wrap gap-3">
              <Link href="/tools/development/json-formatter" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                JSON Formatter
              </Link>
              <Link href="/tools/development/base64-decoder" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Base64 Decoder
              </Link>
              <Link href="/tools/development/url-decoder" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                URL Decoder
              </Link>
              <Link href="/tools/development/best-debugging-tools-for-developers" className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50">
                Best Debugging Tools
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
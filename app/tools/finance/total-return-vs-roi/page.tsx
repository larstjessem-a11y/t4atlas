import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Total Return vs ROI | T4 Atlas",
  description:
    "Compare total return vs ROI, understand the differences, and learn when to use each metric for investment analysis.",
  keywords: [
    "total return vs roi",
    "roi vs total return",
    "difference between roi and total return",
    "investment return comparison",
  ],
};

export default function TotalReturnVsRoiPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools">Tools</Link>
            <span>→</span>
            <Link href="/tools/finance">Finance Tools</Link>
            <span>→</span>
            <span>Total Return vs ROI</span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Total Return vs ROI
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Total return and ROI both measure investment performance, but they are not identical. 
            Understanding when to use each metric helps you make better financial decisions.
          </p>
        </div>

        <div className="grid gap-6">

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Key difference
            </h2>

            <p className="text-gray-600">
              Total return measures the full change in value from start to finish, 
              while ROI focuses on the relative gain compared to the initial investment. 
              In many simple cases they appear similar, but their interpretation can differ.
            </p>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When they are similar
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>single investment with no additional contributions</li>
              <li>clear starting and ending value</li>
              <li>short evaluation period</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When they differ
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>multiple cash flows or reinvestments</li>
              <li>long-term compounding scenarios</li>
              <li>portfolio-level performance analysis</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Which should you use?
            </h2>

            <p className="text-gray-600">
              Use ROI for simple, quick comparisons. Use total return when you want a complete picture 
              of how an investment has performed over time.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Use the tools
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/finance/roi-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                ROI Calculator
              </Link>

              <Link
                href="/tools/finance/total-return-calculator"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Total Return Calculator
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
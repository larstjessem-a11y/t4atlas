import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "T4 Atlas",
  description: "The global library of online tools, calculators, and data utilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen flex flex-col">
          <header className="border-b bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold">
                T4 Atlas
              </Link>

              <nav className="flex items-center gap-4 text-sm text-gray-600">
                <Link href="/tools" className="hover:text-gray-900">
                  Tools
                </Link>
                <Link href="/tools/converters" className="hover:text-gray-900">
                  Converters
                </Link>
                <Link href="/tools/finance" className="hover:text-gray-900">
                  Finance
                </Link>
<Link href="/tools/development" className="hover:text-gray-900">
  Development Tools
</Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-white mt-12">
            <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
              <div className="mb-2 font-medium text-gray-700">T4 Atlas</div>
              <p>The global library of online tools, calculators, and data utilities.</p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                <div>
                  <div className="font-medium text-gray-700 mb-2">Navigation</div>
                  <div className="flex flex-col gap-1">
                    <Link href="/" className="hover:text-gray-900">
                      Home
                    </Link>
                    <Link href="/tools" className="hover:text-gray-900">
                      All Tools
                    </Link>
                    <Link href="/tools/converters" className="hover:text-gray-900">
                      Converters
                    </Link>
                    <Link href="/tools/finance" className="hover:text-gray-900">
                      Finance
                    </Link>
<Link href="/tools/development" className="hover:text-gray-900">
  Development Tools
</Link>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-700 mb-2">Top Categories</div>
                  <div className="flex flex-col gap-1">
                    <Link href="/tools/converters/subcategory/length" className="hover:text-gray-900">
                      Length Converters
                    </Link>
                    <Link href="/tools/converters/subcategory/weight" className="hover:text-gray-900">
                      Weight Converters
                    </Link>
                    <Link href="/tools/converters/subcategory/temperature" className="hover:text-gray-900">
                      Temperature Converters
                    </Link>
<Link href="/tools/development" className="hover:text-gray-900">
  Development Tools
</Link>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-700 mb-2">Ad Slot Placeholder</div>
                  <div className="rounded-lg border border-dashed p-4 text-xs text-gray-400">
                    Footer ad / promo slot
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
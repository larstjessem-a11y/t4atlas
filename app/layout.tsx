import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { hubs } from "@/data/hubs";
import "./globals.css";

export const metadata: Metadata = {
  title: "T4 Atlas",
  description:
    "The global library of online tools, calculators, and data utilities.",
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
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
                <Link href="/tools" className="hover:text-gray-900">
                  Tools
                </Link>
                {hubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={hub.href}
                    className="hover:text-gray-900"
                  >
                    {hub.name}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-white mt-12">
            <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
              <div className="mb-2 font-medium text-gray-700">T4 Atlas</div>
              <p>
                The global library of online tools, calculators, and data
                utilities.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="font-medium text-gray-700 mb-2">Navigation</div>
                  <div className="flex flex-col gap-1">
                    <Link href="/" className="hover:text-gray-900">
                      Home
                    </Link>
                    <Link href="/tools" className="hover:text-gray-900">
                      All Tools
                    </Link>
                    {hubs.map((hub) => (
                      <Link
                        key={hub.slug}
                        href={hub.href}
                        className="hover:text-gray-900"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-700 mb-2">Featured hubs</div>
                  <div className="flex flex-col gap-1">
                    {hubs.map((hub) => (
                      <Link
                        key={`${hub.slug}-featured`}
                        href={hub.href}
                        className="hover:text-gray-900"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-700 mb-2">
                    Ad Slot Placeholder
                  </div>
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
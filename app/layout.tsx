import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { hubs } from "@/data/hubs";
import "./globals.css";

const sleepHub = {
  slug: "sleep",
  href: "/sleep",
  name: "Sleep",
};

const navigationHubs = [...hubs, sleepHub];

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
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between gap-6">
                <Link href="/" className="group flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-gray-700 text-sm font-semibold text-white shadow-sm">
                    T4
                  </div>

                  <div className="min-w-0">
                    <div className="text-base font-semibold tracking-tight text-gray-900">
                      T4 Atlas
                    </div>
                    <div className="text-xs text-gray-500">
                      Tools, hubs, and decision pages
                    </div>
                  </div>
                </Link>

                <nav className="hidden items-center gap-5 text-sm text-gray-600 md:flex">
                  <Link href="/" className="transition hover:text-gray-900">
                    Home
                  </Link>
                  <Link href="/tools" className="transition hover:text-gray-900">
                    Tools
                  </Link>
                  {navigationHubs.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={hub.href}
                      className="transition hover:text-gray-900"
                    >
                      {hub.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-12 border-t border-gray-200 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-10">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-gray-700 text-xs font-semibold text-white shadow-sm">
                      T4
                    </div>
                    <div className="text-lg font-semibold tracking-tight text-gray-900">
                      T4 Atlas
                    </div>
                  </div>

                  <p className="max-w-2xl text-sm leading-6 text-gray-600">
                    A growing library of tools, calculators, guides, comparison
                    pages, and decision frameworks organized into focused hubs.
                  </p>
                </div>

                <div className="rounded-2xl border border-dashed border-gray-300 bg-white/70 px-4 py-3 text-xs text-gray-400">
                  Footer ad / promo slot
                </div>
              </div>

              <div className="grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3">
                <div>
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Navigation
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <Link href="/" className="transition hover:text-gray-900">
                      Home
                    </Link>
                    <Link
                      href="/tools"
                      className="transition hover:text-gray-900"
                    >
                      All Tools
                    </Link>
                    {navigationHubs.map((hub) => (
                      <Link
                        key={hub.slug}
                        href={hub.href}
                        className="transition hover:text-gray-900"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Featured hubs
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    {navigationHubs.map((hub) => (
                      <Link
                        key={`${hub.slug}-featured`}
                        href={hub.href}
                        className="transition hover:text-gray-900"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold text-gray-900">
                    Positioning
                  </div>
                  <p className="text-sm leading-6 text-gray-600">
                    Built to organize tools, guides, scenarios, and comparison
                    pages into structured topic ecosystems.
                  </p>
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
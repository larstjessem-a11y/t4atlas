import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { hubs } from "@/data/hubs";
import "./globals.css";
import MobileMenu from "@/components/navigation/MobileMenu";

const intelligenceHub = {
  slug: "t4-intelligence",
  href: "/t4-intelligence",
  name: "Intelligence",
};

const sleepHub = {
  slug: "sleep",
  href: "/sleep",
  name: "Sleep",
};

const navigationHubs = [
  intelligenceHub,
  ...hubs.filter((hub) =>
    ["ai", "finance", "development"].includes(hub.slug)
  ),
];

export const metadata: Metadata = {
  title: "T4 Atlas",
  description:
    "Tools, data, and intelligence for navigating technology, risk, and the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--t4-background)] text-[var(--t4-text)] antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-40 border-b border-[var(--t4-border)] bg-[rgba(252,251,248,0.92)] backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex items-center justify-between gap-6">
                <Link href="/" className="group flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--t4-border)] bg-gradient-to-br from-[#0f2742] to-[#1e3a5f] text-sm font-semibold text-white shadow-sm">
                    T4
                  </div>

                  <div className="min-w-0">
                    <div className="text-base font-semibold tracking-tight text-[var(--t4-text)]">
                      T4 Atlas
                    </div>
                    <div className="text-xs text-[var(--t4-muted)]">
                      Tools · data · intelligence
                    </div>
                  </div>
                </Link>

                <nav className="hidden items-center gap-5 text-sm text-[var(--t4-muted)] md:flex">
                  <Link
                    href="/"
                    className="transition hover:text-[var(--t4-blue)]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/tools"
                    className="transition hover:text-[var(--t4-blue)]"
                  >
                    Tools
                  </Link>
                  {navigationHubs.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={hub.href}
                      className="transition hover:text-[var(--t4-blue)]"
                    >
                      {hub.name}
                    </Link>
                  ))}
                </nav>

                <MobileMenu items={navigationHubs} />
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-12 border-t border-[var(--t4-border)] bg-[rgba(252,251,248,0.82)]">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[var(--t4-border)] bg-gradient-to-br from-[#0f2742] to-[#1e3a5f] text-xs font-semibold text-white shadow-sm">
                      T4
                    </div>
                    <div className="text-lg font-semibold tracking-tight text-[var(--t4-text)]">
                      T4 Atlas
                    </div>
                  </div>

                  <p className="max-w-2xl text-sm leading-6 text-[var(--t4-muted)]">
                    A modern atlas for tools, data, comparison pages, risk
                    intelligence, and structured analysis of technology,
                    resilience, and global change.
                  </p>
                </div>

                <div className="rounded-2xl border border-dashed border-[var(--t4-border)] bg-[var(--t4-surface)] px-4 py-3 text-xs text-[var(--t4-muted)]">
                  Intelligence · tools · decision systems
                </div>
              </div>

              <div className="grid gap-6 border-t border-[var(--t4-border)] pt-8 sm:grid-cols-3">
                <div>
                  <div className="mb-3 text-sm font-semibold text-[var(--t4-text)]">
                    Navigation
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-[var(--t4-muted)]">
                    <Link
                      href="/"
                      className="transition hover:text-[var(--t4-blue)]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/tools"
                      className="transition hover:text-[var(--t4-blue)]"
                    >
                      All Tools
                    </Link>
                    {navigationHubs.map((hub) => (
                      <Link
                        key={hub.slug}
                        href={hub.href}
                        className="transition hover:text-[var(--t4-blue)]"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold text-[var(--t4-text)]">
                    Featured hubs
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-[var(--t4-muted)]">
                    {navigationHubs.map((hub) => (
                      <Link
                        key={`${hub.slug}-featured`}
                        href={hub.href}
                        className="transition hover:text-[var(--t4-blue)]"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold text-[var(--t4-text)]">
                    Positioning
                  </div>
                  <p className="text-sm leading-6 text-[var(--t4-muted)]">
                    Built to organize practical tools, decision frameworks,
                    intelligence briefs, and data resources into a coherent
                    exploration system.
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
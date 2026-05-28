"use client";

import Link from "next/link";
import { useState } from "react";

type MobileMenuItem = {
  slug: string;
  href: string;
  name: string;
};

type MobileMenuProps = {
  items: MobileMenuItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center rounded-2xl border bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        Menu
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[72px] z-50 rounded-3xl border bg-white p-4 shadow-xl">
          <div className="grid gap-2 text-sm">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Home
            </Link>

            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Tools
            </Link>

            {items.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/tools/ai/risk-intelligence"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-slate-950 px-4 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              AI Risk Intelligence
            </Link>

            <Link
              href="/tools/ai/statistics"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-gray-100 px-4 py-3 font-medium text-gray-900 transition hover:bg-gray-200"
            >
              AI Statistics
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
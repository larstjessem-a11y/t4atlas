import Link from "next/link";
import { affiliateModules, pageAffiliateMap } from "@/data/affiliate";

type AffiliateBlockProps = {
  slug: string;
  placement?: "editorial_bottom" | "sidebar";
  title?: string;
};

export default function AffiliateBlock({
  slug,
  title = "Recommended tools",
}: AffiliateBlockProps) {
  const moduleSlugs = pageAffiliateMap[slug] || [];

  const items = moduleSlugs
    .map((s) => affiliateModules.find((m) => m.slug === s))
    .filter(Boolean);

  if (!items.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item!.slug} className="rounded-2xl bg-gray-50 p-5">
            <div className="mb-2">
              <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                {item!.tag}
              </span>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {item!.name}
            </h3>

            <p className="mb-4 text-sm text-gray-600">
              {item!.description}
            </p>

            <Link
              href={item!.href}
              className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
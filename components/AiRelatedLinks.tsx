import Link from "next/link";
import { aiEditorialPages } from "@/data/aiEditorial";

type AiRelatedLinksProps = {
  currentSlug: string;
  title?: string;
  limit?: number;
};

export default function AiRelatedLinks({
  currentSlug,
  title = "Related AI pages",
  limit = 3,
}: AiRelatedLinksProps) {
  const currentPage = aiEditorialPages.find((page) => page.slug === currentSlug);

  if (!currentPage) {
    return null;
  }

  const relatedPages = aiEditorialPages
    .filter((page) => page.slug !== currentSlug)
    .map((page) => {
      const sharedTopics = page.topics.filter((topic) =>
        currentPage.topics.includes(topic)
      ).length;

      const sameTypeBonus = page.type === currentPage.type ? 0.5 : 0;

      return {
        ...page,
        score: sharedTopics + sameTypeBonus,
      };
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);

  if (relatedPages.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {relatedPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
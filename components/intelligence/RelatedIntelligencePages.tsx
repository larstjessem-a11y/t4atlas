import Link from "next/link";
import IntelligenceCard from "./IntelligenceCard";

type RelatedPage = {
  title: string;
  href: string;
  description?: string;
  label?: string;
};

type RelatedIntelligencePagesProps = {
  pages: RelatedPage[];
};

export default function RelatedIntelligencePages({
  pages,
}: RelatedIntelligencePagesProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="block">
          <IntelligenceCard
            title={page.title}
            description={page.description}
            eyebrow={page.label}
          />
        </Link>
      ))}
    </div>
  );
}
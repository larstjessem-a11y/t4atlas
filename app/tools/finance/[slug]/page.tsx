import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { financeEditorialPages } from "@/data/financeEditorial";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return financeEditorialPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const page = financeEditorialPages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Finance Tools | T4 Atlas",
      description: "Explore finance comparisons, best-of pages, and alternatives.",
    };
  }

  return {
    title: `${page.title} | T4 Atlas`,
    description: `${page.title} on T4 Atlas.`,
  };
}

export default async function FinanceDynamicPage({ params }: PageProps) {
  const { slug } = await params;

  const page = financeEditorialPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/finance" className="hover:text-gray-900">
              Finance
            </Link>
            <span>→</span>
            <span>{page.title}</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Finance editorial
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {page.title}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            This page is part of the finance editorial hub and is now connected to
            the dynamic route system. The next step is to turn these into proper
            best-of, alternative, and comparison pages.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Page type</h2>
            <p className="text-gray-600 capitalize">{page.type}</p>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {page.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Related finance pages</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {financeEditorialPages
                .filter((item) => item.slug !== page.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className="rounded-2xl border px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
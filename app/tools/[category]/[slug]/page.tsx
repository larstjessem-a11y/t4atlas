import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolTemplate from "@/components/ToolTemplate";
import FinanceTemplate from "@/components/FinanceTemplate";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const tool = tools.find(
    (t) => t.category === category && t.slug === slug
  );

  if (!tool) {
    return {
      title: "Tool Not Found | T4 Atlas",
      description: "The requested tool could not be found.",
    };
  }

  return {
    title: tool.seoTitle ?? `${tool.name} | T4 Atlas`,
    description:
      tool.seoDescription ??
      tool.description ??
      `Use the ${tool.name} on T4 Atlas.`,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { category, slug } = await params;

  const tool = tools.find(
    (t) => t.category === category && t.slug === slug
  );

  if (!tool) {
    notFound();
  }

  if (tool.type === "finance") {
    return <FinanceTemplate tool={tool} />;
  }

  return <ToolTemplate tool={tool} />;
}
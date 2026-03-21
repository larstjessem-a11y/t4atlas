import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolTemplate from "@/components/ToolTemplate";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const tool = tools.find(
    (t) => t.category === category && t.slug === slug
  );

  if (!tool) {
    return {
      title: "Tool Not Found | T4 Atlas",
    };
  }

  return {
    title: `${tool.name} | T4 Atlas`,
    description: `Convert ${tool.unitFrom} to ${tool.unitTo} instantly.`,
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug } = await params;

  const tool = tools.find(
    (t) => t.category === category && t.slug === slug
  );

  if (!tool) {
    notFound();
  }

 return <ToolTemplate tool={tool} />;
}
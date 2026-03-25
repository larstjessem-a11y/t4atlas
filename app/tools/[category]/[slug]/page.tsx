import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolTemplate from "@/components/ToolTemplate";
import FinanceTemplate from "@/components/FinanceTemplate";
import { tools } from "@/data/tools";
import DevToolTemplate from "@/components/DevToolTemplate";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
  searchParams?: Promise<{
    scenario?: string;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const scenario = resolvedSearchParams?.scenario;

  const tool = tools.find(
    (t) => t.category === category && t.slug === slug
  );

  if (!tool) {
    return {
      title: "Tool Not Found | T4 Atlas",
      description: "The requested tool could not be found.",
    };
  }

  const activeScenario = tool.longTailScenarios?.find(
    (item) => item.slug === scenario
  );

  const title = activeScenario
    ? `${activeScenario.label} | T4 Atlas`
    : tool.seoTitle ?? `${tool.name} | T4 Atlas`;

  const description = activeScenario
    ? `Use this ${activeScenario.label.toLowerCase()} tool on T4 Atlas to explore this specific scenario and compare different assumptions.`
    : tool.seoDescription ??
      tool.description ??
      `Use the ${tool.name} on T4 Atlas.`;

  return {
    title,
    description,
  };
}

export default async function ToolPage({
  params,
  searchParams,
}: PageProps) {
  const { category, slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const scenario = resolvedSearchParams?.scenario;

  const tool = tools.find(
    (t) => t.category === category && t.slug === slug
  );

  if (!tool) {
    notFound();
  }

if (tool.type === "finance") {
  return <FinanceTemplate tool={tool} scenario={scenario} />;
}

if (tool.type === "dev") {
  return <DevToolTemplate tool={tool} />;
}

return <ToolTemplate tool={tool} />;
}
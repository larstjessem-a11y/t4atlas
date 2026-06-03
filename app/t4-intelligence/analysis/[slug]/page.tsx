import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IntelligenceArticleTemplate from "@/components/intelligence/IntelligenceArticleTemplate";
import {
  getIntelligenceArticle,
  intelligenceArticles,
} from "@/data/intelligenceArticles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return intelligenceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getIntelligenceArticle(slug);

  if (!article) {
    return {
      title: "T4 Intelligence | T4 Atlas",
      description:
        "Structured analysis on AI, biosecurity, geopolitics, supply-chain risk, operational risk, preparedness, and future scenarios.",
    };
  }

  return {
    title: `${article.title} | T4 Intelligence`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default async function IntelligenceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getIntelligenceArticle(slug);

  if (!article) {
    notFound();
  }

  return <IntelligenceArticleTemplate article={article} />;
}
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AiBestUseCasePage from "@/components/AiBestUseCasePage";
import { aiBestUseCases } from "@/data/aiBestUseCases";
import { getAiBestUseCase } from "@/lib/getAiBestUseCase";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return aiBestUseCases.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getAiBestUseCase(slug);

  if (!config) {
    return {
      title: "AI Tools | T4 Atlas",
      description: "Explore AI tools and use-case guides on T4 Atlas.",
    };
  }

  return {
    title: `${config.title} | T4 Atlas`,
    description: config.intro,
  };
}

export default async function AiDynamicUseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const config = getAiBestUseCase(slug);

  if (!config) {
    notFound();
  }

  return <AiBestUseCasePage {...config} />;
}
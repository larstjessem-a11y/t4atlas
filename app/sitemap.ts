import { MetadataRoute } from "next";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://t4atlas.com";

  const staticPages = [
    "",
    "/tools",
    "/tools/converters",
    "/tools/finance",
  ];

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
    ...toolPages,
  ];
}
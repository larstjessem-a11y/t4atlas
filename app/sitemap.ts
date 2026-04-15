import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { aiEditorialPages } from "@/data/aiEditorial";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://t4atlas.com";

  // statiske sider
  const staticPages = [
    "",
    "/tools",
    "/tools/ai",
    "/tools/finance",
    "/tools/converters",
    "/tools/development",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // tool-sider (automatisk)
  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: new Date(),
  }));

  // AI editorial sider (data-drevet)
  const aiUrls = aiEditorialPages.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...toolUrls, ...aiUrls];
}
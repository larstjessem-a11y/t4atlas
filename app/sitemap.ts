import { MetadataRoute } from "next";
import { tools } from "@/data/tools";

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

  // AI editorial sider
   const aiPages = [
    "/tools/ai/best-ai-tools-for-writing",
    "/tools/ai/best-ai-tools-for-coding",
    "/tools/ai/best-ai-tools-for-research",
    "/tools/ai/best-ai-tools-for-video-editing",
    "/tools/ai/best-ai-tools-for-productivity",
    "/tools/ai/best-ai-tools-for-meetings",
    "/tools/ai/best-ai-tools-for-students",
    "/tools/ai/best-ai-tools-for-marketing",
    "/tools/ai/alternatives-to-chatgpt",
    "/tools/ai/alternatives-to-midjourney",
    "/tools/ai/chatgpt-vs-claude",
    "/tools/ai/perplexity-vs-chatgpt",
    "/tools/ai/claude-vs-perplexity",
    "/tools/ai/chatgpt-vs-copilot",
  ];

  const aiUrls = aiPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...toolUrls, ...aiUrls];
}
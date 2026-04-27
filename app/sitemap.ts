import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { aiEditorialPages } from "@/data/aiEditorial";
import { financeEditorialPages } from "@/data/financeEditorial";
import { weightLossCalculators } from "@/data/weightLossCalculators";
import { weightLossScenarios } from "@/data/weightLossScenarios";
import { weightLossLandingPages } from "@/data/weightLossLandingPages";
import { weightLossEditorialPages } from "@/data/weightLossEditorial";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://t4atlas.com";

  const staticPages = [
    "",
    "/tools",
    "/tools/ai",
    "/tools/finance",
    "/tools/weight-loss",
    "/tools/converters",
    "/tools/development",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}`,
    lastModified: new Date(),
  }));

  const aiUrls = aiEditorialPages.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
  }));

  const financeUrls = financeEditorialPages.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
  }));

  const weightLossCalculatorUrls = weightLossCalculators.map((page) => ({
    url: `${baseUrl}/tools/weight-loss/${page.slug}`,
    lastModified: new Date(),
  }));

  const weightLossScenarioUrls = weightLossScenarios.map((page) => ({
    url: `${baseUrl}/tools/weight-loss/${page.slug}`,
    lastModified: new Date(),
  }));

  const weightLossLandingUrls = weightLossLandingPages.map((page) => ({
    url: `${baseUrl}/tools/weight-loss/${page.slug}`,
    lastModified: new Date(),
  }));

  const weightLossEditorialUrls = weightLossEditorialPages.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
  }));

  return [
    ...staticUrls,
    ...toolUrls,
    ...aiUrls,
    ...financeUrls,
    ...weightLossCalculatorUrls,
    ...weightLossScenarioUrls,
    ...weightLossLandingUrls,
    ...weightLossEditorialUrls,
  ];
}
import type { MetadataRoute } from "next";
import { studioData } from "@/data/petstudio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: studioData.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

import type { MetadataRoute } from "next";
import { studioData } from "@/data/petstudio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${studioData.seo.siteUrl}/sitemap.xml`,
  };
}

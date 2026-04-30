import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/menu`, lastModified, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/about`, lastModified, priority: 0.7, changeFrequency: "yearly" },
    { url: `${base}/visit`, lastModified, priority: 0.8, changeFrequency: "monthly" },
  ];
}

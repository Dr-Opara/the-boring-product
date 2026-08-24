import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://theboringproduct.com",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://theboringproduct.com/products",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}

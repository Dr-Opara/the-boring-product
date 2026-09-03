import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://theboringproduct.com", changeFrequency: "weekly", priority: 1 },
    { url: "https://theboringproduct.com/products", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://theboringproduct.com/products/expensemargin", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://theboringproduct.com/products/jrt-community", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://theboringproduct.com/products/localbiz", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://theboringproduct.com/future", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://theboringproduct.com/technology", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://theboringproduct.com/about", changeFrequency: "weekly", priority: 0.7 }
  ];
}

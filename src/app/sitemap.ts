import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://chicflowers.com";
  return [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/capabilities`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
    },
  ];
}

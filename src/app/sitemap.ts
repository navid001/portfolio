import { MetadataRoute } from "next";
import { getAllWorkSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://navidalviahsan.com";

  const staticRoutes = ["/", "/work", "/about", "/notes"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  let workSlugs: string[] = [];
  try {
    workSlugs = getAllWorkSlugs();
  } catch {
    // During build, content dir may not be populated yet
  }

  const workRoutes = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}

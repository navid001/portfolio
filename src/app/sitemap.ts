import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.navidalviahsan.me";

    const routes = [
        "",
        "#about",
        "#services",
        "#experience",
        "#projects",
        "#skills",
        "#testimonials",
        "#contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}

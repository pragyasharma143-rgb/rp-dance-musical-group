import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://rpdancegroup.com"; // Placeholder
    const lastModified = new Date();

    const routes = ["", "/about", "/services", "/work", "/media", "/contact"];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}

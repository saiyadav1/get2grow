import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://g2gmediahouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact-form",
    "/privacy-policy",
    "/terms-of-service",
    "/blog",
    "/blog/meta-ads-for-lead-generation",
    "/blog/local-seo-for-small-business",
    "/blog/website-design-company-hyderabad",
    "/blog/digital-marketing-for-small-business",
    "/blog/digital-marketing-services",
    "/blog/digital-marketing-agency-near-me",
    "/blog/digital-marketers",
    "/blog/best-digital-marketing-agency-hyderabad",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

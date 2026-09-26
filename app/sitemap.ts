import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "about/",
    "contact/",
    "resume/",
    ...Object.keys(projects).map((s) => `work/${s}/`),
  ].map((p) => ({ url: `https://khalidsohaibrana.github.io/${p}` }));
}

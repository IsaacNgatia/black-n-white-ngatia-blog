// scripts/generate-sitemap.ts
import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { Readable } from "stream";

const generateSitemap = async () => {
  const links = [{ url: "/", changefreq: "daily", priority: 1.0 }];

  const stream = new SitemapStream({ hostname: "https://ngatia.co.ke" });
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
  writeFileSync("public/sitemap.xml", sitemap.toString());
  console.log("Sitemap saved to public/sitemap.xml");
};

generateSitemap().catch((err) => console.error(err));

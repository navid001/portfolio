import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { WorkFrontmatter } from "@/types/work";

const contentDir = path.join(process.cwd(), "src/content/work");

export function getAllWork(): WorkFrontmatter[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(".mdx", "");
      const fullPath = path.join(contentDir, f);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return { slug, ...data } as WorkFrontmatter;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFeaturedWork(): WorkFrontmatter[] {
  return getAllWork()
    .filter((item) => item.featured)
    .slice(0, 6);
}

export function getWorkBySlug(slug: string): {
  frontmatter: WorkFrontmatter;
  content: string;
} {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data as WorkFrontmatter, content };
}

export function getAllWorkSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

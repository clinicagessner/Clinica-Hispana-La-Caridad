import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readBlogFile(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug || slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    dateModified: data.dateModified,
    relatedServices: data.relatedServices ?? [],
    author: data.author || "Clínica Hispana La Caridad",
    image: data.image,
    featured: data.featured || false,
    category: data.category,
    readTime: data.readTime,
    keywords: data.keywords || [],
    content: content.trim(),
  };
}

function getAllSlugs(): string[] {
  const esDir = path.join(BLOG_DIR, "es");
  if (!fs.existsSync(esDir)) return [];

  return fs
    .readdirSync(esDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function getBlogPosts(locale: string = "es"): BlogPost[] {
  const slugs = getAllSlugs();

  return slugs
    .map((slug) => readBlogFile(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, locale: string = "es"): BlogPost | null {
  return readBlogFile(slug, locale);
}

// El post destacado es siempre el más reciente (getBlogPosts viene ordenado
// por fecha descendente), sin importar el flag `featured` del frontmatter.
export function getFeaturedPost(locale: string = "es"): BlogPost | null {
  const posts = getBlogPosts(locale);
  return posts[0] ?? null;
}

/** Suma estable de un texto, para rotar sin aleatoriedad entre builds. */
function seed(text: string): number {
  let n = 0;
  for (let i = 0; i < text.length; i++) n = (n * 31 + text.charCodeAt(i)) % 100000;
  return n;
}

export function getRelatedPosts(slug: string, locale: string = "es", limit: number = 3): BlogPost[] {
  const posts = getBlogPosts(locale);
  const current = posts.find((p) => p.slug === slug);
  const mine = new Set(current?.relatedServices ?? []);
  const rest = posts.filter((p) => p.slug !== slug);

  // Primero los que comparten servicio con este post; después el resto, rotado
  // por el slug para que los enlaces se repartan y no ganen siempre los mismos.
  const shared = rest.filter((p) => (p.relatedServices ?? []).some((x) => mine.has(x)));
  const others = rest.filter((p) => !shared.includes(p));
  const offset = others.length ? seed(slug) % others.length : 0;
  const rotated = [...others.slice(offset), ...others.slice(0, offset)];

  return [...shared, ...rotated].slice(0, limit);
}

/** Posts que declaran `serviceSlug` en su frontmatter, rotados por servicio. */
export function getGuidesForService(serviceSlug: string, locale: string = "es", limit: number = 3): BlogPost[] {
  const candidates = getBlogPosts(locale).filter((p) =>
    (p.relatedServices ?? []).includes(serviceSlug)
  );
  if (candidates.length <= limit) return candidates;
  const offset = seed(serviceSlug) % candidates.length;
  return [...candidates.slice(offset), ...candidates.slice(0, offset)].slice(0, limit);
}

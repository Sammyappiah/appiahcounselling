import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string;
  image: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

// No images for now
const DEFAULT_IMAGE = "";

// Improve ugly titles (Post 1 → Counselling blog post 1)
function humaniseSlug(slug: string): string {
  const spaced = slug.replace(/-/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function improveTitle(rawTitle: string | undefined, slug: string): string {
  const base = (rawTitle ?? "").trim();
  if (!base) return humaniseSlug(slug);
  if (/^post\s+\d+$/i.test(base) || /^blog article/i.test(base)) {
    return humaniseSlug(slug);
  }
  return base;
}

function deriveSummary(body: string, maxLength = 160): string {
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#>*_`~\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return "Blog content coming soon.";

  return text.length > maxLength ? text.slice(0, maxLength - 1) + "…" : text;
}

function loadPost(fileName: string): BlogPost | null {
  const fullPath = path.join(POSTS_DIR, fileName);
  const raw = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  const slug =
    typeof raw.slug === "string" ? raw.slug : fileName.replace(/\.json$/, "");

  const title = improveTitle(raw.title, slug);

  const body =
    typeof raw.body === "string" && raw.body.trim() !== ""
      ? raw.body
      : "Blog content coming soon.";

  const date =
    typeof raw.date === "string" && raw.date.trim() !== ""
      ? raw.date
      : "2025-01-01";

  const summary =
    typeof raw.summary === "string" && raw.summary.trim() !== ""
      ? raw.summary
      : deriveSummary(body);

  return {
    slug,
    title,
    date,
    summary,
    body,
    image: DEFAULT_IMAGE,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

  const posts = files
    .map((file) => loadPost(file))
    .filter((p): p is BlogPost => p !== null);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

// lib/blogs.ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string: "2025-11-10"
  cover?: string; // e.g. "/blog/coping-with-anxiety.jpg"
  readTime?: string; // e.g. "4 min read"
  tags?: string[];
  // For now, simple HTML string. You can paste your blog content here.
  // (We can switch to MDX later if you want.)
  html?: string;
};

export const BLOGS: BlogPost[] = [
  {
    slug: "coping-with-anxiety",
    title: "Coping with Anxiety",
    excerpt:
      "Practical strategies to recognise triggers, soothe your nervous system, and regain a sense of control.",
    date: "2025-11-10",
    cover: "/blog/coping-with-anxiety.jpg",
    readTime: "4 min read",
    tags: ["Anxiety", "Wellbeing", "Therapy"],
    html: `
      <p>Anxiety can feel overwhelming, but it is manageable. Start by noticing the first signs in your body—racing heart, shallow breathing...</p>
      <p><strong>Try this:</strong> 4-7-8 breathing for one minute, journalling your triggers each evening, and scheduling small positive plans you can look forward to.</p>
    `,
  },
  {
    slug: "building-healthy-relationships",
    title: "Building Healthy Relationships",
    excerpt:
      "Five essentials for stronger connection: safety, respect, curiosity, repair, and shared meaning.",
    date: "2025-11-09",
    cover: "/blog/building-healthy-relationships.jpg",
    readTime: "5 min read",
    tags: ["Relationships", "Couples", "Communication"],
    html: `
      <p>Healthy relationships are built in the everyday moments. Prioritise small bids for connection, practise reflective listening...</p>
    `,
  },
];

/** Helper to find a post by slug */
export function getPost(slug: string) {
  return BLOGS.find((p) => p.slug === slug);
}

/** Sorted newest → oldest */
export function getAllPosts() {
  return [...BLOGS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

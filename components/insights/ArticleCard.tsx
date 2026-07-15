'use client';

import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  date: string;
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white border border-[#ddd3c7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)]">

      {/* IMAGE */}

      <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#efe6d8] via-[#f6eee4] to-[#d7ba84]">

        <div className="flex h-full items-end p-6">

          <span className="rounded-full bg-white/80 backdrop-blur px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#8b847c]">
            {article.category}
          </span>

        </div>

      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-8">

        <h3 className="font-serif text-[1.42rem] leading-[1.18] tracking-[-0.02em] text-[#171412]">
          {article.title}
        </h3>

        <p className="mt-5 text-[0.96rem] leading-[1.85] text-[#6e675f] line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-8">

          <div className="flex items-center gap-4 text-[0.78rem] text-[#8b847c]">

            <span>{article.readingTime} min read</span>

            <span>•</span>

            <span>{article.date}</span>

          </div>

          <Link
            href={`/insights/${article.slug}`}
            className="inline-flex items-center gap-2 mt-8 text-[0.72rem] tracking-[0.24em] uppercase text-[#171412] hover:text-[#c89b4d] transition-colors"
          >
            Read Article

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </Link>

        </div>

      </div>

    </article>
  );
}

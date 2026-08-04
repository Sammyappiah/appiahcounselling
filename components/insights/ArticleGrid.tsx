'use client';

import ArticleCard from "./ArticleCard";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  date: string;
};

type ArticleGridProps = {
  articles: Article[];
};

export default function ArticleGrid({
  articles,
}: ArticleGridProps) {
  return (
    <section className="py-12">

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-16">

        <div className="flex items-end justify-between gap-6 mb-14">

          <div>

            <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-4">
              Latest Articles
            </p>

            <h2 className="font-serif text-[2rem] leading-[1.05] tracking-[-0.03em] text-[#171412]">
              Explore the Library
            </h2>

          </div>

          <p className="hidden md:block text-[0.92rem] text-[#8b847c]">
            {articles.length} article{articles.length !== 1 ? "s" : ""}
          </p>

        </div>

        {articles.length === 0 ? (

          <div className="py-12 text-center border border-dashed border-[#ddd3c7] rounded-[28px]">

            <h3 className="font-serif text-[1.6rem] text-[#171412]">
              No articles found
            </h3>

            <p className="mt-4 text-[#5c5550] max-w-[36ch] mx-auto">
              Try a different search or choose another category.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
              />
            ))}

          </div>

        )}

      </div>

    </section>
  );
}

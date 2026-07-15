'use client';

import Link from 'next/link';

type FeaturedArticleProps = {
  article: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readingTime: number;
    date: string;
  } | null;
};

export default function FeaturedArticle({
  article,
}: FeaturedArticleProps) {
  if (!article) return null;

  return (
    <section className="py-16 md:py-20">

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-10">
          Featured Article
        </p>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="text-[0.72rem] tracking-[0.24em] uppercase text-[#8b847c] mb-6">
              {article.category}
            </p>

            <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.03em] text-[#171412] max-w-[14ch]">
              {article.title}
            </h2>

            <p className="mt-8 text-[1rem] leading-[1.95] text-[#6e675f] max-w-[52ch]">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-10 text-[0.85rem] text-[#8b847c]">

              <span>{article.readingTime} min read</span>

              <span>•</span>

              <span>{article.date}</span>

            </div>

            <Link
              href={`/insights/${article.slug}`}
              className="inline-flex items-center justify-center h-[54px] px-10 mt-12 rounded-full bg-[#171412] text-white text-[0.72rem] tracking-[0.22em] uppercase transition-all duration-300 hover:opacity-90"
            >
              Read Article
            </Link>

          </div>

          {/* RIGHT */}

          <div>

            <div className="aspect-[16/10] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#f3ebe1] via-[#ece2d5] to-[#d9bc88]">

              <div className="w-full h-full flex items-end p-10">

                <div className="bg-white/75 backdrop-blur rounded-full px-5 py-3">

                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#8b847c]">
                    Appiah Counselling
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

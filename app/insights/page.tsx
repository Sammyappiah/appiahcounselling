'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { getAllArticles, getAllCategories } from '@/lib/articles';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const allArticles = getAllArticles();
      const allCategories = getAllCategories();
      
      setArticles(allArticles);
      setCategories(['All', ...allCategories]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading articles:', error);
      setIsLoading(false);
    }
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return articles.length > 0 ? articles[0] : null;
  }, [articles]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f3efe8] pt-40 text-[#171412]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10 lg:px-16">
          <p className="text-[#8b847c]">Loading insights...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#171412]">
      {/* HERO SECTION */}
      <section className="border-b border-[#e0d5c4] bg-gradient-to-b from-[#f9f5f0] to-[#f3efe8] pt-40 md:pt-48 lg:pt-56">
        <div className="mx-auto max-w-6xl px-6 pb-16 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#c89b4d]">
              Knowledge Library
            </p>

            <h1 className="mt-6 font-serif text-[2.2rem] leading-[1.1] tracking-[-0.03em] text-[#171412] sm:text-[2.8rem] lg:text-[3.2rem]">
              Counselling Insights
            </h1>

            <p className="mt-6 max-w-[58ch] text-[1rem] leading-[1.75] text-[#6e675f] md:text-[1.05rem]">
              Evidence-based articles exploring mental health, relationships, emotions and personal growth. Each piece is inspired by conversations in therapy and shaped for real life.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <form 
                className="flex flex-1 items-center rounded-full border border-[#ddd3c7] bg-white px-5 py-2 shadow-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 flex-1 bg-transparent text-[0.95rem] text-[#171412] outline-none placeholder:text-[#a89f96]"
                />
                <svg
                  className="h-5 w-5 text-[#8b847c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#d4a24c] px-8 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#171412] transition hover:opacity-90 sm:whitespace-nowrap"
              >
                Subscribe
              </Link>
            </div>

            <p className="mt-3 text-[0.85rem] text-[#8b847c]">
              New articles every week
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER PILLS */}
      <section className="border-b border-[#e0d5c4] bg-[#f3efe8] py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="hidden gap-2 flex-wrap sm:flex">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.2em] transition ${
                  selectedCategory === category
                    ? 'border-[#d4a24c] bg-[#d4a24c] text-white'
                    : 'border-[#d8cec2] bg-white text-[#171412] hover:border-[#c89b4d] hover:bg-[#f9f5f0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 sm:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 rounded-full border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition ${
                  selectedCategory === category
                    ? 'border-[#d4a24c] bg-[#d4a24c] text-white'
                    : 'border-[#d8cec2] bg-white text-[#171412] hover:border-[#c89b4d]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="border-b border-[#e0d5c4] bg-[#f3efe8] py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#c89b4d]">
              Featured
            </p>

            <article className="mt-8 grid gap-8 rounded-[32px] border border-[#ddd3c7] bg-white p-6 shadow-sm md:grid-cols-[1fr_1.2fr] md:gap-10 md:p-8 lg:p-10">
              <div className="aspect-square overflow-hidden rounded-[24px] bg-gradient-to-br from-[#efe6d8] via-[#f7efe4] to-[#d6b884]">
                <div className="flex h-full flex-col justify-between p-6">
                  <div className="h-2 w-16 rounded-full bg-[#d4a24c]" />
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#8b847c]">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full border border-[#d8cec2] bg-[#f9f5f0] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#8b847c]">
                    Most Read
                  </span>

                  <h2 className="mt-4 font-serif text-[1.6rem] leading-[1.15] tracking-[-0.02em] text-[#171412] md:text-[1.8rem]">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-[#6e675f]">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#e0d5c4] pt-6">
                  <span className="text-[0.8rem] font-medium text-[#8b847c]">
                    {featuredArticle.readingTime} min read
                  </span>
                  <span className="text-[#d9cdb9]">•</span>
                  <span className="text-[0.8rem] text-[#8b847c]">
                    {featuredArticle.date}
                  </span>
                  <span className="text-[#d9cdb9]">•</span>
                  <span className="text-[0.8rem] font-medium text-[#c89b4d]">
                    {featuredArticle.category}
                  </span>

                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="ml-auto inline-flex h-10 items-center justify-center rounded-full bg-[#171412] px-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white transition hover:opacity-90"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* LATEST ARTICLES GRID */}
      <section className="border-b border-[#e0d5c4] bg-[#f3efe8] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#c89b4d]">
              Latest Articles
            </p>
            <h2 className="mt-2 font-serif text-[1.8rem] leading-[1.15] text-[#171412] md:text-[2rem]">
              Knowledge for your journey
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="flex flex-col rounded-[24px] border border-[#ddd3c7] bg-white shadow-sm transition hover:shadow-md hover:border-[#d0c6bb]"
                >
                  <div className="aspect-[3/2] overflow-hidden rounded-t-[24px] bg-gradient-to-br from-[#efe6d8] via-[#f7efe4] to-[#d6b884]" />

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex items-center gap-2">
                      <span className="inline-block rounded-full bg-[#f9f5f0] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#8b847c]">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-[1.1rem] leading-[1.25] tracking-[-0.01em] text-[#171412] md:text-[1.2rem]">
                      {article.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-[0.9rem] leading-[1.6] text-[#6e675f]">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto flex flex-col gap-4 border-t border-[#e0d5c4] pt-4">
                      <div className="flex items-center gap-3 text-[0.75rem] text-[#8b847c]">
                        <span className="font-medium">{article.readingTime} min</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <Link
                        href={`/insights/${article.slug}`}
                        className="inline-flex h-9 items-center justify-center rounded-full border border-[#d8cec2] bg-transparent text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:bg-[#f9f5f0]"
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-[#8b847c]">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PODCAST SECTION - COMPACT */}
      <section className="border-b border-[#e0d5c4] bg-gradient-to-b from-[#f3efe8] to-[#efe8df] py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs">
              <div className="aspect-square w-full rounded-[20px] bg-gradient-to-br from-[#efe6d8] via-[#f7efe4] to-[#d6b884] p-5">
                <div className="flex h-full flex-col justify-between rounded-[16px] border border-white/50 bg-white/20 p-4 backdrop-blur">
                  <div className="h-2 w-12 rounded-full bg-[#d4a24c]" />
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#8b847c]">
                    Podcast
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#c89b4d]">
                Appiah Counselling Podcast
              </p>

              <h3 className="mt-3 font-serif text-[1.3rem] leading-[1.2] text-[#171412] md:text-[1.4rem]">
                Thoughtful episodes shaped by real questions
              </h3>

              <p className="mt-3 max-w-[52ch] text-[0.9rem] leading-[1.7] text-[#6e675f] mx-auto md:mx-0">
                Calm conversations exploring anxiety, grief, connection, boundaries and personal growth.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href="/podcast"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[#d4a24c] px-6 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:opacity-90"
                >
                  Spotify
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[#d8cec2] bg-white px-6 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:bg-[#f9f5f0]"
                >
                  Apple
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[#d8cec2] bg-white px-6 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:bg-[#f9f5f0]"
                >
                  YouTube
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[#d8cec2] bg-white px-6 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:bg-[#f9f5f0]"
                >
                  RSS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* END CTA SECTION */}
      <section className="bg-[#f3efe8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="rounded-[28px] border border-[#ddd3c7] bg-white p-8 text-center shadow-sm md:p-12">
            <h2 className="font-serif text-[1.6rem] leading-[1.15] text-[#171412] md:text-[1.9rem]">
              Ready to explore these topics in therapy?
            </h2>

            <p className="mt-4 mx-auto max-w-[56ch] text-[0.95rem] leading-[1.7] text-[#6e675f]">
              Our counselling work combines these insights with personalized support tailored to your unique journey.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#d4a24c] px-8 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#171412] transition hover:opacity-90"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

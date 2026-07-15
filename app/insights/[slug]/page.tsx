import Link from 'next/link';
import { getArticleBySlug, getAllArticles, getAllSlugs } from '@/lib/articles';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article not found | Appiah Counselling',
    };
  }
  
  return {
    title: `${article.title} | Appiah Counselling`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  const allArticles = getAllArticles();
  
  if (!article) {
    return (
      <main className="min-h-screen bg-[#f3efe8] pt-40 text-[#171412]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16 py-20 text-center">
          <h1 className="font-serif text-[2.5rem] text-[#171412]">Article not found</h1>
          <p className="mt-4 text-[#6e675f]">The article you're looking for doesn't exist.</p>
          <Link
            href="/insights"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#d4a24c] px-8 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#171412] transition hover:opacity-90"
          >
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#171412]">
      {/* Article Header */}
      <section className="border-b border-[#e0d5c4] bg-gradient-to-b from-[#f9f5f0] to-[#f3efe8] pt-40 md:pt-48">
        <div className="mx-auto max-w-4xl px-6 pb-16 md:px-10 lg:px-16">
          <Link
            href="/insights"
            className="mb-6 inline-flex items-center gap-2 text-[0.85rem] text-[#8b847c] hover:text-[#171412]"
          >
            ← Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-[#f9f5f0] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#8b847c]">
              {article.category}
            </span>
          </div>

          <h1 className="font-serif text-[2.5rem] leading-[1.15] tracking-[-0.03em] text-[#171412] md:text-[3rem]">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[0.9rem] text-[#8b847c]">
            <span className="font-medium">{article.readingTime} min read</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="border-b border-[#e0d5c4] bg-[#f3efe8] py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl text-[1rem] leading-[1.8] text-[#6e675f] space-y-4 prose prose-sm">
            {article.content.split('\n\n').map((paragraph, i) => (
              paragraph.trim() && (
                <p key={i} className="mb-4">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
        </article>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-b border-[#e0d5c4] bg-[#f3efe8] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#c89b4d]">
              Related Articles
            </p>
            <h2 className="mt-2 font-serif text-[1.8rem] leading-[1.15] text-[#171412] md:text-[2rem]">
              More in {article.category}
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map(relArticle => (
                <Link
                  key={relArticle.slug}
                  href={`/insights/${relArticle.slug}`}
                  className="flex flex-col rounded-[24px] border border-[#ddd3c7] bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#d0c6bb] md:p-6"
                >
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-[#f9f5f0] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#8b847c]">
                      {relArticle.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.1rem] leading-[1.25] tracking-[-0.01em] text-[#171412] md:text-[1.2rem]">
                    {relArticle.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-[0.9rem] leading-[1.6] text-[#6e675f]">
                    {relArticle.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-3 border-t border-[#e0d5c4] pt-4 text-[0.75rem] text-[#8b847c]">
                    <span className="font-medium">{relArticle.readingTime} min</span>
                    <span>•</span>
                    <span>{relArticle.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#f3efe8] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="rounded-[28px] border border-[#ddd3c7] bg-white p-8 text-center shadow-sm md:p-12">
            <h2 className="font-serif text-[1.6rem] leading-[1.15] text-[#171412] md:text-[1.9rem]">
              Ready to explore this in therapy?
            </h2>

            <p className="mt-4 mx-auto max-w-[56ch] text-[0.95rem] leading-[1.7] text-[#6e675f]">
              Our counselling work explores these topics in depth with personalized support tailored to your unique situation.
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

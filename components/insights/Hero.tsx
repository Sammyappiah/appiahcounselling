'use client';

import Link from 'next/link';

type HeroProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export default function Hero({
  searchQuery,
  setSearchQuery,
}: HeroProps) {
  return (
    <section className="pt-28 md:pt-32 lg:pt-36 pb-14 border-b border-[#e3d8cb]">

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-10">
          Counselling Knowledge Library
        </p>

        <h1 className="font-serif text-[1.42rem] leading-[1.02] tracking-[-0.035em] text-[#171412] max-w-[12ch]">
          Counselling
          <br />
          Insights
        </h1>

        <div className="w-24 h-px bg-[#c89b4d] mt-12 mb-12" />

        <p className="text-[1rem] leading-[1.95] text-[#6e675f] max-w-[42ch]">
          Evidence-based articles exploring mental health,
          relationships, emotional wellbeing and personal
          growth, inspired by questions discussed throughout
          the Appiah Counselling Podcast.
        </p>

        <div className="mt-12 flex flex-col lg:flex-row gap-5 lg:items-center">

          <div className="w-full lg:max-w-[520px]">

            <div className="flex items-center rounded-full border border-[#ddd3c7] bg-white px-6 h-[58px]">

              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[0.96rem] text-[#171412] placeholder:text-[#a19a91]"
              />

              <svg
                className="w-5 h-5 text-[#8b847c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>

            </div>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[58px] px-10 rounded-full bg-[#d4a24c] text-[#171412] text-[0.72rem] tracking-[0.24em] uppercase whitespace-nowrap transition-all duration-300 hover:opacity-90"
          >
            Subscribe
          </Link>

        </div>

      </div>

    </section>
  );
}

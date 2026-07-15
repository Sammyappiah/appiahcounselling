'use client';

import Link from "next/link";

export default function PodcastCTA() {
  return (
    <section className="py-20 border-t border-[#e3d8cb]">

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid lg:grid-cols-[340px_1fr] gap-14 items-center">

          {/* Artwork */}

          <div className="aspect-square rounded-[32px] overflow-hidden bg-gradient-to-br from-[#efe6d8] via-[#f6eee4] to-[#d7ba84]">

            <div className="flex h-full items-center justify-center">

              <div className="text-center">

                <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#8b847c] mb-4">
                  Podcast
                </p>

                <h3 className="font-serif text-[2rem] leading-[1.05] text-[#171412]">
                  Appiah
                  <br />
                  Counselling
                </h3>

              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-6">
              Listen to the Podcast
            </p>

            <h2 className="font-serif text-[2rem] leading-[1.05] tracking-[-0.03em] text-[#171412] max-w-[16ch]">
              Continue the conversation beyond the articles.
            </h2>

            <p className="mt-8 max-w-[58ch] text-[1rem] leading-[1.95] text-[#6e675f]">
              Every article is inspired by conversations taking place on
              the Appiah Counselling Podcast. Explore relationships,
              anxiety, emotional wellbeing, boundaries and everyday
              psychological life through calm, thoughtful discussions.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr"
                target="_blank"
                className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-[#171412] text-white text-[0.72rem] uppercase tracking-[0.22em]"
              >
                Spotify
              </Link>

              <Link
                href="https://podcasts.apple.com/gb/podcast/everyday-counselling/id1863535119"
                target="_blank"
                className="inline-flex items-center justify-center h-[54px] px-8 rounded-full border border-[#ddd3c7] text-[#171412] text-[0.72rem] uppercase tracking-[0.22em]"
              >
                Apple Podcasts
              </Link>

              <Link
                href="/podcast"
                className="inline-flex items-center justify-center h-[54px] px-8 rounded-full border border-[#ddd3c7] text-[#171412] text-[0.72rem] uppercase tracking-[0.22em]"
              >
                View Podcast
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

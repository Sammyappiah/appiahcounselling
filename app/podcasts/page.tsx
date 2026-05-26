import Link from "next/link";
import { Headphones, Podcast } from "lucide-react";

export default function PodcastPage() {
  return (
    <main className="bg-[#f4efe7] text-[#171412] min-h-screen pt-32 md:pt-40">

      <section className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 pt-10 md:pt-12 lg:pt-16 pb-24">

        <div className="max-w-[720px]">

          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-10">
            Reflective Conversations
          </p>

          <h1 className="font-serif text-[1.5rem] md:text-[2.1rem] leading-[1.05] tracking-[-0.04em] text-[#171412] max-w-[900px]">
            Conversations exploring emotional life, relationships,
            identity, and modern pressure.
          </h1>

          <div className="w-24 h-px bg-[#c89b4d] mt-12 mb-12" />

          <p className="text-[1rem] leading-[2] text-[#6e675f] max-w-[620px]">
            Honest, reflective discussions exploring emotional wellbeing,
            relationships, identity, emotional resilience, work stress,
            emotional exhaustion, and the quieter experiences often carried
            beneath everyday life.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-14">

            <Link
              href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr"
              target="_blank"
              className="inline-flex items-center gap-3 h-[54px] px-10 rounded-full border border-[#d8cfc1] text-[#171412] tracking-[0.18em] uppercase text-[0.76rem] hover:bg-[#ece4d7] transition"
            >
              <Headphones size={18} />
              Spotify
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-3 h-[54px] px-10 rounded-full bg-[#d4a24c] text-[#171412] tracking-[0.18em] uppercase text-[0.76rem] hover:opacity-90 transition"
            >
              <Podcast size={18} />
              Apple Podcasts
            </Link>

          </div>

        </div>

        {/* FEATURED EPISODE */}
        <div className="mt-24">

          <div className="bg-[#f8f4ee] border border-[#ddd3c7] rounded-[36px] p-10 md:p-14 max-w-[900px]">

            <div className="flex items-center gap-3 mb-8">

              <Headphones size={18} className="text-[#c89b4d]" />

              <p className="text-[0.72rem] tracking-[0.28em] uppercase text-[#c89b4d]">
                Featured Episode
              </p>

            </div>

            <h2 className="font-serif text-[1.8rem] md:text-[2.4rem] leading-[1.08] tracking-[-0.04em] text-[#171412] max-w-[680px]">
              Why you shut down in relationships.
            </h2>

            <p className="text-[#6e675f] text-[1rem] leading-[2] mt-8 max-w-[620px]">
              Exploring emotional withdrawal, defensiveness, overwhelm,
              and the deeper relational patterns beneath disconnection.
            </p>

            <div className="mt-10">

              <Link
                href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr"
                target="_blank"
                className="inline-flex items-center justify-center h-[54px] px-10 rounded-full bg-[#d4a24c] text-[#171412] tracking-[0.18em] uppercase text-[0.76rem] hover:opacity-90 transition"
              >
                Listen Now
              </Link>

            </div>

          </div>

        </div>

        {/* TOPICS */}
        <div className="mt-28">

          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-12">
            Topics
          </p>

          <div className="flex flex-wrap gap-5">

            {[
              "Relationships",
              "Work Stress",
              "Anxiety",
              "Burnout",
              "Emotional Exhaustion",
              "Self Awareness",
              "Attachment",
              "Identity",
              "Overthinking",
              "Intimacy",
              "Emotional Regulation",
              "Communication",
              "Self Esteem",
              "Dating",
              "Boundaries",
            ].map((topic) => (
              <div
                key={topic}
                className="px-8 py-4 rounded-full bg-[#e5ddd2] text-[#171412] uppercase tracking-[0.18em] text-[0.72rem]"
              >
                {topic}
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

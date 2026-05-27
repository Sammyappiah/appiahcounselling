import Link from "next/link";

const topics = [
  { label: "RELATIONSHIPS", color: "bg-[#eadfd5]" },
  { label: "WORK STRESS", color: "bg-[#dbe3ea]" },
  { label: "ANXIETY", color: "bg-[#dde2d3]" },
  { label: "BURNOUT", color: "bg-[#ddd4e6]" },

  { label: "EMOTIONAL EXHAUSTION", color: "bg-[#eadcc8]" },
  { label: "SELF AWARENESS", color: "bg-[#e3d8dc]" },
  { label: "ATTACHMENT", color: "bg-[#d8e3e2]" },

  { label: "IDENTITY", color: "bg-[#ddd7cf]" },
  { label: "OVERTHINKING", color: "bg-[#d9dfd4]" },
  { label: "INTIMACY", color: "bg-[#d9dee8]" },
  { label: "EMOTIONAL REGULATION", color: "bg-[#ead8ce]" },

  { label: "COMMUNICATION", color: "bg-[#d9ddeb]" },
  { label: "SELF ESTEEM", color: "bg-[#ead9b8]" },
  { label: "DATING", color: "bg-[#dbe1d5]" },
  { label: "BOUNDARIES", color: "bg-[#e5ddd8]" },
];

export default function PodcastPage() {
  return (
    <main className="bg-[#f4efe7] min-h-screen pt-32 md:pt-40">

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-28">

        <div className="max-w-[1200px]">

          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-12">
            Reflective Conversations
          </p>

<h1 className="font-serif text-[1.42rem] md:text-[3.8rem] leading-[1.02] tracking-[-0.035em] text-[#171412] max-w-[980px]">
            Conversations exploring emotional life, relationships,
            identity, and modern pressure.
          </h1>

          <div className="w-24 h-px bg-[#c89b4d] mt-12 mb-12" />

          <p className="text-[1rem] md:text-[1.12rem] leading-[2] text-[#6e675f] max-w-[720px]">
            Honest, reflective discussions exploring emotional wellbeing,
            relationships, identity, emotional resilience, work stress,
            emotional exhaustion, and the quieter experiences often
            carried beneath everyday life.
          </p>

          <div className="flex flex-wrap gap-4 mt-14">

            <Link
              href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr"
              target="_blank"
              className="inline-flex items-center justify-center h-[58px] px-10 rounded-full border border-[#d7cdc1] text-[#171412] tracking-[0.18em] text-[0.78rem]"
            >
              SPOTIFY
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center h-[58px] px-10 rounded-full bg-[#d4a24c] text-[#171412] tracking-[0.18em] text-[0.78rem]"
            >
              APPLE PODCASTS
            </Link>

          </div>

        </div>

        {/* TOPICS */}

        <div className="mt-32">

          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-10">
            Topics
          </p>

          <div className="flex flex-wrap gap-6">

            {topics.map((topic) => (
              <div
                key={topic.label}
                className={`${topic.color} rounded-full px-12 py-6`}
              >
                <p className="text-[0.82rem] tracking-[0.22em] text-[#171412] whitespace-nowrap">
                  {topic.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

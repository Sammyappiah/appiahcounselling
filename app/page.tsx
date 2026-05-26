import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#f3efe8] min-h-screen pt-32 md:pt-40">

      {/* HERO */}
      <section className="bg-[#f3efe8]">

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="grid lg:grid-cols-[520px_1fr] gap-16 lg:gap-24 pt-10 md:pt-12 lg:pt-16 pb-16">

            {/* LEFT COLUMN */}
            <div className="max-w-[520px]">

              <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-12">
                Thoughtful Therapy
              </p>

              <h1 className="font-serif text-[1.42rem] md:text-[1.9rem] lg:text-[2.25rem] leading-[1.02] tracking-[-0.035em] text-[#1a1412]">
                Therapy that gets to the root,
                <br />
                not just the symptoms.
              </h1>

              <div className="w-24 h-px bg-[#c89b4d] mt-12 mb-12" />

              <p className="text-[1rem] leading-[1.95] text-[#6e675f] max-w-[36ch]">
                Calm, reflective therapy for people carrying emotional exhaustion,
                anxiety, overthinking, and relational tension beneath the surface.
              </p>

              <div className="mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-[54px] px-10 rounded-full bg-[#d4a24c] text-[#171412] text-sm tracking-[0.08em] uppercase hover:opacity-90 transition"
                >
                  Book Session
                </Link>
              </div>

            </div>

            {/* DESKTOP IMAGE */}
            <div className="hidden lg:flex items-end justify-end">

              <div className="w-full max-w-[760px]">
                <Image
                  src="/images/therapy.jpg"
                  alt="Therapy session"
                  width={1400}
                  height={1000}
                  priority
                  className="rounded-[2rem] object-cover aspect-[4/3]"
                />
              </div>

            </div>

          </div>

          {/* MOBILE IMAGE */}
          <div className="lg:hidden pb-16">

            <Image
              src="/images/therapy.jpg"
              alt="Therapy session"
              width={1400}
              height={1000}
              priority
              className="rounded-[2rem] object-cover aspect-[4/3]"
            />

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="mt-16 md:mt-24 border-t border-[#ddd3c7] pt-16">

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">

          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-14">
            Client Reflections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#f5f1eb] border border-[#ddd3c7] rounded-[32px] p-8 md:p-10">
              <p className="font-serif text-[1.25rem] leading-[1.45] tracking-[-0.02em] text-[#171412]">
                “Samuel holds space with honesty, understanding, and without judgement.”
              </p>
            </div>

            <div className="bg-[#f5f1eb] border border-[#ddd3c7] rounded-[32px] p-8 md:p-10">
              <p className="font-serif text-[1.25rem] leading-[1.45] tracking-[-0.02em] text-[#171412]">
                “I was made to feel relaxed and ready to open up.”
              </p>
            </div>

            <div className="bg-[#f5f1eb] border border-[#ddd3c7] rounded-[32px] p-8 md:p-10">
              <p className="font-serif text-[1.25rem] leading-[1.45] tracking-[-0.02em] text-[#171412]">
                “Thoughtful, insightful, and genuinely easy to talk to.”
              </p>
            </div>

            <div className="bg-[#f5f1eb] border border-[#ddd3c7] rounded-[32px] p-8 md:p-10">
              <p className="font-serif text-[1.25rem] leading-[1.45] tracking-[-0.02em] text-[#171412]">
                “The sessions helped me understand patterns I hadn’t previously seen.”
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

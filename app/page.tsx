import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#f3efe8] min-h-screen pt-10 md:pt-12">

      {/* HERO */}
      <section className="bg-[#f3efe8]">

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="grid lg:grid-cols-[520px_1fr] gap-10 lg:gap-10 pt-0 pb-12">

            {/* LEFT COLUMN */}
            <div className="max-w-[520px]">

              <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-12">
                Thoughtful Therapy
              </p>

<h1 className="font-serif text-[1.42rem] leading-[1.02] tracking-[-0.035em] text-[#171412] max-w-[420px]">
                Therapy that gets to the root,
                <br />
                not just the symptoms.
              </h1>

              <div className="mx-auto mt-10 mb-10 h-px w-40 bg-[#c89b4d]" />

              <p className="text-[1rem] leading-8 text-[#5c5550] max-w-[32ch]">
                Calm, reflective therapy for people carrying emotional exhaustion,
                anxiety, overthinking, and relational tension beneath the surface.
              </p>

              <div className="mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-[50px] px-8 rounded-full bg-[#d4a24c] text-[#171412] text-sm tracking-[0.12em] font-medium uppercase hover:opacity-90 transition"
                >
                  Book Session
                </Link>
              </div>

            </div>

            {/* DESKTOP IMAGE */}
            <div className="hidden lg:flex items-end justify-end">

              <div className="w-full max-w-[800px]">
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
          <div className="lg:hidden pb-12">

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

<section className="mt-10 md:mt-10 border-t border-[#ddd3c7] py-10 md:py-12">

  <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">

    <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-[#c89b4d]">
      Client Reflections
    </p>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

      <div className="rounded-[28px] border border-[#ddd3c7] bg-[#f5f1eb] p-6 md:p-6">
        <p className="font-serif text-[1.08rem] leading-[1.6] tracking-[-0.02em] text-[#171412]">
          “Samuel holds space with honesty, understanding, and without judgement.”
        </p>
      </div>

      <div className="rounded-[28px] border border-[#ddd3c7] bg-[#f5f1eb] p-6 md:p-6">
        <p className="font-serif text-[1.08rem] leading-[1.6] tracking-[-0.02em] text-[#171412]">
          “I was made to feel relaxed and ready to open up.”
        </p>
      </div>

      <div className="rounded-[28px] border border-[#ddd3c7] bg-[#f5f1eb] p-6 md:p-6">
        <p className="font-serif text-[1.08rem] leading-[1.6] tracking-[-0.02em] text-[#171412]">
          “Thoughtful, insightful, and genuinely easy to talk to.”
        </p>
      </div>

      <div className="rounded-[28px] border border-[#ddd3c7] bg-[#f5f1eb] p-6 md:p-6">
        <p className="font-serif text-[1.08rem] leading-[1.6] tracking-[-0.02em] text-[#171412]">
          “The sessions helped me understand patterns I hadn’t previously seen.”
        </p>
      </div>

    </div>

  </div>

</section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Appiah Counselling – Home",
  description:
    "Online counselling for adults and couples seeking clarity, connection and grounded emotional support.",
};

export default function HomePage() {
  return (
    <main className="pt-32">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center pb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#4A4033] leading-snug">
            Calm. Clarity. <br /> At your pace.
          </h1>

          <p className="mt-6 text-lg text-[#6A5F55] leading-relaxed max-w-md">
            I’m Samuel Appiah, a counsellor who offers a calm, grounded space for
            people feeling overwhelmed or stuck. We talk through what is
            happening, find clarity and work toward steadier days — always at
            your pace.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/services"
              className="px-6 py-3 bg-[#C46A2D] text-white rounded-lg font-semibold shadow-sm hover:opacity-90 transition"
            >
              View Services
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-[#C46A2D] text-[#C46A2D] rounded-lg font-semibold hover:bg-[#C46A2D]/10 transition"
            >
              Ask a Question
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/Solo1.jpg"
            alt="Counsellor portrait"
            fill
            className="object-cover object-[50%_20%]"
            priority
          />
        </div>
      </section>

      {/* PEOPLE OFTEN COME FOR */}
      <section className="bg-[#FCFAF7] py-20 border-y border-[#E9E4DE]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-semibold text-[#4A4033]">
            People often come for
          </h2>

          <p className="mt-4 text-lg text-[#6A5F55] max-w-2xl mx-auto">
            Many people arrive feeling like they should be coping better.  
            You do not have to keep carrying everything on your own.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-[#4A4033] font-medium">
            <p className="bg-white rounded-xl p-6 shadow-sm">
              Anxiety or constant worry
            </p>
            <p className="bg-white rounded-xl p-6 shadow-sm">
              Feeling low or disconnected
            </p>
            <p className="bg-white rounded-xl p-6 shadow-sm">
              Stress and burnout
            </p>
            <p className="bg-white rounded-xl p-6 shadow-sm">
              Relationship tension or distance
            </p>
            <p className="bg-white rounded-xl p-6 shadow-sm">
              Communication struggles
            </p>
            <p className="bg-white rounded-xl p-6 shadow-sm">
              Past experiences affecting the present
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}

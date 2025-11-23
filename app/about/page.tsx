"use client";

import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <div>
          <Image
            src="/Therapist1.jpg"
            alt="Samuel Appiah"
            width={600}
            height={800}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            About me
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm Samuel Appiah, a counsellor who offers a calm, grounded space for
            people feeling overwhelmed, stuck, or simply needing somewhere to talk.
            Together we explore what is happening in your life, how it feels in
            your body, and what matters most right now.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            My approach is warm, steady and collaborative. I draw on integrative
            and relational approaches, adapting our work to suit you rather than
            expecting you to fit a fixed model.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Whether you're navigating anxiety, low mood, life shifts, work stress
            or relationship difficulties, we move at your pace — slowing down,
            finding clarity, and supporting you to move forward.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
{/* TESTIMONIALS */}
<section className="bg-[#FAF7F2] py-20 px-6 md:px-10 mt-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
      What clients say
    </h2>

    <p className="text-lg text-slate-700 mb-10 max-w-2xl">
      These are anonymised reflections shared with permission, offering a sense of
      how counselling with me can feel.
    </p>

    <TestimonialsCarousel />
  </div>
</section>
    </main>
  );
}

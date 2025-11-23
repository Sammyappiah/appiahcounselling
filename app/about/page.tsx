import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata = {
  title: "About | Appiah Counselling",
  description: "Learn more about Samuel Appiah and his counselling approach.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* TOP SECTION: IMAGE + TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/Therapist.jpg"
              alt="Samuel Appiah"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* About text */}
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
              About me
            </h1>

            <p className="text-slate-800 leading-relaxed">
              I&apos;m Samuel. My approach is steady, warm and collaborative.
            </p>

            <p className="text-slate-800 leading-relaxed">
              I draw on integrative and relational approaches, shaping the work
              around you rather than expecting you to fit into a model.
            </p>

            <p className="text-slate-800 leading-relaxed">
              Together we explore what&apos;s happening in your life, how it
              feels in your mind and body and what matters most right now.
            </p>

            <p className="text-slate-800 leading-relaxed">
              We move at your pace slowing things down, finding clarity and
              supporting you to move forward.
            </p>
          </div>
        </div>

        {/* SPACING */}
        <div className="my-20" />

        {/* TESTIMONIALS */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-6">
            What clients say
          </h2>

          <TestimonialsCarousel />
        </section>
      </div>
    </main>
  );
}

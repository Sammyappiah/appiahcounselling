"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-[#111] bg-[#FCFAF7]">
      <section className="pt-24 text-center">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">About</h1>
        {/* Orange line same length as "About" */}
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full inline-block w-[5ch]" />
        <p className="text-[17px] md:text-[18px] text-[#333]/90 mb-10">
          Calm. Connected. Compassionate.
        </p>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full px-6">
          <article className="mx-auto w-full md:w-[900px] bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_18px_48px_rgba(0,0,0,0.06)] overflow-hidden">
            <img
              src="/couple.jpeg"
              alt="Therapy session"
              className="block w-full h-[420px] object-cover object-center"
            />
            <div className="px-8 md:px-10 py-10 text-center md:text-left max-w-[720px] mx-auto space-y-6">
              <p className="text-[18px] text-[#333] leading-relaxed">
                In a calm setting, you can breathe and simply be.
              </p>
              <p className="text-[18px] text-[#333] leading-relaxed">
                Through a connected exchange, your voice finds space to unfold.
              </p>
              <p className="text-[18px] text-[#333] leading-relaxed">
                A compassionate approach ensures you feel genuinely supported throughout your journey.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

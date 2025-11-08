"use client";
import useFadeUp from "@/lib/useFadeUp";

export default function ContactPage() {
  useFadeUp();

  return (
    <main className="min-h-screen bg-[#FCFAF7] text-[#111] font-sans pb-20">
      <section className="text-center px-6 pt-[140px] fade-up">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">
          Contact
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
        <p className="text-[18px] md:text-[20px] text-[#333]/90 max-w-2xl mx-auto leading-[1.8]">
          To book a session or discuss therapy options, please email or call us.
        </p>
      </section>

      <section className="fade-up mt-10 flex justify-center">
        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-md p-8 w-full max-w-lg text-center">
          <p className="text-[18px] mb-2">📧 info@appiahcounselling.co.uk</p>
          <p className="text-[18px]">📞 0123 456 789</p>
        </div>
      </section>
    </main>
  );
}

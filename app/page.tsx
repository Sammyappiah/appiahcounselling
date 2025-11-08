"use client";
import useFadeUp from "@/lib/useFadeUp";

export default function HomePage() {
  useFadeUp();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FCFAF7] text-[#111] font-sans">
      <section className="pt-[160px] fade-up">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">
          Welcome
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full w-[8ch]" />
        <p className="text-[18px] md:text-[20px] text-[#333]/90 max-w-xl mx-auto leading-[1.8]">
          Calm, confidential therapy for individuals and couples — a space to
          reflect, realign, and move forward with clarity.
        </p>
      </section>
    </main>
  );
}

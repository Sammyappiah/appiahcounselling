"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FCFAF7]">
      <section className="pt-16">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">Welcome</h1>
        {/* Orange line same length as "Welcome" */}
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full inline-block w-[8ch]" />
        <p className="text-[17px] md:text-[18px] text-[#333]/90">
          Here for Your Wellbeing and Growth.
        </p>
      </section>

      <section className="flex-1 flex items-center justify-center">
        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)] px-10 py-12 max-w-2xl mx-auto text-center mt-10">
          <h2 className="font-serif text-[26px] md:text-[30px] mb-6">What Clients Say</h2>
          <p className="text-[18px] italic text-[#333]/90 transition-opacity duration-1000 ease-in-out">
            “{testimonials[index]}”
          </p>
        </div>
      </section>
    </main>
  );
}

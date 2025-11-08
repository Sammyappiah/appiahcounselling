"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!testimonials?.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src="/therapy-room.jpg"
        alt="Therapy Room"
        width={1200}
        height={600}
        className="rounded-2xl shadow-md object-cover w-full max-w-5xl mb-10"
      />
      <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">Welcome</h1>
      <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
      <p className="text-[18px] text-[#333]/90 mb-10">
        Here for Your Wellbeing and Growth.
      </p>
      <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)] px-10 py-10 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-[26px] md:text-[30px] mb-6">What Clients Say</h2>
        <div className="min-h-[160px] flex items-center justify-center">
          <p key={index} className="text-[18px] italic text-[#333]/90 leading-relaxed transition-opacity duration-700 ease-in-out">
            &ldquo;{testimonials[index]}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

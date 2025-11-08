"use client";

import { useEffect, useMemo, useState } from "react";
import { testimonials as RAW } from "@/lib/testimonials";

const INTERVAL_MS = 6000;

export default function Testimonials() {
  const items = useMemo(() => RAW.filter(t => t.text?.trim().length > 0), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [items.length]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const current = items[index];

  return (
    <section
      aria-label="Client testimonials"
      className="relative px-6 py-16 bg-gradient-to-b from-[#FDFBF9] via-[#FCF9F5] to-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-[34px] md:text-[40px] font-serif font-semibold mb-4">
          Client Testimonials
        </h2>
        <div className="w-[72px] h-[4px] bg-[#B85B35] mx-auto rounded-full" />
      </div>

      <div className="max-w-[900px] mx-auto">
        <article
          key={index}
          className="relative bg-[#FCF9F5] border border-[#E6D8CA] rounded-3xl shadow-sm p-8 md:p-12 min-h-[260px] flex items-center justify-center transition-opacity duration-500"
        >
          <span className="pointer-events-none select-none absolute -top-6 left-4 text-[120px] md:text-[140px] leading-none text-[#E8D6C2]/50 font-serif">
            “
          </span>
          <blockquote className="relative z-10 text-center italic text-[17px] md:text-[18px] leading-[1.9] max-w-[680px] mx-auto">
            {current.text}
          </blockquote>
        </article>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="rounded-full border border-[#B85B35]/30 bg-white px-5 py-2 text-sm hover:shadow transition-shadow"
          >
            ←
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="rounded-full border border-[#B85B35]/30 bg-white px-5 py-2 text-sm hover:shadow transition-shadow"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// components/Testimonials.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { testimonials } from "@/lib/testimonials";

const INTERVAL_MS = 6000; // auto-advance

export default function Testimonials() {
  const items = useMemo(() => testimonials, []);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % items.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [items.length]);

  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#FDFBF9] via-[#FCF9F5] to-white py-20 px-6"
    >
      <div className="text-center mb-10">
        <h2 className="text-[34px] md:text-[40px] font-serif font-semibold mb-4">
          Client Testimonials
        </h2>
        <div className="w-[72px] h-[4px] bg-[#B85B35] mx-auto rounded-full" />
      </div>

      {/* Single card box */}
      <div className="max-w-3xl mx-auto relative">
        <div className="relative bg-[#FCF9F5] border border-[#E6D8CA] rounded-3xl shadow-sm p-8 md:p-12 min-h-[260px] flex items-center justify-center">
          <span className="pointer-events-none select-none absolute -top-6 left-4 text-[120px] leading-none text-[#E8D6C2]/50 font-serif">
            “
          </span>

          {/* Fader */}
          <div key={i} className="fade-swap text-center">
            <blockquote className="relative z-10 italic text-[17px] md:text-[18px] leading-[1.9]">
              {items[i].text}
            </blockquote>
          </div>
        </div>

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

      <style jsx>{`
        .fade-swap {
          animation: fade 480ms ease;
        }
        @keyframes fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

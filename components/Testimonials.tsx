"use client";

import { useEffect, useState, useRef } from "react";
import type { TouchEvent } from "react";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Touch tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextWithFade();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNextWithFade = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
      setFade(true);
    }, 400);
  };

  const handlePrevWithFade = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setFade(true);
    }, 400);
  };

  // Handle touch start/end (swipe)
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;

    // Need at least 50px swipe
    if (Math.abs(delta) < 50) return;

    if (delta > 0) {
      // swipe left → next
      handleNextWithFade();
    } else {
      // swipe right → prev
      handlePrevWithFade();
    }
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="text-center py-[80px] px-6 bg-[#FCFAF7]">
      <h2 className="font-serif text-[28px] md:text-[32px] font-semibold text-[#111] mb-6">
        What Clients Say
      </h2>

      <div
        className="relative max-w-3xl mx-auto bg-white rounded-3xl border border-[#E6D8CA] shadow-sm px-6 py-10 min-h-[220px] flex flex-col justify-center items-center overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Left arrow – desktop only */}
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={handlePrevWithFade}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#E6D8CA] bg-white/90 text-[#555] hover:bg-[#FCFAF7] hover:text-[#111] transition"
        >
          ‹
        </button>

        {/* Testimonial text */}
        <div
          key={index}
          className={`max-w-2xl transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[20px] leading-[1.8] italic text-[#444]">
            “{t.quote}”
          </p>
        </div>

        {/* Right arrow – desktop only */}
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={handleNextWithFade}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#E6D8CA] bg-white/90 text-[#555] hover:bg-[#FCFAF7] hover:text-[#111] transition"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => {
              if (i === index) return;
              setFade(false);
              setTimeout(() => {
                setIndex(i);
                setFade(true);
              }, 200);
            }}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index
                ? "bg-[#5E8164] w-5"
                : "bg-[#D3C7B8] hover:bg-[#B9AB97]"
            }`}
          />
        ))}
      </div>

      {/* Small swipe hint for mobile */}
      <p className="mt-4 text-sm text-[#777] md:hidden">
        Swipe left or right to see more
      </p>
    </section>
  );
}

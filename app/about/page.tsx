"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center pt-[120px] md:pt-[140px] pb-[80px] px-6 fade-up">
        <h1 className="text-[44px] md:text-[54px] mb-4 font-serif font-semibold">
          About
        </h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mb-8 rounded-full" />
        <p className="max-w-[720px] mx-auto text-[22px] leading-[1.8] font-light mt-6">
          Calm. Connected. Compassionate.
        </p>
      </section>

      {/* Contained Image */}
      <section className="relative max-w-5xl mx-auto px-6 fade-up mb-[80px]">
        <div className="relative rounded-3xl shadow-lg border border-[#E6D8CA] bg-[#FCF9F5] p-2">
          <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden rounded-[20px]">
            <Image
              src="/couple.jpeg"
              alt="Couple in therapy session"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 900px"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="text-center max-w-[750px] mx-auto px-6 fade-up pb-[100px]">
        <p className="text-[19px] md:text-[20px] leading-[1.9] font-light">
          A calm, safe, and confidential environment for individuals and couples
          to explore challenges, strengthen emotional resilience, and rediscover
          clarity and connection through compassionate, evidence-based therapy.
        </p>
      </section>

      {/* Fade-in animation styling */}
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}

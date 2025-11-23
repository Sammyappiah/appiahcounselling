"use client";

import { useEffect, useRef } from "react";

export default function PageHeader({ title }: { title: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      if (lineRef.current) {
        lineRef.current.style.transform = "scaleX(1)";
      }
    });
  }, []);

  return (
    <section className="text-center pt-28 md:pt-32">
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-bold mb-4 text-[#111]"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        {title}
      </h1>
      <div
        ref={lineRef}
        className="w-16 h-[3px] bg-[#B45A30] mx-auto rounded-full"
        style={{ transform: "scaleX(0)", transition: "transform 800ms ease-out" }}
      />
    </section>
  );
}

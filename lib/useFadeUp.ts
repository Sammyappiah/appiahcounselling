"use client";
import { useEffect } from "react";

/**
 * useFadeUp
 * Adds a fade-up effect to elements with className="fade-up"
 * when they come into view.
 */
export default function useFadeUp() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

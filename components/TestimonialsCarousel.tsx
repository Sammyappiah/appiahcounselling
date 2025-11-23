"use client";

import { useEffect, useState } from "react";

const testimonials = [
  "Samuel holds space for me to be open, transparent and honest. He listens with understanding and without judgement and helps me navigate through situations.",
  "I was extremely anxious about the first session but I ought not have been. I was made to feel relaxed and ready to open up.",
  "I've had 3 sessions so far and cannot recommend Samuel enough. I feel uplifted and my confidence grows day by day.",
  "He has taught me coping mechanisms and how to change thoughts and behaviours that were holding me back.",
  "We’ve only had our first session, but we left feeling energised and hopeful.",
  "We have had 3 sessions with Samuel and although the sessions are hard, he is patient and caring.",
  "Samuel has really been supportive, respectful and listened in all the sessions we’ve had.",
  "We have not been working with Sam for very long, yet his sessions have been transformative.",
  "The challenges he sets are impactful and help us in between sessions.",
  "He is easy to talk to and makes us both feel comfortable.",
  "Samuel has been who I needed at this time in my life.",
  "Amazing therapist — great progress already. Highly recommend."
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mt-20 text-center mx-auto max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        What clients say
      </h2>

      <p className="text-slate-700 text-base md:text-lg leading-relaxed px-4">
        “{testimonials[index]}”
      </p>

      <p className="mt-4 text-xs text-slate-500">Shared anonymously</p>
    </section>
  );
}

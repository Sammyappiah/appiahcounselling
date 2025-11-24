"use client";

import { useEffect, useState } from "react";

const testimonials = [
  // NEW TESTIMONIALS YOU JUST GAVE ME
  {
    text: "Samuel holds space for me to be open, transparent and honest. He listens with understanding and without judgement and helps me navigate through situations. I was extremely anxious about the first session but I ought not have been. I was made to feel relaxed and ready to open up.",
  },
  {
    text: "Samuel is a great therapist. Just what I needed to help me begin to process some things and shift some unhelpful behaviours. I look forward to continuing our work together.",
  },

  // EXISTING TESTIMONIALS (kept exactly as before)
  { text: "I've had 3 sessions so far and cannot recommend Samuel enough. I feel uplifted and my confidence is growing day by day. Highly recommend!" },
  { text: "Extremely helpful and friendly. He keeps things light and makes you feel very comfortable. Techniques, critical thinking, the whole package — 100% recommend." },
  { text: "We’ve only had our first session, but we left feeling energised and hopeful. Looking forward to more." },
  { text: "We have had 3 sessions with Samuel. He is patient, caring and understands both sides without judgement. His communication is outstanding — highly recommended." },
  { text: "Sessions with Sam have been transformative. He listens deeply and understands needs you didn’t even realise you had. Highly recommend." },
  { text: "Samuel has helped me set challenges and goals to improve my emotional resilience. I highly recommend him." },
  { text: "Samuel provides great insight and helps improve life in different aspects. Great individual." },
  { text: "Amazing therapist! I've seen real progress. Easy to talk to, great listener, lovely advice — highly recommended." },
  { text: "Grateful for my exchanges with Samuel." },
  { text: "Samuel makes everything easy." },
];

// Shuffle testimonials each time page loads
const shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % shuffledTestimonials.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center px-4 py-10">
      <p className="text-lg md:text-xl text-slate-700 leading-relaxed transition-opacity duration-500">
        “{shuffledTestimonials[index].text}”
      </p>
    </div>
  );
}

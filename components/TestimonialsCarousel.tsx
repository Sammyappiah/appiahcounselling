"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Samuel holds space for me to be open, transparent and honest. He listens with understanding and without judgement and helps me navigate through situations. I was extremely anxious about the first session but I ought not have been. I was made to feel relaxed and ready to open up."
  },
  {
    quote:
      "I've had 3 sessions so far and cannot recommend Samuel enough. I have felt uplifted and my confidence is growing day by day after these sessions. He has taught me coping mechanisms and how to manage or change certain thoughts and behaviours that were holding me back. My mindset feels like it is shifting for the better."
  },
  {
    quote:
      "Extremely helpful and friendly, will support you and keep it light. He makes you feel extremely comfortable — very easy to open up with him. Techniques, critical thinking, the whole package. I would 100% recommend Samuel!"
  },
  {
    quote:
      "We've only had our first session, but we left feeling energised and hopeful. I look forward to our next sessions!"
  },
  {
    quote:
      "We have had 3 sessions with Samuel and although the sessions are hard, he is patient, caring and constantly working to understand both sides without judgement. His communication skills are outstanding and I’d recommend him 100%."
  },
  {
    quote:
      "We have not been working with Samuel for very long, yet his sessions have been truly transformative. He listens deeply and understands needs — even the ones we were not aware of. His challenges and homework are impactful and help us progress between sessions. Highly recommend."
  },
  {
    quote:
      "Samuel has been who I needed at this time in my life. He listens without judgement, offers guidance and helps me set goals to improve my emotional resilience. I highly recommend Samuel."
  },
  {
    quote:
      "Samuel is thoughtful, mindful and experienced. He understands my concerns clearly and offers insights that help me improve many areas of my life. A great therapist."
  },
  {
    quote:
      "Amazing therapist! I've seen great progress with the help of Samuel — very easy to talk to, a great listener, thoughtful advice. Definitely recommend reaching out!"
  },
  {
    quote: "Grateful for my conversations with Samuel."
  },
  {
    quote: "Samuel makes everything feel easy."
  }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto text-center py-10">
      <div className="min-h-[180px] px-4 transition-opacity duration-700 ease-in-out">
        <p className="text-xl md:text-2xl text-slate-800 font-light italic">
          “{testimonials[index].quote}”
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i ? "bg-slate-800 w-4" : "bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

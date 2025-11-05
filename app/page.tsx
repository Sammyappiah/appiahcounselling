"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "next" | "prev") => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const delta = card ? card.offsetWidth + 24 : 360;
    rail.scrollBy({ left: dir === "next" ? delta : -delta, behavior: "smooth" });
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let stopped = false;
    const stop = () => (stopped = true);
    rail.addEventListener("pointerdown", stop, { once: true, passive: true });
    rail.addEventListener("wheel", stop, { once: true, passive: true });

    const id = setInterval(() => {
      if (stopped) return;
      scrollByCards("next");
      const atEnd =
        Math.abs(rail.scrollWidth - rail.clientWidth - rail.scrollLeft) < 8;
      if (atEnd) rail.scrollTo({ left: 0, behavior: "smooth" });
    }, 3800);

    return () => clearInterval(id);
  }, []);

  const quotes = [
    `I've had 3 sessions so far and cannot recommend Samuel enough. I have felt uplifted and my confidence is growing day by day after these sessions. He has taught me coping mechanisms and how to manage or change certain thoughts/behaviours that were holding me back and I feel like my mindframe/perspective is shifting for the better. He is extremely positive and has amazing knowledge, friendly and so easy to get on with. Highly recommend!`,
    `We’ve only had our first session, but we left feeling energized and hopeful. I look forward to our next sessions!`,
    `We have had 3 sessions with Samuel and although the sessions are hard, he is patient with us, caring and working to constantly understand both sides without judgement.`,
    `Samuel has really been supportive, respectful and listened in all the sessions we’ve had with him. His communication skills are outstanding and I’d recommend him 100%.`,
    `We have not been working with Sam for very long, yet his sessions have been truly transformative. He is great at listening and understanding our needs, both the ones we are aware of and those we are not. The challenges or homework he sets are impactful and have helped us continue in between sessions. He is easy to talk to and makes us both feel comfortable. I highly recommend him and look forward to our future sessions together. Thank you.`,
    `Samuel has been who I needed at this time of my life. He has listened without judgement, offered advice and helped me set challenges and goals to improve my emotional resilience. I highly recommend Samuel.`,
    `Samuel is great, mindful and an experienced therapist who understands my concerns and issues. He provides great insight into things that give me opportunities to improve my life in different aspects. Great individual.`,
    `Amazing therapist!!`,
    `I’ve seen great progress with the help of Sam — very easy to talk to, great listener, lovely advice. Definitely would recommend getting in touch!`,
    `Grateful for my exchanges with Samuel.`,
    `Samuel makes everything easy.`,
  ];

  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center pt-[140px] md:pt-[150px] pb-[80px] px-6 fade-up">
        <h1 className="text-[40px] md:text-[48px] leading-tight mb-5 font-serif font-semibold">
          Appiah Counselling
        </h1>
        <div className="w-[72px] h-[4px] bg-[#B85B35] mx-auto mb-8 rounded-full" />
        <p className="max-w-[720px] mx-auto text-[18px] md:text-[20px] leading-[1.85]">
          Calm, confidential therapy for individuals and couples — space to
          reflect, realign, and move forward with clarity.
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative bg-gradient-to-b from-[#FDFBF9] via-[#FCF9F5] to-white py-[160px] px-6 fade-up"
      >
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-serif font-semibold mb-4">
            Client Testimonials
          </h2>
          <div className="w-[72px] h-[4px] bg-[#B85B35] mx-auto rounded-full" />
        </div>

        <div className="max-w-[1200px] mx-auto relative">
          {/* Horizontal Scroll Rail */}
          <div
            ref={railRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-8 px-1"
            aria-label="Testimonials carousel"
          >
            {quotes.map((q, i) => (
              <article
                key={i}
                data-card
                className="relative min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] bg-[#FCF9F5] border border-[#E6D8CA] rounded-3xl shadow-sm p-10 md:p-12 snap-center flex-shrink-0 h-[360px] flex items-center justify-center"
              >
                <span className="pointer-events-none select-none absolute -top-6 left-3 text-[140px] leading-none text-[#E8D6C2]/50 font-serif">
                  “
                </span>
                <blockquote className="relative z-10 text-center italic text-[17px] md:text-[18px] leading-[1.9] max-w-[460px] mx-auto">
                  {q}
                </blockquote>
              </article>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonials"
              onClick={() => scrollByCards("prev")}
              className="rounded-full border border-[#B85B35]/30 bg-white px-5 py-2 text-sm hover:shadow transition-shadow"
            >
              ←
            </button>
            <button
              aria-label="Next testimonials"
              onClick={() => scrollByCards("next")}
              className="rounded-full border border-[#B85B35]/30 bg-white px-5 py-2 text-sm hover:shadow transition-shadow"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Subtle Gradient Divider */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#B85B35] to-[#E3C9B0]" />

      {/* Local Styles */}
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.9s ease-out forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}

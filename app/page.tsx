// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Here for Your Wellbeing and Growth. Experience professional, compassionate therapy designed to support your emotional balance and self-awareness.",
};

const QUOTES = [
  "I always leave our sessions feeling lighter and more centred. Samuel’s calm presence makes it easy to open up and truly reflect.",
  "We’ve had just a few sessions, but already communication feels easier. Samuel gives us tools that actually work for our relationship.",
  "Samuel helped me understand things about myself I never realised. His approach is compassionate, practical, and deeply human.",
  "I appreciate how grounded and structured our sessions feel. I always come away with insight and direction.",
  "The calm environment and Samuel’s thoughtful questions helped me process things I’d held onto for years.",
  "I was nervous about starting therapy, but Samuel’s gentle and professional manner made it easy to open up.",
  "Each session gives me new perspective and helps me feel calmer and more capable.",
  "Samuel listens deeply without judgment. It’s such a relief to feel genuinely understood.",
  "Our couples sessions have been transformative — we communicate better than ever before.",
  "I feel seen, heard, and supported in a way I haven’t experienced before.",
  "Appiah Counselling has been a turning point for my personal growth and wellbeing.",
];

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen text-[#111] pb-24"
      style={{
        backgroundImage: "linear-gradient(180deg,#FCFAF7 0%,#F7F3EE 100%)",
      }}
    >
      {/* Soft radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-[36%] left-1/2 -translate-x-1/2 h-[620px] w-[980px] max-w-[92vw] rounded-[999px] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.70) 0%, rgba(246,241,235,0.55) 45%, rgba(246,241,235,0) 70%)",
        }}
      />

      {/* Hero */}
      <section className="relative z-[1] text-center fade-up px-6 pt-20 md:pt-28">
        <h1 className="font-serif text-[50px] md:text-[58px] font-medium mb-6">
          Welcome
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#333] opacity-90 leading-relaxed max-w-[760px] mx-auto">
          Here for Your Wellbeing and Growth.
        </p>
        <div className="h-[5px] w-[160px] rounded-full bg-gradient-to-r from-[#E3C9B0] via-[#B85B35] to-[#E3C9B0] mx-auto mt-10" />

        {/* Luxurious breathing space before testimonials */}
        <div className="mt-[480px] md:mt-[600px]" />
      </section>

      {/* Testimonials */}
      <section className="relative z-[1] text-center fade-up px-6">
        <h2 className="font-semibold text-[26px] mb-10">Client Testimonials</h2>

        <div className="relative bg-[#FCF9F5] border border-[#E8E1D9] rounded-[28px] shadow-[0_16px_40px_rgba(17,17,17,0.07)] p-10 md:p-12 max-w-[1100px] mx-auto overflow-hidden">
          {/* Fixed height so layout doesn't jump while quotes rotate */}
          <div className="relative h-[170px] md:h-[180px] flex items-center justify-center">
            {QUOTES.map((q, i) => (
              <p
                key={i}
                className="absolute w-full px-4 md:px-8 text-[20px] md:text-[22px] italic text-[#333] leading-relaxed opacity-0 quote"
                style={{
                  // 11 quotes × 5s = 55s total cycle; each quote delayed by i*5s
                  animationDelay: `${i * 5}s`,
                }}
              >
                “{q}”
              </p>
            ))}
          </div>

          <div className="mt-8 mx-auto h-[2px] w-[160px] rounded-full bg-gradient-to-r from-transparent via-[#B85B35]/45 to-transparent" />
        </div>
      </section>

      {/* Page-only styles */}
      <style
        // Global tweaks limited to what we need:
        // 1) Lower the nav slightly so it never kisses the logo.
        // 2) Quote fade sequence so only ONE quote is visible at a time.
        dangerouslySetInnerHTML={{
          __html: `
          /* --- Navbar spacing fix (keeps your existing sizes & hovers) --- */
          header nav { margin-top: 10px; }
          @media (min-width: 768px) {
            header nav { margin-top: 14px; }
          }

          /* --- Testimonials animation (no overlap) --- */
          @keyframes quoteFade {
            0%   { opacity: 0; transform: translateY(6px); }
            2%   { opacity: 1; transform: translateY(0); }
            9%   { opacity: 1; }
            11%  { opacity: 0; transform: translateY(-6px); }
            100% { opacity: 0; }
          }
          /* Each quote runs a 55s cycle (11 × ~5s).
             Because only ~0-11% of the cycle is non-zero opacity,
             and delays are spaced by 5s, only one quote is visible at a time. */
          .quote {
            animation: quoteFade 55s infinite ease-in-out both;
          }

          /* Subtle enter animation reuse */
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fadeUp 1s ease-out both; }
        `,
        }}
      />
    </main>
  );
}

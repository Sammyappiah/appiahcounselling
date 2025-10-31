'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-serif',
});
const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const TESTIMONIALS: string[] = [
  `I've had 3 sessions so far and cannot recommend Samuel enough. I have felt uplifted and my confidence is growing day by day after these sessions. He has taught me coping mechanisms and how to manage or change certain thoughts/behaviours that were holding me back, and I feel like my mindset and perspective are shifting for the better. He is extremely positive, has amazing knowledge, is friendly and so easy to get on with. Highly recommend!`,
  `We’ve only had our first session, but we left feeling energized and hopeful. I look forward to our next sessions!`,
  `We have had 3 sessions with Samuel and although the sessions are hard, he is patient with us, caring, and works to constantly understand both sides without judgement.`,
  `Samuel has really been supportive, respectful and listened in all the sessions we've had with him. His communication skills are outstanding and I’d recommend him 100%.`,
  `We have not been working with Sam for very long, yet his sessions have been truly transformative. He listens deeply to needs we are aware of and those we are not. The challenges/homework he sets are impactful and help us in between sessions. He is easy to talk to and makes us both feel comfortable. Highly recommend and we look forward to future sessions.`,
  `Samuel has been who I needed at this time of my life. He has listened without judgement, offered advice, and helped me set challenges and goals to improve my emotional resilience. I highly recommend Samuel.`,
  `Samuel is great—mindful and experienced. He understands my concerns and offers insight that helps me improve different aspects of my life.`,
  `Amazing therapist!!`,
  `I’ve seen great progress with the help of Sam—very easy to talk to, a great listener, thoughtful advice. Definitely recommend getting in touch!`,
  `Grateful for my exchanges with Samuel.`,
  `Samuel makes everything easy.`,
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Continuous horizontal auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let scrollAmount = 0;
    let paused = false;

    const scroll = () => {
      if (!paused) {
        scrollAmount += 0.3; // Adjust speed here (0.3 = smooth, slow drift)
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      }
      requestAnimationFrame(scroll);
    };
    scroll();

    container.addEventListener('mouseenter', () => (paused = true));
    container.addEventListener('mouseleave', () => (paused = false));

    return () => {
      container.removeEventListener('mouseenter', () => (paused = true));
      container.removeEventListener('mouseleave', () => (paused = false));
    };
  }, []);

  return (
    <main
      className={`${serif.variable} ${sans.variable} bg-[#FDFBF9] text-[#1A1A1A] min-h-screen`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-[#FDFBF9]/95 backdrop-blur border-b border-[#E3DAD0] shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex items-center justify-between h-[120px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Appiah Counselling Logo"
                width={340}
                height={90}
                priority
                className="w-[340px] h-auto object-contain"
              />
            </Link>

            <nav
              className="flex items-center justify-center gap-[70px] tracking-wide pr-[5vw]"
              aria-label="Primary"
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/booking', label: 'Booking' },
                { href: '/contact', label: 'Contact' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[22px] font-semibold text-[#111111] relative transition-all duration-300 hover:text-[#A04B2E] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#B85B35] hover:after:w-full after:transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="h-[4px] bg-gradient-to-r from-[#B85B35] to-[#E3C9B0]" />
      </header>

      {/* INTRO */}
      <section className="text-center pt-[140px] pb-[120px] px-6 fade-in">
        <h1
          className="text-[48px] mb-6 text-[#120C08]"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
        >
          Appiah Counselling
        </h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mb-10 rounded-full" />
        <p className="max-w-[750px] mx-auto text-[22px] leading-[1.8] text-[#181818]">
          Counselling for individuals and couples, a calm, safe, and confidential space for
          clarity and growth.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section
        aria-labelledby="testimonials-title"
        className="relative mx-auto max-w-[900px] px-6 pb-[140px] text-center"
      >
        <h2
          id="testimonials-title"
          className="text-[34px] mb-10 text-[#2B1E10]"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
        >
          Client Testimonials
        </h2>

        {/* Fade mask gradients */}
        <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#FDFBF9] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#FDFBF9] to-transparent pointer-events-none z-10" />

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar gap-8 rounded-3xl bg-[#FBF8F4] shadow-md border border-[#E6D9C8] p-8 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((quote, i) => (
            <article
              key={i}
              className="min-w-[320px] max-w-[340px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-[#EDE7E1] p-8 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <blockquote
                className="text-[18px] leading-[1.8] text-[#1A1A1A] italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                “{quote}”
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E2D3C2] bg-[#F6F1EB] text-[#3B2E20] text-[17px] py-[70px] text-center">
        <div className="h-[3px] w-full bg-[#B85B35] mb-6" />
        © 2023 Appiah Counselling — All Rights Reserved
      </footer>

      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}

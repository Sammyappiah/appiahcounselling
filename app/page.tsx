import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appiah Counselling | Calm, grounded online counselling",
  description:
    "Online counselling for adults and couples with Samuel Appiah. A calm, grounded space to slow down, talk things through and find steady next steps.",
};

export default function HomePage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      {/* HERO */}
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-[44px] leading-tight font-semibold text-[#4B3B30] mb-6">
              Calm. Clarity.
              <br />
              At your pace.
            </h1>

            <p className="text-base md:text-lg text-slate-700 mb-8 max-w-xl">
              I&apos;m Samuel Appiah, a counsellor who offers a calm, grounded space
              for people feeling overwhelmed or stuck. We talk through what is
              happening, find clarity and work toward steadier days — always at
              your pace.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-[#B87333] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-[#a6632c] transition-colors"
              >
                View Services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#B87333] px-6 py-3 text-sm md:text-base font-semibold text-[#B87333] bg-transparent hover:bg-[#f7e6d6] transition-colors"
              >
                Ask a Question
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.16)]">
              <Image
                src="/Solo1.jpg"
                alt="Counselling conversation"
                width={900}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* REST OF PAGE (left as-is) */}
      {/* ... existing sections like "People often come for" etc. */}
    </main>
  );
}

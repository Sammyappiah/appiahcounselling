import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] flex items-center justify-center px-6 md:px-12 py-12">

      <div className="max-w-[1200px] w-full mx-auto">

        {/* COMING SOON */}
        <div className="text-center text-sm tracking-wide text-neutral-500 mb-6">
          Coming soon
        </div>

        {/* HERO */}
        <div className="relative w-full h-[460px] md:h-[560px] rounded-2xl overflow-hidden">

          {/* IMAGE */}
          <Image
            src="/hero.jpg"
            alt="Therapy"
            width={1600}
            height={900}
            priority
            className="w-full h-full object-cover object-center md:object-[center_15%]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* LOGO (TOP RIGHT — STRONGER PRESENCE) */}
          <div className="absolute top-3 right-3 md:top-6 md:right-6">
            <img
              src="/logo.jpg"
              alt="Appiah Counselling"
              className="h-20 md:h-32 opacity-95"
            />
          </div>

          {/* HEADLINE (LOWER + SMALLER + CLEANER) */}
          <div className="absolute left-6 md:left-16 bottom-14 md:bottom-10 max-w-[260px] md:max-w-[320px]">
            <h1 className="text-white/85 text-xs md:text-base leading-[1.5] font-serif tracking-[-0.01em]">
              Where things that should be fine get unpacked.
            </h1>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-black/5 my-12" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-sm">

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <a
              href="https://calendly.com/samuels12/couple-s-counselling?month=2026-05"
              className="px-5 py-2.5 rounded-lg bg-[#f3f1ed] hover:bg-[#e6e1d8] transition border border-black/5 shadow-sm text-center"
            >
              Individual Sessions — £50 →
            </a>

            <a
              href="https://calendly.com/samuels12/counselling?month=2026-05"
              className="px-5 py-2.5 rounded-lg bg-[#f3f1ed] hover:bg-[#e6e1d8] transition border border-black/5 shadow-sm text-center"
            >
              Couples Sessions — £65 →
            </a>
          </div>

          {/* ICONS (FIXED APPLE SVG) */}
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr"
              target="_blank"
            >
              <img
                src="/spotify.svg"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <div className="w-px h-6 bg-black/20" />

            <a
              href="https://podcasts.apple.com/us/podcast/everyday-counselling/id1863535119"
              target="_blank"
            >
              <img
                src="/apple.svg"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition"
              />
            </a>
          </div>

          {/* EMAIL */}
          <a
            href="mailto:sammy@appiahcounselling.com"
            className="text-neutral-600 hover:text-black underline underline-offset-4 transition text-center md:text-right"
          >
            sammy@appiahcounselling.com →
          </a>

        </div>

      </div>

    </main>
  );
}

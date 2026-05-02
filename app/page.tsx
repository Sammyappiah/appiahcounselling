import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] flex items-center justify-center px-6 md:px-12 py-12">
      
      <div className="max-w-[1200px] w-full mx-auto">

        {/* COMING SOON — CENTERED ABOVE */}
        <div className="text-center text-sm tracking-wide text-neutral-500 mb-4">
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
            className="w-full h-full object-cover object-[center_15%]"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* LOGO — TRUE TOP RIGHT */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <img
              src="/logo.jpg"
              alt="Appiah Counselling"
              className="h-24 md:h-28"
            />
          </div>

          {/* HEADLINE — SMALLER + LOWER */}
          <div className="absolute left-10 md:left-16 bottom-8 md:bottom-10 max-w-[320px]">
            <h1 className="text-white text-sm md:text-base leading-[1.5] font-serif tracking-[-0.01em]">
              Where things that should be fine get unpacked.
            </h1>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-black/5 my-10" />

        {/* BOTTOM */}
        <div className="flex items-center justify-between text-sm">

          {/* BUTTONS */}
          <div className="flex flex-col gap-3">
            <a
              href="https://calendly.com/samuels12/couple-s-counselling?month=2026-05"
              className="px-5 py-2.5 rounded-lg bg-[#efece6] hover:bg-[#e6e1d8] transition border border-black/5 shadow-sm"
            >
              Individual Sessions — £50 →
            </a>

            <a
              href="https://calendly.com/samuels12/counselling?month=2026-05"
              className="px-5 py-2.5 rounded-lg bg-[#efece6] hover:bg-[#e6e1d8] transition border border-black/5 shadow-sm"
            >
              Couples Sessions — £65 →
            </a>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5">
            <a href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr" target="_blank">
              <img src="/spotify.svg" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
            </a>

            <div className="w-px h-6 bg-black/20" />

            <a href="https://podcasts.apple.com/us/podcast/everyday-counselling/id1863535119" target="_blank">
              <img src="/apple.svg" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
            </a>
          </div>

          {/* EMAIL */}
          <a
            href="mailto:sammy@appiahcounselling.com"
            className="text-neutral-600 hover:text-black underline underline-offset-4 transition"
          >
            sammy@appiahcounselling.com →
          </a>

        </div>

      </div>

    </main>
  );
}

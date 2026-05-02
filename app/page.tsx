import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 md:px-12 py-10 md:py-16 max-w-6xl mx-auto">

      {/* COMING SOON */}
      <p className="text-center text-sm text-black/50 mb-6 tracking-wide">
        Coming soon
      </p>

      {/* HERO */}
      <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden">

        {/* IMAGE */}
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* LOGO */}
        <img
          src="/logo.jpg"
          alt="Appiah Counselling"
          className="absolute top-6 right-6 w-28 md:w-32 opacity-95"
        />

        {/* TEXT (smaller + cleaner) */}
        <div className="absolute bottom-[12%] left-[6%] max-w-[420px]">
          <h1 className="text-white text-[20px] md:text-[24px] leading-snug font-medium">
            Where things that should be fine get unpacked.
          </h1>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-12 pt-8 border-t border-black/10" />

      {/* CONTENT */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-10">

        {/* BUTTONS */}
        <div className="flex flex-col gap-4 w-full md:w-auto">

          <a
            href="#"
            className="group w-full md:w-auto border border-black/10 bg-white/70 backdrop-blur-sm hover:bg-white transition rounded-xl px-6 py-4 text-sm flex justify-between items-center"
          >
            Individual Sessions — £50
            <span className="ml-4 group-hover:translate-x-1 transition">→</span>
          </a>

          <a
            href="#"
            className="group w-full md:w-auto border border-black/10 bg-white/70 backdrop-blur-sm hover:bg-white transition rounded-xl px-6 py-4 text-sm flex justify-between items-center"
          >
            Couples Sessions — £65
            <span className="ml-4 group-hover:translate-x-1 transition">→</span>
          </a>
        </div>

        {/* PODCAST ICONS (NOW CLICKABLE) */}
        <div className="flex items-center justify-center gap-6 opacity-70">

          {/* Spotify */}
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition"
          >
            <img src="/spotify.svg" className="w-5 h-5" />
          </a>

          {/* Divider */}
          <div className="h-5 w-px bg-black/20" />

          {/* Apple (YOUR SVG FILE) */}
          <a
            href="https://podcasts.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition"
          >
            <img src="/apple.svg" className="w-5 h-5" />
          </a>
        </div>

        {/* EMAIL */}
        <div className="text-right">
          <a
            href="mailto:sammy@appiahcounselling.com"
            className="group text-sm border-b border-black/30 hover:border-black transition pb-1"
          >
            sammy@appiahcounselling.com
            <span className="inline-block ml-2 group-hover:translate-x-1 transition">
              →
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#161616]">
      <div className="mx-auto flex min-h-screen max-w-[430px] flex-col px-4 py-4">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[34px] bg-black shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div className="relative h-[245px] w-full">
            <Image
              src="/hero.jpg"
              alt="Appiah Counselling"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/55" />

            {/* Logo */}
            <div className="absolute left-4 top-4 z-20">
              <Image
                src="/logo.png"
                alt="Appiah Counselling Logo"
                width={90}
                height={38}
                className="h-auto w-[90px]"
              />
            </div>

            {/* Headline */}
            <div className="absolute bottom-5 right-5 z-20 max-w-[240px]">
              <h1 className="font-serif text-[14px] leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                Therapy That Gets to the Root
                <br />
                Not Just the Symptoms
              </h1>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-4 grid grid-cols-2 gap-3">
          {/* INDIVIDUAL */}
          <div className="rounded-[30px] border border-[#E7DED2] bg-[#FBF9F5] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-[18px] leading-[1.02] tracking-[-0.03em] text-[#1A1A1A]">
              Individual Therapy
            </h2>

            <p className="mt-4 text-[11px] leading-[1.7] text-[#615C57]">
              Work through personal patterns, emotional blocks, and the things
              that keep repeating.
            </p>

            <div className="mt-5 text-[11px] font-semibold text-[#1A1A1A]">
              £50 per session
            </div>

            <a
              href="https://calendly.com/samuels12/couple-s-counselling?month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-[42px] items-center justify-center rounded-full bg-[#C9733D] px-6 text-[11px] font-medium text-white transition-all duration-300 hover:bg-[#B96430]"
            >
              Book Session
            </a>
          </div>

          {/* COUPLES */}
          <div className="rounded-[30px] border border-[#E7DED2] bg-[#FBF9F5] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-[18px] leading-[1.02] tracking-[-0.03em] text-[#1A1A1A]">
              Couples Therapy
            </h2>

            <p className="mt-4 text-[11px] leading-[1.7] text-[#615C57]">
              Improve communication, resolve tension, and understand
              relationship dynamics clearly.
            </p>

            <div className="mt-5 text-[11px] font-semibold text-[#1A1A1A]">
              £65 per session
            </div>

            <a
              href="https://calendly.com/samuels12/counselling?month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-[42px] items-center justify-center rounded-full bg-[#C9733D] px-6 text-[11px] font-medium text-white transition-all duration-300 hover:bg-[#B96430]"
            >
              Book Session
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-6 border-t border-[#E7DED2] pt-5">
          <a
            href="mailto:sammy@appiahcounselling.com"
            className="text-[11px] text-[#5F5A55] transition hover:text-[#1A1A1A]"
          >
            sammy@appiahcounselling.com
          </a>

          <div className="mt-2 text-[10px] text-[#8E877F]">
            © 2026 Appiah Counselling
          </div>
        </footer>
      </div>
    </main>
  );
}

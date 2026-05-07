import Image from "next/image";

export const metadata = {
  title: 'Home',
  description:
    'Professional counselling and psychotherapy services for individuals and couples.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {

  return (
    <main className="min-h-screen bg-[#F6F1EA] text-[#171717]">
      <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.8rem]">
          <div className="relative h-[215px] min-[390px]:h-[240px] sm:h-[520px] lg:h-[650px] w-full">
            <Image
              src="/hero.jpg"
              alt="Appiah Counselling"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

            {/* LOGO */}
            <div className="absolute left-4 top-4 z-20 sm:left-8 sm:top-8">
              <Image
                src="/logo.png"
                alt="Appiah Counselling"
                width={170}
                height={60}
                className="w-[104px] min-[390px]:w-[114px] sm:w-[175px] h-auto"
              />
            </div>
{/* HEADLINE */}
<div className="absolute bottom-4 right-4 z-20 w-[38%] min-[390px]:w-[40%] sm:w-[34%] lg:w-[32%] text-right">
  <h1
    className="
      font-serif
      text-white
      tracking-[-0.045em]
      leading-[0.9]

text-[0.95rem]
min-[390px]:text-[1.08rem]

sm:text-[1.9rem]
md:text-[2.15rem]
lg:text-[3.4rem]
xl:text-[3.9rem]
    "
  >
    Therapy That
    <br />
    Gets to the Root
    <br />
    Not Just the
    <br />
    Symptoms
  </h1>
</div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-5 sm:mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {/* INDIVIDUAL */}
            <div className="rounded-[2rem] border border-[#E4D8C7] bg-[#FBF8F4] px-6 py-6 sm:px-9 sm:py-9 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <h2
                className="
                  font-serif
                  tracking-[-0.04em]
                  leading-[0.96]

                  text-[0.98rem]
                  min-[390px]:text-[1.08rem]

                  sm:text-[3rem]
                "
              >
                Individual Therapy
              </h2>

              <p
                className="
                  mt-4
                  text-[#5E5954]
                  leading-[1.5]

                  text-[0.88rem]
                  min-[390px]:text-[0.93rem]

                  sm:text-[1.05rem]
                  sm:leading-[1.6]
                  max-w-[30ch]
                "
              >
                Work through personal patterns, emotional blocks, and the
                things that keep repeating.
              </p>

              <p
                className="
                  mt-5
                  font-semibold

                  text-[0.9rem]
                  min-[390px]:text-[0.96rem]

                  sm:text-[1.08rem]
                "
              >
                £50 per session
              </p>

              <a
                href="https://calendly.com/samuels12/couple-s-counselling?month=2026-05"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  inline-flex
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  bg-[#D07A3C]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#BE6B31]
                  hover:scale-[1.02]

                  min-w-[140px]
                  px-5
                  py-[0.8rem]

                  text-[0.84rem]
                  font-medium

                  sm:min-w-[165px]
                  sm:px-7
                  sm:py-3
                  sm:text-[0.96rem]
                "
              >
                Book Session
              </a>
            </div>

            {/* COUPLES */}
            <div className="rounded-[2rem] border border-[#E4D8C7] bg-[#FBF8F4] px-6 py-6 sm:px-9 sm:py-9 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <h2
                className="
                  font-serif
                  tracking-[-0.04em]
                  leading-[0.96]

                  text-[0.98rem]
                  min-[390px]:text-[1.08rem]

                  sm:text-[3rem]
                "
              >
                Couples Therapy
              </h2>

              <p
                className="
                  mt-4
                  text-[#5E5954]
                  leading-[1.5]

                  text-[0.88rem]
                  min-[390px]:text-[0.93rem]

                  sm:text-[1.05rem]
                  sm:leading-[1.6]
                  max-w-[30ch]
                "
              >
                Improve communication, resolve tension, and understand
                relationship dynamics clearly.
              </p>

              <p
                className="
                  mt-5
                  font-semibold

                  text-[0.9rem]
                  min-[390px]:text-[0.96rem]

                  sm:text-[1.08rem]
                "
              >
                £65 per session
              </p>

              <a
                href="https://calendly.com/samuels12/counselling?month=2026-05"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  inline-flex
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  bg-[#D07A3C]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#BE6B31]
                  hover:scale-[1.02]

                  min-w-[140px]
                  px-5
                  py-[0.8rem]

                  text-[0.84rem]
                  font-medium

                  sm:min-w-[165px]
                  sm:px-7
                  sm:py-3
                  sm:text-[0.96rem]
                "
              >
                Book Session
              </a>
            </div>
          </div>
        </section>

        {/* SPOTIFY */}
        <section className="mt-7 sm:mt-8">
<div className="flex flex-col items-center gap-1 pt-2">
  <a
    href="https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr?si=04451910413440f6"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-75 transition-opacity duration-300 hover:opacity-100"
  >
    <Image
      src="/spotify.svg"
      alt="Spotify"
      width={18}
      height={18}
      className="h-[18px] w-[18px]"
    />
  </a>

  <p className="text-[0.65rem] tracking-[0.08em] uppercase text-[#7D746B]">
    Listen to Podcast
  </p>
</div>
        </section>

        {/* FOOTER */}
        <footer className="mt-6 border-t border-[#E4D8C7] pt-5 pb-10 sm:mt-8 sm:pt-6 sm:pb-6">
          <div className="flex flex-col gap-2 text-[#6D6862] text-[0.84rem] sm:flex-row sm:items-center sm:justify-between sm:text-[1rem]">
            <p>sammy@appiahcounselling.com</p>
            <p>© 2026 Appiah Counselling</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

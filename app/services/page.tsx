import Link from "next/link";

export default function ServicesPage() {

  return (

    <main className="bg-[#ece8e1] text-[#171412] min-h-screen pt-32 md:pt-40">

      <section className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 pt-10 md:pt-12 lg:pt-16 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-24 items-start">

          {/* LEFT INTRO */}

          <div className="max-w-[420px]">

            <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-10">

              Services

            </p>

            <h1 className="font-serif text-[1.42rem] leading-[1.02] tracking-[-0.035em] text-[#171412]">

              Therapy for

              <br />

              individuals

              <br />

              and couples

              <br />

              seeking clarity.
            </h1>

            <div className="w-24 h-px bg-[#c89b4d] mt-12 mb-12" />

            <p className="text-[1rem] leading-[2] text-[#6e675f] max-w-[36ch]">
              Calm, reflective counselling for people navigating emotional overwhelm,
              anxiety, overthinking, relationship difficulties, intimacy, identity,
              and the quieter struggles carried beneath everyday life.
            </p>

          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* INDIVIDUAL */}
            <div
              className="
                bg-[#f1ede7]
                border
                border-[#d8cec2]
                rounded-[38px]
                p-10
                md:p-12
                flex
                flex-col
                justify-between
                min-h-[620px]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]
                hover:border-[#cdbda9]
              "
            >

              <div>

                <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-14">
                  Individual Therapy
                </p>

                <p className="text-[1rem] leading-[2] text-[#6d655f]">
                  Individual sessions offer space to explore anxiety,
                  emotional exhaustion, overthinking, identity, self esteem,
                  relationships, and recurring emotional patterns with greater
                  depth and honesty.
                </p>

              </div>

              <div className="mt-14">

                <div className="w-full h-px bg-[#ddd3c7] mb-10" />

                <div className="flex items-end justify-between gap-6">

                  <div>
                    <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#8b847c] mb-3">
                      Session Fee
                    </p>

                    <p className="font-serif text-[2rem] leading-none text-[#171412]">
                      £50
                    </p>
                  </div>

                  <Link
 href="https://calendly.com/samuels12/couple-s-counselling"
                    target="_blank"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      h-[52px]
                      px-9
                      rounded-full
                      bg-[#d4a24c]
                      text-[#171412]
                      text-[0.72rem]
                      tracking-[0.24em]
                      uppercase
                      whitespace-nowrap
                      transition-all
                      duration-300
                      hover:opacity-90
                    "
                  >
                    Book Session
                  </Link>

                </div>

              </div>

            </div>

            {/* COUPLES */}
            <div
              className="
                bg-[#f1ede7]
                border
                border-[#d8cec2]
                rounded-[38px]
                p-10
                md:p-12
                flex
                flex-col
                justify-between
                min-h-[620px]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]
                hover:border-[#cdbda9]
              "
            >

              <div>

                <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-14">
                  Couples Therapy
                </p>

                <p className="text-[1rem] leading-[2] text-[#6d655f]">
                  Couples sessions support communication, emotional
                  disconnection, recurring conflict, intimacy difficulties,
                  trust issues, and the patterns relationships can quietly
                  fall into over time.
                </p>

              </div>

              <div className="mt-14">

                <div className="w-full h-px bg-[#ddd3c7] mb-10" />

                <div className="flex items-end justify-between gap-6">

                  <div>
                    <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#8b847c] mb-3">
                      Session Fee
                    </p>

                    <p className="font-serif text-[2rem] leading-none text-[#171412]">
                      £65
                    </p>
                  </div>

                  <Link
 href="https://calendly.com/samuels12/counselling"
                    target="_blank"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      h-[52px]
                      px-9
                      rounded-full
                      bg-[#d4a24c]
                      text-[#171412]
                      text-[0.72rem]
                      tracking-[0.24em]
                      uppercase
                      whitespace-nowrap
                      transition-all
                      duration-300
                      hover:opacity-90
                    "
                  >
                    Book Session
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

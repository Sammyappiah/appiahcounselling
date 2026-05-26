import Image from "next/image";

export default function ContactPage() {

  return (

    <main className="bg-[#f3efe8] min-h-screen pt-32 md:pt-40">

      <section className="bg-[#f3efe8]">

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="flex justify-center pt-10 md:pt-12 lg:pt-16 pb-24">

            <div className="max-w-[720px] w-full text-center">

              <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-12">

                Contact

              </p>

              <h1 className="font-serif text-[1.42rem] md:text-[2rem] leading-[1.02] tracking-[-0.035em] text-[#1a1412]">

                Begin the conversation.

              </h1>
              <div className="w-24 h-px bg-[#c89b4d] mt-12 mb-12 mx-auto" />

              <p className="text-[1rem] leading-[1.95] text-[#6e675f] max-w-[36ch] mx-auto">
                A calm space to reach out regarding therapy,
                questions, or working together.
              </p>

              <p className="text-[0.92rem] text-[#8b847c] mt-5">
                Responses are typically within 24–48 hours.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center gap-5 mt-12">

                <a
                  href="mailto:sammy@appiahcounselling.com"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    h-[54px]
                    px-10
                    rounded-full
                    border
                    border-[#d4c7b7]
                    text-[0.76rem]
                    tracking-[0.24em]
                    uppercase
                    text-[#171412]
                    transition
                    hover:bg-[#efe8df]
                  "
                >
                  Email Me
                </a>

                <a
                  href="https://whatsapp.com/channel/0029VakFswBISTkBdZkh590h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    h-[54px]
                    px-10
                    rounded-full
                    bg-[#d4a24c]
                    text-[0.76rem]
                    tracking-[0.24em]
                    uppercase
                    text-black
                    transition
                    hover:opacity-90
                  "
                >
                  Join WhatsApp Channel
                </a>

              </div>

              {/* QR CODE */}
              <div className="mt-20 flex justify-center">

                <div className="bg-white rounded-[28px] p-6 border border-[#e7ddd2] shadow-sm">

<Image
  src="/whatsapp-qr.png"
  alt="WhatsApp QR"
  width={140}
  height={140}
  className="w-[140px] h-auto"
/>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

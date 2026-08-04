import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#ece8e1] text-[#171412] min-h-screen pt-20 md:pt-40">

      <section className="max-w-[1380px] mx-auto px-6 md:px-8 lg:px-16 pt-10 md:pt-12 lg:pt-10 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="max-w-[520px]">

            <p className="text-[0.72rem] tracking-[0.32em] uppercase text-[#c89b4d] mb-10">
              About
            </p>

            <h1 className="font-serif text-[1.42rem] leading-[1.02] tracking-[-0.035em] text-[#171412]">
              I’m Samuel Appiah,
              <br />
              a UK based therapist.
            </h1>

            <div className="mx-auto mt-10 mb-10 h-px w-40 bg-[#c89b4d]" />

            <div className="space-y-10">

              <p className="text-[1rem] leading-[2] text-[#5c5550]">
                Born and raised in London, my work is grounded in calm conversation,
                emotional honesty, and creating space for people to slow down and
                better understand themselves.
              </p>

              <p className="text-[1rem] leading-[2] text-[#5c5550]">
                I work with individuals and couples navigating anxiety, emotional
                overwhelm, relationship difficulties, overthinking, intimacy,
                identity, self esteem, and the quieter struggles often carried
                beneath the surface of everyday life.
              </p>

              <p className="text-[1rem] leading-[2] text-[#5c5550]">
                Alongside counselling work, I continue postgraduate study and
                specialist training in areas including sexology and dyslexia,
                helping shape a broader and more thoughtful understanding of
                emotional wellbeing.
              </p>

              <p className="text-[1rem] leading-[2] text-[#5c5550]">
                Outside of therapy, I also host reflective conversations exploring
                emotional life, relationships, masculinity, identity, and the
                pressures of modern living.
              </p>

            </div>

          </div>
          {/* RIGHT COLUMN */}
          <div className="flex justify-center lg:justify-end">

            <Image
              src="/about.jpg"
              alt="Samuel Appiah"
              width={900}
              height={1100}
              priority
              className="
                w-full
                max-w-[640px]
                h-auto
                object-cover
                rounded-[38px]
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              "
            />

          </div>

        </div>

      </section>

    </main>
  );
}

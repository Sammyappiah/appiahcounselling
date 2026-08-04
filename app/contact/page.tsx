import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#f3efe8] min-h-screen pt-12 md:pt-28">

      <section>
        <div className="mx-auto max-w-[760px] px-6 md:px-10">

          <div className="py-10 md:py-12 text-center">

            <p className="mb-6 text-[0.72rem] uppercase tracking-[0.32em] text-[#c89b4d]">
              Contact
            </p>

            <h1 className="font-serif text-[2rem] md:text-[2.5rem] leading-tight tracking-[-0.03em] text-[#171412]">
            </h1>

            <div className="mx-auto my-8 h-px w-24 bg-[#c89b4d]" />

            <p className="mx-auto mb-10 max-w-[36ch] text-[1rem] leading-8 text-[#5c5550]">
              A calm space to reach out regarding therapy, questions, or working together.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                href="mailto:sammy@appiahcounselling.com"
                className="inline-flex h-[50px] items-center justify-center rounded-full border border-[#d4c7b7] px-8 text-[0.78rem] uppercase tracking-[0.22em] text-[#171412] transition-all duration-200 ease-out hover:bg-[#ebe3d9]"
              >
                Email Me
              </Link>

              <Link
                href="tel:+447947629518"
                className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#d4a24c] px-8 text-[0.78rem] uppercase tracking-[0.22em] text-[#171412] transition-all duration-200 ease-out hover:opacity-90"
              >
                Call Me
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

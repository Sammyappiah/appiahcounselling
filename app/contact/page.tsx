"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-[#111] bg-[#FCFAF7] flex flex-col">
      <section className="pt-24 text-center">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">Contact</h1>
        {/* Orange line same length as "Contact" */}
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full inline-block w-[7ch]" />
      </section>

      <section className="flex-grow flex items-center justify-center">
        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-8 md:px-12 py-10 text-center max-w-lg mx-auto">
          <p className="text-[16px] md:text-[18px] text-[#333]/90 mb-6">
            If you’d like to book a session or have any questions, please reach out via email.
          </p>
          <a
            href="mailto:sammy@appiahcounselling.com"
            className="text-[17px] md:text-[18px] text-[#C85B2B] underline decoration-[#D79B62]/60 decoration-2 underline-offset-4 hover:text-[#5E8164]"
          >
            sammy@appiahcounselling.com
          </a>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <section className="px-6">
      <div className="text-center">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">
          Contact
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[7ch]" />
      </div>

      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-sm px-8 md:px-12 py-10 text-center max-w-lg">
          <p className="text-[16px] md:text-[18px] text-[#333]/90 mb-6">
            If you’d like to book a session or have any questions, please reach
            out via email.
          </p>
          <a
            href="mailto:sammy@appiahcounselling.com"
            className="text-[17px] md:text-[18px] text-[#C85B2B] underline decoration-[#D79B62]/60 decoration-2 underline-offset-4 hover:text-[#5E8164]"
          >
            sammy@appiahcounselling.com
          </a>
        </div>
      </div>
    </section>
  );
}

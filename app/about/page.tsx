export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] text-[#111]">
      {/* Keep this padding so the title sits below the fixed header */}
      <section className="pt-36 text-center">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">
          About
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full w-[8ch]" />
        <p className="text-[18px] text-[#333]/90 max-w-3xl mx-auto">
          Professional, confidential therapy designed for clarity and calm.
        </p>
      </section>

      {/* Optional supporting paragraph (keeps the page balanced like Home/Contact) */}
      <section className="px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mt-10">
          <p className="text-[17px] md:text-[18px] text-[#333]/90 leading-relaxed">
            I offer a calm, supportive space where individuals and couples can
            explore challenges, strengthen emotional resilience, and rediscover
            connection through compassionate, evidence-based practice.
          </p>
        </div>
      </section>
    </main>
  );
}

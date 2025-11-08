export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] text-[#111]">
      {/* Title block — consistent spacing below fixed header */}
      <section className="pt-36 text-center">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">
          Booking
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full w-[8ch]" />
        <p className="text-[18px] text-[#333]/90">
          Professional, confidential therapy designed for clarity and calm.
        </p>
      </section>

      {/* Center the two cards in the middle of the page */}
      <section className="flex items-center justify-center">
        <div className="mx-auto px-6 md:px-10 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 mb-16 place-items-center">
            {/* Individual Session */}
            <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)] px-8 py-10 text-center w-full max-w-md">
              <p className="tracking-[0.18em] text-[12px] text-[#333] font-semibold mb-3">
                INDIVIDUAL SESSION
              </p>
              <p className="text-[16px] text-[#333]/90">
                One-to-one counselling for self-exploration and growth.
              </p>
              <p className="mt-5 font-semibold">£50 / 50 minutes</p>
              <a
                href="/booking/individual"
                className="inline-block mt-6 text-[#C85B2B] underline decoration-[#D79B62]/60 decoration-2 underline-offset-4 hover:text-[#5E8164]"
              >
                Book Session
              </a>
            </div>

            {/* Couples Session */}
            <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)] px-8 py-10 text-center w-full max-w-md">
              <p className="tracking-[0.18em] text-[12px] text-[#333] font-semibold mb-3">
                COUPLES SESSION
              </p>
              <p className="text-[16px] text-[#333]/90">
                Build understanding and communication within your relationship.
              </p>
              <p className="mt-5 font-semibold">£65 / 50 minutes</p>
              <a
                href="/booking/couples"
                className="inline-block mt-6 text-[#C85B2B] underline decoration-[#D79B62]/60 decoration-2 underline-offset-4 hover:text-[#5E8164]"
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

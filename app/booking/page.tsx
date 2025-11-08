export default function BookingPage() {
  return (
    <section className="px-6">
      {/* Title */}
      <div className="text-center mb-10 pt-8">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">
          Booking
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto rounded-full w-[8ch]" />
      </div>

      {/* Two centered blocks */}
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl w-full">
          {/* Individual Session */}
          <div className="bg-white/80 border border-[#E7E1D8] rounded-2xl shadow-sm p-10 text-center">
            <h2 className="font-serif text-[22px] md:text-[26px] mb-3">
              Individual Session
            </h2>
            <p className="text-[17px] md:text-[18px] text-[#333]/90 mb-2">
              £50 — Online Only
            </p>
            <p className="text-[15px] md:text-[16px] text-[#555]/90">
              50 minutes per session
            </p>
          </div>

          {/* Couples Session */}
          <div className="bg-white/80 border border-[#E7E1D8] rounded-2xl shadow-sm p-10 text-center">
            <h2 className="font-serif text-[22px] md:text-[26px] mb-3">
              Couples Session
            </h2>
            <p className="text-[17px] md:text-[18px] text-[#333]/90 mb-2">
              £65 — Online Only
            </p>
            <p className="text-[15px] md:text-[16px] text-[#555]/90">
              60 minutes per session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

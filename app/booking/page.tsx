export default function BookingPage() {
  return (
    <section className="px-6">
      <div className="text-center mb-10">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">
          Booking
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto rounded-full w-[8ch]" />
      </div>

      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl w-full">
          <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-sm p-8 text-center">
            <h2 className="font-serif text-[22px] md:text-[24px] mb-3">
              Individual Session
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#333]/90">
              50 minutes • In-person or online
            </p>
          </div>

          <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-sm p-8 text-center">
            <h2 className="font-serif text-[22px] md:text-[24px] mb-3">
              Couples Session
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#333]/90">
              60 minutes • In-person or online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

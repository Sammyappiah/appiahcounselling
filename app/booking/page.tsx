"use client";
import useFadeUp from "@/lib/useFadeUp";

export default function BookingPage() {
  useFadeUp();

  return (
    <main className="min-h-screen bg-[#FCFAF7] text-[#111] font-sans pb-20">
      <section className="text-center px-6 pt-[140px] fade-up">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">
          Booking
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
      </section>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 fade-up">
        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-md p-10 w-full max-w-sm text-center">
          <h2 className="text-[22px] md:text-[24px] font-serif mb-3">Individual Session</h2>
          <p className="text-[18px] mb-3">Online only</p>
          <p className="text-[20px] font-medium text-[#5E8164]">£50</p>
        </div>

        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-md p-10 w-full max-w-sm text-center">
          <h2 className="text-[22px] md:text-[24px] font-serif mb-3">Couples Session</h2>
          <p className="text-[18px] mb-3">Online only</p>
          <p className="text-[20px] font-medium text-[#5E8164]">£65</p>
        </div>
      </div>
    </main>
  );
}

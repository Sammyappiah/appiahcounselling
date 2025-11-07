"use client";

export default function BookingPage() {
  return (
    <main className="min-h-screen text-[#111] bg-[#FCFAF7] text-center flex flex-col items-center">
      <section className="pt-24">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold">Booking</h1>
        {/* Orange line same length as "Booking" */}
        <div className="h-[3px] bg-[#D38B5D] mx-auto mt-3 mb-6 rounded-full inline-block w-[7ch]" />
        <p className="text-[17px] md:text-[18px] text-[#333]/90">
          Professional, confidential therapy designed for clarity and calm.
        </p>
      </section>

      <section className="flex flex-col items-center gap-8 mt-10 pb-24">
        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-8 py-10 w-[350px] md:w-[500px]">
          <h2 className="uppercase tracking-[0.2em] text-[14px] mb-3">Individual Session</h2>
          <p className="text-[17px] text-[#333]/90 mb-4">
            One-to-one counselling for self-exploration and growth.
          </p>
          <p className="text-[18px] font-medium mb-4">£50 / 50 minutes</p>
          <a href="#" className="text-[#C85B2B] underline decoration-[#D79B62]/60 hover:text-[#5E8164]">
            Book Session
          </a>
        </div>

        <div className="bg-white/70 border border-[#E7E1D8] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-8 py-10 w-[350px] md:w-[500px]">
          <h2 className="uppercase tracking-[0.2em] text-[14px] mb-3">Couples Session</h2>
          <p className="text-[17px] text-[#333]/90 mb-4">
            Build understanding and communication within your relationship.
          </p>
          <p className="text-[18px] font-medium mb-4">£65 / 50 minutes</p>
          <a href="#" className="text-[#C85B2B] underline decoration-[#D79B62]/60 hover:text-[#5E8164]">
            Book Session
          </a>
        </div>
      </section>
    </main>
  );
}

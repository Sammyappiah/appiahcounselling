import Image from "next/image";

export default function BookingPage() {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src="/session.jpg"
        alt="Therapy Session"
        width={1200}
        height={600}
        className="rounded-2xl shadow-md object-cover w-full max-w-5xl mb-10"
      />
      <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">Booking</h1>
      <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
      <p className="text-[18px] text-[#333]/90 max-w-2xl mb-10">
        Schedule your session at a time that suits you best. We provide both in-person and online appointments.
      </p>
      <button className="bg-[#5E8164] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#4c6a53] transition-all duration-300">
        Book a Session
      </button>
    </section>
  );
}

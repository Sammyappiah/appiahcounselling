import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <section className="text-center px-6">
        <h1 className="font-serif text-[40px] md:text-[48px] leading-tight mb-5">
          Appiah Counselling
        </h1>
        <div className="w-[72px] h-[4px] bg-[#B85B35] mx-auto mb-8 rounded-full" />
        <p className="max-w-[720px] mx-auto text-[18px] md:text-[20px] leading-[1.85]">
          Calm, confidential therapy for individuals and couples — space to
          reflect, realign, and move forward with clarity.
        </p>
      </section>

      <Testimonials />
    </>
  );
}

// app/page.tsx
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div>
      <section className="text-center">
        <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">
          Welcome
        </h1>
        <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
        <p className="text-[18px] text-[#333]/90">
          Here for Your Wellbeing and Growth.
        </p>
      </section>

      <div className="mt-16" />
      <Testimonials />
    </div>
  );
}

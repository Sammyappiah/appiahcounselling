import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src="/counselling-office.jpg"
        alt="Counselling Office"
        width={1200}
        height={600}
        className="rounded-2xl shadow-md object-cover w-full max-w-5xl mb-10"
      />
      <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">Contact</h1>
      <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
      <p className="text-[18px] text-[#333]/90 max-w-2xl mb-8">
        Get in touch to book a consultation or ask any questions about our services.
      </p>
      <div className="text-[#333]/90 text-lg">
        <p>
          Email:{" "}
          <a href="mailto:info@appiahcounselling.com" className="text-[#5E8164] hover:underline">
            info@appiahcounselling.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+447123456789" className="text-[#5E8164] hover:underline">
            +44 7123 456 789
          </a>
        </p>
      </div>
    </section>
  );
}

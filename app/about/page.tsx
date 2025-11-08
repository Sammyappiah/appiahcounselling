import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src="/team.jpg"
        alt="Appiah Counselling Team"
        width={1200}
        height={600}
        className="rounded-2xl shadow-md object-cover w-full max-w-5xl mb-10"
      />
      <h1 className="font-serif text-[44px] md:text-[54px] font-semibold mb-4">About</h1>
      <div className="h-[3px] bg-[#D38B5D] mx-auto mb-6 rounded-full w-[8ch]" />
      <p className="text-[18px] text-[#333]/90 max-w-2xl">
        A calm, non-judgmental environment for self-discovery and growth.
        Every story is unique, and each journey toward wellbeing deserves compassion and respect.
      </p>
    </section>
  );
}

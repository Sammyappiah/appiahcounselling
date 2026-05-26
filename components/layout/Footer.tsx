import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0d] text-[#f3eee8]">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-[1.6rem] tracking-[-0.03em]">
              Appiah Counselling
            </h2>

            <p className="mt-4 max-w-md text-[14px] leading-[1.9] text-[#b9b0a8]">
              Calm, reflective therapy for individuals and couples seeking
              deeper emotional understanding.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.24em] text-[#b9b0a8]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/podcast">Podcast</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

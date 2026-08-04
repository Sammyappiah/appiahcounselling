import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0d]">
      <div className="mx-auto max-w-[1280px] w-full flex items-center justify-between">

        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Appiah Counselling"
            width={170}
            height={50}
            priority
            className="w-[145px] md:w-[170px] h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.24em] text-[#bfb8b0]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/podcast">Podcast</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </footer>
  );
}

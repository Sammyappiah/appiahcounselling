import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-sm py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Appiah Counselling Logo"
            width={320}
            height={100}
            className="object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center space-x-12 md:space-x-20 lg:space-x-28 text-[18px] md:text-[20px] font-medium tracking-wide">
          <Link href="/" className="text-[#111] hover:text-[#5E8164] transition-colors">Home</Link>
          <Link href="/about" className="text-[#111] hover:text-[#5E8164] transition-colors">About</Link>
          <Link href="/booking" className="text-[#111] hover:text-[#5E8164] transition-colors">Booking</Link>
          <Link href="/contact" className="text-[#111] hover:text-[#5E8164] transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

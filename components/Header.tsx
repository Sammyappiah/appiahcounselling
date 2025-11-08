"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-16">
        {/* Larger Logo */}
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

        {/* Well-spaced nav links */}
        <nav className="flex items-center space-x-12 md:space-x-20 lg:space-x-28 text-[18px] md:text-[20px] font-medium tracking-wide">
          <Link
            href="/"
            className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/booking"
            className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
          >
            Booking
          </Link>
          <Link
            href="/contact"
            className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

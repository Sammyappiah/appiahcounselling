"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${
        scrolled ? "bg-[#FCFAF7]/90 py-2" : "bg-[#FCFAF7]/95 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 transition-all duration-300">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Appiah Counselling Logo"
            width={scrolled ? 200 : 250}
            height={70}
            className="object-contain transition-all duration-500 ease-in-out"
            priority
          />
        </Link>

        <nav className="flex items-center gap-16 md:gap-24 text-[18px] md:text-[19px] font-medium tracking-wide">
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

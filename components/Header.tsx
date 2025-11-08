"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-[64px] md:h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Appiah Counselling Logo"
            width={180}
            height={40}
            className="h-10 w-auto object-contain md:h-11"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-14 lg:gap-20 text-[18px] lg:text-[20px] font-medium tracking-wide">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/booking", label: "Booking" },
            { href: "/contact", label: "Contact" },
          ].map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-[#111] no-underline hover:text-[#5E8164] transition-colors duration-300"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#E7E1D8] w-10 h-10"
        >
          <span className="block w-5 h-[2px] bg-[#111]" />
          <span className="block w-5 h-[2px] bg-[#111] mt-1.5" />
          <span className="block w-5 h-[2px] bg-[#111] mt-1.5" />
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-[#E7E1D8]/60 bg-[#FCFAF7]">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-[18px] font-medium">
            <Link onClick={() => setOpen(false)} href="/" className="no-underline text-[#111]">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/about" className="no-underline text-[#111]">
              About
            </Link>
            <Link onClick={() => setOpen(false)} href="/booking" className="no-underline text-[#111]">
              Booking
            </Link>
            <Link onClick={() => setOpen(false)} href="/contact" className="no-underline text-[#111]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

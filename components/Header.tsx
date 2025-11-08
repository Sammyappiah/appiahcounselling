// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-[64px] md:h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Appiah Counselling Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-14 lg:gap-20 text-[18px] lg:text-[20px] font-medium tracking-wide">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/booking">Booking</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>

        {/* Mobile button */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#E7E1D8] w-10 h-10"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-[2px] bg-[#111]"></span>
          <span className="block w-5 h-[2px] bg-[#111] mt-1.5"></span>
          <span className="block w-5 h-[2px] bg-[#111] mt-1.5"></span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#E7E1D8]/60 bg-[#FCFAF7]">
          <nav className="flex flex-col py-3 px-6 text-[18px] font-medium tracking-wide">
            <Link className="nav-link py-3" href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link className="nav-link py-3" href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link className="nav-link py-3" href="/booking" onClick={() => setOpen(false)}>Booking</Link>
            <Link className="nav-link py-3" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

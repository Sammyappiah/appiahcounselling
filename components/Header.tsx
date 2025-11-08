"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 h-[64px] md:h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          {/* logo scales a touch larger on desktop, stays compact on mobile */}
          <img
            src="/logo.png"
            alt="Appiah Counselling Logo"
            className="h-8 w-auto object-contain md:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-14 lg:gap-20 text-[18px] lg:text-[20px] font-medium tracking-wide">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/booking" className="nav-link">Booking</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#E7E1D8] w-10 h-10"
          onClick={() => setOpen(true)}
        >
          {/* simple hamburger icon */}
          <span className="block w-5 h-[2px] bg-[#111]" />
          <span className="block w-5 h-[2px] bg-[#111] mt-1.5" />
          <span className="block w-5 h-[2px] bg-[#111] mt-1.5" />
        </button>
      </div>

      {/* Mobile full-screen drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#FCFAF7]">
          <div className="mx-auto max-w-7xl px-5 pt-4 flex items-center justify-between h-[64px] border-b border-[#E7E1D8]/60">
            <img
              src="/logo.png"
              alt="Appiah Counselling Logo"
              className="h-8 w-auto object-contain"
            />
            <button
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-md border border-[#E7E1D8] w-10 h-10"
              onClick={() => setOpen(false)}
            >
              {/* “X” icon */}
              <span className="relative block w-5 h-5">
                <span className="absolute inset-0 rotate-45 origin-center block h-[2px] bg-[#111] top-[10px]" />
                <span className="absolute inset-0 -rotate-45 origin-center block h-[2px] bg-[#111] top-[10px]" />
              </span>
            </button>
          </div>

          <nav className="px-6 py-8 flex flex-col gap-6 text-[18px] font-medium">
            <Link href="/" className="mobile-link" onClick={closeMenu}>Home</Link>
            <Link href="/about" className="mobile-link" onClick={closeMenu}>About</Link>
            <Link href="/booking" className="mobile-link" onClick={closeMenu}>Booking</Link>
            <Link href="/contact" className="mobile-link" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

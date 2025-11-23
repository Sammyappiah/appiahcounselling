"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FCFAF7] shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={130}   // ↓ smaller, cleaner
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-10 text-[17px] font-medium">
          <Link href="/" className="hover:text-[#B87333]">Home</Link>
          <Link href="/about" className="hover:text-[#B87333]">About</Link>
          <Link href="/services" className="hover:text-[#B87333]">Services</Link>
          <Link href="/contact" className="hover:text-[#B87333]">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-2 py-1"
        >
          <div className="w-6 h-[2px] bg-slate-900 mb-1"></div>
          <div className="w-6 h-[2px] bg-slate-900 mb-1"></div>
          <div className="w-6 h-[2px] bg-slate-900"></div>
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#FCFAF7] shadow-inner px-6 pb-4 space-y-3 text-lg font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#faf7f2] border-b z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={165}     // ← slight increase from earlier
            height={50}
            className="h-auto w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-10 text-[17px] font-medium text-slate-800">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(true)}
        >
          <span className="block w-7 h-[3px] bg-slate-900 rounded"></span>
          <span className="block w-7 h-[3px] bg-slate-900 rounded"></span>
          <span className="block w-7 h-[3px] bg-slate-900 rounded"></span>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-50">
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl p-6 flex flex-col space-y-6 text-lg">

            {/* CLOSE BUTTON */}
            <button
              className="ml-auto mb-2"
              onClick={() => setOpen(false)}
            >
              <span className="block w-6 h-[3px] bg-slate-900 rotate-45 absolute"></span>
              <span className="block w-6 h-[3px] bg-slate-900 -rotate-45"></span>
            </button>

            {/* MOBILE NAV LINKS */}
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

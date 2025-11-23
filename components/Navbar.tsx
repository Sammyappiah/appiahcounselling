"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-[#FCFAF7]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO — BIG, CLEAR, RESPONSIVE */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling"
            width={260}      // ← BIGGER
            height={80}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-[18px] font-medium text-slate-900">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col text-lg gap-4 px-6 pb-6 font-medium text-slate-900">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

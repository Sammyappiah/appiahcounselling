"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#FBF9F6] border-b border-slate-200 fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={140} 
            height={70}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10 text-[18px] font-medium text-slate-800">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#FBF9F6] border-t border-slate-200 px-6 py-4 space-y-4 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

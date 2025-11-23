"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur border-b border-[#E7E1D8]/80">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={190}      // adjust here if you want slightly larger/smaller
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-800">
          <Link href="/" className="hover:text-[#B87333] transition-colors">
            Calm. Clarity. At your pace.
          </Link>
          <Link href="/about" className="hover:text-[#B87333] transition-colors">
            About me
          </Link>
          <Link href="/services" className="hover:text-[#B87333] transition-colors">
            Counselling services
          </Link>
          <Link href="/contact" className="hover:text-[#B87333] transition-colors">
            Get in touch
          </Link>
        </nav>

        {/* MOBILE BURGER */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#E0D6C8] px-3 py-2 text-sm font-medium text-slate-800"
          aria-label="Toggle navigation menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#FCFAF7] border-t border-[#E7E1D8]">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-[15px] font-medium text-slate-800">
            <Link
              href="/"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Calm. Clarity. At your pace.
            </Link>
            <Link
              href="/about"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              About me
            </Link>
            <Link
              href="/services"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Counselling services
            </Link>
            <Link
              href="/contact"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

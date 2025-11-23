"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60">
      {/* MAIN BAR */}
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center" aria-label="Appiah Counselling home">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={180}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-900">
          <Link
            href="/"
            className="hover:text-[#B87333] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#B87333] transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-[#B87333] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#B87333] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white/70 px-2.5 py-2 shadow-sm"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5 text-slate-800" /> : <Menu className="h-5 w-5 text-slate-800" />}
        </button>
      </div>

      {/* MOBILE NAV PANEL */}
      {open && (
        <div className="md:hidden border-t border-[#E7E1D8] bg-[#FCFAF7]/98">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-base font-medium text-slate-900">
            <Link
              href="/"
              className="py-1 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-1 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="py-1 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="py-1 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

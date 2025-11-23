"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E7E1D8] bg-[#FCFAF7]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10 md:py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={220}          // balanced size
            height={70}
            className="h-10 w-auto md:h-14" // smaller on mobile, medium on desktop
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm md:text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm md:text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm md:text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm md:text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex items-center justify-center rounded-md p-2 text-slate-900 hover:bg-[#F0E6DA] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      {open && (
        <nav className="border-t border-[#E7E1D8] bg-[#FCFAF7] px-6 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="py-2 text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="py-2 text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="py-2 text-base font-medium text-slate-900 hover:text-[#B87333] transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

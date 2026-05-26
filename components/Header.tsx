"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-[#262626]">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-[88px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">

          <Image
            src="/logo.png"
            alt="Appiah Counselling"
            width={520}
            height={160}
            priority
            className="w-auto h-[88px] md:h-[110px]"
          />

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">

          <Link href="/" className="text-[0.78rem] uppercase tracking-[0.18em] text-[#d6d0c7] hover:text-white transition">
            Home
          </Link>

          <Link href="/about" className="text-[0.78rem] uppercase tracking-[0.18em] text-[#d6d0c7] hover:text-white transition">
            About
          </Link>

          <Link href="/services" className="text-[0.78rem] uppercase tracking-[0.18em] text-[#d6d0c7] hover:text-white transition">
            Services
          </Link>

          <Link href="/podcast" className="text-[0.78rem] uppercase tracking-[0.18em] text-[#d6d0c7] hover:text-white transition">
            Podcast
          </Link>

          <Link href="/contact" className="text-[0.78rem] uppercase tracking-[0.18em] text-[#d6d0c7] hover:text-white transition">
            Contact
          </Link>

        </nav>

        {/* MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#262626] px-6 py-8 space-y-6">

          <Link href="/" className="block text-[#d6d0c7] uppercase tracking-[0.18em] text-sm">
            Home
          </Link>

          <Link href="/about" className="block text-[#d6d0c7] uppercase tracking-[0.18em] text-sm">
            About
          </Link>

          <Link href="/services" className="block text-[#d6d0c7] uppercase tracking-[0.18em] text-sm">
            Services
          </Link>

          <Link href="/podcast" className="block text-[#d6d0c7] uppercase tracking-[0.18em] text-sm">
            Podcast
          </Link>

          <Link href="/contact" className="block text-[#d6d0c7] uppercase tracking-[0.18em] text-sm">
            Contact
          </Link>

        </div>
      )}

    </header>
  );
}

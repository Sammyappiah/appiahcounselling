"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0c0d]">
      <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between px-6 md:px-8">

        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Appiah Counselling"
            width={220}
            height={70}
            priority
            className="
              w-[180px]
              md:w-[220px]
              h-auto
              object-contain
              select-none
            "
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.28em] text-[#d7d0c8] transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-[2px] w-7 bg-[#d7d0c8]" />
          <span className="h-[2px] w-7 bg-[#d7d0c8]" />
        </button>

      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0c0c0d] md:hidden">
          <nav className="flex flex-col px-6 py-6">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-[11px] uppercase tracking-[0.24em] text-[#d7d0c8]"
              >
                {link.label}
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}

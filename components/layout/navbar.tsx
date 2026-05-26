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
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="relative block w-[105px] md:w-[125px]">
          <Image
            src="/images/logo.png"
            alt="Appiah Counselling"
            width={125}
            height={42}
            className="h-auto w-full object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
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
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-[1px] w-6 bg-[#d7d0c8]" />
          <span className="h-[1px] w-6 bg-[#d7d0c8]" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0c0c0d] md:hidden">
          <nav className="flex flex-col px-5 py-6">
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

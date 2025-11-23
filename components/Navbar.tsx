"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#FAF8F3] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.jpg"
            alt="Appiah Counselling Logo"
            width={120}    // ★ PERFECT SIZE (smaller but readable)
            height={120}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[17px] font-medium transition ${
                pathname === link.href
                  ? "text-[#1C1C1C]"
                  : "text-[#3E4A59] hover:text-[#1C1C1C]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}

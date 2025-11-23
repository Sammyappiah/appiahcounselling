"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm md:text-base ${
        pathname === href ? "font-semibold text-slate-900" : "text-slate-600"
      } hover:text-slate-900 transition`}
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — BIGGER LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Appiah Counselling"
            width={140}     // ⬅️ INCREASED
            height={40}     // ⬅️ INCREASED
            className="object-contain"
            priority
          />
        </Link>

        {/* RIGHT — CLEAN NAV MENU */}
        <nav className="flex items-center space-x-8">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/services", "Services")}
          {navLink("/contact", "Contact")}
        </nav>
      </div>
    </header>
  );
}

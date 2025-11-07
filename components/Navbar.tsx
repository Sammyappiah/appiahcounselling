// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FDFBF9]/80">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between h-[120px]">
          {/* Logo */}
          <Link href="/" aria-label="Appiah Counselling — Home">
            <img
              src="/logo.png"
              alt="Appiah Counselling Logo"
              width={340}
              height={90}
              className="w-[300px] h-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="flex items-center justify-end gap-[80px] tracking-wide -translate-x-[220px]"
          >
            <Link
              href="/"
              className="text-[22px] font-semibold relative transition-all duration-300 text-[#111111] hover:text-[#A04B2E]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[22px] font-semibold relative transition-all duration-300 text-[#111111] hover:text-[#A04B2E]"
            >
              About
            </Link>
            <Link
              href="/booking"
              className="text-[22px] font-semibold relative transition-all duration-300 text-[#111111] hover:text-[#A04B2E]"
            >
              Booking
            </Link>
            <Link
              href="/contact"
              className="text-[22px] font-semibold relative transition-all duration-300 text-[#111111] hover:text-[#A04B2E]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="h-[4px] bg-gradient-to-r from-[#B85B35] to-[#E3C9B0]"></div>
    </header>
  );
}

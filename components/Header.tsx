import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E9E2D9] shadow-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Appiah Counselling Logo"
            width={220}
            height={70}
            className="object-contain w-[180px] md:w-[220px] h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="site-nav flex items-center text-[18px] md:text-[20px] font-medium tracking-[0.08em] space-x-10 md:space-x-14 lg:space-x-20">
          <Link
            href="/"
            className="relative hover:text-[#B85B35] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#B85B35] hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="relative hover:text-[#B85B35] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#B85B35] hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </Link>

          <Link
            href="/booking"
            className="relative hover:text-[#B85B35] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#B85B35] hover:after:w-full after:transition-all after:duration-300"
          >
            Booking
          </Link>

          <Link
            href="/contact"
            className="relative hover:text-[#B85B35] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#B85B35] hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

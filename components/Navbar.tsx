"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Booking", href: "/booking" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FDFBF9]/80">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex items-center justify-between h-[120px]">
          <a href="/" aria-label="Appiah Counselling — Home">
            <img
              alt="Appiah Counselling Logo"
              width={340}
              height={90}
              className="w-[340px] h-auto object-contain"
              src="/logo.png"
            />
          </a>

          <nav aria-label="Primary" className="flex items-center justify-center gap-[70px] tracking-wide">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[22px] font-semibold relative transition-all duration-300 ${
                    active
                      ? "text-[#B85B35] border-b-2 border-[#B85B35]"
                      : "text-[#111111] hover:text-[#A04B2E]"
                  } pb-[2px]`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="h-[4px] bg-gradient-to-r from-[#B85B35] to-[#E3C9B0]" />
    </header>
  );
}

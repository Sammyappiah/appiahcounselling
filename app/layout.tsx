import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Professional, compassionate therapy to support emotional balance and self-awareness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#E9E2D9]/80 shadow-sm">
          <div className="mx-auto max-w-7xl px-6 md:px-10 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-white/90 border border-[#E7E1D8] rounded-xl px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <img
                  src="/logo.png"
                  alt="Appiah Counselling Logo"
                  width="220"
                  height="80"
                  className="object-contain w-[200px] md:w-[220px] h-auto opacity-95"
                />
              </div>
            </Link>

            {/* Navigation */}
            <nav className="site-nav flex items-center text-[18px] md:text-[20px] font-medium gap-10 md:gap-16 lg:gap-20 text-[#111]">
              <Link href="/" className="hover:text-[#5E8164] transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#5E8164] transition-colors duration-300">
                About
              </Link>
              <Link href="/booking" className="hover:text-[#5E8164] transition-colors duration-300">
                Booking
              </Link>
              <Link href="/contact" className="hover:text-[#5E8164] transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="w-full text-center py-6 border-t border-[#E7E1D8]/60 text-sm text-[#444] bg-[#FCFAF7]">
          © {new Date().getFullYear()} Appiah Counselling. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Professional, compassionate therapy to support emotional balance and self-awareness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#111] font-serif">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E7E1D8]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Appiah Counselling Logo"
                width={180}
                height={60}
                className="h-auto w-[180px] md:w-[200px] object-contain"
                priority
              />
            </Link>

            <nav className="flex items-center gap-8 md:gap-14 text-[17px] md:text-[18px] font-medium">
              <Link
                href="/"
                className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/booking"
                className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
              >
                Booking
              </Link>
              <Link
                href="/contact"
                className="text-[#111] hover:text-[#5E8164] transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="w-full text-center py-6 border-t border-[#E7E1D8]/60 text-sm text-[#444] bg-[#FCFAF7]">
          © 2025 Appiah Counselling. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Appiah Counselling",
  description: "Professional therapy for individuals and couples.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans text-[#2E2E2E] bg-[#FAFAFA]">
        {/* Navbar */}
        <nav className="w-full border-b border-[#E4DDD5] bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Appiah Counselling Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            <div className="space-x-8 text-sm font-medium text-[#2E2E2E]">
              <Link href="/" className="hover:text-[#E85C0D] transition">Home</Link>
              <Link href="/about" className="hover:text-[#E85C0D] transition">About</Link>
              <Link href="/booking" className="hover:text-[#E85C0D] transition">Booking</Link>
              <Link href="/contact" className="hover:text-[#E85C0D] transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full border-t border-[#E4DDD5] bg-white mt-12">
          <div className="max-w-6xl mx-auto text-center py-6 text-sm text-[#B6B6B6]">
            © {new Date().getFullYear()} Appiah Counselling — All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}

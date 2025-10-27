import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Appiah Counselling",
  description: "Professional therapy for individuals and couples.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-text">
        {/* Navbar */}
        <nav className="w-full border-b border-sand bg-white/70 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-light text-accent hover:text-terracotta">
              Appiah Counselling
            </Link>
            <div className="space-x-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full border-t border-sand bg-white mt-10">
          <div className="max-w-6xl mx-auto text-center py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Appiah Counselling — All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}

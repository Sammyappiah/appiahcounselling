import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Appiah Counselling",
  description: "Professional therapy for individuals and couples.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-text font-sans">
        {/* Navbar */}
        <nav className="w-full border-b border-sand bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Appiah Counselling Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-accent transition">Home</Link>
              <Link href="/about" className="hover:text-accent transition">About</Link>
              <Link href="/booking" className="hover:text-accent transition">Booking</Link>
              <Link href="/contact" className="hover:text-accent transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full border-t border-sand bg-white mt-10">
          <div className="max-w-6xl mx-auto text-center py-6 text-sm text-softgray">
            © {new Date().getFullYear()} Appiah Counselling — All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}

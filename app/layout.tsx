// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://appiahcounselling.co.uk"),
  title: {
    default: "Appiah Counselling – Individual & Couples Counselling",
    template: "%s | Appiah Counselling",
  },
  description:
    "Online counselling for individuals and couples experiencing anxiety, relationship difficulties, stress and emotional overwhelm.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://appiahcounselling.co.uk",
    siteName: "Appiah Counselling",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

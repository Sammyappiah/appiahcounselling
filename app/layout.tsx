import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://appiahcounselling.com'),

  title: {
    default: 'Appiah Counselling',
    template: '%s | Appiah Counselling',
  },

  description:
    'Professional counselling and psychotherapy services for individuals and couples.',

  alternates: {
    canonical: '/',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#F8F6F2] text-[#1A1A1A]`}
      >
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx

import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Appiah Counselling",
  description:
    "Therapy that gets to the root — not just the symptoms.",
  metadataBase: new URL("https://appiahcounselling.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-[#F8F6F2] text-[#1A1A1A] font-sans">
        {children}
      </body>
    </html>
  );
}

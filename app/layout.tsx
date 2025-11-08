// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Professional, compassionate therapy to support emotional balance and self-awareness.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#111]">
        {/* Sticky header */}
        <Header />
        {/* Give every page breathing room below header so titles aren’t hidden */}
        <main className="flex-grow pt-24 md:pt-28">{children}</main>
        <footer className="w-full text-center py-6 border-t border-[#E7E1D8]/60 text-sm text-[#444]">
          © {new Date().getFullYear()} Appiah Counselling. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

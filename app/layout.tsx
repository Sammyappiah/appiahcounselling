import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appiah Counselling",
  description: "Professional therapy for individuals and couples.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF9F7] text-[#2E2E2E] antialiased">
        {children}
      </body>
    </html>
  );
}

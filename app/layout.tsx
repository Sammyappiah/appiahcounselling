import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Professional, compassionate therapy to support emotional balance and self-awareness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#111] font-[Georgia]">
        {/* Fixed Header */}
        <Header />

        {/* Increased padding so titles (Welcome, About, etc.) are fully visible */}
        <main className="flex-grow pt-48 md:pt-56">{children}</main>

        <footer className="w-full text-center py-6 border-t border-[#E7E1D8]/60 text-sm text-[#444] bg-[#FCFAF7]">
          © {new Date().getFullYear()} Appiah Counselling. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

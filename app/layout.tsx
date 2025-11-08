import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Professional, compassionate therapy to support emotional balance and self-awareness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#111] font-[Georgia]">
        {/* Fixed header */}
        <Header />

        {/* Main section with spacing so titles are visible */}
        <main className="flex-grow pt-[180px] flex flex-col items-center justify-center text-center">
          {children}
        </main>

        {/* Footer lifted so no scroll */}
        <footer className="w-full text-center py-6 border-t border-[#E7E1D8]/60 text-sm text-[#444] bg-[#FCFAF7] fixed bottom-0 left-0">
          © {new Date().getFullYear()} Appiah Counselling. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

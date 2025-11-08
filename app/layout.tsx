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
        {/* Fixed Header */}
        <Header />

        {/* Ensure page titles like “Welcome” aren’t hidden */}
        <main className="flex-grow pt-56 md:pt-64">{children}</main>

        {/* Footer */}
        <footer className="w-full text-center py-6 border-t border-[#E7E1D8]/60 text-sm text-[#444] bg-[#FCFAF7]">
          © {new Date().getFullYear()} Appiah Counselling. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

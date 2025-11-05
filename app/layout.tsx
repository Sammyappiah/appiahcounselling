import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Appiah Counselling",
  description: "Professional therapy for individuals and couples.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF9] text-[#111111] font-sans">
        {/* Header */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Global Footer */}
        <footer className="border-t border-[#E2D3C2] bg-[#F6F1EB] text-[#3B2E20] text-center py-10 mt-20">
          <div className="h-[3px] w-full bg-[#B85B35] mb-6" />
          © 2025 Appiah Counselling — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}

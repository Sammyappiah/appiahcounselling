import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Appiah Counselling — Here for Your Wellbeing and Growth",
  description:
    "Professional, compassionate therapy to support emotional balance and self-awareness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#111] font-[Georgia]">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-6 md:px-12 pt-40 md:pt-44">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Appiah Counselling",
  description: "Therapy for people who look fine on the outside",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} font-sans bg-[#f6f4f1]`}>
        {children}
      </body>
    </html>
  );
}

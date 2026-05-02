import "./globals.css";

export const metadata = {
  title: "Appiah Counselling",
  description: "Where things that should be fine get unpacked.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f6f4f1] text-black antialiased">
        {children}
      </body>
    </html>
  );
}

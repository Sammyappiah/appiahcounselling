// components/ThemeProvider.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-lg bg-brand-teal text-white shadow-lg hover:bg-brand-orange transition"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
      {children}
    </>
  );
}

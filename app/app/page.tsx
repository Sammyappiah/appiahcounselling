"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#2E2E2E]">
      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center flex-grow text-center px-6 py-24 bg-gradient-to-b from-[#F9F7F3] to-[#F2EEE9]">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Appiah Counselling Logo"
            width={220}
            height={70}
            className="mx-auto"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
          Professional Counselling & Therapy
        </h1>
        <p className="text-lg md:text-xl text-[#4B4B4B] leading-relaxed max-w-2xl mx-auto mb-10">
          Providing a confidential, compassionate space to explore challenges,
          restore balance, and find clarity.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/about"
            className="bg-[#B85B35] hover:bg-[#9C4D2C] text-white px-8 py-3 rounded-full shadow-md transition"
          >
            Learn More
          </Link>
          <Link
            href="/booking"
            className="border border-[#B85B35] text-[#B85B35] hover:bg-[#EDE8E3] px-8 py-3 rounded-full transition"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#E4DDD5] bg-white mt-auto">
        <div className="max-w-6xl mx-auto text-center py-6 text-sm text-[#777]">
          © 2023 Appiah Counselling — All Rights Reserved
        </div>
      </footer>
    </main>
  );
}

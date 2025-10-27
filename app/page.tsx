"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-24 bg-[#FAFAFA]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-light mb-6 text-[#2E2E2E]"
      >
        Appiah Counselling
      </motion.h1>
      <p className="text-lg md:text-xl text-[#555555] max-w-2xl mb-10 leading-relaxed">
        Professional therapy for individuals and couples.<br />
        A calm, safe space for clarity, growth, and connection.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/booking"
          className="bg-[#E85C0D] hover:bg-[#C24A09] text-white px-8 py-3 rounded-full shadow-md transition"
        >
          Book a Session
        </Link>
        <Link
          href="/about"
          className="border border-[#E85C0D] text-[#E85C0D] hover:bg-[#FFF2EC] px-8 py-3 rounded-full transition"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-light mb-6 tracking-tight"
      >
        Appiah Counselling
      </motion.h1>
      <p className="text-lg text-gray-600 mb-8">Professional therapy for individuals and couples.</p>
      <div className="flex space-x-6">
        <Link href="/booking" className="px-6 py-3 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition">
          Book a Session
        </Link>
        <Link href="/about" className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition">
          Learn More
        </Link>
      </div>
    </main>
  );
}

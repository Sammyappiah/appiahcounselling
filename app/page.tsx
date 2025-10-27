"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-20 bg-background">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-light mb-6 text-accent"
      >
        A Calm Space for Growth & Healing
      </motion.h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Compassionate counselling for individuals and couples.  
        Build clarity, emotional resilience, and connection.
      </p>
      <div className="flex space-x-4">
        <Link href="/booking" className="bg-accent text-white hover:bg-terracotta px-8 py-3 rounded-full shadow">
          Book a Session
        </Link>
        <Link href="/about" className="border border-accent text-accent hover:bg-sand/40 px-8 py-3 rounded-full">
          Learn More
        </Link>
      </div>
    </main>
  );
}

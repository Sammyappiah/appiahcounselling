"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-24 bg-background">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-light mb-6 text-text"
      >
        Appiah Counselling
      </motion.h1>
      <p className="text-lg text-graylight max-w-2xl mb-8">
        Professional therapy for individuals and couples.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/booking"
          className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full shadow transition"
        >
          Book a Session
        </Link>
        <Link
          href="/about"
          className="border border-accent text-accent hover:bg-sand/50 px-8 py-3 rounded-full transition"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
}

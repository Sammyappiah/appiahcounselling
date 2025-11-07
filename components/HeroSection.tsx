"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="text-center pt-24 md:pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="font-serif text-[44px] md:text-[58px] font-semibold text-[#111] mb-4">
          {title}
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#333] opacity-90 leading-relaxed max-w-[760px] mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}

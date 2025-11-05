"use client";

import Link from "next/link";

export default function Confirmation() {
  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen font-sans text-center">
      {/* Confirmation Hero */}
      <section className="pt-[160px] pb-[120px] px-6 fade-in">
        <h1 className="text-[48px] mb-6 text-[#120C08] font-serif font-semibold">
          Booking Confirmed
        </h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mb-10 rounded-full" />
        <p className="max-w-[650px] mx-auto text-[20px] leading-[1.8] text-[#181818]">
          Thank you for booking your session. You’ll receive an email confirmation shortly.
        </p>
      </section>

      {/* Illustration */}
      <section className="flex justify-center pb-[140px] fade-up">
        <div className="max-w-[700px] bg-white/70 shadow-lg rounded-3xl p-10">
          <img
            src="/accessible.jpg"
            alt="Counselling session confirmed"
            className="w-full h-[320px] object-cover object-center rounded-2xl mb-8"
          />
          <p className="text-[18px] text-[#3B2E20] mb-8">
            We look forward to supporting you on your journey toward clarity and wellbeing.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#B85B35] text-white px-8 py-3 rounded-lg text-[16px] font-semibold hover:bg-[#9E4C2B] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.2s ease-out forwards;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

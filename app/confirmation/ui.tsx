"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ConfirmationClient() {
  const p = useSearchParams();
  const router = useRouter();

  const sessionType = p.get("sessionType") ?? "";
  const amount = p.get("amount") ?? "";
  const date = p.get("date") ?? "";
  const time = p.get("time") ?? "";

  return (
    <main className="bg-[#FDFBF9] text-[#111] min-h-screen">
      <section className="text-center pt-[140px] pb-[80px] px-6">
        <h1 className="text-[44px] md:text-[54px] font-serif font-semibold">Booking Confirmed</h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mt-4 rounded-full" />
        <p className="mt-8 text-[18px] md:text-[20px] text-[#333]">
          Thank you — your {sessionType.toLowerCase()} session is booked for <strong>{date}</strong> at{" "}
          <strong>{time}</strong>. Total paid: <strong>£{amount}</strong>.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-10 px-6 py-3 rounded-lg bg-[#5E8164] hover:bg-[#47614D] text-white"
        >
          Back to Home
        </button>
      </section>
    </main>
  );
}

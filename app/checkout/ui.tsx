"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

export default function CheckoutClient() {
  const params = useSearchParams();
  const router = useRouter();

  const sessionType = params.get("sessionType") ?? "Individual";
  const amount = Number(params.get("amount") ?? "50");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Set today's GMT date as default when page loads
  useEffect(() => {
    const now = new Date();
    const utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    const today = utcDate.toISOString().split("T")[0];
    setDate(today);
  }, []);

  // Ensure selection triggers properly on every click
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const canPay = useMemo(() => Boolean(date && time), [date, time]);

  const handlePay = async () => {
    if (!canPay) return;
    const res = await fetch("/api/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionType, amount, date, time }),
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert("Unable to start checkout.");
  };

  return (
    <main className="bg-[#FDFBF9] text-[#111] min-h-screen font-sans">
      <section className="text-center pt-[140px] pb-[60px] px-6">
        <h1 className="text-[44px] md:text-[54px] font-serif font-semibold">Checkout</h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mt-4 rounded-full" />
      </section>

      <section className="max-w-xl mx-auto bg-white border border-[#E7E1D8] rounded-2xl shadow-sm p-8">
        <div className="grid gap-3 text-[18px] mb-6">
          <div className="flex items-center justify-between">
            <span>Session:</span>
            <strong>{sessionType}</strong>
          </div>
          <div className="flex items-center justify-between">
            <span>Total:</span>
            <strong>£{amount}</strong>
          </div>
        </div>

        <div className="grid gap-5">
          {/* Date */}
          <div>
            <label className="block mb-2 text-[16px] text-[#444]">Choose date (GMT)</label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-lg border border-[#E7E1D8] px-3 py-2 bg-white cursor-pointer"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 text-[16px] text-[#444]">Choose time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-lg border border-[#E7E1D8] px-3 py-2 bg-white cursor-pointer"
            >
              <option value="">Select time slot (GMT)</option>
              {[
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Pay button */}
          <button
            onClick={handlePay}
            disabled={!canPay}
            className={`w-full mt-4 py-3 rounded-lg text-[18px] transition ${
              canPay
                ? "bg-[#5E8164] hover:bg-[#47614D] text-white"
                : "bg-[#C8CFC8] text-white cursor-not-allowed"
            }`}
          >
            Pay Securely with Card
          </button>

          <button
            onClick={() => router.push("/booking")}
            className="w-full py-3 rounded-lg text-[16px] border border-[#E7E1D8] bg-white mt-2"
          >
            Back to Booking
          </button>
        </div>
      </section>
    </main>
  );
}

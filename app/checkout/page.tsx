"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function CheckoutInner() {
  const sp = useSearchParams();
  const router = useRouter();

  const sessionType = (sp.get("type") === "couples" ? "couples" : "individual") as
    | "individual"
    | "couples";
  const amount = useMemo(() => {
    const a = Number(sp.get("amount"));
    return Number.isFinite(a) && a > 0 ? a : sessionType === "couples" ? 6500 : 5000;
  }, [sp, sessionType]);

  const priceLabel = `£${(amount / 100).toFixed(0)}`;

  // date/time state…
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("09:00");
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionType,
          amount,
          date,
          time,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to start checkout.");
      // redirect to stripe
      window.location.href = json.url;
    } catch (e: any) {
      alert(`Checkout error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#111] flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-2xl rounded-2xl border border-[#E6D8CA] bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm text-[#666]">Session:</p>
            <p className="text-lg font-semibold capitalize">
              {sessionType === "couples" ? "Couples" : "Individual"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#666]">Total:</p>
            <p className="text-lg font-semibold">{priceLabel}</p>
          </div>
        </div>

        {/* Date */}
        <label className="block text-sm font-medium mb-2">Choose date (GMT)</label>
        <input
          type="date"
          className="w-full rounded-lg border border-[#E6D8CA] px-4 py-3 mb-5"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Time */}
        <label className="block text-sm font-medium mb-2">Choose time (GMT)</label>
        <select
          className="w-full rounded-lg border border-[#E6D8CA] px-4 py-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {[
            "08:00","09:00","10:00","11:00","12:00",
            "13:00","14:00","15:00","16:00","17:00","18:00","19:00",
          ].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <button
          onClick={handleCheckout}
          disabled={loading || !date || !time}
          className={`w-full mt-8 py-3 rounded-lg text-[18px] transition ${
            loading || !date || !time
              ? "bg-[#C8CFC8] cursor-not-allowed text-white"
              : "bg-[#5E8164] hover:bg-[#47614D] text-white"
          }`}
        >
          {loading ? "Processing…" : "Pay Securely with Card"}
        </button>

        <a
          href="/booking"
          className="mt-4 block text-center rounded-lg border border-[#E6D8CA] py-3 text-[#333]"
        >
          Back to Booking
        </a>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-screen flex items-center justify-center bg-[#FDFBF9]"><p>Loading checkout…</p></main>}>
      <CheckoutInner />
    </Suspense>
  );
}
